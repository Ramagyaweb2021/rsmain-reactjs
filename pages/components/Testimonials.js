import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Testimonials = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of slides visible at once by default
    slidesToScroll: 1,
    autoplay: false, // Enable auto sliding
    autoplaySpeed: 1000, // Auto slide every 1 second
    responsive: [
      {
        breakpoint: 1441, // Devices with a width of less than 1441px
        settings: {
          slidesToShow: 6, // Show 4 slides
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 2 slides on screens less than 1024px wide
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on screens less than 600px wide
        }
      }
    ]
  };  
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6, // Number of slides visible at once
  //   slidesToScroll: 1,
  //   autoplay: false,             // Enable auto sliding
  //   autoplaySpeed: 1000,        // Auto slide every 1 seconds
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // };

  const data = [
    { 
      title: 'Honble Smt. Smriti Zubin Irani', 
      content: 'Minister of Women and Child Development, and also Minister of Minority Affairs', 
      value: 'RS Noida Branch', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      videoUrl: 'https://www.youtube.com/watch?v=1yWQuKlJqTc' // Example video URL
    },
    { 
      title: 'Zakka Jacob', 
      content: 'Anchor and Editor-Output at CNN-News18', 
      value: 'RSA Noida', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/jacob.webp',
      videoUrl: 'https://www.youtube.com/watch?v=EJW8mgGx8dA' // Example video URL
    },
    { 
      title: 'Dav Whatmore', 
      content: 'Australian cricketer', 
      value: 'RS Noida', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/dav-more.webp',
      videoUrl: 'https://www.youtube.com/watch?v=GS5QKlc0a4Y' // Example video URL
    },
    { 
      title: 'Abhinav Bindra', 
      content: 'Olympic Gold Medalist', 
      value: 'RS Noida Extension', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/abhinav-bindra.webp',
      videoUrl: 'https://www.youtube.com/watch?v=Hmp_tCEB0Y4' // Example video URL
    },
    { 
      title: 'Mr. Mahesh Shrinivas Bhupathi', 
      content: 'International Tennis Player', 
      value: 'RS Noida Branch', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/bhupati.webp',
      videoUrl: 'https://www.youtube.com/watch?v=KSBSoF2qYqc' // Example video URL
    },
    { 
      title: 'Honble Smt. Smriti Zubin Irani', 
      content: 'Minister of Women and Child Development, and also Minister of Minority Affairs', 
      value: 'RS Noida Branch', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      videoUrl: 'https://www.youtube.com/watch?v=1yWQuKlJqTc' // Example video URL
    },
    { 
      title: 'Zakka Jacob', 
      content: 'Anchor and Editor-Output at CNN-News18', 
      value: 'RSA Noida', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/jacob.webp',
      videoUrl: 'https://www.youtube.com/watch?v=EJW8mgGx8dA' // Example video URL
    },
    { 
      title: 'Dav Whatmore', 
      content: 'Australian cricketer', 
      value: 'RS Noida', 
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/dav-more.webp',
      videoUrl: 'https://www.youtube.com/watch?v=GS5QKlc0a4Y' // Example video URL
    },
  ];

  return (
    <>
      <section className='learn bg-tropical-mist' id="testimonials">
      <div className='fp-tableTestimonials'>
      <div className="container py-1" >
        <div className="row align-items-center">
          {/* Left Side - Heading */}
          <div className="col-md-12 learn text-center text-md-center">
          <h1 className="main-heading"> TESTIMONIALS
            <span className="lineclass" />
            <span
              className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              WHAT LEGENDS SAY ABOUT US
            </span>
          </h1>
            {/* <h2 className="main-heading wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>TESTIMONIALS</h2> */}
            <div className="rating-container-center">
              <span className="stars">★★★★★</span>
              <span className="rating-text">5.0 out of 5 – Based on</span>
              <a href="#" className="review-count">457+</a>
              <span className="rating-text">Certified Reviews</span>
            </div>
          </div>
        </div>
      </div>
      {/* Slider section */}
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="slider-item">
              <div className="number">{index + 1}</div>
              <div className="image-container-testimonial" style={{background:"#ffffff"}}>
                <Image src={item.img} alt={item.title} className="slider-image" width={310} height={265} />
                <div className="play-button-overlay">
                  <a href={item.videoUrl} target='_blank' rel='noopener noreferrer'>
                    <Image src="/images/video-play.webp" className="play-button" alt="play-button" width={96} height={96}/>
                    {/* <span className="play-button">&#9658;</span> */}
                  </a>
                </div>
              </div>
              <div className='testimonial-content'>
                <h3>{item.title}</h3>
                {/* <p>{item.content}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* View more button */}
      <div className="d-flex justify-content-center align-items-center mt-15">
            <div className="learn-more-button">
              <a href="#">View More</a>
            </div>
          </div>
      </div>
        </section>
    </>
  );
}

export default Testimonials;