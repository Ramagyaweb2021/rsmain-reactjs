import React from 'react';
// import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Row, Col, Form} from 'react-bootstrap';
import Link from 'next/link';
import BackToTop from './BacktoTopButton';
import FloatingWidgetNoida from './FloatingWidgetNoida';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
const FooterNoida = () => {
  return (
    <>
       {/* Footer Section */}
       <div className="internal-footer">
        <div className="container-fluid my-custom-footer">
           <row className="footer-bottom-internal">
              <col-md-12 className="text-center">
                <p style={{textAlign:"center"}}>Copyright 2025. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
              </col-md-12>
        </row>
           </div>
      
          </div>
        <FloatingWidgetNoida/>
        <BackToTop/> 
    </>
  )
}

export default FooterNoida