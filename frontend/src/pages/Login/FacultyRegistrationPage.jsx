import React, { useState } from "react";
import "./FacultyRegistrationPage.css";

export default function FacultyRegistrationPage({ onRegister }) {
  const [form, setForm] = useState({
    salutation: "", initial: "", staffName: "", designation: "",
    department: "", campus: "", intercom: "", mobile: "", email: "",
    dob: "", dateOfService: "", dateOfSuperannuation: "",
    aadhaar: "", pan: "", bankName: "", branch: "",
    accountNumber: "", ifscCode: ""
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

const handleSubmit = () => {
  if (!form.staffName.trim()) {
    alert("Enter Name");
    return;
  }

  if (onRegister) onRegister(form);

  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);
};
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="registration-page">
      <header className="page-header">
        <h1>Faculty Registration</h1>
        <p>Please fill in your professional and personal details below.</p>
      </header>

      {/* Personal Information */}
      <section className="profile-section-card">
        <h3>Personal Information</h3>
        <div className="fields-grid">
{["salutation", "initial", "staffName", "designation", "department", "campus", "intercom", "mobile", "email"].map(field => (
  <div key={field} className="field-group">
    <label>
      {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
    </label>

    {field === "salutation" ? (
      <select
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
      >
        <option value="">Select Salutation</option>
        <option value="Dr.">Dr.</option>
        <option value="Prof.">Prof.</option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Ms.">Ms.</option>
      </select>
    ) : field === "designation" ? (
      <select
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
      >
        <option value="">Select Designation</option>
        <option value="Professor">Professor</option>
        <option value="Associate Professor">Associate Professor</option>
        <option value="Assistant Professor">Assistant Professor</option>
        <option value="Lecturer">Lecturer</option>
        <option value="Research Scientist">Research Scientist</option>
      </select>
    ) : field === "department" ? (
      <select
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Electronics and Communication">
          Electronics and Communication
        </option>
        <option value="Electrical and Electronics">
          Electrical and Electronics
        </option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Civil Engineering">Civil Engineering</option>
      </select>
    ) : field === "campus" ? (
      <select
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
      >
        <option value="">Select Campus</option>
        <option value="Main Campus">Main Campus</option>
        <option value="City Campus">City Campus</option>
        <option value="Research Campus">Research Campus</option>
      </select>
    ) : (
      <input
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
      />
    )}
  </div>
))}
        </div>
      </section>

      {/* Identity Details */}
      <section className="profile-section-card">
        <h3>Identity Details</h3>
        <div className="fields-grid">
          <div className="field-group"><label>Aadhaar Number</label><input value={form.aadhaar} onChange={(e) => handleChange("aadhaar", e.target.value)} /></div>
          <div className="field-group"><label>PAN Number</label><input value={form.pan} onChange={(e) => handleChange("pan", e.target.value)} /></div>
          <div className="field-group"><label>Aadhaar Card</label><input type="file" /></div>
          <div className="field-group"><label>PAN Card</label><input type="file" /></div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="profile-section-card">
        <h3>Bank Details</h3>
        <div className="fields-grid">
          <div className="field-group"><label>Bank Name</label><input value={form.bankName} onChange={(e) => handleChange("bankName", e.target.value)} /></div>
          <div className="field-group"><label>Branch</label><input value={form.branch} onChange={(e) => handleChange("branch", e.target.value)} /></div>
          <div className="field-group"><label>Account Number</label><input value={form.accountNumber} onChange={(e) => handleChange("accountNumber", e.target.value)} /></div>
          <div className="field-group"><label>IFSC Code</label><input value={form.ifscCode} onChange={(e) => handleChange("ifscCode", e.target.value)} /></div>
          <div className="field-group"><label>Passbook / Cancelled Cheque</label><input type="file" /></div>
        </div>
      </section>

      <button className="register-btn" onClick={handleSubmit}>Complete Registration</button>
      {showSuccess && (
  <div className="success-overlay">
    <div className="success-modal">
      <div className="success-checkmark">✓</div>
      <h2>Registration Completed</h2>
      <p>Your faculty profile has been registered successfully.</p>
    </div>
  </div>
)}
    </div>
  );
}