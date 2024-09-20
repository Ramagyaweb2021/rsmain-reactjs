import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import Image from 'next/image'

const SchoolUpdates = () => {
  return (
    <>
      <section className='bg-tropical-mist'>
      <Container className='bg-tropical-mist p-0'>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="main-heading wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
             SCHOOL UPDATES
          </h1>
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="SCHOOL ACHIEVEMENTS">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">SCHOOL ACHIEVEMENTS</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="press" title="MEDIA PRESS">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">MEDIA PRESS</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="events" title="SCHOOL EVENTS">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">SCHOOL EVENTS</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="awards" title="AWARDS">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">AWARDS</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">View More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
          </Tabs>
        </div>
        </div>
      </Container>
      
      </section>
    </>
  )
}

export default SchoolUpdates