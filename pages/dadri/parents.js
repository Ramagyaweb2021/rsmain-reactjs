import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'animate.css';
import FooterDadri from '../components/FooterDadri';
import AllVerticalScrollspyMenu from '../components/AllVerticalScrollspyMenu';
import HeaderDadri from '../components/HeaderDadri';
import DadriParentsMenu from '../components/DadriParentsMenu';
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
        <meta name="description" content="Explore resources and support for parents at Ramagya School Dadri. Get involved in your child's educational journey and stay connected with the school." />
        <meta name="keywords" content="Parents, Ramagya School Dadri, Parent Support, School Community, Education Partnership, Parent Involvement" />
        <link rel="canonical" href="https://ramagyaschool.com/dadri/parents" />

        {/* Open Graph */}
        <meta property="og:title" content="Parents | Ramagya School Dadri" />
        <meta property="og:description" content="Discover helpful resources and support for parents at Ramagya School Dadri. Stay connected and engage in your child's education." />
        <meta property="og:url" content="https://ramagyaschool.com/dadri/parents" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parents | Ramagya School Dadri" />
        <meta name="twitter:description" content="Get involved in your child's education at Ramagya School Dadri. Access resources and support designed for parents." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <HeaderDadri/>
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
      <DadriParentsMenu/>
      <FooterDadri/>
    </>
  );
};

export default Parents;
