import React, { useState, useEffect } from "react";
import "./css/LCIssuanceForm.css";
import { useNavigate } from "react-router-dom";

const FormField = ({ label, children, className }) => (
  <div className={`form-field ${className}`}>
    <label className="form-label">{label}</label>
    {children}
  </div>
);

const FormSection = ({ title, children, className }) => (
  <div className={`form-section ${className}`}>
    <label className="form-section-title">{title}</label>
    <hr className="form-horizontal-line" />
    {children}
  </div>
);

const RadioGroup = ({ name, options }) => (
  <div className="radio-group">
    {options.map((option) => (
      <label key={option.value}>
        <input type="radio" name={name} value={option.value} /> {option.label}
      </label>
    ))}
  </div>
);

const LCIssuanceForm = ({ onAddLcIssuance }) => {
  const [requestName, setRequestName] = useState("");
  const [requestID, setRequestID] = useState("");
  const [requestDate, setRequestDate] = useState("");

  // Set the current date when the component mounts
  useEffect(() => {
    const currentDate = () => {
      const date = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    };

    setRequestDate(currentDate());
  }, []); // Empty dependency array means this runs once when the component mounts

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLcIssuance({ requestName, requestID, requestDate, isPending: true });
    navigate("/tradesmart/lc-issuance", { replace: true }); // Navigate to the Corporate page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        {/* Title Heading */}
        <h1 className="form-title">LC FORM DECENTRALIZED</h1>

        {/* Subheading with Logo and Text */}
        <div className="form-subheading">
          <img
            src="https://via.placeholder.com/40"
            alt="Global Logo"
            className="form-logo"
          />
          <h2 className="form-subheading-text">
            Welcome to Nepal ABC Bank LC Form
          </h2>
        </div>

        {/* Horizontal Line */}
        <hr className="form-horizontal-line" />

        {/* Nature of LC */}
        <div className="form-field-row">
          <div className="form-field">
            <label className="form-label">NATURE OF LC</label>
            <div class="custom-select-wrapper">
              <select class="form-select">
                <option value="">Select Nature of LC</option>
                <option value="sight">Sight LC</option>
                <option value="usance">Usance LC</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applicant Name and Address */}
        <div className="form-section">
          <h3 className="form-section-title">APPLICANT NAME AND ADDRESS</h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input
                type="text"
                className="form-input"
                onChange={(e) => setRequestName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">ADDRESS</label>
              <input type="text" className="form-input" />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EMAIL</label>
              <input
                type="email"
                className="form-input"
                onChange={(e) => setRequestID(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">PAN NUMBER</label>
              <input type="text" className="form-input" />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EXIM CODE</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">PHONE (+977)</label>
              <input type="tel" className="form-input" placeholder="+977" />
            </div>
          </div>
        </div>

        {/* Beneficiary Name and Address */}
        <div className="form-section">
          <h3 className="form-section-title">BENEFICIARY NAME AND ADDRESS</h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">COUNTRY</label>
              <select className="form-select">
                <option value="">Select Country</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">ADDRESS</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">PHONE</label>
              <input type="tel" className="form-input" />
            </div>
          </div>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">EMAIL</label>
              <input type="email" className="form-input" />
            </div>
          </div>
        </div>

        {/* Mode of Transmission, Currency, Tolerance */}
        <div className="form-section flex-row">
          {/* Mode of Transmission Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">MODE OF TRANSMISSION</h3>
            <label className="form-label">Mode of Transmission</label>
            <div
              className="form-radio"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input type="radio" id="teleTransmission" name="transmission" />
              <label
                htmlFor="teleTransmission"
                style={{ padding: "1rem", margin: "0px" }}
              >
                BY TELE TRANSMISSION
              </label>
            </div>
          </div>

          {/* Currency Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CURRENCY AND AMOUNT</h3>
            <div className="form-field-container">
              <div className="form-field">
                <label className="form-label">CURRENCY</label>
                <select className="form-select">
                  <option value="">Select Currency</option>
                  <option value="usd">USD</option>
                  <option value="npr">NPR</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">AMOUNT</label>
                <input type="text" className="form-input" />
              </div>
            </div>
          </div>

          {/* Tolerance Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TOLERANCE</h3>
            <div className="form-field-container">
              <div className="form-field">
                <label className="form-label">CURRENCY</label>
                <select className="form-select">
                  <option value="">Select</option>
                  <option value="usd">USD</option>
                  <option value="npr">NPR</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">PERCENTAGE</label>
                <input type="text" className="form-input" />
              </div>
            </div>
          </div>
        </div>

        {/* Incoterms */}
        <div className="form-section">
          <h3 className="form-section-title">INCOTERMS</h3>
          <div className="form-field-container">
            <div className="form-field">
              <label className="form-label">TYPE</label>
              <select className="form-select">
                <option value="">Select Type</option>
                <option value="fob">FOB</option>
                <option value="cif">CIF</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">TYPE</label>
              <input type="text" />
            </div>
          </div>
        </div>

        {/* Tenure/Payment Terms */}
        <div className="form-section">
          <h3 className="form-section-title">TENURE/PAYMENT TERMS</h3>
          <div className="form-field-contailer">
            <div className="form-radio-group">
              <input type="radio" id="sight" name="paymentTerms" />
              <label htmlFor="sight">SIGHT</label>
              <input type="radio" id="usance" name="paymentTerms" />
              <label htmlFor="usance">USANCE</label>
            </div>
            <div className="form-radio-group">
              <input type="radio" id="mixedPayment" name="paymentTerms" />
              <label htmlFor="mixedPayment">MIXED PAYMENT</label>
              <input type="radio" id="deferredPayment" name="paymentTerms" />
              <label htmlFor="deferredPayment">DEFERRED PAYMENT</label>
            </div>
            <div className="form-field">
              <label className="form-label">OTHER PAYMENT DETAILS</label>
              <input type="text" className="form-input" />
            </div>
          </div>
        </div>

        {/* Credit Available with Negociating Bank */}
        <div className="form-section">
          <h3 className="form-section-title">
            CREDIT AVAILABLE WITH / NEGOTIATING BANK
          </h3>
          <div className="form-field-row">
            <div className="form-field">
              <label className="form-label">
                CREDIT AVAILABLE WITH / NEGOTIATING BANK
              </label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">BY</label>
              <input type="text" className="form-input" />
            </div>
          </div>
        </div>

        {/* Partial Shipment, Transshipment, Shipment From */}
        <div className="form-section flex-row">
          {/* Partial Shipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">PARTIAL SHIPMENT</h3>
            <label className="form-label">PARTIAL SHIPMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Transshipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TRANSSHIPMENT</h3>
            <label className="form-label">TRANSSHIPMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Shipment Form Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">SHIPMENT FROM</h3>
            <div className="form-field">
              <label className="form-label">
                SHIPMENT FROM / PLACE OF TAKING CHARGE / DISPATCH FROM / PLACE
                OF RECEIPT
              </label>
              <input
                type="text"
                placeholder="Shipment Form/Place of Taking in Charge/Dispatch from/Place of Receipt"
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Port of Loading, Port of Discharge */}
        <div className="form-section flex-row">
          {/* Port of Loading Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">
              PORT OF LOADING / AIRPORT OF DEPARTURE
            </h3>
            <div className="form-field">
              <label>PORT OF LOADING</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Loading"
              />
            </div>
          </div>

          {/* Port of Discharge Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">
              PORT OF DISCHARGE / AIRPORT OF DESTINATION
            </h3>
            <div className="form-field">
              <label>PORT OF DISCHARGE</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Discharge"
              />
            </div>
          </div>
        </div>

        {/* Place of Final Destination, Custom Entry Point in Nepal */}
        <div className="form-section flex-row">
          {/* Place of Final Destination Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">PLACE OF FINAL DESTINATION</h3>
            <div className="form-field">
              <label>PLACE OF FINAL DESTINATION</label>
              <input
                type="text"
                className="form-input"
                placeholder="Final Destination/Place of Delivery"
              />
            </div>
          </div>

          {/* Custom Entry Point Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CUSTOM ENTRY POINT</h3>
            <div className="flex-row">
              <div className="form-field">
                <label>CUSTOM ENTRY POINT</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Custom Entry Point"
                />
              </div>
              <div className="form-field">
                <label>If other (specify):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Specify if other"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expiry/Shipment Details */}
        <div className="form-section">
          <h3 className="form-section-title">EXPIRY / SHIPMENT DETAILS</h3>
          <div className="input-row flex-row">
            {/* Latest Date of Shipment Field */}
            <div className="form-field">
              <label>LATEST DATE OF SHIPMENT</label>
              <input type="date" className="form-input" />
            </div>

            {/* Expiry Date Field */}
            <div className="form-field">
              <label>EXPIRY DATE</label>
              <input type="date" className="form-input" />
            </div>

            {/* Document Presentation Period Field */}
            <div className="form-field">
              <label>DOCUMENT PRESENTATION PERIOD</label>
              <input
                type="text"
                className="form-input"
                placeholder="Presentation Period"
              />
            </div>

            {/* Place of Expiry Field */}
            <div className="form-field">
              <label>PLACE OF EXPIRY</label>
              <input
                type="text"
                className="form-input"
                placeholder="Place of Expiry"
              />
            </div>
          </div>
        </div>

        {/* TT Reimbursement, Confirmation Status, Bank Charges */}
        <div className="form-section flex-row">
          {/* Partial Shipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">TT REIMBURSEMENT</h3>
            <label className="form-label">TT REIMBURSMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">TT REIMBURSMENT</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Transshipment Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">CONFIRMATION STATUS</h3>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>

          {/* Shipment Form Section */}
          <div className="form-section-item">
            <h3 className="form-section-title">BANK CHARGES</h3>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
            <label className="form-label">CONFIRMATION STATUS</label>
            <div className="form-radio-group">
              <input
                type="radio"
                id="transshipmentAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentAllowed">ALLOWED</label>
              <input
                type="radio"
                id="transshipmentNotAllowed"
                name="transshipment"
              />
              <label htmlFor="transshipmentNotAllowed">NOT ALLOWED</label>
            </div>
          </div>
        </div>

        {/* Description, Specification and Quality of Goods and/or Services */}
        <div className="form-section">
          <h3 className="form-section-title">
            DESCRIPTION, SPECIFICATION AND QUALITY OF GOODS AND/OR SERVICES
          </h3>
          <div className="form-field">
            <label>
              Description, Specification and Quality of Goods and/or Services
            </label>
            <input type="text" className="full-width form-input" />
          </div>

          <div className="form-row flex-row">
            <div className="form-field">
              <label>As Per Performa Invoice Number</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label>Dated (MM-DD-YY)</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-field">
              <label>Master Good</label>
              <input type="text" className="form-input" />
            </div>

            <div className="form-field">
              <label>HS Code</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label>Selected Code</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-field">
              <label>Quantity</label>
              <input type="number" className="form-input" />
            </div>
            <div className="form-field">
              <label>Rate</label>
              <input type="text" className="form-input" />
            </div>
          </div>
        </div>

        {/* Authorized to Debit Our Account */}
        <div className="form-section">
          <h3 className="form-section-title">
            AUTHORIZED TO DEBIT OUT ACCOUNT
          </h3>
          <label>Account Number</label>
          <input type="text" className="form-input" />
        </div>

        {/* Documents Required */}
        <div className="form-group">
          <h3 className="form-section-title">DOCUMENTS REQUIRED</h3>

          <div className="document-section">
            <div className="form-field">
              <label>
                1. <input type="checkbox" /> Signed <input type="checkbox" />{" "}
                Commercial Invoice
                <input type="checkbox" /> Tax Invoice in{" "}
                <input type="number" className="form-input" /> Original/s and
                <input type="number" className="form-input" /> Copy/ies
              </label>
            </div>
          </div>

          <div className="document-section">
            <div className="form-field">
              <label>2. Transportation Document</label>
            </div>

            {/* A */}
            <div className="sub-document form-row flex-row">
              <div className="form-field">
                <label>
                  A. <input type="radio" name="transport" />
                  &nbsp; For Land
                </label>
              </div>
              <p>
                Lorry Receipt/Truck Receipt/Consignment Note Original Consignee
                Copy In
              </p>
              <input type="text" className="form-input" />
              <p>Original/s and</p>
              <input type="text" className="form-input " />
              <p>
                Copies Issued by Carrier or its Authorized Agent Consigned to
                Global IME Bank Limited Nepal Marked
              </p>
            </div>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* B */}
            <div className="sub-document form-row flex-row">
              <div className="form-field">
                <label>
                  B. <input type="radio" name="transport" />
                  &nbsp; For Sea
                </label>
              </div>
              <p>
                3/3 Set of Original Clean Shipped On Board Ocean/Multimodal Bill
                of Landing Issued by Carrier or its Authorized Agent Made Out to
                the Order of Global IME Bank Limited Nepal Marked
              </p>
            </div>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* C */}
            <div className="sub-document form-row flex-row">
              <div className="form-field">
                <label>
                  C. <input type="radio" name="transport" />
                  &nbsp; FOR AIR
                </label>
              </div>
              <p>
                Air Waybill (Original 3 for Shipper) Issued by Carrier or its
                Authorized Agent Consigned to Global IME Bank Limited Nepal,
                Marked
              </p>
            </div>
            <div className="form-radio-group">
              <input
                type="radio"
                id="partialShipmentAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentAllowed">Freight Prepared</label>
              <input
                type="radio"
                id="partialShipmentNotAllowed"
                name="partialShipment"
              />
              <label htmlFor="partialShipmentNotAllowed">
                To collect and notify applicant
              </label>
            </div>

            {/* D */}
            <div className="sub-document form-row flex-row">
              <div className="form-field">
                <label>
                  D. <input type="radio" name="transport" />
                  &nbsp; FOR RAIL
                </label>
              </div>
              <p>
                Copy of Railway Receipt Made Out to the Order of Global IME Bank
                Limited, Nepal and Marked Paid
              </p>
            </div>
          </div>
          <hr></hr>

          {/* 3 */}
          <div className="document-section">
            <label>
              3. <input type="checkbox" />
              Certificate of <input type="text" className="form-input" />
              Origin in
            </label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies Issued by</label>
            <input type="checkbox" />
            <label>Beneficiary</label>
            <input type="checkbox" />
            <label>Chamber of Commerce</label>
            <input type="checkbox" />
            <label>Government Authority</label>
            <input type="checkbox" />
            <label>Other (Specify)</label>
            <input type="text" className="form-input" />
          </div>

          {/* 4 */}
          <div className="document-section">
            <label>
              4. <input type="checkbox" />
              Packing List in
            </label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies</label>
          </div>

          {/*5*/}
          <div className="document-section">
            <label>
              5. <input type="checkbox" />
              Weight List in
            </label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies</label>
          </div>

          {/*6*/}
          <div className="document-section">
            <label>
              6. <input type="checkbox" />
              Insurance Policy or Certificate in
            </label>
            <input type="number" className="form-input" />
            <label>Original/s and</label>
            <input type="number" className="form-input" />
            <label>
              COPY/IES SSUED BY INSURANCE COMPANY IN FAVOUR OF GLOBAL IME BANK
              LIMITED, NEPAL MENTIONING CLAIMS IF ANY SHALL BE PAYABLE IN NEPAL
              IN THE CURRENCY OF CREDIT FOR INVOICE VALUE PLUS 10 PERCENT
              COVERING FOLLOWING RISKS AS PER INSTITUTE CARGO{" "}
            </label>
            <div className="flex-row">
              <input type="checkbox" /> <label>CLAUSE 'A (ALL RISKS)</label>
              <input type="checkbox" />{" "}
              <label>INSTITUTE INLAND TRANSIT CLAUSE A</label>
              <input type="checkbox" /> <label>AIR RISK</label>
              <input type="checkbox" /> <label>MARINE RISK</label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> INSTITUE WAR CLAUSE SRCC TPND,
                TRANSSHIPMENT RISKS IF APPLICABLE IRRESPECTIVE OF PERCENTAGE AND
                COVERING
              </label>
              <label>
                ALL RISKS INCLUDING ROAD RISKS UPTO <input type="text"></input>
              </label>
            </div>
          </div>

          {/*7*/}
          <div className="document-section">
            <label>
              7. <input type="checkbox" />
              OTHER DOCUMENTS (IF APPLICABLE PLEASE KEEP BULLET WISE)
            </label>
            <input type="number" className="form-input" />
            <input type="checkbox"></input>
            <label>Documents (file uploaded required)</label>

            <input type="file" />
          </div>
        </div>

        {/* Other Terms and Conditions */}
        <div className="form-group">
          <h3 className="form-section-title">Other Terms and Conditions</h3>
          <label>Other conditions required as per attached sheet</label>
          <textarea className="full-width form-input"></textarea>
        </div>
        <div className="form-group">
          <label>Separate sheet attached</label>
          <div className="form-radio-group">
            <input type="radio" name="separateSheet" value="yes" />
            <label>Yes</label>
            <input type="radio" name="separateSheet" value="no" />
            <label>No</label>
          </div>
        </div>

        {/* Documents */}
        <div className="form-group">
          <h3 className="form-section-title">Documents</h3>
          <div className="form-section-container flex-row">
            <div className="file-upload-row">
              <label>Performa Invoice</label>
              <input type="file" />
            </div>
            <div className="file-upload-row">
              <label>BLBLNI</label>
              <input type="file" />
            </div>
          </div>
        </div>

        {/* Advising Bank Details */}
        <div className="form-group">
          <h3 className="form-section-title">Advising Bank Details</h3>
          <label>Advising Bank Details</label>
          <input type="text" className="full-width form-input" />
        </div>

        <div className="text-section">
          PLEASE ISSUE IRREVOCABLE LC AS PER ABOVE DETAIL/ TERMS AND CONDITION
          ON OUR ACCOUNT WE GUARANTEE DUE COMPLIANCE / FULFILLMENT OF ALL
          OBLIGATIONS OF THE OPENER / APPLICANT / IMPORTER / BUYER UNDER THIS LC
          AS PER TERMS AND CONDITIONS OF LC, GIBLPOLICIES/PRACTICES, UCPDC, NRB
          REGULATION, DIRECTIVE, CIRCULAR AND STANDARD BANKING PRACTICES, WE
          ALSO UNCONDITIONALLY ACCEPT THE SECURITY AGREEMENT PRINTED IN THIS
          FORM.
        </div>
        <br></br>
        <hr></hr>
        {/*Terms and Conditions*/}
        <div className="form-group tANDc">
          <input type="checkbox" />
          <label>Terms and Conditions Apply</label>
        </div>

        <div className="form-buttons">
          <button className="form-button submit-button" type="submit">
            Submit
          </button>
          <button className="form-button save-button" type="button">
            Save as Draft
          </button>
        </div>
      </div>
    </form>
  );
};

export default LCIssuanceForm;
