import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image'
import Link from 'next/link'
// import { Link } from 'react-scroll';
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
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">01</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Orator’s Podium</h5>
                              <p className="text-left">
                                Enhancing communication skills and confidence through speech, helping students overcome stage fright and express ideas freely.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">02</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Best out of waste</h5>
                              <p className="text-left">
                                Promoting creativity and environmental consciousness by transforming waste into useful, innovative creations.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">03</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Eco Clubs</h5>
                              <p className="text-left">
                                Fostering environmental awareness and sustainability among students through hands-on green initiatives.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 4 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">04</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Quiz</h5>
                              <p className="text-left">
                                Encouraging curiosity and knowledge expansion through engaging, thought-provoking quizzes beyond traditional learning.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 5 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">05</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">IT</h5>
                              <p className="text-left">
                                Integrating technology to enhance learning, collaboration, and creativity in classrooms.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 6 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">06</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Yoga & Meditation</h5>
                              <p className="text-left">
                                Cultivating mindfulness, resilience, and well-being through yoga and meditation practices.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 7 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">07</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Chess</h5>
                              <p className="text-left">
                                Developing strategic thinking, patience, and teamwork through the intellectually stimulating game of chess.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 8 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">08</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">NCC</h5>
                              <p className="text-left">
                                Instilling discipline and leadership through foundational military training and national service.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 9 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">09</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">3rd Language</h5>
                              <p className="text-left">
                                Enhancing linguistic skills and cultural awareness through the study of foreign languages.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 10 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">10</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Sculpting</h5>
                              <p className="text-left">
                                Nurturing creativity and dexterity through hands-on sculpting and three-dimensional art.
                              </p>
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
                              <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
                              {/* Play button overlay */}
                              <div className="play-button">
                                {/* <i className="bi bi-play-circle-fill"></i> */}
                                <Link href="https://www.youtube.com/watch?v=uH-Q0PPe-ew" target="_blank">
                                  <Image src='/images/video-play.webp' alt="play button" width={80} height={80} />
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
                              style={{ textAlign: "center" }}
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                            <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
                            {/* Play button overlay */}
                            <div className="play-button">
                              {/* <i className="bi bi-play-circle-fill"></i> */}
                              <Link href="https://www.youtube.com/watch?v=uH-Q0PPe-ew" target="_blank">
                                  <Image src='/images/video-play.webp' alt="play button" width={80} height={80} />
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
                              style={{ textAlign: "center" }}
                            >
                              CSR INITIATIVE
                            </h2>

                            <p className="quote-text" style={{ textAlign: "center" }}>CULTIVATING COMPASSION AND RESPONSIBILITY</p>

                            <p style={{ textAlign: "center" }}>At Ramagya School, we firmly believe that the true measure of success and fulfillment in life is not defined by what we acquire, but by what we give to others. With this guiding principle, we instill the ‘Art of Giving’ in the hearts of our students, nurturing them to become responsible, selfless citizens who contribute positively to society.</p>

                            <p style={{ textAlign: "center" }}>As Mahatma Gandhi wisely said, &#34;To find yourselves, lose yourselves in the life of others.&#34; Through our Corporate Social Responsibility (CSR) initiatives, we aim to empower our students to transform this philosophy into action, making a meaningful impact on the lives of others and the community around them.</p>

                            <p style={{ textAlign: "center" }}>Our CSR activities not only foster a sense of responsibility and compassion but also nurture students as ‘Change-Makers’ who are empathetic, socially conscious, and always ready to serve others. The following initiatives form the core of our Community Care Programs, ensuring that our students evolve into compassionate, engaged citizens:</p>


                          </div>
                        </div>
                      </div>
                      {/* Key roles of the Student Driven Society at Ramagya School include: */}
                      {/* Grid for Cards */}
                      <div className="row justify-content-center my-5 g-1">
                        <p style={{ textAlign: "center" }}>Our CSR activities are brought to life through several dedicated initiatives:</p>
                        {/* Card 1 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">01</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Ramagya Foundation</h5>
                              <p className="text-left">
                                As a non-profit organization under Purusharth Charitable Society, the Ramagya Foundation is committed to sustainable progress, social justice, and community development. Our foundation works across various sectors including Education, Health, Women Empowerment, Animal Welfare, and more, aiming to improve living standards and create an equitable society for all. By nurturing talent and values, we inspire our students to actively contribute to a better world.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">02</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Nishabd</h5>
                              <p className="text-left">
                                Through our Nishabd initiative, Ramagya School advocates for the humane treatment of animals, particularly stray dogs. Our students actively participate in animal welfare activities, providing support to local shelters and promoting kindness towards all creatures. This initiative not only enhances student&#39;s empathy but also reinforces the importance of responsible pet ownership and animal care.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">03</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Annual Rakhi Tribute to Jawans</h5>
                              <p className="text-left">
                                Each year, our students celebrate Raksha Bandhan by sending Rakhis to the brave soldiers of our armed forces as a gesture of gratitude and respect. This tradition instills in our students a sense of patriotism and reminds them of the sacrifices made by the soldiers to keep our nation safe.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 4 */}
                        <div className="col-md-3 col-6">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">04</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Sustainable Green Initiatives with GoSharpener</h5>
                              <p className="text-left">
                                In partnership with GoSharpener, we promote environmental stewardship among our students. Through educational programs and sustainability campaigns, students are empowered to advocate for eco-friendly practices and become future leaders in environmental conservation. Together, we inspire students to adopt sustainable habits and drive positive change for the planet.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 5 */}
                        <div className="col-md-6 ">
                          <div className="card h-100 border-0 shadow-sm">
                            <div className="card-value-body text-left">
                              <h2 className="card-number text-left">05</h2>
                              <h5 className="card-subtitle mb-3 fw-bold">Commitment to the United Nations’ 17 Sustainable Development Goals (SDGs)</h5>
                              <p className="text-left">
                                Aligned with the United Nations’ SDGs, we focus on quality education, health, and environmental responsibility, among others, in our CSR efforts. These goals guide our activities, ensuring that students engage in meaningful actions that contribute to global progress and a more sustainable future.
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
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/1.webp"
                              />
                              <p className='mt-2'>No Poverty</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/2.webp"
                              />
                              <p className='mt-2'>Zero Hunger</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/3.webp"
                              />
                              <p className='mt-2'>Good Health
                                & Well-Being</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/4.webp"
                              />
                              <p className='mt-2'>Quality Education</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/5.webp"
                              />
                              <p className='mt-2'>Gender Equality</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/6.webp"
                              />
                              <p className='mt-2'>Clean Water & Sanitation</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/7.webp"
                              />
                              <p className='mt-2'>Affordable & Clean Energy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/8.webp"
                              />
                              <p className='mt-2'>Decent Work & Economic Growth</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/9.webp"
                              />
                              <p className='mt-2'>Industry, Innovation & Infrastructure</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/10.webp"
                              />
                              <p className='mt-2'>Reduced Inequalities</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/11.webp"
                              />
                              <p className='mt-2'>Sustainable Cities & Communities</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/12.webp"
                              />
                              <p className='mt-2'>Responsible Consumption & Production</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/13.webp"
                              />
                              <p className='mt-2'>Climate Action</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/14.webp"
                              />
                              <p className='mt-2'>Life Below Water</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/15.webp"
                              />
                              <p className='mt-2'>Life On Land</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/16.webp"
                              />
                              <p className='mt-2'>Peace, Justice & Strong Institution</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6 mb-4">
                          <div className="card text-center h-100 border-1">
                            <div className="card-value-body">
                              <Image
                                alt="icon"
                                loading="lazy"
                                width={80}
                                height={80}
                                src="/images/evolve/17.webp"
                              />
                              <p className='mt-2'>Partnership for the Goals</p>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className='row justify-content-center my-5'>
                        <p style={{ textAlign: "center" }}>Through these CSR initiatives, Ramagya School instills values of empathy, leadership, and social responsibility, encouraging students to evolve into conscientious individuals committed to building a better world.</p>

                        <h6 className='main-heading-internal-pages' style={{ textAlign: "center" }}>Community Care Programs by Age Group</h6>
                        <p style={{ textAlign: "center" }}>At Ramagya School, our students are encouraged to participate in community initiatives based on their age group, fostering a sense of responsibility and community engagement from a young age:</p>
                        {/* <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                            <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
                            <div className="play-button">
                              <Link href="https://www.youtube.com/watch?v=8n75vK3X9BE" target="_blank">
                                <Image src='/images/video-play.webp' alt="play button" width={80} height={80} />
                              </Link>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/* Junior School Section */}
                      <div className="row border-1 rounded p-4 mb-4 shadow-sm bg-white">
                        <div className="col-md-3">
                          <Image
                            src="/images/evolve/junior-school-grade-1.webp" // Replace with the actual image path
                            alt="Junior School"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-9">
                          <h3 className='fw-bold mb-4'>Junior School (Grade 1-5)</h3>
                          <ul className="list-unstyled">
                            <li className='mb-4'>
                              <strong>Hygiene Education Outreach</strong> Junior students visit underserved areas to teach children the importance of hygiene, including handwashing, dental care, and regular bathing, while distributing hygiene kits to reinforce these practices.
                            </li>
                            <li className='mb-4'>
                              <strong>Park Clean-up & Gardening Project</strong> Students lead local park clean-ups and plant community gardens, fostering environmental stewardship and promoting sustainability.
                            </li>
                            <li className='mb-4'>
                              <strong>Clothing & Toy Drives</strong> Students organize drives to collect and donate gently used clothes and toys to orphanages, spreading kindness and generosity.
                            </li>
                            <li className='mb-4'>
                              <strong>The Rise of Women</strong> Grade 5 students engage with an NGO to learn about the education and empowerment of destitute girls, promoting gender equality and the value of education for girls.
                            </li>
                            <li className='mb-4'>
                              <strong>Birthday Celebrations for Staff</strong> Students celebrate the birthdays of caretakers and staff members, cultivating gratitude, empathy, and respect within the school community.
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Middle School Section */}
                      <div className="row border-1 rounded p-4 mb-4 shadow-sm bg-white">
                        <div className="col-md-3">
                          <Image
                            src="/images/evolve/middle-school.webp" // Replace with the actual image path
                            alt="Middle School"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-9">
                          <h3 className='fw-bold mb-4'>Middle School (Grade 6-8)</h3>
                          <ul className="list-unstyled">
                            <li className='mb-4'>
                              <strong>Environmental Conservation Projects</strong> Middle school students participate in tree planting, recycling initiatives, and campaigns to raise awareness about environmental issues.
                            </li>
                            <li className='mb-4'>
                              <strong>Animal Shelter Support</strong> Students visit animal shelters, providing supplies and support to improve the welfare of stray animals and promote responsible pet care.
                            </li>
                            <li className='mb-4'>
                              <strong>Support for Senior Citizens</strong> Students volunteer at old age homes, assisting with daily activities and ensuring the elderly feel valued and supported.
                            </li>
                            <li className='mb-4'>
                              <strong>Peer Tutoring Programs</strong> Students mentor peers in academic subjects, fostering collaboration and supporting the academic growth of others.
                            </li>
                            <li className='mb-4'>
                              <strong>Birthday Celebrations for Staff:</strong> Students celebrate the birthdays of caretakers and staff members, cultivating gratitude, empathy, and respect within the school community.
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Senior School Section */}
                      <div className="row border-1 rounded p-4 mb-4 shadow-sm bg-white">
                        <div className="col-md-3">
                          <Image
                            src="/images/evolve/senior-school.webp" // Replace with the actual image path
                            alt="Junior School"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-9">
                          <h3 className='fw-bold mb-4'>Senior School (Grade 9-12)</h3>
                          <ul className="list-unstyled">
                            <li className='mb-4'>
                              <strong>Tutoring and Mentoring Programs</strong> Senior students mentor younger students, offering personalized support and guidance to enhance their academic performance.
                            </li>
                            <li className='mb-4'>
                              <strong>Environmental Initiatives</strong> Senior students engage in environmental campaigns, including tree planting and pollution awareness, promoting eco-consciousness across the school community.
                            </li>
                            <li className='mb-4'>
                              <strong>Community Sports & Fitness Programs</strong> Students promote physical health and wellness through sports programs and fitness initiatives within the community.
                            </li>
                            <li className='mb-4'>
                              <strong>Senior Citizen Outreach</strong> Senior students connect with elderly individuals in old age homes, offering companionship and support while helping improve their quality of life.
                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className='row justify-content-center my-5'>
                        <p style={{ textAlign: "center" }}>Through these CSR initiatives, Ramagya School instills values of empathy, leadership, and social responsibility, encouraging students to evolve into conscientious individuals committed to building a better world.</p>
                        <div className="col-md-6 mx-auto g-0">
                          <div className="image-section">
                            <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
                            <div className="play-button">
                               <Link href="https://www.youtube.com/watch?v=uH-Q0PPe-ew" target="_blank">
                                  <Image src='/images/video-play.webp' alt="play button" width={80} height={80} />
                                </Link>
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                            <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
                            {/* Play button overlay */}
                            <div className="play-button">
                              {/* <i className="bi bi-play-circle-fill"></i> */}
                              <Link href="https://www.youtube.com/watch?v=uH-Q0PPe-ew" target="_blank">
                                  <Image src='/images/video-play.webp' alt="play button" width={80} height={80} />
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