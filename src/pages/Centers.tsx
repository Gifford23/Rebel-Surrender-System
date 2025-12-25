import React from "react";
import "./centers.css";

const Centers: React.FC = () => {
  return (
    <div className="centers-container">
      <div className="centers-content">
        <h1>Surrender Centers</h1>
        <p className="centers-description">
          Find your nearest surrender center to begin your journey to a peaceful
          life.
        </p>

        <div className="centers-grid">
          {/* Example center cards */}
          <div className="center-card">
            <h3>Main Surrender Center</h3>
            <p>123 Peace Avenue, Quezon City</p>
            <p>Open 24/7</p>
            <p>Contact: (02) 8123-4567</p>
          </div>

          <div className="center-card">
            <h3>Northern Luzon Center</h3>
            <p>456 Harmony Street, Baguio City</p>
            <p>Open 8:00 AM - 5:00 PM</p>
            <p>Contact: (074) 123-4567</p>
          </div>

          <div className="center-card">
            <h3>Visayas Center</h3>
            <p>789 Unity Road, Cebu City</p>
            <p>Open 8:00 AM - 5:00 PM</p>
            <p>Contact: (032) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centers;
