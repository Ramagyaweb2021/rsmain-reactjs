import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function AlumniScrollspyInternalMenu() {
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
              <Nav.Link href="/alumni-guidance" className={`mx-1 ${router.pathname === '/alumni-guidance' ? 'active' : ''}`}>
                ALUMNI GUIDANCE
              </Nav.Link>
              <Nav.Link href="/success-stories" className={`mx-1 ${router.pathname === '/success-stories' ? 'active' : ''}`}>
                ALUMNI SUCCESS STORIES
              </Nav.Link>
             
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AlumniScrollspyInternalMenu;
