import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Auth/Login";
import Homepage from "./components/Homepage";
import TradeSmart from "./components/Tradesmart";
import Corporate from "./components/Corporate";
import CorporateRegistration from "./components/CorporateRegistration";
import LCIssuance from "./components/LCIssuance";
import LCIssuanceForm from "./components/LCIssuanceForm";

const App = () => {
  const [user, setUser] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [LcIssuances, setLcIssuances] = useState([])

  const handleLogin = (username, password) => {
    if (username === "aashish" && password === "123") {
      console.log("This is Admin");
      setUser(username); // Set user to the logged-in username
    } else {
      alert("Invalid credentials");
    }
  };

  const handleAddAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  const handleAddLcIssuance = (LcIssuance) => {
    setLcIssuances([...LcIssuances, LcIssuance]);
  };

  const toggleAccountStatus = (index) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index].isActive = !updatedAccounts[index].isActive; // Toggle the active status
    setAccounts(updatedAccounts); // Update the state
  };

  return (
    <Router>
      <Navbar user={user} /> {/* Pass user to Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default route */}
        <Route
          path="/login"
          element={
            !user ? <Login handleLogin={handleLogin} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/tradesmart"
          element={
            user ? <TradeSmart /> : <Login handleLogin={handleLogin}></Login>
          }
        />
        <Route
          path="/tradesmart/corporate"
          element={
            user ? (
              <Corporate
                accounts={accounts}
                onToggleStatus={toggleAccountStatus}
              />
            ) : (
              <Login handleLogin={handleLogin}></Login>
            )
          }
        />
        <Route
          path="/tradesmart/corporate/corporate-registration"
          element={
            user ? (
              <CorporateRegistration onAddAccount={handleAddAccount} />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/tradesmart/lc-issuance"
          element={
            user ? (
              <LCIssuance LcIssuances ={LcIssuances}/>
            ) : (
              <Login handleLogin={handleLogin}></Login>
            )
          }
        />
        <Route
          path="/tradesmart/lc-issuance/lc-issuance-apply"
          element={
            user ? (
              <LCIssuanceForm onAddLcIssuance = {handleAddLcIssuance}/>
            ) : (
              <Login handleLogin={handleLogin}></Login>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
