import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeLeadSection = () => {
  const settings = {
    dots: false,
    infinite: true,  // Enable infinite sliding
    speed: 500,  // Speed of transitions
    slidesToShow: 3,  // Show 3 slides at once
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // 2-second interval for autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount

  // Define the handleScroll function to scroll to the next section
  const handleScroll = () => {
    const nextSection = document.getElementById('nextSection'); // Replace with the ID of the section you want to scroll to
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
       
        <div className="fp-tableLead">
          <div className="container learn my-2"> 
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  LEAD
                  <span className="lineclass" />
                  <span
                    className="sub-heading">
                    MEET OUR ALUMNI
                  </span>
                </h1>
                <p>
                In a world that is ever-evolving, leadership takes many forms and can emerge from the most unexpected places. At Ramagya School, we believe in nurturing the leaders of tomorrow-individuals who are not only academically accomplished but also possess the skills, values, and vision to make a difference in their communities and beyond. Our commitment to fostering leadership is reflected in our vibrant alumni network, the remarkable achievements of our students, and the diverse career avenues we provide.
                </p>
              
                <div className="container-fluid my-0">
                  <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="col-md-4 mx-0">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            <Image
                              src="/images/lead-1.webp"
                              alt="Tanya Mehra"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />
                            <div className="text-left">
                              <h5 className="card-title-1-1 mb-1">Tanya Mehra</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-0 w-75" />
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="card-text text-muted" style={{ textAlign: "left" }}>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="col-md-4 mx-0">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            <Image
                              src="/images/lead-2.webp"
                              alt="Kunal Kumar"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />
                            <div className="text-left">
                              <h5 className="card-title-1 mb-1">Kunal Kumar</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-0 w-75" />
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="card-text text-muted" style={{ textAlign: "left" }}>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="col-md-4 mx-0">
                      <div className="card text-center shadow-sm">
                        <div className="card-1-body">
                          <div className="d-flex align-items-center">
                            <Image
                              src="/images/lead-3.webp"
                              alt="Kavya Iyyer"
                              className="img square-image me-3"
                              width={80}
                              height={80}
                            />
                            <div className="text-left">
                              <h5 className="card-title-1 mb-1">Kavya Iyyer</h5>
                              <p className="text-muted mb-2">BITS Pilani</p>
                              <hr className="my-0 w-75" />
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="card-text text-muted" style={{ textAlign: "left" }}>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                     {/* Learn more button */}
                      <div className="d-flex justify-content-center align-items-center mt-1">
                        <div className="learn-more-button">
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                      {/* <br/>
                      <div className="downsectio1n" onClick={handleScroll}>
                          <Image
                            src="/images/down-section-gallery.png"
                            className="animate__animated animate__fadeInDown animate__infinite animate__slow"
                            alt="Ramagya school"
                            width={80}
                            height={80}
                          />
                        </div> */}
                </div>
              </div>
            </div>
            
          </div>

         
          

        </div>
   
    </>
  )
}

export default HomeLeadSection