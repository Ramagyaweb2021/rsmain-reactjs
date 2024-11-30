import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NoidaSchoolAwardsInternalPageSchool } from './NoidaSchoolAwardsInternalPageSchool';
import { NoidaSportsAwardsInternalPageSchool } from './NoidaSportsAwardsInternalPageSchool';
import { NoidaAcademicAwardsInternalPageSchool } from './NoidaAcademicAwardsInternalPageSchool';
import { NoidaPreSchoolAwardsInternalPageSchool } from './NoidaPreSchoolAwardsInternalPageSchool';
import { NoidaAddedColladesAwardsInternalPageSchool } from './NoidaAddedColladesAwardsInternalPageSchool';
import NoidaAwardsInternalSlider from './NoidaAwardsInternalSlider';

const NoidaInternalPageAwards = () => {
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
                <Tab eventKey="home" title="School" aria-controls="home-tab">
                  <NoidaSchoolAwardsInternalPageSchool/>
                </Tab>
                <Tab eventKey="profile" title="Sports" aria-controls="profile-tab">
                  <NoidaSportsAwardsInternalPageSchool/>
                </Tab>
                <Tab eventKey="sports-league" title="Academics" aria-controls="sports-league-tab">
                  <NoidaAcademicAwardsInternalPageSchool/>
                </Tab>
                <Tab eventKey="parents" title="Pre School" aria-controls="parents-tab">
                  <NoidaPreSchoolAwardsInternalPageSchool/>
                </Tab>
                <Tab eventKey="students" title="Added Accolades" aria-controls="students-tab">
                  <NoidaAddedColladesAwardsInternalPageSchool/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container><br></br>
        <NoidaAwardsInternalSlider/>
      </div>
    </>
  );
};

export default NoidaInternalPageAwards;
