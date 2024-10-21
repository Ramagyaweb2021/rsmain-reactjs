import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

function SingleRowSlider() {
  const [rightToLeftIndex, setRightToLeftIndex] = useState(0);
  const sliderRef = useRef(null); // Ref for the first slider (First Row)
  const sliderRef2 = useRef(null); // Ref for the second slider (Third Column)
  const sliderRef3 = useRef(null); // Ref for the first column (Image Slider - Right to Left)
  const sliderRef4 = useRef(null); // Ref for the fourth slider (fourth Row)

  const handleRightToLeftAfterChange = (index) => {
    setRightToLeftIndex(index); // Sync with the active index
  };

  // Settings for the first slider (Right to Left)
  const rightToLeftSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: false,
    draggable: false,
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

  // Settings for the second slider (Left to Right)
  const leftToRightSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: false,
    draggable: false,
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
  const handleRtlAfterChange = (index) => {
    console.log(`Right to Left Slider changed to slide ${index}`);
  };
  
  // Settings for the third slider (RTL)
  const RtlSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    swipe: false,
    draggable: false,
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
    afterChange: handleRtlAfterChange, // Handle slide change
  };
  

  

  // Handler to control both sliders when a list item is clicked
  const handleListItemClick = (index) => {
    setRightToLeftIndex(index); // Update the index
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Control the first slider (First Row)
    }
    if (sliderRef2.current) {
      sliderRef2.current.slickGoTo(index); // Control the second slider (Third Column)
    }
    if (sliderRef3.current) {
      sliderRef3.current.slickGoTo(index); // Control the first column slider
    }
    if (sliderRef4.current) {
      sliderRef4.current.slickGoTo(index); // Control the fourth slider
    }
  };
  
  return (
<section className="learn section fp-section fp-table fp-completely" id="innovate">
  <div className="fp-tableInnovate">
    <div className="container">
    <h1>INVOVATE<span className="lineclass" />
      <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
        INNOVATE YOUR INTEREST WITH US
      </span>
    </h1>
    {/* <p>Cutting-edge programs designed to ignite creativity, critical thinking, and problem-solving skills in students. By exploring real-world issues through cultural and sensory perspectives, students develop effective, innovative solutions.
    We are committed to nurturing the next generation of innovators, preparing them to lead and excel in a rapidly changing world!
    </p> */}
    </div>
  <div className="container-fluid">
      {/* Slider first row section (Right to Left) */}
      <Slider ref={sliderRef} {...rightToLeftSettings}>
        {/* Slide 1 */}
        <div className="slide">
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
        {/* Slide 2 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-6 col-sm-12 col-6 text-wrapper">
              <div className="box">
                <div className="flex">
                  <h6 className="colr1">COLLOQUIUM</h6>
                  <p>Applying skills in technology to solve real world problems</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-6 image-wrapper">
              <Image
                src="/images/slider/3.webp"
                alt="Sample Image 3"
                width={287}
                height={200}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-12 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/2.webp"
                alt="Sample Image 2"
                width={604}
                height={200}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </Slider>

      {/* Slider second slider or row section (leftToRight) */}
      <div className="container-fluid mt-15" id="gutter-space">
        <div className="row">
          {/* First Column (Image Slider - leftToRight) */}
          <div className="col-md-4">
            <Slider ref={sliderRef2} {...leftToRightSettings}>
              <div>
                <Image
                  src="/images/slider/1.webp"
                  alt="Sample Image 1"
                  width={287}
                  height={200}
                  className="card-img-top"
                />
              </div>
              <div>
                <Image
                  src="/images/slider/2.webp"
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
                <span>Action</span>
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
          <div className="col-12 col-md-4 mobile-gutter g-0 g-md-2">
            <Slider ref={sliderRef3} {...leftToRightSettings}>
              <div className="slide">
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
                        <h6 className="colr1">COLLOQUIUM</h6>
                        <p>Applying skills in technology to solve real world problems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="row slide-content">
                  <div className="col-md-6 col-sm-12 col-6 image-wrapper">
                    <Image
                      src="/images/slider/4.webp"
                      alt="Sample Image 4"
                      width={287}
                      height={200}
                      className="card-img-top"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-6 text-wrapper">
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

       {/* Slider third slider or row section (Rtl) */}
       <div className="container-fluid mt-20" id="gutter-space">
        <Slider ref={sliderRef4} {...RtlSettings}>
          {/* Slide 1 */}
          <div className="slide">
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
          {/* Slide 2 */}
          <div className="slide">
            <div className="row slide-content">
              <div className="col-md-12 col-sm-12 image-wrapper">
                <Image
                  src="/images/slider/2.webp"
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
                    <h6 className="colr1">COLLOQUIUM</h6>
                    <p>Applying skills in technology to solve real world problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div> 
    </div>   
  </div>

   </section>
  );
}

export default SingleRowSlider;
