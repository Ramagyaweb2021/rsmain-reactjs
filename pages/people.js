import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';
import Founder from './components/Founder';
// import Leadership from './components/Leadership';
import FooterNoida from './components/FooterNoida';
import AdvisoryBoard from './components/AdvisoryBoard';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const People = () => {
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
        <title>Meet the Team Member of Ramagya School Noida</title>
        <meta
        name="description"
        content="Get to know the dedicated team behind Ramagya School, Our passionate educators and leadership are committed to shaping the future of every student."
        />
        <link rel="canonical" href="https://ramagyaschool.com/people" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Meet the Team Member of Ramagya School Noida" />
        <meta property="og:description" content="Get to know the dedicated team behind Ramagya School, Our passionate educators and leadership are committed to shaping the future of every student." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/people" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet the Team Member of Ramagya School Noida" />
        <meta name="twitter:description" content="Get to know the dedicated team behind Ramagya School, Our passionate educators and leadership are committed to shaping the future of every student." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Founder!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu />

      {/* Our MISSION light section */}
      {/* <section className="container about-us my-5">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  OUR MISSION
                </h2>
               
                <p style={{ textAlign: "left" }}>
                At Ramagya School, our mission is to inspire every child to unlock their full potential and embrace a passion for lifelong learning. We are dedicated to equipping students with 21st-century skills, nurturing intellectual curiosity, and fostering scientific temperament. Through personalized learning and holistic development, we aim to create confident, ethical, and mindful leaders of tomorrow. Rooted in Indian traditions and universal values, we foster inclusivity, respect, and a sense of global family. We also provide ample opportunities in sports, promoting teamwork, discipline, and sportsmanship for well-rounded growth.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Founder/>
      <AdvisoryBoard/>
      {/* <Leadership/> */}
      <FooterNoida />
    </>
  );
};

export default People;
