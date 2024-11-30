import React from 'react';
import Image from 'next/image';
// import { Row, Col, Form} from 'react-bootstrap';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
const HomeSectionFooter = () => {
  return (
    <>
       {/* Footer Section */}
       <div className="fp-tableFooter" style={{backgroundColor:"rgb(233 236 239 / 26%)"}}>
        <div className="container-fluid my-custom-footer">
          {/* <div className='fp-tableFooter' style={{backgroundColor:"rgb(233 236 239 / 26%)", padding:"50px"}}>
          <div className='container-fluid my-1'> */}
           <div className='row'>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {/* <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={250} height={52}/> */}
              <p className="footer-heading">Address</p>
              <p>E - 7, Sector 50, Noida  
                </p>
              <p className="footer-heading">Email id</p>
                <p><a href="mailto:admissions@ramagyaschool.com">admissions@ramagyaschool.com</a></p>
                <p><a href="mailto:principal@ramagyaschool.com">principal@ramagyaschool.com</a></p>
                <p><a href="mailto:careers@ramagyagroup.com">careers@ramagyagroup.com</a></p>
                <p><a href="mailto:pc@ramagyagroup.com">pc@ramagyagroup.com</a></p>
                <p><a href="mailto:sports@ramagyagroup.com">sports@ramagyagroup.com</a></p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">For Enquiries</p>
                <p>Contact No. <a href="tel:+918010333555">+91-8010333555</a></p>
                <p className="footer-heading">Social</p>
                  <div className="social-icons">
                  {/* <ul>
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

                  </ul> */}
                </div>
                <hr/>
                {/* <p className="footer-heading">Subscribe</p>
                <p>Subscribe to our newsletter and get everyday updates.</p> */}
                {/* <Form className="subscribe-form">
                <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Image src="/images/submit.webp" alt="Ramagya school noida logo" width={56} height={56}/>
                </Form> */}
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">who we are</p>
                <p><Link href="overview">Overview</Link></p>
                <p><Link href="about-us">About Us</Link></p>
                <p><Link href="about-us">Our vision and values</Link></p>
                <p><Link href="people">People</Link></p>
                <p><Link href="ramagya-foundation">Ramagya Foundation</Link></p>
                <p className="footer-heading">what we do</p>
                <p><Link href="explore">Explore</Link></p>
                <p><Link href="experiment">Experiment</Link></p>
                <p><Link href="innovate">Innovate</Link></p>
                <p><Link href="evolve">Evolve</Link></p>
                <p><Link href="lead">Lead</Link></p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">admission</p>
                <p><Link href="pre-admission">Pre Admission</Link></p>
                <p><Link href="post-admission">Post Admission</Link></p>
                <p><Link href="fee-structure">Fee Structure</Link></p>
                <p><Link href="scholarship-programme">Scholarship</Link></p>
                <p><Link href="recommend-a-student">Recommend a Student</Link></p>
                <p className="footer-heading">Other Links</p>
                <p><Link href="https://ramagyagroup.com/current-opening" target='_blank'>Careers</Link></p>
                <p><Link href="contact-us">Contact Us</Link></p>
                <p><Link href="https://ramagyaschool.com/blogs/" target='_blank'>Blog</Link></p>
                {/* <p className="footer-heading">News Feed</p>
                <p><Link href="#">Achievements</Link></p>
                <p><Link href="#">Media Press</Link></p>
                <p><Link href="#">Events</Link></p>
                <p><Link href="#">Awards</Link></p> */}
              </div>
           </div>
           <hr/>
           <row className="footer-bottom">
              <col-md-12 className="text-center">
                <p style={{textAlign:"center"}}>Copyright 2024. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
              </col-md-12>
        </row>
           </div>
      
          </div>
       
    </>
  )
}

export default HomeSectionFooter