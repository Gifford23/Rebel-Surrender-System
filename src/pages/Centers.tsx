import React, { useState } from "react";
import "./centers.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";

const Centers: React.FC = () => {
  // Default map
  const [mapImage, setMapImage] = useState(
    "https://via.placeholder.com/1200x800/1e293b/ffffff?text=Select+a+Center+to+View+Map"
  );
  const [activeId, setActiveId] = useState<number | null>(null);

  const centers = [
    {
      id: 1,
      name: "Camp Evangelista",
      type: "Military",
      address: "Patag, Cagayan de Oro City",
      phone: "(088) 858-1234",
      img: "https://via.placeholder.com/1200x800/1e293b/ffffff?text=Map:+Camp+Evangelista",
    },
    {
      id: 2,
      name: "Police Regional Office 10",
      type: "Police",
      address: "Camp Alagar, Lapasan, CDO",
      phone: "(088) 123-4567",
      img: "https://via.placeholder.com/1200x800/2563eb/ffffff?text=Map:+Camp+Alagar",
    },
    {
      id: 3,
      name: "City Social Welfare",
      type: "Civilian",
      address: "City Hall Compound, CDO",
      phone: "(088) 999-8888",
      img: "https://via.placeholder.com/1200x800/f59e0b/ffffff?text=Map:+City+Social+Welfare",
    },
  ];

  const handleSelect = (id: number, img: string) => {
    setActiveId(id);
    setMapImage(img);
  };

  return (
    <div className="centers-layout">
      <div className="centers-list">
        <div className="list-header">
          <h2>Assistance Centers</h2>
          <p>Select a location to view on map</p>
        </div>
        <div className="list-scroll">
          {centers.map((center) => (
            <div
              key={center.id}
              className={`center-card ${
                activeId === center.id ? "active" : ""
              }`}
              onClick={() => handleSelect(center.id, center.img)}
            >
              <div className="card-top">
                <h4>{center.name}</h4>
                <span className="type-tag">{center.type}</span>
              </div>
              <p className="address">
                <FaMapMarkerAlt /> {center.address}
              </p>
              <p className="contact">
                <FaPhoneAlt /> {center.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="centers-map">
        <img src={mapImage} alt="Map View" />
        <div className="map-overlay">
          <FaShieldAlt /> Secure Government Facility
        </div>
      </div>
    </div>
  );
};

export default Centers;
