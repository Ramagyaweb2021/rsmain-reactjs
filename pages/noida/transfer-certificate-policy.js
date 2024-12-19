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

const TransferCertificatePolicy = () => {
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
      <title>Transfer Certificate Policy | Ramagya School</title>
      <meta name="description" content=">Transfer Certificate Policy" />
      <meta name="keywords" content=">Transfer Certificate Policy" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/transfer-certificate-policy" />
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
                 Transfer Certificate Policy!
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
                  <h2 className="title-100">VISION STATEMENT</h2>
                </div>
                <p>
                  Ramagya School aims to foster a culture of academic excellence, holistic
                  development, and global awareness in a safe and nurturing environment.
                </p>
                <div className="sec-title3 text-left mb-45">
                  <h2 className="title-100">MISSION STATEMENT</h2>
                </div>
                <p>
                  Ramagya School is committed to empowering students to become responsible,
                  compassionate, and innovative leaders by providing a dynamic and inclusive
                  learning experience that values diversity and fosters a love for lifelong
                  learning.
                </p>
                <p>
                  <b>Objective:</b> To provide a clear, transparent, and efficient process for
                  the issuance of Transfer Certificates to students leaving the school.
                </p>
                <p>
                  <b>Policy Statement:</b> Ramagya School understands the need for a smooth
                  transition when students need to transfer to another school for various
                  reasons. This policy outlines the necessary steps and requirements for
                  obtaining a Transfer Certificate from Ramagya School.
                </p>
                <p className="p-margin-right">
                  <b>1. Request for Transfer Certificate</b>
                </p>
                <p></p>
                <ul className="internal-text-align">
                  <li>
                    Parents or guardians must submit an online request for a Transfer
                    Certificate by filling out the TC request form provided by the school
                    administration, clearly stating the reason for the transfer.
                  </li>
                  <li>
                    The request should be submitted at least one month before the intended
                    transfer date by submitting TC Request Form, to allow sufficient time for
                    the completion of the required formalities, failing which, one month&#39;s fee
                    will be charged in lieu thereof. An exception may be made in case of a
                    sudden transfer of government or military personnel.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>2. Clearance of Dues</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    All outstanding fees and dues must be cleared before the Transfer
                    Certificate can be issued.
                  </li>
                  <li>
                    Parents or guardians are required to settle any outstanding financial
                    obligations to the school, including tuition fees, library fines, and
                    other miscellaneous charges.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>3. Submission of Required Documents</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    Parents or guardians must submit any required documents, such as identity
                    proofs, address proofs, or other relevant documents, as requested by the
                    school administration.
                  </li>
                  <li>
                    The school may require specific documents depending on the student&#39;s
                    grade, curriculum, or other factors.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>4. Verification of Student Records</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    The school administration will verify the student&#39;s records, including
                    academic performance, attendance, and disciplinary history.
                  </li>
                  <li>
                    Any discrepancies or issues identified during the verification process
                    must be resolved before the Transfer Certificate can be issued.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>5. Issuance of Transfer Certificate</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    Upon completion of all the required formalities, the school will issue the
                    Transfer Certificate within 30 working days from the date the request is
                    received. This time frame allows for the necessary processing and
                    administrative procedures.
                  </li>
                  <li>
                    The Transfer Certificate will include essential details such as the
                    student&#39;s personal information, academic records, and the reason for
                    leaving the school.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>6. Parent and Student Support</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    Ramagya School is committed to providing support and guidance to parents
                    and students during the transfer process.
                  </li>
                  <li>
                    The school administration and faculty will be available to address any
                    concerns or queries, ensuring a smooth and stress-free transition for the
                    student.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>7. Re-admission Consideration</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    In case a student seeks re-admission to Ramagya School, the school will
                    assess the application on a case-by-case basis, subject to the
                    availability of seats and adherence to the school&#39;s admission criteria.
                  </li>
                </ul>
                <br />
                <div className="sec-title3 text-left mb-45">
                  <h2 className="title-100">FEE RULES</h2>
                </div>
                <p className="p-margin-right">
                  <b>1. Notice for Withdrawal and Fee Charge</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    If a child has to be withdrawn from school, parents are requested to give
                    one calendar month&#39;s notice by submitting TC Request Form, Failure to
                    provide the notice by the 10th of the preceding month will result in the
                    charge of one month&#39;s fee in lieu thereof. An exception may be made in
                    case of a sudden transfer of government or military personnel.
                  </li>
                  <li>
                    Those who wish to withdraw in the month of May in all cases, pay the fee
                    for the month of June.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>2. Withdrawal during Summer Vacations</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    No notice is accepted during the school vacation, and in case of a
                    withdrawal at this time; the fees must be paid up to the end of the
                    quarter.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>3. Withdrawal after Academic Session</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    Those who wish to withdraw after the academic session should inform the
                    school by submitting TC Request Form by 15th March – failing which the fee
                    for the next month will be charged.
                  </li>
                </ul>
                <br />
                <p className="p-margin-right">
                  <b>4. Monthly Fee Refund for Whole Session Payments</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    If the monthly fee payment is made for the whole session or in excess for
                    any reason, and the application of withdrawal is submitted during the
                    session, the excess monthly fee will be refunded. The yearly discount
                    provided for payment of the fee for the full year will not be applicable
                    in this case.
                    <br />
                    <b>Explanation:</b> If the monthly fee is paid for the whole session
                    (April-March) and the withdrawal application is submitted in September,
                    the monthly fee from October to March will be refunded.
                  </li>
                </ul>
                <br />
                <div className="sec-title3 text-left mb-45">
                  <h2 className="title-100">SECURITY REFUND</h2>
                </div>
                <p>
                  <b>Refund Application Timeline</b>
                </p>
                <ul className="internal-text-align">
                  <li>
                    Students will have to apply for a security refund within two years after
                    leaving the school. Otherwise, their security will be forfeited.
                  </li>
                </ul>
                <br />
                <p>
                  Ramagya School strives to make the process of obtaining a Transfer
                  Certificate as seamless and efficient as possible. We understand the
                  importance of a smooth transition for students and their families and are
                  committed to providing the necessary support and assistance throughout the
                  process. Our policy aims to maintain the highest standards of transparency
                  and professionalism, ensuring that parents and students can have a positive
                  experience during their time at Ramagya School and beyond.
                </p>
                <div className="btn-part">
                  <a
                    className="btn custom-btn"
                    href="https://forms.gle/6AHWMc1VzvxUKqJP7"
                    target="_blank"
                  >
                    Request for TC Form Here
                  </a>
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

export default TransferCertificatePolicy;
