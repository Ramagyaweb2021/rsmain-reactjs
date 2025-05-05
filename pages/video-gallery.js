import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import ResultAwardsTestimonialsGalleryPageScrollSpyMenu from './components/ResultAwardsTestimonialsGalleryPageScrollSpyMenu';
import NoidaVideoGalleryInternalPage from './components/NoidaVideoGalleryInternalPage';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const VideoGallery = () => {
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
        <title>Video Gallery | Ramagya School</title>
        <meta name="description" content="Explore the gallery of Ramagya School showcasing events, activities, and achievements of our students and faculty." />
        <meta name="keywords" content="Gallery, Ramagya School, School Events, Student Activities, School Achievements" />
        <link rel="canonical" href="https://ramagyaschool.com/video-gallery" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Gallery | Ramagya School" />
        <meta property="og:description" content="Browse the gallery to view various events, activities, and achievements at Ramagya School." />
        <meta property="og:url" content="https://ramagyaschool.com/video-gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Ramagya School" />
        <meta name="twitter:description" content="View the gallery of Ramagya School highlighting student achievements, school events, and activities." />
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
                  Video Gallery!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResultAwardsTestimonialsGalleryPageScrollSpyMenu/>
       <NoidaVideoGalleryInternalPage/>
      <FooterNoida />
    </>
  );
};

export default VideoGallery;
