import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '/pages/components/Header';
import HomeVideoSection from './components/HomeVideoSection';
import HomeSchoolBranchSection from './components/HomeSchoolBranchSection';
import HomeExploreSection from './components/HomeExploreSection';
import HomeExperimentSection from './components/HomeExperimentSection';
import HomeInnovateSection from './components/HomeInnovateSection';
import HomeEvolveSection from './components/HomeEvolveSection';
import HomeLeadSection from './components/HomeLeadSection';
import HomeGallerySection from './components/HomeGallerySection'; 
import HomeDifferenceSection from './components/HomeDifferenceSection'; 
import HomeAwardsSection from './components/HomeAwardsSection'; 
import HomeUpdatesSection from './components/HomeUpdatesSection'; 
import HomeTestimonialSection from './components/HomeTestimonialSection'; 
import HomeSocialSection from './components/HomeSocialSection'; 
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
          {/* Add buttons for new sections */}
          <button
            className={activeSection === 'section1' ? 'active' : ''}
            onClick={() => scrollToSection('section1')}
          >
            SLIDER
          </button>
          <button
            className={activeSection === 'section7' ? 'active' : ''}
            onClick={() => scrollToSection('section7')}
          >
            BRANCH
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
          {/* Add new buttons */}
          <button
            className={activeSection === 'section8' ? 'active' : ''}
            onClick={() => scrollToSection('section8')}
          >
            GALLERY
          </button>
          <button
            className={activeSection === 'section9' ? 'active' : ''}
            onClick={() => scrollToSection('section9')}
          >
            THE DIFFERENCE WE MAKE
          </button>
          <button
            className={activeSection === 'section10' ? 'active' : ''}
            onClick={() => scrollToSection('section10')}
          >
            AWARDS
          </button>
          <button
            className={activeSection === 'section11' ? 'active' : ''}
            onClick={() => scrollToSection('section11')}
          >
            SCHOOL UPDATES
          </button>
          <button
            className={activeSection === 'section12' ? 'active' : ''}
            onClick={() => scrollToSection('section12')}
          >
            TESTIMONIALS
          </button>
          <button
            className={activeSection === 'section13' ? 'active' : ''}
            onClick={() => scrollToSection('section13')}
          >
            SOCIAL
          </button>
        </div>
      </nav>

      {/* Fullpage Sections */}
      <div className="fullpage-container">
        <HomeVideoSection />
        <HomeSchoolBranchSection />
        <HomeExploreSection />
        <HomeExperimentSection />
        <HomeInnovateSection />
        <HomeEvolveSection />
        <HomeLeadSection />
        <HomeGallerySection />
        <HomeDifferenceSection />
        <HomeAwardsSection />
        <HomeUpdatesSection />
        <HomeTestimonialSection />
        <HomeSocialSection />
        <HomeSectionFooter />
      </div>
    </>
  );
};

export default Home;