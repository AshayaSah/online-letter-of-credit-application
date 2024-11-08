// HeroAndFeatures.js
import React from "react";
import "./css/Homepage.css"; // Import your CSS file for styling
import Card from "../assets/card.png";

const HeroAndFeatures = () => {
  const featureList = [
    { title: "Trade Smart", description: "Description of feature 1" },
    { title: "Lend Smart", description: "Description of feature 2" },
  ];

  return (
    <>
      <div className="hero-and-features">
        <div className="hero-banner">
          <h1>Welcome to Our Website!</h1>
          <p>Your journey starts here.</p>
        </div>
        <div className="features">
          {featureList.map((feature, index) => (
            <div className="feature" key={index}>
              <img src={Card}></img>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroAndFeatures;
