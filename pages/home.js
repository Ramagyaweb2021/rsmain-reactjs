import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../styles/Home.module.css";
import Header from "/pages/components/Header";
import HomeVideoSection from './components/HomeVideoSection';
import HomeSchoolBranchSection from './components/HomeSchoolBranchSection';
import HomeExploreSection from "./components/HomeExploreSection";
import HomeExperimentSection from "./components/HomeExperimentSection";
import HomeInnovateSection from "./components/HomeInnovateSection";
import HomeEvolveSection from "./components/HomeEvolveSection";
import HomeLeadSection from "./components/HomeLeadSection";
import HomeGallerySection from "./components/HomeGallerySection";
import HomeDifferenceSection from "./components/HomeDifferenceSection";
import HomeUpdatesSection from "./components/HomeUpdatesSection";
import HomeAwardsSection from "./components/HomeAwardsSection";
import HomeTestimonialSection from "./components/HomeTestimonialSection";
import HomeSectionFooter from "./components/HomeSectionFooter";
import OfferPopup from "./components/OfferPopup";
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

// ScrollspyMenu component integrated directly into Home.js
const ScrollspyMenu = ({ sections, activeSection }) => {
  return (
    <nav className="scrollspyMenu sticky">
      <ul>
        {sections.map((section, index) => (
          <li key={index} className={activeSection === section ? 'active' : ''}>
            <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('slider');

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const onLeave = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  const afterLoad = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
    const currentSection = destination.item;
    if (currentSection) {
      currentSection.classList.add('animate__animated', 'animate__none');
    }
  };

  const showMainMenu = ['explore', 'experiment', 'innovate', 'evolve', 'lead'].includes(activeSection);
  const showAdditionalMenu = ['difference', 'gallery', 'awards', 'school-updates', 'testimonials'].includes(activeSection);

  return (
    <div className={styles.container}>
      <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta name="description" content="Ramagya School is among best CBSE schools in Noida, Noida Extension, Greater Noida and Dadri." />
        <meta name="keywords" content="Best School in Noida, Schools in Noida, Noida Extension, Greater Noida and Dadri, CBSE Schools in Noida, Noida Extension, Greater Noida and Dadri" />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>

      <Header />
      <OfferPopup />

      {showMainMenu && !showAdditionalMenu && (
        <ScrollspyMenu
          sections={["explore", "experiment", "innovate", "evolve", "lead"]}
          activeSection={activeSection}
        />
      )}

      {showAdditionalMenu && (
        <ScrollspyMenu
          sections={["difference", "gallery", "awards", "school-updates", "testimonials"]}
          activeSection={activeSection}
        />
      )}

      <ReactFullpage
        debug={false}
        anchors={[
          "slider",
          "branch",
          "explore",
          "experiment", 
          "innovate",
          "evolve",
          "lead",
          "difference",
          "gallery",
          "awards",
          "school-updates",
          "testimonials",
          "footer"
        ]}
        navigation={true}
        onLeave={onLeave}
        afterLoad={afterLoad}
        scrollingSpeed={700}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <HomeVideoSection />
            </div>
            <div className="section">
              <HomeSchoolBranchSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeExploreSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeExperimentSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeInnovateSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeEvolveSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeLeadSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeDifferenceSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeGallerySection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeAwardsSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeUpdatesSection />
            </div>
            <div className="learn section fp-section fp-table">
              <HomeTestimonialSection />
            </div>
            <div className="footer section fp-section fp-table" style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
              <HomeSectionFooter />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
