import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
// import Image from 'next/image';
import ExploreScrollspyInternalMenu from './components/ExploreScrollspyInternalMenu';
import ExperimentTabination from './components/ExperimentTabination';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Experiment = () => {
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
      <title>Experiment | Ramagya School</title>
      <meta name="description" content="EXPERIMENT" />
      <meta name="keywords" content="EXPERIMENT" />
      <link rel="canonical" href="https://ramagyaschool.com/experiment" />
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
                  EXPERIMENT!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreScrollspyInternalMenu/>
      {/*OUR CURRICULUM section */}
      <section className="container-fluid bg-image-section">
      <div className="container">
      <div className='row'>
      <div className="col-md-12">
      <div className="text-left mb-5">
      <div className='about-content'>
      {/* <h2
      className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
      style={{ animationDelay: '0.2s', textAlign: "center" }}
      >
        EXPERIMENT
      </h2> */}

      <p style={{ textAlign: "center" }} className='mt-50'>
         At Ramagya School, we believe in the power of hands-on experimentation to bring theoretical knowledge to life. Our &#39;Experiment&#39; program is designed to foster curiosity and enhance students understanding across various disciplines. By engaging in practical, real-world applications, students develop critical thinking and problem-solving skills, deepening their grasp of academic concepts. This experiential learning approach encourages students to explore, experiment, and discover, broadening their intellectual horizons and preparing them for challenges both inside and outside the classroom.
      </p>

      </div>
      </div>
      </div>
      </div>  
      </div>
      </section>  
      <ExperimentTabination/>
      <FooterNoida />
    </>
  );
};

export default Experiment;
