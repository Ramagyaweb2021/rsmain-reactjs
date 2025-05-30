import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect } from 'react';
// import $ from 'jquery';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <div className='modal-content'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="mb-0 text-black1" style={{ fontSize: "25px", textAlign: "center", marginLeft: "10px" }}>ENQUIRE NOW!</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-col">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <iframe src="https://forms.edunexttechnologies.com/forms/ramagya/main-branch/" width="100%" height="400"></iframe>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </div>
    </Modal>
  );
}

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* Side floating buttion discover section */}
      {/* <div className="sidebar-btn-float-discover animate__animated animate__fadeInRight" style={{ animationDelay: '1s' }}>
          <Link
            href="https://qr1.be/ZJ68"
            target="_blank"
            className="btn btn-default1 btn-circle btn-lg btn-lateral"
            title="Discover Ramagya School"
          >
            <Image src="/images/discover-more.webp" alt="Ramagya school discover button" width={40} height={154}/>
          </Link>
       </div> */}
      {/* Enquiry buttion */}
      <div className="btn-float-enquire">
      <Button
            variant="primary-1"
            className="btn btn-default btn-circle btn-lg"
            onClick={() => setModalShow(true)}
            style={{ marginTop: "1px" }}
          >
             {/* <Image
              alt="Enquire Now"
              src="/images/fi_check-circle.webp"
              width={20}
              height={20}
              decoding="async"
              fetchpriority="high"
          />&nbsp; */}
            <span className='enquire-lebel text-white'>ENQUIRE NOW</span>
            {/* <Image src="/images/enquiry-widget.webp" alt="Enquire Now" width={80} height={80} /> */}
          </Button>
        {/* <Button variant="primary-1" className='btn btn-default btn-circle btn-lg btn-lateral btn-flash-1' onClick={() => setModalShow(true)} style={{ marginTop: "1px" }}>
          <Image src="/images/enquiry-widget.webp" alt="Ramagya school enquire button" width={80} height={80} />
        </Button> */}
      </div>
      {/* <div className="btn-float-enquire animate__animated animate__zoomIn animate__infinite animate__slow" style={{ animationDelay: '2s' }}>
        <Button variant="primary-1" className='btn btn-default btn-circle btn-lg btn-lateral btn-flash-1' onClick={() => setModalShow(true)} style={{ marginTop: "1px" }}>
          <Image src="/images/enquiry-widget.webp" alt="Ramagya school enquire button" width={80} height={80} />
        </Button>
      </div> */}

      {/* <div className="btn-float-enquire animate__animated animate__zoomIn animate__infinite animate__slow" style={{ animationDelay: '2s' }}>
        <Button variant="primary-1" className='btn btn-default btn-circle btn-lg btn-lateral' onClick={() => setModalShow(true)} style={{ marginTop: "1px" }}>
          <Image src="/images/enquiry-widget.webp" alt="Ramagya school enquire button" width={100} height={100} />
        </Button>
      </div> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
}
