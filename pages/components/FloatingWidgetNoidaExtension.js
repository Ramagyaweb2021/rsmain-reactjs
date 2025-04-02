import { useState } from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaSuperpowers, FaHeadphones } from 'react-icons/fa';

const FloatingWidgetNoidaExtension = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx>{`
      /* Quick Contact Button */
      .toggle-container {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      .toggle-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-set-green);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        border: none;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        animation: pulseAnimation 2s infinite; /* Smooth continuous pulse */
      }

      @keyframes pulseAnimation {
        0% { 
          transform: scale(1); 
          box-shadow: 0 0 10px rgba(206, 158, 81, 0.6); 
        }
        50% { 
          transform: scale(1.1); 
          box-shadow: 0 0 15px rgba(206, 158, 81, 0.8); 
        }
        100% { 
          transform: scale(1); 
          box-shadow: 0 0 10px rgba(206, 158, 81, 0.6); 
        }
      }

      .toggle-label {
        background: var(--color-set-green);
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: 500;
        font-size: 14px;
        white-space: nowrap;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        opacity: ${isOpen ? '0' : '1'};
        visibility: ${isOpen ? 'hidden' : 'visible'};
      }

      /* Social Icons */
      .social-icons {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 8px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        pointer-events: none;
      }

      .social-icons.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      /* Social Buttons */
      .social-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
      }

      .social-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      }

      /* Icon Colors */
      .youtube { background: #ff0000; }
      .facebook { background: #3b5998; }
      .twitter { background: #1da1f2; }
      .instagram { background: #e4405f; }
      .linkedin { background: #0077b5; }
      .whatsapp { background: #25d366; }
      .phone { background: #25d366; }
      .support { background:rgb(228, 171, 26); }

      /* Labels with Icon Names (Visible by default) */
      .social-btn::after {
        content: attr(data-label);
        position: absolute;
        left: 50px;
        background:rgb(19, 86, 106);
        color: white;
        padding: 4px 8px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }

      .social-btn:hover::after {
        opacity: 1;
      }
      `}</style>

      <div className="floating-widget">
        {/* Social Icons - Slide Open Above */}
        <div className={`social-icons ${isOpen ? 'open' : ''}`}>
        <a href="tel:+918010770770" target="_blank" className="social-btn phone" data-label="Calling">
            <FaPhone />
          </a>
          <a href="https://qr1.be/624V" target="_blank" className="social-btn support" data-label="Digital Assistant">
            <FaSuperpowers />
          </a>
          <a href="https://www.youtube.com/@RamagyaSchoolNoidaExtn/videos" target="_blank" className="social-btn youtube" data-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/people/Ramagya-School-Noida-Extension/100086982841442/" target="_blank" className="social-btn facebook" data-label="Facebook">
            <FaFacebookF />
          </a>
          {/* <a href="https://x.com/ramagya_school" target="_blank" className="social-btn twitter" data-label="Twitter">
            <FaTwitter />
          </a> */}
          <a href="https://www.instagram.com/ramagyaschool_noidaextension/?next=%2Framagyanishabd%2F" target="_blank" className="social-btn instagram" data-label="Instagram">
            <FaInstagram />
          </a>
          {/* <a href="https://in.linkedin.com/school/ramagya-school/" target="_blank" className="social-btn linkedin" data-label="LinkedIn">
            <FaLinkedinIn />
          </a> */}
          <a href="https://wa.me/+918010770770" target="_blank" className="social-btn whatsapp" data-label="WhatsApp">
            <FaWhatsapp />
          </a>
         
        </div>

        {/* Quick Contact Button with Label (Label Hides When Open) */}
        <div className="toggle-container" onClick={() => setIsOpen(!isOpen)}>
          <button className="toggle-btn">
            {isOpen ? '×' : <FaHeadphones />}
          </button>
          <span className="toggle-label">Quick Contact</span>
        </div>
      </div>
    </>
  );
};

export default FloatingWidgetNoidaExtension;
