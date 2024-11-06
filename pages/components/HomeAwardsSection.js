import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'animate.css';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const HomeAwardsSection = () => {
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
     
      <div className='fp-tableAwards'>
      <Container className='learn my-1'>
        {/* <Container className='bg-tropical-mist-awards p-0'> */}
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="main-heading"> AWARDS
            <span className="lineclass" />
            <span
              className="sub-heading">
                Recognizing Excellence and Achievements
            </span>
          </h1>
          </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
          <div className='row'>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="/images/awards/1.png" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="/images/awards/2.png" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="/images/awards/3.png" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
            <div className='col-lg-3 col-6 image-resize'>
              <Image src="/images/awards/4.png" width={300} height={300} alt="Achievement" className="mb-3" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="learn-more-button">
              <a href="#">View More</a>
            </div>
          </div>
        </Container>
        
      </div>
      
  </>
  )
}

export default HomeAwardsSection