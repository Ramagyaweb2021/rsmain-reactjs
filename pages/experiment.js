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
      {/* Primary SEO */}
        <title>Educational Experiments Innovative Learning at Ramagya School</title>
        <meta
        name="description"
        content="Discover the innovative experiments and hands-on learning approach at Ramagya School, Fostering creativity and critical thinking through practical education."
        />
        <link rel="canonical" href="https://ramagyaschool.com/experiments" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Educational Experiments Innovative Learning at Ramagya School" />
        <meta property="og:description" content="Discover the innovative experiments and hands-on learning approach at Ramagya School, Fostering creativity and critical thinking through practical education." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/experiments" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Educational Experiments Innovative Learning at Ramagya School" />
        <meta name="twitter:description" content="Discover the innovative experiments and hands-on learning approach at Ramagya School, Fostering creativity and critical thinking through practical education." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-experiment">
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
