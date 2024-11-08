import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="login">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
