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

const MentalHealthClub = () => {
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
        <title>Mental Health Club | Ramagya School</title>
        <meta name="description" content="Mental Health Club" />
        <meta name="keywords" content="Mental Health Club" />
        <link rel="canonical" href="https://ramagyaschool.com/mental-health-club" />
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
                  Mental Health Club
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
              src="/images/mental-health-club/slide-1.png" // Replace with the actual image path
              alt="Sports Activity"
              width={371}
              height={423}
              className="w-100 wow animate__animated animate__fadeInLeft" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 col-md-12 text-center px-5">
            {/* <h3 className='main-heading-internal-page mb-3'>Transforming Health, Empowering Lives</h3> */}
            <p>
               At Ramagya School Noida, we prioritize the holistic well-being of our students, fostering an environment where mental health and personal growth are as significant as academic success. Our initiatives are thoughtfully designed to nurture inner peace, resilience, and a sense of purpose, enabling students to unlock their full potential.
            </p>
          
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/mental-health-club/slide-2.png" // Replace with the actual image path
              alt="Sports Facility"
              width={371}
              height={423}
              className="w-100 animate__animated animate__fadeInRight" style={{ animationDelay: '0.2s' }}
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
                <Image src='/images/mental-health-club/1.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">01</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Timeless Wisdom Meets Modern Wellness</h5>
                  <p className="text-left">
                  To promote mental clarity and emotional stability, Ramagya integrates value-education classes inspired by the teachings of the Bhagavad Gita and the practice of dhyana (meditation). These sessions empower students to lead meaningful and fulfilling lives by addressing their physical, emotional, intellectual, and spiritual well-being. Through activities like Transcendental Meditation (TM), students develop a calm and focused mindset, essential for navigating life’s challenges.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/mental-health-club/2.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">02</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Guidance from Experts</h5>
                  <p className="text-left">
                    Our expert clinical psychologists, Ms. Anchal Harjai and Ms. Harneer Kaur Khera, regularly interact with students to provide support, guidance, and tools for managing stress. Programs like Know Your Brain and Baal Saathee, along with engaging storytelling sessions based on the ancient wisdom of Panchatantra, instill leadership qualities and practical wisdom in students, preparing them for the complexities of modern life.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/mental-health-club/3.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">03</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Quiet Time Curriculum</h5>
                  <p className="text-left">
                    The Quiet Time Curriculum at Ramagya is a cornerstone of our mental health initiatives. Students and teachers alike practice Transcendental Meditation (TM) for 10 minutes twice daily. This routine has proven to reduce anxiety, enhance focus, and foster harmonious development. Beyond academic excellence, this practice cultivates values such as discipline, cooperation, sincerity, tolerance, and moral integrity, shaping well-rounded individuals.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/mental-health-club/4.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">04</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Life Lessons Through Stories</h5>
                  <p className="text-left">
                  For our primary students, storytelling sessions from Panchatantra serve as an engaging way to impart moral values and life skills. These timeless tales inspire students to embrace empathy, courage, and wisdom, making their lives richer and more meaningful.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/mental-health-club/5.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">05</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">Empowering Students to Thrive</h5>
                  <p className="text-left">
                  In today’s fast-paced world, students face a myriad of challenges. Ramagya School believes that with the right mindset and guidance, they can overcome any obstacle. Through Circle Time sessions held every alternate afternoon, we focus on instilling values like truth, kindness, and inner peace. These practices equip students with the tools to adapt, grow, and lead in an ever-changing world.

                  </p>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-4 col-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image src='/images/mental-health-club/6.png' alt="card-image" width={40} height={40}/>
                  <h2 className="card-number text-left">06</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">The Power of Connection</h5>
                  <p className="text-left">
                    Ramagya ensures that every student feels supported. Our regular webinars for students and parents address emerging concerns and constraints, fostering open communication and mutual understanding. Dedicated counselors maintain a steady connection with students, parents, and teachers, offering timely assistance whenever needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-5'>
            <p style={{textAlign:"center"}}>At Ramagya School Noida, mental health is not just a program - it’s a way of life. Through these transformative initiatives, we aim to shape confident, compassionate, and resilient individuals ready to lead fulfilling lives and make a difference in the world.</p>
          </div>

          <div className="row g-0 align-items-center">
              <div className="col-md-3 col-12 card-body-our-leaders">
                <Image
                  alt="Managing Director"
                  loading="lazy"
                  width={450}
                  height={300}
                  src="/images/mental-health-club/utkarsh-gupta.png"
                />
              </div>
              <div className="col-md-9 col-12">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">Managing Director | Ramagya Group</p>
                  <h6 className="fw-bold">Mr. Utkarsh Gupta</h6>
                  <p className="text-muted small">
                    Mr. Utkarsh Gupta, Managing Director of Ramagya Group, expressed, “At Ramagya, we believe that sound mental health and an awakened soul are the keys to unlocking the full potential of our students. To this end, we have introduced value-education classes inspired by the timeless wisdom of the Bhagavad Gita. The teachings of the Gita serve as a beacon of light, guiding us to perform our duties with integrity while remaining unattached to the outcomes.”</p>

                    <p className="text-muted small"> He further emphasized, “The techniques of yoga and meditation detailed in the Gita empower students to stay motivated and achieve mental peace. This balance is essential for sharpening focus, making informed decisions, and excelling in both academics and life.”</p>

                    <p>Highlighting the significance of mental well-being, Mr. Gupta added, “Good mental health is integral to achieving material stability and personal success. By fostering mental equilibrium through these practices, we aim to help our students navigate challenges with resilience and confidence.”

                  </p>
                  {/* <button className="btn btn-link p-0" style={{ color: "#002C39" }}>
                    Read More
                  </button> */}
                </div>
              </div>
            </div>

        </div>
                      
      </section>

        <HomeSectionFooter />
    </>
  );
};

export default MentalHealthClub;
