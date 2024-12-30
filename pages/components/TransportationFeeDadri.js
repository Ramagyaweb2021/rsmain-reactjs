// components/TransportationFee.js
import React from 'react';

const TransportationFeeDadri = () => {
  return (
    <div className="container my-5 p-4 border rounded" style={{ maxWidth: '1250px', backgroundColor: '#fff' }}>
      <div className="text-center mb-3">
        {/* <i className="bi bi-bus-front" style={{ fontSize: '2rem' }}></i> */}
        <h4 className="fw-bold mt-2" style={{textAlign:"center"}}>TRANSPORTATION FEE FOR RAMAGYA SCHOOL DADRI</h4>
        <p className="text-muted">(Subject to change in case of any Hike in Fuel Price)</p>
      </div>
      <table class="table table-hover text-center">
        <thead class="table-light">
          <tr>
            <th scope="col">DISTANCE</th>
            <th scope="col">MONTHLY FEE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0-5KM</td>
            <td>3520 /-</td>
          </tr>
          <tr>
            <td>6-10KM</td>
            <td>3720 /-</td>
          </tr>
          <tr>
            <td>11-15KM</td>
            <td>3900 /-</td>
          </tr>
          <tr>
            <td>16-20KM</td>
            <td>4480 /-</td>
          </tr>
          <tr>
            <td>21-25KM</td>
            <td>4980 /-</td>
          </tr>
        </tbody>
      </table>

      {/* <div className="row justify-content-center">
        <div className="col-md-4 text-center1">
          <h6 className="fw-bold">DISTANCE</h6>
          <p>0-5KM</p>
          <p>6-10KM</p>
          <p>11-15KM</p>
          <p>16-20KM</p>
          <p>21-25KM</p>
        </div>
        <div className="col-md-4 bg-gray text-center py-3">
          <h6 className="fw-bold">MONTHLY FEE</h6>
          <p>3520 /-</p>
          <p>3720 /-</p>
          <p>3900 /-</p>
          <p>4480 /-</p>
          <p>4980 /-</p>
        </div>
      </div> */}
<div class="d-flex justify-content-center align-items-center">
  <div class="text-center">
    <h5 class="fw-bold">Discount For Special Group</h5>
    <ul class="custom-bullets list-unstyled">
      <li>Discounts for Army Officials.</li>
      <li>Discounts for Blinds.</li>
      <li>Discounts for Divorcee Women.</li>
      <li>Discounts for Widow Mothers.</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default TransportationFeeDadri;
