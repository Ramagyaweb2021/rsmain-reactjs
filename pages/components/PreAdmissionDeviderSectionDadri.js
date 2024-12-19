import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const PreAdmissionDeviderSectionDadri = () => {
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
            <p>
              After specific stipulation, selected candidates will be contacted via phone or e-mail within<br/> 48 hours of submitting the application.<br/>
              If you have any questions related to the enquiry/admission process.
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-end align-items-start bg-warning text-dark p-5"
          >
            <Button variant="light-1" className="fw-bold" onClick={handleShow}>
              <h6>CONTACT ADMISSION OFFICE</h6>
              <Image src="/images/fi_phone-call.webp" alt="" width={20} height={20} /> +91 - 7065-078-637
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PreAdmissionDeviderSectionDadri;
