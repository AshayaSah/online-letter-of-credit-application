import React from "react";
import "./css/TradeSmart.css"; // Import CSS for styling if needed
import { useNavigate } from "react-router-dom";
import Card from "../assets/card.png";

const TradeSmart = () => {
  const services = [
    {
      title: "Debit Card",
      description: "Description of feature 1",
    },
    {
      title: "Corpoate",
      description: "Description of feature 2",
      route: "/tradesmart/corporate",
    },
    {
      title: "LC Issuance",
      description: "Description of feature 2",
      route: "/tradesmart/lc-issuance",
    },
    { title: "Bank Guarantee", description: "Description of feature 2" },
  ];

  const navigate = useNavigate(); // Initialize navigate
  const handleFeatureClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the specified route
    }
  };

  return (
    <div className="tradesmart">
      <h2>Trade Services</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAS,
        in partnership with Newgen, offers a powerful TradeSmart designed to
        support banks in managing and optimizing their trade finance operations.
        Our solution seamlessly integrates with your core banking systems and
        third-party applications while providing advanced features powered by
        cutting-edge technologies like AI. This module covers multiple critical
        areas of trade finance, including Letters of Credit, Bank Guarantees,
        Supply Chain Financing, Trade Loans, and Bills, each tailored to address
        specific business needs.{" "}
      </p>
      <div className="services-list">
        {services.map((feature, index) => (
          <div
            className="feature"
            key={index}
            onClick={() => handleFeatureClick(feature.route)} // Handle click event
            style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
          >
            <img src={Card} alt={feature.title}></img>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeSmart;
