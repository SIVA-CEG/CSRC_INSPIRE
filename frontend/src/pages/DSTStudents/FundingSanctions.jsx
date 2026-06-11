import React, { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  X,
  Calendar,
  IndianRupee
} from "lucide-react";
import "./FundingSanctions.css";

export default function FundingSanctions() {
  const [showForm, setShowForm] = useState(false);

  const sanctions = [
    {
      id: 1,
      sanctionNo: "DST/INSPIRE Fellowship/2020/IF200541",
      date: "17 Feb 2023",
      amount: "₹4,92,440",
      installment: 1,
      status: "Generated"
    },
    {
      id: 2,
      sanctionNo: "DST/INSPIRE Fellowship/2020/IF200541",
      date: "07 Nov 2023",
      amount: "₹6,09,534",
      installment: 2,
      status: "Generated"
    },
    {
      id: 3,
      sanctionNo: "DST/INSPIRE Fellowship/2020/IF200541",
      date: "29 Oct 2024",
      amount: "₹5,66,650",
      installment: 3,
      status: "Generated"
    }
  ];

  return (
    <div className="funding-page">

      <div className="funding-header">
        <div>
          <h1>Funding Sanctions</h1>
          <p>Manage sanction approvals and installment releases</p>
        </div>

        <button
          className="new-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          New Sanction
        </button>
      </div>

      <div className="funding-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input
            placeholder="Search sanction reference..."
          />
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Sanction No</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Installment</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {sanctions.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.sanctionNo}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.installment}</td>

                <td>
                  <span className="status">
                    {item.status}
                  </span>
                </td>

                <td>
                  <button className="edit-btn">
                    <Pencil size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Add Funding Installment</h2>

              <button
                onClick={() => setShowForm(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label>Sanction Reference</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Sanction Date</label>
                <div className="input-icon">
                  <Calendar size={18} />
                  <input type="date" />
                </div>
              </div>

              <div className="form-group">
                <label>Sanction Type</label>

                <select>
                  <option>Sanction</option>
                  <option>Re-Assign</option>
                </select>
              </div>

              <div className="form-group">
                <label>Installment Number</label>
                <input type="number" />
              </div>

              <div className="form-group">
                <label>Sanctioned Amount</label>

                <div className="input-icon">
                  <IndianRupee size={18} />
                  <input type="number" />
                </div>
              </div>

              <div className="form-group">
                <label>Released On</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Payment Mode</label>

                <select>
                  <option>E-Transfer</option>
                  <option>PFMS</option>
                </select>
              </div>

            </div>

            <div className="amount-section">

              <h3>Installment Breakdown</h3>

              <div className="breakdown-grid">

                <div className="form-group">
                  <label>Arrear</label>
                  <input type="number" />
                </div>

                <div className="form-group">
                  <label>Contingencies</label>
                  <input type="number" />
                </div>

                <div className="form-group">
                  <label>Fellowship</label>
                  <input type="number" />
                </div>

                <div className="form-group">
                  <label>HRA (27%)</label>
                  <input type="number" />
                </div>

              </div>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button className="submit-btn">
                Save Sanction
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}