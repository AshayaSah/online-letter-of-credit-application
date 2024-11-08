import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Auth/Login";
import Homepage from "./components/Homepage";

const App = () => {
  const [user, setUser ] = useState("");

  const handleLogin = (username, password) => {
    if (username === "aashish" && password === "123") {
      console.log("This is Admin");
      setUser (username); // Set user to the logged-in username
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Router>
      <Navbar user={user} /> {/* Pass user to Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default route */}
        <Route path="/login" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;