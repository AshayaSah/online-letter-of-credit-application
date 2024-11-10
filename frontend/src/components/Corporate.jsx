// src/components/Corporate.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Corporate.css";

const Corporate = () => {
  const [accounts, setAccounts] = useState([]);

  const handleAddAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  return (
    <div>
      <h1>Corporate Accounts</h1>
      <Link to="/corporate/corporate-registration">
        <button className="add-button">Add Corporate Account</button>
      </Link>

      <table className="corporate-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.accountName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Corporate;
