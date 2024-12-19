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

const NoidaExtensionSchoolUpdates = () => {
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
      imgSrc: "/images/noida-extension/school-updates/achievements-1.webp",
      title: "Achievements Ramagya School Shines Bright with the Brand Brilliance Award for Excellence in the Net Zero Energy School category",
      text: `We have been honored with the prestigious Brand Brilliance Award for Excellence in the Net Zero Energy School category by Apartment Times. This award recognizes the school’s commitment to sustainability, innovation, and creating a positive impact in education.  The award was received by our esteemed…`
    },
    {
      imgSrc: "/images/noida-extension/school-updates/achievements-2.webp",
      title: "Honored with the Educational Excellence Award at the 19th Indian School Awards.",
      text: `Ramagya School is honored to receive the prestigious Educational Excellence Award at the 19th Edition of the Indian School Awards, held in Delhi on September 28, 2024. This accolade was presented to our esteemed Principal, Ms. Priyanka Singh, recognizing her visionary leadership and our commitment…`
    }
    // Add more slides as needed
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/noida-extension/school-updates/media-press-1.webp",
      title: "Adisruti Founder’s Day Event Shines in APN News, Edukoda and Skill Outlook",
      text: `We recently celebrated our Founder’s Day, known as “Adisruti,” with remarkable enthusiasm and elegance. This significant event, honoring the visionary leadership of our esteemed founder, was prominently featured in APN News, Edukoda, and Skill Outlook.  The celebration was marked by a series of inspiring performances,…  `
    }
    // Add more slides as needed
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-events-1.webp",
      title: "INSIGHTS INTO EDUCATION: RJ GINNIE’S VISIT TO RAMAGYA SCHOOL NOIDA EXTENSION",
      text: `Join us at Ramagya School for an enriching experience unlike any other, as we welcome the esteemed RJ Ginnie from Radio City 91.1 FM! Ramagya School is dedicated to promoting holistic development and giving students the chance to interact with motivating people who have insightful things to say about learning and personal development. We’re excited to have RJ Ginnie, a well-known radio personality recognized for her insightful conversation and captivating storytelling, as our guest today.`
    },
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-events-2.webp",
      title: "EMBRACING EXCELLENCE: RAMAGYA SCHOOL, NOIDA EXTENSION GRADUATION DAY",
      text: `Join us in celebrating a milestone moment at Ramagya School, Noida Extension, a day that commemorates the achievements of our graduating students. Witness the culmination of years of dedication, perseverance, and growth as our students embark on the next chapter of their academic journey. With cherished memories, our graduation ceremony promises to be an unforgettable tribute to the remarkable accomplishments of our graduates. A day filled with pride, inspiration, and the promise of a bright future!`
    },
    ,
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-events-3.webp",
      title: "CELEBRATE VICTORIES: SPORTS DAY HIGHLIGHTS | RAMAGYA SCHOOL, NOIDA EXTENSION",
      text: `Step into the arena of triumph with the vibrant snapshots from our Sports Day celebration at Ramagya School, Noida Extension. Witness the fervor of teamwork, resilience, and athletic prowess as our students showcase their sporting spirit in a day filled with cheers, victories, and unforgettable memories. Proud to celebrate the spirit of sportsmanship and achievement that defines our school community`
    },
    // Add more slides as needed
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-workshop-1.webp",
      title: "CHAMPIONING HUMAN RIGHTS: SPECIAL ASSEMBLY AT RAMAGYA SCHOOL",
      text: `Join us for an inspiring journey of empowerment and advocacy at Ramagya School, Noida Extension, with our Human Rights Assembly! Led by our passionate grade 6 to 8 students, this dynamic assembly brings together insightful street plays, impactful discussions, and a commitment to positive global change. Experience the power of voices raised in support of human rights as we empower our students to become advocates for a better world. Watch and be a part of something meaningful!`
    },
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-workshop-2.webp",
      title: "RAMAGYA SCHOOL NOIDA EXTENSION: CLASS PRESENTATION HIGHLIGHTS",
      text: `Experience the brilliance of our students at Ramagya School Noida Extension as they showcase their understanding in class presentations! From exploration of Community Helpers to insights into Unity in Diversity, our learners captivate with knowledge and creativity. Dive into the highlights of our recent presentation event and witness the future leaders in action.`
    },
    ,
    {
      imgSrc: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/blog/ext-workshop-3.webp",
      title: "EXPLORING EMOTIONS: LEARNING BY DOING PLAY THERAPY",
      text: `With the help of Ramagya School’s “Learning by Doing – Play Therapy” activities, you may fully dive into the intriguing world of emotions. These interactive lessons, which are intended to develop social skills and emotional intelligence, provide a secure and supportive space for kids to explore and communicate their emotions. `
    },
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
                             <a href="https://ramagyaschoolblog.com/category/achievements-noida-extension/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/achievements-noida-extension/" target='_blank' className="btn custom-btn">View More</a>
                              </div>

                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/achievements-noida-extension/" target='_blank' className="btn custom-btn">View More</a>
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
                            <a href="https://ramagyaschoolblog.com/category/noida-ext-media-press/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/achievements-noida-extension/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/noida-ext-media-press/" target='_blank' className="btn custom-btn">View More</a>
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
                             <a href="https://ramagyaschoolblog.com/category/noida-ext-events/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Events" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/noida-ext-events/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/noida-ext-events/" target='_blank' className="btn custom-btn">View More</a>
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
                             <a href="https://ramagyaschoolblog.com/category/workshop/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/workshop/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/workshop/" target='_blank' className="btn custom-btn">View More</a>
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

export default NoidaExtensionSchoolUpdates