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

const DadriSchoolUpdates = () => {
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
    dots: false,
    arrows: false,
    infinite: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 5000,       // 3 seconds between slides
    pauseOnHover: true,        // Pause on hover
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Enable dots on mobile
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Data for slides (to be mapped in the sliders)
  const schoolAchievementsSlides = [
    {
      imgSrc: "/images/dadri/school-updates/achievements.webp",
      title: "Academic & Other Events In Dadri, Activity, Awards & Achievements, Dadri, Dadri Workshop, Events, Media & Press The ‘Exemplary Eduleader Award’ amidst Covid Crisis by ‘Next. Education’",
      text: `Ramagya School, Dadri is proud to announce that Ms. Taruna Kapoor (principal) was awarded for ‘The Exemplary Eduleader’ Amidst Covid Crisis by ‘Next. Education’ for her persistent and impeccable works in the fields of education during pandemics and being a quintessential inspiration for the education fraternity. The people from various teaching fields were a part of the event. The event was held at Venkateshwar International School, Sector-18, Dwarka...`
    }
    // Add more slides as needed
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/dadri/school-updates/ENHANCE-YOUR-TALENT.webp",
      title: "ENHANCE YOUR TALENT",
      text: `God has gifted an ability to each human yet it’s we just who needs to recognize it and work upon it to make progress. Ability can be in any field like music, painting, dance, sports or some other in which an individual is intrigued. Understudies…`
    }
    // Add more slides as needed
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "/images/dadri/school-updates/school-event-1.webp",
      title: "VIRTUAL COLLABORATION WITH ISRAEL",
      text: `Students participated in virtual collaboration with Israel. It was to identify the country the students belong to. The students asked many questions about the geography of that country to guess the name and the same was done by the other side. The next stage was…`
    },
    {
      imgSrc: "/images/dadri/school-updates/school-event-2.webp",
      title: "LITTLE STARS SHINE: RAMAGYA’S GRADUATION DAY CELEBRATION",
      text: `At Ramagya School, Dadri, we are committed to providing a nurturing environment where every child can flourish academically, socially, and emotionally. With smiles on their faces and joy in their hearts, our students dance gracefully, celebrating the friendships, memories, and knowledge gained during their time at…`
    },
    // Add more slides as needed
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "/images/dadri/school-updates/school-workshop.webp",
      title: "VIRTUAL COLLABORATION WITH ISRAEL",
      text: `Students participated in virtual collaboration with Israel. It was to identify the country the students belong to. The students asked many questions about the geography of that country to guess the name and the same was done by the other side. The next stage was…`
    }
    // Add more slides as needed
  ];
  return (
    
    <Container className="container">
        <div className="row">
        <div className="text-center mb-4">
          <h3 className='main-heading-internal-pages wow animate__animated animate__fadeInUp' style={{ animationDelay: '0.1s'}}>SCHOOL UPDATES</h3>
        </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
            {/* <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill> */}
                  
                  {/* School Achievements Slider */}
                  <Tab eventKey="home" title="School Achievements">
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {schoolAchievementsSlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                             <a href="https://ramagyaschoolblog.com/category/dadri-achievements/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/dadri-achievements/" target='_blank' className="btn custom-btn">View More</a>
                              </div>

                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/dadri-achievements/" target='_blank' className="btn custom-btn">View More</a>
                            </div> */}
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                            <a href="https://ramagyaschoolblog.com/category/dadri-media/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/dadri-media/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/dadri-media/" target='_blank' className="btn custom-btn">View More</a>
                            </div> */}
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                             <a href="https://ramagyaschoolblog.com/category/dadri-events/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Events" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/dadri-events/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/dadri-events/" target='_blank' className="btn custom-btn">View More</a>
                            </div> */}
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                             <a href="https://ramagyaschoolblog.com/category/dadri-activity/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/dadri-activity/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/dadri-activity/" target='_blank' className="btn custom-btn">View More</a>
                            </div> */}
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
    
  )
}

export default DadriSchoolUpdates