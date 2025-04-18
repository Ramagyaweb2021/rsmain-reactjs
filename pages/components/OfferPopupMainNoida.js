import React, { useState, useEffect } from 'react';
import { Modal} from 'react-bootstrap';
// import Image from 'next/image';
// import Link from 'next/link';
const OfferPopupMainNoida = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Show the popup after 5 seconds
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal" style={{backgroundColor:"transparent", zIndex:"1111"}}>
            <Modal.Header closeButton style={{backgroundColor:"#fff"}}>
                <Modal.Title style={{color:"#274C77", fontWeight:"600", fontSize:"25px", textAlign:"center"}}>ENQUIRE NOW!</Modal.Title>
                {/* <Image src="/images/close.webp" alt="Close" width={64} height={64}  className="btn-close btn-close-yellow"/> */}
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#fff"}}>
            <iframe src="https://forms.edunexttechnologies.com/forms/ramagya/main-branch/" width="100%" height="400"></iframe>
               {/* <Link href='#'><Image src='https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/website-popup/rs-noida-website-scholarship-popup.webp' alt="" width={800} height={400} className="no-padding" /></Link> */}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Take the Offer
                </Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default OfferPopupMainNoida;
