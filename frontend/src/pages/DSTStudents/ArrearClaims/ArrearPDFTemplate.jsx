import React from "react";
import "./ArrearPDFTemplate.css";

export default function ArrearPDFTemplate({
  claim,
  currentPage
}) {

  if (currentPage === 1) {
    return (
      <div className="pdf-page">

        <h1>
          CENTRE FOR SPONSORED RESEARCH AND CONSULTANCY
        </h1>

        <h2>
          ANNA UNIVERSITY, CHENNAI 600 025
        </h2>

        <h3>Arrear CLAIM BILL</h3>

        <h4>
          FOR THE PERIOD FROM {claim.from} TO {claim.to}
        </h4>

        <div className="pdf-date">
          Date: {new Date().toLocaleDateString()}
        </div>

        <table className="pdf-table">

          <tbody>

            <tr className="section">
              <td colSpan="3">Arrear DETAILS</td>
            </tr>

            <tr>
              <td>Title</td>
              <td>:</td>
              <td>
                M.H.No.14.1.10-DST INSPIRE FELLOWSHIP
              </td>
            </tr>

            <tr>
              <td>Funding Agency</td>
              <td>:</td>
              <td>
                Department of Science and Technology, New Delhi
              </td>
            </tr>

            <tr>
              <td>Arrear Period</td>
              <td>:</td>
              <td>
                12-04-2022 TO 11-04-2027
              </td>
            </tr>

            <tr>
              <td>CSRC Procs No.</td>
              <td>:</td>
              <td>
                1204/CSRC-2/TSA(M)/2023
              </td>
            </tr>

            <tr>
              <td>Exp Head</td>
              <td>:</td>
              <td>Arrear (27%)</td>
            </tr>

            <tr>
              <td>Department & Campus</td>
              <td>:</td>
              <td>
                Centre for Nanoscience and Technology,
                ACT Campus
              </td>
            </tr>

            <tr className="section">
              <td colSpan="3">
                MENTOR DETAILS
              </td>
            </tr>

            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                Dr.M. Arivanandhan,
                Professor,
                Centre for Nanoscience and Technology
              </td>
            </tr>

            <tr className="section">
              <td colSpan="3">
                CLAIMANT DETAILS
              </td>
            </tr>

            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                {claim.name}
              </td>
            </tr>

            <tr>
              <td>Designation</td>
              <td>:</td>
              <td>
                {claim.designation}
              </td>
            </tr>

            <tr>
              <td>Joined On</td>
              <td>:</td>
              <td>12-04-2022</td>
            </tr>

            <tr>
              <td>Bank Name</td>
              <td>:</td>
              <td>State Bank of India</td>
            </tr>

            <tr>
              <td>Account Number</td>
              <td>:</td>
              <td>39549536426</td>
            </tr>

            <tr>
              <td>IFSC Code</td>
              <td>:</td>
              <td>SBIN0006463</td>
            </tr>

            <tr>
              <td>Claiming Period</td>
              <td>:</td>
              <td>
                {claim.from} to {claim.to}
              </td>
            </tr>

            <tr>
              <td>Arrear Rs.</td>
              <td>:</td>
              <td>
                ₹11,100 / month
              </td>
            </tr>

            <tr>
              <td>Eligible Days</td>
              <td>:</td>
              <td>{claim.days}</td>
            </tr>

            <tr>
              <td>Deductions</td>
              <td>:</td>
              <td>₹0</td>
            </tr>

            <tr>
              <td>Total Amount Claimed</td>
              <td>:</td>
              <td>
                ₹{claim.ArrearAmount?.toLocaleString()}
              </td>
            </tr>

          </tbody>

        </table>

        <p className="declaration">
          Certified that the claim made in this bill
          was not drawn earlier.
        </p>

        <div className="signature-row">
          <div>
            SIGNATURE OF THE
            <br />
            MENTOR / SUPERVISOR
          </div>

          <div>
            PROFESSOR AND HEAD
          </div>
        </div>

      </div>
    );
  }

  if (currentPage === 2) {
    return (
      <div className="pdf-page">

        <h1>
          CENTRE FOR NANOSCIENCE AND TECHNOLOGY
        </h1>

        <h2>
          CASUAL LEAVE PARTICULARS
        </h2>

        <p>
          Name :
          {claim.name}
        </p>

        <p>
          Designation :
          {claim.designation}
        </p>

        <table className="pdf-table">

          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Month & Year</th>
              <th>Leave Type</th>
              <th>Eligible</th>
              <th>Availed</th>
              <th>Total Availed</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>March 2026</td>
              <td>CL</td>
              <td>30</td>
              <td>{claim.cl}</td>
              <td>{claim.cl}</td>
              <td>{30 - claim.cl}</td>
            </tr>

          </tbody>

        </table>

        <div className="signature-row">
          <div>
            SIGNATURE OF THE
            <br />
            MENTOR / SUPERVISOR
          </div>

          <div>
            PROFESSOR AND HEAD
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="pdf-page">

      <h1>
        CENTRE FOR NANOSCIENCE AND TECHNOLOGY
      </h1>

      <h2>
        Arrear SANCTION PROCEEDINGS
      </h2>

      <p>
        Sanction is hereby accorded for payment of
        ₹{claim.ArrearAmount?.toLocaleString()}
      </p>

      <table className="pdf-table">

        <thead>
          <tr>
            <th>Period From</th>
            <th>Period To</th>
            <th>CL Days</th>
            <th>LOP Days</th>
            <th>LOP Amount</th>
            <th>Net Arrear</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>{claim.from}</td>
            <td>{claim.to}</td>
            <td>{claim.cl}</td>
            <td>{claim.lop}</td>
            <td>0</td>
            <td>
              ₹{claim.ArrearAmount?.toLocaleString()}
            </td>
          </tr>

        </tbody>

      </table>

      <div className="total-box">
        TOTAL CLAIM :
        ₹{claim.ArrearAmount?.toLocaleString()}
      </div>

      <div className="signature-row">

        <div></div>

        <div>
          PROFESSOR AND HEAD
        </div>

      </div>

    </div>
  );
}