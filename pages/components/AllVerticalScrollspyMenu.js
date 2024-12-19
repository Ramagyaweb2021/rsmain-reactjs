import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function AllVerticalScrollspyMenu() {
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
            <Nav className="bg-dark p-3">
              <Nav.Link href="/noida" className={`mx-3 ${router.pathname === '/noida' ? 'active' : ''}`}>
                NOIDA
              </Nav.Link>
              <Nav.Link href="/noida-extension" className={`mx-3 ${router.pathname === '/noida-extension' ? 'active' : ''}`}>
                NOIDA EXTENSION
              </Nav.Link>
              <Nav.Link href="/greater-noida" className={`mx-3 ${router.pathname === '/greater-noida' ? 'active' : ''}`}>
                GREATER NOIDA
              </Nav.Link>
              <Nav.Link href="/dadri" className={`mx-3 ${router.pathname === '/dadri' ? 'active' : ''}`}>
                DADRI
              </Nav.Link>
              {/* <Nav.Link href="https://ramagyaroots.com/" className={`mx-1 ${router.pathname === 'https://ramagyaroots.com/' ? 'active' : ''}`}>
                RAMAGYA ROOTS
              </Nav.Link>
              <Nav.Link href="https://franchise.ramagyaschool.com/" className={`mx-1 ${router.pathname === 'https://franchise.ramagyaschool.com/' ? 'active' : ''}`}>
                APPLY FOR FRANCHISE
              </Nav.Link> */}
            
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllVerticalScrollspyMenu;
