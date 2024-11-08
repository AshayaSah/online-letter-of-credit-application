import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Auth/Login";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;