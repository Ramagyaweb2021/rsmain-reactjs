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

const GreaterNoidaSchoolUpdates = () => {
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
      imgSrc: "/images/greater-noida/school-updates/achievement-1.webp",
      title: "Ramagya World School Secured 1st Position for National Song Competition organized by the Bharat Vikas Parishad",
      text: `We achieved 1st position in the National Group Song Competition organized by Bharat Vikas Parishad at Greater Noida World School. The event aimed to inspire patriotism and dedication towards the country through music.  Students from Ramagya School performed with exceptional skill and enthusiasm, earning the…`
    },
    {
      imgSrc: "/images/greater-noida/school-updates/achievement-2.webp",
      title: "Awards & ACHIEVEMENTS Inter School Skating Competition at Chaudhary Charan Singh University",
      text: `The Inter School Skating Competition held at Chaudhary Charan Singh University in Greater Noida on July 27th and 28th, 2024, was a remarkable event showcasing the talent and enthusiasm of participating students. Our students demonstrated exceptional skill and dedication, earning well-deserved silver and bronze medals during the competition. This achievement was further honored by our Principal, who personally distributed medals and certificates to the outstanding performers. `
    }
    // Add more slides as needed
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/greater-noida/school-updates/media-press.webp",
      title: "TIMES OF INDIA – FEATURE ARTICLE ON DR. SANJAY GUPTA",
      text: `Ramagya Group of Schools extends its heartfelt congratulations to Dr. Sanjay Gupta (Chairman, Ramagya group) for getting featured in pan India coverage of TIMES of INDIA. Dr. Sanjay Gupta talked about the current process of the re-opening of Indian schools in 2021 and the diligent measures adopted at Ramagya Schools to ensure the safety of the children.`
    }
    // Add more slides as needed
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "/images/greater-noida/school-updates/school-event-1.webp",
      title: "SPARKLING STARS: RAMAGYA’S PRIMARY GRADUATION DAY",
      text: `To our graduating primary kids: You are the stars of tomorrow, destined for greatness. We are proud of our young graduates from Ramagya School’s primary class today! Join us in celebrating the accomplishments of our young graduates and wishing them success in all their future endeavors. We have proudly seen their growth and development from that first day of wide-eyed delight to this moment of achievement. Congratulations, and may your futures be filled with success, happiness, and endless possibilities!`
    },
    {
      imgSrc: "/images/greater-noida/school-updates/school-event-2.webp",
      title: "REPUBLIC DAY CELEBRATION AT RAMAGYA WORLD SCHOOL: A TRIBUTE TO PATRIOTISM AND CREATIVITY",
      text: `Step into the vibrant world of patriotism and creativity with Ramagya World School’s Republic Day Celebration! Watch how our students, from pre-primary to grade 8, came together to honor the essence of unity and freedom through various activities and performances. From the solemn unfurling of the tricolor to captivating musical tributes and colorful kite-making, each moment was filled with pride and joy. Discover how this celebration not only instilled patriotism but also fostered creativity and teamwork, making it a truly enriching experience for all.`
    },
    // Add more slides as needed
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "/images/greater-noida/school-updates/school-workshop.webp",
      title: "EMBRACING MEMORIES, FOSTERING LIFELONG BONDS",
      text: `The farewell event of 2023-24 at Ramagya World School was a very touching occasion, especially for the grade 8 students saying goodbye to their classmates. The 7th grade student’s enthusiasm and talent shone brightly, filling the venue with great positivity. It was a beautiful gesture that presented the strong bond between the students across different grades. Memories were made, laughter echoed, and friendships were celebrated. In addition to leaving behind priceless memories, this moment served as a reminder of the school’s commitment to kindness, respect, and teamwork.`
    },
    {
      imgSrc: "/images/greater-noida/school-updates/school-workshop-1.webp",
      title: "STEM ADVENTURES: HANDS-ON PROJECTS FOR CREATIVITY AND PROBLEM-SOLVING",
      text: `Explore the world of STEM with our hands-on projects! From seed launchers to balloon poppers, students engage in exciting activities that ignite creativity and problem-solving skills. Join us on a journey of discovery and innovation as we dive into the realm of STEM education. Let’s inspire the next generation of innovators!`
    },
    ,
    {
      imgSrc: "/images/greater-noida/school-updates/school-workshop-2.webp",
      title: "EMPOWER MINDS, BRIGHTEN FUTURES: UNLOCK POTENTIAL",
      text: `Students at Ramagya School experienced an important change as a result of the Workshop on Quality Education, which sparked an interest in learning and personal development. Students learnt the value of both academic brilliance and life skills by delving into the roots of a complete education through insightful discussions and captivating activities. They gained skills in critical thinking, good communication, and world adaptability. The objective of the workshop was to mold students into well-rounded people who could have a beneficial impact on society. Let’s make learning an adventure you’ll never forget! Come join us and let’s explore the world of education together!`
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
                             <a href="https://ramagyaschoolblog.com/category/gnoida-awards-achievements/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/gnoida-awards-achievements/" target='_blank' className="btn custom-btn">View More</a>
                              </div>

                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/gnoida-awards-achievements/" target='_blank' className="btn custom-btn">View More</a>
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
                            <a href="https://ramagyaschoolblog.com/category/gnoida-media/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/gnoida-media/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/gnoida-media/" target='_blank' className="btn custom-btn">View More</a>
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
                             <a href="https://ramagyaschoolblog.com/category/gnoida-events/" target='_blank'>
                              <Image src={slide.imgSrc} alt="School Events" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/gnoida-events/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/gnoida-events/" target='_blank' className="btn custom-btn">View More</a>
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
                             <a href="https://ramagyaschoolblog.com/category/gnoida-activities/" target='_blank'>
                              <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} />
                              </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                                <h2 className="fw-bold mb-3">{slide.title}</h2>
                                <p className='tabination-text'>{slide.text}</p>
                                <a href="https://ramagyaschoolblog.com/category/gnoida-activities/" target='_blank' className="btn custom-btn">View More</a>
                              </div>
                            {/* <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/gnoida-activities/" target='_blank' className="btn custom-btn">View More</a>
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

export default GreaterNoidaSchoolUpdates