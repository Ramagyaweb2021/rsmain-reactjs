import React from 'react';
// import Image from 'next/image';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Row, Col, Form} from 'react-bootstrap';
import Link from 'next/link';
import BottomBarNoida from './BottomBarNoida';
// import FloatingWidget from './FloatingWidget';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
const HomeSectionFooter = () => {
  return (
    <>
       {/* Footer Section */}
       {/* <FloatingWidget/> */}
       <div className="home-footer">
        <div className="container-fluid my-custom-footer">
          {/* <div className='fp-tableFooter' style={{backgroundColor:"rgb(233 236 239 / 26%)", padding:"50px"}}>
          <div className='container-fluid my-1'> */}
           <div className='row'>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {/* <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={250} height={52}/> */}
              <p className="footer-heading">Address</p>
              <p> E-7, E Block, Sector 50, Noida, Uttar Pradesh 201301  
                </p>
                <p className="footer-heading">Email id</p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:admissions@ramagyaschool.com"> admissions@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:principal@ramagyaschool.com"> principal@ramagyaschool.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:recruitment@ramagyagroup.com"> recruitment@ramagyagroup.com</a></p>
                {/* <p style={{textTransform:"lowercase"}}><a href="mailto:pc@ramagyagroup.com"><i className="bi bi-envelope-fill"></i> pc@ramagyagroup.com</a></p>
                <p style={{textTransform:"lowercase"}}><a href="mailto:sports@ramagyagroup.com"><i className="bi bi-envelope-fill"></i> sports@ramagyagroup.com</a></p> */}
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <p className="footer-heading">For Enquiries</p>
                <p>Contact No. <a href="tel:+918010333555"> +91-8010 333 555</a></p>
                {/* <p className="footer-heading">Social</p> */}
                {/* <hr/> */}
                  {/* <div className="social-icons">
                   <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "15px" }}>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send/?phone=918010333555&text&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366" }}
                      >
                        <i className="bi bi-whatsapp" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/RamagyaSchoolNoida/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1877F2" }}
                      >
                        <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ramagya.school/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#E4405F" }}
                      >
                        <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/c/RamagyaSchoolNoida50"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FF0000" }}
                      >
                        <i className="bi bi-youtube" style={{ fontSize: "20px" }}></i>
                      </a>
                    </li>
                    <li>
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
                    </li>
                  </ul>
                 
                </div> */}
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
                <p><Link href="overview">Overview</Link></p>
                <p><Link href="about-us">About Us</Link></p>
                <p><Link href="vision-and-values">Our Values</Link></p>
                <p><Link href="brand-story">Brand Story</Link></p>
                <p><Link href="people">People</Link></p>
                <p><Link href="ramagya-foundation">Ramagya Foundation</Link></p>
                <p><Link href="testimonials">Testimonials</Link></p>
                <p><Link href="https://ramagyagroup.com/">Sister Concerns</Link></p>
               
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
              <p className="footer-heading">what we do</p>
                <p><Link href="explore">Explore</Link></p>
                <p><Link href="experiment">Experiment</Link></p>
                <p><Link href="innovate">Innovate</Link></p>
                <p><Link href="evolve">Evolve</Link></p>
                <p><Link href="lead">Lead</Link></p>
                {/* <p className="footer-heading">admission</p> */}
                {/* <p><Link href="pre-admission">Pre Admission</Link></p>
                <p><Link href="post-admission">Post Admission</Link></p>
                <p><Link href="fee-structure">Fee Structure</Link></p>
                <p><Link href="scholarship-programme">Scholarship</Link></p>
                <p><Link href="recommend-a-student">Recommend a Student</Link></p> */}
                <p className="footer-heading">Other Links</p>
                <p> <Link href="https://ramagyagroup.com/current-opening" target="_blank" rel="noopener noreferrer">Careers</Link></p>
                <p><Link href="contact-us">Contact Us</Link></p>
                {/* <p><Link href="/noida/pre-admission"> Admission</Link></p> */}
                <p><Link href="results">Results</Link></p>
                <p>
                  <a href="https://blogs.ramagyaschool.com/" target="_blank" rel="noopener noreferrer">
                    Blogs
                  </a>
                </p>
                <p>
                <a
                  href="https://summercampnoida.ramagyaschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#EDD157] to-[#f4e27c] text-[#043B4A] font-bold text-lg rounded-full shadow-md hover:shadow-lg hover:from-[#f4e27c] hover:to-[#EDD157] transition-all duration-300 ease-in-out"
                >
                  🌞 Join Summer Camp
                </a>

                </p>
                {/* <p className="footer-heading">News Feed</p>
                <p><Link href="#">Achievements</Link></p>
                <p><Link href="#">Media Press</Link></p>
                <p><Link href="#">Events</Link></p>
                <p><Link href="#">Awards</Link></p> */}
              </div>
           </div>
           {/* <FloatingWidget/> */}
           {/* <hr/> */}
           <BottomBarNoida/>
           <row className="footer-bottom">
                  <col-md-12 className="text-center">
                  <p style={{textAlign:"center", fontSize:"12px"}}>Copyright 2025. Sai Chhaya Educational & Welfare Society | Designed & Marketed by Ramagya Digital</p>
                  </col-md-12>
              </row>
              
           </div>
      
          </div>
  
    </>
  )
}

export default HomeSectionFooter