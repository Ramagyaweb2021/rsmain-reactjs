import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
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
          >
            <div className="offcanvas-header">
            {/* <Link className="navbar-brand" href="./">
              <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/logo.webp" alt="Ramagya school noida logo" width={300} height={62}/>
            </Link> */}
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
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Who are we
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" href="overview">
                          Overview
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="about-us">
                        About Us 
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="vision-and-values">
                        Our vision & values  
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="people">
                        People
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="ramagya-foundation">
                        Ramagya Foundation
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* What we do */}
                <li className="nav-item dropdown dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    What we do
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" href="explore">
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="experiment">
                        Experiment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="innovate">
                        Innovate
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="evolve">
                        Evolve
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="lead">
                         Lead
                      </Link>
                    </li>
                  </ul>
                </li>
                 {/*Admissions */}
                 <li className="nav-item dropdown dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admissions
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" href="pre-admission">
                        Pre Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="post-admission">
                        Post Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="fee-structure">
                        Fee Structure
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="scholarship-programme">
                        Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="recommend-a-student">
                         Recomment a Student
                      </Link>
                    </li>
                  </ul>
                </li>
                  {/*News Feed */}
                  <li className="nav-item dropdown dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News Feed
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/achievements/" target='_blank'>
                        Achievements
                      </Link>
                    </li>
                  <li>
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/media-press/" target='_blank'>
                        Media Press
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/events/" target='_blank'>
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="awards-and-recognition">
                        Awards
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                 {/* Careers menu */}
                 <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="https://ramagyagroup.com/current-opening" target='_blank'>
                    Careers
                  </Link>
                </li>
                {/* Contact menu */}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="contact-us">
                    Contact Us
                  </Link>
                </li>
                {/* Schools  */}
               <li className="nav-item dropdown dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Schools
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/noida/" target='_blank'>
                        Noida
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/noida-extension/" target='_blank'>
                       Noida Extension
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/gnoida/" target='_blank'>
                        Greater Noida
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/dadri/" target='_blank'>
                        Dadri
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaroots.com/" target='_blank'>
                        Ramagya Roots
                      </Link>
                    </li>
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
