import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import AllVerticalScrollspyMenu from './components/AllVerticalScrollspyMenu';
import HeaderNoida from './components/HeaderNoida';
import NoidaScrollspyHomePageTabination from './components/NoidaScrollspyHomePageTabination';
// import Script from 'next/script';
// import OfferPopupMainNoida from './components/OfferPopupMainNoida';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Noida = () => {
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
        <title>Ramagya School Top Best CBSE Affiliated School Noida Sec 50</title>
        <meta
          name="description"
          content="Ramagya School Noida, ranked among the top CBSE Affiliated schools in Noida Sec 50. Offering academic excellence, modern infrastructure. Enroll today!"
        />
        <meta
          name="keywords"
          content="top CBSE Affiliated in Noida 50, top CBSE Affiliated school in Noida 50, top CBSE Affiliated school in Noida Sec 50, best CBSE Affiliated school in Noida 50, best CBSE Affiliated school in Noida Sec 50, best CBSE Affiliated school in Noida Sec 50"
        />
        <link rel="canonical" href="https://ramagyaschool.com/noida" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Ramagya School Top Best CBSE Affiliated School Noida Sec 50" />
        <meta property="og:description" content="Ramagya School Noida, ranked among the top CBSE Affiliated schools in Noida Sec 50. Offering academic excellence, modern infrastructure. Enroll today!" />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/noida" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ramagya School Top Best CBSE Affiliated School Noida Sec 50" />
        <meta name="twitter:description" content="Ramagya School Noida, ranked among the top CBSE Affiliated schools in Noida Sec 50. Offering academic excellence, modern infrastructure. Enroll today!" />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <HeaderNoida/>
      {/* <OfferPopupMainNoida/> */}
      
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
              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/main-video-noida.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
        {/* <section className="section banner-sec main-banner-noida">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="banner-text">
                  <h1
                    className="wow animate__animated animate__fadeInDown"
                    style={{ animationDelay: '0.2s' }}
                  >
                    RAMAGYA SCHOOL NOIDA!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      <AllVerticalScrollspyMenu/>
      <NoidaScrollspyHomePageTabination/>
      <FooterNoida/>
    </>
  );
};

export default Noida;
