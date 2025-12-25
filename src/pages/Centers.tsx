import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./centers.css";

const Centers: React.FC = () => {
  // State for the map image
  const [mapImage, setMapImage] = useState(
    "https://via.placeholder.com/800x600/1e40af/ffffff?text=Select+a+Center"
  );

  // Center Data
  const centers = [
    {
      id: 1,
      name: "Camp Evangelista",
      type: "Military",
      address: "Patag, Cagayan de Oro",
      img: "https://via.placeholder.com/800x600/1e3a8a/ffffff?text=Map:+Camp+Evangelista",
    },
    {
      id: 2,
      name: "PRO-10 Headquarters",
      type: "Police",
      address: "Camp Alagar, Lapasan",
      img: "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Map:+PRO-10+HQ",
    },
    {
      id: 3,
      name: "City Social Welfare",
      type: "Civilian",
      address: "City Hall Compound",
      img: "https://via.placeholder.com/800x600/f59e0b/ffffff?text=Map:+City+Hall",
    },
  ];

  return (
    <div className="centers-container main-container">
      {/* Sidebar List */}
      <div className="sidebar-list">
        <div className="results-header">Nearest Government Centers</div>
        <div className="centers-scroll">
          {centers.map((center) => (
            <div
              key={center.id}
              className="center-card"
              onClick={() => setMapImage(center.img)} // Click to swap map
            >
              <div className="card-title">
                {center.name} <span className="card-type">{center.type}</span>
              </div>
              <p className="card-address">{center.address}</p>
              <div className="card-contact">Click to view map</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="map-container">
        <img src={mapImage} alt="Center Map" className="map-image" />
      </div>
    </div>
  );
};

export default Centers;
