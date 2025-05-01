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

const EarlyLateChildPickup = () => {
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
        <meta
        name="description"
        content="Book an appointment with the Relationship Manager at Ramagya School, Noida to discuss your child's progress, concerns, or any school-related matters."
        />
        <meta
        name="keywords"
        content="Relationship Manager Appointment, Ramagya School Noida, Parent Appointment, School Meeting, Education Concerns, Parent-Teacher Discussion"
        />
        <link rel="canonical" href="https://ramagyaschool.com/noida/relationship-manager" />

        {/* Open Graph Meta Tags */}
        <meta
        property="og:title"
        content="Relationship Manager Appointment | Ramagya School"
        />
        <meta
        property="og:description"
        content="Book an appointment with the Relationship Manager at Ramagya School, Noida to discuss your child's progress, concerns, or any school-related matters."
        />
        <meta property="og:url" content="https://ramagyaschool.com/noida/relationship-manager" />
        <meta property="og:type" content="website" />
        <meta
        property="og:image"
        content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
        name="twitter:title"
        content="Relationship Manager Appointment | Ramagya School"
        />
        <meta
        name="twitter:description"
        content="Book an appointment with the Relationship Manager at Ramagya School, Noida to discuss your child's progress, concerns, or any school-related matters."
        />
        <meta
        name="twitter:image"
        content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp"
        />

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
                 Student Discount at Ramagya Sports Academy!
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
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">Vision Statement</h2>
                  </div>
                  <p>
                    At Ramagya School, we believe in fostering the holistic development of our
                    students by providing them with diverse opportunities in academics and
                    extracurricular activities. Our vision is to encourage and enable our
                    students to make the most of our state-of-the-art sports academy facilities
                    by establishing a generous discount policy.
                  </p>
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">Mission Statement</h2>
                  </div>
                  <p>
                    Our mission is to instill a lifelong love for sports and physical activity
                    in our students. By offering a significant discount for using our sports
                    academy facilities, we aim to make these resources more accessible to our
                    student community, thus promoting physical health, team spirit, discipline,
                    and sporting talent.
                  </p>
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">Objective </h2>
                  </div>
                  <p>
                    To establish a transparent and fair Student Discount Policy for Sports
                    Academy Facilities that provides financial relief to students while
                    promoting their engagement in sports and physical activities.
                  </p>
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">Policy Statement</h2>
                  </div>
                  <p>
                    Ramagya School is committed to promoting physical health and sporting
                    excellence among its students. As part of this commitment, we offer a 25%
                    discount to our students for using our sports academy facilities, excluding
                    pilates.
                  </p>
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">I. Eligibility Criteria</h2>
                  </div>
                  <ul className="custom-bullets">
                    <li>
                      All currently enrolled students of Ramagya School are eligible for this
                      discount
                    </li>
                    <li>
                      The discount applies to sports academy facilities and does not extend to
                      personal training or coaching fees.
                    </li>
                    <li>The discount does not apply to pilates sessions</li>
                  </ul>
                  {/* <br /> */}
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">II. Application Process</h2>
                  </div>
                  <ul className="custom-bullets">
                    <li>
                      The application form for the student discount at Ramagya Sports Academy is
                      available at the school office from the fee counter, school reception, or
                      the Ramagya Sports Academy reception.
                    </li>
                    <li>
                      The student&#39;s class teacher must sign completed forms to confirm that the
                      student is currently enrolled at Ramagya School and is in good standing.
                    </li>
                    <li>
                      The signed application form and necessary identification proof (such as
                      the student ID card) should then be submitted to the accounts office at
                      the fee counter for verification.
                    </li>
                    <li>
                      Upon verification and approval, the account&#39;s signature on the form will
                      be considered the Discount Approval Letter, which the student must present
                      at Ramagya Sports Academy to avail of the discount.
                    </li>
                  </ul>
                  {/* <br /> */}
                  <div className="sec-title3 text-left mb-45">
                    <h2 className="title-100">How It Works</h2>
                    <ul className="custom-bullets">
                      <li>
                        <b>Online Form Submission:</b> Parents can now submit their discount
                        requests online using our dedicated form.
                      </li>
                      <li>
                        <b>Digital Verification:</b> The Accounts Department will digitally
                        verify and approve the discount requests, ensuring accuracy and
                        efficiency.
                      </li>
                      <li>
                        <b>Notification and Coupon Code:</b> Upon approval, parents will receive
                        a notification and a unique coupon code on their registered mobile
                        number.
                      </li>
                      <li>
                        <b>Redeem Your Discount:</b> Simply visit our Sports Academy reception
                        with the admission number and coupon code to avail the discount.
                      </li>
                    </ul>
                    {/* <br /> */}
                    <h2 className="title-100">New Discount Rates</h2>
                    <ul className="custom-bullets">
                      <li>Active Students: 25% Discount</li>
                      <li>Active Parents: 10% Discount</li>
                      <li>Active Employees: 20% Discount</li>
                    </ul>
                    {/* <br /> */}
                    <p>
                      <b>Take advantage of this streamlined process today!</b>{" "}
                    </p>
                    <div className="btn-part">
                      <a
                        href="https://app.ramagyasportsacademy.com/school/request-form"
                        target={0}
                        style={{ color: "red" }}
                      >
                        Click here
                      </a>{" "}
                      to access the Discount Form and start enjoying the benefits.
                    </div>
                  </div>
                  {/* <div class="sec-title3 text-left mb-45">
                                      <h2 class="title-100">III. Utilizing the Discount</h2>
                                  </div>
                                  <ul class="custom-bullets">
                                      <li>To avail of the discount at Ramagya Sports Academy, students must present the Discount
                                          Approval Letter issued by the school.</li>
                                      <li>The discount will only be applied upon presenting this letter; failure to do so will
                                          result in the student being charged the total price for using the facilities.</li>
                                      <li>The Discount Approval Letter must be valid and in good condition. Damaged or defaced
                                          letters may not be accepted.</li>

                                  </ul>
                                  <br>
                                  <div class="sec-title3 text-left mb-45">
                                      <h2 class="title-100">IV. Terms and Conditions</h2>
                                  </div>
                                  <ul class="custom-bullets">
                                      <li>The discount is not transferable and is intended solely for the use of the student who
                                          applied for it.</li>
                                      <li>Misuse of the discount will result in immediate revocation of the privilege and could
                                          lead to disciplinary action.</li>

                                  </ul><br>
                                  <p>By implementing this Student Discount Policy, Ramagya School aims to make our sports academy
                                      facilities more accessible to our students, encouraging them to pursue sports and physical
                                      fitness activities, thereby contributing to their holistic development.
                                  </p>

                                  <div class="btn-part">
                                      <a class="alliances-btn button-pulse" href="assets/pdf/rsa-discount-form.pdf" target="0">RSA
                                          Discount Form</a>
                                  </div> */}
                </div>

           </div>
          </div>
        </div>
      </section>
    
      <FooterNoida />
    </>
  );
};

export default EarlyLateChildPickup;
