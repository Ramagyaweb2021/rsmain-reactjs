import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import PartnershipTabination from './components/PartnershipTabination';
// import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Overview = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // Optional cleanup function in case any WOW.js animations need to be cleared
    return () => {
      wow.sync();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Head>
        <title>Partnership | Ramagya School</title>
        <meta name="description" content="partnership" />
        <meta name="keywords" content="partnership" />
        <link rel="canonical" href="https://ramagyaschool.com/partnership" />
      </Head>
      <Header />

      {/* Maine banner section of the page */}
      <section className="section banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Partnership!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WhoWeAreScrollspyMenu/> */}
       {/* Our guiding light section */}
       <section className="container our-guiding-section my-5">
        <div className="learn text-center mb-5">
          {/* <h2 className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}>Overseas Educational Partnership</h2>
          <p>
          Education is not an isolated experience but an interactive endeavor that takes place over the course of a person’s life. When the community, schools, and families work together, they can provide the best possible resources and expertise to enhance the education of all children. Therefore, it is a collective responsibility of many groups to educate children. So, Ramagya has joined hands with globally acclaimed and famed universities and organizations, who share the common goal of enhancing student learning. The collaborations have been made with a commitment to enriching educational experiences for the students. Ramagya aims at providing the best education possible for the students and hence has included partners for enhancing public relations. Ramagya understands that partnerships are essential when working with students with special needs and their families. Teachers, service providers, and families need to work together to support the child’s home and school environment and create an individual education plan that outlines instructional and behavioral strategies to promote optimum learning and achievement.
          </p> */}
          <PartnershipTabination/>
        </div>      
      </section>
      <FooterNoida />
    </>
  );
};

export default Overview;
