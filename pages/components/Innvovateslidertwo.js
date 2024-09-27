import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

function SingleRowSlider() {
  const [rightToLeftIndex, setRightToLeftIndex] = useState(0);
  const sliderRef = useRef(null); // Ref for the first slider
  const sliderRef2 = useRef(null); // Ref for the second slider

  const handleRightToLeftAfterChange = (index) => {
    setRightToLeftIndex(index); // Sync with the active index
  };

  // Settings for the first slider (Right to Left)
  const rightToLeftSettings = {
    infinite: false,
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    swipe: false,
    draggable: false,
    cssEase: "ease-in-out",
    rtl: true,
    afterChange: handleRightToLeftAfterChange, // Sync after slide change
  };

  // Settings for the second slider (Left to Right)
  const leftToRightSettings = {
    infinite: false,
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    swipe: false,
    draggable: false,
    cssEase: "ease-in-out",
    afterChange: handleRightToLeftAfterChange, // Sync with the active index
  };

  // Handler to control both sliders when a list item is clicked
  const handleListItemClick = (index) => {
    setRightToLeftIndex(index); // Update the index
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Control the first slider
    }
    if (sliderRef2.current) {
      sliderRef2.current.slickGoTo(index); // Control the second slider
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* First Column (Image Slider - Right to Left) */}
        <div className="col-md-4">
          <Slider ref={sliderRef} {...rightToLeftSettings}>
            <div>
              <Image
                src="/images/slider/2.jpg"
                alt="Sample Image 1"
                width={287}
                height={200}
                className="card-img-top"
              />
            </div>
            <div>
              <Image
                src="/images/slider/1.jpg"
                alt="Sample Image 2"
                width={287}
                height={200}
                className="card-img-top"
              />
            </div>
          </Slider>
        </div>

        {/* Second Column (List for controlling sliders) */}
        <div className="col-md-4 explore">
          <div className="offset_l_r_10 bluebox" id="list-item">
            <div className="exp-our-mis">
              <span>Our Mission In Action</span>
            </div>
            <ol className="carousel-catg">
              {["Discovering talents & skills", "Culture of creativity", "Ethical, happy, purposeful citizens"].map(
                (item, index) => (
                  <li
                    key={index}
                    onClick={() => handleListItemClick(index)}
                    className={rightToLeftIndex === index ? "active" : ""}
                  >
                    {item}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>

        {/* Third Column (Image and Text Slider - Left to Right) */}
        <div className="col-md-4">
          <Slider ref={sliderRef2} {...leftToRightSettings}>
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
            <div className="slide">
              <div className="row slide-content">
                <div className="col-md-6 col-sm-12 image-wrapper">
                  <Image
                    src="/images/slider/4.jpg"
                    alt="Sample Image 4"
                    width={287}
                    height={200}
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-6 col-sm-12 text-wrapper">
                  <div className="box">
                    <div className="flex">
                      <h6 className="colr1">INNOVATION</h6>
                      <p>Encouraging innovation in the real world</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SingleRowSlider;
