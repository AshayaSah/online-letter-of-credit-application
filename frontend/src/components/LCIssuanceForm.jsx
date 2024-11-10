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
    navigate("/lc-issuance"); // Navigate to the Corporate page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1 className="form-title">LC FORM DECENTRALIZED</h1>

        {/* Nature of LC */}
        <FormField label="NATURE OF LC">
          <select className="form-select">
            <option value="">Select Nature of LC</option>
            <option value="sight">Sight LC</option>
            <option value="usance">Usance LC</option>
          </select>
        </FormField>

        {/* Applicant Name and Address */}
        <FormSection title="APPLICANT NAME AND ADDRESS">
          <FormField label="NAME">
            <input
              type="text"
              className="form-input"
              onChange={(e) => setRequestName(e.target.value)}
            />
          </FormField>
          <FormField label="ADDRESS">
            <input type="text" className="form-input" />
          </FormField>
          <FormField label="EMAIL">
            <input
              type="email"
              className="form-input"
              onChange={(e) => setRequestID(e.target.value)}
            />
          </FormField>
          <FormField label="PAN NUMBER">
            <input type="text" className="form-input" />
          </FormField>
          <FormField label="EXIM CODE">
            <input type="text" className="form-input" />
          </FormField>
          <FormField label="PHONE (+977)">
            <input type="tel" className="form-input" placeholder="+977" />
          </FormField>
        </FormSection>

        {/* Beneficiary Name and Address */}
        <FormSection title="BENEFICIARY NAME AND ADDRESS">
          <FormField label="NAME">
            <input type="text" className="form-input" />
          </FormField>
          <FormField label="COUNTRY">
            <select className="form-select">
              <option value="">Select Country</option>
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
            </select>
          </FormField>
          <FormField label="ADDRESS">
            <input type="text" className="form-input" />
          </FormField>
          <FormField label="PHONE">
            <input type="tel" className="form-input" />
          </FormField>
          <FormField label="EMAIL">
            <input type="email" className="form-input" />
          </FormField>
        </FormSection>

        {/* Mode of Transmission, Currency, Tolerance */}
        <FormSection title="MODE OF TRANSMISSION, CURRENCY, TOLERANCE">
          <div className="form-section-title-row">
            <label className="form-label">MODE OF TRANSMISSION</label>
            <label className="form-label">CURRENCY AND AMOUNT</label>
            <label className="form-label">TOLERANCE</label>
          </div>
          <hr className="form-horizontal-line" />
          <div className="form-row">
            <div className="form-radio">
              <input type="radio" id="teleTransmission" name="transmission" />
              <label htmlFor="teleTransmission">BY TELE TRANSMISSION</label>
            </div>
            <FormField label="CURRENCY">
              <select className="form-select">
                <option value="">Select Currency</option>
                <option value="usd">USD</option>
                <option value="npr">NPR</option>
              </select>
            </FormField>
            <FormField label="AMOUNT">
              <input type="text" className="form-input" />
            </FormField>
            <FormField label="PERCENTAGE">
              <input type="number" className="form-input" />
            </FormField>
          </div>
        </FormSection>

        {/* Incoterms */}
        <FormSection title="INCOTERMS">
          <FormField label="TYPE">
            <select className="form-select">
              <option value="">Select Type</option>
              <option value="fob">FOB</option>
              <option value="cif">CIF</option>
            </select>
          </FormField>
        </FormSection>

        {/* Tenure/Payment Terms */}
        <FormSection title="TENURE/PAYMENT TERMS">
          <RadioGroup
            name="paymentTerms"
            options={[
              { value: "sight", label: "SIGHT" },
              { value: "usance", label: "USANCE" },
              { value: "mixedPayment", label: "MIXED PAYMENT" },
              { value: "deferredPayment", label: "DEFERRED PAYMENT" },
            ]}
          />
          <FormField label="OTHER PAYMENT DETAILS">
            <input type="text" className="form-input" />
          </FormField>
        </FormSection>

        {/* Partial Shipment, Transshipment, Shipment From */}
        <FormSection title="PARTIAL SHIPMENT, TRANSSHIPMENT, SHIPMENT FROM">
          <div className="label-row">
            <label>PARTIAL SHIPMENT</label>
            <label>TRANSSHIPMENT</label>
            <label>SHIPMENT FORM</label>
          </div>
          <div className="input-row">
            <RadioGroup
              name="partialShipment"
              options={[
                { value: "allowed", label: "ALLOWED" },
                { value: "notAllowed", label: "NOT ALLOWED" },
              ]}
            />
            <RadioGroup
              name="transshipment"
              options={[
                { value: "allowed", label: "ALLOWED" },
                { value: "notAllowed", label: "NOT ALLOWED" },
              ]}
            />
            <input
              type="text"
              placeholder="Shipment Form/Place of Taking in Charge/Dispatch from/Place of Receipt"
              className="form-input"
            />
          </div>
        </FormSection>

        {/* Port of Loading, Port of Discharge */}
        <FormSection title="PORT OF LOADING/AIRPORT OF DEPARTURE & PORT OF DISCHARGE/AIRPORT OF DESTINATION">
          <div className="input-row">
            <FormField label="PORT OF LOADING">
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Loading"
              />
            </FormField>
            <FormField label="PORT OF DISCHARGE">
              <input
                type="text"
                className="form-input"
                placeholder="Enter Port of Discharge"
              />
            </FormField>
          </div>
        </FormSection>

        {/* Place of Final Destination, Custom Entry Point in Nepal */}
        <FormSection title="PLACE OF FINAL DESTINATION/PLACE OF DELIVERY & CUSTOM ENTRY POINT IN NEPAL">
          <div className="input-row">
            <FormField label="PLACE OF FINAL DESTINATION">
              <input
                type="text"
                className="form-input"
                placeholder="Final Destination/Place of Delivery"
              />
            </FormField>
            <FormField label="CUSTOM ENTRY POINT">
              <input
                type="text"
                className="form-input"
                placeholder="Custom Entry Point"
              />
            </FormField>
          </div>
          <FormField label="If other (specify):">
            <input
              type="text"
              className="form-input"
              placeholder="Specify if other"
            />
          </FormField>
        </FormSection>

        {/* Expiry/Shipment Details */}
        <FormSection title="EXPIRY / SHIPMENT DETAILS">
          <div className="label-row">
            <label>LATEST DATE OF SHIPMENT</label>
            <label>EXPIRY DATE</label>
            <label>DOCUMENT PRESENTATION PERIOD</label>
            <label>PLACE OF EXPIRY</label>
          </div>
          <div className="input-row">
            <FormField>
              <input type="date" className="form-input" />
            </FormField>
            <FormField>
              <input type="date" className="form-input" />
            </FormField>
            <FormField>
              <input
                type="text"
                className="form-input"
                placeholder="Presentation Period"
              />
            </FormField>
            <FormField>
              <input
                type="text"
                className="form-input"
                placeholder="Place of Expiry"
              />
            </FormField>
          </div>
        </FormSection>

        {/* TT Re imbursement, Confirmation Status, Bank Charges */}
        <FormSection title="TT REIMBURSEMENT, CONFIRMATION STATUS, BANK CHARGES">
          <div className="label-row">
            <label>TT REIMBURSEMENT</label>
            <label>CONFIRMATION STATUS</label>
            <label>BANK CHARGES</label>
          </div>
          <div className="input-row">
            <div className="radio-group">
              <label>
                <input type="radio" name="ttReimbursement" value="allowed" />{" "}
                ALLOWED
              </label>
              <label>
                <input type="radio" name="ttReimbursement" value="notAllowed" />{" "}
                NOT ALLOWED
              </label>
              <label>Charges (if allowed):</label>
              <label>
                <input type="radio" name="ttCharges" value="applicant" />{" "}
                APPLICANT
              </label>
              <label>
                <input type="radio" name="ttCharges" value="beneficiary" />{" "}
                BENEFICIARY
              </label>
            </div>

            <div className="radio-group">
              <label>
                <input type="radio" name="confirmationStatus" value="without" />{" "}
                WITHOUT
              </label>
              <label>
                <input type="radio" name="confirmationStatus" value="mayAdd" />{" "}
                MAY ADD
              </label>
              <label>
                <input type="radio" name="confirmationStatus" value="add" /> ADD
              </label>
              <label>Charges:</label>
              <label>
                <input
                  type="radio"
                  name="confirmationCharges"
                  value="applicant"
                />{" "}
                APPLICANT
              </label>
              <label>
                <input
                  type="radio"
                  name="confirmationCharges"
                  value="beneficiary"
                />{" "}
                BENEFICIARY
              </label>
            </div>

            <div className="radio-group">
              <label>Inside Nepal:</label>
              <label>
                <input
                  type="radio"
                  name="bankChargesInside"
                  value="applicant"
                />{" "}
                APPLICANT
              </label>
              <label>
                <input
                  type="radio"
                  name="bankChargesInside"
                  value="beneficiary"
                />{" "}
                BENEFICIARY
              </label>
              <label>Outside Nepal:</label>
              <label>
                <input
                  type="radio"
                  name="bankChargesOutside"
                  value="applicant"
                />{" "}
                APPLICANT
              </label>
              <label>
                <input
                  type="radio"
                  name="bankChargesOutside"
                  value="beneficiary"
                />{" "}
                BENEFICIARY
              </label>
              <label>
                <input type="radio" name="bankChargesOutside" value="other" />{" "}
                OTHER
              </label>
            </div>
          </div>
        </FormSection>

        {/* Description, Specification and Quality of Goods and/or Services */}
        <FormSection title="DESCRIPTION, SPECIFICATION AND QUALITY OF GOODS AND/OR SERVICES">
          <FormField label="Description, Specification and Quality of Goods and/or Services">
            <input type="text" className="full-width form-input" />
          </FormField>

          <div className="form-row">
            <FormField label="As Per Performa Invoice Number">
              <input type="text" className="form-input" />
            </FormField>
            <FormField label="Dated (MM-DD-YY)">
              <input type="date" className="form-input" />
            </FormField>
            <FormField label="Master Good">
              <input type="text" className="form-input" />
            </FormField>
          </div>

          <div className="form-row">
            <FormField label="HS Code">
              <input type="text" className="form-input" />
            </FormField>
            <FormField label="Selected Code">
              <input type="text" className="form-input" />
            </FormField>
            <FormField label="Quantity">
              <input type="number" className="form-input" />
            </FormField>
            <FormField label="Rate">
              <input type="text" className="form-input" />
            </FormField>
          </div>
        </FormSection>

        {/* Authorized to Debit Our Account */}
        <FormSection title="AUTHORIZED TO DEBIT OUR ACCOUNT">
          <FormField label="Account Number">
            <input type="text" className="form-input" />
          </FormField>
        </FormSection>

        {/* Documents Required */}
        <FormSection title="DOCUMENTS REQUIRED">
          <div className="document-section">
            <input type="checkbox" />{" "}
            <label>
              1. Signed Commercial Invoice, Tax Invoice in Original/s and
              Copy/Yes
            </label>
          </div>

          <div className="document-section">
            <label>2. Transportation Document</label>
            <div className="sub-document">
              <input type="radio" name="transport" /> <label>A. For Land</label>
              <p>
                Lorry Receipt/Truck Receipt/Consignment Note Original Consignee
                Copy In
              </p>
              <input type="text" className="form-input" />
              <p>Original/s and</p>
              <input type="text" className="form-input" />
              <p>
                Copies Issued by Carrier or its Authorized Agent Consigned to
                Global IME Bank Limited Nepal Marked
              </p>
              <input type="radio" name="freight" />{" "}
              <label>Freight Prepaid</label>
              <input type="radio" name="freight" />{" "}
              <label>To Collect and Notify Applicant</label>
            </div>

            <div className="sub-document">
              <input type="radio" name="transport" /> <label>B. For Sea</label>
              <p>
                3/3 Set of Original Clean Shipped On Board Ocean/Multimodal Bill
                of Landing Issued by Carrier or its Authorized Agent Made Out to
                the Order of Global IME Bank Limited Nepal Marked
              </p>
              <input type="radio" name="freight" />{" "}
              <label>Freight Prepaid</label>
              <input type="radio" name="freight" />{" "}
              <label>To Collect and Notify Applicant</label>
            </div>

            <div className="sub-document">
              <input type="radio" name="transport" /> <label>C. For Air</label>
              <p>
                Air Waybill (Original 3 for Shipper) Issued by Carrier or its
                Authorized Agent Consigned to Global IME Bank Limited Nepal,
                Marked
              </p>
              <input type="radio" name="freight" />{" "}
              <label>Freight Prepaid</label>
              <input type="radio" name="freight" />{" "}
              <label>To Collect and Notify Applicant</label>
            </div>

            <div className="sub-document">
              <input type="radio" name="transport" /> <label>D. For All</label>
              <p>
                Copy of Railway Receipt Made Out to the Order of Global IME Bank
                Limited, Nepal and Marked Paid
              </p>
            </div>
          </div>

          <div className="document-section">
            <input type="checkbox" /> <label>3. Certificate of Origin in</label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies Issued by</label>
            <input type="checkbox" /> <label>Beneficiary</label>
            <input type="checkbox" /> <label>Chamber of Commerce</label>
            <input type="checkbox" /> <label>Government Authority</label>
            <input type="checkbox" /> <label>Other (Specify)</label>
            <input type="text" className="form-input" />
          </div>

          <div className="document-section">
            <input type="checkbox" /> <label>4. Packing List in</label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies</label>
          </div>

          <div className="document-section">
            <input type="checkbox" /> <label>5. Weight List in</label>
            <input type="text" className="form-input" />
            <label>Original/s and</label>
            <input type="text" className="form-input" />
            <label>Copy/ies</label>
          </div>

          <div className="document-section">
            <input type="checkbox" />{" "}
            <label>6. Insurance Policy or Certificate in</label>
            <input type="number" className="form-input" />
            <label>Original/s and</label>
            <input type="number" className="form-input" />
          </div>
        </FormSection>

        <div className="form-containe">
          <div className="text-section">
            Copy/ies issued by insurance company in favour of Global IME Bank
            Limited Nepal, mentioning claims if any shall be payable in Nepal in
            the currency of credit for invoice values plus 10 percent covering
            following risks as per institute cargo.
          </div>

          <div className="checkbox-section">
            <input type="checkbox" />{" "}
            <label>Clause 'A' ```jsx (All Risk)</label>
            <input type="checkbox" />{" "}
            <label>Institute Inland Transit Clause 'A'</label>
            <input type="checkbox" /> <label>Air Risk</label>
            <input type="checkbox" /> <label>Marine Risk</label>
          </div>

          <div className="checkbox-section">
            <input type="checkbox" />{" "}
            <label>
              Institute War Clauses, SRCC, TPND, Transshipment Risk if
              applicable irrespective of percentage and covering
            </label>
          </div>

          <div className="form-row">
            <label>All risks including risks up to</label>
            <input type="text" className="form-input" />
          </div>

          <div className="form-row">
            <label>7.</label>
            <input type="checkbox" />{" "}
            <label>
              Other Document (if applicable, please keep bullet-wise)
            </label>
          </div>
          <textarea className="full-width form-input" rows="4"></textarea>

          <div className="form-row">
            <input type="checkbox" />{" "}
            <label>Document (files uploaded requirement)</label>
            <label>No files currently selected for upload</label>
          </div>

          <div className="form-section">
            <label>Other Terms and Conditions</label>
            <label>Other conditions required as per attached sheet</label>
            <textarea className="full-width form-input"></textarea>
          </div>

          <div className="form-row">
            <label>Separate sheet attached</label>
            <input type="radio" name="separateSheet" value="yes" />{" "}
            <label>Yes</label>
            <input type="radio" name="separateSheet" value="no" />{" "}
            <label>No</label>
          </div>

          <div className="form-section">
            <label>Documents</label>
            <div className="file-upload-row">
              <label>Performa Invoice</label>
              <input type="file" />
            </div>
            <div className="file-upload-row">
              <label>BLBLNI</label>
              <input type="file" />
            </div>
          </div>

          <div className="form-section">
            <label>Advising Bank Details</label>
            <input type="text" className="full-width form-input" />
          </div>

          <div className="text-section">
            Please issue irrevocable LC as per above details/terms and condition
            on our account. We guarantee due compliance/fulfillment of all
            obligation of the opener/account/importer/buyer under this LC as per
            terms and conditions of LC.
          </div>

          <div className="form-row">
            <input type="checkbox" /> <label>Terms and Conditions Apply</label>
          </div>

          <div className="form-buttons">
            <button className="form-button submit-button" type="submit">Submit</button>
            <button className="form-button save-button" type="button">Save as Draft</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LCIssuanceForm;
