import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import AdmissionScrollspyMenu from '../components/AdmissionScrollspyMenu';
import Image from 'next/image';
import TuitionFeeTable from '../components/TuitionFeeTable';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ScholarshipProgramme = () => {
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
      <title>Scholarship Programme | Ramagya School</title>
      <meta name="description" content="Scholarship Programme" />
      <meta name="keywords" content="Scholarship Programme" />
      <link rel="canonical" href="https://ramagyaschool.com/noida/fee-structure" />
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
                  Scholarship Programme!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdmissionScrollspyMenu />
      {/* small push can section */}
      <section className="container learn pre-admission-section my-5">
        <h1 className="main-heading wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.3s'}}>
            A SMALL PUSH CAN BE A GIANT LEAP!
            </h1>
            <p className='justify-content-center wow animate__animated animate__fadeInUp'>Each and every one of us has our own passions and areas of interest that we would like to explore and excel at. On the other hand, there are only a few who are brave enough as well as privileged enough to take the road less travelled. Would the world not be a much better place if people followed their passion?
      What if you got a push at the right moment? What if you were given a boost that could help you secure your future?
      At Ramagya School this is what the Scholarship Programme is for; a morale-boosting push that can help you propel yourself into the annals of creative freedom and true self-worth in the area of academic success. There are three Scholarship Programmes offered by Ramagya that have been tailored for the purpose of ensuring that each student may avail this crucial push during their educational journeys, depending on their personal aspirations.</p>
      <p className='justify-content-center wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.4s'}}><b>NOTE:</b> Special benefits for BPL Card Holders: Eligible students for 100% scholarship will get books, uniform and transport free.</p>
      </section>
    
      {/* THE ACADEMIC SCHOLARSHIP FOR SESSION 2024-2025 section */}
      <section className="container-fluid bg-image-section my-5">
      <div className="container my-5">
      <div className='row'>
      <div className="col-md-12">
      <div className="text-left mb-5">
      <div className='about-content'>
      <h2
      className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
      style={{ animationDelay: '0.2s', textAlign: "center" }}
      >
      THE ACADEMIC SCHOLARSHIP FOR SESSION 2024-2025
      </h2>

      <p style={{ textAlign: "center" }}>
      Ramagya School awards merit or academic scholarship to students who do exceptionally well in academic and educational frontiers. These are directed towards acknowledging students for their achievements in the fields of academics and educational prowess.
      </p>

      </div>
      </div>
      </div>
      </div>  
      {/* Section for Classes XI and XII */}
      <div className="row my-5">
      <div className="col-md-4 custom-column">
      <div className="p-0 border rounded mb-3">
      <Image src="/images/noida/admission/schorlaship-1.webp" alt="Scholarship Image" className="img-fluid rounded" width={364} height={364} />
      </div>
      </div>
      <div className="col-md-4 custom-column">
      <div className="p-3 border rounded mb-3">
      <h6 className="fw-bold">Criteria</h6>
      <ul className="list-unstyled">
      <li>1. 25% discount in tuition fee for students scoring between 95% to 97.9%</li>
      <li>2. 50% discount in tuition fee for students scoring between 97% to 98.5%</li>
      <li>3. 100% discount in tuition fee for students scoring above 98.6%</li>
      </ul>
      </div>
      </div>
      <div className="col-md-4 custom-column">
      <div className="p-3 border rounded mb-3">
      <h6 className="fw-bold">Applicability</h6>
      <ul className="list-unstyled">
      <li>1. Applicable for the current academic session.</li>
      <li>2. Non-Ramagya students must clear the mandatory CLT test at the time of admission.</li>
      </ul>
      </div>
      </div>
      </div>
      {/* Sports Scholarship Section */}
      <div className="text-center mb-5">
      <h2 className='main-heading-internal-pages wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.3s'}}>SPORTS SCHOLARSHIP</h2>
      <p>
      Ramagya School besides offering academic scholarship offers a scholarship in sports. Ramagya School provides the optimal combination of sports and academics and making Ramagya School a forerunner in the area where a sports student feel that they have a chance to qualify and pursue the combination of sports and academics with ease.
      </p>
      </div>
      <div className="row justify-content-center align-items-center mb-5">
      <div className="col-md-4">
      <div className="p-3 border rounded mb-3" style={{ backgroundColor: '#fff' }}>
      <h6 className="fw-bold">Criteria</h6>
      <p>1. It is mandatory to clear CLT at the time of admission (if the applicant student is a Non-Ramagyan).</p>
      </div>
      </div>
      <div className="col-md-4">
      <Image src="/images/noida/admission/scholarship-2.webp" alt="Scholarship Image" className="img-fluid rounded" width={364} height={364} />
      </div>
      <div className="col-md-4">
      <div className="p-3 border rounded" style={{ backgroundColor: '#fff' }}>
      <h6 className="fw-bold">Applicability</h6>
      <ul className="list-unstyled">
      <li>1. The scholarship is offered to the students of classes I to XII</li>
      <li>2. The above mentioned waiver would only be applicable on the tuition fee</li>
      <li>3. Applicable for current session and same shall be reviewed on year to year basis</li>
      <li>4. The benefits stands null and void if not applied in the same academic session</li>
      </ul>
      </div>
      </div>
      </div>
      {/* Incentives for Special Achievers */}
      <div className="col-md-12">
      <div className="p-3 border rounded" style={{ backgroundColor: '#fff' }}>
      <h6 className="fw-bold">Incentives for Special Achievers</h6>
      <p>A Student who has been awarded Gold or Silver medal at the international and national level competitions recognized by the federations or recognized and funded by ministry of youth affairs and sports shall be entitled for below mentioned incentives-:</p>
      <ul className="list-unstyled">
      <li>1. Free kits to the individual players or team</li>
      <li>2. Relaxation in attendance for the period that the student is attending training camp or going to participate in any recognized competition sponsored by the school</li>
      <li>3. The school shall also provide extra support in the form of remedial classes, class notes, arrangement of special examination or any other help that the child requires to improve his or her performance in academics.</li>

      </ul><br/>
      <p>The school shall also provide support in-:</p>
      <ul className="list-unstyled">
      <li>1. Sports Psychology</li>
      <li>2. Sports Physiotherapist</li>
      <li>3. Physician</li>
      <li>4. Nutritionist</li>
      <li>5. Gym facilities</li>
      <li>6. 25% Discount on Ramagya Sports Academy</li>
      <li>7. Sports physiology</li>

      </ul>
      </div>
      </div>
      </div>
      </section>  
      <TuitionFeeTable/>
       {/* AESTHETIC SCHOLARSHIP section */}
       <section className="container-fluid bg-image-section my-5">
        <div className="container my-5">
        <div className='row'>
        <div className="col-md-12">
        <div className="text-left mb-5">
        <div className='about-content'>
        <h2
          className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
          style={{ animationDelay: '0.2s', textAlign: "center" }}
          >
            AESTHETIC SCHOLARSHIP
        </h2>

        <p style={{ textAlign: "center" }}>
          Ramagya offers the aesthetic scholarship to the luminescent talents in the field of music, art and dance. Similar to the academic scholarships, an additional bursary can be awarded on a means-tested basis if required.
        </p>

        </div>
        </div>
        </div>
        </div>  
        <div className="row">
          <div className="col-md-4 custom-column">
          <div className="p-3 border rounded mb-3">
          <h6 className="fw-bold">Criteria</h6>
          <ul className="list-unstyled">
          <li>Students who got prizes obtaining 1st, 2nd, and 3rd positions in Govt. recognized national level and state level competitions such as Ministry of Culture, Indian Council of Cultural Relations, Indian Railway Cultural Competitions, Bharat Vikash Parisad, Rotary Club, Reality Shows, Inter School Dance Competitions National and State level, Prayag Sangeet Smity, Bangiya Sangeet Samity, Gandharva Mahavidhyalaya Competitions and equivalent.</li>
          </ul>
          </div>
          </div>
          <div className="col-md-4 custom-column">
          <div className="p-3 border rounded mb-3">
          <h6 className="fw-bold">Applicability</h6>
          <ul className="list-unstyled">
            <li>1. Applicable for the current academic session.</li>
            <li>2. Non-Ramagya students must clear the mandatory CLT test at the time of admission.The scholarship is offered to the students of classes I to XII</li>
            <li>3. above mentioned waiver would only be applicable on the tuition .</li>
            <li>4. Applicable for current session and same shall be reviewed on year to year basis.</li>
            <li>5. The benefits stands null and void if not applied in the same academic session.</li>
            <li>6. It is mandatory to clear the CLT at the time of admission ( if the applicant student is a Non- Ramagyan)</li>
          </ul>
          </div>
          </div>
          <div className="col-md-4 custom-column">
          <div className="p-0 border rounded mb-3">
          <Image src="/images/noida/admission/scholarship-3.webp" alt="Scholarship Image" className="img-fluid rounded" width={364} height={364} />
          </div>
          </div>
          <p style={{ textAlign: "center" }}>
            <b>National Level Recognized Prizes: 40%</b> discount for students getting Gold/Silver/<br/>
            <b>State Level Recognized Prizes: 20%</b> discount for students getting Gold/Silver/Bronze
        </p>
          </div>
        </div>
      </section>
       {/* Appointment section */}
       <section className="container about-us my-5">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  APPLY FOR SCHOLARSHIP
                </h2>

              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                {/* <Image src="/images/noida/admission/book-appointment.webp" alt="book-appointment" width={120} height={140} /> */}
                 <h5>Ramagya School</h5>
                 <h2 className='mt-50'>NOIDA</h2>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                {/* <Image src="/images/noida/admission/book-appointment.webp" alt="book-appointment" width={120} height={140} /> */}
                 <h5>Ramagya School</h5>
                 <h2 className='mt-50'>NOIDA EXT.</h2>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                {/* <Image src="/images/noida/admission/book-appointment.webp" alt="book-appointment" width={120} height={140} /> */}
                 <h5>Ramagya School</h5>
                 <h2 className='mt-50'>GREATER NOIDA</h2>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                {/* <Image src="/images/noida/admission/book-appointment.webp" alt="book-appointment" width={120} height={140} /> */}
                 <h5>Ramagya School</h5>
                 <h2 className='mt-50'>DADRI</h2>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Apply Now
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

export default ScholarshipProgramme;
