import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoidaExtension from '/pages/components/HeaderNoidaExtension';
import 'animate.css';
import FooterNoidaExtension from '../components/FooterNoidaExtension';
import NoidaExtensionParentsScrollspyMenu from '../components/NoidaExtensionParentsScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Transport = () => {
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
        <title>Transport | Ramagya School</title>
        <meta name="description" content="Find complete details about Ramagya School's safe and reliable transport service in Noida, including bus routes, safety protocols, and timings." />
        <meta name="keywords" content="Ramagya School Transport, Noida School Bus, Student Transport Service, School Bus Safety, Ramagya Bus Routes" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension/transport" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Transport | Ramagya School Noida Extension" />
        <meta property="og:description" content="Explore safe and convenient transport services offered by Ramagya School in Noida Extension. View bus routes, timings, and safety standards." />
        <meta property="og:url" content="https://ramagyaschool.com/noida-extension/transport" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport | Ramagya School Noida Extension" />
        <meta name="twitter:description" content="Detailed information about Ramagya School's transport services in Noida Extension — safe routes, student bus schedules, and security measures." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


      </Head>
      <HeaderNoidaExtension />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                 Transport!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid my-5'>
        <div className="container">
          <div className='row'>
            <div className="col-md-3 col-12">
               <NoidaExtensionParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
            <div className="about-intro">
              <p>
                Ramagya understands that today, the greatest risk that students face is on
                the road. The school takes active measures in keeping the students safe
                while they move to and fro from school.
              </p>
              <ul className="custom-bullets">
                <li>
                  We take effective steps of training the bus drivers to prevent unsafe
                  behaviours and
                </li>
                <li>
                  We have also appointed a lady security guard who guard the students during
                  the whole traveling time and minimize the risk of students crossing the
                  road (if required) by accompanying them.
                </li>
                <li>
                  Also, the educators at Ramagya are not just at school to foster the kids
                  but also they understand the responsibility of being the second parents
                  and hence they remain in the bus from the very first stop till the last.
                </li>
                <li>
                  We also issue Escort Cards to the parents. These cards verify the
                  guardians who turn up to pick the child from the school. Without showing
                  an escort card, a child is not allowed to leave the school premises with
                  anyone.
                </li>
              </ul>
              <hr />
              <div className="title-100">Bus Tracking System</div>
              <ul className="custom-bullets">
                <li>
                  All the Ramagyan buses have GPS, which makes it easier for the parents to
                  track down the school bus at any point in time.
                </li>
                <li>
                  All the students who avail bus services at Ramagya become a part of a
                  specialized message service wherein the parents get the updates of the bus
                  five minutes prior to its arrival at the stop and also an update is given
                  when the bus reaches school.
                </li>
                <li>
                  Also, the Ramagyan buses have cameras installed which further insure
                  perfect security of the children. Moreover, the buses have a speed
                  monitoring system which ensures that the drivers remain in the decent
                  speed limit.
                </li>
                <li>
                  Keeping schools safe allows children to look forward to being in an
                  encouraging environment that promotes social and creative learning. When
                  their basic safety needs aren’t met, children are at risk for not feeling
                  comfortable at school and may stop showing up, or they may remain on edge
                  throughout the day.
                </li>
              </ul>
              <br />
              <p>
                Ramagya understands that promoting school safety creates an open space for
                kids to explore, learn and grow. The school yields special care of the
                security of the students at school and hence has a collaboration with the
                best security company that has strict policies on school safety, promote
                increased learning, feelings of school unity, higher levels of pro-social
                behavior and decreased levels of violence.
              </p>
          </div>

            {/* <div className="btn custom-btn">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc-77BLVQkfQ7J-NAB9tVDY7OG9hWQSFxh-OTRJxX6UjtUNcg/viewform"
                target="_blank"
              >
                <i className="fa fa-bus" /> Transportation Request &amp; Declaration Form{" "}
              </a>
            </div> */}

           </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default Transport;
