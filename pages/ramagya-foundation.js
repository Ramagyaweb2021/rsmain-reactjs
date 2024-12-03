import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from '/pages/components/Header';
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';
import OurInitiative from './components/OurInitiative';
import GlimseOfTheVideo from './components/GlimseOfTheVideo';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const RamagyaFoundation = () => {
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
        <title>Ramagya Foundation| Ramagya School</title>
        <meta name="description" content="Ramagya Foundation" />
        <meta name="keywords" content="Ramagya Foundation" />
        <link rel="canonical" href="https://ramagyaschool.com/ramagya-foundation" />
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
                  Ramagya Foundation!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu />
      
      {/* About us section */}
        <section className='container foundation-about-us-section my-5'>
        <div className="row">
            <div className="col-lg-5 mx-auto d-flex align-items-center">
              <div className='about-us-foundation'>
                <h3
                    className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                    style={{ animationDelay: '0.2s', textAlign: "left" }}
                  >
                    ABOUT RAMAGYA FOUNDATION
                  </h3>
                
                <p>
                  <b>Ramagya Foundation: Empowering Change for a Brighter Tomorrow</b>  </p>

                  <p>As a non-profit organization dedicated to fostering positive change, Ramagya Foundation (a unit of Purusharth Charitable Society) is committed to sustainable progress, peace, and justice across the globe. We focus on unlocking and nurturing talent by addressing key areas such as education, health, sports education, skill development, women empowerment, and animal welfare.</p>

                  <p>Our mission is to enrich individual lives by imparting core values and improving living standards through our diverse programs. We believe that by empowering individuals, we contribute to the development of an educated and enlightened society.</p>

                <p> At Ramagya Foundation, we hold a steadfast belief that children are the future of our nation. Thus, the holistic development of underprivileged children is paramount to the progress of our country. Our initiatives primarily focus on meeting the educational needs of marginalized communities while also addressing broader societal concerns.</p>

                <p>To date, our programs have positively impacted over 100,000 individuals, and we remain committed to expanding our reach and enhancing our efforts to create lasting change. Join us in our mission to sculpt a better tomorrow, one initiative at a time.</p>

              
                <div className="d-flex justify-content-left align-items-left mt-1">
                  <div className="learn-more-button">
                    <a href="https://ramagyafoundation.org/" target='_blank'>Visit Website</a>
                  </div>
            </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className='row'>
                <div className='col-md-6 col-6 g-1'>
                  <Image src="/images/ramagya-foundation/1.png" width={350} height={276} alt="School Building" className="img-fluid rounded" />
                </div>
                <div className='col-md-6 col-6 g-1'>
                  <Image src="/images/ramagya-foundation/2.png" width={350} height={276} alt="School Building" className="img-fluid rounded" />
                </div>
                <div className='col-md-6 col-6 g-1'>
                  <Image src="/images/ramagya-foundation/3.png" width={350} height={276} alt="School Building" className="img-fluid rounded" />
                </div>
                <div className='col-md-6 col-6 g-1'>
                  <Image src="/images/ramagya-foundation/4.png" width={350} height={276} alt="School Building" className="img-fluid rounded" />
                </div>
              </div>
              
              {/*
              <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" /> */}
            </div>
          </div>
        </section>
        {/* OUR REACH SO FAR section */}
        <section className="container value-section my-5">
        <div className="text-center mb-4">
          <h3 className='main-heading-internal-pages'>OUR REACH SO FAR</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 col-6 col-6 mb-4">
            <div className="card text-center h-100 border-1">
              <div className="card-value-body">
              <Image src="/images/ramagya-foundation/icon-1.png" alt="icon" width={50} height={50} />
                <h5>40,000+</h5>
                <p>
                  Students
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 col-6 mb-4">
            <div className="card text-center h-100 border-1">
              <div className="card-value-body">
              <Image src="/images/ramagya-foundation/icon-2.png" alt="icon" width={50} height={50} />
                <h5>5,000+</h5>
                <p>
                  Stray Dogs
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-1">
              <div className="card-value-body">
              <Image src="/images/ramagya-foundation/icon-3.png" alt="icon" width={50} height={50} />
                <h5>35,000+</h5>
                <p>
                Youth for Sports
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center h-100 border-1">
              <div className="card-value-body">
              <Image src="/images/ramagya-foundation/icon-4.png" alt="icon" width={50} height={50} />
                <h5>20,000+</h5>
                <p>
                  Children & Adult
                </p>
              </div>
            </div>
          </div>
        
          {/* <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="#">Learn More</a>
                  </div>
                  </div> */}
        </div>
        </section>
        {/* OUR INITIATIVE section */}
        <OurInitiative/>
        <GlimseOfTheVideo/>
        <HomeSectionFooter />
            </>
          );
        };

        export default RamagyaFoundation;
