import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const HomeUpdatesSection = () => {
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

  // Data for slides (to be displayed in static sections)
  const schoolAchievementsSlides = [
    {
      imgSrc: "/images/school-updates/achievement-1.webp",
      title: "Rabeeb Ali Khan secured 2nd Position and a silver medal at AITA Championship",
      text: `We are proud to announce the outstanding achievement of Rabeeb Ali Khan from Class 7C, who secured 2nd place at the AITA Championship. Demonstrating remarkable skill and determination, Rabeeb earned a silver medal in the U-14 Boys Doubles category during this prestigious national ranking event. The championship took place at Billabong High International School in Noida, showcasing young talents from across the country. Rabeeb’s success reflects his dedication and hard work, as well as the valuable guidance provided by his coach, Nitin.`
    },
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/school-updates/media-press-1.webp",
      title: "Jan Sagar Today Highlights Ramagya School’s All India Karate Championship 2024",
      text: `We proudly hosted the prestigious “Invitational All India Karate Championship 2024” on August 10th and 11th! This remarkable event was also covered in Jan Sagar Today newspaper, reflecting its significance and success. The event was a showcase of martial arts excellence, featuring top athletes from across the country who displayed remarkable skills and sportsmanship. The championship was highlighted by the grand 22-foot trophy, which stood as a symbol of achievement and dedication.`
    },
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "/images/school-updates/school-events-1.webp",
      title: "Celebrating the Success of Saksham Mela",
      text: `We are pleased to celebrate the success of Saksham Mela. Thank you to everyone who joined us for this extraordinary event, which was filled with vibrant stalls, engaging performances, and delicious food. Your enthusiastic participation made the day truly memorable, showcasing the incredible creativity and spirit of our community. 
      A special thank you goes to our dedicated volunteers and organizers whose hard work and commitment made this event possible. Your efforts were vital in creating an enjoyable and enriching experience for all attendees. `
    },
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "/images/school-updates/workshop-and-activity-1.webp",
      title: "Recognizing Good Touch and Bad Touch through a Workshop",
      text: `Our recent workshop on understanding good touch and bad touch provided essential knowledge to empower students regarding personal boundaries and safety. By helping children differentiate between positive and negative physical interactions, we aimed to enhance their overall well-being. The workshop featured interactive activities and discussions that encouraged students to recognize their feelings and express themselves effectively. 
      This important education equips children with the tools they need to make informed choices and communicate about their experiences. `
    },
  ];

  return (
    <div className="learn">
      <Container className="container my-custom-school-updates">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1 className="main-heading"> SCHOOL UPDATES
              <span className="lineclass" />
              <span className="sub-heading animate-on-scroll">STAY INFORMED</span>
            </h1>
            <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
              {/* School Achievements */}
              <Tab eventKey="home" title="School Achievements">
                <div className="container">
                  <section className="custom-section">
                    {schoolAchievementsSlides.map((slide, index) => (
                      <div key={index} className="row-school-updates align-items-center">
                        <div className="col-lg-5 col-md-5 col-12 image-resize">
                          <a href="https://ramagyaschoolblog.com/category/achievements/" target='_blank'>
                            <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} priority />
                          </a>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                          <h2 className="fw-bold mb-3">{slide.title}</h2>
                          <p className='tabination-text'>{slide.text}</p>
                          <a href="https://ramagyaschoolblog.com/category/achievements/" target='_blank' className="btn custom-btn">View More</a>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </Tab>

              {/* Media Press */}
              <Tab eventKey="press" title="Media Press">
                <div className="container">
                  <section className="custom-section">
                    {mediaPressSlides.map((slide, index) => (
                      <div key={index} className="row-school-updates align-items-center">
                        <div className="col-lg-5 col-md-5 col-12 image-resize">
                          <a href="https://ramagyaschoolblog.com/category/media-press/" target='_blank'>
                            <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} priority />
                          </a>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                          <h2 className="fw-bold mb-3">{slide.title}</h2>
                          <p className='tabination-text'>{slide.text}</p>
                          <a href="https://ramagyaschoolblog.com/category/media-press/" target='_blank' className="btn custom-btn">View More</a>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </Tab>

                {/* schoolEventsSlides */}
                <Tab eventKey="events" title="School Events">
                <div className="container">
                  <section className="custom-section">
                    {schoolEventsSlides.map((slide, index) => (
                      <div key={index} className="row-school-updates align-items-center">
                        <div className="col-lg-5 col-md-5 col-12 image-resize">
                        <a href="https://ramagyaschoolblog.com/category/events/" target='_blank'>
                            <Image src={slide.imgSrc} alt="School Events" width={430} height={306} priority />
                          </a>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                          <h2 className="fw-bold mb-3">{slide.title}</h2>
                          <p className='tabination-text'>{slide.text}</p>
                          <a href="https://ramagyaschoolblog.com/category/media-press/" target='_blank' className="btn custom-btn">View More</a>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </Tab>

               {/* workshopActivitySlides */}
               <Tab eventKey="awards" title="Workshop/Activity">
                <div className="container">
                  <section className="custom-section">
                    {workshopActivitySlides.map((slide, index) => (
                      <div key={index} className="row-school-updates align-items-center">
                        <div className="col-lg-5 col-md-5 col-12 image-resize">
                        <a href="https://ramagyaschoolblog.com/category/workshop/" target='_blank'>
                          <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} priority />
                          </a>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 d-none d-md-block">
                          <h2 className="fw-bold mb-3">{slide.title}</h2>
                          <p className='tabination-text'>{slide.text}</p>
                          <a href="https://ramagyaschoolblog.com/category/media-press/" target='_blank' className="btn custom-btn">View More</a>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </Tab>
              
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeUpdatesSection;
