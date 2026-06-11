import React, { useState } from "react";
import "./Profile.css";

const fundingAgencies = [
  "Department of Science and Technology, New Delhi {DST}",
  "Department of Biotechnology {DBT}",
  "Council of Scientific & Industrial Research {CSIR}",
];

const projectSchemes = ["INSPIRE Fellowship", "SERB-SRG", "NPDF"];

const schemeCodes = { "INSPIRE Fellowship": "4305", "SERB-SRG": "4210", "NPDF": "4410" };

const designations = ["DST INSPIRE Fellow", "Research Associate", "Senior Research Fellow"];

const departments = [
  "Centre for Nanoscience And Technology (Nano Tech)",
  "Department of Computer Science and Engineering",
  "Department of Electronics and Communication Engineering",
  "Department of Chemistry",
];

const campuses = [
  "ACT Campus (ACT Campus)",
  "CEG Campus (CEG Campus)",
  "MIT Campus (MIT Campus)",
];

const fellowshipHeads = ["Fellowship", "Stipend", "Grant"];
const hraHeads = ["HRA (27%)", "HRA (16%)", "HRA (8%)"];
const arrearHeads = ["Arrear", "Arrear-HRA", "Arrear-Fellowship"];

const mentors = [
  "Arivanandhan M., Professor, Centre for Nanoscience And Technology, ACT Campus",
  "Rajkumar S., Associate Professor, Department of Chemistry, CEG Campus",
  "Priya R., Professor, Department of Physics, MIT Campus",
];

