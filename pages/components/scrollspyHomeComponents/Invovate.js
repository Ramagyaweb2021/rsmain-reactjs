//import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import Image from 'next/image';
import Link from 'next/link';
import Innvovateslider from '../scrollspyHomeComponents/Innvovateslider';

const Innovate = () => {
  return (
    <section className="learn section fp-section fp-table active fp-completely" id="innovate">
      <div className="fp-tableExplore">
        <Container className="mt-0">
          <h1>
            INVOVATE
            <span className="lineclass" />
            <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              INNOVATE YOUR INTEREST WITH US
            </span>
          </h1>
          <p>Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
          We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
          </p>
        </Container>
        <div className='container-fluid'>
           <Innvovateslider/>
          </div>
           {/* Learb more button */}
           <div className="d-flex justify-content-center align-items-center mt-30">
                    <div className="learn-more-button">
                      <a href="#">Learn More</a>
                    </div>
                  </div>
      </div>
    </section>
    
  );
};

export default Innovate;
