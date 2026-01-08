import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./ChartView.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartView({ chart }) {
  const data = {
    labels: chart.labels,
    datasets: [
      {
        label: chart.title,
        data: chart.values,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(99, 102, 241, 0.8)");
          gradient.addColorStop(1, "rgba(99, 102, 241, 0.2)");
          return gradient;
        },
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#f8fafc",
        bodyColor: "#f8fafc",
        padding: 10,
        cornerRadius: 4,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>{chart.title}</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
