import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import ResultAwardsTestimonialsGalleryPageScrollSpyMenu from './components/ResultAwardsTestimonialsGalleryPageScrollSpyMenu';
import ResultsBranchWise from './components/ResultsBranchWise';
import NoidaClassWiseResultTable from './components/NoidaClassWiseResultTable';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Results = () => {
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
        <title>Results | Ramagya School</title>
        <meta name="description" content="Results" />
        <meta name="keywords" content="Results" />
        <link rel="canonical" href="https://ramagyaschool.com/results" />
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
                  Results!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResultAwardsTestimonialsGalleryPageScrollSpyMenu/>
      <ResultsBranchWise/>
      <NoidaClassWiseResultTable/>
      <FooterNoida />
    </>
  );
};

export default Results;
