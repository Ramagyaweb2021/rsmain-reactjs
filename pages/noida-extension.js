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
        {/* Primary SEO */}
        <title>Top Best CBSE School in Noida Extension - Ramagya School</title>
        <meta
          name="description"
          content="Ramagya School Top Best CBSE Affiliated  School in Noida Extension - offering world-class education, modern infrastructure. Best School in Noida Extension"
        />
        <meta
          name="keywords"
          content="Best CBSE School in Noida Extension, top School in Noida Extension, top CBSE school in Noida Extension, top CBSE Affiliated  school in Noida Extension,"
        />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Top Best CBSE School in Noida Extension - Ramagya School" />
        <meta property="og:description" content="Ramagya School Top Best CBSE Affiliated  School in Noida Extension - offering world-class education, modern infrastructure. Best School in Noida Extension" />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/noida-extension" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Best CBSE School in Noida Extension - Ramagya School" />
        <meta name="twitter:description" content="Ramagya School Top Best CBSE Affiliated  School in Noida Extension - offering world-class education, modern infrastructure. Best School in Noida Extension" />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

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
