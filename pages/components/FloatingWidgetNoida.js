import { useState } from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaSuperpowers, FaHeadphones } from 'react-icons/fa';

const FloatingWidgetNoida = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .floating-widget {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

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
        }

        .toggle-label {
          background: var(--color-set-green);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 14px;
          white-space: nowrap;
          opacity: ${isOpen ? '0' : '1'};
          visibility: ${isOpen ? 'hidden' : 'visible'};
        }

        .social-icons {
          position: absolute; /* This removes it from the document flow */
          bottom: ${isOpen ? '60px' : '20px'}; /* Position it above the toggle button */
          left: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          opacity: ${isOpen ? '1' : '0'};
          transform: ${isOpen ? 'translateY(0)' : 'translateY(10px)'};
          pointer-events: ${isOpen ? 'auto' : 'none'};
        }

        .social-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          text-decoration: none;
          position: relative;
        }

        /* Icon Colors */
        .youtube { background: #ff0000; }
        .facebook { background: #3b5998; }
        .twitter { background: #1da1f2; }
        .instagram { background: #e4405f; }
        .linkedin { background: #0077b5; }
        .whatsapp { background: #25d366; }
        .phone { background: #25d366; }
        .support { background: rgb(228, 171, 26); }

        /* Icon Labels */
        .social-btn::after {
          content: attr(data-label);
          position: absolute;
          left: 50px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 8px;
          border-radius: 5px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .social-btn:hover::after {
          opacity: 1;
        }
      `}</style>

      <div className="floating-widget">
        <div className="toggle-container" onClick={() => setIsOpen(!isOpen)}>
          <button className="toggle-btn">{isOpen ? '×' : <FaHeadphones />}</button>
          <span className="toggle-label">Quick Contact</span>
        </div>

        {isOpen && ( // Render only when open
          <div className="social-icons">
            <a href="tel:+918010333555" target="_blank" rel="noopener noreferrer" className="social-btn phone" data-label="Calling"><FaPhone /></a>
            <a href="https://qr1.be/ZJ68" target="_blank" rel="noopener noreferrer" className="social-btn support" data-label="Digital Assistant"><FaSuperpowers /></a>
            <a href="https://www.youtube.com/c/RamagyaSchoolNoida50" target="_blank" rel="noopener noreferrer" className="social-btn youtube" data-label="YouTube"><FaYoutube /></a>
            <a href="https://www.facebook.com/RamagyaSchoolNoida/" target="_blank" rel="noopener noreferrer" className="social-btn facebook" data-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/ramagya_school" target="_blank" rel="noopener noreferrer" className="social-btn twitter" data-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/ramagya.school/" target="_blank" rel="noopener noreferrer" className="social-btn instagram" data-label="Instagram"><FaInstagram /></a>
            <a href="https://in.linkedin.com/school/ramagya-school/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" data-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://api.whatsapp.com/send/?phone=918010333555&text&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" data-label="WhatsApp"><FaWhatsapp /></a>

            {/* <a href="tel:+918010333555" className="social-btn phone" data-label="Calling"><FaPhone /></a>
            <a href="https://qr1.be/ZJ68" className="social-btn support" data-label="Digital Assistant"><FaSuperpowers /></a>
            <a href="https://www.youtube.com/c/RamagyaSchoolNoida50" className="social-btn youtube" data-label="YouTube"><FaYoutube /></a>
            <a href="https://www.facebook.com/RamagyaSchoolNoida/" className="social-btn facebook" data-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/ramagya_school" className="social-btn twitter" data-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/ramagya.school/" className="social-btn instagram" data-label="Instagram"><FaInstagram /></a>
            <a href="https://in.linkedin.com/school/ramagya-school/" className="social-btn linkedin" data-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://wa.me/+918010151151" className="social-btn whatsapp" data-label="WhatsApp"><FaWhatsapp /></a> */}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingWidgetNoida;
