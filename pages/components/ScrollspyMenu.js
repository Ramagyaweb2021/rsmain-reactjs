// /pages/components/ScrollspyMenu.js
import React from 'react';

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

export default ScrollspyMenu;


