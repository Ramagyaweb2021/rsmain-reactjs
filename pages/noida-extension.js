import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterNoidaExtension from './components/FooterNoidaExtension';
import AllVerticalScrollspyMenu from './components/AllVerticalScrollspyMenu';
import HeaderNoidaExtension from './components/HeaderNoidaExtension';
import NoidaExtensionScrollspyHomePageTabination from './components/NoidaExtensionScrollspyHomePageTabination';
// import OfferPopupNoidaExt from './components/OfferPopupNoidaExt';
// import OfferPopup from './components/OfferPopup';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const NoidaExtension = () => {
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
        <title>Noida Extension | Ramagya School</title>
        <meta name="description" content="Noida Extension" />
        <meta name="keywords" content="Noida Extension" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension" />
      </Head>
      <HeaderNoidaExtension/>
      {/* <OfferPopupNoidaExt/> */}
      {/* <OfferPopup/> */}

      {/* Main banner section of the page */}
      <section className='video-banner'>
      <div className='video-banner'>
         <video
            className="main-video"
            width="100%"
            poster="/images/main-banner.webp"
            loop
            muted
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <source
              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/noida-ext-main-banner.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      {/* <section className="section banner-sec main-banner-noida-extension">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  RAMAGYA SCHOOL NOIDA EXTENSION!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <AllVerticalScrollspyMenu/>
      <NoidaExtensionScrollspyHomePageTabination/>
      <FooterNoidaExtension/>
    </>
  );
};

export default NoidaExtension;
