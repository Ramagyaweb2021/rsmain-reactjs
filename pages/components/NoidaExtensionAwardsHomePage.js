import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'animate.css';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const NoidaExtensionAwardsHomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Container className="container">
        <div className="text-center mb-4">
          <h3 className='main-heading-internal-pages wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.1s'}}>AWARDS</h3>
        </div>
          <div className="d-flex flex-wrap justify-content-between">
          <div className='row'>
          <div className='col-lg-3 col-6 image-resize'>
              <Image src="/images/awards/bharat-ranking-noida-ext.webp" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/ramagya-extension-times-school-survey-2024.webp" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/3.webp" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/4.webp" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="learn-more-button">
              <a href="awards-and-recognition">View More</a>
            </div>
          </div>
        </Container>
      
  </>
  )
}

export default NoidaExtensionAwardsHomePage