import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
// import Image from 'next/image'
import ExperimentHandsOmMindsSlider from './ExperimentHandsOmMindsSlider';
import ExperimentWhereImaginationSlider from './ExperimentWhereImaginationSlider';
// import Experiment from '../experiment';
import ExperimentShipingMindsSlider from './ExperimentShipingMindsSlider';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ExperimentTabination = () => {
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
     <container className='explore-tabination-container my-5'>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-auto">
        <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
          <Tab
            eventKey="home"
            title={
              <>
                Hands-On. Minds-On. <br /> Limitless Learning.
              </>
            }
          >
              <ExperimentHandsOmMindsSlider/>
          </Tab>
          <Tab
            eventKey="profile"
            title={
              <>
                Where Imagination <br /> Takes Center Stage
              </>
            }
            
          >
             <ExperimentWhereImaginationSlider/>
          
          </Tab>
          <Tab
            eventKey="longer-tab"
            title={
              <>
                Shaping Minds <br /> & Inspiring Creativity
              </>
            }
          >
           <ExperimentShipingMindsSlider/>
          </Tab>
        </Tabs>

        </div>
        </div>
      </container>
        {/* <ExperimentHandsOmMindsSlider/> */}
       
        {/*child ready section */}
        <section className="container-fluid bg-image-section my-5">
        <div className="container">
        <div className='row'>
        <div className="col-md-12">
        <div className="text-left mb-5">
        <div className='about-content'>
        <h2
        className="fw-bold wow animate__animated animate__fadeInDown"
        style={{ animationDelay: '0.2s', textAlign: "center" }}
        >
         Is Your Child Ready to Turn Knowledge into Action?
        </h2>

        <p>
            Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning.
            Our <b>Book Review</b> sessions stimulate critical thinking as students analyze the “Book of the Month,” discussing themes, characters, and plots. <b>Character Enhancement</b> like &lsquo;Geeta Saar, &lsquo;TED Talks, and Circle Time nurture emotional intelligence and leadership.
            Through diverse <b>Clubs,</b> students enhance vocational and life skills, learning collaboration and creativity while pursuing their passions. In the <b>Computer Lab</b>, equipped with advanced technology, students experiment with coding, programming, and digital tools, fostering technological fluency.
            Dance classes inspire creativity and expression, while <b>Drama</b> sharpens improvisation, role-playing, and performance skills. <b>JODOGYAN,</b> our numeracy pedagogy, promotes constructive learning through innovative methods, focusing on developing strong number sense.
            <b>Music</b> at Ramagya is a vital part of education, teaching teamwork, patience, and creativity through both Indian and Western music forms. <b>Pottery & Visual Arts</b> nurture artistic talent, enhancing cognitive, emotional, and motor skills.  Science Labs encourage hands-on experiments that bring theory to life, and <b>STEM</b> learning integrates real-world problem-solving through innovative, multidisciplinary projects. Together, these programs ensure students engage in comprehensive, holistic development.
        </p>

        </div>
        </div>
        </div>
        </div>  
        </div>
        </section>  
        </div>
    
    </>
  )
}

export default ExperimentTabination