import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterGreaterNoida from '../components/FooterGreaterNoida';
import AllVerticalScrollspyMenu from '../components/AllVerticalScrollspyMenu';
import HeaderGreaterNoida from '../components/HeaderGreaterNoida';
import GreaterNoidaParentsMenu from '../components/GreaterNoidaParentsMenu';
// import OfferPopup from './components/OfferPopup';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Parents = () => {
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
        <title>Parents | Ramagya School</title>
        <meta name="description" content="Parents" />
        <meta name="keywords" content="Parents" />
        <link rel="canonical" href="https://ramagyaschool.com/greater-noida/parents" />
      </Head>
      <HeaderGreaterNoida/>
      {/* <OfferPopup/> */}

      {/* Main banner section of the page */}
      <section className="section banner-sec main-banner-parent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  PARENT’S
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllVerticalScrollspyMenu/>
      <GreaterNoidaParentsMenu/>
      <FooterGreaterNoida/>
    </>
  );
};

export default Parents;
