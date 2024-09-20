import React from 'react';
import Scrollspymenu from './Menu';
import { Container } from 'react-bootstrap';
import Explore from './Explore';
import Experiment from './Experiment';
import Invovate from './Invovate';
import Evolve from './Evolve';
import Lead from './Lead';

const App = () => {
  return (
    <div className="d-flex-1">
      <div className="flex-shrink-0">
        <Scrollspymenu />
      </div>
      <div className="flex-grow-1">
        <Container fluid className="bg-light p-0">
          <Explore/>
          <Experiment/>
          <Invovate/>
          <Evolve/>
          <Lead/>
        </Container>
      </div>
    </div>
  );
};

export default App;
