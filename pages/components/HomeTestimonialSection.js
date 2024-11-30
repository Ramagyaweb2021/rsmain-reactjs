import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const SampleNextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="custom-next-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: '10px',
      }}
    >
      <Image
        src="/images/next.png" // Replace with your next arrow image path
        alt="Next"
        width={50} // Adjust the width of the arrow image
        height={50} // Adjust the height of the arrow image
      />
    </button>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="custom-prev-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: '10px',
      }}
    >
      <Image
        src="/images/prev.png" // Replace with your prev arrow image path
        alt="Previous"
        width={50} // Adjust the width of the arrow image
        height={50} // Adjust the height of the arrow image
      />
    </button>
  );
};


const HomeTestimonialSection = () => {
  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  const data = [
    { 
      title: 'Honble Smt. Smriti Zubin Irani', 
      content: 'Minister of Women and Child Development, and also Minister of Minority Affairs', 
      value: 'RS Noida Branch', 
      img: '/images/testimonial-thumb/smiriti.png',
      videoUrl: 'https://www.youtube.com/watch?v=1yWQuKlJqTc'
    },
    { 
      title: 'Abhinav Bindra', 
      content: 'Olympic Gold Medalist', 
      value: 'RS Noida Extension', 
      img: '/images/testimonial-thumb/abhinav-bindra.png',
      videoUrl: 'https://www.youtube.com/watch?v=Hmp_tCEB0Y4'
    },
    { 
      title: 'Mr. Mahesh Shrinivas Bhupathi', 
      content: 'International Tennis Player', 
      value: 'RS Noida Branch', 
      img: '/images/testimonial-thumb/mahesh-bhupati.png',
      videoUrl: 'https://www.youtube.com/watch?v=KSBSoF2qYqc'
    },
    { 
      title: 'Dav Whatmore', 
      content: 'Australian Cricketer', 
      value: 'RS Noida Branch', 
      img: '/images/testimonial-thumb/dav-whatmore.png',
      videoUrl: 'https://www.youtube.com/watch?v=KSBSoF2qYqc'
    },
    { 
      title: 'Viswanathan Anand', 
      content: 'World Chess Champion', 
      value: 'RS Noida Branch', 
      img: '/images/testimonial-thumb/vishwanath-anand.png',
      videoUrl: 'https://www.youtube.com/watch?v=KSBSoF2qYqc'
    },
  ];

  return (
    <div className="learn fp-section tableTestimonials">
      <div className="container learn my-custom-testimonials">
        <div className="row align-items-center">
          <div className="col-md-12 learn text-center text-md-center">
            <h1 className="main-heading">
              TESTIMONIALS
              <span className="lineclass" />
              <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                VOICES THAT INSPIRE OUR JOURNEY
              </span>
            </h1>
            <p>We believe that the most powerful stories come from the experiences of those who have been a part of our family. Our testimonials reflect the trust, joy, and growth that students, parents, and even notable personalities have experienced with us. Each voice carries a unique perspective, adding to the rich tapestry of our community. Here’s what they have to say:</p>
          </div>
        </div>
        <div className="row" id='testimonial-slider'>
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="number">{index + 1}</div>
                <div className="image-container-testimonial">
                  <Image src={item.img} alt={item.title} className="slider-image" width={310} height={265} />
                  <div className="play-button-overlay">
                    <a href={item.videoUrl} target='_blank' rel='noopener noreferrer'>
                      <Image src="/images/youtube-play-icon.png" className="play-button" alt="play-button" width={96} height={96}/>
                    </a>
                  </div>
                </div>
                <div className='testimonial-content'>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-15">
          <div className="learn-more-button">
            <a href="testimonials">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialSection;
