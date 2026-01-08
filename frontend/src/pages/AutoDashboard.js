import React from "react";
import ChartView from "../components/ChartView";

export default function AutoDashboard() {
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
    <div style={{ padding: "30px", background: "#f4f6f8", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        📊 Auto Generated Dashboard
      </h1>

      {charts.map((chart, index) => (
        <ChartView key={index} chart={chart} />
      ))}
    </div>
  );
}
