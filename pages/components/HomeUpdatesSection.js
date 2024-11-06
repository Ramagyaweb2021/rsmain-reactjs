import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'animate.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeUpdatesSection = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  // Slick slider settings with autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 5000,       // 3 seconds between slides
    pauseOnHover: true,        // Pause on hover
  };

  // Data for slides (to be mapped in the sliders)
  const schoolAchievementsSlides = [
    {
      imgSrc: "/images/ach.webp",
      title: "RAMAGYA SCHOOL RANKED #3 IN NOIDA TIMES SCHOOL SURVEY 2024",
      text: "We're thrilled to announce that Ramagya School Noida, Sector 50, known for its unwavering commitment to holistic education, has been Ranked #3 in the ‘Noida Leaders‘ category by the Times School Survey 2023."
    },
    {
      imgSrc: "/images/poineer-in-sports.webp",
      title: "Another Achievement RAMAGYA SCHOOL RANKED #3 IN NOIDA TIMES SCHOOL SURVEY 2024",
      text: "We're thrilled to announce that Ramagya School Noida, Sector 50, known for its unwavering commitment to holistic education, has been Ranked #3 in the ‘Noida Leaders‘ category by the Times School Survey 2023."
    },
    // Add more slides as needed
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/poineer-in-sports.webp",
      title: "Media Feature on Pioneer Sports",
      text: "Ramagya School has been featured in multiple media outlets for its exceptional achievements in the sports domain."
    },
    {
      imgSrc: "/images/ach.webp",
      title: "Recognition in National Media",
      text: "Our students' outstanding performances have gained recognition in national media channels, making Ramagya a beacon of holistic education."
    },
    // Add more slides as needed
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "/images/poineer-in-sports.webp",
      title: "Annual Sports Meet 2024",
      text: "Our annual sports meet was a grand success with multiple students showcasing their talents in various sports."
    },
    {
      imgSrc: "/images/ach.webp",
      title: "Cultural Fest 2024",
      text: "Students participated in the cultural fest, celebrating the diversity of art and performance at Ramagya School."
    },
    // Add more slides as needed
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "/images/poineer-in-sports.webp",
      title: "STEM Workshop",
      text: "Our recent STEM workshop introduced students to cutting-edge technology and hands-on learning experiences."
    },
    {
      imgSrc: "/images/ach.webp",
      title: "Art & Creativity Workshop",
      text: "Students got the opportunity to explore their artistic sides in our creativity workshop led by industry experts."
    },
    // Add more slides as needed
  ];
  return (
    
        <div className='fp-tableSchoolupdates'>
          <Container className='learn my-0-1'>
          {/* <Container className='bg-tropical-mist p-0'> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1 className="main-heading"> SCHOOL UPDATES
                  <span className="lineclass" />
                  <span className="sub-heading">
                    STAY INFORMED
                  </span>
                </h1>
                <Tabs
                  defaultActiveKey="home"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                {/* <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill> */}
                  
                  {/* School Achievements Slider */}
                  <Tab eventKey="home" title="School Achievements">
                  {/* <section className="custom-section">
                    <div className="container">
                      <div className="row align-items-center">
                          <div className="col-md-5 image-resize">
                            <Image src="/images/difference-we-make/poinner-in-sports.png" alt="difference-we-make" width={430} height={306}/>
                          </div>
                          <div className="col-md-7">
                              <h2 className="fw-bold mb-3">Pioneer in Sports</h2>
                              <p className='tabination-text'>
                              We pride ourselves on being a pioneer in sports education, offering students a rich array of athletic opportunities that foster teamwork, discipline, and physical fitness. Our state-of-the-art sports facilities are equipped to cater to a variety of interests and skill levels, ensuring that every student can find their passion.
                              </p>
                              <a href="#" className="btn custom-btn">Learn More</a>
                          </div>
                      </div>
                    </div>
                    </section> */}
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {schoolAchievementsSlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-md-5 image-resize">
                              <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} />
                            </div>
                            <div className="col-md-7">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="#" className="btn custom-btn">View More</a>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </section>
                    </div>
                  </Tab>

                  {/* Media Press Slider */}
                  <Tab eventKey="press" title="Media Press">
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {mediaPressSlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-md-5 image-resize">
                              <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} />
                            </div>
                            <div className="col-md-7">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="#" className="btn custom-btn">View More</a>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </section>
                    </div>
                  </Tab>

                  {/* School Events Slider */}
                  <Tab eventKey="events" title="School Events">
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {schoolEventsSlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-md-5 image-resize">
                              <Image src={slide.imgSrc} alt="School Events" width={430} height={306} />
                            </div>
                            <div className="col-md-7">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="#" className="btn custom-btn">View More</a>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </section>
                    </div>
                  </Tab>

                  {/* Workshop/Activity Slider */}
                  <Tab eventKey="awards" title="Workshop/Activity">
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {workshopActivitySlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-md-5 image-resize">
                              <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} />
                            </div>
                            <div className="col-md-7">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="#" className="btn custom-btn">View More</a>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </section>
                    </div>
                  </Tab>

                </Tabs>
              </div>
            </div>
          </Container>
        </div>
    
  )
}

export default HomeUpdatesSection