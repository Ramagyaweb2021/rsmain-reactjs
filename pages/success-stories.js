import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import AlumniScrollspyInternalMenu from './components/AlumniScrollspyInternalMenu';
import AlumniStudentInsite from './components/AlumniStudentInsite';
import AlumniStudentSuccessStories from './components/AlumniStudentSuccessStories';
import AlumniDashboard from './components/AlumniDashboard';


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
        <title>Success Stories | Ramagya School</title>
        <meta name="description" content="Discover the inspiring success stories of Ramagya School's alumni. Learn about their achievements, journeys, and how the school played a role in their success." />
        <meta name="keywords" content="Success Stories, Ramagya School, Alumni Achievements, Student Success, School Impact, Ramagya Alumni" />
        <link rel="canonical" href="https://ramagyaschool.com/success-stories" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Success Stories | Ramagya School" />
        <meta property="og:description" content="Explore the success stories of Ramagya School's alumni and how they have excelled in their careers, thanks to the foundation built at Ramagya School." />
        <meta property="og:url" content="https://ramagyaschool.com/success-stories" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | Ramagya School" />
        <meta name="twitter:description" content="Read the inspiring success stories of Ramagya School alumni and learn about their achievements and journeys." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec alumni-success-story-banner-sec">
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
       <section className="container-fluid bg-image-section alumni-section ">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <AlumniStudentInsite/>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Our guiding light section */}
      <section className="container-fluid alumni-section">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                 <AlumniStudentSuccessStories/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our guiding light section */}
      
      <section className="container-fluid bg-gray-EFEFEF alumni-section py-5">
      <div className="text-center mb-4">
        <h2 className="alumni-main-section-heading">Global Citizens & Diverse Career Paths</h2>
        <p className="">
           Ramagya School students are making a mark in different career fields across the world. We are proud to see how successful they are today!
        </p>
      </div>
              <div className='row'>
                <div className="col-md-12">
                  <div className="text-left mb-5">
                    <div className='about-content'>
                      
                    <iframe src="https://wg.univariety.com/widget/9cfadb69-1c55-46d4-9e1a-ebd444d5fbaa"
                                title="Top Careers" 
                                width="100%" 
                                height="504px"
                                loading="lazy"
                                description="Most Popular Careers"
                                // style="border: none; vertical-align: top"
                            ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
   
   <section className='container bg-color-ffffff alumni dashboard'>
     <AlumniDashboard/>
   </section>

      <FooterNoida />
    </>
  );
};

export default AluminGuidance;
