import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to NRIS Portal</h1>
        <p>Your dashboard for managing surrender and reintegration</p>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-grid">
          <Link to="/centers" className="dashboard-card">
            <h3>Surrender Centers</h3>
            <p>Find and manage surrender centers</p>
            <div className="card-icon">🏢</div>
          </Link>

          <div className="dashboard-card">
            <h3>Surrender Applications</h3>
            <p>View and process applications</p>
            <div className="card-icon">📋</div>
          </div>

          <div className="dashboard-card">
            <h3>Reports</h3>
            <p>Generate and view reports</p>
            <div className="card-icon">📊</div>
          </div>

          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Update your profile information</p>
            <div className="card-icon">👤</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
