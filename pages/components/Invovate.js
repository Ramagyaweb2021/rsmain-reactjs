//import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import Image from 'next/image';
import Link from 'next/link';
import Innvovatesliderone from '../components/Innvovatesliderone';
import Innvovateslidertwo from '../components/Innvovateslidertwo';
import Innvovatesliderthree from '../components/Innvovatesliderthree';

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
          {/* <p>Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
          We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
          </p> */}
        </Container>
        <div className='container-fluid'>
          <Innvovatesliderone/>
          <Innvovateslidertwo/>
          <Innvovatesliderthree/>
          </div>
           {/* Learn more button */}
           <div className="approach mt-50">
              <Link href="#">
                View All
              </Link>
            </div>
      </div>
    </section>
    
  );
};

export default Innovate;
