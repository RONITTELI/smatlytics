import React, { useState } from "react";
import ChartView from "../components/ChartView";
import "./auto-dashboard.css";

export default function AutoDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const charts = [
    {
      title: "Employees by Department",
      labels: ["HR", "IT", "Sales"],
      values: [10, 25, 15],
    },
    {
      title: "Average Salary by Department",
      labels: ["HR", "IT", "Sales"],
      values: [30000, 50000, 40000],
    },
  ];

  return (
    <div className="auto-dashboard-page">
      <div className="dashboard-header">
        <h1>📊 Auto Generated Dashboard</h1>
        <p>AI-powered insights from your data</p>
      </div>

      <div className="dashboard-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
        </div>

        <div className="charts-grid">
          {charts.map((chart, index) => (
            <div key={index} className="chart-wrapper">
              <ChartView chart={chart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
