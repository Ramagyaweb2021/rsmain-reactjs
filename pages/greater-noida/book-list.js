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
      <meta name="description" content=">Books List" />
      <meta name="keywords" content=">Books List" />
      <link rel="canonical" href="https://ramagyaschool.com/greater-noida/book-list" />
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
