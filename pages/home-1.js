import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '/pages/components/Header';
// import Footer from '/pages/components/Footer';
// import Image from 'next/image';
// import Link from 'next/link';
import HomeVideoSection from './components/HomeVideoSection';
import HomeSchoolBranchSection from './components/HomeSchoolBranchSection';
import HomeExploreSection from './components/HomeExploreSection';
import HomeExperimentSection from './components/HomeExperimentSection';
import HomeInnovateSection from './components/HomeInnovateSection';
import HomeEvolveSection from './components/HomeEvolveSection';
import HomeLeadSection from './components/HomeLeadSection';
import HomeSectionFooter from './components/HomeSectionFooter';

const Home = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id); // Set the clicked section as active
  };

  useEffect(() => {
    // Use IntersectionObserver to detect which section is currently in view
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value to suit your needs
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta
          name="description"
          content="Ramagya School is among the best CBSE schools in Noida, Noida Extension, Greater Noida, and Dadri. We are one of the top 10 schools in Noida, Noida Extension, Greater Noida, and Dadri. Ramagya School is voted by the TOI survey as one of the top 5 Senior Secondary schools in Delhi-NCR."
        />
        <meta
          name="keywords"
          content="Best School in Noida, Schools in Noida, Noida Extension, Greater Noida and Dadri, CBSE Schools in Noida, Noida Extension, Greater Noida and Dadri, Top Schools in Noida, Noida Extension, Greater Noida and Dadri, top 10 schools in Noida, Noida Extension, Greater Noida and Dadri"
        />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>
      <Header />
      {/* Sticky Navigation Menu */}
      <nav className="sticky-nav">
        <div className="nav-buttons">
          <button
            className={activeSection === 'section1' ? 'active' : ''}
            onClick={() => scrollToSection('section1')}
          >
           {/* SLIDER */}
          </button>
          <button
            className={activeSection === 'section7' ? 'active' : ''}
            onClick={() => scrollToSection('section7')}
          >
            {/* BRANCH */}
          </button>
          <button
            className={activeSection === 'section2' ? 'active' : ''}
            onClick={() => scrollToSection('section2')}
          >
           EXPLORE
          </button>
          <button
            className={activeSection === 'section3' ? 'active' : ''}
            onClick={() => scrollToSection('section3')}
          >
           EXPERIMENT
          </button>
          <button
            className={activeSection === 'section4' ? 'active' : ''}
            onClick={() => scrollToSection('section4')}
          >
            INNOVATE
          </button>
          <button
            className={activeSection === 'section5' ? 'active' : ''}
            onClick={() => scrollToSection('section5')}
          >
            EVOLVE
          </button>
          <button
            className={activeSection === 'section6' ? 'active' : ''}
            onClick={() => scrollToSection('section6')}
          >
            LEAD
          </button>
        </div>
      </nav>

      {/* Fullpage Sections */}
      <div className="fullpage-container">
          <HomeVideoSection/>
          <HomeSchoolBranchSection/>
          <HomeExploreSection/>
          <HomeExperimentSection/>
          <HomeInnovateSection/>
          <HomeEvolveSection/>
          <HomeLeadSection/>
          <HomeSectionFooter/>
      </div>

      
    </>
  );
};

export default Home;