import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import DownArrowGallery from '../DownArrowGallery';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Lead = () => {
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
      <section className="learn section fp-section fp-table active fp-completely" id="lead">
        <div className="fp-tableLead">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 position-r">
                <h1 className="">
                  LEAD
                  <span className="lineclass" />
                  <span
                    className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                    MEET OUR ALUMNI
                  </span>
                </h1>
                <p>
                  Our programs are designed to empower students to excel beyond the classroom and make a meaningful impact. 
                  The Ramagya Alumni Association plays a pivotal role in this by fostering a lifelong network of former students...
                </p>
              
                <div className="container-fluid my-5">
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
                              <hr className="my-2 w-75" />
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
                              <hr className="my-2 w-75" />
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
                              <hr className="my-2 w-75" />
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
                </div>
              </div>
            </div>
          </div>

          {/* Learn more button */}
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="learn-more-button">
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="downsection-lead" onClick={handleScroll}>
            <Image
              src="/images/down-section-gallery.png"
              className="animate__animated animate__fadeInDown animate__infinite animate__slow"
              alt="Ramagya school"
              width={80}
              height={80}
            />
          </div>

        </div>
      </section>

      {/* Dummy section to scroll to */}
      <section id="nextSection" className="next-section">
        {/* <h2>Next Section</h2> */}
      </section>
    </>
  );
};

export default Lead;
