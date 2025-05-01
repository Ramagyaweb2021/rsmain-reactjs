import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import ResultAwardsTestimonialsGalleryPageScrollSpyMenu from './components/ResultAwardsTestimonialsGalleryPageScrollSpyMenu';
import NoidaInternalPageAwards from './components/NoidaInternalPageAwards';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Testimonials = () => {
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
        <title>Awards and Recognition at Ramagya School</title>
        <meta
          name="description"
          content="Explore the awards and accolades earned by Ramagya School, recognised for excellence in academics, innovation, and holistic education."
        />
        <link rel="canonical" href="https://ramagyaschool.com/awards-and-recognition" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Awards and Recognition at Ramagya School" />
        <meta property="og:description" content="Explore the awards and accolades earned by Ramagya School, recognised for excellence in academics, innovation, and holistic education." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/awards-and-recognition" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Awards and Recognition at Ramagya School" />
        <meta name="twitter:description" content="Explore the awards and accolades earned by Ramagya School, recognised for excellence in academics, innovation, and holistic education." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec gallery-award-testimonial-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Awards!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResultAwardsTestimonialsGalleryPageScrollSpyMenu/>
      <NoidaInternalPageAwards/>
      <FooterNoida />
    </>
  );
};

export default Testimonials;
