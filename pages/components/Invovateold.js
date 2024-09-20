import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Invovate = () => {
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
      <section className="learn section fp-section fp-table active fp-completely" id="innovate">
        <div className="fp-tableExplore">
          {/* style={{ height:"676px"}} */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                   INVOVATE
                  <span className="lineclass" />
                  <span
                    className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                     INNOVATE YOUR INTEREST WITH US
                  </span>
                </h1>
                <p> A child learns in many ways - questioning adults, collaborating with peers, and experiencing the world through his or her unique perspective.Ramagya School transforms these ways of learning into a methodology of relevance. 
                </p>
                <div className="service_post position-relative mt-50">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                          <div className="service_box type_two hover_1_get">
                            {/* <a href="service.html" className="img_bx">
                              <Image src="/images/animation.png" alt="Primary" width={100} height={100}/>
                            </a> */}
                            <div className="content_box trans">
                              <div className="icon trans">
                                  <Image src="/images/animation.png" alt="Primary" width={100} height={100}/>
                              </div>
                              <div className="steps trans">1</div>
                              <h4 className="title_24 trans">
                                Animation
                              </h4>
                              <p className="trans">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              </p>
                              
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="service_box type_two hover_1_get">
                          {/* <a href="service.html" className="img_bx">
                            <Image src="/images/animation.png" alt="Primary" width={100} height={100}/>
                          </a> */}
                          <div className="content_box trans">
                            <div className="icon trans">
                                <Image src="/images/club.png" alt="Primary" width={100} height={100}/>
                            </div>
                            <div className="steps trans">2</div>
                            <h4 className="title_24 trans">
                               Club
                            </h4>
                            <p className="trans">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="service_box type_two hover_1_get">
                          {/* <a href="service.html" className="img_bx">
                            <Image src="/images/animation.png" alt="Primary" width={100} height={100}/>
                          </a> */}
                          <div className="content_box trans">
                            <div className="icon trans">
                                <Image src="/images/robotic.png" alt="Primary" width={100} height={100}/>
                            </div>
                            <div className="steps trans">3</div>
                            <h4 className="title_24 trans">
                               Robotics
                            </h4>
                            <p className="trans">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  {/* Learb more button */}
                  <div className="approach mt-20">
                    <Link href="#">Learn More</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Invovate