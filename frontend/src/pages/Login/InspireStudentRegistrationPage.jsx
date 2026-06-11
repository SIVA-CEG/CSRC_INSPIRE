import React, { useState } from "react";
import "./InspireStudentRegistrationPage.css";

export default function InspireStudentRegistrationPage() {
  const [form, setForm] = useState({});

  const handleChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="student-registration-page">

      <div className="student-card">
        <h2>INSPIRE Fellowship User Registration</h2>

        <div className="student-grid">

          <div className="field">
            <label>Funding Agency *</label>
            <select
  value={form.fundingAgency || ""}
  onChange={(e) => handleChange("fundingAgency", e.target.value)}
>
  <option value="">Select Funding Agency</option>
  <option value="DST">
    Department of Science and Technology (DST)
  </option>
</select>
          </div>

          <div className="field">
            <label>Project Scheme *</label>
            <select
  value={form.projectScheme || ""}
  onChange={(e) => handleChange("projectScheme", e.target.value)}
>
  <option value="">Select Scheme</option>
  <option value="INSPIRE Fellowship">
    INSPIRE Fellowship
  </option>
</select>
          </div>

          <div className="field">
            <label>Scheme Code</label>
            <input
              value={form.schemeCode || ""}
              onChange={(e)=>handleChange("schemeCode",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Salutation *</label>
            <select
  value={form.salutation || ""}
  onChange={(e) => handleChange("salutation", e.target.value)}
>
  <option value="">Select</option>
  <option value="Mr">Mr</option>
  <option value="Ms">Ms</option>
  <option value="Mrs">Mrs</option>
</select>
          </div>

          <div className="field">
            <label>Initial</label>
            <input
              value={form.initial || ""}
              onChange={(e)=>handleChange("initial",e.target.value)}
            />
          </div>

          <div className="field field-span-2">
            <label>Name *</label>
            <input
              value={form.name || ""}
              onChange={(e)=>handleChange("name",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Designation *</label>
            <select
  value={form.designation || ""}
  onChange={(e) => handleChange("designation", e.target.value)}
>
  <option value="">Select Designation</option>
  <option value="DST INSPIRE Fellow">
    DST INSPIRE Fellow
  </option>
</select>
          </div>

          <div className="field field-span-2">
            <label>Department *</label>
            <select
  value={form.department || ""}
  onChange={(e) => handleChange("department", e.target.value)}
>
  <option value="">Select Department</option>
  <option value="Information Technology">
    Information Technology
  </option>
  <option value="Computer Science">
    Computer Science
  </option>
  <option value="Centre for Nanoscience and Technology">
    Centre for Nanoscience and Technology
  </option>
</select>
          </div>

          <div className="field">
            <label>Campus *</label>
            <select
  value={form.campus || ""}
  onChange={(e) => handleChange("campus", e.target.value)}
>
  <option value="">Select Campus</option>
  <option value="ACT Campus">
    ACT Campus
  </option>
  <option value="CEG Campus">
    CEG Campus
  </option>
  <option value="MIT Campus">
    MIT Campus
  </option>
  <option value="SAP Campus">
    SAP Campus
  </option>
</select>
          </div>

          <div className="field">
            <label>Intercom *</label>
            <input
              value={form.intercom || ""}
              onChange={(e)=>handleChange("intercom",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Mobile *</label>
            <input
              value={form.mobile || ""}
              onChange={(e)=>handleChange("mobile",e.target.value)}
            />
          </div>

          <div className="field field-span-2">
            <label>Email *</label>
            <input
              value={form.email || ""}
              onChange={(e)=>handleChange("email",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Aadhaar *</label>
            <input
              value={form.aadhaar || ""}
              onChange={(e)=>handleChange("aadhaar",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Start Date *</label>
            <input
              type="date"
              value={form.startDate || ""}
              onChange={(e)=>handleChange("startDate",e.target.value)}
            />
          </div>

          <div className="field field-span-2">
            <label>Mentor / Supervisor</label>
            <input
              value={form.mentor || ""}
              onChange={(e)=>handleChange("mentor",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Eligible Leave / Month *</label>
            <input
              value={form.leave || ""}
              onChange={(e)=>handleChange("leave",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Monthly Fellowship *</label>
            <input
              value={form.fellowship || ""}
              onChange={(e)=>handleChange("fellowship",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Fellowship Head *</label>
            <input
              value={form.fellowshipHead || ""}
              onChange={(e)=>handleChange("fellowshipHead",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Monthly HRA *</label>
            <input
              value={form.hra || ""}
              onChange={(e)=>handleChange("hra",e.target.value)}
            />
          </div>

          <div className="field">
            <label>HRA Head *</label>
            <input
              value={form.hraHead || ""}
              onChange={(e)=>handleChange("hraHead",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Arrears Head *</label>
            <input
              value={form.arrearsHead || ""}
              onChange={(e)=>handleChange("arrearsHead",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Account Number *</label>
            <input
              value={form.accountNumber || ""}
              onChange={(e)=>handleChange("accountNumber",e.target.value)}
            />
          </div>

          <div className="field">
            <label>Bank Name *</label>
            <input
              value={form.bankName || ""}
              onChange={(e)=>handleChange("bankName",e.target.value)}
            />
          </div>

          <div className="field">
            <label>IFSC Code *</label>
            <input
              value={form.ifsc || ""}
              onChange={(e)=>handleChange("ifsc",e.target.value)}
            />
          </div>

          <div className="field">
            <label>PAN Number</label>
            <input
              value={form.pan || ""}
              onChange={(e)=>handleChange("pan",e.target.value)}
            />
          </div>

          <div className="field field-span-3">
            <label>Remarks</label>
            <textarea
              rows="4"
              value={form.remarks || ""}
              onChange={(e)=>handleChange("remarks",e.target.value)}
            />
          </div>

        </div>

        <button className="register-btn">
  Complete Registration
</button>

      </div>
    </div>
  );
}