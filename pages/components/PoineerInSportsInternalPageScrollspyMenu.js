import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function PoineerInSportsInternalPageScrollspyMenu() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`explore-menu d-flex justify-content-center col-12 ${isNavFixed ? 'fixed-nav' : ''}`}>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center col-12">
            <Nav className="bg-dark p-1">
              <Nav.Link href="/poineer-in-sports" className={`mx-1 ${router.pathname === '/poineer-in-sports' ? 'active' : ''}`}>
                Pioneer in Sports
              </Nav.Link>
              <Nav.Link href="/baalsaathi" className={`mx-1 ${router.pathname === '/baalsaathi' ? 'active' : ''}`}>
                Baal Saathee 
              </Nav.Link>
              <Nav.Link href="/mental-health-club" className={`mx-1 ${router.pathname === '/mental-health-club' ? 'active' : ''}`}>
               Mental Health Club
              </Nav.Link>
              <Nav.Link href="/life-skills" className={`mx-1 ${router.pathname === '/life-skills' ? 'active' : ''}`}>
               Life Skills
              </Nav.Link>
              
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PoineerInSportsInternalPageScrollspyMenu;
