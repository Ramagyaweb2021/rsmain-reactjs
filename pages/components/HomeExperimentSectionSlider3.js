// import React from 'react'
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeExperimentSectionSlider3 = () => {
  const [activeCategory, setActiveCategory] = useState('category1'); // Default active category
  
  // Settings for the Slick slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay
  };

  return (
    <>
      {/* Third Row slider Section */}
      <div className="row slide-1 content g-1">
        <div className="col-md-12">
          <Slider {...sliderSettings}>
            {/* Slider item for first category */}
            <div className={`slide-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
              <div className="row slide-1 content g-1">
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/computer-lab.png"
                    alt="Sample Image 1"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">COMPUTER LABS</h6>
                      <p>Equipped with advanced technology, students experiment with coding, programming, and digital tools, fostering technological fluency.</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 image-wrapper">
                  <Image
                    src="/images/slider/experiment/big-slider-3.png"
                    alt="Sample Image 2"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">STREAM</h6>
                      <p>Hands-on experiments and STEAM projects boost critical thinking, while the Computer Lab enhances coding skills and technological fluency.</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/stream.png"
                    alt="Sample Image 3"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
              </div>
            </div>

            {/* Slider item for second category */}
            <div className={`slide-item ${activeCategory === 'category2' ? 'active' : ''}`} id='category2'>
              <div className="row slide-1 content g-1">
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/photography.png"
                    alt="Sample Image 1"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">PHOTOGRAPHY</h6>
                      <p>Fosters creativity and storytelling as students explore visual expression, capturing moments and perspectives through the art of photography.</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 image-wrapper">
                  <Image
                    src="/images/slider/experiment/big-slider-6.png"
                    alt="Sample Image 2"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">PERFORMING ARTS</h6>
                      <p>Cultivating creativity while boosting cognitive, emotional and motor skill development in students.</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/performing-arts.png"
                    alt="Sample Image 3"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
              </div>
            </div>

            {/* Slider item for third category */}
            <div className={`slide-item ${activeCategory === 'category3' ? 'active' : ''}`} id='category3'>
              <div className="row slide-1 content g-1">
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/debate.png"
                    alt="Sample Image 1"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">DEBATE</h6>
                      <p>Enhances critical thinking, communication, and confidence as students engage in structured discussions and express diverse perspectives.</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 image-wrapper">
                  <Image
                    src="/images/slider/experiment/big-slider-9.png"
                    alt="Sample Image 2"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-2 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">POTTERY</h6>
                      <p>Encourages creativity and hands-on learning, allowing students to shape their ideas while enhancing motor skills and focus.</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 image-wrapper">
                  <Image
                    src="/images/slider/experiment/pottery.png"
                    alt="Sample Image 3"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeExperimentSectionSlider3;