export default function Profile() {
  const [form, setForm] = useState({
    fundingAgency: fundingAgencies[0],
    projectScheme: "INSPIRE Fellowship",
    schemeCode: "4305",
    salutation: "Mr",
    initial: "M",
    facultyName: "Sivakumar",
    designation: "DST INSPIRE Fellow",
    department: departments[0],
    campus: campuses[0],
    intercom: "9113",
    mobile: "9659610627",
    email: "sivakumar1000tamilan@gmail.com",
    aadhar: "521965109257",
    startDate: "12-04-2022",
    mentor: mentors[0],
    eligibleLeave: "2.5",
    monthlyFellowship: "37000",
    fellowshipHead: "Fellowship",
    monthlyHRA: "11100",
    hraHead: "HRA (27%)",
    arrearsHead: "Arrear",
    accountNumber: "39549536426",
    bankName: "State Bank of India",
    ifscCode: "SBIN0006463",
    panNumber: "KNTPS1595A",
    remarks: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "projectScheme") {
        updated.schemeCode = schemeCodes[value] || "";
      }
      return updated;
    });
    setSaved(false);
  };

  const handleUpdate = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2 className="profile-title">Profile</h2>
        <p className="profile-sub">DST INSPIRE Fellow — Personal & Project Details</p>
      </div>

      <div className="profile-card">
        {/* Row 1: Funding Agency, Project Scheme, Scheme Code */}
        <div className="pf-row pf-cols-3-2-1">
          <div className="pf-field">
            <label>Funding Agency <span className="req">*</span></label>
            <select value={form.fundingAgency} onChange={(e) => handleChange("fundingAgency", e.target.value)}>
              {fundingAgencies.map((a) => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Project Scheme <span className="req">*</span></label>
            <select value={form.projectScheme} onChange={(e) => handleChange("projectScheme", e.target.value)}>
              {projectSchemes.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Scheme Code</label>
            <input type="text" value={form.schemeCode} onChange={(e) => handleChange("schemeCode", e.target.value)} />
          </div>
        </div>

        {/* Row 2: Salutation, Initial, Name, Designation */}
        <div className="pf-row pf-cols-sal">
          <div className="pf-field">
            <label>Salutation <span className="req">*</span></label>
            <select value={form.salutation} onChange={(e) => handleChange("salutation", e.target.value)}>
              {["Mr", "Mrs", "Ms", "Dr", "Prof"].map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Initial</label>
            <input type="text" value={form.initial} onChange={(e) => handleChange("initial", e.target.value)} maxLength={5} />
          </div>
          <div className="pf-field pf-grow">
            <label>Name of the Faculty <span className="req">*</span></label>
            <input type="text" value={form.facultyName} onChange={(e) => handleChange("facultyName", e.target.value)} />
          </div>
          <div className="pf-field pf-desig">
            <label>Designation <span className="req">*</span></label>
            <select value={form.designation} onChange={(e) => handleChange("designation", e.target.value)}>
              {designations.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>

        {/* Row 3: Department, Campus */}
        <div className="pf-row pf-cols-2">
          <div className="pf-field">
            <label>Department <span className="req">*</span></label>
            <select value={form.department} onChange={(e) => handleChange("department", e.target.value)}>
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Campus <span className="req">*</span></label>
            <select value={form.campus} onChange={(e) => handleChange("campus", e.target.value)}>
              {campuses.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Row 4: Intercom, Mobile, Email, Aadhar */}
        <div className="pf-row pf-cols-4">
          <div className="pf-field">
            <label>Intercom <span className="req">*</span></label>
            <input type="text" value={form.intercom} onChange={(e) => handleChange("intercom", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>Mobile <span className="req">*</span></label>
            <input type="text" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} maxLength={10} />
          </div>
          <div className="pf-field pf-email">
            <label>Email-Id <span className="req">*</span></label>
            <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>Aadhar <span className="req">*</span></label>
            <input type="text" value={form.aadhar} onChange={(e) => handleChange("aadhar", e.target.value)} maxLength={12} />
          </div>
        </div>

        {/* Row 5: Start Date, Mentor, Eligible Leave */}
        <div className="pf-row pf-cols-date">
          <div className="pf-field">
            <label>Start Date <span className="req">*</span></label>
            <div className="pf-date-wrap">
              <span className="pf-cal-icon">📅</span>
              <input type="text" value={form.startDate} onChange={(e) => handleChange("startDate", e.target.value)} placeholder="DD-MM-YYYY" />
            </div>
          </div>
          <div className="pf-field pf-grow">
            <label>Mentor Name/Supervisor</label>
            <select value={form.mentor} onChange={(e) => handleChange("mentor", e.target.value)}>
              {mentors.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="pf-field pf-leave">
            <label>Eligible Leave per month <span className="req">*</span></label>
            <input type="number" value={form.eligibleLeave} step="0.5" onChange={(e) => handleChange("eligibleLeave", e.target.value)} />
          </div>
        </div>

        {/* Row 6: Fellowship, Fellowship Head, Monthly HRA, HRA Head, Arrears Head */}
        <div className="pf-row pf-cols-5">
          <div className="pf-field">
            <label>Monthly Fellowship Rs. <span className="req">*</span></label>
            <input type="number" value={form.monthlyFellowship} onChange={(e) => handleChange("monthlyFellowship", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>Fellowship Head <span className="req">*</span></label>
            <select value={form.fellowshipHead} onChange={(e) => handleChange("fellowshipHead", e.target.value)}>
              {fellowshipHeads.map((h) => <option key={h}>{h}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Monthly HRA Rs. <span className="req">*</span></label>
            <input type="number" value={form.monthlyHRA} onChange={(e) => handleChange("monthlyHRA", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>HRA Head <span className="req">*</span></label>
            <select value={form.hraHead} onChange={(e) => handleChange("hraHead", e.target.value)}>
              {hraHeads.map((h) => <option key={h}>{h}</option>)}
            </select>
          </div>
          <div className="pf-field">
            <label>Arrears Head <span className="req">*</span></label>
            <select value={form.arrearsHead} onChange={(e) => handleChange("arrearsHead", e.target.value)}>
              {arrearHeads.map((h) => <option key={h}>{h}</option>)}
            </select>
          </div>
        </div>

        {/* Row 7: Account Number, Bank Name, IFSC, PAN */}
        <div className="pf-row pf-cols-4">
          <div className="pf-field">
            <label>Account Number <span className="req">*</span></label>
            <input type="text" value={form.accountNumber} onChange={(e) => handleChange("accountNumber", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>Bank Name <span className="req">*</span></label>
            <input type="text" value={form.bankName} onChange={(e) => handleChange("bankName", e.target.value)} />
          </div>
          <div className="pf-field">
            <label>IFSC Code <span className="req">*</span></label>
            <input type="text" value={form.ifscCode} onChange={(e) => handleChange("ifscCode", e.target.value)} maxLength={11} />
          </div>
          <div className="pf-field">
            <label>PAN Number</label>
            <input type="text" value={form.panNumber} onChange={(e) => handleChange("panNumber", e.target.value)} maxLength={10} />
          </div>
        </div>

        {/* Row 8: Remarks */}
        <div className="pf-row">
          <div className="pf-field pf-full">
            <label>Remarks, if any</label>
            <textarea
              rows={3}
              placeholder="Remarks ..."
              value={form.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pf-actions">
          <button className="pf-btn-update" onClick={handleUpdate}>Update</button>
          {saved && <span className="pf-saved-msg">✓ Profile updated successfully</span>}
        </div>
      </div>
    </div>
  );
}