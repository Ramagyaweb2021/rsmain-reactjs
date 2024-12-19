import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
import Head from 'next/head';
import HeaderDadri from '/pages/components/HeaderDadri';
import 'animate.css';
import FooterDadri from '../components/FooterDadri';
import DadriAdmissionScrollspyMenu from '../components/DadriAdmissionScrollspyMenu';
import FeeStructureTableDadri from '../components/FeeStructureTableDadri';
import TransportationFeeDadri from '../components/TransportationFeeDadri';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const FeeStructure = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOWJS = require('wowjs');
      const wow = new WOWJS.WOW({
        live: false,
      });
      wow.init();
    }
  }, []); // Runs once on mount

  return (
    <>
      <Head>
        <title>Fee Structure | Ramagya School</title>
        <meta name="description" content="Fee Structure" />
        <meta name="keywords" content="Fee Structure" />
        <link rel="canonical" href="https://ramagyaschool.com/dadri/fee-structure" />
      </Head>
      <HeaderDadri />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Fee Structure!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DadriAdmissionScrollspyMenu />
      {/* Depositing Fee section */}
      <section className="container learn pre-admission-section my-5">
        <h1 className="main-heading wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.3s'}}>
            DEPOSTING FEE
            </h1>
            <p className='justify-content-center wow animate__animated animate__fadeInUp'>As alluded in the Fee Performa Invoice, School Fees has to be deposited at the time of the admission. <br/>
            Parents must adhere to the dates indicated in the Fee Structure of the school. Students will not be allowed to attend the school if all or any of the Fee/ Amount is due.</p>
            {/* <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.3s', textAlign: "center" }}>
              As alluded in the Fee Performa Invoice, School Fees has to be deposited at the time of the admission. <br/>
              Parents must adhere to the dates indicated in the Fee Structure of the school. Students will not be allowed to attend the school if all or any of the Fee/ Amount is due.
            </p> */}
            {/* <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.4s'}}><b>Note-</b> Deduction of amount, on withdrawal of admission will be- Rs. 25000/- (within 30 days) and Rs. 50000/- (within 60 days) as processing fee from the total amount submitted. <br/> No admission fee will be refunded if the withdrawal application is made after 60 days from admission or after the session commencement.</p> */}
      </section>
      {/* <section className="container learn pre-admission-section my-5">
        <div className="row g-0">
          <div className="col-lg-3 g-0">
            <h1 className="main-heading wow animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s', fontSize: "30px" }}>
              DEPOSTING FEE
              <span className="lineclass" />
            </h1>
          </div>
          <div className="col-lg-9 g-0">
            <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.3s', marginTop: "60px", textAlign: "left" }}>
              As alluded in the Fee Performa Invoice, School Fees has to be deposited at the time of the admission. <br/>
              Parents must adhere to the dates indicated in the Fee Structure of the school. Students will not be allowed to attend the school if all or any of the Fee/ Amount is due.
            </p>
          </div>
          <div className='col-12'>
          <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.4s'}}><b>Note-</b> Deduction of amount, on withdrawal of admission will be- Rs. 25000/- (within 30 days) and Rs. 50000/- (within 60 days) as processing fee from the total amount submitted. <br/> No admission fee will be refunded if the withdrawal application is made after 60 days from admission or after the session commencement.</p>
          </div>
        </div>
      </section> */}
      {/* Fee procedure section */}
      <section className='container-fluid fee-procedure-section my-5'>
        <div className="row">
          {/* Optional Image Column - Uncomment if needed
          <div className="col-lg-6">
            <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" />
          </div> */}
          <div className="col-lg-8 col-12 mx-auto d-flex align-items-center">
            <div className='fee-procedure-detail'>
              <h3 className='main-heading-internal-pages'>DADRI</h3>
                <p><b>The Procedure of Remitting Payments</b></p>
                <p>All cheques/ drafts to be made in favour of </p>
                <p><b>‘Ramagya School’</b></p>
                <p><b>Gate No. 1, Ramagya School Dadri, Bishara Road near Dadri Bypass, Bishara Road, Dadri, Uttar Pradesh 203207</b></p>
                <p> For any further query related to fee contact at <b> +91 8178 862 987 or</b> mail us at <b>accounts@ramagyagroup.com</b></p>

                <p><b>Pay Fee Online</b></p>
                <p>The School has a programme of Bursary support to make the admission at Ramagya School possible for promising candidates whose families are unable to afford the fees.
                We also award a number of Scholarships every year to recognise specially gifted budding talents.</p>

              <div className="d-flex justify-content-left align-items-left mt-1">
                <div className="learn-more-button">
                  <a href="https://ramagyadadri.edunexttechnologies.com/DirectStudentOnlineFee" target="_blank">Pay Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeeStructureTableDadri/>
      <TransportationFeeDadri/>
      <FooterDadri />
    </>
  );
};

export default FeeStructure;
