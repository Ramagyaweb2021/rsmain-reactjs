import React from 'react'
import Image from 'next/image'
const FeeStructureTablenNoidaExtension = () => {
  return (
    <>
        <div className="container my-5">
        <div className="fee-structure-container p-4 border rounded">
          {/* Header Section */}
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{textAlign:"center"}}>
              {/* <Image
              src="/images/admission/transport-1.webp"
              alt="Sample Image 3"
              width={50}
              height={50}
              className="card-img-top"
              /> */}
              FEE STRUCTURE OF RAMAGYA SCHOOL NOIDA EXT. (2025-26)
            </h2>
          </div>

          {/* Admission Fee and Caution Money */}
          <div className="row mb-4">
            <div className="col-9">
              <p>Registration (Non Refundable - One Time)</p>
            </div>
            <div className="col-3 text-end">
              <p><b>1000 /-</b></p>
            </div>
            <hr/>
            <div className="col-9">
              <p>Admission Fee – Payable at the time of admission (one time non-refundable) for students seeking admission </p>
            </div>
            <div className="col-3 text-end">
              <p><b>99000 /-</b></p>
            </div>
            <hr/>
            <div className="col-9">
              <p>Admission Fee - Payable at the time of admission after discount for students seeking admission. (Non Refundable)</p>
            </div>
            <div className="col-3 text-end">
              <p><b>30000 /-</b></p>
            </div>
            <hr/>
            <div className="col-9">
              <p>Security (Refundable) </p>
            </div>
            <div className="col-3 text-end">
              <p><b>10000 /-</b></p>
            </div>
          </div>

          {/* Fee Structure Table */}
          <h3 className='fw-bold' style={{textAlign:"center"}}>Monthly Tuition fees</h3>
          <table className="table table-hover text-center">
            <thead>
              {/* <tr className="table-light">
                <th>Monthly Tuition fees</th>
                <th>ANNUAL FEE</th>
                <th>QUARTERLY FEE</th>
              </tr> */}
            </thead>
            <tbody>
            <tr>
                <td>NUR - KGII</td>
                <td>I-V</td>
                <td>V-IX</td>
            </tr>
            <tr>
                <td>13215</td>
                <td>13215</td>
                <td>13215</td>
            </tr>
            <tr>
                <td>9912 (after 25% discount)</td>
                <td>9912 (after 25% discount)</td>
                <td>9912 (after 25% discount)</td>
            </tr>
            <tr>
                <td colspan="3">(Sibling Discount is 10%)</td>
            </tr>
            <tr>
                <td>8922</td>
                <td>8922</td>
                <td>8922</td>
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

export default FeeStructureTablenNoidaExtension