import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import AdmissionScrollspyMenu from '../components/AdmissionScrollspyMenu';
import FeeStructureTable from '../components/FeeStructureTable';
import TransportationFee from '../components/TransportationFee';

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
        {/* Primary SEO */}
          <title>Fee Structure of Ramagya School Top CBSE School Noida Sec 50</title>
          <meta
            name="description"
            content="Detailed fee structure for Ramagya School Noida. Transparent and affordable CBSE school fees designed to provide quality education and holistic development."
          />
          <link rel="canonical" href="https://ramagyaschool.com/noida/fee-structure" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="Fee Structure of Ramagya School Top CBSE School Noida Sec 50" />
          <meta property="og:description" content="Detailed fee structure for Ramagya School Noida. Transparent and affordable CBSE school fees designed to provide quality education and holistic development." />
          <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
          <meta property="og:url" content="https://ramagyaschool.com/noida/fee-structure" />
          {/* <meta property="og:type" content="website" /> */}

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fee Structure of Ramagya School Top CBSE School Noida Sec 50" />
          <meta name="twitter:description" content="Detailed fee structure for Ramagya School Noida. Transparent and affordable CBSE school fees designed to provide quality education and holistic development." />
          <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <HeaderNoida />
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
      <AdmissionScrollspyMenu />
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
            <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.4s'}}><b>Note-</b> Deduction of amount, on withdrawal of admission will be- Rs. 25000/- (within 30 days) and Rs. 50000/- (within 60 days) as processing fee from the total amount submitted. <br/> No admission fee will be refunded if the withdrawal application is made after 60 days from admission or after the session commencement.</p>
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
              <h3 className='main-heading-internal-pages'>NOIDA</h3>
                <p><b>The Procedure of Remitting Payments</b></p>
                <p>All cheques/ drafts to be made in favour of </p>
                <p><b>‘Ramagya School’</b></p>
                <p><b>Gate No. 2, Ramagya School, E- 7, Sector – 50 Noida – 201301,
                Uttar Pradesh</b></p>
                <p> For any further query related to fee contact at <b> +91 8750 130 111 or</b> mail us at <b>accounts@ramagyagroup.com</b></p>

                <p><b>Pay Fee Online</b></p>
                <p>The School has a programme of Bursary support to make the admission at Ramagya School possible for promising candidates whose families are unable to afford the fees.
                We also award a number of Scholarships every year to recognise specially gifted budding talents.</p>

              <div className="d-flex justify-content-left align-items-left mt-1">
                <div className="learn-more-button">
                  <a href="https://ramagyanoida.edunexttechnologies.com/DirectStudentOnlineFee" target="_blank">Pay Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeeStructureTable/>
      <TransportationFee/>
      <FooterNoida />
    </>
  );
};

export default FeeStructure;
