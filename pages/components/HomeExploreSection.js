import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeExploreSection = () => {
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount
  return (
    <>
      
        <div className="fp-tableCell">
          <div className="container learn my-2">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1>
                  EXPLORE
                  <span className="lineclass" />
                  <span className="sub-heading">
                  {/* <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}> */}
                    OUR APPROACH AND CURRICULUM
                  </span>
                </h1>
                <p>
                  Ramagya embodies the commitment to foster curiosity and creativity in every student. Through a well-rounded academic process that integrates both scholastic and co-scholastic activities, students are encouraged to discover their potential in diverse areas. Ramagya School aims to create an environment ensuring holistic development, empowering students to grow intellectually, emotionally, and creatively.
                  We ensure that every child embarks on a journey of self-discovery and skill-building that extends beyond the classroom.
                </p>
                <div className="row g-0 justify-content-center">
                  <div className="col-6 col-sm-6 col-md-3 g-0">
                    <div className="approach">
                      <a href="#">Primary</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach-1" id="approach-mobile">
                      <a href="#">Middle</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach" id="approach-mobile">
                      <a href="#">Secondary</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach-1" id="approach-1-mobile">
                      <a href="#">Senior Secondary</a>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}

export default HomeExploreSection