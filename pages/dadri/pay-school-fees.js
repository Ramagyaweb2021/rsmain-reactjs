import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderDadri from '/pages/components/HeaderDadri';
import 'animate.css';
import FooterDadri from '../components/FooterDadri';
import DadriScrollspyMenu from '../components/DadriScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const FeesPayment = () => {
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
        <title>Fees Payment | Ramagya School</title>
        <meta name="description" content="Pay your school fees online at Ramagya School Dadri. Convenient and secure payment options for parents to manage school fee payments." />
        <meta name="keywords" content="Fees Payment, Ramagya School Dadri, School Fees, Online Fee Payment, Pay School Fees, Parent Payment Portal" />
        <link rel="canonical" href="https://ramagyaschool.com/dadri/pay-school-fees" />

        {/* Open Graph */}
        <meta property="og:title" content="Fees Payment | Ramagya School Dadri" />
        <meta property="og:description" content="Easily pay your school fees online at Ramagya School Dadri. Secure and convenient payment methods for parents." />
        <meta property="og:url" content="https://ramagyaschool.com/dadri/pay-school-fees" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fees Payment | Ramagya School Dadri" />
        <meta name="twitter:description" content="Pay your school fees online easily and securely at Ramagya School Dadri. Convenient options for parents." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

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
                 Fees Payment!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid my-5'>
        <div className="container">
          <div className='row'>
            <div className="col-md-3 col-12">
               <DadriScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
              <div className="about-intro">
              <div className="sec-title">
              <h2
              className="title-100"
              style={{
              color: "#0F3E46",
              borderBottom: "2px solid #F7D00F",
              display: "inline-block",
              width: "auto" /* textAlign: 'center', */,
              margin: "auto",
              textAlign: "left"
              }}
              >
              The Procedure of Remitting Payments
              </h2>
              </div>
              <p>All cheques/ drafts to be made in favour of &#39;Ramagya School&#39;.</p>
              <ul>
              <li>
                Gate No. 1, Ramagya School Dadri, Bishara Road near Dadri Bypass, Bishara Road, Dadri, Uttar Pradesh 203207
             
              </li>
              </ul>
              <br />
              <p style={{ textAlign: "left" }}>
              For any further query related to fee contact at{" "}
              <a href="tel:+8178 862 987">+91 8178 862 987</a> <br />
              Or mail us at{" "}
              <a href="mailto:accounts@ramagyagroup.com">accounts@ramagyagroup.com</a>
              </p>
              <div className="btn-part">
              <a
              className="btn custom-btn"
              href="https://ramagyadadri.edunexttechnologies.com/DirectStudentOnlineFee"
              target="_blank"
              >
              TO PAY ONLINE CLICK HERE
              </a>
              {/* <a class="alliances-btn button-pulse" href="https://www.ramagyaschool.schoolbellq.com/fees_management/student_fee_details" target="_blank">TO PAY ONLINE CLICK HERE</a> */}
              </div>
              </div>

           </div>
          </div>
        </div>
      </section>
    
      <FooterDadri />
    </>
  );
};

export default FeesPayment;
