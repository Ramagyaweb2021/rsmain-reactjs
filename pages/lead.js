import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
// import Image from 'next/image';
import ExploreScrollspyInternalMenu from './components/ExploreScrollspyInternalMenu';
import LeadTabination from './components/LeadTabination';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Lead = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOWJS = require('wowjs');
      const wow = new WOWJS.WOW({
        live: false,
      });
      wow.init();
    }
  }, []); // Runs once on mount

  return (
    <>
      <Head>
      {/* Primary SEO */}
      <title>Achievements at Ramagya School - Celebrating Student Success</title>
      <meta
        name="description"
        content="Explore the remarkable achievements of Ramagya School students, from academic excellence to extracurricular victories. Stay updated for success and distinction."
      />
      <link rel="canonical" href="https://ramagyaschool.com/lead" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Achievements at Ramagya School - Celebrating Student Success" />
      <meta property="og:description" content="Explore the remarkable achievements of Ramagya School students, from academic excellence to extracurricular victories. Stay updated for success and distinction." />
      <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
      <meta property="og:url" content="https://ramagyaschool.com/lead" />
      {/* <meta property="og:type" content="website" /> */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Achievements at Ramagya School - Celebrating Student Success" />
      <meta name="twitter:description" content="Explore the remarkable achievements of Ramagya School students, from academic excellence to extracurricular victories. Stay updated for success and distinction." />
      <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-lead">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  LEAD!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreScrollspyInternalMenu/>
      <LeadTabination/>

      <FooterNoida />
    </>
  );
};

export default Lead;
