// components/FullPage.js
import { useEffect, useState } from 'react';
import Header from '/pages/components/Header';
import ScrollspyMenu from './components/scrollspyHomeComponents/ScrollspyMenu';
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
import Head from 'next/head';

const FullPage = () => {
  const [activeSection, setActiveSection] = useState('section1');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = ['slider', 'branch', 'explore', 'experiment', 'innovate', 'lead', 'gallery', 'difference', 'awards', 'school-updates', 'testimonials', 'social-feeds', 'footer' ];

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop >= -window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        window.scrollTo({
          top: window.innerHeight + window.scrollY,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: window.scrollY - window.innerHeight,
          behavior: 'smooth',
        });
      }
    };

    const handleKeyDown = (e) => {
      const currentIndex = sections.indexOf(activeSection);
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        scrollToSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, 
  [activeSection, sections]);

  return (
    <div className="fullpage" style={{marginTop:"-50px"}}>
       <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta
          name="description"
          content="Ramagya School is among the best CBSE schools in Noida, Noida Extension, Greater Noida, and Dadri."
        />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>
      <Header />
      <ScrollspyMenu activeSection={activeSection} scrollToSection={scrollToSection} />
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
          {/* <section id="slider" className="section" style={{ backgroundColor: '#ff6347' }}>
          <h1>slider</h1>
          </section>
          <section id="branch" className="section" style={{ backgroundColor: '#4682b4' }}>
          <h1>branch</h1>
          </section>
          <section id="explore" className="section" style={{ backgroundColor: '#3cb371' }}>
          <h1>explore</h1>
          </section> */}
    </div>
  );
};

export default FullPage;
