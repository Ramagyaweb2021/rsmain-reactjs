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

const RelationshipManagerAppointment = () => {
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
      <title>Relationship Manager Appointment | Ramagya School</title>
      <meta name="description" content="Relationship Manager Appointment" />
      <meta name="keywords" content="Relationship Manager Appointment" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/relationship-manager" />
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
                 Relationship Manager Appointment!
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
              <h3 className="title-100">
                Online Parent Appointment System with Relationship Manager
              </h3>
              <p>
                We are pleased to present a pioneering initiative designed to elevate
                parental involvement and establish a more efficient avenue for
                post-admission inquiries: the Online Parent Appointment System with a
                dedicated Relationship Manager, here at Ramagya School
              </p>
              <p>
                Aligned with our steadfast dedication to delivering unparalleled service and
                convenience to our esteemed parents, we have seamlessly integrated this
                advanced system to cater to the needs of parents seeking guidance pertaining
                to post-admission matters, including but not limited to character
                certificates, bonafide letters, transfer certificates, marksheets, and an
                array of related concerns. Through this meticulously crafted platform,
                parents are empowered to seamlessly arrange appointments with our
                specialized Relationship Managers, ensuring a bespoke and streamlined
                engagement that optimizes both personalization and efficiency.
              </p>
              <p>
                <b>Scheduling Appointments:</b>
              </p>
              <p>
                Accessing the Online Parent Appointment System is a straightforward process
                for parents, facilitated by the provided hyperlink below. Within this
                system, parents have the flexibility to select a suitable time slot for a
                meeting with the Relationship Manager, fostering discussions on their
                distinct post-admission inquiries.
              </p>
              <p>
                <b>Automated Confirmations:</b>
              </p>
              <p>
                {" "}
                Following the successful reservation of an appointment, an automated
                confirmation will promptly be conveyed to the parent via email and WhatsApp,
                ensuring swift acknowledgment.
              </p>
              <p>
                <b>Convenient Reach and Correspondence:</b>
              </p>
              <p>
                The identical appointment link will be shared with parents via a circular
                announcement and will also be kept current on our school&#39;s official website
                and ERP platform. This approach guarantees seamless accessibility, allowing
                parents to conveniently secure appointments according to their preferences.
              </p>
              <div className="btn-part">
                <a
                  className="btn custom-btn"
                  href="https://calendly.com/appointments-rm/30min?month=2023-08"
                  target={0}
                >
                  Book Now
                </a>
              </div>
              <br />
              <hr />
            </div>


            </div>
          </div>
        </div>
      </section>
    
      <FooterNoida />
    </>
  );
};

export default RelationshipManagerAppointment;
