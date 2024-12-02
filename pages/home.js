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

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Adjust width as needed
    };
    handleResize(); // Check screen size on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {!isMobile ? (
        <ReactFullpage
          debug={true}
          anchors={[
            "slider", "branch", "explore", "experiment", "innovate",
            "evolve", "lead", "difference", "gallery", "awards", 
            "school-updates", "testimonials", "footer"
          ]}
          navigation={false}
          licenseKey="NU1M9-5PXTK-R7H4J-MIJMJ-KELSL"
          responsiveWidth={1000}
          scrollBar={false}          // Use FullPage.js scrolling
          autoScrolling={true}       // Enable FullPage.js auto-scrolling
          scrollOverflow={true}      // Enable scroll overflow inside sections
          scrollingSpeed={700}       // Adjust scrolling speed to avoid skipping sections
          fitToSection={true}        // Ensure the scroll stops on each section
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomeVideoSection />
              </div>
              <div className="section">
                <HomeSchoolBranchSection />
              </div>
              <div className="section">
                <HomeExploreSection />
              </div>
              <div className="section">
                <HomeExperimentSection />
              </div>
              <div className="section">
                <HomeInnovateSection />
              </div>
              <div className="section">
                <HomeEvolveSection />
              </div>
              <div className="section">
                <HomeLeadSection />
              </div>
              <div className="section">
                <HomeDifferenceSection />
              </div>
              <div className="section">
                <HomeGallerySection />
              </div>
              <div className="section">
                <HomeAwardsSection />
              </div>
              <div className="section">
                <HomeUpdatesSection />
              </div>
              <div className="section">
                <HomeTestimonialSection />
              </div>
              <div className="section footer">
                <HomeSectionFooter />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      ) : (
        // Render alternative content when fullpage.js is disabled
        <div>
          <HomeVideoSection />
          <HomeSchoolBranchSection />
          <HomeExploreSection />
          <HomeExperimentSection />
          <HomeInnovateSection />
          <HomeEvolveSection />
          <HomeLeadSection />
          <HomeDifferenceSection />
          <HomeGallerySection />
          <HomeAwardsSection />
          <HomeUpdatesSection />
          <HomeTestimonialSection />
          <HomeSectionFooter />
        </div>
      )}
    </div>
  );
}
