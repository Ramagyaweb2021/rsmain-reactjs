// import React from 'react'
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeExperimentSectionSlider1 = () => {
  const [activeCategory, setActiveCategory] = useState('category1'); // Default active category
  
  // Settings for the Slick slider
  const ExperimentSlider1 = {
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
          <Slider {...ExperimentSlider1}>
            {/* Slider item for first category */}
            <div className={`slide-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
            <div className="row slide-content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/jadu-gyan.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">JODO GYAN</h6>
                          <p>Enhancing number sense and problem-solving through hands-on, innovative learning methods, building a solid math foundation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-1.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">CLUBS</h6>
                          <p>Clubs foster creativity, collaboration and life skills, while sharpens improvisation, confidence and communication.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/clubs.png"
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
            <div className="row slide-content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/dance.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DANCE</h6>
                          <p>Inspires creativity and self-expression, enabling students to explore movement while enhancing coordination, confidence, and emotional connection through rhythm.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-4.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DRAMA</h6>
                          <p>Encourages self-expression and creativity, allowing students to develop improvisation skills and gain confidence through engaging performances and role-playing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/drama.png"
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
            <div className="row slide-content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/book-review.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">BOOK REVIEWS</h6>
                          <p>Sharpens critical thinking as students discuss themes, characters, and plots from the Book of the Month.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-7.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">MUSIC</h6>
                          <p>A vital part of education, teaching teamwork, patience, and creativity through both Indian and Western music forms.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/music.png"
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

export default HomeExperimentSectionSlider1;
