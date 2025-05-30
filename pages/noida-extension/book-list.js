import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoidaExtension from '/pages/components/HeaderNoidaExtension';
import 'animate.css';
import FooterNoidaExtension from '../components/FooterNoidaExtension';
import NoidaExtensionParentsScrollspyMenu from '../components/NoidaExtensionParentsScrollspyMenu';
import NoidaExtensionBookList from '../components/NoidaExtensionBookList';
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
        <meta name="description" content="Explore the recommended books list for all classes at Ramagya School, Noida Extension. Download the academic book list for the current session." />
        <meta name="keywords" content="Books List, Ramagya School, Noida Extension, School Books, Academic Session, Class-wise Book List" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension/book-list" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Books List | Ramagya School Noida Extension" />
        <meta property="og:description" content="View the list of recommended books for each class at Ramagya School, Noida Extension. Download the book list for the current academic session." />
        <meta property="og:url" content="https://ramagyaschool.com/noida-extension/book-list" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Books List | Ramagya School Noida Extension" />
        <meta name="twitter:description" content="Discover the recommended books list for all classes at Ramagya School, Noida Extension. Download the academic book list for the current session." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


      </Head>
      <HeaderNoidaExtension />
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
               <NoidaExtensionParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
             <NoidaExtensionBookList/>
           </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default BookList;
