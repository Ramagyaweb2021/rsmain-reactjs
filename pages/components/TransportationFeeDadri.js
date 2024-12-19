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

      <div className="row justify-content-center">
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
      </div>

      <div className="text-center mt-4"><hr/>
        <h5 className="fw-bold" style={{textAlign:"center"}}>Discount For Special Group</h5>
        <ul className="list-unstyled">
          <li>· Discounts for Army Officials.</li>
          <li>· Discounts for Widow Mothers.</li>
        </ul>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          *Increase in the composite Fees would be as per the Government norms
        </p>
      </div>
    </div>
  );
};

export default TransportationFeeDadri;
