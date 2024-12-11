import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '/pages/components/Header';
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
import Image from 'next/image';
import ExploreScrollspyInternalMenu from './components/ExploreScrollspyInternalMenu';
import EvolveTabination from './components/EvolveTabination';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Evolve = () => {
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
      <title>Evolve | Ramagya School</title>
      <meta name="description" content="Evolve" />
      <meta name="keywords" content="Evolve" />
      <link rel="canonical" href="https://ramagyaschool.com/evolve" />
      </Head>
      <Header />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-explore">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  EVOLVE!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreScrollspyInternalMenu/>
      {/*OUR CURRICULUM section */}
      <section className="container-fluid without-bg-image-section my-5">
      <div className="container">
      <div className='row'>
      <div className="col-md-12">
      <div className="text-left mb-5">
      <div className='about-content'>
      {/* <h2
      className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
      style={{ animationDelay: '0.2s', textAlign: "center" }}
      >
        OUR CURRICULUM
      </h2> */}

      <p style={{ textAlign: "center" }} className='mt-50'>
         Dynamic programs designed to evolve students into confident, capable leaders, equipped to tackle future challenges with purpose and integrity. These transformative experiences nurture resilience, inspire responsibility, and prepare students to lead with a vision that embraces innovation and adaptability.
      </p>

      </div>
      </div>
      </div>
      </div>  
      </div>
      </section>  

      <section className='container-fluid without-bg-image-section my-5'>
      <div className="container py-5" style={{backgroundColor:"#E7EAEB", borderRadius:"5px", padding:"20px"}}>
      <div className="row justify-content-center">
        {/* Quote 1 */}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card-evolve-internal border-0 shadow-sm text-center p-4">
            <p className="quote-text">
            &ldquo;Empowering Students to Shape the Future through Initiative and Collaboration.&ldquo;
            </p>
          </div>
        </div>
        {/* Quote 2 */}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card-evolve-internal border-0 shadow-sm text-center p-4">
            <p className="quote-text">
            &ldquo;Empowering Communities, Enriching Lives: Our Commitment to Sustainable Growth through CSR Initiatives&ldquo;
            </p>
          </div>
        </div>
        {/* Quote 3 */}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card-evolve-internal border-0 shadow-sm text-center p-4">
            <p className="quote-text">
            &quot;The Student Cabinet is not just a representation; it&#39;s the driving force for student leadership, responsibility, and positive change.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
      </section>

      <EvolveTabination/>
  
      <HomeSectionFooter />
    </>
  );
};

export default Evolve;
