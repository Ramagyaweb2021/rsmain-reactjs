import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import NoidaInternalPageTestimonials from './components/NoidaInternalPageTestimonials';
import ResultAwardsTestimonialsGalleryPageScrollSpyMenu from './components/ResultAwardsTestimonialsGalleryPageScrollSpyMenu';


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
        <title>Testimonials | Ramagya School</title>
        {/* Primary SEO */}
        <title>Testimonials | Ramagya School - Hear From Parents & Students</title>
        <meta
        name="description"
        content="Read testimonials from parents, students, and alumni of Ramagya School, Discover how our commitment to excellence has shaped their educational journeys."
        />
        <link rel="canonical" href="https://ramagyaschool.com/testimonials" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Testimonials | Ramagya School - Hear From Parents & Students" />
        <meta property="og:description" content="Read testimonials from parents, students, and alumni of Ramagya School, Discover how our commitment to excellence has shaped their educational journeys." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/testimonials" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Testimonials | Ramagya School - Hear From Parents & Students" />
        <meta name="twitter:description" content="Read testimonials from parents, students, and alumni of Ramagya School, Discover how our commitment to excellence has shaped their educational journeys." />
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
                  Testimonials!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResultAwardsTestimonialsGalleryPageScrollSpyMenu/>
      <NoidaInternalPageTestimonials/>
      <FooterNoida />
    </>
  );
};

export default Testimonials;
