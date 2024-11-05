import React, { useState } from 'react';
// import React from 'react'
import Image from "next/image";
import HomeExperimentSectionSlider1 from './HomeExperimentSectionSlider1';
import HomeExperimentSectionSlider2 from './HomeExperimentSectionSlider2';
import HomeExperimentSectionSlider3 from './HomeExperimentSectionSlider3';
const HomeExperimentSection = () => {
  //const [activeCategory, setActiveCategory] = useState('category1');
  return (
    <>
    <div className="learn fp-section-tableExperiment">
      <div className="container">
      <h1>EXPERIMENT<span className="lineclass" />
        <span className="sub-heading">
          WORKSHOPS, PROGRAMS AND EXPERIENCES
        </span>
      </h1>
      <p>Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning. The sessions under this stimulate critical thinking, enhance vocational and life skills, encourage learning collaboration and creativity while pursuing their passions and nurture artistic talent, enhance cognitive, emotional, and motor skills.We encourage hands-on experiments that bring theory to life, and learning integrates real-world problem-solving through innovative, multidisciplinary projects.Together, these programs ensure students engage in comprehensive, holistic development!</p>
      </div>

      <div className='container-fluid'>
         <HomeExperimentSectionSlider1/>
         <HomeExperimentSectionSlider2/>
         <HomeExperimentSectionSlider3/>
      </div>
      
   

    </div>
      
    </>
  )
}

export default HomeExperimentSection