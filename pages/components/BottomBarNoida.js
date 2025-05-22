import React, { useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

const BottomBarNoida = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className="fixed-btns-appbar d-block d-sm-none">
        <div className="col-lg-5 col-xl-4">
          <ul className="d-flex justify-content-center list-unstyled mb-0">
            <li className="ps-3 border-end border-white-50">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalShow(true);
                }}
                className="enqBtn"
              >
                <Image
                  src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/admission-final-newer.svg"
                  alt="Admission"
                  height={100}
                  width={100}
                />
              </a>
            </li>

            <li className="border-end border-white-50">
              <a
                href="https://ramagyanoida.edunexttechnologies.com/DirectStudentOnlineFee"
                target="_blank"
              >
                <Image
                  src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/pay-final-newer.svg"
                  alt=""
                  height={100}
                  width={100}
                />
              </a>
            </li>

            <li className="pe-3">
              <a
                href="https://ramagyanoida.edunexttechnologies.com/Index"
                target="_blank"
              >
                <Image
                  src="https://resources.edunexttechnologies.com/web-data/edunext-demo/images/edunext-login-newer.svg"
                  alt=""
                  height={100}
                  width={100}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
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
    </>
  );
};

export default BottomBarNoida;
