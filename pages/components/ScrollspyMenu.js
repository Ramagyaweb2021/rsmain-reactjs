import React, { useEffect, useState } from "react";
import 'animate.css'; // Ensure animations are loaded

const ScrollspyMenu = ({ activeSection, showMainMenu, showAdditionalMenu }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation only when the menu appears
    if (activeSection === "explore" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [activeSection, hasAnimated]);

  const sections = showMainMenu
    ? ["", "explore", "experiment", "innovate", "evolve", "lead"]
    : showAdditionalMenu
    ? ["difference", "gallery", "awards", "school-updates", "testimonials"]
    : [];

  return (
    showMainMenu || showAdditionalMenu ? (
      <nav
        className={`scrollspyMenu sticky ${
          hasAnimated ? "animate__animated animate__fadeInDown" : ""
        }`}
      >
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              className={activeSection === section ? "active" : ""}
              style={{
                animationDelay: hasAnimated ? `${index * 0.2}s` : "0s", // Add delay for sequential animation
              }}
            >
              <a href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    ) : null
  );
};

export default ScrollspyMenu;
