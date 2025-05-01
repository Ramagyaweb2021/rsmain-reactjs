import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import NoidaParentsScrollspyMenu from '../components/NoidaParentsScrollspyMenu';
import Image from 'next/image';

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
        <meta name="description" content="Schedule an appointment with Ramagya School, Noida. Meet with our staff to discuss your child's academic progress, concerns, or any other school-related matters." />
        <meta name="keywords" content="Book Appointment, Ramagya School Noida, Parent Meeting, Schedule Appointment, School Appointment Booking" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/book-appointment" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Book an Appointment | Ramagya School Noida" />
        <meta property="og:description" content="Schedule an appointment with Ramagya School Noida. Meet with our staff to discuss your child's academic progress, concerns, or any other school-related matters." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/book-appointment" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book an Appointment | Ramagya School Noida" />
        <meta name="twitter:description" content="Schedule an appointment with Ramagya School Noida. Meet with our staff to discuss your child's academic progress, concerns, or any other school-related matters." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


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
               <NoidaParentsScrollspyMenu />
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
                Principal&#39;s office and Wing Heads.
                <br />
                <b>
                  Note - The appointment will only be considered for Ramagya school
                  students.{" "}
                </b>
              </p>
              {/* <p>Click on the tabs to book your appointment.</p>*/}
              <hr />
              <h3 className="title-100">Connect with the Principal’s Office</h3>
              <p>Are you seeking to have direct communication with our Principal?</p>
              <p>Now book a slot and get all your questions answered in a go!</p>
              <p>Timings: Available Days and Time for Appointment with Principal Office</p>
              <p>
                Tuesdays and Thursdays, <b>9:00 am to 11:00</b>
              </p>
              {/* <p>Tuesdays and Thursdays, <b>1:00 pm to 2:00 pm</b></p> */}
              <p>
                <b>
                  The availability of the Principal’s Office is subject to availability.
                  Kindly try again if the slot is not available or speak to or Wing Head for
                  any Student related concern/query.
                </b>
              </p>
              <p>
                <b>
                  To schedule an appointment with the principal, kindly use your ERP login
                  credentials to access the &#39;Communication&#39; tab within the Edunext mobile
                  application. You can proceed to make your booking through the app.
                </b>
              </p>
              {/* <div class="btn-part">
                                      <a class="btn custom-btn" href="https://calendly.com/ramagyaschool/appointment?month=2023-05" target="0">Book Now</a>
                                  </div><br> */}
              <hr />
              <h3 className="title-100">Connect with Wing Head Ms. Ankhi Das Gupta</h3>
              <p>
                Looking forward to having direct communication with the Wing Head regarding
                your child?
              </p>
              <p>Now book a slot and get all your child-related queries resolved in a go</p>
              <p>
                <b>Kindly Note:</b>
              </p>
              <p>
                Timings: Available Days and Time for Appointment with
                <b> Ms. Ankhi Das Gupta (Wing Head)</b>
              </p>
              <p>
                Tuesdays and Thursdays,<b> 9:00 am to 10:30 am</b>
              </p>
              <p>
                <b>
                  The availability of the Wing Head Ms. Ankhi Das Gupta is subject to
                  availability. Kindly try again if the slot is not available.
                </b>
              </p>
              <div className="btn-part">
                <a
                  className="btn custom-btn"
                  href="https://calendly.com/appointments-earlyyears-ramagyaschool/30min"
                  target={0}
                >
                  Book Now
                </a>
              </div>
              <br />
              <hr />
              <h3 className="title-100">Connect with Wing Head Ms. Seema Nanda</h3>
              <p>
                Looking forward to having direct communication with the Wing Head regarding
                your child?
              </p>
              <p>Now book a slot and get all your child-related queries resolved in a go</p>
              <p>
                <b>Kindly Note:</b>
              </p>
              <p>
                Timings: Available Days and Time for Appointment with
                <b> Ms. Seema Nanda (Wing Head)</b>
              </p>
              <p>
                Tuesdays and Thursdays,<b> 9:00 am to 10:30 am</b>
              </p>
              <p>
                <b>
                  The availability of the Wing Head Ms. Seema Nanda is subject to
                  availability. Kindly try again if the slot is not available.
                </b>
              </p>
              <div className="btn-part">
                <a
                  className="btn custom-btn"
                  href="https://calendly.com/appointments-primarywinghead/ramagyaschool?month=2023-0"
                  target={0}
                >
                  Book Now
                </a>
              </div>
              <br />
              <hr />
              <h3 className="title-100">Connect with Wing Head Ms. Seema Kaushik</h3>
              <p>
                Looking forward to having direct communication with the Wing Head regarding
                your child?
              </p>
              <p>
                Now book a slot and get all your child-related queries resolved in a go!
              </p>
              <p>
                <b>Kindly Note:</b>
              </p>
              <p>
                Timings: Available Days and Time for Appointment with{" "}
                <b>Ms. Seema Kaushik (Wing Head)</b>
              </p>
              <p>
                Tuesdays and Thursdays, <b>9:00 am to 10:30 am</b>
              </p>
              <p>
                <b>
                  The availability of the Wing Head Ms. Seema Kaushik is subject to
                  availability. Kindly try again if the slot is not available.
                </b>
              </p>
              <div className="btn-part">
                <a
                  className="btn custom-btn"
                  href="https://calendly.com/ramagya/15min?month=2023-05"
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
    
      <FooterNoida />
    </>
  );
};

export default NoidaBookAppointerment;
