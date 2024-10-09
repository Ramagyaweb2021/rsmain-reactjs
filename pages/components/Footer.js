import React from 'react';
import { Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image' 
import Link from 'next/link'
// import UpSection from './UpSection';
const Footer = () => {
  return (
    <footer className="footer mt-50">
      <container-fluid>
        <Row>
          <Col md={3}>
            <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={250} height={52}/>
            <p className="footer-heading">Address</p>
            <p>E - 7, Sector 50, Noida  
              {/* <Link href="https://www.google.com/maps/place/Ramagya+School/@28.5738003,77.2842893,12z/data=!4m19!1m12!4m11!1m3!2m2!1d77.3814496!2d28.572142!1m6!1m2!1s0x390ce5b126c4cde3:0x60630a1c40880482!2sE-7,+E+Block,+Sector+50,+Noida,+Uttar+Pradesh+201301!2m2!1d77.3666907!2d28.5738252!3m5!1s0x390ce5b126c4cde3:0x60630a1c40880482!8m2!3d28.5738252!4d77.3666907!16s%2Fg%2F11b8_z2lmw?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D" className="link" target='_blank'>
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z"
                    fill="url(#paint0_linear_1_4032)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4032"
                      x1="-0.34336"
                      y1="13.9061"
                      x2="24.0352"
                      y2="13.9061"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={1} stopColor="#F86403" />
                      <stop offset={1} stopColor="#D65501" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link> */}
              </p>
            <p className="footer-heading">Email id</p>
              <p><a href="mailto:admissions@ramagyaschool.com">admissions@ramagyaschool.com</a></p>
              <p><a href="mailto:principal@ramagyaschool.com">principal@ramagyaschool.com</a></p>
              <p><a href="mailto:careers@ramagyagroup.com">careers@ramagyagroup.com</a></p>
              <p><a href="mailto:pc@ramagyagroup.com">pc@ramagyagroup.com</a></p>
              <p><a href="mailto:sports@ramagyagroup.com">sports@ramagyagroup.com</a></p>
          </Col>
          <Col md={3}>
            <p className="footer-heading">For Enquiries</p>
            <p>Contact No. <a href="tel:+918010333555">+91-8010333555</a></p>
            <p className="footer-heading">Social</p>
            <div className="social-icons">
            <ul>
            <li className="co_icon">
                      <Link
                        href="https://api.whatsapp.com/send/?phone=918010333555&text&app_absent=0"
                        className="whatsapp"
                        rel="nofollow"
                        target="_blank">
                         <FontAwesomeIcon icon={faWhatsapp} size="1x"/>
                        <i className="fa fa-whatsapp" />
                         <span className='footer-social-media'>Whatsapp</span>
                      </Link>
                    </li>
                    <li className="co_icon">
                      <Link
                        href="https://www.instagram.com/ramagya.school/"
                        className="instagram"
                        rel="nofollow"
                        target="_blank">
                         <FontAwesomeIcon icon={faInstagram} size="1x"/>
                        <i className="fa fa-instagram" />
                        <span className='footer-social-media'>Instagram</span>
                      </Link>
                    </li>
                    <li className="co_icon1">
                      <Link href="https://www.facebook.com/RamagyaSchoolNoida/"
                        className="facebook"
                        rel="nofollow"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                        <span className='footer-social-media'>Facebook</span>
                      </Link>
                    
                    </li>
                    <li className="co_icon">
                      <Link
                        href="https://x.com/ramagya_school"
                        className="twitter"
                        rel="nofollow"
                        target="_blank"
                      >
                         <FontAwesomeIcon icon={faTwitter} size="1x" />
                         <span className='footer-social-media'>Twitter</span>
                      </Link>
                      
                    </li>
                    <li className="co_icon3">
                      <Link
                        href="https://www.youtube.com/c/RamagyaSchoolNoida50"
                        className="youtube"
                        rel="nofollow"
                        target="_blank"
                      >
                       <FontAwesomeIcon icon={faYoutube} size="1x" />
                       <span className='footer-social-media'>Youtube</span>
                      </Link>
                  
                    </li>
                    <li className="co_icon">
                      <Link
                        href="https://in.linkedin.com/school/ramagya-school/"
                        className="linkedin"
                        rel="nofollow"
                        target="_blank"
                      >
                       <FontAwesomeIcon icon={faLinkedin} size="1x" />
                       <span className='footer-social-media'>Linkedin</span>
                      </Link>
                    </li>
                    <li className="co_icon4">
                      <Link href="https://ramagyaschool.com/blogs/" className="bold" target="_blank">
                      <FontAwesomeIcon icon={faBlog} size="1x" />
                      <span className='footer-social-media'>Blog</span>
                      </Link>
                    </li>
                
                  </ul>
            </div>
            <hr/>
            <p className="footer-heading">Subscribe</p>
            <p>Subscribe to our newsletter and get everyday updates.</p>
            <Form className="subscribe-form">
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
               <Image src="/images/submit.png" alt="Ramagya school noida logo" width={56} height={56}/>
            </Form>
          </Col>
          <Col md={3}>
            <p className="footer-heading">who we are</p>
              <p><Link href="#">Overview</Link></p>
              <p><Link href="#">About Us</Link></p>
              <p><Link href="#">Our vision and values</Link></p>
              <p><Link href="#">People</Link></p>
              <p><Link href="https://ramagyaroots.com/" target='_blank'>Ramagya Foundation</Link></p>
              <p className="footer-heading">what we do</p>
              <p><Link href="#">Explore</Link></p>
              <p><Link href="#">Experiment</Link></p>
              <p><Link href="#">Innovate</Link></p>
              <p><Link href="#">Evolve</Link></p>
              <p><Link href="#">Lead</Link></p>
          </Col>
          <Col md={3}>
            <p className="footer-heading">admission</p>
              <p><Link href="#">Overview</Link></p>
              <p><Link href="#">Why Us</Link></p>
              <p><Link href="#">Fee</Link></p>
              <p><Link href="#">Admission Process</Link></p>
              <p><Link href="#">Apply Now</Link></p>
              <p className="footer-heading">Other Links</p>
              <p><Link href="#">Careers</Link></p>
              <p><Link href="#">Contact Us</Link></p>
              <p><Link href="#">Blog</Link></p>
              <p className="footer-heading">News Feed</p>
              <p><Link href="#">Achievements</Link></p>
              <p><Link href="#">Media Press</Link></p>
              <p><Link href="#">Events</Link></p>
              <p><Link href="#">Awards</Link></p>
            {/* <hr/>
            <p className="footer-heading">Subscribe</p>
            <p>Subscribe to our newsletter and get everyday updates.</p>
            <Form className="subscribe-form">
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
               <Image src="/images/submit.png" alt="Ramagya school noida logo" width={56} height={56}/>
            </Form> */}
          </Col>
          
          {/* <Col md={3}>
            <p className="footer-heading">Subscribe</p>
            <p>Subscribe to our newsletter and get everyday updates.</p>
            <Form className="subscribe-form">
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
               <Image src="/images/submit.png" alt="Ramagya school noida logo" width={56} height={56}/>
            </Form>
          </Col> */}
        </Row>
        {/* <Row>
         <Col md={12} className="text-center campuses-list" >
            <p className="footer-heading">our schools:</p>
            <a href="#noida" className="campus-link">NOIDA</a>
            <a href="#noida-extension" className="campus-link">NOIDA EXTENSION</a>
            <a href="#greater-noida" className="campus-link">GREATER NOIDA</a>
            <a href="#dadri" className="campus-link">DADRI</a>
            <a href="#ramagya-roots" className="campus-link">RAMAGYA ROOTS</a>
          </Col>
        </Row> */}
        <Row className="footer-bottom">
          <Col md={12} className="text-center">
            <p>Copyright 2024. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
          </Col>
        </Row>
      </container-fluid>
    </footer>
  );
};

export default Footer;
