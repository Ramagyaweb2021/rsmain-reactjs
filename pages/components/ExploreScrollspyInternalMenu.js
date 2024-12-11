import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function ExploreScrollspyInternalMenu() {
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
              <Nav.Link href="/explore" className={`mx-1 ${router.pathname === '/explore' ? 'active' : ''}`}>
                EXPLORE
              </Nav.Link>
              <Nav.Link href="/experiment" className={`mx-1 ${router.pathname === '/experiment' ? 'active' : ''}`}>
                EXPERIMENT
              </Nav.Link>
              <Nav.Link href="/innovate" className={`mx-1 ${router.pathname === '/innovate' ? 'active' : ''}`}>
                INNOVATE
              </Nav.Link>
              <Nav.Link href="/evolve" className={`mx-1 ${router.pathname === '/evolve' ? 'active' : ''}`}>
                EVOLVE
              </Nav.Link>
              <Nav.Link href="/lead" className={`mx-1 ${router.pathname === '/lead' ? 'active' : ''}`}>
                LEAD
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ExploreScrollspyInternalMenu;
