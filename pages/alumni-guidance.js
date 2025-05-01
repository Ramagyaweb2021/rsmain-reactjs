import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import AlumniGuidanceList from './components/AlumniGuidanceList';
import AlumniScrollspyInternalMenu from './components/AlumniScrollspyInternalMenu';
import AddingValueAlumni from './components/AddingValueAlumni';
// import AlumniNetwork from './components/AlumniNetwork';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const AluminGuidance = () => {
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
        <title>Alumni Guidance | Ramagya School</title>
        <meta name="description" content="Alumni Guidance at Ramagya School to help students connect with alumni for career advice and mentorship." />
        <meta name="keywords" content="Alumni Guidance, Ramagya School Alumni, Career Guidance, Mentorship, Alumni Network" />
        <link rel="canonical" href="https://ramagyaschool.com/alumni-guidance" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Alumni Guidance | Ramagya School" />
        <meta property="og:description" content="Explore Alumni Guidance services at Ramagya School to receive mentorship and career advice from our alumni network." />
        <meta property="og:url" content="https://ramagyaschool.com/alumni-guidance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alumni Guidance | Ramagya School" />
        <meta name="twitter:description" content="Connect with Ramagya School alumni for career guidance and mentorship through our alumni network." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec alumni-guidance-banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                {/* <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                   Ramagya School Student-Alumni Community
                </h1> */}
              </div>
            </div>
          </div>
        </div>
      </section>

     <AlumniScrollspyInternalMenu/>

       {/* Our guiding light section */}
       <iframe src="https://wg.univariety.com/widget/526d5501-d808-415b-87a6-c005ae3de4e4"
        title="Directory Stats" 
        width="100%" 
        height="480px"
        loading="lazy"
        description="Profile of Members in the Ramagya School Alumni Network"
       ></iframe>
       {/* <section className="container-fluid bg-image-section alumni-section ">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <AlumniNetwork/>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
      {/* Our guiding light section */}
      <section className="container-fluid alumni-section">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                 <AlumniGuidanceList/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our guiding light section */}
      <section className="container-fluid bg-image-section alumni-section">
              <div className='row'>
                <div className="col-md-12">
                  <div className="text-left mb-5">
                    <div className='about-content'>
                      <AddingValueAlumni/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      <FooterNoida />
    </>
  );
};

export default AluminGuidance;
