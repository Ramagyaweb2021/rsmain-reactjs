import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function DadriAdmissionScrollspyMenu() {
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
              <Nav.Link href="/dadri/pre-admission" className={`mx-2 ${router.pathname === '/dadri/pre-admission' ? 'active' : ''}`}>
                PRE-ADMISSION
              </Nav.Link>
              <Nav.Link href="/dadri/post-admission" className={`mx-2 ${router.pathname === '/dadri/post-admission' ? 'active' : ''}`}>
                POST-ADMISSION
              </Nav.Link>
              <Nav.Link href="/dadri/fee-structure" className={`mx-2 ${router.pathname === '/dadri/fee-structure' ? 'active' : ''}`}>
                FEE STRUCTURE
              </Nav.Link>
              {/* <Nav.Link href="/noida-extension/scholarship-programme" className={`mx-2 ${router.pathname === '/noida-extension/scholarship-programme' ? 'active' : ''}`}>
                SCHOLARSHIP
              </Nav.Link>
              <Nav.Link href="/noida-extension/recommend-a-student" className={`mx-2 ${router.pathname === '/noida-extension/recommend-a-student' ? 'active' : ''}`}>
                RECOMMEND A STUDENT
              </Nav.Link> */}
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DadriAdmissionScrollspyMenu;
