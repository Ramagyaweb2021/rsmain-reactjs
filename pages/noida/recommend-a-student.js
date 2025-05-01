import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import AdmissionScrollspyMenu from '../components/AdmissionScrollspyMenu';
import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const RecommendAStudent = () => {
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
      {/* Primary SEO */}
      <title>Recommend a Student Ramagya School Sec 50 Noida</title>
      <meta
        name="description"
        content="Refer a student to Ramagya School Sector 50 Noida and be part of our growth story. Join our referral program and help others access quality education."
      />
      <link rel="canonical" href="https://ramagyaschool.com/noida/recommend-a-student" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Recommend a Student Ramagya School Sec 50 Noida" />
      <meta property="og:description" content="Refer a student to Ramagya School Sector 50 Noida and be part of our growth story. Join our referral program and help others access quality education." />
      <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
      <meta property="og:url" content="https://ramagyaschool.com/noida/recommend-a-student" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Recommend a Student Ramagya School Sec 50 Noida" />
      <meta name="twitter:description" content="Refer a student to Ramagya School Sector 50 Noida and be part of our growth story. Join our referral program and help others access quality education." />
      <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

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
                  RECOMMEND A STUDENT!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdmissionScrollspyMenu />
      {/* Are You Aware Of A Young Talent Around You? section */}
      <section className="container-fluid bg-image-section my-5">
      <div className="container">
      <div className='row'>
      <div className="col-md-12">
      <div className="text-left mb-5">
      <div className='about-content'>
      <h2
      className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
      style={{ animationDelay: '0.2s', textAlign: "center" }}
      >
        ARE YOU AWARE OF A YOUNG TALENT AROUND YOU?
      </h2>

      <p style={{ textAlign: "center" }}>
        Ramagya School is committed to enticing, developing, retaining and cherishing the finest and brilliant students from diverse backgrounds who have the desire to be educated in a meticulous, punctilious educational experience. We believe that our parents, students, alumni and friends are the headsprings for promoting Ramagya School and recommending promising students.
        ‘Recommend a Student’ encourages you to send us the names and addresses of educands you know and believe would be a great addition to Ramagya School. Also, the recommended student, if has exceptional talent, will be given a scholarship.
      </p>

      </div>
      </div>
      </div>
      </div>  
      {/* Section for Classes XI and XII */}
      <div className="row">
      <div className="col-md-4 custom-column">
      <div className="p-0 border rounded mb-3">
      <Image src="/images/noida/admission/recommended-student.webp" alt="recommended-student" className="img-fluid rounded" width={364} height={364} />
      </div>
      </div>
      <div className="col-md-4 custom-column">
      <div className="p-3 border rounded mb-3">
      <h6 className="fw-bold">A qualified student would be described as:</h6>
      <ul className="custom-bullets">
        <li>Strong academic performance and curiosity for learning.</li>
        <li>Actively engaged in co-curricular activities.</li>
        <li>Values integrity, respect, and responsibility.</li>
        <li>Enthusiastic about teamwork and community.</li>
        <li>Committed to growth and embraces challenges.</li>
      </ul>
      </div>
      </div>
      <div className="col-md-4 custom-column">
      <div className="p-3 border rounded mb-3">
      <h6 className="fw-bold">Who can recommend the students?</h6>
       <p>Recommendations are accepted from teachers, school administrators, alumni, and parents. These individuals are in the best position to help us identify promising young individuals who have the greatest potential to benefit from Ramagya School.</p>
      </div>
      </div>
        {/* Learb more button */}
        {/* <div className="d-flex justify-content-center align-items-center mt-20">
          <div className="learn-more-button">
            <a href="#">Recommend Student</a>
          </div>
        </div> */}
       
        <p className='mt-50' style={{textAlign:"center"}}>For more information, please contact our Admission Counsellors at <b>8010 333 555</b> or email us at <b>admissions@ramagyaschool.com</b></p>
      </div>
      </div>
      </section>  
     
  
      <FooterNoida />
    </>
  );
};

export default RecommendAStudent;
