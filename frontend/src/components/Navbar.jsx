import React from "react";
import "./css/Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="login">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
