import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '/pages/components/Header';
import HomeExploreSection from './components/HomeExploreSection';
import HomeExperimentSection from './components/HomeExperimentSection';
import HomeInnovateSection from './components/HomeInnovateSection';
import HomeEvolveSection from './components/HomeEvolveSection';
import HomeLeadSection from './components/HomeLeadSection';
import ReactFullpage from '@fullpage/react-fullpage';
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
        <title>Overview | Ramagya School</title>
        <meta name="description" content="Overview" />
        <meta name="keywords" content="Overview" />
        <link rel="canonical" href="https://ramagyaschool.com/overview" />
      </Head>
      <Header />
      
      <ReactFullpage
        navigation
        scrollingSpeed={1000} // Optional, 1000ms
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section banner-sec">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="banner-text">
                        <h1
                          className="wow animate__animated animate__fadeInDown"
                          style={{ animationDelay: '0.2s' }}
                        >
                          Who we are
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section" id="explore">
                <HomeExploreSection />
              </section>

              <section className="section1" id="experiment">
                <HomeExperimentSection />
              </section>

              <section className="section" id="innovate">
                <HomeInnovateSection />
              </section>

              <section className="section" id="evolve">
                <HomeEvolveSection />
              </section>

              <section className="section" id="lead">
                <HomeLeadSection />
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Overview;
