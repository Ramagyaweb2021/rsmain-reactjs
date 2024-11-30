import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const PostAdmissionDeviderSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="py-5">
        {/* Bottom section with text */}
        <Row className="position-relative">
        <Col
          md={8}
          className="mx-auto d-flex justify-content-center align-items-start bg-tropical-mist text-dark p-5"
          style={{ backgroundColor: "#E7EAEB" }}
        >
          {/* <h3>Ramagya Edunext* App</h3> */}
            <p>
               <b style={{fontSize:"20px"}}>Ramagya Edunext* App</b><br/>
               Ramagya School recognizes the importance of a strong partnership between parents and the<br/> school for the comprehensive development of a child. Therefore, our school utilizes the <br/> Edunext Mobile App and Web Portal to maintain constant communication with parents,  <br/> keeping them informed about their child&#39;s achievements, progress, and upcoming steps.
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-end align-items-start bg-warning text-dark p-5"
          >
            <Button variant="light-1" className="fw-bold" onClick={handleShow}>
              {/* <h6>CONTACT ADMISSION OFFICE</h6> */}
              <Image src="/images/download.png" alt="" width={20} height={20} /> DOWNLOAD APP
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PostAdmissionDeviderSection;
