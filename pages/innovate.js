import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
// import Image from 'next/image';
import ExploreScrollspyInternalMenu from './components/ExploreScrollspyInternalMenu';
import InnovateInternalPageSlider from './components/InnovateInternalPageSlider';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Innovate = () => {
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
      <title>Innovate | Ramagya School</title>
      <meta name="description" content="Innovate" />
      <meta name="keywords" content="Innovate" />
      <link rel="canonical" href="https://ramagyaschool.com/innovate" />
      </Head>
      <Header />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-innovate">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  INNOVATE!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreScrollspyInternalMenu/>
      {/*OUR CURRICULUM section */}
      <section className="container-fluid bg-image-section my-5">
      <div className="container">
      <div className='row'>
      <div className="col-md-12">
      <div className="text-left mb-5">
      <div className='about-content'>
      {/* <h2
      className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
      style={{ animationDelay: '0.2s', textAlign: "center" }}
      >
        OUR CURRICULUM
      </h2> */}

      <p style={{ textAlign: "center" }}>
        Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
        We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
      </p>

      </div>
      </div>
      </div>
      </div>  
      </div>
      </section>  
      <InnovateInternalPageSlider/>
         {/*child ready section */}
        <section className="container-fluid bg-image-section my-5">
        <div className="container">
        <div className='row'>
        <div className="col-md-12">
        <div className="text-left mb-5">
        <div className='about-content'>
        <h2
        className="fw-bold wow animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.2s', textAlign: "center" }}
        >
         How Can We Foster Future Innovators Today?
        </h2>

        <p>
          Showcasing cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students.
          <b>Mindbox,</b> a program that integrates STEAM subjects with hands-on activities and projects, encouraging students to solve real-world problems and think creatively.<br></br>
          <b> Robotics & Design Lab </b> features robotics kits, 3D printers, and CAD software, offering students practical experience in robotics and design. Guided by experts, students work on real-world projects, preparing them for future STEM careers.<br></br>
          <b>STREAM</b> Innovation and Creation program enables students to turn ideas into reality through interdisciplinary projects. This initiative fosters entrepreneurial skills and innovative thinking, equipping students for future industries.<br></br>
          <b>Design Thinking</b> program teaches students to approach problems creatively and systematically. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.

          </p>
          <p> We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world.</p>
        </div>
        </div>
        </div>
        </div>  
        </div>
        </section>  
      <FooterNoida />
    </>
  );
};

export default Innovate;
