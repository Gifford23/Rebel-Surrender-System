import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { FaShieldAlt, FaHandsHelping, FaSearchLocation } from "react-icons/fa";

const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      {/* --- Navbar --- */}
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="logo-group">
            <div className="logo-icon">
              <i className="fas fa-balance-scale"></i>
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
              Benefits & Assistance
            </a>
            <a href="#programs" className="nav-link">
              Other Initiatives
            </a>
            <a href="#process" className="nav-link">
              Process Flow
            </a>
            <Link to="/dashboard" className="btn-login">
              Official Login
            </Link>
          </div>
        </div>
      </div>

      {/* --- Hero Section with Gradient Background --- */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
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

      {/* --- Trust Strip --- */}
      <div className="trust-strip">
        <div className="trust-container">
          <div className="trust-item">
            <i className="fa-solid fa-user-shield"></i> 100% Confidential
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-hand-holding-dollar"></i> Guaranteed
            Assistance
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-house-chimney"></i> Safe Halfway Houses
          </div>
        </div>
      </div>

      {/* --- Benefits Section --- */}
      <section className="section bg-grey" id="benefits">
        <div className="section-container">
          <div className="section-header">
            <h3>Why Surrender?</h3>
            <h2>Comprehensive Benefits Package</h2>
            <p
              style={{
                color: "#64748b",
                marginTop: "1rem",
                maxWidth: "600px",
                margin: "1rem auto",
              }}
            >
              The Enhanced Comprehensive Local Integration Program (E-CLIP)
              ensures you have everything you need to start a new life
              immediately.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon-box">
                <i className="fa-solid fa-money-bill-transfer"></i>
              </div>
              <h4>Immediate Assistance</h4>
              <p>
                Receive cash assistance immediately upon processing to cover
                your basic needs while your papers are being finalized.
              </p>
              <span className="money">₱15,000.00</span>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h4>Livelihood Grant</h4>
              <p>
                Start a small business or farm with our livelihood startup
                capital given after verification.
              </p>
              <span className="money">₱50,000.00</span>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <i className="fa-solid fa-person-rifle"></i>
              </div>
              <h4>Firearms Remuneration</h4>
              <p>
                We pay for every functional firearm you surrender. The amount
                depends on the type and caliber of the weapon.
              </p>
              <span className="money">Varies by Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Programs Section --- */}
      <section className="section" id="programs">
        <div className="section-container">
          <div className="section-header">
            <h3>Holistic Support</h3>
            <h2>Other Government Initiatives</h2>
          </div>

          <div className="programs-grid">
            <div className="program-item">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="program-info">
                <h5>Education & Skills (TESDA)</h5>
                <p>
                  Free skills training and National Certification (NCII) for you
                  and your immediate family members.
                </p>
              </div>
            </div>

            <div className="program-item">
              <i className="fa-solid fa-gavel"></i>
              <div className="program-info">
                <h5>Legal Assistance (DOJ)</h5>
                <p>
                  Free legal representation and assistance in the suspension of
                  criminal cases related to rebellion.
                </p>
              </div>
            </div>

            <div className="program-item">
              <i className="fa-solid fa-heart-pulse"></i>
              <div className="program-info">
                <h5>Health Services (DOH)</h5>
                <p>
                  Automatic enrollment in PhilHealth and free medical check-ups
                  in government hospitals.
                </p>
              </div>
            </div>

            <div className="program-item">
              <i className="fa-solid fa-house"></i>
              <div className="program-info">
                <h5>Housing Assistance (NHA)</h5>
                <p>
                  Eligibility for low-cost housing programs or housing material
                  assistance for home repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Return to the Fold of the Law?</h2>
          <p>
            Go to the nearest Barangay Hall, Police Station, or Military Camp.
            You will be treated with respect and dignity.
          </p>
          <Link
            to="/centers"
            className="btn-primary"
            style={{ background: "white", color: "var(--primary-blue)" }}
          >
            Find Nearest Center
          </Link>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <i className="fa-solid fa-scale-balanced"></i> NRIS Portal
              </h4>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                The official information system for the National Reintegration
                Program. Promoting peace and unity through holistic support.
              </p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">About E-CLIP</a>
                </li>
                <li>
                  <a href="#">Success Stories</a>
                </li>
                <li>
                  <a href="#">Process Flow</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Emergency Hotlines</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-phone"></i> National Hotline: 911
                </li>
                <li>
                  <i className="fa-solid fa-shield"></i> AFP Hotline: +63 917
                  123 4567
                </li>
                <li>
                  <i className="fa-solid fa-user-shield"></i> PNP Hotline: +63
                  918 123 4567
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 National Reintegration Information System. All Rights
            Reserved. Government Property.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
