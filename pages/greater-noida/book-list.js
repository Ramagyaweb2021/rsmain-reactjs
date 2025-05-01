import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderGreaterNoida from '/pages/components/HeaderGreaterNoida';
import 'animate.css';
import FooterGreaterNoida from '../components/FooterGreaterNoida';
import GreterNoidaParentsScrollspyMenu from '../components/GreterNoidaParentsScrollspyMenu';
import GreaterNoidaBookList from '../components/GreaterNoidaBookList';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const BookList = () => {
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
        <title>Books List | Ramagya School</title>
        <meta name="description" content="Check the class-wise recommended books list for Ramagya School, Greater Noida. Download the academic book list for the current session." />
        <meta name="keywords" content="Books List, Ramagya School Greater Noida, School Books, Academic Book List, Class-wise Books" />
        <link rel="canonical" href="https://ramagyaschool.com/greater-noida/book-list" />

        {/* Open Graph */}
        <meta property="og:title" content="Books List | Ramagya School Greater Noida" />
        <meta property="og:description" content="Check the class-wise recommended books list for Ramagya School, Greater Noida. Download the academic book list for the current session." />
        <meta property="og:url" content="https://ramagyaschool.com/greater-noida/book-list" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Books List | Ramagya School Greater Noida" />
        <meta name="twitter:description" content="Download the academic book list for Ramagya School, Greater Noida. Get the recommended books for each class for the current session." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


      </Head>
      <HeaderGreaterNoida />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                 Books List!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid my-5'>
        <div className="container">
          <div className='row'>
            <div className="col-md-3 col-12">
               <GreterNoidaParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
             <GreaterNoidaBookList/>
           </div>
          </div>
        </div>
      </section>
    
      <FooterGreaterNoida />
    </>
  );
};

export default BookList;
