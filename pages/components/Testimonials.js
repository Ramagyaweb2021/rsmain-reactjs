import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides visible at once
    slidesToScroll: 1,
    autoplay: true,             // Enable auto sliding
    autoplaySpeed: 1000,        // Auto slide every 1 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
    }
  ];

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side - Heading */}
          <div className="col-md-12 text-center text-md-center">
            <h2 className="main-heading wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>TESTIMONIALS</h2>
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
                    <Image src="/images/play-button.png" className="play-button" alt="play-button" width={96} height={96}/>
                    {/* <span className="play-button">&#9658;</span> */}
                  </a>
                </div>
              </div>
              <div className='testimonial-content'>
                {/* <h3>{item.title}</h3> */}
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* View more button */}
      <div className="d-flex justify-content-center align-items-center mt-30">
          <a href="#" className="btn custom-btn">View More</a>
      </div>
    </>
  );
}

export default Testimonials;