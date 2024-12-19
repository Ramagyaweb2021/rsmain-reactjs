import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import HeaderDadri from '/pages/components/HeaderDadri';
import 'animate.css';
import FooterDadri from '../components/FooterDadri';
import DadriAdmissionScrollspyMenu from '../components/DadriAdmissionScrollspyMenu';
// import ApplyNowSectionGreaterNoida from '../components/ApplyNowSectionGreaterNoida';
import PreAdmissionDeviderSectionDadri from '../components/PreAdmissionDeviderSectionDadri';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const PreAdmission = () => {
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
        <title>Pre Admission | Ramagya School</title>
        <meta name="description" content="Pre Admission" />
        <meta name="keywords" content="Pre Admission" />
        <link rel="canonical" href="https://ramagyaschool.com/dadri/pre-admission" />
      </Head>
      <HeaderDadri />

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
                  Pre Admission!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DadriAdmissionScrollspyMenu />

      {/* Pre admission section */}
      <section className="container learn pre-admission-section my-5">
        <h1 className="main-heading wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.3s'}}>
               PRE-ADMISSION 
            </h1>
            <p>Parents and guardians desirous of admitting their wards to Ramagya School should familiarize themselves with the school by filling the Inquiry Form. It is requested to fill in the undisguised details in the form that would help the school to create a suitable environment for the child, once admitted.</p>
            <Image src="/images/noida/admission/pre-admission-step.webp" alt="pre-admission-step" width={1256} height={296} />
      </section>
      {/* Pre admission step section */}
      {/* <section className="container pre-admission-step-section text-center my-5 wow animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
        <Image src="/images/admission/pre-admission-step.webp" alt="pre-admission-step" width={1256} height={296} />
      </section> */}
      {/* Pre admission apply now section */}
      {/* <ApplyNowSectionGreaterNoida /> */}
      <PreAdmissionDeviderSectionDadri />
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
                  ENQUIRY
                </h2>

                <p style={{ textAlign: "center" }}>
                  At Ramagya, we adhere to the principle that each individual&#39;s query should be promptly and effectively addressed to facilitate the admission process. We have taken measures to simplify the procedure for you. You may contact or personally meet the Admissions Team in order to have all your queries resolved.
                </p>

                <p style={{ textAlign: "center" }}>Please do not hesitate to reach out to us via email at <b> (principal.dadri@ramagyaschool.com)</b> or by calling us at <b>+91-7065 078 636</b>. Additionally, you have the option to schedule an appointment with the admissions team for a direct meeting, ensuring a smooth and trouble-free admission process for your child.</p>

              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/book-appointment.webp" alt="book-appointment" width={120} height={140} />
                <p>
                  <a
                    href="https://calendly.com/d/y33-gfm-tcs/30min?month=2024-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Book Appointment
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/book-school-tour.webp" alt="book-school-tour" width={120} height={140} />
                <p>
                  <a
                    href="https://calendly.com/schooltour-appointment-ramagyaschool/schoolvisit?month=2024-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Book School Tour
                  </a>
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/virtual-tour.webp" alt="virtual-tour" width={120} height={140} />
                <p>
                  <a
                    href="https://tourdadri.ramagyaschool.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Virtual Tour
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/noida/admission/prospectus.webp" alt="prospectus" width={120} height={140} />
                <p>
                  <a
                    href="https://drive.google.com/file/d/1yFdk76bEV1uqzmod42vXPuLTsxawT-Nx/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn learn-more-button"
                  >
                    Download Prospectus
                  </a>
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* INTERACTION section */}
      <section className='container foundation-about-us-section my-5'>
        <div className="row">
          <div className="col-lg-8 mx-auto d-flex align-items-center">
            <div className='about-us-foundation'>
              <h3
                className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                style={{ animationDelay: '0.2s', textAlign: "left" }}
              >
                INTERACTION
              </h3>

              <p>There will be an interactive session and this aims to perceive the student’s depth of knowledge and understanding. It is normally conducted by the Head of Admissions, The Principal, and the Counsellor/ Special Educator. The session is important as we are keen to know about the student’s educational development, academic enthusiasm, extra-curricular interests, social skills, and use of language.</p>

              <p><b>DOCUMENTS - Required for Interaction session</b></p>

              <p><Image src="/images/doc.webp" width={10} height={13} alt="doc" /> Archetypes of applicant’s school work i.e. exercise books, portfolios, etc.</p>
              <p><Image src="/images/doc.webp" width={10} height={13} alt="doc" /> Primary level applicants (up to Grade 5) should bear at least one book that they prefer reading</p>
              <p><b>Assessment Measures</b></p>
             
              <p><b>For Pre-primary School -</b> Applicants will be examined by the Primary Head. During this interactive session, the applicant may be asked to mount on a few simple activities.</p>
              <p><b>For Primary School -</b> Applicants for class 1st to 5th will undergo the Interaction session and a written test. Testing is done for Basic English and Mathematics and Hindi.</p>
              <p><b>For Grades 6 to 8 -</b> Applicants will undergo the Interaction session and a written test. Assessment will be primarily based on Basic English, Integrated Science, Mathematics, and Hindi.</p>
              <p><b>For Grade 9 - </b> Students will also be assessed for Integrated Science (Physics, Chemistry, and Biology).</p>
              <p><b>For Grade 10 - </b> Students are only taken if they are transferring from a similar school and their admission is based on reports from their existing school and interaction and test.</p>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className='row'>
              <div className='col-md-12 g-1'>
                <Image src="/images/noida/admission/interaction.webp" width={350} height={276} alt="School Building" className="img-fluid rounded" />
              </div>
            </div>

            {/*
              <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" /> */}
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
                  ADMISSION
                </h2>

                <p style={{ textAlign: "center" }}>
                  After acquiring the admission, parents will have to pay the one-time Admission charges within two days to secure the seat of the applicant. Subsequently, the post-admission process will begin with the allotment of a unique Id to the applicant. Parents will be further asked to fill various forms and declarations that will be given at the time of admission.
                </p>

                <p style={{ textAlign: "center" }}>For any query related to post-admission procedure contact-  <b>+91 7065 078 636</b> </p>

              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <h2
          className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
          style={{ animationDelay: '0.2s', textAlign: "center" }}
          >
          Facilities
          </h2>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/extended-hours.webp" alt="facility" width={95} height={80} />
                <p>Extended Hours</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/canteen-cafeteria.webp" alt="facility" width={95} height={80} />
                <p>Canteen Cafeteria</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/transport-pick-up-and drop.webp" alt="facility" width={95} height={80} />
                <p>Transport – Pick up and Drop</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/daily-monthly-report.webp" alt="facility" width={95} height={80} />
                <p>Daily / Monthly Report</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/ramagya-first-step.webp" alt="facility" width={95} height={80} />
                <p>Ramagya First Step</p>
              </div>
            </div>
          </div>
           <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/cctv-camera.webp" alt="facility" width={95} height={80} />
                <p>CCTV Camera</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/live-app-for-parents.webp" alt="facility" width={95} height={80} />
                <p>Live App for Parents</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/emergency-services.webp" alt="facility" width={95} height={80} />
                <p>Emergency Services (First Aid / Doctor)</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/qualified-teachers.webp" alt="facility" width={95} height={80} />
                <p>Qualified Teachers</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/ac-rooms.webp" alt="facility" width={95} height={80} />
                <p>AC Rooms</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/indoor-play.webp" alt="facility" width={95} height={80} />
                <p>Indoor Play / Activity Space and Materials</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/outdoor-play.webp" alt="facility" width={95} height={80} />
                <p>Outdoor Play / Activity Space and Materials</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/sports.webp" alt="facility" width={95} height={80} />
                <p>Sports</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/acitivity-classes.webp" alt="facility" width={95} height={80} />
                <p>Activity Classes (like crafts, painting, pottery)</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/acitivity-classes.webp" alt="facility" width={95} height={80} />
                <p>Activity Classes (like crafts, painting, pottery)</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/labs.webp" alt="facility" width={95} height={80} />
                <p>Labs</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/smart-classes.webp" alt="facility" width={95} height={80} />
                <p>Smart Classes</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-4">
            <div className="card text-center h-100 border-0">
              <div className="card-value-body">
                <Image src="/images/admission/facility/wifi.webp" alt="facility" width={95} height={80} />
                <p>WiFi Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>  
      {/* Services section */}
      {/* <section className="container ramagya-at-a-glance-section my-5">
      <div className="text-center mb-4">
        <h3 className="main-heading-internal-pages wow animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s'}}>Services</h3>
      </div>

    <div className="row justify-content-center g-1">
      <div className="col-md-2 col-6">
        <div className="card-ramagya-at-glance border-0 position-relative">
          <Image 
            src="/images/admission/services/1.webp" 
            alt="Services"
            width={228} 
            height={290} 
            objectFit="cover"
            className="rounded img-fluid"
          />
          <div className="overlay-text-services position-absolute start-50 top-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-1">
            <p className="text-white">Pre School</p>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="card-ramagya-at-glance border-0 position-relative">
          <Image 
            src="/images/admission/services/2.webp" 
            alt="Services"
            width={228} 
            height={290} 
            objectFit="cover"
            className="rounded img-fluid"
          />
          <div className="overlay-text-services position-absolute start-50 top-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-1">
            <p className="text-white">Full Time Daycare (9:00 – 7:00 PM)</p>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="card-ramagya-at-glance border-0 position-relative">
          <Image 
            src="/images/admission/services/3.webp" 
            alt="Services"
            width={228} 
            height={290} 
            objectFit="cover"
            className="rounded img-fluid"
          />
          <div className="overlay-text-services position-absolute start-50 top-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-1">
            <p className="text-white">Half Time Daycare</p>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="card-ramagya-at-glance border-0 position-relative">
          <Image 
            src="/images/admission/services/4.webp" 
            alt="Services"
            width={228} 
            height={290} 
            objectFit="cover"
            className="rounded img-fluid"
          />
          <div className="overlay-text-services position-absolute start-50 top-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-1">
            <p className="text-white">Assisted Daycare (with nanny)</p>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="card-ramagya-at-glance border-0 position-relative">
          <Image 
            src="/images/admission/services/5.webp" 
            alt="Services"
            width={228} 
            height={290} 
            objectFit="cover"
            className="rounded img-fluid"
          />
          <div className="overlay-text-services position-absolute start-50 top-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-1">
            <p className="text-white">Flexible Daycare</p>
          </div>
        </div>
      </div>
   
    </div>
      </section> */}
      <FooterDadri />

    </>
  );
};

export default PreAdmission;
