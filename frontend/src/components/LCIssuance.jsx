import React from "react";
import "./css/LCIssuance.css";

function LCIssuance() {
  return (
    <div className="form-container">
      {/* Title */}
      <h1 className="form-title">LC FORM DECENTRALIZED</h1>

      {/* Nature of LC */}
      <div className="form-field">
        <label className="form-label">NATURE OF LC</label>
        <select className="form-select">
          <option value="">Select Nature of LC</option>
          <option value="sight">Sight LC</option>
          <option value="usance">Usance LC</option>
        </select>
      </div>

      {/* Applicant Name and Address */}
      <div className="form-section">
        <label className="form-section-title">APPLICANT NAME AND ADDRESS</label>
        <hr className="form-horizontal-line" />
        <div className="form-field">
          <label className="form-label">NAME</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">ADDRESS</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">EMAIL</label>
          <input type="email" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">PAN NUMBER</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">EXIM CODE</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">PHONE (+977)</label>
          <input type="tel" className="form-input" placeholder="+977" />
        </div>
      </div>

      {/* Beneficiary Name and Address */}
      <div className="form-section">
        <label className="form-section-title">
          BENEFICIARY NAME AND ADDRESS
        </label>
        <hr className="form-horizontal-line" />
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
        <div className="form-field">
          <label className="form-label">ADDRESS</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">PHONE</label>
          <input type="tel" className="form-input" />
        </div>
        <div className="form-field">
          <label className="form-label">EMAIL</label>
          <input type="email" className="form-input" />
        </div>
      </div>

      {/* Mode of Transmission, Currency, Tolerance */}
      <div className="form-section">
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
          <div className="form-field">
            <label className="form-label">PERCENTAGE</label>
            <input type="number" className="form-input" />
          </div>
        </div>
      </div>

      {/* Incoterms */}
      <div className="form-section">
        <label className="form-section-title">INCOTERMS</label>
        <hr className="form-horizontal-line" />
        <div className="form-field">
          <label className="form-label">TYPE</label>
          <select className="form-select">
            <option value="">Select Type</option>
            <option value="fob">FOB</option>
            <option value="cif">CIF</option>
          </select>
        </div>
      </div>

      {/* Tenure/Payment Terms */}
      <div className="form-section">
        <label className="form-section-title">TENURE/PAYMENT TERMS</label>
        <hr className="form-horizontal-line" />
        <div className="form-radio">
          <input type="radio" id="sight" name="paymentTerms" />
          <label htmlFor="sight">SIGHT</label>
        </div>
        <div className="form-radio">
          <input type="radio" id="usance" name="paymentTerms" />
          <label htmlFor="usance">USANCE</label>
        </div>
        <div className="form-radio">
          <input type="radio" id="mixedPayment" name="paymentTerms" />
          <label htmlFor="mixedPayment">MIXED PAYMENT</label>
        </div>
        <div className="form-radio">
          <input type="radio" id="deferredPayment" name="paymentTerms" />
          <label htmlFor="deferredPayment">DEFERRED PAYMENT</label>
        </div>
        <div className="form-field">
          <label className="form-label">OTHER PAYMENT DETAILS</label>
          <input type="text" className="form-input" />
        </div>
      </div>

      {/* Partial Shipment, Transshipment, Shipment From */}
      <div className="form-section">
        <div className="label-row">
          <label>PARTIAL SHIPMENT</label>
          <label>TRANSSHIPMENT</label>
          <label>SHIPMENT FORM</label>
        </div>
        <div className="input-row">
          <div className="radio-group">
            <label>
              <input type="radio" name="partialShipment" value="allowed" />{" "}
              ALLOWED
            </label>
            <label>
              <input type="radio" name="partialShipment" value="notAllowed" />{" "}
              NOT ALLOWED
            </label>
          </div>
          <div className="radio-group">
            <label>
              <input type="radio" name="transshipment" value="allowed" />{" "}
              ALLOWED
            </label>
            <label>
              <input type="radio" name="transshipment" value="notAllowed" /> NOT
              ALLOWED
            </label>
          </div>
          <input
            type="text"
            placeholder="Shipment Form/Place of Taking in Charge/Dispatch from/Place of Receipt"
          />
        </div>
      </div>

      {/* Port of Loading, Port of Discharge */}
      <div className="form-section">
        <div className="label-row">
          <label>PORT OF LOADING/AIRPORT OF DEPARTURE</label>
          <label>PORT OF DISCHARGE/AIRPORT OF DESTINATION</label>
        </div>
        <div className="input-row">
          <input type="text" placeholder="Enter Port of Loading" />
          <input type="text" placeholder="Enter Port of Discharge" />
        </div>
      </div>

      {/* Place of Final Destination, Custom Entry Point in Nepal */}
      <div className="form-section">
        <div className="label-row">
          <label>PLACE OF FINAL DESTINATION/PLACE OF DELIVERY</label>
          <label>CUSTOM ENTRY POINT IN NEPAL</label>
        </div>
        <div className="input-row">
          <input
            type="text"
            placeholder="Final Destination/Place of Delivery"
          />
          <input type="text" placeholder="Custom Entry Point" />
        </div>
        <label>If other (specify):</label>
        <input type="text" placeholder="Specify if other" />
      </div>

      {/* Expiry/Shipment Details */}
      <div className="form-section">
        <label>EXPIRY / SHIPMENT DETAILS</label>
        <hr />
        <div className="label-row">
          <label>LATEST DATE OF SHIPMENT</label>
          <label>EXPIRY DATE</label>
          <label>DOCUMENT PRESENTATION PERIOD</label>
          <label>PLACE OF EXPIRY</label>
        </div>
        <div className="input-row">
          <input type="date" />
          <input type="date" />
          <input type="text" placeholder="Presentation Period" />
          <input type="text" placeholder="Place of Expiry" />
        </div>
      </div>

      {/* TT Reimbursement, Confirmation Status, Bank Charges */}
      <div className="form-section">
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
              <input type="radio" name="bankChargesInside" value="applicant" />{" "}
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
              <input type="radio" name="bankChargesOutside" value="applicant" />{" "}
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
      </div>
      <div className="form-container">
        <label className="section-title">
          Description, Specification and Quality of Goods and/or Services
        </label>
        <hr />

        <div className="form-section">
          <label>
            Description, Specification and Quality of Goods and/or Services
          </label>
          <input type="text" className="full-width" />
        </div>

        <div className="form-row">
          <label>As Per Performa Invoice Number</label>
          <input type="text" />
          <label>Dated (MM-DD-YY)</label>
          <input type="date" />
          <label>Master Good</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <label>HS Code</label>
          <input type="text" />
          <label>Selected Code</label>
          <input type="text" />
          <label>Quantity</label>
          <input type="number" />
          <label>Rate</label>
          <input type="text" />
        </div>

        <label className="section-title">Authorized to Debit Our Account</label>
        <hr />

        <div className="form-section">
          <label>Account Number</label>
          <input type="text" />
        </div>

        <label className="section-title">Documents Required</label>

        <div className="document-section">
          <input type="checkbox" />{" "}
          <label>
            1. Signed Commercial Invoice, Tax Invoice in Original/s and Copy/Yes
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
            <input type="text" />
            <p>Original/s and</p>
            <input type="text" />
            <p>
              Copies Issued by Carrier or its Authorized Agent Consigned to
              Global IME Bank Limited Nepal Marked
            </p>
            <input type="radio" name="freight" /> <label>Freight Prepaid</label>
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
            <input type="radio" name="freight" /> <label>Freight Prepaid</label>
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
            <input type="radio" name="freight" /> <label>Freight Prepaid</label>
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
          <input type="text" />
          <label>Original/s and</label>
          <input type="text" />
          <label>Copy/ies Issued by</label>
          <input type="checkbox" /> <label>Beneficiary</label>
          <input type="checkbox" /> <label>Chamber of Commerce</label>
          <input type="checkbox" /> <label>Government Authority</label>
          <input type="checkbox" /> <label>Other (Specify)</label>
          <input type="text" />
        </div>

        <div className="document-section">
          <input type="checkbox" /> <label>4. Packing List in</label>
          <input type="text" />
          <label>Original/s and</label>
          <input type="text" />
          <label>Copy/ies</label>
        </div>

        <div className="document-section">
          <input type="checkbox" /> <label>5. Weight List in</label>
          <input type="text" />
          <label>Original/s and</label>
          <input type="text" />
          <label>Copy/ies</label>
        </div>

        <div className="document-section">
          <input type="checkbox" />{" "}
          <label>6. Insurance Policy or Certificate in</label>
          <input type="number" />
          <label>Original/s and</label>
          <input type="number" />
        </div>
      </div>

      <div className="form-container">
        <div className="text-section">
          Copy/ies issued by insurance company in favour of Global IME Bank
          Limited Nepal, mentioning claims if any shall be payable in Nepal in
          the currency of credit for invoice values plus 10 percent covering
          following risks as per institute cargo.
        </div>

        <div className="checkbox-section">
          <input type="checkbox" /> <label>Clause 'A' (All Risk)</label>
          <input type="checkbox" />{" "}
          <label>Institute Inland Transit Clause 'A'</label>
          <input type="checkbox" /> <label>Air Risk</label>
          <input type="checkbox" /> <label>Marine Risk</label>
        </div>

        <div className="checkbox-section">
          <input type="checkbox" />{" "}
          <label>
            Institute War Clauses, SRCC, TPND, Transshipment Risk if applicable
            irrespective of percentage and covering
          </label>
        </div>

        <div className="form-row">
          <label>All risks including risks up to</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <label>7.</label>
          <input type="checkbox" />{" "}
          <label>Other Document (if applicable, please keep bullet-wise)</label>
        </div>
        <textarea className="full-width" rows="4"></textarea>

        <div className="form-row">
          <input type="checkbox" />{" "}
          <label>Document (files uploaded requirement)</label>
          <label>No files currently selected for upload</label>
        </div>

        <div className="form-section">
          <label>Other Terms and Conditions</label>
          <label>Other conditions required as per attached sheet</label>
          <textarea className="full-width"></textarea>
        </div>

        <div className="form-row">
          <label>Separate sheet attached</label>
          <input type="radio" name="separateSheet" /> <label>Yes</label>
          <input type="radio" name="separateSheet" /> <label>No</label>
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
          <input type="text" className="full-width" />
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

        <div className="button-section">
          <button type="submit">Submit</button>
          <button type="button">Save as Draft</button>
        </div>
      </div>
    </div>
  );
}

export default LCIssuance;
