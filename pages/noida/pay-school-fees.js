import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import NoidaParentsScrollspyMenu from '../components/NoidaParentsScrollspyMenu';
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
      <meta name="description" content=">Fees Payment" />
      <meta name="keywords" content=">Fees Payment" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/pay-school-fees" />
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
               <NoidaParentsScrollspyMenu />
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
              Gate No. 2, Ramagya School,
              <br />
              E- 7, Sector – 50
              <br />
              Noida – 201301,
              <br />
              Uttar Pradesh
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
              href="https://ramagyanoida.edunexttechnologies.com/DirectStudentOnlineFee"
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
    
      <FooterNoida />
    </>
  );
};

export default FeesPayment;