import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image'
// import ExploreSecondaryVideoSection from './ExploreSecondaryVideoSection';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ExploreTabination = () => {
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
  return (
    <>
      <div className='explore-tabination-internal-page-section'>
        <Container className='explore-tabination-container my-5'>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Primary">
                  <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ animationDelay: '0.2s', textAlign: "center" }}
                            >
                              Cultivating a Lifelong Passion for Learning
                            </h2>

                            <p className='my-4' style={{ textAlign: "center" }}>
                              In the early years, we cultivate curiosity and creativity, laying the foundation for a lifelong love of learning.</p>

                            <p>At Ramagya School, our Early Years Program (Nursery to Grade II) is dedicated to cultivating a lifelong love of learning by introducing young minds to foundational concepts through a blend of innovative, child-centered methods. By integrating the Montessori, Play Way, and Thematic approaches, we offer a nurturing environment where each child’s unique developmental needs and learning pace are respected and encouraged.</p>


                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center my-3">
                        <div className="col-md-8">
                          <p className='tabination-text'>
                             Our curriculum includes three powerful learning approaches that make early education at Ramagya unique:
                          </p>
                          <h2 className="fw-bold mb-3">The Montessori Method</h2>
                          <p className='tabination-text'>
                            With an emphasis on hands-on learning and self-guided activities, the Montessori method allows children to explore subjects independently in our specialized Montessori lab. Here, they use custom-designed materials that develop sensory awareness, problem-solving skills, and independence, building a strong foundation in critical thinking.
                          </p>
                          <h2 className="fw-bold mb-3">The Play Way Method</h2>
                          <p className='tabination-text'>
                            Recognizing that play is essential to child development, we use structured play activities to teach academic concepts and social skills. In our Play Way classrooms, learning through play cultivates children’s cognitive, social, emotional, and physical abilities, all while allowing them to enjoy the process and engage with peers in a collaborative setting.
                          </p>
                          <h2 className="fw-bold mb-3">The Thematic Approach</h2>
                          <p className='tabination-text'>
                            We integrate knowledge across different subjects through central themes or topics, creating connections that help children understand complex ideas. With subjects like literacy, numeracy, science, and art woven into thematic learning experiences, children develop a deeper understanding of concepts and are encouraged to think critically and creatively.
                          </p>
                          <h2 className="fw-bold mb-3">Raz Plus</h2>
                          <p className='tabination-text'>
                            Ramagya School partners with Raz-Plus, a dynamic blended learning platform, offering leveled resources, personalized reading, and data-driven assessments to enhance primary student&#39;s reading skills. Accessible in various formats, it bridges classroom instruction with independent practice for holistic literacy development.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <Image src="/images/explore/explore-1.webp" alt="explore-1" width={430} height={306} />
                        </div>
                      </div>
                      <div className="row justify-content-center my-3">
                        <div className="col-md-12">
                          <p className='tabination-text'>
                              In addition to these teaching methodologies, a typical day in our Early Years Program incorporates Circle Time, Skill-Based Work Time, Music and Movement, Pottery, both Free Play and Structured Play, outdoor activities, DEAR Time (Drop Everything and Read), and Reflection Time. Each activity is carefully designed to support holistic development, focusing on building essential life skills such as empathy, patience, teamwork, and curiosity.
                              Our approach fosters a collaborative relationship with families, where parents are regarded as key partners in their child’s journey. We provide regular updates and offer personalized learning plans (IEPs) to cater to each child’s unique strengths and learning pace. This partnership with parents and guardians, especially during the first days of school, helps children transition smoothly and build a sense of security in their new learning environment.
                              By embedding these foundational experiences in our early education program, Ramagya School sets the stage for students to embark on a lifetime of passionate, purposeful learning.
                          </p>

                        </div>

                      </div>
                      {/* Learning domain */}
                      <div className="row justify-content-center my-5">
                        <div className="text-center mb-4">
                          <h5 className="fw-bold" style={{ textAlign: "center" }}>Learning Domain</h5>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/1.webp"
                              />
                              <p className='mt-2'>Students</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/2.webp"
                              />
                              <p className='mt-2'>Numerics & Maths</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/3.webp"
                              />
                              <p className='mt-2'>EVS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/4.webp"
                              />
                              <p className='mt-2'>Students</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/5.webp"
                              />
                              <p className='mt-2'>Art</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/6.webp"
                              />
                              <p className='mt-2'>Physical Education</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/7.webp"
                              />
                              <p className='mt-2'>Dance</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/primary/learning-domain/8.webp"
                              />
                              <p className='mt-2'>Music</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
                </Tab>
                <Tab eventKey="profile" title="Middle">
                  <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ animationDelay: '0.2s', textAlign: "center" }}
                            >
                              Discovering the World Through Engaged Learning
                            </h2>

                            <p className='my-4' style={{ textAlign: "center" }}>
                              At Ramagya School, our Middle Wing curriculum is designed to ignite curiosity, build foundational skills, and encourage students to become well-rounded individuals. The Middle Wing emphasizes holistic development through an engaging and broad-based curriculum, fostering a lifelong passion for learning. Our carefully crafted programs focus on critical thinking, ethical understanding, and practical skills, ensuring that each student gains the essential tools for academic success and personal growth.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center my-3">
                        <div className="col-md-4">
                          <Image src="/images/explore/middle.webp" alt="middle" width={430} height={306} />
                        </div>
                        <div className="col-md-8">
                          <p className='tabination-text mt-1'>
                            Our Middle Wing Curriculum at a Glance:
                          </p>
                          <h2 className="fw-bold mb-0">Communication & Literacy</h2>
                          <p className='tabination-text'>
                            We develop strong language skills, encouraging students to express themselves confidently, both in writing and speaking, through activities that enhance vocabulary, comprehension, and communication.
                          </p>
                          <h2 className="fw-bold mb-0">Numeracy</h2>
                          <p className='tabination-text'>
                            Math skills are built through problem-solving, logical reasoning, and critical thinking activities, enabling students to understand and apply mathematical concepts in real-world contexts.
                          </p>
                          <h2 className="fw-bold mb-0">Environmental Science</h2>
                          <p className='tabination-text'>
                            This subject nurtures a sense of responsibility towards the planet, covering topics like sustainability, ecosystems, and environmental awareness through project-based learning and exploration.
                          </p>
                          <h2 className="fw-bold mb-0">IT & Digital Skills</h2>
                          <p className='tabination-text'>
                            We prepare students for a tech-driven world by teaching essential computer skills, coding, and safe online practices, empowering them to navigate digital spaces effectively.
                          </p>

                        </div>
                      </div>
                      <div className="row justify-content-center my-0">
                        <div className="col-md-8">
                          {/* <p className='tabination-text mt-1'>
                         Our Middle Wing Curriculum at a Glance:
                        </p> */}
                          <h2 className="fw-bold mb-0">Performing & Visual Arts</h2>
                          <p className='tabination-text'>
                            Through music, dance, theater, and art, students cultivate creativity, emotional expression, and confidence, which enrich their personal and academic lives.
                          </p>
                          <h2 className="fw-bold mb-0">Expressive Arts & Design</h2>
                          <p className='tabination-text'>
                            Our design curriculum allows students to work with various materials, encouraging innovation and hands-on creativity while fostering an appreciation for aesthetics.
                          </p>
                          <h2 className="fw-bold mb-0">Socio-Emotional & Mental Well-Being</h2>
                          <p className='tabination-text'>
                            We focus on emotional resilience, self-awareness, and empathy through counseling and group activities, helping students manage stress and build positive relationships.
                          </p>
                          <h2 className="fw-bold mb-0">Health & Physical Education</h2>
                          <p className='tabination-text'>
                            Physical activity is central to our curriculum, promoting fitness, teamwork, and the importance of a balanced lifestyle through structured sports and health education.
                          </p>

                        </div>
                        <div className="col-md-4">
                          <Image src="/images/explore/middle-1.webp" alt="middle" width={430} height={306} />
                        </div>
                      </div>
                      <div className="row justify-content-center my-2">
                        <div className="col-md-12">
                          <h2 className="fw-bold mb-0">Human/Ethical Values</h2>
                          <p className='tabination-text'>
                            We emphasize respect, integrity, and empathy, integrating these values into classroom discussions and activities that highlight ethical decision-making and moral understanding.
                          </p>
                          <h2 className="fw-bold mb-0">Reading Program</h2>
                          <p className='tabination-text'>
                            Our dedicated reading program nurtures a love for literature, enhancing comprehension and analytical skills, and exposing students to diverse genres and perspectives..
                          </p>
                          <h2 className="fw-bold mb-0">Local & Global Issues</h2>
                          <p className='tabination-text'>
                            Through awareness of both local and global issues, students develop a sense of global citizenship, understanding their role and responsibilities in the world.
                          </p>
                          <h2 className="fw-bold mb-0">Vocational Training/Life Skills</h2>
                          <p className='tabination-text'>
                            Practical skills like budgeting, cooking, and basic first aid are taught, providing students with valuable tools for real-life situations.
                          </p>

                          <p className='tabination-text'>
                            Each aspect of our curriculum is designed to shape well-rounded, informed, and compassionate individuals who are prepared to contribute positively to society. At Ramagya School, learning is a journey that goes beyond textbooks, laying a strong foundation for students’ lifelong success and fulfillment.
                          </p>
                        </div>
                      </div>
                      {/* Learning domain */}
                      <div className="row justify-content-center my-5">
                        <div className="text-center mb-4">
                          <h5 className="fw-bold" style={{ textAlign: "center" }}>Learning Domain</h5>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/1.webp"
                              />
                              <p className='mt-2'>Social Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/2.webp"
                              />
                              <p className='mt-2'>Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/3.webp"
                              />
                              <p className='mt-2'>Mathematics</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/4.webp"
                              />
                              <p className='mt-2'>Information Technology</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/5.webp"
                              />
                              <p className='mt-2'>Art</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/6.webp"
                              />
                              <p className='mt-2'>Sports</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/7.webp"
                              />
                              <p className='mt-2'>Dance</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/8.webp"
                              />
                              <p className='mt-2'>Music</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/9.webp"
                              />
                              <p className='mt-2'>EVS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/10.webp"
                              />
                              <p className='mt-2'>Theatre</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/11.webp"
                              />
                              <p className='mt-2'>Debate</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
                </Tab>
                <Tab eventKey="longer-tab" title="Secondary">
                  <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ animationDelay: '0.2s', textAlign: "center" }}
                            >
                              Inspiring Leadership and Innovation Through Education
                            </h2>

                            <p className='my-4' style={{ textAlign: "center" }}>
                              At Ramagya School, we are committed to developing future leaders and innovators by providing a comprehensive and dynamic curriculum in our secondary wing (Classes VI–VIII). Our approach combines academics, arts, sports, and essential life skills to foster holistic growth, ensuring each student is equipped with the knowledge, confidence, and integrity to thrive in an evolving world.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center my-3">
                        <div className="col-md-6">
                          <Image src="/images/explore/secondary-1.webp" alt="secondary-1" width={600} height={450} />
                        </div>
                        <div className="col-md-6">
                          <p className='tabination-text mt-1'>
                            Our Secondary Wing Curriculum at a Glance:
                          </p>
                          <h2 className="fw-bold mb-0">Academics</h2>
                          <p className='tabination-text'>
                            Our academic program emphasizes critical thinking, problem-solving, and concept clarity across core subjects, ensuring a solid foundation for higher education.
                          </p>
                          <h2 className="fw-bold mb-0">Student and Leadership Voices</h2>
                          <p className='tabination-text'>
                            Through student councils and leadership initiatives, we empower students to voice their opinions, take responsibility, and develop confidence in their ability to lead.
                          </p>
                          <h2 className="fw-bold mb-0">Performing & Visual Arts</h2>
                          <p className='tabination-text'>
                            Arts programs encourage creativity and self-expression, with opportunities in music, dance, theater, and visual arts that nurture students’ artistic talents.
                          </p>
                          <h2 className="fw-bold mb-0">Sports</h2>
                          <p className='tabination-text'>
                            Our sports curriculum emphasizes fitness, teamwork, and discipline, providing professional coaching across various sports to develop physical prowess and resilience.
                          </p>
                          <h2 className="fw-bold mb-0">Vocational Training</h2>
                          <p className='tabination-text'>
                            Practical skills are imparted through vocational modules, helping students explore diverse career pathways and gain real-world competencies.
                          </p>

                        </div>
                      </div>
                      <div className="row justify-content-center my-0">
                        <div className="col-md-6">
                          {/* <p className='tabination-text mt-1'>
                         Our Middle Wing Curriculum at a Glance:
                        </p> */}
                          <h2 className="fw-bold mb-0">Reading Program</h2>
                          <p className='tabination-text'>
                            Our structured reading program instills a love for literature, enhances comprehension skills, and encourages independent learning habits.
                          </p>
                          <h2 className="fw-bold mb-0">Socio-Emotional Wellbeing</h2>
                          <p className='tabination-text'>
                            Dedicated activities and counseling sessions foster emotional intelligence, resilience, and empathy, supporting students&#39; mental and emotional health.
                          </p>
                          <h2 className="fw-bold mb-0">Socio-Emotional & Mental Well-Being</h2>
                          <p className='tabination-text'>
                            We focus on emotional resilience, self-awareness, and empathy through counseling and group activities, helping students manage stress and build positive relationships.
                          </p>
                          <h2 className="fw-bold mb-0">Technological Skills</h2>
                          <p className='tabination-text'>
                            With hands-on technology training, students learn digital literacy and technical skills that prepare them for the demands of the modern world.
                          </p>
                          <h2 className="fw-bold mb-0">Local & Global Issues</h2>
                          <p className='tabination-text'>
                            With hands-on technology training, students learn digital literacy and technical skills that prepare them for the demands of the modern worldCurriculum topics on environmental stewardship, cultural diversity, and global challenges help students become informed, responsible global citizens.
                          </p>
                        
                        </div>
                        <div className="col-md-6">
                          <Image src="/images/explore/secondary-2.webp" alt="secondary-2" width={600} height={450} />
                        </div>
                      </div>
                      <div className="row justify-content-center my-2">
                        <div className="col-md-12">
                        <h2 className="fw-bold mb-0">Community Outreach</h2>
                          <p className='tabination-text'>
                            Volunteering and outreach initiatives connect students to their communities, encouraging empathy, social responsibility, and a spirit of service.
                          </p>
                          <h2 className="fw-bold mb-0">Values & Ethics</h2>
                          <p className='tabination-text'>
                            haracter-building programs instill values like honesty, respect, and kindness, nurturing ethically grounded individuals.
                          </p>
                          <h2 className="fw-bold mb-0">Career & Personality Development</h2>
                          <p className='tabination-text'>
                            Through workshops and personality development sessions, we prepare students for future careers, honing their soft skills, communication, and self-awareness.
                          </p>
                          <h2 className="fw-bold mb-0">6 Cs & 21st Century Skills</h2>
                          <p className='tabination-text'>
                            Our curriculum prioritizes the &#39;6 Cs&#39; critical thinking, collaboration, communication, creativity, character, and citizenship - to equip students with essential skills for the 21st century.
                          </p>

                          <p className='tabination-text'>
                            Each of these elements comes together to form a well-rounded education that prepares our students to lead with confidence, innovate with purpose, and succeed in any endeavor they choose.
                          </p>
                        </div>
                      </div>
                      {/* <ExploreSecondaryVideoSection/> */}
                      {/* Learning domain */}
                      <div className="row justify-content-center my-5">
                        <div className="text-center mb-4">
                          <h5 className="fw-bold" style={{ textAlign: "center" }}>Learning Domain</h5>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/1.webp"
                              />
                              <p className='mt-2'>Social Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/2.webp"
                              />
                              <p className='mt-2'>Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/3.webp"
                              />
                              <p className='mt-2'>Mathematics</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/4.webp"
                              />
                              <p className='mt-2'>Information Technology</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/5.webp"
                              />
                              <p className='mt-2'>Art</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/6.webp"
                              />
                              <p className='mt-2'>Sports</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/7.webp"
                              />
                              <p className='mt-2'>Dance</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/8.webp"
                              />
                              <p className='mt-2'>Music</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/9.webp"
                              />
                              <p className='mt-2'>EVS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/10.webp"
                              />
                              <p className='mt-2'>Theatre</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/11.webp"
                              />
                              <p className='mt-2'>Debate</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/12.webp"
                              />
                              <p className='mt-2'>Clubs</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
                </Tab>
                <Tab eventKey="contact" title="Senior Secondary">
                <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-3'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ animationDelay: '0.2s', textAlign: "center" }}
                            >
                              Empowering Minds & Character for a Bright Future
                            </h2>

                            {/* <p className='my-4' style={{ textAlign: "center" }}>
                              At Ramagya School, we are committed to developing future leaders and innovators by providing a comprehensive and dynamic curriculum in our secondary wing (Classes VI–VIII). Our approach combines academics, arts, sports, and essential life skills to foster holistic growth, ensuring each student is equipped with the knowledge, confidence, and integrity to thrive in an evolving world.</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center my-3">
                        <div className="col-md-5">
                          <Image src="/images/explore/senior-secondary/sr-secondary.webp" alt="sr-secondary" width={600} height={450} />
                        </div>
                        <div className="col-md-7">
                          <p className='tabination-text mt-50'>
                            Our Senior Secondary Wing Curriculum at a Glance:
                          </p>
                          <h2 className="fw-bold mb-0">Academics</h2>
                          <p className='tabination-text'>
                            We focus on an in-depth academic curriculum that emphasizes conceptual clarity, critical analysis, and application-based learning to ensure readiness for competitive exams and higher studies.
                          </p>
                          <h2 className="fw-bold mb-0">Student and Leadership Voices</h2>
                          <p className='tabination-text'>
                            By engaging in councils, debates, and leadership roles, students learn to advocate for themselves and others, developing skills in communication, decision-making, and self-confidence.
                          </p>
                          <h2 className="fw-bold mb-0">Performing & Visual Arts</h2>
                          <p className='tabination-text'>
                            Our arts program provides outlets for creativity and expression through music, drama, dance, and fine arts, fostering cultural appreciation and individual talent.
                          </p>
                          <h2 className="fw-bold mb-0">Sports</h2>
                          <p className='tabination-text'>
                             With access to professional sports coaching, students learn teamwork, discipline, and resilience, gaining physical and mental strength to meet life’s challenges.
                          </p>
                         

                        </div>
                      </div>
                      <div className="row justify-content-center my-0">
                        <div className="col-md-7">
                          {/* <p className='tabination-text mt-1'>
                         Our Middle Wing Curriculum at a Glance:
                        </p> */}
                          <h2 className="fw-bold mb-0">Vocational Training</h2>
                          <p className='tabination-text'>
                            Hands-on vocational training introduces career-oriented skills, equipping students with practical knowledge and exploring future career pathways.
                          </p>
                          <h2 className="fw-bold mb-0">Reading Program</h2>
                          <p className='tabination-text'>
                            Focused on developing critical reading and comprehension skills, our reading program broadens students&#39; understanding of global literature and enhances their academic performance.
                          </p>
                          <h2 className="fw-bold mb-0">Socio-Emotional Wellbeing</h2>
                          <p className='tabination-text'>
                            Through counseling and well-being programs, students build emotional resilience, empathy, and interpersonal skills essential for handling stress and fostering positive relationships.
                          </p>
                          <h2 className="fw-bold mb-0">Technological Skills</h2>
                          <p className='tabination-text'>
                            By embracing the latest digital tools and technology, students gain essential tech skills, preparing them for the demands of a digitalized world.
                          </p>
                          <h2 className="fw-bold mb-0">Local & Global Issues</h2>
                          <p className='tabination-text'>
                            Curriculum discussions on topics like environmental conservation, cultural awareness, and international relations instill responsibility and a global outlook in students.
                          </p>
                        
                        </div>
                        <div className="col-md-5">
                          <Image src="/images/explore/senior-secondary/sr-secondary-1.webp" alt="sr-secondary-1" width={600} height={450} />
                        </div>
                      </div>
                      <div className="row justify-content-center my-2">
                        <div className="col-md-12">
                        <h2 className="fw-bold mb-0">Community Outreach</h2>
                          <p className='tabination-text'>
                            Involvement in community service projects encourages empathy, social responsibility, and the desire to contribute positively to society.
                          </p>
                          <h2 className="fw-bold mb-0">Values & Ethics</h2>
                          <p className='tabination-text'>
                           Through discussions on values, character education, and ethical dilemmas, we nurture students who respect integrity, honesty, and social ethics.
                          </p>
                          <h2 className="fw-bold mb-0">Career & Personality Development</h2>
                          <p className='tabination-text'>
                            Our career counseling and personality development programs help students explore career options, refine their interests, and prepare for life beyond school.
                          </p>
                          <h2 className="fw-bold mb-0">6 Cs & 21st Century Skills</h2>
                          <p className='tabination-text'>
                             The curriculum centers on the essential &#39;6 Cs&#39; critical thinking, creativity, collaboration, communication, character, and citizenship - to equip students with the tools needed to thrive in the 21st century.
                          </p>

                          <p className='tabination-text'>
                             Each element of our Senior Secondary curriculum is a building block on a transformative journey, guiding students toward self-discovery, confident leadership, and a readiness to excel in a world brimming with opportunities. This holistic approach empowers students not only to master academic excellence but also to cultivate resilience, empathy, and a sense of purpose. At Ramagya, we nurture trailblazers equipped to make meaningful contributions and thrive as future leaders in a dynamic, ever-evolving world.
                          </p>
                        </div>
                      </div>
                      {/* <ExploreSecondaryVideoSection/> */}
                      {/* Learning domain */}
                      <div className="row justify-content-center my-5">
                        <div className="text-center mb-4">
                          <h5 className="fw-bold" style={{ textAlign: "center" }}>Learning Domain</h5>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/1.webp"
                              />
                              <p className='mt-2'>Social Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/2.webp"
                              />
                              <p className='mt-2'>Science</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/3.webp"
                              />
                              <p className='mt-2'>Mathematics</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/4.webp"
                              />
                              <p className='mt-2'>Information Technology</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/5.webp"
                              />
                              <p className='mt-2'>Art</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/6.webp"
                              />
                              <p className='mt-2'>Sports</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/7.webp"
                              />
                              <p className='mt-2'>Dance</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/8.webp"
                              />
                              <p className='mt-2'>Music</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/9.webp"
                              />
                              <p className='mt-2'>EVS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/10.webp"
                              />
                              <p className='mt-2'>Theatre</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/11.webp"
                              />
                              <p className='mt-2'>Debate</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/explore/middle/learning-domain/12.webp"
                              />
                              <p className='mt-2'>Clubs</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default ExploreTabination