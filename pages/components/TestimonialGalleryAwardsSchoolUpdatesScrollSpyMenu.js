import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function TestimonialGalleryAwardsSchoolUpdatesScrollSpyMenu() {
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
              <Nav.Link href="/gallery" className={`mx-1 ${router.pathname === '/gallery' ? 'active' : ''}`}>
                GALLERY
              </Nav.Link>
              <Nav.Link href="/awards-and-recognition" className={`mx-1 ${router.pathname === '/awards-and-recognition' ? 'active' : ''}`}>
                AWARDS
              </Nav.Link>
              {/* <Nav.Link href="#" className={`mx-1 ${router.pathname === '#' ? 'active' : ''}`}>
                SCHOOL UPDATES
              </Nav.Link> */}
              <Nav.Link href="/testimonials" className={`mx-1 ${router.pathname === '/testimonials' ? 'active' : ''}`}>
                TESTIMONIALS
              </Nav.Link>
            
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialGalleryAwardsSchoolUpdatesScrollSpyMenu;
