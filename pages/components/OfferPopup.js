import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const OfferPopup = () => {
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
            <Modal.Header closeButton style={{backgroundColor:"#EEF0F2"}}>
                <Modal.Title style={{color:"#274C77", fontWeight:"600", fontSize:"25px", textAlign:"center"}}>RAMAGYA SCHOOLS SCHOLARSHIPS</Modal.Title>
                {/* <Image src="/images/close.webp" alt="Close" width={64} height={64}  className="btn-close btn-close-yellow"/> */}
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#EEF0F2"}}>
               <Link href='#'><Image src='https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/website-popup/rs-noida-website-scholarship-popup.webp' alt="" width={800} height={400} className="no-padding" /></Link>
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

export default OfferPopup;
