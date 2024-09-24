import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Evolve = () => {
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
      <section className="learn section fp-section fp-table active fp-completely" id="lead">
        <div className="fp-tableLead">
          {/* style={{ height:"676px"}} */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  LEAD
                  <span className="lineclass" />
                  <span
                    className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    MEET OUR ALUMINI
                  </span>
                </h1>
                <p>Our programs are designed to empower students to excel beyond the classroom and make a meaningful impact. The Ramagya Alumni Association plays a pivotal role in this by fostering a lifelong network of former students who share their achievements, provide mentorship, and support ongoing school initiatives. This dynamic community helps current students envision their future and draw inspiration from those who have paved the way. Our farewell ceremonies for Class XII students celebrate their journey with heartfelt citations, vibrant cultural programs, and memorable interactions, creating lasting bonds and cherished memories. These events ensure that students leave Ramagya equipped with confidence, skills, and connections to navigate their future endeavors. Whether through reminiscing with alumni, participating in farewell traditions, or engaging in ongoing alumni networks, Ramagya School is dedicated to nurturing leaders who are prepared to lead with purpose and make a significant impact in their chosen fields.</p>
                <section className="service_post position-relative">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="service_box type_four color_two hover_1_get hover_1">
                      <div className="image-container">
                                <div className="overlay">
                                  <h2 className="overlay-title">
                                    Tanya Mehra
                                  </h2>
                                  <p>BITS Pilani</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                              </div>
                        <div className="content_box trans">
                          <div className="top-lead">
                            <div className="icon trans">
                              <Image src="/images/lead-1.png" alt="personaforge" width={427} height={376} />
                              {/* <div className="image-container">
                                <div className="overlay">
                                  <h2 className="overlay-title">
                                    Tanya Mehra
                                  </h2>
                                  <p>BITS Pilani</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                              </div> */}
                            </div>
                            <div className="steps trans">1</div>
                          </div>
                          <div className="line_box">
                            <div className="line" />
                          </div>
                          <div className="bottom-alumini">
                          <h4 className="title_3 trans">
                              Tanya Mehra
                            </h4>
                            <p className='text-white'>
                                BITS Pilani
                              </p>
                                              
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="service_box type_four color_two hover_1_get hover_1">
                      <div className="image-container">
                                <div className="overlay">
                                  <h2 className="overlay-title">
                                     Kunal Kumar
                                  </h2>
                                  <p>IIT Kanpur</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                              </div>
                        <div className="content_box trans">
                          <div className="top-lead">
                            <div className="icon trans">
                              <Image src="/images/lead-2.png" alt="personaforge" width={427} height={376} />
                              {/* <div className="image-container">
                                <div className="overlay">
                                  <h2 className="overlay-title">
                                     Kunal Kumar
                                  </h2>
                                  <p>IIT Kanpur</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                              </div> */}
                            </div>
                            <div className="steps trans">2</div>
                          </div>
                          <div className="line_box">
                            <div className="line" />
                          </div>
                          <div className="bottom-alumini">
                          <h4 className="title_3 trans">
                              Kunal Kumar
                            </h4>
                            <p className='text-white'>
                                IIT Kanpur
                              </p>
                                              
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="service_box type_four color_two hover_1_get hover_1">
                      <div className="image-container">
                                <div className="overlay">
                                  <h2 className="overlay-title">
                                    Shikhar Sharma
                                  </h2>
                                  <p>IIT Kanpur</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                              </div>
                        <div className="content_box trans">
                          <div className="top-lead">
                            <div className="icon trans">
                              <Image src="/images/lead-3.png" alt="personaforge" width={427} height={376} />
                            </div>
                            <div className="steps trans">3</div>
                          </div>
                          <div className="line_box">
                            <div className="line" />
                          </div>
                          <div className="bottom-alumini">
                          <h4 className="title_3 trans">
                             Shikhar Sharma
                            </h4>
                            <p className='text-white'>
                                IIT Kanpur
                              </p>
                                              
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