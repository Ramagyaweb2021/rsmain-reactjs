import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const MobileSectionComponent = () => {
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount

  const sections = [
    {
      title: 'BOOK REVIEWS',
      description: 'Sharpens critical thinking as students discuss themes, characters, and plots from the Book of the Month.',
      imgSrc: '/images/experiments/book-review.webp', // Replace with actual path
    },
    {
      title: 'CLUBS',
      description: 'Clubs foster creativity, collaboration and life skills, while sharpening improvisation, confidence, and communication.',
      imgSrc: '/images/experiments/clubs.webp', // Replace with actual path
    },
    {
      title: 'JODO GYAN',
      description: 'Enhancing number sense and problem-solving through hands-on, innovative learning methods, building a solid math foundation.',
      imgSrc: '/images/experiments/jadu-gyan.webp', // Replace with actual path
    },
    {
      title: 'CHARACTER ENHANCEMENT',
      description: 'Geeta Saar, TED Talks, and Circle Time foster emotional intelligence, leadership, and personal growth in students.',
      imgSrc: '/images/experiments/character.webp', // Replace with actual path
    },
    {
      title: 'VISUAL & PERFORMING ARTS',
      description: 'Cultivating creativity while boosting cognitive, emotional, and motor skill development in students.',
      imgSrc: '/images/experiments/visual-arts.webp', // Replace with actual path
    },
    {
      title: 'STEM',
      description: 'Hands-on experiments and STREAM projects boost critical thinking, while the Computer Lab enhances coding skills and technological fluency.',
      imgSrc: '/images/experiments/jadu-gyan.webp', // Replace with actual path
    },
  ];

  return (
    <section className="learn section fp-section fp-table fp-completely" id="experiment-mobile">
      <div className="fp-tableExperiment">
        <h1 className="">
          EXPERIMENT
          <span className="lineclass" />
          <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
            WORKSHOPS, PROGRAMS AND EXPERIENCES
          </span>
        </h1>
        <p>
          Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning. The sessions under this stimulate critical thinking, enhance vocational and life skills, encourage learning collaboration and creativity while pursuing their passions and nurture artistic talent, enhance cognitive, emotional, and motor skills. We encourage hands-on experiments that bring theory to life, and learning integrates real-world problem-solving through innovative, multidisciplinary projects. Together, these programs ensure students engage in comprehensive, holistic development!
        </p>
        <div className='experiment-for-mobile'>
          <div className="container mobile-only">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`row mb-4 wow animate__animated animate__fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }} // Increment delay for each section
              >
                <div className="col-12">
                  <Image
                    src={section.imgSrc}
                    alt={section.title}
                    width={500}
                    height={150}
                    className="section-image"
                  />
                </div>
                <div className="col-12 mt-3">
                  <h3 className="section-title">{section.title}</h3>
                  <p className="section-description">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Learn more button */}
        <div className="d-flex justify-content-center align-items-center mt-20">
          <div className="learn-more-button">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSectionComponent;
