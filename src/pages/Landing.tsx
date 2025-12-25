import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
// Import specific icons from react-icons
import {
  FaShieldAlt,
  FaHandHoldingUsd,
  FaHome,
  FaBalanceScale,
} from "react-icons/fa";

const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="logo-group">
            <div className="logo-icon">
              {/* FIXED: Using React Icon instead of <i> tag */}
              <FaBalanceScale size={30} />
            </div>
            <div className="logo-text">
              <h1>NRIS Portal</h1>
              <p>Official Government System</p>
            </div>
          </div>

          <div className="nav-group">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#benefits" className="nav-link">
              Benefits
            </a>
            <a href="#programs" className="nav-link">
              Initiatives
            </a>
            <Link to="/dashboard" className="btn-login">
              Official Login
            </Link>
          </div>
        </div>
      </div>

      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Your Journey to Peace <br />
            <span className="highlight">Begins Today</span>
          </h1>
          <p className="hero-subtitle">
            The government guarantees your safety, honor, and future. Lay down
            your arms and return to your family with full financial and legal
            protection under the E-CLIP Program.
          </p>

          <div className="hero-cta">
            <Link to="/dashboard" className="btn btn-primary btn-large">
              Official Login
            </Link>
            <a href="#benefits" className="btn btn-outline btn-large">
              View Benefits Package
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip">
        <div className="trust-container">
          <div className="trust-item">
            <FaShieldAlt /> 100% Confidential
          </div>
          <div className="trust-item">
            <FaHandHoldingUsd /> Guaranteed Assistance
          </div>
          <div className="trust-item">
            <FaHome /> Safe Halfway Houses
          </div>
        </div>
      </div>

      {/* ... Rest of your sections (Benefits, Programs, Footer) ... */}
    </div>
  );
};

export default Landing;
