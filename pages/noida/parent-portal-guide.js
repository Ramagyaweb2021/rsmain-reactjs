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

const ParentPortalGuide = () => {
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
        <title>Parent Portal Guide | Ramagya School</title>
        <meta name="description" content="Get the detailed guide for the Parent Portal at Ramagya School, Noida. Learn how to navigate the portal, access your child’s information, and stay updated on school activities." />
        <meta name="keywords" content="Parent Portal Guide, Ramagya School Noida, Parent Portal, School Portal, Parent Access, Parent Dashboard" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/parent-portal-guide" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Parent Portal Guide | Ramagya School Noida" />
        <meta property="og:description" content="Explore the Parent Portal Guide at Ramagya School, Noida. Learn to access school updates, your child's progress, and more through the portal." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/parent-portal-guide" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parent Portal Guide | Ramagya School Noida" />
        <meta name="twitter:description" content="Access the Parent Portal Guide for Ramagya School, Noida. Stay informed about your child's academic journey and school activities." />
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
                 parent portal guide!
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
                  <div className="title-100">Ramagya Edunext App</div>
                  <p>
                    Ramagya School understands the essentiality of an effective partnership
                    between parents and school for the holistic development of a child.
                    Therefore, our school is powered by Edunext Mobile App &amp; Web Portal
                    that helps us consistently stay in touch with the parents and keep them in
                    the loop about their ward’s achievement, progress, and next steps.{" "}
                  </p>
                  <p>
                    At Ramagya School, we strongly believe in fully leveraging technology to
                    accomplish the primary objective of schooling to ensure students’
                    multifaceted growth, helping them realize their potential, not just
                    restricted to academics. In line with the same philosophy, Ramagya
                    School&#39;s Edunext Mobile App and Parent Portal come with features to keep
                    our parents ahead of the technology curve with regular cutting-edge
                    upgrades &amp; innovation.
                  </p>
                  <hr />
                  <div className="title-100">
                    How Can you install and operate Edunext mobile app and web portal?
                  </div>
                  <div className="title-100">For Mobile App:</div>
                  <ul className="internal-text-align">
                    <li>
                      Go to Google Play Store / Apple Store and search Edunext Parent
                      <br />
                      <span style={{ color: "#000000" }}>
                        <strong>For Android: </strong>&nbsp;
                        <span style={{ color: "#204e5c" }}>
                          <strong>
                            <a
                              style={{ color: "#204e5c" }}
                              href="https://play.google.com/store/apps/details?id=com.edunext.tsmv10&hl=en_IN&gl=US"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span style={{ color: "#e1242a" }}>
                                <span style={{ color: "#e1242a" }}>Click here</span>
                              </span>
                            </a>
                          </strong>
                        </span>
                      </span>
                      <br />
                      <span style={{ color: "#000000" }}>
                        <strong>For iOS: </strong>&nbsp;
                        <span style={{ color: "#204e5c" }}>
                          <strong>
                            <a
                              style={{ color: "#204e5c" }}
                              href="https://apps.apple.com/in/app/edunext-parent/id1516241231"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span style={{ color: "#e1242a" }}>
                                <span style={{ color: "#e1242a" }}>Click here</span>
                              </span>
                            </a>
                          </strong>
                        </span>
                      </span>
                    </li>
                    <li>Install and open the mobile app and log in.</li>
                    <li>
                      Enter School Code. (School code is provided to you via teachers or at
                      the time of enrollment){" "}
                    </li>
                    <li>Enter the username and password provided to you. </li>
                  </ul>
                  <br />
                  <div className="title-100">For Web Portal: </div>
                  <ul className="internal-text-align">
                    <li>Open your preferred browser</li>
                    <li>
                      Visit the Ramagya School website. Click on the Admissions tab, then
                      click on Post Admissions
                    </li>
                    <li>
                      Reach the bottom of the page and click on For Further Information.
                    </li>
                    <li>Click on the Edunext Login button</li>
                    <li>Enter the username and password shared with you</li>
                  </ul>
                  <br />
                  <div className="title-100">How to Reset Password? </div>
                  <ul className="internal-text-align">
                    <li>Open your preferred browser.</li>
                    <li>
                      Visit Ramagya School Website, Click on the Admissions tab, then click on
                      Post Admissions
                    </li>
                    <li>
                      Reach the bottom of the page and click on For Further Information.
                    </li>
                    <li>Click on the Edunext ERP Login</li>
                    <li>Click on ‘Forget Password’ which is above the login button. </li>
                  </ul>
                </div>
                <div className="about-intro">
                  <br />
                  <hr />
                  <div className="title-100">
                    How to make Online Payments through a Web Portal &amp; Mobile App?
                  </div>
                  <div className="title-100">Web Portal:</div>
                  <ul className="internal-text-align">
                    <li>Use the preferable browser</li>
                    <li>
                      Visit Ramagya School click on Admission, Find Post Admission, and click
                      on the button.
                    </li>
                    <li>
                      Click on Further Information at the bottom of the page and click on
                      Edunext ERPTM Login/ Online Payment
                    </li>
                    <li>Enter the username and password shared by the school.</li>
                    <li>Go to the Fee menu and click on the Online Fee Payment button.</li>
                    <li>
                      Select the desired installment that you wish to pay &amp; click on the
                      proceed button.
                    </li>
                    <li>You will be redirected to the Payment Gateway page.</li>
                    <li>
                      Select the payment mode: Net banking/Debit Card/Credit Card/UPI &amp;
                      fill in the required details to complete the transaction.
                    </li>
                    <li>After successful payment, a fee receipt will be generated.</li>
                  </ul>
                  <br />
                  <div className="title-100">Mobile App: </div>
                  <ul className="internal-text-align">
                    <li>Open Edunext Mobile App.</li>
                    <li>Click on the Fee icon and select the pay now button.</li>
                    <li>
                      Select the desired installment to be paid and proceed further with the
                      payment.
                    </li>
                    <li>You will be redirected to the Payment Gateway page.</li>
                    <li>
                      Select the payment mode: Net banking/Debit Card/Credit Card/UPI &amp;
                      fill in the required details to complete the transaction.
                    </li>
                    <li>After successful payment, a fee receipt will be generated.</li>
                  </ul>
                  <br />
                  <div className="title-100">How to Reset Password? </div>
                  <ul className="internal-text-align">
                    <li>Open your preferred browser.</li>
                    <li>
                      Visit Ramagya School Website, Click on the Admissions tab, then click on
                      Post Admissions
                    </li>
                    <li>
                      Reach the bottom of the page and click on For Further Information.
                    </li>
                    <li>Click on the Edunext ERP Login</li>
                    <li>Click on ‘Forget Password’ which is above the login button. </li>
                  </ul>
                </div>
                <div className="about-intro">
                  <br />
                  <hr />
                  <div className="title-100">
                    Explore Salient features of the Edunext Mobile App
                  </div>
                  <p>
                    My Profile – You can view the personal details of the student and parents
                    along with the address updated by the school.
                  </p>
                  <p>
                    Attendance – You can check the attendance of your ward for a month or the
                    entire academic session.
                  </p>
                  <p>
                    Homework/Assignments – You can check the Homework/Assignment uploaded by
                    Class Teachers and submit the same after completing it.
                  </p>
                  <p>Communication – You may communicate with the Class Teacher/School.</p>
                  <p>
                    Circulars – You may view all the circulars updated by the school
                    authorities.
                  </p>
                  <p>
                    School Calendar – You can check the activities planned through Annual
                    School Calendar.
                  </p>
                  <p>
                    Fee Details – You can see fee details status of due/pending/paid. You can
                    also generate fee receipts through the mobile app as well.
                  </p>
                  <p>
                    Remark – Remarks from the teachers about performance/observation of the
                    student in the school.
                  </p>
                  <p>
                    Student Photo Gallery – You can view and download photos of various
                    activities conducted in the school.
                  </p>
                  <p>Achievement – You can check details of your ward&#39;s achievements.</p>
                  <p>Result – You can download the progress report of your ward.</p>
                  <p>Apply Leaves – You may apply leave(s) for your ward.</p>
                  <p>
                    Download (E-Resources) – You can download the syllabus, e-books, YouTube
                    links, etc.
                  </p>
                  <p>
                    Attender – Details of parents and guardians who are added to student
                    profiles for school visits to pick up their ward. You can also upload
                    their photos too.
                  </p>
                  <p>
                    Performance – You can see subject-wise marks and grades and the overall
                    analyses of your ward throughout the year.
                  </p>
                  <p>
                    Syllabus – You may download the syllabus of the class in which your ward
                    is studying.
                  </p>
                  <p>
                    E-content – You may access the E-content chapters and topic-wise in the
                    form of (audio, videos, web links, PDF questions bank, etc.)
                  </p>
                  <p>
                    E-connect – You can view all the scheduled online classes and join the
                    classes directly from the App.
                  </p>
                  <p>
                    Quizzes – Online tests/exams would be conducted through this feature. You
                    will get notifications regarding the scheduled online test.
                  </p>
                  <p>
                    Quiz Result – You can view the result of the online exams or tests
                    conducted with a complete analysis.
                  </p>
                  <p>
                    Transport - You can check the Driver’s &amp; Conductor details of the
                    vehicle you ward is availing. You may track the location of the vehicle as
                    well. Also, you may request bus avail/withdrawal.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    
      <FooterNoida />
    </>
  );
};

export default ParentPortalGuide;
