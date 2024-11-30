import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NoidaFamousPersonalityTestimonial } from './NoidaFamousPersonalityTestimonial';
import { NoidaExpertTeacherTestimonial } from './NoidaExpertTeacherTestimonial';
import { NoidaSportsLeagueTestimonial } from './NoidaSportsLeagueTestimonial';
import { NoidaParentTestimonial } from './NoidaParentTestimonial';
import { NoidaStudentTestimonial } from './NoidaStudentTestimonial';

const NoidaInternalPageTestimonials = () => {
  return (
    <>
      <div className="explore-tabination-internal-page-section">
        <Container className="explore-tabination-container my-5">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Famous Personalities" aria-controls="home-tab">
                  <NoidaFamousPersonalityTestimonial/>
                </Tab>
                <Tab eventKey="profile" title="Experts & Teachers" aria-controls="profile-tab">
                  <NoidaExpertTeacherTestimonial/>
                </Tab>
                <Tab eventKey="sports-league" title="NOIDA SPORTS LEAGUE" aria-controls="sports-league-tab">
                  <NoidaSportsLeagueTestimonial/>
                </Tab>
                <Tab eventKey="parents" title="Parents" aria-controls="parents-tab">
                  <NoidaParentTestimonial/>
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

export default NoidaInternalPageTestimonials;
