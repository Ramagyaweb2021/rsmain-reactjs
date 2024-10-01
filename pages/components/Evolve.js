import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'animate.css';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Evolve = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount
  return (
    <>
      <section className="learn section fp-section fp-table active fp-completely" id="evolve">
        <div className="fp-tableEvolve">
          {/* style={{ height:"676px"}} */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  EVOLVE
                  <span className="lineclass" />
                  <span
                    className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    EVOLVE YOUR CAREER WITH US
                  </span>
                </h1>
                <p>Fostering future leaders through our comprehensive approach that helps students to Evolve.
                  Through these dynamic programs, Ramagya School is committed to evolving our students into confident, capable leaders ready to tackle future challenges with purpose and responsibility.</p>
                <section className="service_post_11 position-relative">
                  <div className="row">
                    <div className='col-md-6'>
                      <div className='row'>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 g-2">
                          <div className="service_box type_four color_two hover_1_get hover_1">
                            <div className="image-container">
                              <div className="overlay">
                                <div className="icon trans">
                                  <Image src="/images/career-path.png" alt="personaforge" width={50} height={50} />
                                </div>
                                <h2 className="overlay-title">
                                  CAREER PATH
                                </h2>
                                {/* <p>This is the overlay content that appears on hover.</p> */}
                              </div>
                            </div>
                            <div className="content_box trans">
                              <div className="top">
                                <div className="icon trans">
                                  <Image src="/images/career-path.png" alt="personaforge" width={80} height={80} />
                                </div>
                                <div className="steps trans">1</div>
                                <h4 className="title_24 trans">
                                  CAREER PATH
                                </h4>
                              </div>
                              <div className="line_box">
                                <div className="line" />
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 g-2">
                          <div className="service_box type_four color_two hover_1_get hover_1">
                            <div className="image-container">
                              <div className="overlay">
                                <div className="icon trans">
                                  <Image src="/images/investiture-ceremony.png" alt="personaforge" width={50} height={50} />
                                </div>
                                <h2 className="overlay-title">
                                  STUDENT DRIVEN SOCIETIES
                                </h2>
                                {/* <p>This is the overlay content that appears on hover.</p> */}
                              </div>
                            </div>
                            <div className="content_box trans">
                              <div className="top">
                                <div className="icon trans">
                                  <Image src="/images/investiture-ceremony.png" alt="personaforge" width={80} height={80} />
                                </div>
                                <div className="steps trans">2</div>
                                <h4 className="title_24 trans">
                                  STUDENT DRIVEN SOCIETIES
                                </h4>
                              </div>
                              <div className="line_box">
                                <div className="line" />
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 g-2">
                          <div className="service_box type_four color_two hover_1_get hover_1">
                            <div className="image-container">
                              <div className="overlay">
                                <div className="icon trans">
                                  <Image src="/images/innovation.png" alt="personaforge" width={50} height={50} />
                                 </div>
                                <h2 className="overlay-title">
                                  MUN
                                </h2>
                                {/* <p>This is the overlay content that appears on hover.</p> */}
                              </div>
                            </div>
                            <div className="content_box trans">
                              <div className="top">
                                <div className="icon trans">
                                  <Image src="/images/innovation.png" alt="personaforge" width={80} height={80} />
                                  </div>
                                <div className="steps trans">3</div>
                                <h4 className="title_24 trans">
                                  MUN
                                </h4>
                              </div>
                              <div className="line_box">
                                <div className="line" />
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 g-2">
                          <div className="service_box type_four color_two hover_1_get hover_1">
                            <div className="image-container">
                              <div className="overlay">
                                <div className="icon trans">
                                  <Image src="/images/empowered-minds.png" alt="personaforge" width={50} height={50} />
                                 </div>
                                <h2 className="overlay-title">
                                  EMPOWERED MINDS
                                </h2>
                                {/* <p>This is the overlay content that appears on hover.</p> */}
                              </div>
                            </div>
                            <div className="content_box trans">
                              <div className="top">
                                <div className="icon trans">
                                  <Image src="/images/empowered-minds.png" alt="personaforge" width={80} height={80} />
                                </div>
                                <div className="steps trans">4</div>
                                <h4 className="title_24 trans">
                                  EMPOWERED MINDS
                                </h4>
                              </div>
                              <div className="line_box">
                                <div className="line" />
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='row'>
                        <div className="col-xl-12 col-lg-22 col-md-12 col-sm-12">
                             <div className="image-section">
                                {/* Replace with your image source */}
                                <Image src='/images/overlay-video.png' alt="" width={569} height={370} />
                                {/* Play button overlay */}
                                <div className="play-button">
                                  {/* <i className="bi bi-play-circle-fill"></i> */}
                                    <Image src='/images/video-play.png' alt="" width={100} height={100} onClick={handleShow} />
                                    {/* Popup Modal */}
                                    <Modal show={show} onHide={handleClose} centered>
                                      <Modal.Header closeButton>
                                        <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        {/* You can embed any content or even a video here */}
                                        <div style={{ width: '100%', height: '315px' }}>
                                          <iframe
                                            width="100%"
                                            height="315"
                                            src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      </Modal.Body>
                                      {/* <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                          Close
                                        </Button>
                                      </Modal.Footer> */}
                                    </Modal>
                                </div>
                              </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Learb more button */}
          <div className="approach mt-50">
            <Link href="#">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Evolve