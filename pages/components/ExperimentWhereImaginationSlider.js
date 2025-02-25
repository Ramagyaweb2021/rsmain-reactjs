import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Sample events data
const events = [
  {
    title: 'DANCE',
    description: 'Inspires creativity and self-expression, enabling students to explore movement while enhancing coordination, confidence, and emotional connection through rhythm.',
    image: '/images/experiment/internal-category-2/dance.webp',
  },
  {
    title: 'DRAMA',
    description: 'Encourages self-expression and creativity, allowing students to develop improvisation skills and gain confidence through engaging performances and role-playing.',
    image: '/images/experiment/internal-category-2/drama.webp',
  },
  {
    title: 'FILM MAKING',
    description: 'Explore creativity through photography and filmmaking, where students capture stories and experiment with visual storytelling techniques.',
    image: '/images/experiment/internal-category-2/film-making.webp',
  },
  {
    title: 'PHOTOGRAPHY',
    description: 'Fosters creativity and storytelling as students explore visual expression, capturing moments and perspectives through the art of photography x',
    image: '/images/experiment/internal-category-2/photography.webp',
  },
  {
    title: 'VISUAL & PERFORMING ARTS',
    description: 'Cultivating creativity while boosting cognitive, emotional and motor skill development in students.',
    image: '/images/experiment/internal-category-2/performing-arts.webp',
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
      src="/images/next.webp" // Update with your arrow image path
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
      src="/images/prev.webp" // Update with your arrow image path
      alt="Previous"
      width={50}
      height={50}
    />
  </button>
);

const ExperimentWhereImaginationSlider = () => {
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
                  width={630}
                  height={300}
                  // layout="responsive"
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

export default ExperimentWhereImaginationSlider;
