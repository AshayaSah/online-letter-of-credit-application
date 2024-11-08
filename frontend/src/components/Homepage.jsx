// HeroAndFeatures.js
import React from "react";
import "./css/Homepage.css"; // Import your CSS file for styling
import Navbar from "./Navbar";
import Card from "../assets/card.png"


const HeroAndFeatures = () => {
  const featureList = [
    { title: "Debit Card", description: "Description of feature 1" },
    { title: "Credit Card", description: "Description of feature 2" },
    { title: "LC Issuance", description: "Description of feature 3" },
    { title: "Bank Guarantee", description: "Description of feature 4" },
  ];

  return (
    <>
      <Navbar></Navbar>  
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
