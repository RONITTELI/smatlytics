import { useState } from "react";
import api from "../services/api";
import "./CSVUpload.css";

export default function CSVUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/dataset/upload", formData);
      onUpload(res.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="csv-upload-container">
      <label htmlFor="csv-upload-input" className="csv-upload-label">
        {file ? (
          <span>{file.name}</span>
        ) : (
          <span>Click to select a CSV file</span>
        )}
      </label>
      <input
        id="csv-upload-input"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="csv-upload-input"
      />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="csv-upload-button"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>
    </div>
  );
}
