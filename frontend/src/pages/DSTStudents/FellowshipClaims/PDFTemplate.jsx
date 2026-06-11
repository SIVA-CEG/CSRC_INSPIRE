import React from "react";
import "./PDFTemplate.css";

export default function PDFTemplate({
  claim,
  currentPage = 1
}) {

  const pages = [

    /* PAGE 1 */
    <div className="pdf-page">

      <h1>
        CENTRE FOR SPONSORED RESEARCH
        AND CONSULTANCY
      </h1>

      <h2>
        ANNA UNIVERSITY, CHENNAI 600 025
      </h2>

      <h3>
        FELLOWSHIP CLAIM BILL
      </h3>

      <h4>
        FOR THE PERIOD FROM
        {claim.from}
        TO
        {claim.to}
      </h4>

      <table className="pdf-table">

        <tbody>

          <tr>
            <td>Title</td>
            <td>
              DST INSPIRE FELLOWSHIP
            </td>
          </tr>

          <tr>
            <td>
              Funding Agency
            </td>
            <td>
              Department of Science
              and Technology (DST)
            </td>
          </tr>

          <tr>
            <td>
              Fellowship Period
            </td>

            <td>
              12-04-2022
              TO
              11-04-2027
            </td>

          </tr>

          <tr>
            <td>
              Department
            </td>

            <td>
              Centre for Nanoscience
              and Technology
            </td>

          </tr>

        </tbody>

      </table>

      <div className="pdf-section">

        <h5>
          CLAIMANT DETAILS
        </h5>

        <table className="pdf-table">

          <tbody>

            <tr>
              <td>Name</td>
              <td>
                Mr M Sivakumar
              </td>
            </tr>

            <tr>
              <td>Designation</td>
              <td>
                DST INSPIRE Fellow
              </td>
            </tr>

            <tr>
              <td>
                Bank Name
              </td>

              <td>
                State Bank of India
              </td>

            </tr>

            <tr>
              <td>
                Account Number
              </td>

              <td>
                39549536426
              </td>

            </tr>

            <tr>
              <td>IFSC</td>

              <td>
                SBIN0006463
              </td>

            </tr>

            <tr>
              <td>
                Claim Amount
              </td>

              <td>
                ₹
                {claim.amount?.toLocaleString()}
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="signature-area">

        <div>
          SIGNATURE OF
          <br />
          MENTOR
        </div>

        <div>
          PROFESSOR
          <br />
          AND HEAD
        </div>

      </div>

    </div>,


    /* PAGE 2 */

    <div className="pdf-page">

      <h1>
        CASUAL LEAVE PARTICULARS
      </h1>

      <h3>
        Centre For Nanoscience
        and Technology
      </h3>

      <table className="pdf-table">

        <thead>

          <tr>

            <th>Sl</th>
            <th>Month</th>
            <th>Type</th>
            <th>Eligible</th>
            <th>Availed</th>
            <th>Balance</th>

          </tr>

        </thead>

        <tbody>

          {[
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            "January",
            "February",
            "March"
          ].map((month,index)=>(
            <tr key={index}>

              <td>
                {index+1}
              </td>

              <td>
                {month}
              </td>

              <td>CL</td>

              <td>
                {(index+1)*2.5}
              </td>

              <td>
                {index<5 ? 1 : 0}
              </td>

              <td>
                {(index+1)*2}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <div className="signature-area">

        <div>
          MENTOR
        </div>

        <div>
          HOD
        </div>

      </div>

    </div>,


    /* PAGE 3 */

    <div className="pdf-page">

      <h1>
        PROCEEDINGS ORDER
      </h1>

      <h3>
        DST INSPIRE FELLOWSHIP
      </h3>

      <div className="proceedings-body">

        <p>

          Sanction is hereby accorded
          for payment of

          <strong>

            ₹
            {claim.amount?.toLocaleString()}

          </strong>

          towards fellowship claim.

        </p>

        <table className="pdf-table">

          <thead>

            <tr>

              <th>
                Period From
              </th>

              <th>
                Period To
              </th>

              <th>
                CL
              </th>

              <th>
                LOP
              </th>

              <th>
                Net Salary
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>
                {claim.from}
              </td>

              <td>
                {claim.to}
              </td>

              <td>
                {claim.cl}
              </td>

              <td>
                {claim.lop}
              </td>

              <td>
                ₹
                {claim.amount?.toLocaleString()}
              </td>

            </tr>

          </tbody>

        </table>

        <h2
          style={{
            marginTop:"40px"
          }}
        >
          TOTAL CLAIM :
          ₹
          {claim.amount?.toLocaleString()}
        </h2>

      </div>

      <div className="signature-area">

        <div>
          PREPARED BY
        </div>

        <div>
          PROFESSOR
          AND HEAD
        </div>

      </div>

    </div>

  ];

  return pages[currentPage-1];
}