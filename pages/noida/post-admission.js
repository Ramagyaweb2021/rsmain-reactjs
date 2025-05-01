import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import AdmissionScrollspyMenu from '../components/AdmissionScrollspyMenu';
import PostAdmissionDeviderSection from '../components/PostAdmissionDeviderSection';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const PostAdmission = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // Optional cleanup function in case any WOW.js animations need to be cleared
    return () => {
      wow.sync();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Post-Admission Guidelines Ramagya School Sec 50 Noida</title>
        <meta
        name="description"
        content="Post-admission steps at Ramagya School Noida. Find essential information on onboarding, documentation, and student orientation at Best Noida CBSE school."
        />
        <link rel="canonical" href="https://ramagyaschool.com/noida/post-admission" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Post-Admission Guidelines Ramagya School Sec 50 Noida" />
        <meta property="og:description" content="Post-admission steps at Ramagya School Noida. Find essential information on onboarding, documentation, and student orientation at Best Noida CBSE school." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/noida/post-admission" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Post-Admission Guidelines Ramagya School Sec 50 Noida" />
        <meta name="twitter:description" content="Post-admission steps at Ramagya School Noida. Find essential information on onboarding, documentation, and student orientation at Best Noida CBSE school." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <HeaderNoida />

      {/* Maine banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Post Admission!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

        <AdmissionScrollspyMenu />
        {/*Post admission section */}
        <section className="container learn pre-admission-section my-5">
        <h1 className="main-heading wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.3s'}}>
             POST - ADMISSION
            </h1>
            <p>After securing admission, parents are encouraged to complete necessary formalities and stay engaged with our updates and resources. This helps ensure a seamless transition, fostering a supportive environment tailored to each child’s growth at Ramagya School.</p>
            {/* <Image src="/images/noida/admission/pre-admission-step.webp" alt="pre-admission-step" width={1256} height={296} /> */}
      </section>
       
        {/* Confirmation section */}
        <section className="container learn pre-admission-section my-5">
          <div className="row g-0">
            <div className="col-lg-12 g-0">
              <h1 className='main-heading-internal-pages'>
                  CONFIRMATION
                  <span className="lineclass" />
                  {/* <span className="sub-heading"> */}
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    ADMISSION CONFIRMATION
                  </span>
                </h1>
                <p style={{ textAlign: "center" }}>
                  Upon conferring admission to an applicant, the Parents/Legal Guardians will receive a Fee Performa Invoice, which outlines the admission charges and tuition fee. They are then required to submit the specified fees mentioned in the Fee Performa Invoice. Once the fee payment is completed, the parents/legal guardians must complete the post-admission forms.
                </p>
                <p style={{ textAlign: "center" }}>Upon receipt of the completed forms, the Admission Office will provide the Student&#39;s ID Number. This unique number is assigned to each student and should be used in all future communications with the school.</p>
            </div>
          </div>
        </section>
        {/* Appointment section */}
        <section className='container foundation-about-us-section my-5'>
        <div className="row">
          <div className="col-lg-8 mx-auto d-flex align-items-center">
            <div className='about-us-foundation'>
              <p><b>Payment of School Fees</b></p>

              <p>Admission charges and tuition fees, as outlined in the Fee Performa Invoice, must be paid at the time of accepting admission, within the specified dates indicated in the school&#39;s Fee Structure. Failure to pay any part of the fee/amount will result in the student being unable to attend the school.</p>

              <p><b>Student Allotments</b></p>

              <p>Upon admission, the following items will be issued/allotted to each student</p>
                <ul className='custom-bullets'>
                    <li>House</li>
                    <li>Section</li>
                    <li>ID card</li>
                    <li>Parent&#39;s escort card</li>
                </ul>
                <p> For any inquiries related to post-admission matters, please contact your <b>relationship manager, - +91-9599-104-010  (Ms. Anita)</b></p>
                <hr/>
                <p><b>Transportation Facilities</b></p>

                <p>The school offers transportation services to ensure students arrive at school on time.</p>
                  <ul className='custom-bullets'>
                      <li>Routes</li>
                      <li>Fees</li>
                  </ul>
                  <p> For all transport related enquiries: Please contacts us at <b>- +91-9540-099-492</b>   Or e-mail at <b>- transport@ramagyaschool.com</b></p>

              
            </div>
          </div>
          <div className="col-lg-4">
            <div className='row'>
              <div className='col-md-12 g-1'>
                <Image src="/images/noida/admission/payment.webp" width={350} height={276} alt="School Building" className="img-fluid rounded" />
              </div>
            </div>

            {/*
              <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" /> */}
          </div>
        </div>
        </section>
        <PostAdmissionDeviderSection/>
        {/* Appointment section */}
        <section className="container about-us my-5">
        <div className="row justify-content-center">
          <div className="col-md-4 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/transport.webp" alt="transport" width={120} height={140} />
                <p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc-77BLVQkfQ7J-NAB9tVDY7OG9hWQSFxh-OTRJxX6UjtUNcg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Transportation Form
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/further-info.webp" alt="further-info" width={120} height={140} />
                <p>
                  <a
                    href="/noida/parent-portal-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Further Information
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/whatsapp.webp" alt="whatsapp" width={120} height={140} />
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=7065465400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    ERP
                  </a>
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

export default PostAdmission;
