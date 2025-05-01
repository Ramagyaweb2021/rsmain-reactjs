import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import NoidaExtensionInternalPageTestimonials from './components/NoidaExtensionInternalPageTestimonials';
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
        <meta name="description" content="Read testimonials from parents, students, and alumni about their experiences at Ramagya School, Noida Extension." />
        <meta name="keywords" content="Testimonials, Ramagya School, Noida Extension, Parent Testimonials, Student Testimonials, Alumni Reviews" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-ext-testimonials" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Testimonials | Ramagya School" />
        <meta property="og:description" content="Discover testimonials from parents, students, and alumni about their experiences at Ramagya School, Noida Extension." />
        <meta property="og:url" content="https://ramagyaschool.com/noida-ext-testimonials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Testimonials | Ramagya School" />
        <meta name="twitter:description" content="Read heartfelt testimonials from our school community about their experiences at Ramagya School." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

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
      <NoidaExtensionInternalPageTestimonials/>
      <FooterNoida />
    </>
  );
};

export default Testimonials;
