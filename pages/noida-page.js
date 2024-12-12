import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
import AllVerticalScrollspyMenu from './components/AllVerticalScrollspyMenu';
import HeaderNoida from './components/HeaderNoida';
import NoidaScrollspyHomePageTabination from './components/NoidaScrollspyHomePageTabination';
import OfferPopup from './components/OfferPopup';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const AboutUs = () => {
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
        <title>Noida | Ramagya School</title>
        <meta name="description" content="Noida" />
        <meta name="keywords" content="Noida" />
        <link rel="canonical" href="https://ramagyaschool.com/noida" />
      </Head>
      <HeaderNoida/>
      {/* <OfferPopup/> */}

      {/* Main banner section of the page */}
      <section className="section banner-sec main-banner-noida">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  RAMAGYA SCHOOL NOIDA
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllVerticalScrollspyMenu/>
      <NoidaScrollspyHomePageTabination/>
      <HomeSectionFooter />
    </>
  );
};

export default AboutUs;
