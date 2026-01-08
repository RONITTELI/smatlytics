from flask import Blueprint, request, jsonify, send_from_directory
import pandas as pd
import numpy as np
import os
from .schema_detector import detect_schema
from .dashboard_config import get_dashboard_config

data_clean = Blueprint("data_clean", __name__)

UPLOAD_FOLDER = "uploads"
CLEAN_FOLDER = "cleaned"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(CLEAN_FOLDER, exist_ok=True)


@data_clean.route("/upload-clean", methods=["POST"])
def upload_and_clean():
    # -----------------------------
    # 1. File upload
    # -----------------------------
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    # -----------------------------
    # 2. Read file
    # -----------------------------
    try:
        if file.filename.endswith(".csv"):
            df = pd.read_csv(filepath)
        elif file.filename.endswith((".xls", ".xlsx")):
            df = pd.read_excel(filepath)
        else:
            return jsonify({"error": "Unsupported file format"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    # -----------------------------
    # 3. DATA CLEANING
    # -----------------------------

    # Remove duplicate rows
    df = df.drop_duplicates()

    # Remove completely empty rows
    df = df.dropna(how="all")

    # Standardize column names
    df.columns = (
        df.columns
        .str.lower()
        .str.strip()
        .str.replace(" ", "_")
    )

    # Convert numeric columns
    for col in df.columns:
        df[col] = pd.to_numeric(df[col], errors="ignore")

    # Fill missing numeric values with median
    numeric_cols = df.select_dtypes(include=np.number).columns
    df[numeric_cols] = df[numeric_cols].fillna(
        df[numeric_cols].median()
    )

    # Convert date columns ONLY if name suggests date
    for col in df.columns:
        if "date" in col or "time" in col:
            df[col] = pd.to_datetime(df[col], errors="coerce")

    # -----------------------------
    # 4. HANDLE OUTLIERS (SAFE WAY)
    # -----------------------------
    for col in numeric_cols:
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1

        lower = Q1 - 1.5 * IQR
        upper = Q3 + 1.5 * IQR

        # Clip instead of deleting rows
        df[col] = np.clip(df[col], lower, upper)

    # -----------------------------
    # 5. Save cleaned file
    # -----------------------------
    clean_filename = "cleaned_data.xlsx"
    clean_path = os.path.join(CLEAN_FOLDER, clean_filename)
    df.to_excel(clean_path, index=False)

    # -----------------------------
    # 6. Detect schema & dashboard
    # -----------------------------
    schema_type = detect_schema(df.columns)
    dashboard_config = get_dashboard_config(schema_type)

    # -----------------------------
    # 7. Return JSON response
    # -----------------------------
    return jsonify({
        "message": "File cleaned successfully",
        "schema": schema_type,
        "rows": len(df),
        "columns": df.columns.tolist(),
        "dashboard": dashboard_config,
        "download_url": f"/cleaned/{clean_filename}"
    })


# -----------------------------
# 8. DOWNLOAD ROUTE
# -----------------------------
@data_clean.route("/cleaned/<filename>")
def download_cleaned_file(filename):
    return send_from_directory(
        CLEAN_FOLDER,
        filename,
        as_attachment=True
    )
