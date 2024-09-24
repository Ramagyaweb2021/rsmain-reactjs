import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Experiment = () => {
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
      <section className="learn section fp-section fp-table fp-completely" id="experiment">
        <div className="fp-tableExperiment">
         {/* style={{ height:"676px"}} */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                   EXPERIMENT
                  <span className="lineclass" />
                  <span
                    className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                      WORKSHOPS, PROGRAMS AND EXPERIENCES
                  </span>
                </h1>
                <p>
                Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning. The sessions under this stimulate critical thinking, enhance vocational and life skills, encourage learning collaboration and creativity while pursuing their passions and nurture artistic talent, enhance cognitive, emotional, and motor skills.We encourage hands-on experiments that bring theory to life, and learning integrates real-world problem-solving through innovative, multidisciplinary projects.Together, these programs ensure students engage in comprehensive, holistic development!
                </p>
              
                <div className="service_post position-relative mt-50">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="service_box type_seven trans color_two">
                          <div className="content d-flex align-items-center">
                            {/* <Image src="/images/summer-camp.png" alt="Primary" width={320} height={193}/> */}
                            <div className="left">
                              <div className="title_2 wow animate__animated animate__pulse" style={{ animationDelay: '0.3s' }}>
                                <Link href="#">SUMER CAMP</Link>
                              </div>
                              <p className="trans">
                                 Lorem Ipsum has been the industry standard dummy text...
                              </p>
                            </div>
                            <div className="right">
                              <Link href="#" className="link">
                               <Image  src="/images/read-more.png" alt="read more" width={40} height={40}/>
                                {/* <svg
                                  width={25}
                                  height={25}
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z"
                                    fill="url(#paint0_linear_1_4032)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_1_4032"
                                      x1="-0.34336"
                                      y1="13.9061"
                                      x2="24.0352"
                                      y2="13.9061"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset={1} stopColor="#F86403" />
                                      <stop offset={1} stopColor="#D65501" />
                                    </linearGradient>
                                  </defs>
                                </svg> */}
                              </Link>
                            </div>
                            <Image src="/images/summer-camp.png" alt="summer camp" width={320} height={193}/>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="service_box type_seven trans color_two">
                          <div className="content d-flex align-items-center">
                            {/* <Image src="/images/summer-camp.png" alt="Primary" width={320} height={193}/> */}
                            <div className="left">
                              <div className="title_2 wow animate__animated animate__pulse" style={{ animationDelay: '0.3s' }}>
                                <Link href="#">ROBOTICS</Link>
                              </div>
                              <p className="trans">
                                 Lorem Ipsum has been the industry standard dummy text...
                              </p>
                            </div>
                            <div className="right">
                             <Link href="#" className="link">
                               <Image  src="/images/read-more.png" alt="read more" width={40} height={40}/>
                               </Link>
                            </div>
                            <Image src="/images/robotics.png" alt="robotics" width={320} height={193}/>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="service_box type_seven trans color_two">
                          <div className="content d-flex align-items-center">
                            <Image src="/images/personaforge.png" alt="personaforge" width={320} height={193}/>
                            <div className="left">
                              <div className="title_2 wow animate__animated animate__pulse" style={{ animationDelay: '0.3s' }}>
                                <Link href="#">PERSONAFORGE</Link>
                              </div>
                              <p className="trans">
                                 Lorem Ipsum has been the industry standard dummy text...
                              </p>
                            </div>
                            <div className="right">
                             <Link href="#" className="link">
                               <Image  src="/images/read-more.png" alt="read more" width={40} height={40}/>
                               </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="service_box type_seven trans color_two">
                          <div className="content d-flex align-items-center">
                            <Image src="/images/theatre.png" alt="personaforge" width={320} height={193}/>
                            <div className="left">
                              <div className="title_2 wow animate__animated animate__pulse" style={{ animationDelay: '0.3s' }}>
                                <Link href="#">THEATRE</Link>
                              </div>
                              <p className="trans">
                                 Lorem Ipsum has been the industry standard dummy text...
                              </p>
                            </div>
                            <div className="right">
                             <Link href="#" className="link">
                               <Image  src="/images/read-more.png" alt="read more" width={40} height={40}/>
                               </Link>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                {/* Learb more button */}
                <div className="approach mt-20">
                  <Link href="#">View All</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiment