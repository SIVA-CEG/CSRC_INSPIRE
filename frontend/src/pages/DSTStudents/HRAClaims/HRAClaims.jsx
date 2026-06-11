import React, { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Eye,
  Trash2,
  FileText
} from "lucide-react";

import "./HRAClaims.css";

import HRAPreview from "./HRAPreview";
import HRAWizard from "./HRAWizard";


export default function HRAClaims() {

  const [search,setSearch] = useState("");
  const [previewClaim,setPreviewClaim] =
useState(null);
const [showWizard,setShowWizard] =
useState(false);

const [editModal,setEditModal] =
useState(null);


const handleEdit = (claim) => {

  setEditModal({
    ...claim
  });

};



const updateClaim = () => {

  setClaims(
    claims.map(c =>
      c.id === editModal.id
        ? editModal
        : c
    )
  );

  setEditModal(null);
};






const [claims,setClaims] = useState([
    {
      id:1,
      name:"Mr M Sivakumar",
      designation:"DST INSPIRE Fellow",
      from:"01-03-2026",
      to:"31-03-2026",
      cl:1,
      lop:0,
      days:31,
      amount:37000
    },
    {
      id:2,
      name:"Mr M Sivakumar",
      designation:"DST INSPIRE Fellow",
      from:"01-02-2026",
      to:"28-02-2026",
      cl:1,
      lop:0,
      days:28,
      amount:37000
    }
  ]);

const saveClaim = (claim) => {

  if(editingClaim){

    setClaims(
      claims.map(c =>
        c.id === claim.id
          ? claim
          : c
      )
    );

    setEditingClaim(null);
  }
  else{

    setClaims([
      claim,
      ...claims
    ]);

    setShowWizard(false);
  }

};


  

  const deleteClaim = (id) => {

  if(
    !window.confirm(
      "Delete this claim?"
    )
  ) return;

  setClaims(
    claims.filter(
      claim => claim.id !== id
    )
  );
};


if (showWizard) {
  return (
    <HRAWizard
      onSave={saveClaim}
      onBack={() => setShowWizard(false)}
    />
  );
}


  const filtered = claims.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="claims-page">

      <div className="claims-header">

        <div>
          <h1>HRA Claims</h1>
          <p>
            Manage monthly HRA salary claims
          </p>
        </div>

        <button
  className="new-claim-btn"
  onClick={() => setShowWizard(true)}
>
  <Plus size={18}/>
  New HRA
</button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <FileText size={22}/>
          <h2>19</h2>
          <span>Total Claims</span>
        </div>

        <div className="stat-card">
          <h2>16</h2>
          <span>Approved</span>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <span>Pending</span>
        </div>

        <div className="stat-card">
          <h2>₹6.8L</h2>
          <span>Total Amount</span>
        </div>

      </div>

      <div className="search-bar">

        <Search size={18}/>

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search claim..."
        />

      </div>

      <div className="claims-table-card">

        <table>

          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary From</th>
              <th>Salary To</th>
              <th>CL</th>
              <th>LOP</th>
              <th>Claim Days</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((claim,index)=>(
              <tr key={claim.id}>

                <td>{index+1}</td>

                <td>{claim.name}</td>

                <td>{claim.designation}</td>

                <td>{claim.from}</td>

                <td>{claim.to}</td>

                <td>{claim.cl}</td>

                <td>{claim.lop}</td>

                <td>{claim.days}</td>

                <td>
                  ₹{claim.amount.toLocaleString()}
                </td>

                <td>

                  <div className="action-buttons">

                    <button
  className="action-btn edit"
  onClick={() =>
  handleEdit(claim)
}
>
  <Pencil size={16}/>
</button>

                    <button
  className="action-btn view"
  onClick={() =>
    setPreviewClaim(claim)
  }
>
  <Eye size={16}/>
</button>

                    <button
  className="action-btn delete"
  onClick={() =>
    deleteClaim(claim.id)
  }
>
  <Trash2 size={16}/>
</button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {
  editModal && (

    <div className="edit-overlay">

      <div className="edit-modal">

  <h2>Edit HRA Claim</h2>

  <div className="edit-form">

    <div className="edit-group">
      <label>Name</label>
      <input
        value={editModal.name}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            name:e.target.value
          })
        }
      />
    </div>

    <div className="edit-group">
      <label>Designation</label>
      <input
        value={editModal.designation}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            designation:e.target.value
          })
        }
      />
    </div>

    <div className="edit-group">
      <label>Salary From</label>
      <input
        value={editModal.from}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            from:e.target.value
          })
        }
      />
    </div>

    <div className="edit-group">
      <label>Salary To</label>
      <input
        value={editModal.to}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            to:e.target.value
          })
        }
      />
    </div>

    <div className="edit-group">
      <label>CL</label>
      <input
        type="number"
        value={editModal.cl}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            cl:Number(e.target.value)
          })
        }
      />
    </div>

    <div className="edit-group">
      <label>LOP</label>
      <input
        type="number"
        value={editModal.lop}
        onChange={(e)=>
          setEditModal({
            ...editModal,
            lop:Number(e.target.value)
          })
        }
      />
    </div>

  </div>

  <div className="modal-actions">

    <button
      className="cancel-btn"
      onClick={() =>
        setEditModal(null)
      }
    >
      Cancel
    </button>

    <button
      className="save-edit-btn"
      onClick={updateClaim}
    >
      Save Changes
    </button>

  </div>

</div>

    </div>

  )
}



        {
  previewClaim && (

    <HRAPreview
      claim={previewClaim}
      onClose={() =>
        setPreviewClaim(null)
      }
    />

  )
}
      </div>

    </div>

    
  );
}