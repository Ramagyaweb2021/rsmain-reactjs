import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Sample events data
const events = [
  {
    title: "SCIENCE LABS",
    description:
      "Hands-on exploration and experimentation, allowing students to apply theoretical concepts and ignite curiosity through practical learning experiences.",
    image: "/images/experiment/science-lab.png",
  },
  {
    title: "JODO GYAN",
    description:
      "Enhancing number sense and problem-solving through hands-on, innovative learning methods, building a solid math foundation.",
    image: "/images/experiment/jadu-gyan.png",
  },
  {
    title: "CLUBS",
    description:
      "Clubs foster creativity, collaboration and life skills, while sharpens improvisation, confidence and communication.",
    image: "/images/experiment/club.png",
  },
  {
    title: "COMPUTER LABS",
    description:
      "Equipped with advanced technology, students experiment with coding, programming, and digital tools, fostering technological fluency.",
    image: "/images/experiment/computer-lab.png",
  },
  {
    title: "STEAM",
    description:
      "Hands-on experiments and STEAM projects boost critical thinking, while the Computer Lab enhances coding skills and technological fluency.",
    image: "/images/experiment/steam.png",
  },
];

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="custom-next-arrow"
    onClick={onClick}
    style={{
      position: "absolute",
      right: "100px",
      top: "35%",
      transform: "translateY(-50%)",
      zIndex: 1000,
      background: "none",
      border: "none",
      cursor: "pointer",
    }}
  >
    <Image
      src="/images/next.png" // Update with your arrow image path
      alt="Next"
      width={50}
      height={50}
    />
  </button>
);

// Custom Prev Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="custom-prev-arrow"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "100px",
      top: "35%",
      transform: "translateY(-50%)",
      zIndex: 1000,
      background: "none",
      border: "none",
      cursor: "pointer",
    }}
  >
    <Image
      src="/images/prev.png" // Update with your arrow image path
      alt="Previous"
      width={50}
      height={50}
    />
  </button>
);

const ExperimentHandsOmMindsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: true, // Enable custom arrows
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
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
      <div className="container-fluid my-1">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="card-experiment">
              <div className="slider-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={461}
                  height={242}
                  layout="responsive"
                />
              </div>

              {/* Title */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "0",
                  backgroundColor:
                    activeSlide === index ? "#002c39" : "#E7EAEB",
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    color: activeSlide === index ? "white" : "#002c39",
                  }}
                >
                  {event.title}
                </h3>
              </div>

              {/* Down Arrow for Active Slide */}
              {activeSlide === index && (
                <div style={{ textAlign: "center", marginTop: "-22px" }}>
                  <span
                    style={{
                      fontSize: "50px",
                      color: "#002c39",
                      transform: "rotate(90deg)", // Rotate arrow for a downward effect
                    }}
                  >
                    ▼
                  </span>
                </div>
              )}

              {/* Description */}
              <div className="card-content">
                {activeSlide === index && (
                  <p className="description" style={{ textAlign: "center" }}>
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExperimentHandsOmMindsSlider;