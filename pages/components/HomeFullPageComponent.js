import React from 'react';
import Fullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';
import Image from 'next/image'
// import ScrollspyMenu from './scrollspyHomeComponents/ScrollspyMenu';
//import Header from './Header'; // Import Header
//import HomeSlider from '/pages/components/HomeSlider'; 
//import Footer from './Footer'; // Import Footer

const FullPageComponent = () => {
  return (
    <>
      {/* Header Component */}
      {/* <Header /> */}
      {/* <HomeSlider/> */}
      {/* FullPage.js wrapper for full-page scrolling sections */}
      <Fullpage
        licenseKey={'YOUR_LICENSE_KEY'} // Add your FullPage.js license key
        scrollingSpeed={1000} // Scroll speed between sections
        navigation={true} // Enables the navigation dots
        anchors={['slider', 'explore', 'experiment', 'innovate', 'evolve', 'lead']} // Names for the sections (matching your Menu)
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
               {/* Section 1 - Explore */}
               <div className="learn section fp-section fp-table active fp-completely" id="slider">
               <video className='main-video'
                width="100%"
                // height={500}
                poster="/images/main-banner.webp"
                loop="loop"
                muted={true} controls="controls"
                autoPlay="autoPlay"
                playsInline="playsInline"
                preload="preload">
                <source src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4" type="video/mp4"/>
              </video>
               </div>
              {/* Section 1 - Explore */}
              <div className="learn section fp-section fp-table active fp-completely" id="explore">
              <div className="fp-tableExplore">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1>
                  EXPLORE
                  <span className="lineclass" />
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    OUR APPROACH AND CURRICULUM
                  </span>
                </h1>
                <p>
                  Ramagya embodies the commitment to foster curiosity and creativity in every student. Through a well-rounded academic process that integrates both scholastic and co-scholastic activities, students are encouraged to discover their potential in diverse areas. Ramagya School aims to create an environment ensuring holistic development, empowering students to grow intellectually, emotionally, and creatively. We ensure that every child embarks on a journey of self-discovery and skill-building that extends beyond the classroom.
                </p>
                <div className="row g-0 justify-content-center">
                  <div className="col-6 col-sm-6 col-md-3 g-0">
                    <div className="approach">
                      <a href="#">Primary</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach-1" id="approach-mobile">
                      <a href="#">Middle</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach" id="approach-mobile">
                      <a href="#">Secondary</a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3">
                    <div className="approach-1" id="approach-1-mobile">
                      <a href="#">Senior Secondary</a>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-30">
                  <div className="learn-more-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>

              {/* Section 2 - Experiment */}
              <div className="learn section fp-section fp-table fp-completely" id="experiment">
              <div className="fp-tableExperiment">
          <div className="container px-0">
            <div className="row no-gutters">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  EXPERIMENT
                  <span className="lineclass" />
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    WORKSHOPS, PROGRAMS AND EXPERIENCES
                  </span>
                </h1>
                <p>
                  Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning. The sessions under this stimulate critical thinking, enhance vocational and life skills, encourage learning collaboration and creativity while pursuing their passions and nurture artistic talent, enhance cognitive, emotional, and motor skills. We encourage hands-on experiments that bring theory to life, and learning integrates real-world problem-solving through innovative, multidisciplinary projects. Together, these programs ensure students engage in comprehensive, holistic development!
                </p>

                <div className="service_post position-relative mt-10">

                  <div className="row g-4">
                    <div className="col-md-6 col-6 d-flex align-items-stretch g-0">
                      <div className="col-6 p-3">
                        <h5 className="feature-title">BOOK REVIEWS</h5>
                        <p className="feature-description">
                          Sharpens critical thinking as studentsdiscuss themes, characters, and plots from the Book of the Month
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/experiments/book-review.webp" // Adjust the path as needed
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">CLUBS</h5>
                        <p className="feature-description">
                          Clubs foster creativity, collaboration and life skills, while sharpens improvisation, confidence and communication.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/experiments/clubs.webp" // Adjust the path as needed
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
                          alt="Book Reviews"
                          src="/images/experiments/jadu-gyan.webp" // Adjust the path as needed
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">JODO GYAN</h5>
                        <p className="feature-description">
                          Enhancing number sense and problem-solving through hands-on, innovative learning methods, building a solid math foundation.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/experiments/character.webp"
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title"> CHARACTER ENHANCEMENT</h5>
                        <p className="feature-description">
                          Geeta Saar, TED Talks, and Circle Time foster emotional intelligence, leadership, and personal growth in students.
                        </p>
                      </div>



                    </div>
                    {/* <div className="col-md-6 col-6 d-flex align-items-stretch g-0">
                    <div className="col-6 p-3">
                        <h5 className="feature-title"> VISUAL & PERFORMING ARTS</h5>
                        <p className="feature-description">
                          Cultivating creativity while boosting cognitive, emotional, and motor skill development in students.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/experiments/visual-arts.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="col-6 p-3">
                        <h5 className="feature-title">STEM</h5>
                        <p className="feature-description">
                           Hands-on experiments and STEAM projects boost critical thinking, while the Computer Lab enhances coding skills and technological fluency.
                        </p>
                      </div>
                      <div className="col-6 p-0">
                        <Image
                          alt="Book Reviews"
                          src="/images/experiments/jadu-gyan.webp" 
                          className="img feature-image"
                          width={310}
                          height={204}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      
                    </div>
  */}
                  </div>


                </div>

                {/* Learb more button */}
                <div className="d-flex justify-content-center align-items-center mt-30">
                  <div className="learn-more-button">
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>

              {/* Section 3 - Innovate */}
              <div className="section" id="innovate">
                <h1>Innovate</h1>
              </div>

              {/* Section 4 - Evolve */}
              <div className="section" id="evolve">
                <h1>Evolve</h1>
              </div>

              {/* Section 5 - Lead */}
              <div className="section" id="lead">
                <h1>Lead</h1>
              </div>
            </div>
          );
        }}
      />

      {/* Footer Component */}
      {/* <Footer /> */}
    </>
  );
};

export default FullPageComponent;
