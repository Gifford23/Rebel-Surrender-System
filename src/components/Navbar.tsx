import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaThLarge,
  FaMapMarkedAlt,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css"; // We will add styling for this below

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
    { path: "/centers", label: "Assistance Centers", icon: <FaMapMarkedAlt /> },
    {
      path: "/profile/RS-2025-001",
      label: "My Record",
      icon: <FaUserCircle />,
    },
  ];

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <Link to="/dashboard" className="navbar-brand">
          <div className="brand-logo">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div className="brand-text">
            <span className="brand-subtitle">
              Government of the Philippines
            </span>
            <span className="brand-title">NRIS Portal</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname.startsWith(item.path) ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          {/* Logout Button */}
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link logout-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaSignOutAlt />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
