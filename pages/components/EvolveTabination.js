import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image'
// Import Link from 'next/link'
import ExploreSecondaryVideoSection from './ExploreSecondaryVideoSection';
import { Link } from 'react-scroll';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const EvolveTabination = () => {
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
      <div className='explore-tabination-internal-page-section bg-image-section'>
        <Container className='explore-tabination-container my-5'>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="STUDENT DRIVEN SOCIETY">
                  <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-5'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ textAlign: "center" }}
                            >
                              STUDENT DRIVEN SOCIETY
                            </h2>

                            <p className="quote-text" style={{ textAlign: "center" }}>Empowering Leadership and Fostering Unity</p>

                              <p style={{ textAlign: "center" }}>At Ramagya School, we believe in the power of student voices and the importance of nurturing leadership from within. Our Student Driven Society offers a platform for students to actively engage in school life, contribute to meaningful change, and develop skills that will shape their future as leaders and responsible citizens.</p>
                              <p style={{ textAlign: "center" }}>The Ramagyan Student Council serves as the backbone of this dynamic society. Made up of elected and volunteer students from both middle and senior school, the council works closely with teacher advisors to provide a structured and supportive environment where students can express their ideas, concerns, and aspirations. The council not only plays a crucial role in school activities but also acts as a liaison between the student body and administration, ensuring that students’ voices are heard and valued.</p>
                              <p style={{ textAlign: "center" }}>Through their work, the student council organizes various Cultural, Scholastic, and Sports events, as well as Community Service Projects (CSPs) that promote overall student welfare. The council’s efforts help foster an atmosphere of collaboration, responsibility, and engagement throughout the school. It is an embodiment of democracy in action, where students take the lead in shaping school policies, organizing events, and ensuring that the school’s activities align with the values of inclusivity and growth.</p>

                              {/* <p style={{ textAlign: "center" }}>Key roles of the Student Driven Society at Ramagya School include:</p> */}


                          </div>
                        </div>
                      </div>
                    
                      {/* Key roles of the Student Driven Society at Ramagya School include: */}
                        {/* Grid for Cards */}
                        <div className="row justify-content-center my-5 g-1">
                        <p style={{ textAlign: "center" }}>Key roles of the Student Driven Society at Ramagya School include:</p>
                          {/* Card 1 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">01</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Leadership Development</h5>
                                <p className="text-left">
                                  Students have the opportunity to take on leadership roles, organizing and executing events and projects that contribute to school spirit and community welfare.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 2 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">02</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Active Student Engagement</h5>
                                <p className="text-left">
                                  Through projects and activities, students are motivated to participate actively in school life and contribute to its development.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 3 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">03</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Democratic Participation</h5>
                                <p className="text-left">
                                  The student council serves as a model of democracy, with student representatives selected through elections, ensuring the participation of peers, teachers, and administrative heads in decision-making processes.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 4 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">04</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Skill Development</h5>
                                <p className="text-left">
                                  The society fosters personal growth by encouraging students to develop essential skills in organization, leadership, and problem-solving.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 5 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">05</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Promoting Values</h5>
                                <p className="text-left">
                                  The council instills key values such as responsibility, compassion, and respect for diversity, ensuring that students understand the importance of giving back to their communities.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 6 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">06</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Decision Making and Policy Influence</h5>
                                <p className="text-left">
                                  The council plays an advisory role, helping shape student policies, organizing activities, and addressing student concerns in consultation with the school administration.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer Text */}
                        <div className="mt-5 text-center">
                          <p className="text-muted">
                            Through the Student Driven Society, Ramagya School empowers students to take charge of their own growth, develop leadership skills, and actively contribute to building a positive school culture. This initiative not only prepares students for leadership roles within the school but also equips them with the tools needed to excel in their future endeavors.
                          </p>
                        </div>
                        <div className='row justify-content-center my-5'>
                          <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                          {/* Replace with your image source */}
                          <Image src='/images/who-we-are/ramagya-foundation-video-bg.png' alt="" width={650} height={370} />
                          {/* Play button overlay */}
                          <div className="play-button">
                            {/* <i className="bi bi-play-circle-fill"></i> */}
                            <Link href="https://www.youtube.com/watch?v=8n75vK3X9BE" target="_blank">
                              <Image src='/images/video-play.webp' alt="play button" width={80} height={80}/>
                            </Link>
                            {/* <Image src='/images/video-play.webp' alt="" width={80} height={80} onClick={handleShow} /> */}
                            {/* Popup Modal */}
                            {/* <Modal show={show} onHide={handleClose} centered>
                              <Modal.Header closeButton>
                                <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div style={{ width: '100%', height: '315px' }}>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </Modal.Body>
                            </Modal> */}
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                   
                  </section>
                </Tab>
                <Tab eventKey="profile" title="STUDENT CABINET">
                 <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-5'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{textAlign: "center" }}
                            >
                              STUDENT CABINET
                            </h2> 

                              <p className="quote-text" style={{ textAlign: "center" }}>NURTURING TOMORROW&#39;S LEADERS</p>

                              <p style={{ textAlign: "center" }}>The Ramagya Student Cabinet is a dynamic body of elected and volunteer students who work in partnership with teachers to give voice to student perspectives, drive positive change, and foster a vibrant school community. This leadership council empowers students to shape their school experience by expressing opinions, organizing events, and contributing to school life.</p>
                              <p style={{ textAlign: "center" }}>Representing both middle and senior school, the Student Cabinet acts as a liaison between students and school administration, addressing student concerns, advising on student-centered policies, and promoting a culture of respect, collaboration, and responsibility. Cabinet members lead school-wide events, cultural programs, and sports activities, nurturing an environment where students feel connected, supported, and inspired.</p>
                              <p style={{ textAlign: "center" }}></p>

                              {/* <p style={{ textAlign: "center" }}>Key roles of the Student   Driven Society at Ramagya School include:</p> */}


                          </div>
                        </div>
                      </div>
                    
                      {/* Key roles of the Student Driven Society at Ramagya School include: */}
                        {/* Grid for Cards */}
                        <div className="row justify-content-center my-5 g-1">
                        <p style={{ textAlign: "center" }}>In addition to organizing events, the Student Cabinet plays a pivotal role in</p>
                          {/* Card 1 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">01</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Motivating active student involvement in school life</h5>
                                {/* <p className="text-left">
                                  Students have the opportunity to take on leadership roles, organizing and executing events and projects that contribute to school spirit and community welfare.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 2 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">02</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Developing essential leadership, organizational, and communication skills</h5>
                                {/* <p className="text-left">
                                  Through projects and activities, students are motivated to participate actively in school life and contribute to its development.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 3 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">03</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Instilling values of responsibility, empathy, and open-mindedness</h5>
                                {/* <p className="text-left">
                                  The student council serves as a model of democracy, with student representatives selected through elections, ensuring the participation of peers, teachers, and administrative heads in decision-making processes.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 4 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">04</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Guiding students in decision-making processes and promoting active citizenship</h5>
                                {/* <p className="text-left">
                                  The society fosters personal growth by encouraging students to develop essential skills in organization, leadership, and problem-solving.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 5 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">05</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Engaging students in community welfare and fostering a spirit of service</h5>
                                {/* <p className="text-left">
                                  The council instills key values such as responsibility, compassion, and respect for diversity, ensuring that students understand the importance of giving back to their communities.
                                </p> */}
                              </div>
                            </div>
                          </div>
                        
                        </div>

                        {/* Footer Text */}
                        <div className="mt-5 text-center">
                          <p className="text-muted">
                             Through democratic selection and parliamentary procedures, the Student Cabinet upholds a model of inclusive leadership, offering every student the opportunity to grow as a leader and contribute meaningfully to their school community.
                          </p>
                        </div>
                        <div className='row justify-content-center my-5'>
                          <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                          {/* Replace with your image source */}
                          <Image src='/images/who-we-are/ramagya-foundation-video-bg.png' alt="" width={650} height={370} />
                          {/* Play button overlay */}
                          <div className="play-button">
                            {/* <i className="bi bi-play-circle-fill"></i> */}
                            <Link href="https://www.youtube.com/watch?v=8n75vK3X9BE" target="_blank">
                              <Image src='/images/video-play.webp' alt="play button" width={80} height={80}/>
                            </Link>
                            {/* <Image src='/images/video-play.webp' alt="" width={80} height={80} onClick={handleShow} /> */}
                            {/* Popup Modal */}
                            {/* <Modal show={show} onHide={handleClose} centered>
                              <Modal.Header closeButton>
                                <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div style={{ width: '100%', height: '315px' }}>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </Modal.Body>
                            </Modal> */}
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                   
                  </section>
                </Tab>
                <Tab eventKey="longer-tab" title="CSR INITIATIVE">
                  <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-5'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{textAlign: "center" }}
                            >
                               CSR INITIATIVE
                            </h2> 

                              <p className="quote-text" style={{ textAlign: "center" }}>CULTIVATING COMPASSION AND RESPONSIBILITY</p>

                              <p style={{ textAlign: "center" }}>At Ramagya School, we believe in the transformative power of education, not only to shape individual futures but to make a positive impact on society. Through our Corporate Social Responsibility (CSR) initiatives, we foster a culture of compassion, responsibility, and community engagement among our students, empowering them to contribute meaningfully to the world around them.</p>

                              {/* <p style={{ textAlign: "center" }}>Key roles of the Student   Driven Society at Ramagya School include:</p> */}


                          </div>
                        </div>
                      </div>
                      {/* Key roles of the Student Driven Society at Ramagya School include: */}
                        {/* Grid for Cards */}
                        <div className="row justify-content-center my-5 g-1">
                        <p style={{ textAlign: "center" }}>Our CSR activities are brought to life through several dedicated initiatives:</p>
                          {/* Card 1 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">01</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Ramagya Foundation</h5>
                                <p className="text-left">
                                  As a non-profit organization, the Ramagya Foundation, under Purusharth Charitable Society, is committed to sustainable progress, peace, and social justice. The foundation works across diverse sectors, including Education, Health, Sports Education, Skilling, Women Empowerment, and Animal Welfare. Through these programs, we aim to improve living standards, nurture talent, and instill values that contribute to a more educated and equitable society.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 2 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">02</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Nishabd</h5>
                                <p className="text-left">
                                 Nishabd is a unique initiative under Ramagya’s CSR umbrella, dedicated to animal welfare, particularly the care and protection of stray dogs. Nishabd advocates for the humane treatment of animals and provides much-needed support to stray dogs, reflecting our commitment to fostering a more compassionate society.

                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 3 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">03</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Annual Rakhi Tribute to Jawans</h5>
                                <p className="text-left">
                                  Each year, our students celebrate Raksha Bandhan with soldiers, sending Rakhis to jawans as a gesture of gratitude and respect. This initiative instills patriotism and reminds students of the sacrifices made by the armed forces to keep our nation safe.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 4 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">04</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Sustainable Green Initiatives with GoSharpener</h5>
                                <p className="text-left">
                                  Our partnership with GoSharpener aligns with our mission to cultivate environmental stewardship in students. GoSharpener empowers youth with the skills and knowledge to advocate for sustainability, fostering a sense of responsibility for the planet. Together, we inspire students to drive sustainable change and become future leaders in environmental conservation.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Card 5 */}
                          <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">05</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Commitment to the United Nations’ 17 Sustainable Development Goals (SDGs)</h5>
                                <p className="text-left">
                                  In line with our vision for a brighter, more equitable future, we actively work towards the United Nations’ 17 Sustainable Development Goals. These goals guide our CSR activities, focusing on areas like quality education, health, and environmental responsibility, enabling students to participate in meaningful actions that contribute to global progress.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                        
                        </div>
                      {/* Learning domain */}
                      <div className="row justify-content-center g-1 my-5">
                        {/* <div className="text-center mb-4">
                          <h5 className="fw-bold" style={{ textAlign: "center" }}>Learning Domain</h5>
                        </div> */}
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/1.png"
                              />
                              <p className='mt-2'>No Poverty</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/2.png"
                              />
                              <p className='mt-2'>Zero Hunger</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/3.png"
                              />
                              <p className='mt-2'>Good Health 
                              & Well-Being</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/4.png"
                              />
                              <p className='mt-2'>Quality Education</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/5.png"
                              />
                              <p className='mt-2'>Gender Equality</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/6.png"
                              />
                              <p className='mt-2'>Clean Water & Sanitation</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/7.png"
                              />
                              <p className='mt-2'>Affordable & Clean Energy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/8.png"
                              />
                              <p className='mt-2'>Decent Work & Economic Growth</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/9.png"
                              />
                              <p className='mt-2'>Industry, Innovation & Infrastructure</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/10.png"
                              />
                              <p className='mt-2'>Reduced Inequalities</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/11.png"
                              />
                              <p className='mt-2'>Sustainable Cities & Communities</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/12.png"
                              />
                              <p className='mt-2'>Responsible Consumption & Production</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/13.png"
                              />
                              <p className='mt-2'>Climate Action</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/14.png"
                              />
                              <p className='mt-2'>Life Below Water</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/15.png"
                              />
                              <p className='mt-2'>Life On Land</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/16.png"
                              />
                              <p className='mt-2'>Peace, Justice & Strong Institution</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/17.png"
                              />
                              <p className='mt-2'>Partnership for the Goals</p>
                            </div>
                          </div>
                        </div>
                     

                      </div>
                      <div className='row justify-content-center my-5'>
                        <p style={{textAlign:"center"}}>Through democratic selection and parliamentary procedures, the Student Cabinet upholds a model of inclusive leadership, offering every student the opportunity to grow as a leader and contribute meaningfully to their school community.</p>
                          <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                          {/* Replace with your image source */}
                          <Image src='/images/who-we-are/ramagya-foundation-video-bg.png' alt="" width={650} height={370} />
                          {/* Play button overlay */}
                          <div className="play-button">
                            {/* <i className="bi bi-play-circle-fill"></i> */}
                            <Link href="https://www.youtube.com/watch?v=8n75vK3X9BE" target="_blank">
                              <Image src='/images/video-play.webp' alt="play button" width={80} height={80}/>
                            </Link>
                            {/* <Image src='/images/video-play.webp' alt="" width={80} height={80} onClick={handleShow} /> */}
                            {/* Popup Modal */}
                            {/* <Modal show={show} onHide={handleClose} centered>
                              <Modal.Header closeButton>
                                <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div style={{ width: '100%', height: '315px' }}>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </Modal.Body>
                            </Modal> */}
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                   
                  </section>  
                </Tab>
                <Tab eventKey="contact" title="NIPUNTA">
                <section section className="explore-section my-5">
                    <div className="container">
                      <div className='row justify-content-center my-5'>
                        <div className='col-md-12'>
                          <div className='about-content'>
                            <h2
                              className="main-heading-internal-pages wow animate__animated animate__none"
                              style={{ textAlign: "center" }}
                            >
                              NIPUNTA
                            </h2>

                            <p className="quote-text" style={{ textAlign: "center" }}>A Gateway to Professional Growth and Career Exploration</p>

                              <p style={{ textAlign: "center" }}>At Ramagya School, we believe in providing our students with opportunities that bridge the gap between classroom learning and real-world experience. Our NIPUNTA summer internship program is designed to offer students invaluable exposure to the professional world, helping them develop the practical skills and industry insights they need to succeed in their future careers.</p>
                              <p style={{ textAlign: "center" }}>Held annually from June 10th to June 21st, NIPUNTA connects students with leading multinational corporations, industry experts, and corporate leaders. Through this program, students gain hands-on experience and network with professionals in various fields, including law, healthcare, business, and more</p>
                              <p style={{ textAlign: "center" }}>By interning with companies such as MSAP & Associates, Captains & Bells, Shyam Hospital, Chaudhary Law Associates, Rostfrei Steels, and the Ramagya Group Corporate Office, students are immersed in the day-to-day operations of real-world businesses. They learn not only about the technical aspects of these industries but also about the key skills and qualities that drive professional success.</p>

                              {/* <p style={{ textAlign: "center" }}>Key roles of the Student Driven Society at Ramagya School include:</p> */}


                          </div>
                        </div>
                      </div>
                    
                      {/* Key roles of the Student Driven Society at Ramagya School include: */}
                        {/* Grid for Cards */}
                        <div className="row justify-content-center my-5 g-1">
                        <p style={{ textAlign: "center" }}>NIPUNTA aims to:</p>
                          {/* Card 1 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">01</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Provide students with practical experience in various fields.</h5>
                                {/* <p className="text-left">
                                  Students have the opportunity to take on leadership roles, organizing and executing events and projects that contribute to school spirit and community welfare.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 2 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">02</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Offer a chance to explore diverse career paths, empowering students to make informed decisions about their future.</h5>
                                {/* <p className="text-left">
                                  Through projects and activities, students are motivated to participate actively in school life and contribute to its development.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 3 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">03</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Build a network of professional connections that can guide them through their career journeys.</h5>
                                {/* <p className="text-left">
                                  The student council serves as a model of democracy, with student representatives selected through elections, ensuring the participation of peers, teachers, and administrative heads in decision-making processes.
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* Card 4 */}
                          <div className="col-md-3">
                            <div className="card h-100 border-0 shadow-sm">
                              <div className="card-value-body text-left">
                                <h2 className="card-number text-left">04</h2>
                                <h5 className="card-subtitle mb-3 fw-bold">Equip students with industry-relevant skills, boosting their confidence and competence for the workforce.</h5>
                                {/* <p className="text-left">
                                  The society fosters personal growth by encouraging students to develop essential skills in organization, leadership, and problem-solving.
                                </p> */}
                              </div>
                            </div>
                          </div>
                        
                        </div>

                        {/* Footer Text */}
                        <div className="mt-5 text-center">
                          <p className="text-muted">
                             Through NIPUNTA, Ramagya School equips students with the tools and knowledge to embark on their professional journey, turning aspirations into tangible career goals.
                          </p>
                        </div>
                        <div className='row justify-content-center my-5'>
                          <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                          {/* Replace with your image source */}
                          <Image src='/images/who-we-are/ramagya-foundation-video-bg.png' alt="" width={650} height={370} />
                          {/* Play button overlay */}
                          <div className="play-button">
                            {/* <i className="bi bi-play-circle-fill"></i> */}
                            <Link href="https://www.youtube.com/watch?v=8n75vK3X9BE" target="_blank">
                              <Image src='/images/video-play.webp' alt="play button" width={80} height={80}/>
                            </Link>
                            {/* <Image src='/images/video-play.webp' alt="" width={80} height={80} onClick={handleShow} /> */}
                            {/* Popup Modal */}
                            {/* <Modal show={show} onHide={handleClose} centered>
                              <Modal.Header closeButton>
                                <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div style={{ width: '100%', height: '315px' }}>
                                  <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </Modal.Body>
                            </Modal> */}
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

export default EvolveTabination