import React, { useState } from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HomeExperimentSection = () => {
  const [activeCategory, setActiveCategory] = useState('category1');

  // Settings for the Slick sliders
  const ExperimentSlider1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const ExperimentSlider2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    autoplay: true,
  };

  const ExperimentSlider3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className="learn fp-section-tableExperiment">
        <div className="container">
          <h1>EXPERIMENT<span className="lineclass" />
            <span className="sub-heading">
              WORKSHOPS, PROGRAMS AND EXPERIENCES
            </span>
          </h1>
          <p>Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning...</p>
        </div>

        <div className='container-fluid'>
          {/* First Row slider Section */}
          <div className="row slide-1 content g-1">
              <Slider {...ExperimentSlider1}>
               {activeCategory === 'category1' && (
                  <div className='row'>
                     <div className="row slide-content">
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
                )}
                 {activeCategory === 'category2' && (
                   <div className='row'>
                   <div className="row slide-content">
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
                        src="/images/slider/1.webp"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                     <div className="box">
                        <div className="flex">
                          <h6 className="colr1">COLLOQUIUM</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/1.webp"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                )}
                {activeCategory === 'category3' && (
                  <div className='row'>
                    <div className="row slide-content">
                        <div className="col-2 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                        <div className="col-2 text-wrapper">
                          <div className="box">
                            <div className="flex">
                              <h6 className="colr1">COLLOQUIUM</h6>
                              <p>Applying skills in technology to solve real world problems</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                        <div className="col-2 text-wrapper">
                        <div className="box">
                            <div className="flex">
                              <h6 className="colr1">COLLOQUIUM</h6>
                              <p>Applying skills in technology to solve real world problems</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                      </div>
                 </div>
                )}
              </Slider>
          </div>

          {/* Second Row slider Section */}
          <div className="row slide-1 content g-1" style={{backgroundColor:"red"}}>
            <div className="col-md-4">
              <Slider {...ExperimentSlider2}>
                {activeCategory === 'category1' && (
                  <div>
                    <h2>Content for Category 1 Second Row slider Section</h2>
                  </div>
                )}
                {activeCategory === 'category2' && (
                  <div>
                    <h2>Content for Category 2 Second Row slider Section</h2>
                  </div>
                )}
                {activeCategory === 'category3' && (
                  <div>
                    <h2>Content for Category 3 Second Row slider Section</h2>
                  </div>
                )}
              </Slider>
            </div>

            {/* Category button section */}
            <div className="col-md-3 explore">
              <div className="offset_l_r_10 bluebox" id="list-item">
                <ol className="carousel-catg">
                  <li
                    className={`btn1 ${activeCategory === 'category1' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory('category1');
                    }}
                  >
                    category1
                  </li>
                  <li
                    className={`btn1 ${activeCategory === 'category2' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory('category2');
                    }}
                  >
                    category2
                  </li>
                  <li
                    className={`btn1 ${activeCategory === 'category3' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory('category3');
                    }}
                  >
                    category3
                  </li>
                </ol>
              </div>
            </div>

            {/* Second Slick slider section for displaying category content */}
            <div className="col-md-4">
              <Slider {...ExperimentSlider2}>
                {activeCategory === 'category1' && (
                  <div>
                    <h2>Content for Category 1</h2>
                  </div>
                )}
                {activeCategory === 'category2' && (
                  <div>
                    <h2>Content for Category 2</h2>
                  </div>
                )}
                {activeCategory === 'category3' && (
                  <div>
                    <h2>Content for Category 3</h2>
                  </div>
                )}
              </Slider>
            </div>
          </div>

          {/* Third Row slider Section */}
          <div className="row slide-1 content g-1">
              <Slider {...ExperimentSlider3}>
               {activeCategory === 'category1' && (
                  <div className='row'>
                     <div className="row slide-content">
                      <div className="col-2 image-wrapper">
                        <Image
                          src="/images/slider/1.webp"
                          alt="Sample Image 1"
                          width={287}
                          height={200}
                          className="card-img-top"
                        />
                      </div>
                      <div className="col-2 text-wrapper">
                        <div className="box">
                          <div className="flex">
                            <h6 className="colr1">COLLOQUIUM 1</h6>
                            <p>Applying skills in technology to solve real world problems</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 image-wrapper">
                        <Image
                          src="/images/slider/1.webp"
                          alt="Sample Image 1"
                          width={287}
                          height={200}
                          className="card-img-top"
                        />
                      </div>
                      <div className="col-2 text-wrapper">
                       <div className="box">
                          <div className="flex">
                            <h6 className="colr1">COLLOQUIUM</h6>
                            <p>Applying skills in technology to solve real world problems</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 image-wrapper">
                        <Image
                          src="/images/slider/1.webp"
                          alt="Sample Image 1"
                          width={287}
                          height={200}
                          className="card-img-top"
                        />
                      </div>
                    </div>
                  </div>
                )}
                 {activeCategory === 'category2' && (
                   <div className='row'>
                   <div className="row slide-content">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/1.webp"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">COLLOQUIUM</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/1.webp"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                     <div className="box">
                        <div className="flex">
                          <h6 className="colr1">COLLOQUIUM</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/1.webp"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                )}
                {activeCategory === 'category3' && (
                  <div className='row'>
                    <div className="row slide-content">
                        <div className="col-2 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                        <div className="col-2 text-wrapper">
                          <div className="box">
                            <div className="flex">
                              <h6 className="colr1">COLLOQUIUM</h6>
                              <p>Applying skills in technology to solve real world problems</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                        <div className="col-2 text-wrapper">
                        <div className="box">
                            <div className="flex">
                              <h6 className="colr1">COLLOQUIUM</h6>
                              <p>Applying skills in technology to solve real world problems</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 image-wrapper">
                          <Image
                            src="/images/slider/1.webp"
                            alt="Sample Image 1"
                            width={287}
                            height={200}
                            className="card-img-top"
                          />
                        </div>
                      </div>
                 </div>
                )}
              </Slider>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default HomeExperimentSection;
