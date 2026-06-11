import React, { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Save
} from "lucide-react";

import "./Beneficiaries.css";

export default function Beneficiaries() {
  const [showForm, setShowForm] = useState(false);

  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: 1,
      title: "Mr.",
      initial: "M",
      name: "Sivakumar",
      accountNo: "39549536426",
      accountType: "Savings",
      bankName: "State Bank of India",
      ifsc: "SBIN0006463",
      transferType: "NEFT",
      mobile: "9659610627",
      email: "siva@gmail.com",
      pan: "ABCDE1234F",
      gst: "-"
    }
  ]);

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    initial: "",
    name: "",
    accountNo: "",
    accountType: "",
    bankName: "",
    ifsc: "",
    transferType: "",
    mobile: "",
    email: "",
    pan: "",
    gst: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      title: "",
      initial: "",
      name: "",
      accountNo: "",
      accountType: "",
      bankName: "",
      ifsc: "",
      transferType: "",
      mobile: "",
      email: "",
      pan: "",
      gst: ""
    });

    setEditId(null);
  };

  const saveBeneficiary = () => {
    if (!form.name) {
      alert("Enter Beneficiary Name");
      return;
    }

    if (editId) {
      setBeneficiaries(
        beneficiaries.map((b) =>
          b.id === editId
            ? { ...form, id: editId }
            : b
        )
      );
    } else {
      setBeneficiaries([
        ...beneficiaries,
        {
          ...form,
          id: Date.now()
        }
      ]);
    }

    resetForm();
    setShowForm(false);
  };

  const editBeneficiary = (row) => {
    setForm(row);
    setEditId(row.id);
    setShowForm(true);
  };

  const deleteBeneficiary = (id) => {
    if (!window.confirm("Delete beneficiary?")) return;

    setBeneficiaries(
      beneficiaries.filter((b) => b.id !== id)
    );
  };

  if (showForm) {
    return (
      <div className="beneficiary-page">
        <div className="page-header">
          <h1>Beneficiaries Details</h1>
        </div>

        <div className="beneficiary-form-card">

          <div className="form-grid">

            <div>
              <label>Title</label>
              <select
                name="title"
                value={form.title}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
                <option>Dr.</option>
              </select>
            </div>

            <div>
              <label>Initial</label>
              <input
                name="initial"
                value={form.initial}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Beneficiary Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Account Number</label>
              <input
                name="accountNo"
                value={form.accountNo}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Account Type</label>
              <select
                name="accountType"
                value={form.accountType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Savings</option>
                <option>Current</option>
              </select>
            </div>

            <div>
              <label>Bank Name</label>
              <input
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>IFSC Code</label>
              <input
                name="ifsc"
                value={form.ifsc}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Transfer Type</label>
              <select
                name="transferType"
                value={form.transferType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>NEFT</option>
                <option>RTGS</option>
                <option>IMPS</option>
              </select>
            </div>

            <div>
              <label>Mobile</label>
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email Id</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>PAN No</label>
              <input
                name="pan"
                value={form.pan}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>GST No</label>
              <input
                name="gst"
                value={form.gst}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-actions">
            <button
              className="save-btn"
              onClick={saveBeneficiary}
            >
              <Save size={18} />
              Save
            </button>

            <button
              className="close-btn"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
            >
              <X size={18} />
              Close
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="beneficiary-page">

      <div className="page-header">
        <h1>Beneficiaries</h1>
      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Bank</th>
              <th>A/c No.</th>
              <th>IFSC</th>
              <th>PAN</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {beneficiaries.map((row) => (
              <tr key={row.id}>
                <td>
                  {row.title} {row.initial} {row.name}
                </td>

                <td>{row.bankName}</td>

                <td>{row.accountNo}</td>

                <td>{row.ifsc}</td>

                <td>{row.pan}</td>

                <td>{row.mobile}</td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        editBeneficiary(row)
                      }
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteBeneficiary(row.id)
                      }
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="add-wrapper">
        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Add
        </button>
      </div>

    </div>
  );
}