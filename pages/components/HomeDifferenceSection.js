import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'next/image';

const differenceData = [
  {
    key: "pioneer-in-sports",
    title: "Pioneer in Sports",
    image: "/images/difference-we-make/poinner-in-sports.webp",
    heading: "Pioneer in Sports",
    description: "We pride ourselves on being a pioneer in sports education, offering students a rich array of athletic opportunities that foster teamwork, discipline, and physical fitness. Our state-of-the-art sports facilities are equipped to cater to a variety of interests and skill levels, ensuring that every student can find their passion.",
    link: "/poineer-in-sports",
  },
  {
    key: "baal-saathee",
    title: "Baal Saathee (Mental Health)",
    image: "/images/difference-we-make/baalsaathi.webp",
    heading: "Baal Saathee (Mental Health)",
    description: "The Baal Saathee initiative is a cornerstone of our commitment to nurturing the socio-emotional health of our students. By integrating cognitive, emotional, and social strategies, we create a supportive environment that fosters overall well-being.",
    link: "/baalsaathi",
  },
  {
    key: "mental-health-club",
    title: "Mental Health Club",
    image: "/images/difference-we-make/mental-health-club.webp",
    heading: "Mental Health Club",
    description: "Our Mental Health Club is dedicated to promoting mental well-being and providing students with practical tools to manage stress and build resilience. Key aspects of the club include Workshops and Activities, Peer Support and Collaboration with Professionals.",
    link: "/mental-health-club",
  },
  {
    key: "life-skills",
    title: "Life Skills",
    image: "/images/difference-we-make/life-skills.webp",
    heading: "Life Skills",
    description: "At Ramagya School, we recognize that life skills are essential for personal and professional success. Our comprehensive life skills program is designed to empower students with practical skills that will serve them throughout their lives.",
    link: "/life-skills",
  },
];

const HomeDifferenceSection = () => {
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

  return (
    <div className="learn">
      <Container className="container learn my-custom-difference">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1 className="main-heading">
              THE DIFFERENCE WE MAKE
              <span className="lineclass" />
              <span className="sub-heading animate-on-scroll">Don’t Just Educate!</span>
            </h1>
            <Tabs defaultActiveKey={differenceData[0].key} id="fill-tab-example" className="mb-3" fill>
              {differenceData.map((item) => (
                <Tab eventKey={item.key} title={item.title} key={item.key}>
                  <section className="custom-section">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-5 image-resize">
                          <Image src={item.image} alt={item.heading} width={430} height={306} priority />
                        </div>
                        <div className="col-md-7">
                          <h2 className="fw-bold mb-3">{item.heading}</h2>
                          <p className="tabination-text">{item.description}</p>
                          <a href={item.link} className="btn custom-btn">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeDifferenceSection;
