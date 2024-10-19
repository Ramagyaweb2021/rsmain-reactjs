import React from 'react'
// import { Row, Col, Form} from 'react-bootstrap';
import Image from 'next/image' 
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomeSectionFooter = () => {
  return (
    <>
       {/* Footer Section */}
       <section id="footer" className="section footer">
          <div className='container-fluid'>
           <div className='row'>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={250} height={52}/>
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

                <hr/>
                <p className="footer-heading">Subscribe</p>
                <p>Subscribe to our newsletter and get everyday updates.</p>
                {/* <Form className="subscribe-form">
                <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Image src="/images/submit.webp" alt="Ramagya school noida logo" width={56} height={56}/>
                </Form> */}
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
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
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
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
              </div>
           </div>
           <row className="footer-bottom">
              <col-md-12 className="text-center">
                <p style={{textAlign:"center"}}>Copyright 2024. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
              </col-md-12>
        </row>
           </div>
        </section>
    </>
  )
}

export default HomeSectionFooter