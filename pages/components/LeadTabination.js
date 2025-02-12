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
import InternalPageLeadSection from './InternalPageLeadSection';
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
                  
                  <InternalPageLeadSection/>
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