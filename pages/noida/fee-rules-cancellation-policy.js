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

const FeeRulesCancellationPolicy = () => {
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
        <title>Fee Rules And Cancellation Policy | Ramagya School</title>
        <meta name="description" content="Learn about the fee rules and cancellation policy at Ramagya School, Noida. Understand the payment structure, deadlines, and terms for fee cancellation." />
        <meta name="keywords" content="Fee Rules, Cancellation Policy, Ramagya School Noida, Fee Payment, School Fees, Cancellation Terms" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/fee-rules-cancellation-policy" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Fee Rules And Cancellation Policy | Ramagya School Noida" />
        <meta property="og:description" content="Learn about the fee rules and cancellation policy at Ramagya School, Noida. Understand the payment structure, deadlines, and terms for fee cancellation." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/fee-rules-cancellation-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fee Rules And Cancellation Policy | Ramagya School Noida" />
        <meta name="twitter:description" content="Learn about the fee rules and cancellation policy at Ramagya School, Noida. Understand the payment structure, deadlines, and terms for fee cancellation." />
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
                 Fee Rules And Cancellation Policy!
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
                At Ramagya School, we strive to provide affordable and accessible education
                for all students, while maintaining a high standard of excellence in our
                academic and extracurricular offerings. Our vision is to establish a
                transparent and equitable fee policy that ensures financial sustainability
                and provides a clear understanding of the financial commitments and
                expectations of parents and guardians.
              </p>
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">MISSION STATEMENT</h2>
              </div>
              <p>
                Our mission is to create a holistic School Fees and Transport Fee Policy
                that outlines the fee structure, payment terms, late fee charges, and
                consequences for non-payment while fostering a culture of responsibility,
                commitment, and mutual respect between the school and parents or guardians.
              </p>
              <p>
                <b>Objective:</b> To establish a fair, transparent, and consistent School
                Fees and Transport Fee Policy that outlines the fee structure, payment
                terms, late fee charges, and consequences for non-payment.
              </p>
              <p>
                <b>Policy Statement:</b> Ramagya School is committed to providing a clear
                and fair fee structure that supports the educational needs and financial
                commitments of parents and guardians while ensuring the school&#39;s ability to
                maintain and enhance the quality of education and extracurricular
                activities.
              </p>
              <p className="p-margin-right">
                <b>1. Fee Structure and Payment Terms</b>
              </p>
              <p></p>
              <ul className="custom-bullets">
                <li>
                  Clearly outline the fee structure for tuition, transport, and other
                  additional costs on the school&#39;s website and in enrollment materials.
                </li>
                <li>
                  Provide parents and guardians with an itemised list of fees and charges
                  during the enrollment process.
                </li>
                <li>
                  Establish reasonable payment terms and deadlines, including options for
                  quarterly or annual payments.
                </li>
              </ul>
              {/* <br /> */}
              <p className="p-margin-right">
                <b>2. Late Fee Charges</b>
              </p>
              <ul className="custom-bullets">
                <li>
                  Implement a late fee charge of Rs. 50 INR per day for overdue tuition
                  payments, up to a maximum of three months.
                </li>
                {/* <li>Eg. If the Tuition fee was to be paid on April 10th, Then Late fee charges will be applied as follows: 150 INR in April, 200 INR in May, and 200 INR in June.</li> */}
              </ul>
              {/* <br /> */}
              <p className="p-margin-right">
                <b>3. Consequences for Non-Payment of Tuition Fees</b>
              </p>
              <ul className="custom-bullets">
                <li>
                  Notify parents and guardians of outstanding fees through written reminders
                  and phone calls.
                </li>
                <li>
                  If payment is not received by the 11th of the fourth month (in July, e.g
                  Apr-June Quarter), the student&#39;s name will be struck off the school
                  register.
                </li>
                <li>
                  Students whose names have been struck off the register may be required to
                  reapply for admission and pay any outstanding fees as well as a 50%
                  re-admission fee before being considered for re-enrollment.
                </li>
              </ul>
              {/* <br /> */}
              <p>
                <strong>Note:</strong> If the quarterly fee is pending, the school reserves
                the right to take legal action to recover the dues. For parents who have
                opted for the quarterly fee option, this policy will be applicable from the
                15th of the current month when the fee is due. For parents who have opted
                for the monthly fee option, the policy will be applicable from the 15th of
                the third month when the quarterly fee is pending.
              </p>
              <p className="p-margin-right">
                <b>4. Transport Fee Consequences</b>
              </p>
              <ul className="custom-bullets">
                <li>Transport fees must be paid before the 10th of every month.</li>
                <li>
                  If payment is not received by the 10th, the student will not be allowed to
                  avail of transport services from the 11th of that month until the
                  outstanding fees are paid.
                </li>
              </ul>
              {/* <br /> */}
              <p className="p-margin-right">
                <b>5. Financial Assistance and Scholarships</b>
              </p>
              <ul className="custom-bullets">
                <li>
                  Offer financial assistance and scholarships to eligible students, based on
                  merit and financial need.
                </li>
                <li>
                  Provide information on the application process and eligibility criteria
                  for financial assistance and scholarships on the school&#39;s website and in
                  enrollment materials.
                </li>
              </ul>
              {/* <br /> */}
              <p className="p-margin-right">
                <b>6. New Protocol for Monthly Payment Requests</b>
              </p>
              <ul className="custom-bullets">
                <li>
                  <strong>Deadline for Monthly Payment Requests:</strong> All requests to
                  convert quarterly fee payments to monthly payments must be submitted by{" "}
                  <strong>July 31st of each academic year.</strong> Any requests received
                  after this date will not be considered.
                </li>
                <li>
                  <strong>Late Fee Waivers:</strong> If a parent requests a monthly payment
                  conversion, any late fees incurred up to the date of the request will not
                  be waived. Parents must settle all outstanding fees, including late fees
                  before the conversion request can be processed.
                </li>
              </ul>
              {/* <br /> */}
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">FEE REFUND RULES</h2>
              </div>
              <p className="p-margin-right">
                <b>1. Withdrawal and Refund Procedure</b>
              </p>
              <p className="p-margin-right">
                After admission, if parents wish to withdraw their child, the fee refund
                policy is as follows:
              </p>
              <ul className="custom-bullets">
                <li>
                  A deduction of 25,000 from the admission fee and the remaining amount will
                  be refunded if the application of withdrawal is made within 30 days from
                  the date of admission.
                </li>
                <li>
                  A deduction of 50,000 from the admission fee and the remaining amount will
                  be refunded if the application of withdrawal is made within 30-60 days
                  from the date of admission.
                </li>
                <li>
                  If the application of withdrawal is made post 60 days from the date of
                  admission but before session commencement only caution money will be
                  refunded including tuition fee (if applicable).
                </li>
                <li>
                  No admission fee will be refunded if the application for withdrawal is
                  made after the session commencement.
                </li>
              </ul>
              <br />
              <p>
                Ramagya School aims to provide a transparent and equitable financial
                framework that supports the educational needs of all students while ensuring
                the school&#39;s ability to maintain and enhance the quality of education and
                extracurricular activities.{" "}
              </p>
              <p>
                This policy has been carefully designed to meet the expectations of the
                school principal and management, ensuring that it reflects the values and
                commitments of Ramagya School.
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

export default FeeRulesCancellationPolicy;
