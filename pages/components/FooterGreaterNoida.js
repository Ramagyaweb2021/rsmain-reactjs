import React from 'react';
// import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Row, Col, Form} from 'react-bootstrap';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
const FooterGreaterNoida = () => {
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
              <p><i className="bi bi-geo-alt-fill"></i> NS-26, Delta-2, Greater Noida, <br></br>Uttar Pradesh 201310  
                </p>
                <p className="footer-heading">Email id</p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:admissions.greaternoida@ramagyaschool.com"><i className="bi bi-envelope-fill"></i> admissions.greaternoida@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:principal.greaternoida@ramagyaschool.com"><i className="bi bi-envelope-fill"></i> principal.greaternoida@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:recruitment@ramagyagroup.com"><i className="bi bi-envelope-fill"></i> recruitment@ramagyagroup.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:pc@ramagyagroup.com"><i className="bi bi-envelope-fill"></i> pc@ramagyagroup.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:sports@ramagyagroup.com"><i className="bi bi-envelope-fill"></i> sports@ramagyagroup.com</a></p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">For Enquiries</p>
                <p>Contact No. <a href="tel:+917065078637"><i className="bi bi-telephone-fill"></i> +91-7065 078 637</a></p>
                <p className="footer-heading">Social</p>
                {/* <hr/> */}
                  <div className="social-icons">
                   <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "15px" }}>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send/?phone=917065078637&text&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366" }}
                      >
                        <i className="bi bi-whatsapp" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Ramagya-World-School-Greater-Noida/100064213652138/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1877F2" }}
                      >
                        <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ramagyaschoolgreaternoida/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#E4405F" }}
                      >
                        <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://www.youtube.com/c/RamagyaSchoolNoida50"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FF0000" }}
                      >
                        <i className="bi bi-youtube" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="https://in.linkedin.com/school/ramagya-school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077B5" }}
                      >
                        <i className="bi bi-linkedin" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li> */}
                    {/* <li>
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
                <p><Link href="https://ramagyagroup.com/current-opening" target='_blank'>Careers</Link></p>
                <p><Link href="/contact-us">Contact Us</Link></p>
                <p><Link href="https://blogs.ramagyaschool.com" target='_blank'>Blog</Link></p>
                <p><Link href="/greater-noida/pre-admission"> Admission</Link></p>
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
                <p style={{textAlign:"center"}}>Copyright 2024. Sai Chhaya Educational And Welfare Society | Designed & Marketed by <a href="#">Ramagya Digital</a></p>
              </col-md-12>
        </row>
           </div>
      
          </div>
       
    </>
  )
}

export default FooterGreaterNoida