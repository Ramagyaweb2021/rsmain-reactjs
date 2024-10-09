import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Header from '/pages/components/Header';
import Footer from '/pages/components/Footer';
import 'animate.css';
import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Overview = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const router = useRouter(); // Initialize the router hook to get the current route

  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Head>
        <title>About Us | Ramagya School</title>
        <meta name="description" content="About Us" />
        <meta name="keywords" content="About Us" />
        <link rel="canonical" href="https://ramagyaschool.com/about-us" />
      </Head>
      <Header />
      <section className="banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  About Us us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-menu d-flex justify-content-center col-12">
        <Container>
          <Row>
            <Col xs={12} id="menu" className={`d-flex justify-content-center col-12 ${isNavFixed ? 'fixed-nav' : ''}`}>
              <Nav className="bg-dark p-1">
                <Nav.Link href="overview" className={`mx-1 ${router.pathname === '/overview' ? 'active' : ''}`}>
                  Overview
                </Nav.Link>
                <Nav.Link href="about-us" className={`mx-1 ${router.pathname === '/about-us' ? 'active' : ''}`}>
                  About Us
                </Nav.Link>
                <Nav.Link href="vision-and-values" className={`mx-1 ${router.pathname === '/vision-and-values' ? 'active' : ''}`}>
                  Our Vision and Values
                </Nav.Link>
                <Nav.Link href="people" className={`mx-1 ${router.pathname === '/people' ? 'active' : ''}`}>
                  People
                </Nav.Link>
                <Nav.Link href="ramagya-foundation" className={`mx-1 ${router.pathname === '/ramagya-foundation' ? 'active' : ''}`}>
                  Ramagya Foundation
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>

      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>

      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      <p>fdfdsfdsfdsfdsfdfdsfdsfsd</p>
      
      <Footer />
    </>
  );
};

export default Overview;