import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";

const HomeExperimentSectionSlider2 = () => {
  const [activeCategory, setActiveCategory] = useState('category1'); // Default active category

  // Slick slider settings
  const ExperimentSlider2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <>
      {/* First Slick slider section */}
      <div className="row slide-1 content g-1">
        <div className="col-md-4">
          <Slider {...ExperimentSlider2}>
            {activeCategory === 'category1' && (
              <div>
                <Image
                  src="/images/slider/experiment/big-slider-2.png"
                  alt="Sample Image 1"
                  width={287}
                  height={200}
                  className="card-img-top"
                />
              </div>
            )}
            {activeCategory === 'category2' && (
              <div>
                <Image
                  src="/images/slider/experiment/big-slider-5.png"
                  alt="Sample Image 2"
                  width={287}
                  height={200}
                  className="card-img-top"
                />
              </div>
            )}
            {activeCategory === 'category3' && (
              <div>
                <Image
                  src="/images/slider/experiment/big-slider-8.png"
                  alt="Sample Image 3"
                  width={287}
                  height={200}
                  className="card-img-top"
                />
              </div>
            )}
          </Slider>
        </div>

        <div className="col-md-3 explore">
          <div className="offset_l_r_10 bluebox" id="list-item">
            <ol className="carousel-catg">
              <li
                className={`btn1 ${activeCategory === 'category1' ? 'active' : ''}`}
                onClick={() => setActiveCategory('category1')}
              >
                category1
              </li>
              <li
                className={`btn1 ${activeCategory === 'category2' ? 'active' : ''}`}
                onClick={() => setActiveCategory('category2')}
              >
                category2
              </li>
              <li
                className={`btn1 ${activeCategory === 'category3' ? 'active' : ''}`}
                onClick={() => setActiveCategory('category3')}
              >
                category3
              </li>
            </ol>
          </div>
        </div>

        {/* Second Slick slider section */}
        <div className="col-md-4">
          <Slider {...ExperimentSlider2}>
            {activeCategory === 'category1' && (
              <div className="row slide-1 content g-1">
                <div className="col-6 image-wrapper">
                  <Image
                    src="/images/slider/experiment/science-lab.png"
                    alt="Sample Image 4"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-6 text-wrapper">
                  <div className="box">
                    <h6 className="colr1">SCIENCE LABS</h6>
                    <p>Hands-on exploration and experimentation, allowing students to apply theoretical concepts and ignite curiosity through practical learning experiences.</p>
                  </div>
                </div>
              </div>
            )}
            {activeCategory === 'category2' && (
              <div className="row slide-1 content g-1">
                <div className="col-6 image-wrapper">
                  <Image
                    src="/images/slider/experiment/film-making.png"
                    alt="Sample Image 5"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-6 text-wrapper">
                  <div className="box">
                    <h6 className="colr1">FILM MAKING</h6>
                    <p>Explore creativity through photography and filmmaking, where students capture stories and experiment with visual storytelling techniques.</p>
                  </div>
                </div>
              </div>
            )}
            {activeCategory === 'category3' && (
              <div className="row slide-1 content g-1">
                <div className="col-6 image-wrapper">
                  <Image
                    src="/images/slider/experiment/character-enhancement.png"
                    alt="Sample Image 6"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-6 text-wrapper">
                  <div className="box">
                    <h6 className="colr1">CHARACTER ENHANCEMENT</h6>
                    <p>Geeta Saar, TED Talks, and Circle Time foster emotional intelligence, leadership and personal growth in students.</p>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeExperimentSectionSlider2;
