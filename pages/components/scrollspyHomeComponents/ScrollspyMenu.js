// components/scrollspyHomeComponents/ScrollspyMenu.js
import React, { useEffect, useState } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

const Menu = ({ activeSection, scrollToSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLocked) return;

      const isScrolled = window.scrollY > 0;
      if (isScrolled && !isSticky) {
        setIsSticky(true);
        setMenuAnimation('animate__fadeInDown');
      } else if (!isScrolled && isSticky) {
        setIsSticky(false);
        setMenuAnimation('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky, scrollLocked]);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    scrollToSection(targetId);
  };

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
              <>
                {/* Menu Links */}
                <Nav.Link
                  href="#explore"
                  onClick={(e) => handleNavClick(e, 'explore')}
                  className={`mx-2 ${activeSection === 'explore' ? 'active' : ''}`}
                >
                  EXPLORE
                </Nav.Link>
                <Nav.Link
                  href="#experiment"
                  onClick={(e) => handleNavClick(e, 'experiment')}
                  className={`mx-2 ${activeSection === 'experiment' ? 'active' : ''}`}
                >
                  EXPERIMENT
                </Nav.Link>
                <Nav.Link
                  href="#innovate"
                  onClick={(e) => handleNavClick(e, 'innovate')}
                  className={`mx-2 ${activeSection === 'innovate' ? 'active' : ''}`}
                >
                  INNOVATE
                </Nav.Link>
                <Nav.Link
                  href="#evolve"
                  onClick={(e) => handleNavClick(e, 'evolve')}
                  className={`mx-2 ${activeSection === 'evolve' ? 'active' : ''}`}
                >
                  EVOLVE
                </Nav.Link>
                <Nav.Link
                  href="#lead"
                  onClick={(e) => handleNavClick(e, 'lead')}
                  className={`mx-2 ${activeSection === 'lead' ? 'active' : ''}`}
                >
                  LEAD
                </Nav.Link>
                {/* Additional Links */}
                {/* <Nav.Link
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, 'gallery')}
                  className={`mx-2 ${activeSection === 'gallery' ? 'active' : ''}`}
                >
                  GALLERY
                </Nav.Link>
                <Nav.Link
                  href="#difference"
                  onClick={(e) => handleNavClick(e, 'difference')}
                  className={`mx-2 ${activeSection === 'difference' ? 'active' : ''}`}
                >
                  DIFFERENCE
                </Nav.Link>
                <Nav.Link
                  href="#awards"
                  onClick={(e) => handleNavClick(e, 'awards')}
                  className={`mx-2 ${activeSection === 'awards' ? 'active' : ''}`}
                >
                  AWARDS
                </Nav.Link>
                <Nav.Link
                  href="#school-updates"
                  onClick={(e) => handleNavClick(e, 'school-updates')}
                  className={`mx-2 ${activeSection === 'school-updates' ? 'active' : ''}`}
                >
                  SCHOOL UPDATES
                </Nav.Link>
                <Nav.Link
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, 'testimonials')}
                  className={`mx-2 ${activeSection === 'testimonials' ? 'active' : ''}`}
                >
                  TESTIMONIALS
                </Nav.Link>
                <Nav.Link
                  href="#social-feeds"
                  onClick={(e) => handleNavClick(e, 'social-feeds')}
                  className={`mx-2 ${activeSection === 'social-feeds' ? 'active' : ''}`}
                >
                  SOCIAL FEEDS
                </Nav.Link>
                <Nav.Link
                  href="#footer"
                  onClick={(e) => handleNavClick(e, 'footer')}
                  className={`mx-2 ${activeSection === 'footer' ? 'active' : ''}`}
                >
                  FOOTER
                </Nav.Link> */}
              </>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
