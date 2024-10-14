import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
const VideoAndDonwload = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Container fluid className="p-0" style={{marginTop:"-17px"}}>
      <Row className="position-relative">
        {/* Left section with image and text */}
        <Col md={12} className="p-0 position-relative">
          <div className="image-section">
            {/* Replace with your image source */}
            <Image src='/images/section-devider-bg.webp' alt="" width={1920} height={781} />
            {/* Play button overlay */}
            <div className="play-button">
              {/* <i className="bi bi-play-circle-fill"></i> */}
                <Image src='/images/video-play.webp' alt="" width={120} height={120} onClick={handleShow} />
                {/* Popup Modal */}
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* You can embed any content or even a video here */}
                    <div style={{ width: '100%', height: '315px' }}>
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Modal.Body>
                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer> */}
                </Modal>
            </div>
          </div>
        </Col>
       </Row>
        {/* Bottom section with text */}
        <Row className="position-relative">
        <Col
          md={8}
          className="d-flex flex-column justify-content-center align-items-start bg-tropical-mist text-dark p-4"
        >
          <h4 className="fw-bold">
            RAMAGYA SCHOOL RANKED #3 IN NOIDA – TIMES SCHOOL SURVEY 2023
          </h4>
          <p>
            We are thrilled to announce that Ramagya School Noida, Sector 50,
            known for its unwavering commitment to holistic education, has been
            Ranked #3 in the Noida Leaders category by the Times School
            Survey 2023.
          </p>
        
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-right align-items-start bg-warning text-dark p-5"
        >
          <Button variant="light" className="fw-bold">
          <Image src='/images/download.webp' alt="" width={32} height={32} onClick={handleShow} /> DOWNLOAD BROCHURE
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default VideoAndDonwload