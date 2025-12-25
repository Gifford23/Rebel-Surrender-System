import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profiles } from "../data/mockData"; // Import the data
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "records">(
    "overview"
  );

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo-area">
          <h2>NRIS Portal</h2>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${activeTab === "records" ? "active" : ""}`}
              onClick={() => setActiveTab("records")}
            >
              Master List
            </button>
          </li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <h1>
            {activeTab === "overview"
              ? "System Overview"
              : "Surrenderee Records"}
          </h1>
        </header>

        {activeTab === "overview" && (
          <div className="dashboard-grid">
            {/* Dynamic Cards based on Data */}
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <div className="card-header">
                  <img src={profile.imageUrl} alt={profile.name} />
                  <h3>{profile.name}</h3>
                  <span>ID: {profile.id}</span>
                </div>
                <div className="card-body">
                  <span className={`badge ${profile.status.toLowerCase()}`}>
                    {profile.status}
                  </span>
                  <Link to={`/profile/${profile.id}`} className="btn-action">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "records" && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Alias</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.alias}</td>
                    <td>
                      <span className={`badge ${p.status.toLowerCase()}`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/profile/${p.id}`}>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
