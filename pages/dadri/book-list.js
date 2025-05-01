import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderDadri from '/pages/components/HeaderDadri';
import 'animate.css';
import FooterDadri from '../components/FooterDadri';
import DadriScrollspyMenu from '../components/DadriScrollspyMenu';
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
      <meta name="description" content="Books List for Ramagya School Dadri." />
      <meta name="keywords" content="Books List, Ramagya School Dadri, School Books, Book List for Students" />
      <link rel="canonical" href="https://ramagyaschool.com/dadri/book-list" />

      {/* Open Graph */}
      <meta property="og:title" content="Books List | Ramagya School Dadri" />
      <meta property="og:description" content="Discover the list of books for Ramagya School Dadri students. Stay updated with the required textbooks and study materials." />
      <meta property="og:url" content="https://ramagyaschool.com/dadri/book-list" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Books List | Ramagya School Dadri" />
      <meta name="twitter:description" content="Check out the books list for Ramagya School Dadri. Find all the necessary textbooks and materials for your child." />
      <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <HeaderDadri />
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
               <DadriScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
             <GreaterNoidaBookList/>
           </div>
          </div>
        </div>
      </section>
    
      <FooterDadri />
    </>
  );
};

export default BookList;
