import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block", right: "25px" }} // Adjust the position as needed
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block", left: "25px" }} // Adjust the position as needed
      onClick={onClick}
    />
  );
};

const HomeTestimonialSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: '50px',
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
    <div className="section">
      <div className='fp-tableTestimonials'>
        <div className="container py-1"> 
          <div className="row align-items-center">
            <div className="col-md-12 learn text-center text-md-center">
              <h1 className="main-heading"> TESTIMONIALS
                <span className="lineclass" />
                <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                  WHAT LEGENDS SAY ABOUT US
                </span>
              </h1>
              {/* <div className="rating-container-center">
                <span className="stars">★★★★★</span>
                <span className="rating-text">5.0 out of 5 – Based on</span>
                <a href="#" className="review-count">457+</a>
                <span className="rating-text">Certified Reviews</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container" id='testimonial-slider-disable'>
          <Slider {...settings}>
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
            <a href="#">View More</a>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HomeTestimonialSection