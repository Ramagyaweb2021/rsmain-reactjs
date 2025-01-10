// import React from 'react'
import React, { useEffect} from 'react';
import Image from 'next/image';
// import Link from 'next/link';
const HomeInnovateSection = () => {
   //useEffect(() => {
      // Initialize WOW.js only on the client side
    //   const WOWJS = require('wowjs');
    //   const wow = new WOWJS.WOW({
    //     live: false
    //   });
    //   wow.init();
    // }, []); 
    //Use IntersectionObserver for Animation Triggers
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate__animated', 'animate__zoomIn');
            }
          });
        },
        { threshold: 0.2 }
      );
    
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    
      return () => observer.disconnect();
    }, []);
  return (
    <>
       <div className="learn">
          <div className="container my-custom-innovate">
        {/* <div className="fp-tableInnovate">
          <div className="container learn my-0"> */}
            <div className="row no-gutters">
              <div className="col-sm-12 position-r">
                <h1 className="scrollspy-p-0">
                  INNOVATE
                  <span className="lineclass" />
                   <span className="sub-heading animate-on-scroll">
                    NURTURING THE FUTURE GENERATION
                  </span>
                </h1>
                <p className='scrollspy-p-0'>
                Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through 
                cultural and sensory perspectives, students develop effective, innovative solutions.
                We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
                </p>

                <div className="service_post position-relative mt-10">
                  {/* For large */}
                  <div className="row g-4 d-none d-md-flex">
                    <div className="col-md-6 col-6 d-flex align-items-stretch g-0">
                      <div className="col-6 p-3">
                        <h5 className="feature-title">MINDBOX</h5>
                        <p className="feature-description">
                        Fosters creativity and problem-solving skills by engaging students in hands-on projects that address real-world challenges.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="mindbox"
                          src="/images/slider/innovate/mind-box.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">ROBOTICS & DESIGN LAB</h5>
                        <p className="feature-description">
                          Equips students with practical skills in robotics and design, enhancing their readiness for future careers through hands-on projects and expert guidance.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="robotics"
                          src="/images/slider/innovate/robotics.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>


                    </div>
                    <div className="col-md-6 col-6 d-flex align-items-stretch g-0">

                      <div className="col-6 p-0">
                        <Image
                          alt="steam"
                          src="/images/slider/innovate/steam.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">STREAM</h5>
                        <p className="feature-description">
                          Cultivates entrepreneurial skills and innovative thinking, preparing students to transform ideas into reality for future industries.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/slider/innovate/design-thinking.webp"
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">DESIGN THINKING</h5>
                        <p className="feature-description">
                        Empowers students to creatively tackle real-world problems, fostering innovative solutions through diverse cultural and sensory insights.
                        </p>
                      </div>



                    </div>
                  
                  </div>
                  {/* For mobile */}
                  <div className="row g-4 d-block d-md-none">
                    <div className="col-6 col-md-3 d-flex align-items-stretch g-0">
                      <div className="col-12 p-3">
                        <h5 className="feature-title">MINDBOX</h5>
                        <p className="feature-description">
                          Fosters creativity and problem-solving skills by engaging students in hands-on projects that address real-world challenges.
                        </p>
                      </div>
                      <div className="col-12 p-0">
                        <Image
                          alt="mindbox"
                          src="/images/slider/innovate/mind-box.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    
                    <div className="col-6 col-md-3 d-flex align-items-stretch g-0">
                      <div className="col-12 p-0">
                        <Image
                          alt="robotics"
                          src="/images/slider/innovate/robotics.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-12 p-3">
                        <h5 className="feature-title">ROBOTICS & DESIGN LAB</h5>
                        <p className="feature-description">
                          Equips students with practical skills in robotics and design, enhancing their readiness for future careers through hands-on projects and expert guidance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-6 col-md-3 d-flex align-items-stretch g-0">
                    <div className="col-12 p-3">
                        <h5 className="feature-title">STEAM</h5>
                        <p className="feature-description">
                          Cultivates entrepreneurial skills and innovative thinking, preparing students to transform ideas into reality for future industries.
                        </p>
                      </div>
                      <div className="col-12 p-0">
                        <Image
                          alt="steam"
                          src="/images/slider/innovate/steam.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-stretch g-0">
                      <div className="col-12 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/slider/innovate/design-thinking.webp"
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-12 p-3">
                        <h5 className="feature-title">DESIGN THINKING</h5>
                        <p className="feature-description">
                          Empowers students to creatively tackle real-world problems, fostering innovative solutions through diverse cultural and sensory insights.
                        </p>
                      </div>
                    </div>
                  </div>


                </div>

                {/* Learb more button */}
                <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="innovate">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default HomeInnovateSection