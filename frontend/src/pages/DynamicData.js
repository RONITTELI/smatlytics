import React, { useState } from "react";
import { uploadAndClean } from "../services/api";
import "./data-clean.css";

function DynamicData() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setSuccess(false);

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
      setSuccess(true);
      setFile(null);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || "Failed to upload or clean file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="data-clean-page">
      <div className="data-clean-container">
        <div className="data-clean-header">
          <h1>📤 Raw Data Cleaning</h1>
          <p>Upload your messy CSV or Excel files and get cleaned data automatically</p>
        </div>

        <div className="data-clean-card">
          <div className="upload-zone">
            <input
              id="file-input"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={(e) => setFile(e.target.files[0])}
              disabled={loading}
              className="file-input"
            />
            <label htmlFor="file-input" className="upload-label">
              {file ? (
                <>
                  <span className="upload-icon">✓</span>
                  <span className="filename">{file.name}</span>
                  <span className="change-text">Click to change</span>
                </>
              ) : (
                <>
                  <span className="upload-icon">📁</span>
                  <span className="upload-text">Choose a file</span>
                  <span className="upload-hint">CSV or Excel (.xlsx, .xls)</span>
                </>
              )}
            </label>
          </div>

          {error && (
            <div className="alert alert-error">
              <span>❌</span>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <span>✓</span>
              <span>File cleaned and downloaded successfully!</span>
            </div>
          )}

          <button
            className="upload-button"
            onClick={handleUpload}
            disabled={!file || loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Cleaning...
              </>
            ) : (
              <>
                <span>⚡</span>
                Upload & Clean
              </>
            )}
          </button>

          <div className="features-list">
            <h3>What we do:</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <span>Remove duplicates</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📅</span>
                <span>Format dates</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔢</span>
                <span>Standardize numbers</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚙️</span>
                <span>Fill missing values</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Remove outliers</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Clean headers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicData;
