import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Corporate.css";

const Corporate = ({ accounts, onToggleStatus }) => {
    
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
            <th>Status</th> {/* New Status Column */}
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.accountName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.email}</td>
              <td>
                <button
                  className={`status-button ${
                    account.isActive ? "active" : "inactive"
                  }`}
                  onClick={() => onToggleStatus(index)} // Call toggle function
                >
                  {account.isActive ? "Active" : "Not Active"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Corporate;
