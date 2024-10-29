import { useEffect, useState } from "react";
import Head from 'next/head'; // Import Head from next/head
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../styles/Home.module.css"; 
import Header from "/pages/components/Header";
// import ScrollspyMenu from './components/ScrollspyMenu';
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

export default function Home() {
  const [activeSection, setActiveSection] = useState('slider');

  const onLeave = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  const afterLoad = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  // Determine which menu to show based on the active section
  const showMainMenu = ['explore', 'experiment', 'innovate', 'evolve', 'lead'].includes(activeSection);
  const showAdditionalMenu = ['difference', 'gallery', 'awards', 'school-updates', 'testimonials'].includes(activeSection);

  return (
    <div className={styles.container}>
      <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta name="description" content="Ramagya School is among best CBSE schools in Noida, Noida Extension, Greater Noida and Dadri . We are one of the top 10 schools in Noida, Noida Extension, Greater Noida and Dadri. Ramagya School is voted by TOI survey as one of the top 5 Senior Secondary schools in Delhi- NCR" />
        <meta name="keywords" content="Best School in Noida, Schools in Noida, Noida Extension, Greater Noida and Dadri, CBSE Schools in Noida, Noida Extension, Greater Noida and Dadri, Top Schools in Noida, Noida Extension, Greater Noida and Dadri, top 10 schools in Noida, Noida Extension, Greater Noida and Dadri" />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>

      <Header />
      <OfferPopup/>

      {/* Conditionally render the main ScrollspyMenu for initial sections */}
      {/* {showMainMenu && !showAdditionalMenu && (
        <ScrollspyMenu 
          className={styles.scrollspyMenu}
          sections={["explore", "experiment", "innovate", "evolve", "lead"]}
          activeSection={activeSection}
        />
      )} */}

      {/* Conditionally render the additional ScrollspyMenu for additional sections */}
      {/* {showAdditionalMenu && (
        <ScrollspyMenu 
          className={styles.scrollspyMenu}
          sections={["difference", "gallery", "awards", "school-updates", "testimonials"]}
          activeSection={activeSection}
        />
      )} */}

      <div id="callbacksLog"></div>

      <ReactFullpage
        debug={false}
        anchors={[
          "slider", 
          "branch", 
          "explore", 
          "experiment", // Updated custom anchor for the experiment section
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
        // anchors={["slider", "branch", "explore", "experiment", "innovate", "evolve", "lead", "difference", "gallery", "awards", "school-updates", "testimonials", "footer"]}
          navigation={true}
          licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
          loopTop={false}
          loopBottom={false}
          onLeave={onLeave}
          afterLoad={afterLoad}
          scrollingSpeed={1000}
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

            <div className="learn section" data-anchor="experiment" id="section">
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
            {/* Additional sections */}
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
            <div className="footer section fp-section fp-table" style={{backgroundColor:"rgba(0,0,0,.1)"}}>
               <HomeSectionFooter />
            </div>
            
            
          </ReactFullpage.Wrapper>
        )}
        
      />
     {/* <HomeSectionFooter /> */}
    </div>
    
  );
}
