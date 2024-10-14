import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollspyMenu from './scrollspyHomeComponents/ScrollspyMenu';
import Explore from './scrollspyHomeComponents/Explore';
// import Experiment from './scrollspyHomeComponents/Experiment';
// import ExperimentForMobile from './scrollspyHomeComponents/ExperimentForMobile';
// import Invovate from './scrollspyHomeComponents/Invovate';
// import Evolve from './scrollspyHomeComponents/Evolve';
// import Lead from './scrollspyHomeComponents/Lead';
// import Gallery from './scrollspyHomeComponents/Gallery';
// import Thedifferencewemake from './scrollspyHomeComponents/Thedifferencewemake';
// import Awards from './scrollspyHomeComponents/Awards';
// import SchoolUpdates from './scrollspyHomeComponents/SchoolUpdates';
// import Testimonials from './scrollspyHomeComponents/Testimonials';

const App = () => {
  return (
    <div className="d-flex-1">
      <div className="flex-shrink-0">
        <ScrollspyMenu />
      </div>
      <div className="flex-grow-1">
        <Container fluid className="bg-light p-0">
          <Explore/>
          {/* <Experiment/>
          <ExperimentForMobile/>
          <Invovate/>
          <Evolve/>
          <Lead/>
          <Gallery/>
          <Thedifferencewemake/>
          <Awards/>
          <SchoolUpdates/>
          <Testimonials/> */}
        </Container>
      </div>
    </div>
  );
};

export default App;
