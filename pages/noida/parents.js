import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import AllVerticalScrollspyMenu from '../components/AllVerticalScrollspyMenu';
import HeaderNoida from '../components/HeaderNoida';
import NoidaParentsMenu from '../components/NoidaParentsMenu';
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
        {/* Primary Meta Tags */}
        <title>Parents | Ramagya School</title>
        <meta name="description" content="Explore the dedicated resources and information for parents at Ramagya School, Noida. Stay updated on parent-teacher interactions, meetings, and academic support." />
        <meta name="keywords" content="Parents, Ramagya School Noida, Parent Resources, Parent Meetings, School Support, Parent-Teacher Interaction, Parent Engagement" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/parents" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Parents | Ramagya School Noida" />
        <meta property="og:description" content="Explore the resources and information for parents at Ramagya School, Noida to stay informed about your child's education and school activities." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/parents" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parents | Ramagya School Noida" />
        <meta name="twitter:description" content="Stay informed and engaged as a parent at Ramagya School, Noida. Access resources, support, and school activities to help your child's academic journey." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <HeaderNoida/>
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
      <NoidaParentsMenu/>
      <FooterNoida/>
    </>
  );
};

export default AboutUs;
