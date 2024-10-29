import { useEffect, useState } from 'react';
import Header from '/pages/components/Header';
import OfferPopup from './components/OfferPopup'
import ScrollspyMenu from './components/scrollspyHomeComponents/ScrollspyMenu';
import HomeVideoSection from './components/HomeVideoSection';
// import DownArrow from './components/DownArrowSchoolBranch'
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
import HomeSectionFooter from './components/HomeSectionFooter';
import Head from 'next/head';

const FullPage = () => {
  const [activeSection, setActiveSection] = useState('slider');

  // Section IDs array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = ['slider', 'branch', 'explore', 'experiment', 'innovate', 'evolve', 'lead', 'gallery', 'difference', 'awards', 'school-updates', 'testimonials', 'footer'];

  // Smooth scroll to section function
  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('.section');
      let currentSection = '';

      sectionElements.forEach((section) => {
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

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, sections]); // Depend only on `activeSection`

  return (
    <div className="fullpage">
      <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta
          name="description"
          content="Ramagya School is among the best CBSE schools in Noida, Noida Extension, Greater Noida, and Dadri."
        />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>
      <Header />
      <OfferPopup/>
      {/* <DownArrow/> */}
      <ScrollspyMenu activeSection={activeSection} scrollToSection={scrollToSection} />
        <section className="section" id="slider"><HomeVideoSection/></section>
        <section className="section" id="branch"><HomeSchoolBranchSection/></section>
        <section className="learn section fp-section fp-table" id="explore"><HomeExploreSection/></section>
        <section className="learn section fp-section fp-table" id="experiment"><HomeExperimentSection/></section>
        <section className="learn section fp-section fp-table" id="innovate"><HomeInnovateSection/></section>
        <section className="learn section fp-section fp-table" id="evolve"><HomeEvolveSection/></section>
        <section className="learn section fp-section fp-table" id="lead"><HomeLeadSection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist' id="difference"><HomeDifferenceSection/></section>
        <section className="learn section fp-section fp-table" id="gallery"><HomeGallerySection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist-awards' id='awards'><HomeAwardsSection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist' id="school-updates"><HomeUpdatesSection/></section>
        <section className="section" id="testimonials"><HomeTestimonialSection/></section>
        <section className="section footer" id="footer"><HomeSectionFooter/></section>
      {/* <div className="sections">
        <section className="section" id="slider"><HomeVideoSection/></section>
        <section className="section" id="branch"><HomeSchoolBranchSection/></section>
        <section className="learn section fp-section fp-table" id="explore"><HomeExploreSection/></section>
        <section className="learn section fp-section fp-table" id="experiment"><HomeExperimentSection/></section>
        <section className="learn section fp-section fp-table" id="innovate"><HomeInnovateSection/></section>
        <section className="learn section fp-section fp-table" id="evolve"><HomeEvolveSection/></section>
        <section className="learn section fp-section fp-table" id="lead"><HomeLeadSection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist' id="difference"><HomeDifferenceSection/></section>
        <section className="learn section fp-section fp-table" id="gallery"><HomeGallerySection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist-awards' id='awards'><HomeAwardsSection/></section>
        <section className='learn section fp-section fp-table bg-tropical-mist' id="school-updates"><HomeUpdatesSection/></section>
        <section className="section" id="testimonials"><HomeTestimonialSection/></section>
        <section className="section footer" id="footer"><HomeSectionFooter/></section>
      </div> */}
    </div>
  );
};

export default FullPage;
