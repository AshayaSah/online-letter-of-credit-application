import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./css/Homepage.css"; // Import your CSS file for styling
import Card from "../assets/card.png";

const HeroAndFeatures = () => {
  const navigate = useNavigate(); // Initialize navigate

  const featureList = [
    { title: "Debit Card", description: "Description of feature 1", route: "/tradesmart" },
    { title: "Corpoate", description: "Description of feature 2", route: "/corporate"},
    { title: "LC Issuance", description: "Description of feature 2", route: "/lc-issuance" },
    { title: "Bank Guarantee", description: "Description of feature 2" },
  ];

  const handleFeatureClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the specified route
    }
  };

  return (
    <>
      <div className="hero-and-features">
        <div className="hero-banner">
          <h1>Welcome to Our Website!</h1>
          <p>Your journey starts here.</p>
        </div>
        <div className="features">
          {featureList.map((feature, index) => (
            <div 
              className="feature" 
              key={index} 
              onClick={() => handleFeatureClick(feature.route)} // Handle click event
              style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
            >
              <img src={Card} alt={feature.title}></img>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroAndFeatures;