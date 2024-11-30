import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function WhoWeAreScrollspyMenu() {
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
              <Nav.Link href="/overview" className={`mx-1 ${router.pathname === '/overview' ? 'active' : ''}`}>
                Overview
              </Nav.Link>
              <Nav.Link href="/about-us" className={`mx-1 ${router.pathname === '/about-us' ? 'active' : ''}`}>
                About Us
              </Nav.Link>
              <Nav.Link href="/vision-and-values" className={`mx-1 ${router.pathname === '/vision-and-values' ? 'active' : ''}`}>
                Vision & Values
              </Nav.Link>
              <Nav.Link href="/people" className={`mx-1 ${router.pathname === '/people' ? 'active' : ''}`}>
                People
              </Nav.Link>
              <Nav.Link href="/ramagya-foundation" className={`mx-1 ${router.pathname === '/ramagya-foundation' ? 'active' : ''}`}>
                Ramagya Foundation
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhoWeAreScrollspyMenu;
