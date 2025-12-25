import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock user data - in a real app, this would come from an API
  const user = {
    id: id || "unknown",
    name: "Juan Dela Cruz",
    role: "Surrenderee",
    status: "In Process",
    joinDate: "2023-01-15",
    contact: "+63 912 345 6789",
    email: "juan.delacruz@example.com",
    address: "123 Peace St., Quezon City, Philippines",
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p className="profile-subtitle">View and manage user information</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{user.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Role:</span>
              <span className="detail-value">{user.role}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span
                className={`status-badge status-${user.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {user.status}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Member Since:</span>
              <span className="detail-value">{user.joinDate}</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Contact Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{user.contact}</span>
            </div>
            <div className="info-item full-width">
              <span className="info-label">Address</span>
              <span className="info-value">{user.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
