import React, { useState, useEffect } from 'react';
import { Modal} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
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
            <Modal show={show} onHide={handleClose} centered className="custom-modal" style={{ backgroundColor: "transparent", zIndex: "1111" }}>
                <Modal.Header style={{ backgroundColor: "#fff" }}>
                    <Modal.Title style={{ color: "#274C77", fontWeight: "500", fontSize: "25px", textAlign: "center" }}>Ramagya&apos;s Summer Camp</Modal.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#fff" }}>
                    <Link href='https://bit.ly/rsnoidasummercamp' target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/images/summer-camp.jpeg" 
                        alt="Summer Camp" 
                        width={800} 
                        height={400} 
                        loading="lazy" 
                        fetchPriority="low" 
                        />

                        {/* <Image src='/images/summer-camp.jpeg' alt="" width={800} height={400} className="no-padding" /> */}
                    </Link>
                </Modal.Body>
            </Modal>
    );
};

export default OfferPopupMainNoida;
