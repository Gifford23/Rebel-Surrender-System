import React, { useState } from "react";
import "./centers.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";

const Centers: React.FC = () => {
  // We use specific Google Maps Embed URLs for accuracy
  const centers = [
    {
      id: 1,
      name: "Camp Evangelista",
      type: "Military",
      address: "Patag, Cagayan de Oro City",
      phone: "(088) 858-1234",
      // Accurate coordinates/query for Camp Evangelista
      mapUrl:
        "https://maps.google.com/maps?q=Camp+Evangelista+Patag+Cagayan+de+Oro&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      name: "Police Regional Office 10",
      type: "Police",
      address: "Camp Alagar, Lapasan, CDO",
      phone: "(088) 123-4567",
      // Accurate coordinates/query for Camp Alagar
      mapUrl:
        "https://maps.google.com/maps?q=Camp+Alagar+Lapasan+Cagayan+de+Oro&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 3,
      name: "City Social Welfare (CSWD)",
      type: "Civilian",
      address: "City Hall Compound, CDO",
      phone: "(088) 999-8888",
      // Accurate coordinates/query for City Hall CDO
      mapUrl:
        "https://maps.google.com/maps?q=City+Hall+Cagayan+de+Oro&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
  ];

  // Default to the first center's map
  const [activeMap, setActiveMap] = useState(centers[0].mapUrl);
  const [activeId, setActiveId] = useState<number>(centers[0].id);

  const handleSelect = (id: number, url: string) => {
    setActiveId(id);
    setActiveMap(url);
  };

  return (
    <div className="centers-layout">
      {/* Left List Panel */}
      <div className="centers-list">
        <div className="list-header">
          <h2>Assistance Centers</h2>
          <p>Select a location to update the map</p>
        </div>
        <div className="list-scroll">
          {centers.map((center) => (
            <div
              key={center.id}
              className={`center-card ${
                activeId === center.id ? "active" : ""
              }`}
              onClick={() => handleSelect(center.id, center.mapUrl)}
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

      {/* Right Map Panel with Live Iframe */}
      <div className="centers-map">
        <iframe
          title="Map Location"
          src={activeMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="map-overlay">
          <FaShieldAlt /> Secure Government Facility
        </div>
      </div>
    </div>
  );
};

export default Centers;
