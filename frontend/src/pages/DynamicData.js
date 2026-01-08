import React, { useState } from "react";
import { uploadAndClean } from "../services/api";

function DynamicData() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      const response = await uploadAndClean(file);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "cleaned_data.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      setError(err.message || "Failed to upload or clean file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="data-clean">
      <div className="data-clean__card">
        <h2 className="data-clean__title">
          📤 Raw Data Upload & Auto Cleaning
        </h2>

        <div className="data-clean__file">
          <input
            id="data-file-input"
            className="data-clean__file-input"
            type="file"
            accept=".csv,.xlsx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor="data-file-input" className="data-clean__file-button">
            📁 {file ? "Change file" : "Choose file"}
          </label>

          <div className="data-clean__filename">
            {file ? file.name : "Accepted: .csv, .xlsx"}
          </div>
        </div>

        <button
          className="data-clean__button"
          onClick={handleUpload}
          disabled={!file || loading}
        >
          {loading ? "Cleaning..." : "Upload & Clean"}
        </button>

        {error && <div className="data-clean__error">❌ {error}</div>}
      </div>
    </div>
  );
}

export default DynamicData;
