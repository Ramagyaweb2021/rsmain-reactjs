import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import Image from 'next/image'
const Thedifferencewemake = () => {
  return (
    <>
      <section className='bg-tropical-mist'>
      <Container className='bg-tropical-mist p-0'>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="main-heading">
             THE DIFFERENCE  WE MAKE
          </h1>
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Pioneer in Sports">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Pioneer in Sports</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="profile" title="Baal Saathee (Mental Health) ">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Baal Saathee (Mental Health)</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="longer-tab" title="Curriculum Forum">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Curriculum Forum</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
                  </div>
              </div>
            </div>
            </section>
            </Tab>
            <Tab eventKey="contact" title="Transcendental Meditation">
            <section className="custom-section">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5">
                    <Image src="/images/poineer-in-sports.png" alt="Primary" width={430} height={306}/>
                  </div>
                  <div className="col-md-7">
                      <h2 className="fw-bold mb-3">Transcendental Meditation</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="btn custom-btn">Learn More</a>
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

export default Thedifferencewemake