import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./analytics-hub.css";

function AnalyticsHub() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const modules = [
    {
      title: "Dataset Generator",
      desc: "Practice with sample datasets",
      path: "/dashboard",
      icon: "📦",
      status: "Active",
      updated: "2h ago",
      stats: { items: 12, views: "1.2k" },
    },
    {
      title: "Raw Data Cleaning",
      desc: "Upload CSV/Excel and clean data",
      path: "/data-clean",
      icon: "📤",
      status: "Active",
      updated: "1d ago",
      stats: { items: 5, views: "860" },
    },
    {
      title: "Auto Dashboard Generator",
      desc: "AI-powered dashboard creation",
      path: "/auto-dashboard",
      icon: "📈",
      status: "Active",
      updated: "30m ago",
      stats: { items: 22, views: "2.3k" },
    },
    {
      title: "Anomaly Detection",
      desc: "Spot unusual patterns automatically",
      path: "/anomaly",
      icon: "⚠️",
      status: "Preview",
      updated: "3h ago",
      stats: { items: 3, views: "210" },
    },
    {
      title: "Time Series Explorer",
      desc: "Interactive time series viewer",
      path: "/timeseries",
      icon: "⏱️",
      status: "Active",
      updated: "5h ago",
      stats: { items: 8, views: "540" },
    },
    {
      title: "Model Manager",
      desc: "Train and deploy ML models",
      path: "/models",
      icon: "🤖",
      status: "Inactive",
      updated: "12h ago",
      stats: { items: 2, views: "1.1k" },
    },
    {
      title: "Report Builder",
      desc: "Design and schedule PDF reports",
      path: "/reports",
      icon: "📄",
      status: "Active",
      updated: "2d ago",
      stats: { items: 14, views: "980" },
    },
    {
      title: "Data Catalog",
      desc: "Search datasets and schema",
      path: "/catalog",
      icon: "🔎",
      status: "Active",
      updated: "4d ago",
      stats: { items: 34, views: "3.4k" },
    },
    {
      title: "Feature Store",
      desc: "Manage reusable features",
      path: "/features",
      icon: "🧩",
      status: "Preview",
      updated: "6h ago",
      stats: { items: 11, views: "400" },
    },
    {
      title: "A/B Testing",
      desc: "Run and analyze A/B tests",
      path: "/ab-testing",
      icon: "🧪",
      status: "Preview",
      updated: "1d ago",
      stats: { items: 6, views: "320" },
    },
    {
      title: "Customer Segmentation",
      desc: "Group customers by behavior",
      path: "/segmentation",
      icon: "👥",
      status: "Active",
      updated: "3d ago",
      stats: { items: 10, views: "980" },
    },
    {
      title: "Forecast",
      desc: "Predict future trends",
      path: "/forecast",
      icon: "🔮",
      status: "Active",
      updated: "8h ago",
      stats: { items: 4, views: "450" },
    },
  ];

  const filtered = modules.filter((m) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
    );
  });

  return (
    <div className="analytics-hub-page">
      <nav className="hub-navbar">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="nav-logo">✨ Smartlytics</div>
          </div>
          <div className="nav-right">
            <button className="nav-cta">+ New Project</button>
            <button className="nav-logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="hub-main">
        <div className="hub-header">
          <h1>📊 Analytics Hub</h1>
          <p>Launch pipelines, clean data and generate dashboards — all in one place</p>
        </div>

        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              className="hub-search"
              placeholder="Search modules..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search modules"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <p>No modules found matching "{query}"</p>
          </div>
        ) : (
          <div className="modules-grid">
            {filtered.map((m, i) => (
              <Link key={i} to={m.path} className="module-link">
                <div className={`module-card`} style={{'--index': i}}>
                  <div className="card-header">
                    <div className="module-icon">{m.icon}</div>
                    <div className={`module-status ${m.status?.toLowerCase()}`}>{m.status}</div>
                  </div>
                  <h3 className="module-title">{m.title}</h3>
                  <p className="module-desc">{m.desc}</p>

                  <div className="module-footer">
                    <div className="module-stats">
                      <span>📦 {m.stats.items} items</span>
                      <span>👁️ {m.stats.views} views</span>
                    </div>
                    <div className="module-updated">
                      <span>Last updated: {m.updated}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="hub-footer">
        <div className="footer-content">
          <p>© 2026 Smartlytics. Built with ❤️ for data professionals</p>
          <div className="footer-links">
            <a href="#" data-tooltip="Documentation">📚 Docs</a>
            <a href="#" data-tooltip="Support">💬 Support</a>
            <a href="#" data-tooltip="GitHub">🐙 GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AnalyticsHub;
