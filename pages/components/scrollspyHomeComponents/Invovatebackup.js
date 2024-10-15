//import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic';
import 'animate.css';
import Innvovateslider from '../scrollspyHomeComponents/Innvovateslider';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Innovate = () => {
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); 
  return (
    <section className="learn section fp-section fp-table active fp-completely" id="innovate">
      <div className="fp-tableInnovate">
        <Container className="mt-0">
          <h1>
            INVOVATE
            <span className="lineclass" />
            <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              INNOVATE YOUR INTEREST WITH US
            </span>
          </h1>
          <p>Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
          We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
          </p>
        </Container>
        <div className='container-fluid'>
           <Innvovateslider/>
          </div>
           {/* Learb more button */}
           <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                      <a href="#">Learn More</a>
                    </div>
                  </div>
      </div>
    </section>
    
  );
};

export default Innovate;
