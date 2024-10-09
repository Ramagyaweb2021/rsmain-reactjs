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
                <p>Our programs are designed to empower students to excel beyond the classroom and make a meaningful impact. The Ramagya Alumni Association plays a pivotal role in this by fostering a lifelong network of former students who sOur programs are designed to empower students to excel beyond the classroom and make a meaningful impact. The Ramagya Alumni Association plays a pivotal role in this by fostering a lifelong network of former students who share their achievements, provide mentorship, and support ongoing school initiatives. This dynamic community helps current students envision their future and draw inspiration from those who have paved the way. </p>
                <div className="container my-5">
                  <div className="row justify-content-center">
                  <div className="col-md-4">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            {/* Image on the left */}
                            <Image
                              src="/images/lead-1.webp"
                              alt="Tanya Mehra"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />

                            {/* Content on the right */}
                            <div className="text-left">
                              <h5 className="card-title-1-1 mb-1">Tanya Mehra</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-2 w-75" />
                            </div>
                          </div>
                          <div className='text-left'>
                                {/* <hr className="w-75" /> */}
                                <p className="card-text text-muted" style={{ textAlign: "left" }}>
                                  {/* <span className="open-quote">“</span> */}
                                   Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                                  {/* <span className="close-quote">”</span> */}
                                </p>
                               
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            {/* Image on the left */}
                            <Image
                              src="/images/lead-2.webp"
                              alt="Kunal Kumar"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />

                            {/* Content on the right */}
                            <div className="text-left">
                              <h5 className="card-title-1 mb-1">Kunal Kumar</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-2 w-75" />
                            </div>
                          </div>
                          <div className='text-left'>
                                {/* <hr className="w-75" /> */}
                                <p className="card-text text-muted" style={{ textAlign: "left" }}>
                                  {/* <span className="open-quote">“</span> */}
                                   Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                                  {/* <span className="close-quote">”</span> */}
                                </p>
                               
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            {/* Image on the left */}
                            <Image
                              src="/images/lead-3.webp"
                              alt="Kavya Iyyer"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />

                            {/* Content on the right */}
                            <div className="text-left">
                              <h5 className="card-title-1 mb-1">Kavya Iyyer</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-2 w-75" />
                            </div>
                          </div>
                          <div className='text-left'>
                                {/* <hr className="w-75" /> */}
                                <p className="card-text text-muted" style={{ textAlign: "left" }}>
                                  {/* <span className="open-quote">“</span> */}
                                   Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                                  {/* <span className="close-quote">”</span> */}
                                </p>
                               
                            </div>
                        </div>
                      </div>
                    </div>
                 
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Learb more button */}
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="learn-more-button">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Evolve