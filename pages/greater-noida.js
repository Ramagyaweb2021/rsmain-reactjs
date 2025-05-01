import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterGreaterNoida from './components/FooterGreaterNoida';
import AllVerticalScrollspyMenu from './components/AllVerticalScrollspyMenu';
import HeaderGreaterNoida from './components/HeaderGreaterNoida';
import GreaterNoidaScrollspyHomePageTabination from './components/GreaterNoidaScrollspyHomePageTabination';
// import OfferPopup from './components/OfferPopup';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const GreaterNoida = () => {
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
        <title>Ramagya School - Top CBSE Affiliated School in Greater Noida</title>
        <meta
          name="description"
          content="Ramagya School Top CBSE Affiliated School in Greater Noida, offering academic excellence, modern facilities and holistic student development and best environment."
        />
        <meta
          name="keywords"
          content="Top CBSE Affiliated School in Greater Noida, CBSE Affiliated School in Greater Noida, School in Greater Noida, CBSE School in Greater Noida, best School in Greater Noida, top School in Greater Noida, Top CBSE School in Greater Noida"
        />
        <link rel="canonical" href="https://ramagyaschool.com/greater-noida" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Ramagya School - Top CBSE Affiliated School in Greater Noida" />
        <meta property="og:description" content="Ramagya School Top CBSE Affiliated School in Greater Noida, offering academic excellence, modern facilities and holistic student development and best environment." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/greater-noida" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ramagya School - Top CBSE Affiliated School in Greater Noida" />
        <meta name="twitter:description" content="Ramagya School Top CBSE Affiliated School in Greater Noida, offering academic excellence, modern facilities and holistic student development and best environment." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <HeaderGreaterNoida/>
      {/* <OfferPopup/> */}

      {/* Main banner section of the page */}
      <section className="section banner-sec main-banner-greater-noida">
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  RAMAGYA SCHOOL GREATER NOIDA!
                </h1>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <AllVerticalScrollspyMenu/>
      <GreaterNoidaScrollspyHomePageTabination/>
      <FooterGreaterNoida/>
    </>
  );
};

export default GreaterNoida;
