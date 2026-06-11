import React, { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Calendar,
  Save
} from "lucide-react";

import "./ClaimWizard.css";

export default function ClaimWizard({
  onBack,
  onSave,
  claim,
  isEdit
}) {

  const [selectedOrder,setSelectedOrder] =
    useState("");

  const [rows,setRows] = useState([
    {
      from:"",
      to:"",
      cl:"",
      lop:""
    }
  ]);

  const sanctionOrders = [
    {
      id:1,
      value:
      "DST/INSPIRE Fellowship/2020/IF200541",

      appointmentFrom:"12-04-2022",
      appointmentTo:"11-04-2027",

      salaryClaimedUpto:"31-03-2026",

      availableCL:"19.5"
    }
  ];

  const selected =
    sanctionOrders.find(
      x=>x.value===selectedOrder
    );

  const addRow = () => {
    setRows([
      ...rows,
      {
        from:"",
        to:"",
        cl:"",
        lop:""
      }
    ]);
  };

  const removeRow = (index) => {

    if(rows.length===1) return;

    setRows(
      rows.filter(
        (_,i)=>i!==index
      )
    );
  };

  const updateRow = (
    index,
    field,
    value
  ) => {

    const updated=[...rows];

    updated[index][field]=value;

    setRows(updated);
  };

  return (
    <div className="wizard-page">

      <div className="wizard-header">

        <h1>New Fellowship Claim</h1>

        <button
          className="back-btn"
          onClick={onBack}
        >
          <ArrowLeft size={18}/>
          Back
        </button>

      </div>

      <div className="wizard-card">

        <h2>
          Funding Agency Sanction Order
        </h2>

        <select
          value={selectedOrder}
          onChange={(e)=>
            setSelectedOrder(
              e.target.value
            )
          }
        >
          <option value="">
            Select Order
          </option>

          {sanctionOrders.map(order=>(
            <option
              key={order.id}
              value={order.value}
            >
              {order.value}
            </option>
          ))}
        </select>

      </div>

      {selected && (

        <>

          <div className="info-grid">

            <div className="info-card">
              <h4>
                Appointment From
              </h4>

              <p>
                {selected.appointmentFrom}
              </p>
            </div>

            <div className="info-card">
              <h4>
                Appointment To
              </h4>

              <p>
                {selected.appointmentTo}
              </p>
            </div>

            <div className="info-card">
              <h4>
                Salary Claimed Upto
              </h4>

              <p>
                {selected.salaryClaimedUpto}
              </p>
            </div>

            <div className="info-card">
              <h4>
                Available CL
              </h4>

              <p>
                {selected.availableCL}
              </p>
            </div>

          </div>

          <div className="claim-section">

            <div className="claim-title">

              <h2>
                Claim Period Details
              </h2>

              <button
                className="add-row-btn"
                onClick={addRow}
              >
                <Plus size={16}/>
                Add Row
              </button>

            </div>

            {rows.map((row,index)=>(
              <div
                key={index}
                className="claim-row"
              >

                <div className="field">

                  <label>
                    Claim From
                  </label>

                  <div className="input-icon">

                    <Calendar size={16}/>

                    <input
                      type="date"
                      value={row.from}
                      onChange={(e)=>
                        updateRow(
                          index,
                          "from",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="field">

                  <label>
                    Claim To
                  </label>

                  <div className="input-icon">

                    <Calendar size={16}/>

                    <input
                      type="date"
                      value={row.to}
                      onChange={(e)=>
                        updateRow(
                          index,
                          "to",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="field">

                  <label>
                    CL
                  </label>

                  <input
                    type="number"
                    value={row.cl}
                    onChange={(e)=>
                      updateRow(
                        index,
                        "cl",
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="field">

                  <label>
                    LOP
                  </label>

                  <input
                    type="number"
                    value={row.lop}
                    onChange={(e)=>
                      updateRow(
                        index,
                        "lop",
                        e.target.value
                      )
                    }
                  />

                </div>

                <button
                  className="remove-btn"
                  onClick={()=>
                    removeRow(index)
                  }
                >
                  <Trash2 size={18}/>
                </button>

              </div>
            ))}

          </div>

          <div className="wizard-actions">

            <button
  className="save-btn"
  onClick={() => {

    const newClaim = {

      id:
      claim?.id ||
      Date.now(),

      from:rows[0].from,
      to:rows[0].to,

      cl:Number(rows[0].cl),

      lop:Number(rows[0].lop),

      amount:37000,

      designation:
      "DST INSPIRE Fellow",

      name:
      "Mr M Sivakumar"
    };

    onSave(newClaim);

  }}
>
 Save Claim
</button>

          </div>

        </>
      )}

    </div>
  );
}