import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';
import { Modal } from 'react-bootstrap'; // Import React Bootstrap Modal
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded

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
        src="/images/next.webp"
        alt="Next"
        width={50}
        height={50}
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
        src="/images/prev.webp"
        alt="Previous"
        width={50}
        height={50}
      />
    </button>
  );
};

const HomeTestimonialSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const sliderRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoUrl('');
  };

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
      img: '/images/testimonial-thumb/smiriti.webp',
      videoUrl: 'https://www.youtube.com/embed/1yWQuKlJqTc'
    },
    {
      title: 'Abhinav Bindra',
      content: 'Olympic Gold Medalist',
      value: 'RS Noida Extension',
      img: '/images/testimonial-thumb/abhinav-bindra.webp',
      videoUrl: 'https://www.youtube.com/embed/Hmp_tCEB0Y4'
    },
    {
      title: 'Mr. Mahesh Shrinivas Bhupathi',
      content: 'International Tennis Player',
      value: 'RS Noida Branch',
      img: '/images/testimonial-thumb/mahesh-bhupati.webp',
      videoUrl: 'https://www.youtube.com/embed/KSBSoF2qYqc'
    },
    {
      title: 'Dav Whatmore',
      content: 'Australian Cricketer',
      value: 'RS Noida Branch',
      img: '/images/testimonial-thumb/dav-whatmore.webp',
      videoUrl: 'https://www.youtube.com/embed/L9kJnwDDF34'
    },
    {
      title: 'Viswanathan Anand',
      content: 'World Chess Champion',
      value: 'RS Noida Branch',
      img: '/images/testimonial-thumb/vishwanath-anand.webp',
      videoUrl: 'https://www.youtube.com/embed/rYnH2LND6Lg'
    },
  ];

  return (
    <div className="learn">
      <div className="container my-custom-testimonials">
        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton style={{background:"#000"}}>
            {/* <Modal.Title>Video Testimonial</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            {videoUrl && (
              <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={videoUrl}
                  title="Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>

        <div className="row align-items-center">
          <div className="col-md-12 learn text-center text-md-center">
            <h1 className="main-heading scrollspy-p-0">
              TESTIMONIALS
              <span className="lineclass" />
              <span className="sub-heading animate-on-scroll">
                VOICES THAT INSPIRE OUR JOURNEY
              </span>
            </h1>
            <p className='scrollspy-p-0'>
              We believe that the most powerful stories come from the experiences of those who have been a part of our family. 
              Our testimonials reflect the trust, joy, and growth that students, parents, and even notable personalities have 
              experienced with us. Each voice carries a unique perspective, adding to the rich tapestry of our community. 
              Here’s what they have to say:
            </p>
          </div>
        </div>

        <div className="row" id="testimonial-slider">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <div key={index} className="slider-item">
                <div className="number">{index + 1}</div>
                <div className="image-container-testimonial">
                  <Image src={item.img} alt={item.title} className="slider-image" width={310} height={265} />
                  <div className="play-button-overlay" onClick={() => openModal(item.videoUrl)}>
                    <Image src="/images/youtube-play-icon.webp" className="play-button" alt="play-button" width={96} height={96}/>
                  </div>
                </div>
                <div className="testimonial-content">
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
