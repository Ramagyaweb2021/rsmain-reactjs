import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoidaExtension from '/pages/components/HeaderNoidaExtension';
import 'animate.css';
import FooterNoidaExtension from '../components/FooterNoidaExtension';
import NoidaExtensionParentsScrollspyMenu from '../components/NoidaExtensionParentsScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const NoidaBookAppointerment = () => {
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
        <title>Book an Appointment | Ramagya School</title>
        <meta
        name="description"
        content="Schedule an appointment with Ramagya School, Noida Extension. Meet with our staff to discuss your child's progress, concerns, or any other school-related matters."
        />
        <meta
        name="keywords"
        content="Book Appointment, Ramagya School Noida Extension, Parent Meeting, Schedule Appointment, School Appointment Booking"
        />
        <link
        rel="canonical"
        href="https://ramagyaschool.com/noida-extension/book-appointment"
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
        property="og:title"
        content="Book an Appointment | Ramagya School Noida Extension"
        />
        <meta
        property="og:description"
        content="Schedule an appointment with Ramagya School, Noida Extension. Meet with our staff to discuss your child's progress, concerns, or any other school-related matters."
        />
        <meta
        property="og:url"
        content="https://ramagyaschool.com/noida-extension/book-appointment"
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
        content="Book an Appointment | Ramagya School Noida Extension"
        />
        <meta
        name="twitter:description"
        content="Schedule an appointment with Ramagya School, Noida Extension. Meet with our staff to discuss your child's progress, concerns, or any other school-related matters."
        />
        <meta
        name="twitter:image"
        content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp"
        />


      </Head>
      <HeaderNoidaExtension />
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
                 BOOK AN APPOINTMENT!
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
               <NoidaExtensionParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
            <div className="about-intro">
            <h2 className="title-100">Book An Appointment</h2>
            <br />
            <p>
              We recognize that clear and effective communication between parents,
              guardians, and the school administration is crucial for the academic success
              of our students. With this in mind, we have designed a system to make it
              easier for you to book appointments with me and our Wing Heads for any
              queries or concerns you may have.
            </p>
            <p>
              The appointment booking system is now available for booking with the
              Principal&#39;s office and Wing Heads. <br /><br />
              <b>
                Note - The appointment will only be considered for Ramagya school noida
                extension students.{" "}
              </b>
            </p>
            {/* <p>Click on the tabs to book your appointment.</p>*/}
            <hr />
            <h3 className="title-100">Connect with the Principal’s Office</h3>
            <p>Are you seeking to have direct communication with our Principal?</p>
            <p>Now book a slot and get all your questions answered in a go!</p>
            <p>
              <b>
                The availability of the Principal’s Office is subject to availability.
                Kindly try again if the slot is not available or speak to or Wing Head for
                any Student related concern/query.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/appointments-po-ext/30min"
                target={0}
              >
                Book Now
              </a>
            </div>
            <br />
            <hr />
            <h3 className="title-100">Connect with Academic Head - Ms. Neelam Singh</h3>
            <p>
              Looking forward to having direct communication with the Academic Head
              regarding your child?
            </p>
            <p>Now book a slot and get all your child-related queries resolved in a go</p>
            <p>
              <b>
                The availability of the Primary Wing Academic Coordinator Ms. Neelam Singh
                is subject to availability. Kindly try again if the slot is not available.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/appointments-noidaext/30min"
                target={0}
              >
                Book Now
              </a>
            </div>
            <br />
            <hr />
            <h3 className="title-100">
              Connect with Ms. Nidhi Rautela Senior Wing Academic Coordinator{" "}
            </h3>
            <p>
              Looking forward to having direct communication with the Senior Wing Academic
              Coordinator regarding your child?
            </p>
            <p>
              Now book a slot and get all your child-related queries resolved in a go!
            </p>
            <p>
              <b>
                The availability of the Senior Wing Academic Coordinator Ms. Nidhi Rautela
                is subject to availability. Kindly try again if the slot is not available.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/appointment-noidaext-ramagyaschool/30min?month=2024-07"
                target={0}
              >
                Book Now
              </a>
            </div>
            <br />
            <hr />
            <h3 className="title-100">
              Connect with Ms. Shikha Jain Relationship Manager{" "}
            </h3>
            <p>
              Looking forward to having direct communication with the Relationship Manager
              regarding your child?
            </p>
            <p>
              Now book a slot and get all your child-related queries resolved in a go!
            </p>
            <p>
              <b>
                The availability of the Relationship Manager Ms. Shikha Jain is subject to
                availability. Kindly try again if the slot is not available.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/rmappointments-ext/30min"
                target={0}
              >
                Book Now
              </a>
            </div>
            {/* <br />
            <hr />
            <h3 className="title-100">Connect with Ms. Shikha Jain Admission Counsellor </h3>
            <p>
              Looking forward to having direct communication with the Admission Counsellor
              regarding your child?
            </p>
            <p>
              Now book a slot and get all your child-related queries resolved in a go!
            </p>
            <p>
              <b>
                The availability of the Admission Counsellor Ms. Shikha Jain is subject to
                availability. Kindly try again if the slot is not available.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/admissions-appointmentext/30min"
                target={0}
              >
                Book Now
              </a>
            </div> */}
            <br />
            <hr />
            <h3 className="title-100">
              Connect with Ms. Prashansa Admission Counsellor{" "}
            </h3>
            <p>
              Looking forward to having direct communication with the Admission Counsellor
              regarding your child?
            </p>
            <p>
              Now book a slot and get all your child-related queries resolved in a go!
            </p>
            <p>
              <b>
                The availability of the Admission Counsellor Ms. Prashansa is subject to
                availability. Kindly try again if the slot is not available.
              </b>
            </p>
            <div className="btn-part">
              <a
                className="btn custom-btn"
                href="https://calendly.com/appointments-admissionext/30min"
                target={0}
              >
                Book Now
              </a>
            </div>
            <br />
          </div>


            </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default NoidaBookAppointerment;
