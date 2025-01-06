import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image'
import AluminiInternalpageSlider from './AluminiInternalpageSlider';
import LeadAchievementsInternalPage from './LeadAchievementsInternalPage';
import LeadCareerAvenuesJatinChawlaInternalPage from './LeadCareerAvenuesJatinChawlaInternalPage';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const LeadTabination = () => {
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
      <div className='explore-tabination-internal-page-section'>
        <Container className='explore-tabination-container my-5'>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Achievements">
                 <LeadAchievementsInternalPage/>
                </Tab>
                <Tab eventKey="longer-tab" title="Career Avenues">
                 <LeadCareerAvenuesJatinChawlaInternalPage/>
                 <p className='my-4' style={{ textAlign: "center" }}>
                    Through this collaboration, Ramagya School is proud to equip students with the tools, insights, and support needed to pursue their academic dreams on an international stage.</p>
                </Tab>
                <Tab eventKey="alumni" title="Alumni">
                  
                  {/* <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-12'>
                          <div className='about-content learn'>
                          <h1>
                             RAMAGYA ALUMNI REUNITE
                              <span className="lineclass" />
                              <span
                                className="wow animate__ animate__zoomIn animated"
                                style={{ animationDelay: "0.3s", visibility: "visible" }}
                              >
                                Rediscover, Reconnect and Relive Memories
                              </span>
                            </h1>

                      

                            <p className='my-4' style={{ textAlign: "center" }}>
                            Univariety is more than a simple platform; it is an energetic community for Ramagya alumni across the globe to come together. At its core, Univariety acts as a digital ecosystem tailored specifically for Ramagya alumni needs and ensures a seamless experience for connecting, engaging, and expanding each other&#39;s skill sets.</p>

                            <p>Univariety was designed with camaraderie and collaboration in mind, offering alumni an online meeting place to reunite old friendships, forge new bonds, and stay involved with their alma mater. No matter when or how long ago you graduated, Univariety welcomes all alumni - newcomers alike! - as we discover all that unites us all as we embark on exciting journeys together!</p>


                          </div>
                        </div>
                      </div>

                   
                    </div>
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-4 col-6'>
                         <Image src="/images/lead/alumini/1.webp" className="card-img-top img-fluid" alt="alumini" width={500} height={296} />
                        </div>
                        <div className='col-md-4 col-6'>
                         <Image src="/images/lead/alumini/1.webp" className="card-img-top img-fluid" alt="alumini" width={500} height={296} />
                        </div>
                        <div className='col-md-4 col-12 mt-1'>
                         <Image src="/images/lead/alumini/1.webp" className="card-img-top img-fluid" alt="alumini" width={500} height={296} />
                        </div>
                      </div>

                   
                    </div>
                    <AluminiInternalpageSlider/>
                    
                  </section> */}
                </Tab>
               
              </Tabs>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default LeadTabination