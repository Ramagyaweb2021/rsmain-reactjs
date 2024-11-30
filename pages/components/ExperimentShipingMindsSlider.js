import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Sample events data
const events = [
  {
    title: 'BOOK REVIEWS',
    description: 'Sharpens critical thinking as students discuss themes, characters, and plots from the Book of the Month.',
    image: '/images/experiment/book-review.png',
  },
  {
    title: 'MUSIC',
    description: 'A vital part of education, teaching teamwork, patience, and creativity through both Indian and Western music forms.',
    image: '/images/experiment/music.png',
  },
  {
    title: 'CHARACTER ENHANCEMENT',
    description: '"Geeta Saar," TED Talks, and Circle Time foster emotional intelligence, leadership and personal growth in students.',
    image: '/images/experiment/character-enhancement.png',
  },
  {
    title: 'DEBATE',
    description: 'Enhances critical thinking, communication, and confidence as students engage in structured discussions and express diverse perspectives.',
    image: '/images/experiment/debate.png',
  },
  {
    title: 'POTTERY',
    description: 'Encourages creativity and hands-on learning, allowing students to shape their ideas while enhancing motor skills and focus.',
    image: '/images/experiment/pottery.png',
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

const ExperimentShipingMindsSlider = () => {
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

              {/* Display the title for all cards */}
              <div style={{ textAlign: 'center', marginTop: '0', backgroundColor: activeSlide === index ? "#002c39" : "#E7EAEB", padding: "25px" }}>
                <h3 style={{ color: activeSlide === index ? "white" : "#002c39" }}>{event.title}</h3>
              </div>

              {/* Display the down arrow only for the active slide */}
              {activeSlide === index && (
                <div style={{ textAlign: 'center', marginTop: '-22px' }}>
                  <span
                    style={{
                      fontSize: '50px',
                      color: '#002c39',
                      transform: 'rotate(90deg)', // Rotate arrow for a downward effect
                    }}
                  >
                    ▼
                  </span>
                </div>
              )}

              <div className="card-content">
                {activeSlide === index && (
                  <p className="description" style={{ textAlign: "center" }}>{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExperimentShipingMindsSlider;
