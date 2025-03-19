import React from 'react';
// import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Row, Col, Form} from 'react-bootstrap';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
const FooterNoidaExtension = () => {
  return (
    <>
       {/* Footer Section */}
       <div className="internal-footer">
        <div className="container-fluid my-custom-footer">
          {/* <div className='fp-tableFooter' style={{backgroundColor:"rgb(233 236 239 / 26%)", padding:"50px"}}>
          <div className='container-fluid my-1'> */}
           <div className='row'>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {/* <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={250} height={52}/> */}
              <p className="footer-heading">Address</p>
              <p>Plot No. A-229 Knowledge Park 5 <br/>Noida Extension & Greater Noida, <br/>Uttar Pradesh 201307   
                </p>
                <p className="footer-heading">Email id</p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:admissions.noidaext@ramagyaschool.com">admissions.noidaext@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:info.ext@ramagyaschool.com">info.ext@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:principal.ext@ramagyaschool.com">principal.ext@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:recruitment@ramagyagroup.com">recruitment@ramagyagroup.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:pc@ramagyagroup.com">pc@ramagyagroup.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:sports@ramagyagroup.com">sports@ramagyagroup.com</a></p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">For Enquiries</p>
                <p>Contact No. <a href="tel:++918010770770">+91-8010 770 770</a></p>
                <p className="footer-heading">Social</p>
                {/* <hr/> */}
                  <div className="social-icons">
                   <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "15px" }}>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=918010770770&text=Hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366" }}
                      >
                        <i className="bi bi-whatsapp" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Ramagya-School-Noida-Extension/100086982841442/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1877F2" }}
                      >
                        <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ramagyaschool_noidaextension/?next=%2Framagyanishabd%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#E4405F" }}
                      >
                        <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@RamagyaSchoolNoidaExtn/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FF0000" }}
                      >
                        <i className="bi bi-youtube" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://in.linkedin.com/school/ramagya-school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077B5" }}
                      >
                        <i className="bi bi-linkedin" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/ramagya_school"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1DA1F2" }}
                      >
                        <i className="bi bi-twitter" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li> */}
                  </ul>
                 
                </div>
                <br></br>
                {/* <hr/> */}
                <p className="footer-heading">Our Schools</p>
                <p><Link href="https://ramagyaschool.com/noida" target='_blank'>Noida</Link></p>
                <p><Link href="https://ramagyaschool.com/noida-extension" target='_blank'>Noida Extension</Link></p>
                <p><Link href="https://ramagyaschool.com/greater-noida" target='_blank'>Greater Noida</Link></p>
                <p><Link href="https://ramagyaschool.com/dadri" target='_blank'>Dadri</Link></p>
              
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">who we are</p>
                <p><Link href="/overview">Overview</Link></p>
                <p><Link href="/about-us">About Us</Link></p>
                <p><Link href="/about-us">Our vision and values</Link></p>
                <p><Link href="/people">People</Link></p>
                <p><Link href="/ramagya-foundation">Ramagya Foundation</Link></p>
                <p><Link href="/testimonials">Testimonials</Link></p>
                <p><Link href="https://ramagyagroup.com/" target='_blank'>Sister Concerns</Link></p>
               
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
              <p className="footer-heading">what we do</p>
                <p><Link href="/explore">Explore</Link></p>
                <p><Link href="/experiment">Experiment</Link></p>
                <p><Link href="/innovate">Innovate</Link></p>
                <p><Link href="/evolve">Evolve</Link></p>
                <p><Link href="/lead">Lead</Link></p>
                {/* <p className="footer-heading">admission</p> */}
                {/* <p><Link href="pre-admission">Pre Admission</Link></p>
                <p><Link href="post-admission">Post Admission</Link></p>
                <p><Link href="fee-structure">Fee Structure</Link></p>
                <p><Link href="scholarship-programme">Scholarship</Link></p>
                <p><Link href="recommend-a-student">Recommend a Student</Link></p> */}
                <p className="footer-heading">Other Links</p>
                <p> <Link href="https://ramagyagroup.com/current-opening" target="_blank" rel="noopener noreferrer">Careers</Link></p>
                <p><Link href="/contact-us">Contact Us</Link></p>
                <p><Link href="/blogs">Blog</Link></p>
                <p><Link href="/noida-extension/pre-admission"> Admission</Link></p>
                {/* <p className="footer-heading">News Feed</p>
                <p><Link href="#">Achievements</Link></p>
                <p><Link href="#">Media Press</Link></p>
                <p><Link href="#">Events</Link></p>
                <p><Link href="#">Awards</Link></p> */}
              </div>
           </div>
           <hr/><br/>
           <row className="footer-bottom-internal">
              <col-md-12 className="text-center">
                <p style={{textAlign:"center"}}>Copyright 2025. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
              </col-md-12>
        </row>
           </div>
      
          </div>
       
    </>
  )
}

export default FooterNoidaExtension