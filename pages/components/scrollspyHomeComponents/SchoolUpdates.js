import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'animate.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const SchoolUpdates = () => {
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
      <section className='learn section fp-section fp-table fp-completely bg-tropical-mist' id="schoolupdates">
      <div className='fp-tableSchoolupdates'>
      <Container className='bg-tropical-mist p-0'>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <h1 className="main-heading"> SCHOOL UPDATES
          <span className="lineclass" />
          <span
            className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
            STAY INFORMED
          </span>
        </h1>
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="School Achievements">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/ach.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">RAMAGYA SCHOOL RANKED #3 IN NOIDA `&apos; TIMES SCHOOL SURVEY 2024</h2>
                      <p className='tabination-text'>
                        We&#39;re thrilled to announce that Ramagya School Noida, Sector 50, known for its unwavering commitment to holistic education, has been Ranked #3 in the &lsquo;Noida Leaders&lsquo; category by the Times School Survey 2023.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="press" title="Media Press">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Media Press</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="events" title="School Events">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">School Events</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="awards" title="Workshop/Activity">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 image-resize">
                    <Image src="/images/poineer-in-sports.webp" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Workshop/Activity</h2>
                      <p className='tabination-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
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

export default SchoolUpdates