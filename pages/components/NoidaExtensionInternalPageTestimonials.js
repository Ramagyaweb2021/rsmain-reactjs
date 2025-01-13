import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NoidaExtensionFamousPersonalityTestimonial } from './NoidaExtensionFamousPersonalityTestimonial';
import { NoidaExpertTeacherTestimonial } from './NoidaExpertTeacherTestimonial';
import { NoidaSportsLeagueTestimonial } from './NoidaSportsLeagueTestimonial';
import { NoidaExtensionParentTestimonial } from './NoidaExtensionParentTestimonial';
import { NoidaStudentTestimonial } from './NoidaStudentTestimonial';
import TestimonialsVerticalButton from './TestimonialsVerticalButton';

const NoidaExtensionInternalPageTestimonials = () => {
  return (
    <>
      <div className="explore-tabination-internal-page-section">
        <Container className="explore-tabination-container my-5">
          <div className="row">
           <TestimonialsVerticalButton/>
          <hr></hr><br/>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Famous Personalities" aria-controls="home-tab">
                  <NoidaExtensionFamousPersonalityTestimonial/>
                </Tab>
                <Tab eventKey="profile" title="Experts & Teachers" aria-controls="profile-tab">
                  <NoidaExpertTeacherTestimonial/>
                </Tab>
                <Tab eventKey="sports-league" title="NOIDA SPORTS LEAGUE" aria-controls="sports-league-tab">
                  <NoidaSportsLeagueTestimonial/>
                </Tab>
                <Tab eventKey="parents" title="Parents" aria-controls="parents-tab">
                  <NoidaExtensionParentTestimonial/>
                </Tab>
                <Tab eventKey="students" title="Students" aria-controls="students-tab">
                  <NoidaStudentTestimonial/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NoidaExtensionInternalPageTestimonials;
