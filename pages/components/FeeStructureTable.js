import React from 'react'
import Image from 'next/image'
const FeeStructureTable = () => {
  return (
    <>
        <div className="container my-5">
        <div className="fee-structure-container p-4 border rounded">
          {/* Header Section */}
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{textAlign:"center"}}>
              {/* <Image
              src="/images/admission/transport-1.png"
              alt="Sample Image 3"
              width={50}
              height={50}
              className="card-img-top"
              /> */}
              FEE STRUCTURE OF RAMAGYA SCHOOL NOIDA (2025-26)
            </h2>
          </div>

          {/* Admission Fee and Caution Money */}
          <div className="row mb-4">
            <div className="col-9">
              <p>Admission Fee - Payable at the time of admission (one time non-refundable)</p>
            </div>
            <div className="col-3 text-end">
              <p><b>63,000 /-</b></p>
            </div>
            <hr/>
            <div className="col-9">
              <p>Caution Money - Payable at the time of admission (Refundable at the time of leaving school)</p>
            </div>
            <div className="col-3 text-end">
              <p><b>30,000 /-</b></p>
            </div>
          </div>

          {/* Fee Structure Table */}
          <table className="table table-hover text-center">
            <thead>
              <tr className="table-light">
                <th>CLASSES</th>
                <th>ANNUAL FEE</th>
                <th>QUARTERLY FEE</th>
                <th>MONTHLY FEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TODDLERS</td>
                <td>144,000 /-</td>
                <td>36,000 /-</td>
                <td>12,000 /-</td>
              </tr>
              <tr>
                <td>NUR TO II</td>
                <td>174,000 /-</td>
                <td>43,500 /-</td>
                <td>14,500 /-</td>
              </tr>
              <tr>
                <td>III TO V</td>
                <td>178,800 /-</td>
                <td>44,700 /-</td>
                <td>14,900 /-</td>
              </tr>
              <tr>
                <td>VI TO VIII</td>
                <td>187,200 /-</td>
                <td>46,800 /-</td>
                <td>15,600 /-</td>
              </tr>
              <tr>
                <td>IX TO XII</td>
                <td>210,000 /-</td>
                <td>52,500 /-</td>
                <td>17,500 /-</td>
              </tr>
            </tbody>
          </table>

          {/* Note Section */}
          <div className="text-center mt-3 text-muted">
            <p>Note: Settlement will be done as per DFRC</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeeStructureTable