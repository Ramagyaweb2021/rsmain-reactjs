import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import PoineerInSportsInternalPageScrollspyMenu from './components/PoineerInSportsInternalPageScrollspyMenu';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Baalsaathi = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // return () => {
    //   wow.destroy();
    // };
  }, []);

  return (
    <>
      <Head>
        <title>Baal Saathee (Mental Health) | Ramagya School</title>
        <meta name="description" content="Baal Saathee (Mental Health)" />
        <meta name="keywords" content="Baal Saathee (Mental Health)" />
        <link rel="canonical" href="https://ramagyaschool.com/baalsaathi" />
      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec poinner-banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Baal Saathee
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PoineerInSportsInternalPageScrollspyMenu/>
      <section className="d-flex align-items-center justify-content-center py-5 bg-baalsaathi">
       <div className="container-fluid">
        <div className="row g-0 align-items-center">
          {/* Left Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/baalsaathi/slide-1.webp" // Replace with the actual image path
              alt="Sports Activity"
              width={371}
              height={423}
              className="w-100 wow animate__animated animate__fadeInLeft" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 col-md-12 text-center px-5">
            <h3 className='main-heading-internal-page mb-3'>Transforming Health, Empowering Lives</h3>
            <p>
               At Ramagya, we believe in nurturing not just the mind but the entire being of every child. With Baal Saathee, our Student Benefit Program, we bring an integrated approach to healthcare, designed to ensure holistic development. This innovative program bridges physical health, mental well-being, and nutrition, empowering students to thrive with a perfect balance of mind, body, and soul.
            </p>
            <p>
              Guided by the vision of holistic health for all, Baal Saathee offers preventive care and personalized solutions delivered right on the school premises. Our state-of-the-art program sets us apart, ensuring every child receives comprehensive, proactive, and tailored care.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/baalsaathi/slide-2.webp" // Replace with the actual image path
              alt="Sports Facility"
              width={371}
              height={423}
              className="w-100 animate__animated animate__fadeInRight" style={{ animationDelay: '0.2s' }}
              // className="w-100"
            />
          </div>
        </div>
       </div>
      </section>
      <section className='d-flex align-items-center justify-content-center py-5 bg-white'>
      <div className="container bg-dark text-light py-5">
      <div className="container text-center">
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-12'>
             {/* Tabs Navigation */}
            <ul className="nav nav-tabs justify-content-center mb-4" id="healthTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="physical-health-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#physical-health"
                  type="button"
                  role="tab"
                  aria-controls="physical-health"
                  aria-selected="true"
                >
                  PHYSICAL HEALTH
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="mental-health-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#mental-health"
                  type="button"
                  role="tab"
                  aria-controls="mental-health"
                  aria-selected="false"
                >
                  MENTAL HEALTH
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="diet-nutrition-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#diet-nutrition"
                  type="button"
                  role="tab"
                  aria-controls="diet-nutrition"
                  aria-selected="false"
                >
                  DIET & NUTRITION
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="insurance-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#insurance"
                  type="button"
                  role="tab"
                  aria-controls="insurance"
                  aria-selected="false"
                >
                  INSURANCE & HEALTH BENEFITS
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="expert-panel-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#expert-panel"
                  type="button"
                  role="tab"
                  aria-controls="expert-panel"
                  aria-selected="false"
                >
                  EXPERT PANEL
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="additional-services-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#additional-services"
                  type="button"
                  role="tab"
                  aria-controls="additional-services"
                  aria-selected="false"
                >
                  ADDITIONAL SERVICES
                </button>
              </li>
            </ul>

        {/* Tabs Content */}
        <div className="tab-content" id="healthTabsContent">
          <div
            className="tab-pane fade show active"
            id="physical-health"
            role="tabpanel"
            aria-labelledby="physical-health-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">
                PHYSICAL HEALTH: Building Strong Foundations
              </h4>
              <ul className='custom-bullets'>
                <li>
                  Comprehensive Assessments: Head-to-toe physical evaluations and
                  dental checkups.
                </li>
                <li>
                  Personalized Care Plans: Need-based intervention strategies and
                  follow-up consultations.
                </li>
                <li>
                  Educational Outreach: Workshops and expert sessions addressing
                  adolescent health and chronic disease management.
                </li>
                <li>
                  Care Coordination: Access to general physicians and referrals for
                  advanced care.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="mental-health"
            role="tabpanel"
            aria-labelledby="mental-health-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">MENTAL HEALTH: Nurturing Emotional Resilience</h4>
              <ul className='custom-bullets'>
                <li>Proactive Screening: Early assessments for childhood and adolescent mental health concerns. </li>
                <li>Therapeutic Support: Individual and group therapy, including expressive arts therapy.</li>
                <li>Standardized Evaluations: Detailed psychological assessments with actionable intervention plans.</li>
                <li> Specialized Services: Support for children with special needs and career-focused assessments.</li>
                <li>Expert Engagement: Workshops and discussions on mental health challenges and solutions.</li>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="diet-nutrition"
            role="tabpanel"
            aria-labelledby="diet-nutrition-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">DIET & NUTRITION: Fueling Growth and Wellness</h4>
              <p style={{textAlign:"left"}}>Our nutrition plans are tailored to each child’s unique needs, considering:</p>
              <ul className='custom-bullets'>
                <li>Socio-economic and geographical factors. </li>
                <li>Developmental milestones and lifestyle.</li>
                <li>Nutritional deficiencies and dietary habits.</li>
              </ul>
              <p style={{textAlign:"left"}}>Services include:</p>
              <ul className='custom-bullets'>
                <li>Monthly meal evaluations and customized diet charts.</li>
                <li>BMI analysis and interventions for healthy living.</li>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="insurance"
            role="tabpanel"
            aria-labelledby="insurance-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">INSURANCE & HEALTH BENEFITS: Securing Peace of Mind</h4>
              <ul className='custom-bullets'>
                <li>Comprehensive health insurance for children aged 3 to 18 years.</li>
                <li>Coverage for pre-existing conditions, hospitalization, and accidental emergencies.</li>
                <li>Educational sponsorships in cases of loss or hardship, ensuring uninterrupted learning.</li>
                <li>Convenient Saathee Health Card offering:</li>
                <li>Instant access to medical history.</li>
                <li>Time-saving emergency support.</li>
                <li>Cashless benefits for OPD and more.</li>
              </ul>
             
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="expert-panel"
            role="tabpanel"
            aria-labelledby="expert-panel-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">XPERT PANEL: Specialists You Can Trust</h4>
              <p style={{textAlign:"left"}}>Our team includes:</p>
              <ul className='custom-bullets'>
                <li>Clinical and child psychologists.</li>
                <li>Special educators and career counselors.</li>
                <li>General physicians, dieticians, and life coaches.</li>
                <li>Dedicated nurses and support staff.</li>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="additional-services"
            role="tabpanel"
            aria-labelledby="additional-services-tab"
          >
            <div className="bg-light text-dark p-4 rounded shadow">
              <h4 className="fw-bold mb-3">ADDITIONAL SERVICES: Beyond Healthcare</h4>
              <ul className='custom-bullets'>
                  <li>Exclusive abroad educational tours.</li>
                  <li>Monthly student magazine to foster creativity.</li>
                  <li>Career counseling for students and professional training for staff.</li>
                  <li>Unique discovery workshops with astronauts to inspire young minds.</li>
              </ul>
            </div>
          </div>
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

export default Baalsaathi;
