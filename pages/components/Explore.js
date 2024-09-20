import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Explore = () => {
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
      <section className="learn section fp-section fp-table active fp-completely" id="explore">
        <div className="fp-tableExplore">
         {/* style={{ height:"676px"}} */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                   EXPLORE
                  <span className="lineclass" />
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                     OUR APPROACH AND CURRICULUM
                  </span>
                </h1>
                <p> A child learns in many ways - questioning adults, collaborating with peers, and experiencing the world through his or her unique perspective.Ramagya School transforms these ways of learning into a methodology of relevance. This means that every child at our schools is equipped with a toolkit of concepts, skills and knowledge, which he or she can shape into endless possibilities and solutions. In a dynamic and shifting world, this kind of learning impacts individual growth as well as global consciousness.
                </p>
                <div className='row'>
                <div className="col-sm-2">
                      <div className="approach">
                        <a href="#">Pre-Primary</a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                     {/* <Image src="/images/primary.png" alt="Primary" width={260} height={150}/> */}
                       {/* <div className='explore-content wow animate__animated animate__fadeInLeft' style={{ animationDelay: '0.2s' }}>
                        <h5 className="colorbg-one">
                          Primary
                        </h5>
                        <p className='learn-explore-paragraph'>
                          Lorem Ipsum has been the industry...
                        </p>
                       </div> */}
                       <div className="approach">
                        <a href="#">Primary</a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="approach">
                        <a href="#">Middle</a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="approach">
                        <a href="#">Secondary</a>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="approach">
                        <a href="#">Senior Secondary</a>
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <div className="approach">
                        <a href="#">Senior Secondary</a>
                      </div>
                    </div>
                    
                   </div>
                  

                  {/* Learb more button */}
                <div className="approach mt-20 wow animate__animated animate__fadeInLeft' style={{ animationDelay: '0.2s' }}">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Explore