import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
// import Link from 'next/a';
import Dropdown from 'react-bootstrap/Dropdown';
import Enquirypopup from './Enquirypopup';
import Typebot from '../components/Typebot';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Header = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scroll-sticky');
      } else {
        navbar.classList.remove('scroll-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <nav id="navbar" className="navbar fixed-top wow animate__animated animate__none" style={{ animationDelay: '0.3s' }}>
      <div className="container-fluid">
          <a className="navbar-brand" href="./">
            <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={300} height={62}/>
          </a>
          {/* <Button variant="warning" size="lg" style={{float:"right"}}>
            APPLY NOW
          </Button>{' '} */}
           <Dropdown className='dropdown-menu-end'>
            <Dropdown.Toggle variant="warning" id="dropdown-basic" className="btn-flash">
            <Image src="/images/fi_check-circle.webp" alt="Ramagya school noida logo" width={20} height={20}/> APPLY NOW
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item href="https://forms.edunexttechnologies.com/forms/ramagyanoida/Registration-new/" target="_blank">Noida</Dropdown.Item>
              <Dropdown.Item href="https://forms.edunexttechnologies.com/forms/ramagyanoidaextension/registration/" target="_blank">Noida Extension</Dropdown.Item>
              <Dropdown.Item href="#">Greater Noida</Dropdown.Item>
              <Dropdown.Item href="#">Dadri</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* Hamburger menu section */}
          <div className="hamburger" id="nav-icon1" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar">
            <strong className="hamiocn1" style={{ display: "inline-block" }} />
            <strong className="hamiocn2" style={{ display: "none" }} />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="offcanvas offcanvas-top text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
            style={{zIndex:"1111"}}
          >
            <div className="offcanvas-header">
            {/* <a className="navbar-brand" href="./">
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={300} height={62}/>
            </a> */}
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                <Image src="/images/close.webp" alt="Close" width={64} height={64}  className="btn-close btn-close-yellow" data-bs-dismiss="offcanvas"/>
              {/* <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              /> */}
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-0 pe-3">
               {/* Who we are menu */}
               <li className="nav-item dropdown dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Who are we
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="overview">
                          Overview
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="about-us">
                        About Us 
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="vision-and-values">
                        Our vision & values  
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="people">
                        People
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="ramagya-foundation">
                        Ramagya Foundation
                      </a>
                    </li>
                  </ul>
                </li>
                {/* What we do */}
                <li className="nav-item dropdown dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    What we do
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="explore">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="experiment">
                        Experiment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="innovate">
                        Innovate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="evolve">
                        Evolve
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="lead">
                         Lead
                      </a>
                    </li>
                  </ul>
                </li>
                 {/*Admissions */}
                 <li className="nav-item dropdown dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admissions
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="pre-admission">
                        Pre Admission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="post-admission">
                        Post Admission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="fee-structure">
                        Fee Structure
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="scholarship-programme">
                        Scholarship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="recommend-a-student">
                         Recomment a Student
                      </a>
                    </li>
                  </ul>
                </li>
                  {/*News Feed */}
                  <li className="nav-item dropdown dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News Feed
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/achievements/" target='_blank'>
                        Achievements
                      </a>
                    </li>
                  <li>
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/media-press/" target='_blank'>
                        Media Press
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/events/" target='_blank'>
                        Events
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="awards-and-recognition">
                        Awards
                      </a>
                    </li>
                  
                  </ul>
                </li>
                 {/* Careers menu */}
                 <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="https://ramagyagroup.com/current-opening" target='_blank'>
                    Careers
                  </a>
                </li>
                {/* Contact menu */}
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="contact-us">
                    Contact Us
                  </a>
                </li>
                {/* Schools  */}
               <li className="nav-item dropdown dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Schools
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/noida/" target='_blank'>
                        Noida
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/noida-extension/" target='_blank'>
                       Noida Extension
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/gnoida/" target='_blank'>
                        Greater Noida
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/dadri/" target='_blank'>
                        Dadri
                      </a>
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="https://ramagyaroots.com/" target='_blank'>
                        Ramagya Roots
                      </a>
                    </li> */}
                  </ul>
                </li>
                {/* End of dropdown meun */}
              </ul>
              
              {/* <Socialmediaheader/> */}
           
            </div>
        </div>
      </nav>

      <Enquirypopup />
      <Typebot />
    </>
  );
};

export default Header;
