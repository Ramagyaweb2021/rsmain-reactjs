import { useState } from 'react';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  // FaTwitter,
  // FaLinkedinIn,
  FaPhone,
  FaSuperpowers,
  FaHeadphones,
} from 'react-icons/fa';

const FloatingWidgetNoidaExtension = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
       <div className="floating-widget">
          <div className="toggle-container" onClick={() => setIsOpen(!isOpen)}>
            <button className="toggle-btn">{isOpen ? '×' : <FaHeadphones />}</button>
          </div>
    
          {/* <span className={`toggle-label ${isOpen ? 'hidden' : ''}`}>Quick Contact</span> */}
    
          <div className={`social-icons ${isOpen ? 'open' : ''}`}>
            <a href="tel:+918010770770" target="_blank" rel="noopener noreferrer" className="social-btn phone" data-label="Calling">
              <FaPhone />
            </a>
            <a href="https://qr1.be/624V" target="_blank" rel="noopener noreferrer" className="social-btn support" data-label="Digital Assistant">
              <FaSuperpowers />
            </a>
            <a href="https://www.youtube.com/@RamagyaSchoolNoidaExtn/videos" target="_blank" rel="noopener noreferrer" className="social-btn youtube" data-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/people/Ramagya-School-Noida-Extension/100086982841442/" target="_blank" rel="noopener noreferrer" className="social-btn facebook" data-label="Facebook">
              <FaFacebookF />
            </a>
            {/* <a href="https://x.com/ramagya_school" target="_blank" rel="noopener noreferrer" className="social-btn twitter" data-label="Twitter">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/ramagyaschool_noidaextension/?next=%2Framagyanishabd%2F" target="_blank" rel="noopener noreferrer" className="social-btn instagram" data-label="Instagram">
              <FaInstagram />
            </a>
            {/* <a href="https://in.linkedin.com/school/ramagya-school/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" data-label="LinkedIn">
              <FaLinkedinIn />
            </a> */}
            <a
              href="https://api.whatsapp.com/send?phone=918010770770&text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn whatsapp"
              data-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
 
  );
};

export default FloatingWidgetNoidaExtension;
