import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderGreaterNoida from '/pages/components/HeaderGreaterNoida';
import 'animate.css';
import FooterGreaterNoida from '../components/FooterGreaterNoida';
import GreterNoidaParentsScrollspyMenu from '../components/GreterNoidaParentsScrollspyMenu';
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
        {/* Primary Meta Tags */}
        <title>Fees Payment | Ramagya School</title>
        <meta
        name="description"
        content="Securely pay school fees online at Ramagya School, Noida Extension. Quick, easy, and hassle-free fee payment process for parents."
        />
        <meta
        name="keywords"
        content="Fees Payment, Ramagya School Noida Extension, Online School Fees, Pay Fees Online, School Fee Portal"
        />
        <link
        rel="canonical"
        href="https://ramagyaschool.com/greater-noida/pay-school-fees"
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
        property="og:title"
        content="Fees Payment | Ramagya School Noida Extension"
        />
        <meta
        property="og:description"
        content="Pay your school fees online at Ramagya School, Noida Extension. A seamless and secure process for all parents."
        />
        <meta
        property="og:url"
        content="https://ramagyaschool.com/greater-noida/pay-school-fees"
        />
        <meta property="og:type" content="website" />
        <meta
        property="og:image"
        content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
        name="twitter:title"
        content="Fees Payment | Ramagya School Noida Extension"
        />
        <meta
        name="twitter:description"
        content="Pay your school fees online at Ramagya School, Noida Extension with ease and security."
        />
        <meta
        name="twitter:image"
        content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp"
        />
      </Head>
      <HeaderGreaterNoida />
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
               <GreterNoidaParentsScrollspyMenu />
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
              NS 26, GREATER, Delta II, Noida, Uttar Pradesh 201308, India
             
              </li>
              </ul>
              <br />
              <p style={{ textAlign: "left" }}>
              For any further query related to fee contact at{" "}
              <a href="tel:+8750130111">+91 8750130111</a> <br />
              Or mail us at{" "}
              <a href="mailto:accounts@ramagyagroup.com">accounts@ramagyagroup.com</a>
              </p>
              <div className="btn-part">
              <a
              className="btn custom-btn"
              href="https://ramagyagn.edunexttechnologies.com/DirectStudentOnlineFee"
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
    
      <FooterGreaterNoida />
    </>
  );
};

export default FeesPayment;
