import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
import PoineerInSportsInternalPageScrollspyMenu from './components/PoineerInSportsInternalPageScrollspyMenu';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const LifeSkills = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // return () => {
    //   wow.destroy();
    // };
  }, []);

  return (
    <>
      <Head>
        <title>Life Skills | Ramagya School</title>
        <meta name="description" content="Life Skills" />
        <meta name="keywords" content="Life Skills" />
        <link rel="canonical" href="https://ramagyaschool.com/life-skills" />
      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec poinner-banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                 Life Skills
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PoineerInSportsInternalPageScrollspyMenu/>
      <section className="d-flex align-items-center justify-content-center py-5 bg-baalsaathi">
       <div className="container-fluid">
        <div className="row g-0 align-items-center">
          {/* Left Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/mental-health-club/slide-1.webp" // Replace with the actual image path
              alt="Sports Activity"
              width={371}
              height={423}
              className="w-100 wow animate__animated animate__fadeInLeft" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 col-md-12 text-center px-5">
            <h3 className='main-heading-internal-page mb-3'>Empowering the Journey Beyond the Classroom</h3>
            <p>
              Life skills are the foundation of a fulfilling, balanced, and responsible life. At Ramagya, we recognize the importance of equipping students with these essential tools to thrive not only in their families but also as valuable members of society.
              Our unique life skills program integrates seamlessly with our evolving curricula, preparing students to transition into responsible, confident, and self-aware young adults. It’s about more than academics-it&apos;s about nurturing the skills that inspire new ways of thinking, decision-making, and adapting to the world with grace and purpose.

            </p>
          
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/mental-health-club/slide-2.webp" // Replace with the actual image path
              alt="Sports Facility"
              width={371}
              height={423}
              className="w-100 animate__animated animate__fadeInRight" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>
        </div>
       </div>
      </section>
      <section className='d-flex align-items-center justify-content-center py-5 bg-white'>
        <div className="container">
          {/* Grid for Cards */}
          <div className="row justify-content-center my-0 g-1">
          {/* <p style={{ textAlign: "center" }}>Key roles of the Student Driven Society at Ramagya School include:</p> */}
            {/* Card 1 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/life-skills/1.webp' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">01</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Critical Thinking and Problem-Solving</h5>
                  <p className="text-left">
                    Students explore innovative ways to address challenges and understand the impact of their decisions.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/life-skills/2.webp' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">02</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Confidence and Communication</h5>
                  <p className="text-left">
                    Building self-assurance in speaking and fostering collaboration in group settings.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/life-skills/3.webp' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">03</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Self-Awareness and Empathy</h5>
                  <p className="text-left">
                    Encouraging introspection while appreciating diverse perspectives.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/life-skills/4.webp' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">04</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Decision-Making</h5>
                  <p className="text-left">
                    Teaching students to analyze options, make informed choices, and understand the rationale behind their decisions.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/life-skills/5.webp' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">05</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Responsibility</h5>
                  <p className="text-left">
                   Instilling a sense of accountability for actions and their consequences.

                  </p>
                </div>
              </div>
            </div>
        
          </div>
          {/* <div className='row py-5'>
            <p style={{textAlign:"center"}}>At Ramagya School Noida, mental health is not just a program - it’s a way of life. Through these transformative initiatives, we aim to shape confident, compassionate, and resilient individuals ready to lead fulfilling lives and make a difference in the world.</p>
          </div> */}

          <div className="row g-3 align-items-center mt-50">
              <div className="col-md-6 col-12">
                <Image
                  alt="Managing Director"
                  loading="lazy"
                  width={655}
                  height={530}
                  src="/images/life-skills/school-cinema.webp"
                />
              </div>
              <div className="col-md-6 col-12">
                <div className="card-body-our-leaders">
                  <h6 className="fw-bold">SCHOOL CINEMA: Life Lessons through Stories</h6>
                  <p className="text-muted small">
                     Ramagya introduces School Cinema, a film-based learning module by LXL Ideas, that transforms life skills education into an engaging and memorable experience. Through award-winning films, thought-provoking workbooks, and interactive activities, School Cinema brings life lessons to the forefront, fostering stronger bonds among students, parents, and educators. Children resonate with the immersive storytelling and carry forward the values into their daily lives.</p>

                    <p className="text-muted small">Key lessons include:</p>

                     <ul className='custom-bullets'>
                         <li> Empathy & Compassion: Building bridges of understanding with others.</li>
                          <li>Communication & Kindness: Expressing oneself effectively and thoughtfully.</li>
                          <li>Dealing with Challenges: Facing bullying, competition, and technology addiction with resilience.</li>
                         <li> Values & Integrity: Honesty, unity, respect, and the value of money.</li>
                     </ul>

                     <p>Personal Growth: Staying motivated, appreciating abilities, and practicing perseverance.</p>
                </div>
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-md-5 col-12">
                <div className="card-body-our-leaders">
                  <h6 className="fw-bold">PERSONALIZED SUPPORT FOR EVERY LEARNER</h6>
                  <p className="text-muted small">
                  At Ramagya, we understand that every child learns differently. Our educators employ repetition, reinforcement, and tailored strategies to ensure every student absorbs and applies these critical life skills.
                   We believe academic success and life skills development are not mutually exclusive but complementary. </p>

                    <p className="text-muted small">This balanced approach ensures that Ramagyans emerge not just as achievers in academics but as compassionate, confident, and capable individuals ready to make a positive impact on the world. Life skills are the compass guiding our students toward brighter, more meaningful futures.</p>

                
                
                  {/* <button className="btn btn-link p-0" style={{ color: "#002C39" }}>
                    Read More
                  </button> */}
                </div>
              </div>
              <div className="col-md-7 col-12">
                <Image
                  alt="Managing Director"
                  loading="lazy"
                  width={655}
                  height={530}
                  src="/images/life-skills/personalised-support.webp"
                />
              </div>
            </div>

        </div>
                      
      </section>

        <HomeSectionFooter />
    </>
  );
};

export default LifeSkills;
