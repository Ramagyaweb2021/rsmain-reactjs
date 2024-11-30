import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "MINDBOX",
    description: "Fosters creativity and problem-solving skills by engaging students in hands-on projects that address real-world challenges.",
    image: "/images/innovate/mindbox.png",
  },
  {
    title: "STREAM",
    description: "Cultivates entrepreneurial skills and innovative thinking, preparing students to transform ideas into reality for future industries.",
    image: "/images/innovate/stream.png",
  },
  {
    title: "DESIGN THINKING",
    description: "Empowers students to creatively tackle real-world problems, fostering innovative solutions through diverse cultural and sensory insights.",
    image: "/images/innovate/design-thinking.png",
  },
  {
    title: "ROBOTICS & DESIGN LAB",
    description: "Equips students with practical skills in robotics and design, enhancing their readiness for future careers through hands-on projects and expert guidance.",
    image: "/images/innovate/robotics-design.png",
  },
];

const InnovateInternalPageSlider = () => {
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
      <div className="container-fluid my-5">
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

export default InnovateInternalPageSlider;
