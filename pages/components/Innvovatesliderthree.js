import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

function SingleRowSlider() {
  const [rightToLeftIndex, setRightToLeftIndex] = useState(0);

  const handleRightToLeftAfterChange = (index) => {
    setRightToLeftIndex(index);
  };

  const rightToLeftSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    swipe: true,
    draggable: true,
    dots: false,
    dotsClass: "slick-dots custom-dots",
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: true,
    afterChange: handleRightToLeftAfterChange, // Handle slide change
  };

  return (
    <div className="slider-container-fluid">
      {/* Slider first row section (Right to Left) */}
      <Slider {...rightToLeftSettings}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-6 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/1.jpg"
                alt="Sample Image 1"
                width={287}
                height={200}
                className="card-img-top"
              />
            </div>
            <div className="col-md-6 col-sm-12 text-wrapper">
              <div className="box">
                <div className="flex">
                  <h6 className="colr1">COLLOQUIUM</h6>
                  <p>Applying skills in technology to solve real world problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-12 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/2.jpg"
                alt="Sample Image 2"
                width={604}
                height={200}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-6 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/3.jpg"
                alt="Sample Image 3"
                width={287}
                height={200}
                className="card-img-top"
              />
            </div>
            <div className="col-md-6 col-sm-12 text-wrapper">
              <div className="box">
                <div className="flex">
                  <h6 className="colr1">COLLOQUIUM</h6>
                  <p>Applying skills in technology to solve real world problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SingleRowSlider;
