import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../styles/Home.module.css"; 
import Header from "/pages/components/Header";
import ScrollspyMenu from './components/ScrollspyMenu';
import HomeVideoSection from './components/HomeVideoSection';
import HomeSchoolBranchSection from './components/HomeSchoolBranchSection';
import HomeExploreSection from "./components/HomeExploreSection";
import HomeInnovateSection from "./components/HomeInnovateSection";
import HomeEvolveSection from "./components/HomeEvolveSection";
import HomeLeadSection from "./components/HomeLeadSection";
import HomeGallerySection from "./components/HomeGallerySection";
import HomeDifferenceSection from "./components/HomeDifferenceSection";
import HomeUpdatesSection from "./components/HomeUpdatesSection";
import HomeAwardsSection from "./components/HomeAwardsSection";
import HomeTestimonialSection from "./components/HomeTestimonialSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState('slider');

  const onLeave = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  const afterLoad = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <ScrollspyMenu 
        sections={["slider", "branch", "explore", "experiment", "innovate", "evolve", "lead", "difference", "gallery", "awards", "school-updates", "testimonials"]}
        activeSection={activeSection}
      />
      
      <div id="callbacksLog"></div>
      
      <ReactFullpage
        debug={false}
        anchors={["slider", "branch", "explore", "experiment", "innovate", "evolve", "lead", "difference", "gallery", "awards", "school-updates", "testimonials"]}
        navigation={true}
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        loopTop={false}   // Prevent looping back to top
        loopBottom={false} // Prevent looping back to first section when reaching last
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
              <h4 style={{color:"#000"}}>Experiment section</h4>
            </div>
            <div className="learn section fp-section fp-table">
              <HomeInnovateSection/>
            </div>
            <div className="learn section fp-section fp-table">
              <HomeEvolveSection/>
            </div>
            <div className="learn section fp-section fp-table">
             <HomeLeadSection/>
            </div>
            <div className="learn section fp-section fp-table">
              <HomeDifferenceSection/>
            </div>
            <div className="learn section fp-section fp-table">
              <HomeGallerySection/>
            </div>
            <div className="learn section fp-section fp-table">
             <HomeAwardsSection/>
            </div>
            <div className="learn section fp-section fp-table">
             <HomeUpdatesSection/>
            </div>
            <div className="learn section fp-section fp-table">
             <HomeTestimonialSection/>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
