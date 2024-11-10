import React from 'react';
import './Form.css';

function GoodsForm() {
  return (
    <div className="form-container">
      <label className="section-title">Description, Specification and Quality of Goods and/or Services</label>
      <hr />
      
      <div className="form-section">
        <label>Description, Specification and Quality of Goods and/or Services</label>
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
        <input type="checkbox" /> <label>1. Signed Commercial Invoice, Tax Invoice in Original/s and Copy/Yes</label>
      </div>

      <div className="document-section">
        <label>2. Transportation Document</label>

        <div className="sub-document">
          <input type="radio" name="transport" /> <label>A. For Land</label>
          <p>Lorry Receipt/Truck Receipt/Consignment Note Original Consignee Copy In</p>
          <input type="text" />
          <p>Original/s and</p>
          <input type="text" />
          <p>Copies Issued by Carrier or its Authorized Agent Consigned to Global IME Bank Limited Nepal Marked</p>
          <input type="radio" name="freight" /> <label>Freight Prepaid</label>
          <input type="radio" name="freight" /> <label>To Collect and Notify Applicant</label>
        </div>

        <div className="sub-document">
          <input type="radio" name="transport" /> <label>B. For Sea</label>
          <p>3/3 Set of Original Clean Shipped On Board Ocean/Multimodal Bill of Landing Issued by Carrier or its Authorized Agent Made Out to the Order of Global IME Bank Limited Nepal Marked</p>
          <input type="radio" name="freight" /> <label>Freight Prepaid</label>
          <input type="radio" name="freight" /> <label>To Collect and Notify Applicant</label>
        </div>

        <div className="sub-document">
          <input type="radio" name="transport" /> <label>C. For Air</label>
          <p>Air Waybill (Original 3 for Shipper) Issued by Carrier or its Authorized Agent Consigned to Global IME Bank Limited Nepal, Marked</p>
          <input type="radio" name="freight" /> <label>Freight Prepaid</label>
          <input type="radio" name="freight" /> <label>To Collect and Notify Applicant</label>
        </div>

        <div className="sub-document">
          <input type="radio" name="transport" /> <label>D. For All</label>
          <p>Copy of Railway Receipt Made Out to the Order of Global IME Bank Limited, Nepal and Marked Paid</p>
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
        <input type="checkbox" /> <label>6. Insurance Policy or Certificate in</label>
        <input type="number" />
        <label>Original/s and</label>
        <input type="number" />
      </div>
    </div>
  );
}

export default GoodsForm;