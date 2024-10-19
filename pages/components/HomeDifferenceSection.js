import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image'
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeDifferenceSection = () => {
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
    <section className='learn section fp-section fp-table fp-completely bg-tropical-mist' id="section9">
    <div className='fp-tableDifference'>
      <Container className='bg-tropical-mist p-0'>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <h1 className="main-heading">THE DIFFERENCE  WE MAKE
          <span className="lineclass" />
          <span
            className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              Impacting Lives, Creating Change
          </span>
        </h1>
          {/* <h1 className="main-heading">
             THE DIFFERENCE  WE MAKE
          </h1> */}
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Pioneer in Sports">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Pioneer in Sports</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="profile" title="Baal Saathee (Mental Health)">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Baal Saathee (Mental Health)</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="longer-tab" title="Mental Health Club">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Mental Health Club</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="contact" title="Life Skills">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Life Skills</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
          </Tabs>
        </div>
        </div>
      </Container>
      </div>
      </section>
    </>
  )
}

export default HomeDifferenceSection