import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
// Ensure you have react-icons installed
import {
  FaShieldAlt,
  FaHandHoldingUsd,
  FaHome,
  FaUniversity,
  FaGavel,
  FaHeartbeat,
  FaArrowRight,
} from "react-icons/fa";

const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      {/* --- Public Navbar (Specific to Landing) --- */}
      <nav className="landing-navbar">
        <div className="landing-nav-container">
          <div className="logo-section">
            <div className="seal-icon">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className="text-section">
              <span className="sub">Republic of the Philippines</span>
              <span className="main">NRIS Portal</span>
            </div>
          </div>
          <div className="links-section">
            <a href="#benefits">Benefits</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQs</a>
            <Link to="/dashboard" className="login-pill">
              Official Login{" "}
              <FaArrowRight style={{ marginLeft: "8px", fontSize: "0.8em" }} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">OFFICIAL E-CLIP PROGRAM</div>
          <h1>Return to the Fold of the Law</h1>
          <p className="hero-text">
            The National Reintegration Information System (NRIS) guarantees your
            safety, anonymity, and future. Secure your family's livelihood
            today.
          </p>
          <div className="hero-actions">
            <Link to="/centers" className="btn-hero-primary">
              Find Nearest Center
            </Link>
            <a href="#benefits" className="btn-hero-secondary">
              View Benefits
            </a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </header>

      {/* --- Trust Indicators --- */}
      <div className="trust-bar">
        <div className="trust-item">
          <FaShieldAlt className="trust-icon" />
          <span>100% Confidential</span>
        </div>
        <div className="trust-item">
          <FaGavel className="trust-icon" />
          <span>Legal Amnesty</span>
        </div>
        <div className="trust-item">
          <FaHandHoldingUsd className="trust-icon" />
          <span>Financial Aid</span>
        </div>
      </div>

      {/* --- Benefits Grid --- */}
      <section className="info-section" id="benefits">
        <div className="section-header">
          <h2>Comprehensive Assistance</h2>
          <p>
            The E-CLIP program provides a complete package to help you start
            over.
          </p>
        </div>

        <div className="grid-container">
          <div className="info-card">
            <div className="icon-wrapper gold">
              <FaHandHoldingUsd />
            </div>
            <h3>Immediate Assistance</h3>
            <p>
              Receive <strong>₱15,000.00</strong> immediately upon processing to
              cover your basic needs.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper blue">
              <FaUniversity />
            </div>
            <h3>Livelihood Grant</h3>
            <p>
              Start a business with <strong>₱50,000.00</strong> capital
              assistance after verification.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper red">
              <FaHome />
            </div>
            <h3>Housing Support</h3>
            <p>
              Eligibility for low-cost housing units via the National Housing
              Authority (NHA).
            </p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper green">
              <FaHeartbeat />
            </div>
            <h3>Health & Education</h3>
            <p>
              PhilHealth enrollment and free skills training (TESDA) for you and
              your family.
            </p>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="cta-strip">
        <div className="cta-content">
          <h2>Ready to secure your future?</h2>
          <p>Locate the nearest safe zone or contact our hotline.</p>
          <Link to="/centers" className="btn-cta">
            Locate Center
          </Link>
        </div>
      </section>

      <footer className="landing-footer">
        <p>
          &copy; 2025 National Reintegration Information System. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
