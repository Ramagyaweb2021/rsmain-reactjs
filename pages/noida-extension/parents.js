import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterNoidaExtension from '../components/FooterNoidaExtension';
import AllVerticalScrollspyMenu from '../components/AllVerticalScrollspyMenu';
import HeaderNoidaExtension from '../components/HeaderNoidaExtension';
import NoidaExtensionParentsMenu from '../components/NoidaExtensionParentsMenu';
// import OfferPopup from './components/OfferPopup';

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
        <title>Parents | Ramagya School</title>
        <meta name="description" content="Explore important resources and information for parents at Ramagya School, Noida Extension. Stay updated on events, meetings, and school policies." />
        <meta name="keywords" content="Parents Resources, Ramagya School Noida Extension, Parent Information, School Events, Parent Portal" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension/parents" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Parents | Ramagya School Noida Extension" />
        <meta property="og:description" content="Explore important resources and information for parents at Ramagya School, Noida Extension. Stay updated on events, meetings, and school policies." />
        <meta property="og:url" content="https://ramagyaschool.com/noida-extension/parents" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parents | Ramagya School Noida Extension" />
        <meta name="twitter:description" content="Explore important resources and information for parents at Ramagya School, Noida Extension. Stay updated on events, meetings, and school policies." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <HeaderNoidaExtension/>
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
      <NoidaExtensionParentsMenu/>
      <FooterNoidaExtension/>
    </>
  );
};

export default AboutUs;
