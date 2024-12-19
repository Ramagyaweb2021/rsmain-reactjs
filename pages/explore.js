import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
// import Image from 'next/image';
import ExploreScrollspyInternalMenu from './components/ExploreScrollspyInternalMenu';
import ExploreTabination from './components/ExploreTabination';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Explore = () => {
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
      <title>Explore | Ramagya School</title>
      <meta name="description" content="Explore" />
      <meta name="keywords" content="Explore" />
      <link rel="canonical" href="https://ramagyaschool.com/explore" />
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
                  EXPLORE!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreScrollspyInternalMenu/>
      {/*OUR CURRICULUM section */}
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
        OUR CURRICULUM
      </h2>

      <p style={{ textAlign: "center" }}>
          Ramagya embodies the commitment to foster curiosity and creativity in every student. Through a well-rounded academic process that integrates both scholastic and co-scholastic activities, students are encouraged to discover their potential in diverse areas. Ramagya School aims to create an environment ensuring holistic development, empowering students to grow intellectually, emotionally, and creatively. We ensure that every child embarks on a journey of self-discovery and skill-building that extends beyond the classroom.
      </p>

      </div>
      </div>
      </div>
      </div>  
      </div>
      </section>  

      <ExploreTabination/>
  
      <FooterNoida />
    </>
  );
};

export default Explore;
