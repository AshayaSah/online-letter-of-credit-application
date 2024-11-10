import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = ({ user }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleLogoutClick = () => {
    // Add logout functionality if needed
    alert("Logged out");
    navigate("/"); // Redirect to homepage
    window.location.reload()
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login">
        {user ? (
          <div className="user-name">
            <span>Welcome, {user}</span>
            <button className="logout-button" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;