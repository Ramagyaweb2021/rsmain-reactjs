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
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 5000,       // 3 seconds between slides
    pauseOnHover: true,        // Pause on hover
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,           
  //   autoplaySpeed: 5000,     
  //   pauseOnHover: true,       
  };

  // Data for slides (to be mapped in the sliders)
  const schoolAchievementsSlides = [
    {
      imgSrc: "/images/school-updates/achievement-1.png",
      title: "Rabeeb Ali Khan secured 2nd Position and a silver medal at AITA Championship",
      text: `We are proud to announce the outstanding achievement of Rabeeb Ali Khan from Class 7C, who secured 2nd place at the AITA Championship. Demonstrating remarkable skill and determination, Rabeeb earned a silver medal in the U-14 Boys Doubles category during this prestigious national ranking event. The championship took place at Billabong High International School in Noida, showcasing young talents from across the country. Rabeeb’s success reflects his dedication and hard work, as well as the valuable guidance provided by his coach, Nitin.`
    },
    {
      imgSrc: "/images/school-updates/achievement-2.png",
      title: "Divisha Nandurkar clinches Gold and Silver medal at District Level Karate Championship",
      text: `We are proud to announce the remarkable achievements of Divisha Nandurkar from Class 3D at the District Level Karate Championship in G.B. Nagar. Competing in the Sub-Junior Category for 8-year-old females under 20kg, Divisha showcased exceptional skill and determination. She secured 1st position & GOLD medal in Individual Kata and 2nd position & SILVER medal in Individual Kumite. Divisha’s accomplishments serve as an inspiring reminder that hard work and dedication can lead to outstanding success, regardless of size or age.`
    }
    ,
    {
    imgSrc: "/images/school-updates/achievement-3.png",
    title: "Nayan Khatri clinched Gold in Doubles and Silver in Singles at AITA U12 National Ranking Championship",
    text: `Nayan Khatri from class 7A has achieved remarkable success at the AITA U12(NS) National Ranking Championship for Lawn Tennis held at The Dream House Resort in Jaipur. Competing in both singles and doubles categories, Nayan secured an impressive 1st place in doubles, which awarded him a gold medal & 2nd place in singles, earning a silver medal. 
    His dedication and hard work have truly paid off, showcasing his talent on a national level. We extend our heartfelt gratitude to Coach Nitin for his invaluable guidance and support throughout this journey. `
    }
    
    // Add more slides as needed
  ];

  const mediaPressSlides = [
    {
      imgSrc: "/images/school-updates/media-press-1.png",
      title: "Jan Sagar Today Highlights Ramagya School’s All India Karate Championship 2024",
      text: `We proudly hosted the prestigious “Invitational All India Karate Championship 2024” on August 10th and 11th! This remarkable event was also covered in Jan Sagar Today newspaper, reflecting its significance and success. The event was a showcase of martial arts excellence, featuring top athletes from across the country who displayed remarkable skills and sportsmanship. The championship was highlighted by the grand 22-foot trophy, which stood as a symbol of achievement and dedication.  `
    },
    {
      imgSrc: "/images/school-updates/media-press-2.png",
      title: "ANI Highlights Ramagya School’s Prestigious Karate Championship 2024",
      text: `We proudly hosted the Invitational All India Karate Championship 2024, an event that truly shone in the spotlight! This prestigious championship brought together the finest karate athletes from across the country, showcasing their exceptional skills and sportsmanship. 
      We are delighted to announce that this significant event received extensive coverage in ANI Newspaper, reflecting its success and the high level of competition. Held on August 10th and 11th, the event celebrated the power and precision of karate, offering a weekend filled with thrilling matches and inspiring performances. `
    },
    ,
    {
      imgSrc: "/images/school-updates/media-press-3.png",
      title: "Ramagya School Makes Headlines: RamagyaMUN 2024 Featured in Times of India",
      text: `Ramagya School is proud to announce that our recent event, RamagyaMUN 2024, has garnered attention from a prestigious platform – Times of India. Our school hosted an educational extravaganza where student voices reshaped global diplomacy. This event exemplified our commitment to providing a platform for young minds to engage in meaningful discourse and shape the future of international relations. With 135 delegates from 14 schools and participants representing 84 countries across the globe, RamagyaMUN 2024 truly showcased the diversity and depth of perspectives.`
    },
    // Add more slides as needed
  ];

  const schoolEventsSlides = [
    {
      imgSrc: "/images/school-updates/school-events-1.png",
      title: "Celebrating the Success of Saksham Mela",
      text: `We are pleased to celebrate the success of Saksham Mela. Thank you to everyone who joined us for this extraordinary event, which was filled with vibrant stalls, engaging performances, and delicious food. Your enthusiastic participation made the day truly memorable, showcasing the incredible creativity and spirit of our community. 
      A special thank you goes to our dedicated volunteers and organizers whose hard work and commitment made this event possible. Your efforts were vital in creating an enjoyable and enriching experience for all attendees. `
    },
    {
      imgSrc: "/images/school-updates/school-events-2.png",
      title: "Ramagya School in partnership with Power of Basics introduced Elite Performance Program",
      text: `We are dedicated to providing exceptional sports facilities and a nurturing environment for our students. To strengthen our commitment to developing top athletes, we are proud to announce our partnership with Power of Basics (POB) to introduce the Elite Performance Program (EPP). This program is designed to enhance the overall performance of our sports teams while upholding our legacy of excellence in athletics.
      The EPP includes a comprehensive assessment program featuring regular fitness and game evaluations conducted by experienced coaches.  `
    },
    ,
    {
      imgSrc: "/images/school-updates/school-events-3.png",
      title: "Ramagya School Parent Cricket Meet 2024 ",
      text: `Ramagya School, Noida, hosted an exciting Parent Cricket Meet aimed at fostering community spirit and encouraging active parental participation. The event featured eight mixed-gender teams showcasing remarkable talent and teamwork on the cricket field. The Ramagya Challengers emerged as the champions, while the Ramagya Super Giants claimed the runner-up title.

      Amit Chopra was awarded the prestigious Man of the Series for his outstanding performance throughout the matches. `
    },
    // Add more slides as needed
  ];

  const workshopActivitySlides = [
    {
      imgSrc: "/images/school-updates/workshop-and-activity-1.png",
      title: "Recognizing Good Touch and Bad Touch through a Workshop",
      text: `Our recent workshop on understanding good touch and bad touch provided essential knowledge to empower students regarding personal boundaries and safety. By helping children differentiate between positive and negative physical interactions, we aimed to enhance their overall well-being. The workshop featured interactive activities and discussions that encouraged students to recognize their feelings and express themselves effectively. 
      This important education equips children with the tools they need to make informed choices and communicate about their experiences. `
    },
    {
      imgSrc: "/images/school-updates/workshop-and-activity-2.png",
      title: "Ramagya Foundation and Ramagya School Organize Cleanliness Rally on Gandhi Jayanti ",
      text: `In celebration of Gandhi Jayanti, the children of Ramagya Foundation and Ramagya School led a Cleanliness Rally in Sector 50, embracing Mahatma Gandhi’s vision of a clean and self-sustained India. With great enthusiasm, the young participants demonstrated the importance of cleanliness and community responsibility, spreading awareness of the Swachh Bharat mission. This rally highlighted the power of collective action, inspiring others to contribute to a cleaner, greener future. `
    },
    ,
    {
      imgSrc: "/images/school-updates/workshop-and-activity-3.png",
      title: "Empowering Future Leaders: Young Indians (YI) Workshop at Ramagya School",
      text: `Ramagya School recently collaborated with Young Indians (YI) to host an inspiring workshop aimed at shaping India’s future leaders. This engaging event provided our students with a unique opportunity to learn, innovate, and take charge of environmental sustainability. Through dynamic sessions, YI empowered our youth to drive impactful environmental change, enhancing their leadership skills and encouraging them to build a greener, more sustainable future. This workshop marks a significant step towards nurturing the next generation of responsible and visionary leaders.`
    },
    // Add more slides as needed
  ];
  return (
    
    <div className="learn">
    <Container className="container my-custom-school-updates">
        {/* <div className='fp-tableSchoolupdates'>
          <Container className='learn my-0-1'> */}
          {/* <Container className='bg-tropical-mist p-0'> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1 className="main-heading"> SCHOOL UPDATES
                  <span className="lineclass" />
                  <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
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
                  <div className="container">
                    <section className="custom-section">
                      <Slider {...settings}>
                        {schoolAchievementsSlides.map((slide, index) => (
                          <div key={index} className="row-school-updates align-items-center">
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                              <Image src={slide.imgSrc} alt="School Achievements" width={430} height={306} />
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/achievements/" target='_blank' className="btn custom-btn">View More</a>
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                              <Image src={slide.imgSrc} alt="Media Press" width={430} height={306} />
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/media-press/" target='_blank' className="btn custom-btn">View More</a>
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                              <Image src={slide.imgSrc} alt="School Events" width={430} height={306} />
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/events/" target='_blank' className="btn custom-btn">View More</a>
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
                            <div className="col-lg-5 col-md-5 col-12 image-resize">
                              <Image src={slide.imgSrc} alt="Workshop/Activity" width={430} height={306} />
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                              <h2 className="fw-bold mb-3">{slide.title}</h2>
                              <p className='tabination-text'>{slide.text}</p>
                              <a href="https://ramagyaschoolblog.com/category/workshop/" target='_blank' className="btn custom-btn">View More</a>
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