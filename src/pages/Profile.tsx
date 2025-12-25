import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profiles } from "../data/mockData";
import "./Profile.css";
import { FaArrowLeft, FaPrint, FaCheckCircle } from "react-icons/fa";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === id);

  if (!profile) return <div className="not-found">Profile not found.</div>;

  return (
    <div className="profile-container">
      <button className="btn-back" onClick={() => navigate("/dashboard")}>
        <FaArrowLeft /> Back to Dashboard
      </button>

      <div className="profile-paper">
        <div className="profile-header">
          <div className="header-left">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="profile-pic-lg"
            />
            <div>
              <h1>{profile.name}</h1>
              <div className="meta-tags">
                <span className="id-badge">ID: {profile.id}</span>
                <span
                  className={`status-badge ${profile.status.toLowerCase()}`}
                >
                  {profile.status}
                </span>
              </div>
            </div>
          </div>
          <button className="btn-print">
            <FaPrint /> Print Record
          </button>
        </div>

        <div className="profile-grid">
          <div className="info-group">
            <label>Alias / AKA</label>
            <p>{profile.alias}</p>
          </div>
          <div className="info-group">
            <label>Age</label>
            <p>{profile.age} years old</p>
          </div>
          <div className="info-group">
            <label>Barangay</label>
            <p>{profile.barangay}</p>
          </div>
          <div className="info-group">
            <label>Date of Surrender</label>
            <p>{profile.surrenderDate}</p>
          </div>
          <div className="info-group full">
            <label>Verification Status</label>
            <div className="status-box">
              <FaCheckCircle className="icon-success" />
              <span>
                Identity Verified by 4th Infantry Division Intelligence Unit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
