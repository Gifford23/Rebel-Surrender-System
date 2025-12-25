import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profiles } from "../data/mockData";
import "./Dashboard.css";
import { FaChartPie, FaUsers, FaFileAlt, FaCog } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "records">(
    "overview"
  );
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
          <p>Logged in as Officer</p>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <FaChartPie /> Overview
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${activeTab === "records" ? "active" : ""}`}
              onClick={() => setActiveTab("records")}
            >
              <FaUsers /> Master List
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <FaFileAlt /> Reports
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <FaCog /> Settings
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="page-header">
          <h1>
            {activeTab === "overview"
              ? "System Overview"
              : "Surrenderee Records"}
          </h1>
          <p>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        {activeTab === "overview" && (
          <div className="cards-grid">
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <div className="card-header">
                  <img src={profile.imageUrl} alt={profile.name} />
                  <div>
                    <h3>{profile.name}</h3>
                    <span className="id-tag">{profile.id}</span>
                  </div>
                </div>
                <div className="card-body">
                  <span
                    className={`status-badge ${profile.status.toLowerCase()}`}
                  >
                    {profile.status}
                  </span>
                  <button
                    className="btn-action"
                    onClick={() => navigate(`/profile/${profile.id}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "records" && (
          <div className="table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Alias</th>
                  <th>Barangay</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>
                      <strong>{p.name}</strong>
                    </td>
                    <td style={{ fontStyle: "italic" }}>{p.alias}</td>
                    <td>{p.barangay}</td>
                    <td>
                      <span
                        className={`status-badge ${p.status.toLowerCase()}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-sm"
                        onClick={() => navigate(`/profile/${p.id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
