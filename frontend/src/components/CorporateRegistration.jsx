import React, { useState } from "react";
import "./css/CorporateRegistration.css";

function CorporateRegistration({ onAddAccount }) {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAccount({ accountName, accountNumber, email });
    setAccountName("");
    setAccountNumber("");
    setEmail("");
  };

  return (
    <>
      <form>
        <div className="form-container">
          {/* Title Heading */}
          <h1 className="form-title">Corporate Registration</h1>

          {/* Subheading with Logo and Text */}
          <div className="form-subheading">
            <img
              src="https://via.placeholder.com/40"
              alt="Global Logo"
              className="form-logo"
            />
            <h2 className="form-subheading-text">
              Welcome to Global Bank Registration Form
            </h2>
          </div>

          {/* Horizontal Line */}
          <hr className="form-horizontal-line" />

          {/* First Set of Fields */}
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">Applicant Company Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="ABC Enterprises PVT LTD."
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                className="form-input"
                placeholder="0123000123"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="paragraph">
            <p>
              All requests, consents, approvals, authorizations,
              acknowledgements and other communications required or permitted
              under this transaction for execution of any LC and BG through
              Online Web Portal on compeny request shall be deemed to be given
              One Time Password (OTP) Code sent to authorised Mobile/Emall of
              company by Bank specified below. The username and passwords for
              web portal users shall sent to the OP of authorised mobile/Emall
              of company by bank.
            </p>
          </div>
          {/* Second Set of Fields */}
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">Authorized Mobile Number</label>
              <input
                type="text"
                className="form-input"
                placeholder="9800000000"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Authorized Email</label>
              <input
                type="text"
                className="form-input"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="paragraph">
            <p>
              The company acknowledge that transaction conducted through the web
              portal as mentioned above through OTP Code sent to authorized
              mobile number of company shall constitute its legal, valid and
              binding obligations to the company.
            </p>
          </div>
          <div className="paragraph">
            <p>
              By executing this cocument, the signatory xertifies that the
              signatory is duly authorized to execute this document on behalf of
              the company which is substantiated by the board minute of the
              company.
            </p>
          </div>

          {/* Document Request Text */}
          <div className="form-document-request">
            Please provide the Board Minute Verified Document.
          </div>

          {/* File Upload Fields */}
          <div className="form-document-submit">
            <div className="document-pair">
              <label className="form-label">Board Minute</label>
              <input type="file" className="form-file-upload" />
            </div>
            <div className="document-pair">
              <label className="form-label">PAN</label>
              <input type="file" className="form-file-upload" />
            </div>
            <div className="document-pair">
              <label className="form-label">
                Registration Documaent (Company
                Register/Cottage/Industry/Others)
              </label>
              <input type="file" className="form-file-upload" />
            </div>
          </div>
          <div className="form-document-submit">
            <div className="document-pair">
              <label className="form-label">
                MOA (Memorandum of Association)
              </label>
              <input type="file" className="form-file-upload" />
            </div>
            <div className="document-pair">
              <label className="form-label">AOA (Article of Association)</label>
              <input type="file" className="form-file-upload" />
            </div>
            <div className="document-pair">
              <label className="form-label">Citizenship Certificate</label>
              <input type="file" className="form-file-upload" />
            </div>
          </div>
          <div className="form-document-submit">
            <div className="document-pair">
              <label className="form-label">Tax Clearance(recent F/Y)</label>
              <input type="file" className="form-file-upload" />
            </div>
            <div className="document-pair">
              <label className="form-label">
                Other Document(exim code and so on)
              </label>
              <input type="file" className="form-file-upload" />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button className="form-button save-button">Save as Draft</button>
            <button className="form-button submit-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CorporateRegistration;
