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
      <title>Early Late Child Pickup | Ramagya School</title>
      <meta name="description" content="Early Late Child Pickup" />
      <meta name="keywords" content="Early Late Child Pickup" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/early-late-child-pickup" />
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
                 Early Late Child Pickup!
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
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Vision</h2>
              </div>
              <p>
                To leverage innovative technology and create a secure, efficient, and
                transparent pick-up process that ensures the safety and convenience of our
                students and their families.
              </p>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Mission</h2>
              </div>
              <p>
                Our mission is to implement a state-of-the-art Automated Early/Late Pick-Up
                System that provides a seamless, hassle-free experience for parents and
                guardians, while ensuring strict adherence to safety protocols and school
                policies.
              </p>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Objective</h2>
                <ul className="custom-bullets">
                  <li>
                    Enhance Safety and Security: Ensure the secure handover of students
                    through verified authorization and documentation.
                  </li>
                  <li>
                    Streamline Processes: Automate and simplify the early and late pick-up
                    procedures for both parents and school staff.
                  </li>
                  <li>
                    Improve Accountability: Maintain accurate records of all pick-ups,
                    fostering transparency and accountability.
                  </li>
                  <li>
                    Facilitate Coordination: Enhance communication and coordination between
                    the school and transportation teams for efficient pick-ups.
                  </li>
                  <li>
                    Promote Compliance: Adhere to school policies and safety guidelines
                    through systematic monitoring and enforcement.
                  </li>
                  <li>
                    Encourage Feedback: Actively seek and incorporate feedback to
                    continually improve the system and its effectiveness.
                  </li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Key Features</h2>
                <ul className="custom-bullets">
                  <li>
                    <strong>Online Request Submission: </strong> Parents or guardians can
                    submit pick-up requests through a digital form, specifying the date,
                    time, and reason.
                  </li>
                  <li>
                    <strong>Authorization and Documentation:</strong> The system captures
                    all necessary details, including the name and relationship of the
                    authorized person picking up the child, ensuring a secure handover.
                  </li>
                  <li>
                    <strong>Prompt Confirmation:</strong> Upon receipt of the pick-up
                    request, the school promptly acknowledges and confirms the submission to
                    parents.
                  </li>
                  <li>
                    <strong>Coordinated Pick-Up for Transport Users:</strong> The system
                    allows efficient coordination between the school and transportation team
                    for seamless pick-up processes.
                  </li>
                  <li>
                    <strong>Accurate Record-Keeping:</strong> The system maintains detailed
                    records of all early and late pick-ups, ensuring accountability and easy
                    access to historical data.
                  </li>
                  <li>
                    <strong>Compliance and Policy Adherence:</strong> The system ensures
                    strict adherence to school policies and safety guidelines.
                  </li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">
                  Procedures: Transparent Communication and Timely Notifications:
                </h2>
                <ul className="custom-bullets">
                  <li>
                    Parents or guardians must provide written notice in advance, specifying
                    the date, time, and reason for early/late pick-up via a digital form.
                  </li>
                  <li>
                    The notice should include the authorized person&#39;s name and relationship,
                    ensuring a secure release of the child.
                  </li>
                  <li>
                    The school will acknowledge receipt and provide confirmation promptly.
                  </li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Safety and Security for Walkers</h2>
                <ul className="custom-bullets">
                  <li>
                    Students will be released only to the authorized person mentioned in the
                    written notice.
                  </li>
                  <li>
                    The authorized person must present the school-provided escort card or a
                    valid ID for verification.
                  </li>
                  <li>
                    Signing the early / late pick-up register at the school reception is
                    mandatory.
                  </li>
                  <li>Unaccompanied early / late pick-up for students is not allowed.</li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">
                  Coordinated and Secure Pick-up for School Transport or Private Transport
                  Users
                </h2>
                <ul className="custom-bullets">
                  <li>
                    Parents or guardians must inform the school administration about the
                    early / late pick-up request in advance.
                  </li>
                  <li>
                    The school will efficiently coordinate with the transportation team for
                    a safe pick-up.
                  </li>
                  <li>
                    The authorized person must present the escort card or a valid ID for a
                    secure handover.
                  </li>
                  <li>Signing the early / late pick-up register is required.</li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">
                  Strict Adherence to School Policies and Parental Peace of Mind
                </h2>
                <ul className="custom-bullets">
                  <li>
                    The early/late pick-up procedure must adhere to all applicable school
                    policies.
                  </li>
                  <li>
                    The school reserves the right to deny pick-up requests if policies are
                    not followed or for student safety.
                  </li>
                  <li>
                    Our top priority is ensuring the protection and well-being of our
                    students.
                  </li>
                </ul>
              </div>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">Rollout Plan:</h2>
                <p>
                  We have conducted training sessions to familiarize all associated staff
                  members with the new automated system to ensure a smooth transition.
                </p>
                <h2 className="title-100">Support and Feedback:</h2>
                <p>
                  {" "}
                  We value your input and welcome to refine and enhance the system. For any
                  issues o r suggestions, please raise a{" "}
                 
                  <a className='btn custom-btn'
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdZ7g3I3YrjU9BvCYQ3vITClZ6VcHwGkaTXAlCSIAkwsfTL4A/viewform"
                    target="_blank"
                  >
                     <b>Help Ticket.</b>
                  </a>
                </p>
                <p />
                <h2 className="title-100">Support and Communication:</h2>
                <p>
                  {" "}
                  Adequate support is available to address any concerns parents may have.
                  Clear communication about the implementation and benefits of the new
                  system is crucial to its success.
                  <br />
                  <br />
                  Click on the link for:  
                  <a className='btn custom-btn'
                    href="https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbzQwOft52eum6RTLgW629wR_FZvwh_50AKEKnRW9VSacp_MyEId7vc1J3fOTUQEzcKN/exec"
                    target="_blank"
                  >
                   <b>Early/Late Child Pick-up Request Form</b>
                  </a>
                </p>
                <p>For any questions or clarifications, please reach out to us.</p>
                <p>Let’s make pick-ups safer, smoother, and smarter at Ramagya School!</p>
              </div>
            </div>


           </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default EarlyLateChildPickup;
