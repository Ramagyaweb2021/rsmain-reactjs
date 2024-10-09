import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image'
import Link from 'next/link'
const Socialmediaheader = () => {
  return (
    <>
        {/* ------Social media buttons section-------- */}
        <div className="social social-new">
                <div className="social-icon meni_socoal23" style={{ paddingBottom: 0 }}>
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
              </div>
    </>
  )
}

export default Socialmediaheader