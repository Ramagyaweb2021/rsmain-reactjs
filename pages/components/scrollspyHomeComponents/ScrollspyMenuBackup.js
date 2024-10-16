import React, { useEffect, useState } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [scrollLocked, setScrollLocked] = useState(false); // State to manage scroll lock

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLocked) return; // Prevent scroll while locked

      const isScrolled = window.scrollY > 0;
      if (isScrolled && !isSticky) {
        setIsSticky(true);
        setMenuAnimation('animate__fadeInDown');
      } else if (!isScrolled && isSticky) {
        setIsSticky(false);
        setMenuAnimation('');
      }

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight * 0.2; // Adjusted to focus closer to top of section
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, '', `#${currentSection}`); // Update the URL without reloading
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, isSticky, scrollLocked]);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      // Update the URL immediately
      window.history.replaceState(null, '', `#${targetId}`);

      const targetOffset = targetSection.offsetTop - (window.innerHeight / 2 - targetSection.offsetHeight / 2);
      
      // Lock scrolling
      setScrollLocked(true);
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });

      // Unlock scrolling after a delay (time for the scroll animation to finish)
      setTimeout(() => {
        setScrollLocked(false);
      }, 1000); // Adjust this timeout to match the duration of your smooth scroll
    }
  };

  const shouldShowMainMenu = !['gallery', 'difference', 'awards', 'schoolupdates', 'testimonials'].includes(activeSection);

  return (
    <section className='explore-menu d-flex justify-content-center col-12' id='scrollspy'>
      <Container>
        <Row>
          <Col
            xs={12}
            id="menu"
            className={`d-flex justify-content-center col-12 ${isSticky ? 'fixed-top menu-visible' : ''} ${menuAnimation} animate__animated`}
            style={{ animationDelay: '0.5s' }}
          >
            <Nav className="bg-darks p-1">
              {shouldShowMainMenu ? (
                <>
                  <Nav.Link
                    href="#explore"
                    onClick={(e) => handleNavClick(e, 'explore')}
                    className={`mx-3 ${activeSection === 'explore' ? 'active' : ''}`}
                  >
                    Explore
                  </Nav.Link>
                  <Nav.Link
                    href="#experiment"
                    onClick={(e) => handleNavClick(e, 'experiment')}
                    className={`mx-3 ${activeSection === 'experiment' ? 'active' : ''}`}
                  >
                    Experiment
                  </Nav.Link>
                  <Nav.Link
                    href="#innovate"
                    onClick={(e) => handleNavClick(e, 'innovate')}
                    className={`mx-3 ${activeSection === 'innovate' ? 'active' : ''}`}
                  >
                    Innovate
                  </Nav.Link>
                  <Nav.Link
                    href="#evolve"
                    onClick={(e) => handleNavClick(e, 'evolve')}
                    className={`mx-3 ${activeSection === 'evolve' ? 'active' : ''}`}
                  >
                    Evolve
                  </Nav.Link>
                  <Nav.Link
                    href="#lead"
                    onClick={(e) => handleNavClick(e, 'lead')}
                    className={`mx-3 ${activeSection === 'lead' ? 'active' : ''}`}
                  >
                    Lead
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    href="#gallery"
                    onClick={(e) => handleNavClick(e, 'gallery')}
                    className={`mx-1 ${activeSection === 'gallery' ? 'active' : ''}`}
                  >
                    Gallery
                  </Nav.Link>
                  <Nav.Link
                    href="#difference"
                    onClick={(e) => handleNavClick(e, 'difference')}
                    className={`mx-1 ${activeSection === 'difference' ? 'active' : ''}`}
                  >
                    THE DIFFERENCE WE MAKE
                  </Nav.Link>
                  <Nav.Link
                    href="#awards"
                    onClick={(e) => handleNavClick(e, 'awards')}
                    className={`mx-1 ${activeSection === 'awards' ? 'active' : ''}`}
                  >
                    AWARDS
                  </Nav.Link>
                  <Nav.Link
                    href="#schoolupdates"
                    onClick={(e) => handleNavClick(e, 'schoolupdates')}
                    className={`mx-1 ${activeSection === 'schoolupdates' ? 'active' : ''}`}
                  >
                    SCHOOL UPDATES
                  </Nav.Link>
                  <Nav.Link
                    href="#testimonials"
                    onClick={(e) => handleNavClick(e, 'testimonials')}
                    className={`mx-1 ${activeSection === 'testimonials' ? 'active' : ''}`}
                  >
                    TESTIMONIALS
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
