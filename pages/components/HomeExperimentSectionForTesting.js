import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HomeExperimentSection = () => {
  const [enabledCategory1, setEnabledCategory1] = useState(true);
  const [enabledCategory2, setEnabledCategory2] = useState(false);
  const [enabledCategory3, setEnabledCategory3] = useState(false);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: false,
    draggable: false,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    rtl: true,
  };

  // Function to update sliders on category enable
  const updateSliders = (index) => {
    if (sliderRef1.current) {
      sliderRef1.current.slickGoTo(index);
    }
    if (sliderRef2.current) {
      sliderRef2.current.slickGoTo(index);
    }
    if (sliderRef3.current) {
      sliderRef3.current.slickGoTo(index);
    }
    if (sliderRef4.current) {
      sliderRef4.current.slickGoTo(index);
    }
  };

  // Handler to control category enabling
  const handleCategoryChange = (category) => {
    if (category === 'category1') {
      setEnabledCategory1(true);
      setEnabledCategory2(false);
      setEnabledCategory3(false);
    }
    if (category === 'category2') {
      setEnabledCategory1(false);
      setEnabledCategory2(true);
      setEnabledCategory3(false);
    }
    if (category === 'category3') {
      setEnabledCategory1(false);
      setEnabledCategory2(false);
      setEnabledCategory3(true);
    }
  };

  useEffect(() => {
    // Ensure sliders are reset and re-initialized on category change
    if (sliderRef1.current) {
      sliderRef1.current.slickPause();
      sliderRef1.current.slickPlay();
    }
    if (sliderRef2.current) {
      sliderRef2.current.slickPause();
      sliderRef2.current.slickPlay();
    }
    if (sliderRef3.current) {
      sliderRef3.current.slickPause();
      sliderRef3.current.slickPlay();
    }
    if (sliderRef4.current) {
      sliderRef4.current.slickPause();
      sliderRef4.current.slickPlay();
    }
  }, [enabledCategory1, enabledCategory2, enabledCategory3]);

  return (
    <div className="learn fp-section-tableExperiment">
      <div className="container learn my-custom-experiment">
        <h1>
          EXPERIMENT
          <span className="lineclass" />
          <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
            WORKSHOPS, PROGRAMS AND EXPERIENCES
          </span>
        </h1>
        <p>
          Encouraging hands-on experiments that bring theory to life to enhance student’s horizons
          across various disciplines through experiential learning.
        </p>
      </div>

      <div className="container-fluid">
        {/* First Row Slider Section */}
        <div className="row slide-1 content g-0">
          <Slider ref={sliderRef1} {...sliderSettings}>
            {enabledCategory1 && (
              <div className="slide-1">
                <div className="row slide-content">
                  <div className="col-md-6 col-sm-12 col-6 image-wrapper">
                    <Image
                      src="/images/slider/1.webp"
                      alt="Sample Image 1"
                      width={287}
                      height={200}
                      className="card-img-top"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-6 text-wrapper">
                    <div className="box">
                      <div className="flex">
                        <h6 className="colr1">COLLOQUIUM</h6>
                        <p>Applying skills in technology to solve real world problems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {enabledCategory2 && (
              <div className="slide-1">
                <div className="row slide-content">
                  <div className="col-md-6 col-sm-12 col-6 image-wrapper">
                    <Image
                      src="/images/slider/2.webp"
                      alt="Sample Image 2"
                      width={287}
                      height={200}
                      className="card-img-top"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-6 text-wrapper">
                    <div className="box">
                      <div className="flex">
                        <h6 className="colr1">CONFERENCE</h6>
                        <p>Exploring new ideas for the future of education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {enabledCategory3 && (
              <div className="slide-1">
                <div className="row slide-content">
                  <div className="col-md-6 col-sm-12 col-6 image-wrapper">
                    <Image
                      src="/images/slider/3.webp"
                      alt="Sample Image 3"
                      width={287}
                      height={200}
                      className="card-img-top"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-6 text-wrapper">
                    <div className="box">
                      <div className="flex">
                        <h6 className="colr1">WORKSHOP</h6>
                        <p>Collaborating on creative projects in diverse fields</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>

        {/* Second Row Slider Section */}
        <div className="row slide-1 content g-0" style={{ backgroundColor: "#fff" }}>
          <div className="col-md-4">
            <Slider ref={sliderRef2} {...sliderSettings}>
              {enabledCategory1 && <p>Hands-On. Minds-On. Limitless Learning</p>}
              {enabledCategory2 && <p>Where Imagination Takes Center Stage</p>}
              {enabledCategory3 && <p>Shaping Minds & Inspiring Creativity</p>}
            </Slider>
          </div>

          {/* Category Buttons */}
          <div className="col-md-4 explore">
            <div className="offset_l_r_10 bluebox" id="list-item">
              <ol className="carousel-catg">
                <li
                  className={`btn1 ${enabledCategory1 ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('category1')}
                >
                  Hands-On. Minds-On. Limitless Learning
                </li>
                <li
                  className={`btn1 ${enabledCategory2 ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('category2')}
                >
                  Where Imagination Takes Center Stage
                </li>
                <li
                  className={`btn1 ${enabledCategory3 ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('category3')}
                >
                  Shaping Minds & Inspiring Creativity
                </li>
              </ol>
            </div>
          </div>

          <div className="col-md-4">
            <Slider ref={sliderRef3} {...sliderSettings}>
              {enabledCategory1 && <p>Hands-On. Minds-On. Limitless Learning</p>}
              {enabledCategory2 && <p>Where Imagination Takes Center Stage</p>}
              {enabledCategory3 && <p>Shaping Minds & Inspiring Creativity</p>}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExperimentSection;
