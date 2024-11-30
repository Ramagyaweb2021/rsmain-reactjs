import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  { image: "/images/award-slider/1.jpg" },
  { image: "/images/award-slider/2.jpg" },
  { image: "/images/award-slider/3.jpg" },
  { image: "/images/award-slider/4.jpg" },
  { image: "/images/award-slider/5.jpg" },
  { image: "/images/award-slider/6.jpg" },
  { image: "/images/award-slider/7.jpg" },
  { image: "/images/award-slider/8.jpg" },
  { image: "/images/award-slider/9.jpg" },
  { image: "/images/award-slider/10.jpg" },
  { image: "/images/award-slider/11.jpg" },
  { image: "/images/award-slider/12.jpg" },
  { image: "/images/award-slider/13.jpg" },
  { image: "/images/award-slider/14.jpg" },
  { image: "/images/award-slider/15.jpg" },
  { image: "/images/award-slider/16.jpg" },
  { image: "/images/award-slider/17.jpg" },
  { image: "/images/award-slider/18.jpg" },
  { image: "/images/award-slider/19.jpg" },
  { image: "/images/award-slider/20.jpeg" },
];

const NoidaAwardsInternalSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0", // Ensure proper alignment for zoom
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (_, nextIndex) => setActiveSlide(nextIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-section">
      <div className="container my-5">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`card-innovate ${index === activeSlide ? "active" : ""}`}
            >
              <div className="slider-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={461}
                  height={242}
                  layout="responsive"
                />
              </div>
              <div className="slider-content">
                <h5>{event.title}</h5>
                {index === activeSlide && <p style={{fontSize:"12px"}}>{event.description}</p>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slider-section {
          margin-top: -50px;
        }
        .card-innovate {
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.5;
          transform: scale(0.9);
        }
        .card-innovate.active {
          opacity: 1;
          transform: scale(1.1);
        }
        .slider-content {
          text-align: center;
          background: #fff;
          padding: 20px;
          border: 1px solid #FFDF8B;
          transition: background 0.3s ease;
        }
        .card-innovate.active .slider-content {
          background: #fff;
        }
      `}</style>
    </section>
  );
};

export default NoidaAwardsInternalSlider;
