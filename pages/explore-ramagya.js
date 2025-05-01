import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
// import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';
import AllSisterConcern from './components/AllSisterConcern';
import FooterNoida from './components/FooterNoida';


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
        <title>EXPLORE RAMAGYA | Ramagya School</title>
        <meta name="description" content="Explore Ramagya School and discover the programs, facilities, and opportunities we offer to help students achieve academic excellence." />
        <meta name="keywords" content="Explore Ramagya, Ramagya School, School Programs, Academic Excellence, Student Opportunities" />
        <link rel="canonical" href="https://ramagyaschool.com/explore-ramagya" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="EXPLORE RAMAGYA | Ramagya School" />
        <meta property="og:description" content="Explore Ramagya School to learn about our educational programs, campus facilities, and student opportunities for success." />
        <meta property="og:url" content="https://ramagyaschool.com/explore-ramagya" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EXPLORE RAMAGYA | Ramagya School" />
        <meta name="twitter:description" content="Discover the programs, facilities, and opportunities available at Ramagya School for student success." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

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
                  EXPLORE RAMAGYA!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WhoWeAreScrollspyMenu /> */}

      {/* Our MISSION light section */}
      <section className="container about-us my-5">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  EXPLORE RAMAGYA
                </h2>
               
                <p style={{ textAlign: "left" }}>
                At Ramagya School, our mission is to inspire every child to unlock their full potential and embrace a passion for lifelong learning. We are dedicated to equipping students with 21st-century skills, nurturing intellectual curiosity, and fostering scientific temperament. Through personalized learning and holistic development, we aim to create confident, ethical, and mindful leaders of tomorrow. Rooted in Indian traditions and universal values, we foster inclusivity, respect, and a sense of global family. We also provide ample opportunities in sports, promoting teamwork, discipline, and sportsmanship for well-rounded growth.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllSisterConcern/>
     
      {/* <Leadership/> */}
      <FooterNoida />
    </>
  );
};

export default People;
