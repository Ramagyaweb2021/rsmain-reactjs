import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterDadri from './components/FooterDadri';
import AllVerticalScrollspyMenu from './components/AllVerticalScrollspyMenu';
import HeaderDadri from './components/HeaderDadri';
import DadriScrollspyHomePageTabination from './components/DadriScrollspyHomePageTabination';
// import OfferPopup from './components/OfferPopup';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Dadri = () => {
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
        <title> Ramagya School - Top Best CBSE Affiliated CBSE School in Dadri</title>
        <meta
          name="description"
          content="Ramagya School Top Best CBSE Affiliated School in Dadri - Top CBSE school in Dadri offering quality education, modern facilities with best study environment"
        />
        <link rel="canonical" href="https://ramagyaschool.com/dadri" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content=" Ramagya School - Top Best CBSE Affiliated CBSE School in Dadri" />
        <meta property="og:description" content="Ramagya School Top Best CBSE Affiliated School in Dadri - Top CBSE school in Dadri offering quality education, modern facilities with best study environment" />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/dadri" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Ramagya School - Top Best CBSE Affiliated CBSE School in Dadri" />
        <meta name="twitter:description" content="Ramagya School Top Best CBSE Affiliated School in Dadri - Top CBSE school in Dadri offering quality education, modern facilities with best study environment" />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <HeaderDadri/>
      {/* <OfferPopup/> */}

      {/* Main banner section of the page */}
      <section className="section banner-sec main-banner-dadri">
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  RAMAGYA SCHOOL DADRI!
                </h1>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <AllVerticalScrollspyMenu/>
      <DadriScrollspyHomePageTabination/>
      <FooterDadri/>
    </>
  );
};

export default Dadri;
