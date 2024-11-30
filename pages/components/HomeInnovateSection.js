import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';
const HomeInnovateSection = () => {
  return (
    <>
       <div className="learn fp-section tableInnovate">
          <div className="container learn my-custom-innovate">
        {/* <div className="fp-tableInnovate">
          <div className="container learn my-0"> */}
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
                        <h5 className="feature-title">STEAM</h5>
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