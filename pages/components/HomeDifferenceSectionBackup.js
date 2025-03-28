import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import dynamic from 'next/dynamic';
//import 'animate.css';
import Image from 'next/image'
// Dynamically import WOW.js to avoid server-side issues
//const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeDifferenceSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //useEffect(() => {
    // Initialize WOW.js only on the client side
  //   const WOWJS = require('wowjs');
  //   const wow = new WOWJS.WOW({
  //     live: false
  //   });
  //   wow.init();
  // }, []); 
  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );
  
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
  
    <div className="learn">
    <Container className="container learn my-custom-difference">
    {/* <div className='fp-tableDifference'>
    <Container className='learn my-0-1'> */}
      {/* <Container className='bg-tropical-mist p-0'> */}
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <h1 className="main-heading">THE DIFFERENCE  WE MAKE
          <span className="lineclass" />
          <span className="sub-heading animate-on-scroll">
              Don’t Just Educate!
              {/* Transform Holistically! */}
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
                    <Image src="/images/difference-we-make/poinner-in-sports.webp" alt="difference-we-make" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Pioneer in Sports</h2>
                      <p className='tabination-text'>
                      We pride ourselves on being a pioneer in sports education, offering students a rich array of athletic opportunities that foster teamwork, discipline, and physical fitness. Our state-of-the-art sports facilities are equipped to cater to a variety of interests and skill levels, ensuring that every student can find their passion.
                      </p>
                      <a href="poineer-in-sports" className="btn custom-btn">Learn More</a>
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
                    <Image src="/images/difference-we-make/baalsaathi.webp" alt="baalsaathi" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Baal Saathee (Mental Health)</h2>
                      <p className='tabination-text'>
                      The Baal Saathee initiative is a cornerstone of our commitment to nurturing the socio-emotional health of our students. By integrating cognitive, emotional, and social strategies, we create a supportive environment that fosters overall well-being. 
                      </p>
                      <a href="baalsaathi" className="btn custom-btn">Learn More</a>
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
                    <Image src="/images/difference-we-make/mental-health-club.webp" alt="mental-health-club" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Mental Health Club</h2>
                      <p className='tabination-text'>
                      Our Mental Health Club is dedicated to promoting mental well-being and providing students with practical tools to manage stress and build resilience. Key aspects of the club include Workshops and Activities, Peer Support and Collaboration with Professionals.
                      </p>
                      <a href="mental-health-club" className="btn custom-btn">Learn More</a>
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
                    <Image src="/images/difference-we-make/life-skills.webp" alt="life-skills" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Life Skills</h2>
                      <p className='tabination-text'>
                      At Ramagya School, we recognize that life skills are essential for personal and professional success. Our comprehensive life skills program is designed to empower students with practical skills that will serve them throughout their lives.
                      </p>
                      <a href="life-skills" className="btn custom-btn">Learn More</a>
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
    
    </>
  )
}

export default HomeDifferenceSection