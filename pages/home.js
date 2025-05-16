import { useEffect, useState } from "react";
//import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../styles/Home.module.css";
import Header from "/pages/components/Header";
import HeaderMainWebsite from "/pages/components/HeaderMainWebsite";
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
import OfferPopupMainNoida from "./components/OfferPopupMainNoida";
//import 'animate.css';

//const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ScrollspyMenu = ({ sections, activeSection }) => {
  return (
    <nav className="scrollspyMenu sticky animate__animated animate__fadeInDown">
      <ul>
        {sections.map((section, index) => (
          <li
            key={index}
            className={activeSection === section ? "active" : ""}
            style={{
              animationDelay: `${index * 0.5}s`, // Apply dynamic delay based on index
            }}
          >
            <a href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Home() {
  
  const [activeSection, setActiveSection] = useState("slider");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Adjust width as needed
    };
    handleResize(); // Check screen size on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const WOWJS = require('wowjs');
  //   const wow = new WOWJS.WOW({ live: false });
  //   wow.init();
  // }, []);

  const onLeave = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
  };

  const afterLoad = (origin, destination, direction) => {
    setActiveSection(destination.anchor);
    // const currentSection = destination.item;
    // if (currentSection) {
    //   currentSection.classList.add('animate__animated', 'animate__none');
    // }
  };

  const showMainMenu = ["branch", "explore", "experiment", "innovate", "evolve", "lead"].includes(activeSection);
  const showAdditionalMenu = ["difference", "gallery", "awards", "school-updates", "testimonials", "footer"].includes(activeSection);

  // const showMainMenu = ["branch", "explore", "experiment", "innovate", "evolve", "lead"].includes(activeSection);
  // const showAdditionalMenu = ["difference", "gallery", "awards", "school-updates", "testimonials"].includes(activeSection);

  return (
    <div className={styles.container}>
      <Head>
        {/* Primary SEO */}
        <title>Top School in Noida | Best CBSE School Noida - Ramagya School</title>
        <meta
          name="description"
          content="Ramagya School, one of the Top 10 CBSE schools in Noida, is where your child’s journey to success begins. Apply in best school in Noida today for best start"
        />
        <meta
          name="keywords"
          content="top 10 CBSE school in Noida, top school in Noida, school in Noida, best school in Noida, best CBSE school in Noida, CBSE school in Noida, Ramagya School"
        />
        <link rel="canonical" href="https://ramagyaschool.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Top School in Noida | Best CBSE School Noida - Ramagya School" />
        <meta property="og:description" content="Ramagya School, one of the Top 10 CBSE schools in Noida, is where your child’s journey to success begins. Apply in best school in Noida today for best start" />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top School in Noida | Best CBSE School Noida - Ramagya School" />
        <meta name="twitter:description" content="Ramagya School, one of the Top 10 CBSE schools in Noida, is where your child’s journey to success begins. Apply in best school in Noida today for best start" />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />
      </Head>
      <OfferPopupMainNoida/>
        {/* Only show Header when showMainMenu is false */}
        {!showMainMenu && <Header />}

        {/* Only show HeaderMainWebsite when Header is false */}
        {(showMainMenu || showAdditionalMenu) && <HeaderMainWebsite />}


      {(showMainMenu || showAdditionalMenu) && (
        <ScrollspyMenu
          sections={
            showMainMenu
              ? ["", "explore", "experiment", "innovate", "evolve", "lead"]
              : ["difference", "gallery", "awards", "school-updates", "testimonials"]
          }
          activeSection={activeSection}
        />
      )}

      {!isMobile ? (
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
            "footer",
          ]}
          navigation={false}
          licenseKey="NU1M9-5PXTK-R7H4J-MIJMJ-KELSL"
          responsiveWidth={1000}
          onLeave={onLeave}
          afterLoad={afterLoad}
          scrollBar={false}
          scrollingSpeed={700}
          scrollOverflow={true}
          autoScrolling={true}
          fitToSection={true}
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
