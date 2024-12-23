import { useEffect } from "react";
// import dynamic from 'next/dynamic';
import 'animate.css';
// import Image from "next/image";
// import NoidaEmpoweredMindsSlider from "./NoidaEmpoweredMindsSlider";
import NoidaSchoolUpdates from "./NoidaSchoolUpdates";
import NoidaAwardsHomePage from "./NoidaAwardsHomePage";
import NoidaHomePageInfographics from "./NoidaHomePageInfographics";
import NoidaHomePageImportantLinks from "./NoidaHomePageImportantLinks";
import NoidaPrincipalNote from "./NoidaPrincipalNote";

const NoidaScrollspyHomePageTabination = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOWJS = require('wowjs');
      const wow = new WOWJS.WOW({
        live: false,
      });
      wow.init();
    }
  }, []); // Runs once on mount

  useEffect(() => {
    // Initialize Bootstrap ScrollSpy
    if (typeof window !== "undefined" && window.bootstrap) {
      const scrollSpyElement = document.body;
      new window.bootstrap.ScrollSpy(scrollSpyElement, {
        target: "#tabNavbar",
        offset: 120, // Adjust offset to consider sticky navbar height
      });
    }

    // Smooth scrolling for anchor links
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const yOffset = -220; // Adjust to avoid overlap with navbar
        const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll("#tabNavbar .nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div>
      {/* Sticky Navbar for Tabs */}
      <nav id="tabNavbar" className="navbar navbar-expand-lg bg-light sticky-top">
      <ul className="nav nav-pills mx-auto">
          <li className="nav-item">
              <a className="nav-link active" href="#infographics">Infographics</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#principals-note">Principal&#39;s Note</a>
          </li>
          {/* <li className="nav-item">
              <a className="nav-link" href="#empowered-minds">Empowered Minds</a>
          </li> */}
          <li className="nav-item">
              <a className="nav-link" href="#school-updates">School Updates</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#awards">Awards</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#important-links">Links</a>
          </li>
      </ul>
  </nav>


      {/* Page Sections */}
      <div
          data-bs-spy="scroll"
          data-bs-target="#tabNavbar"
          data-bs-offset="100"
          tabIndex="0"
      >
      {/* <div data-bs-spy="scroll" data-bs-target="#tabNavbar" data-bs-offset="120"> */}
        {/* Infographics Section */}
        <section id="infographics" className="bg-image-section my-5 py-5">
          {/* <div className="text-center mb-4">
            <h3 className="main-heading-internal-pages wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.1s'}}>INFOGRAPHICS</h3>
          </div> */}
          <NoidaHomePageInfographics />
        </section>

        {/* Principal's Note Section */}
        <section id="principals-note" className="my-5 py-5">
         <div className="text-center mb-4">
            <h3 className="main-heading-internal-pages wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.1s'}}>PRINCIPAL&#39;S NOTE</h3>
          </div>
        <NoidaPrincipalNote/>
        </section>

        {/* Empowered Minds Section */}
        {/* <section id="empowered-minds" className="my-5 py-5">
          <NoidaEmpoweredMindsSlider />
        </section> */}

        {/* School Updates Section */}
        <section id="school-updates" className="bg-image-section my-5 py-5">
          <NoidaSchoolUpdates />
        </section>

        {/* Awards Section */}
        <section id="awards" className="my-5 py-5">
          <NoidaAwardsHomePage />
        </section>

        {/* Important Links Section */}
        <section id="important-links" className="bg-image-section my-5 py-5">
          <div className="text-center mb-4">
            <h3 className="main-heading-internal-pages wow animate__animated animate__fadeInUp mt-5" style={{ animationDelay: '0.1s'}}>IMPORTANT LINKS</h3>
          </div>
          <NoidaHomePageImportantLinks />
        </section>
      </div>
    </div>
  );
};

export default NoidaScrollspyHomePageTabination;
