import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';
const HomeInnovateSection = () => {
  return (
    <>
      
        <div className="fp-tableInnovate">
          <div className="container px-0">
            <div className="row no-gutters">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  INNOVATE
                  <span className="lineclass" />
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                   INNOVATE YOUR INTEREST WITH US!
                  </span>
                </h1>
                <p>
                    Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
                    We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
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
    
    </>
  )
}

export default HomeInnovateSection