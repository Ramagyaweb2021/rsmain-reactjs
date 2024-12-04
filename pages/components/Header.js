import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Enquirypopup from './Enquirypopup';
import Typebot from '../components/Typebot';
import Link from 'next/link';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scroll-sticky');
        setIsSticky(true);
      } else {
        navbar.classList.remove('scroll-sticky');
        setIsSticky(false);
      }

      if (window.innerWidth <= 768 && window.scrollY > scrollThreshold) {
        setHideDropdown(true); // Hide dropdown on mobile after scroll
      } else {
        setHideDropdown(false); // Show dropdown when at top or on larger screens
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState); // Toggle dropdown state
  };

  return (
    <>
      <nav id="navbar" className="navbar fixed-top">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="./">
            <img
              src={
                isSticky
                  ? '/images/main-webiste-logo/logo-2.webp'
                  : '/images/main-webiste-logo/logo-1.webp'
              }
              alt="Ramagya school noida logo"
              className={isSticky ? 'sticky-logo' : 'logo'}
            />
          </a>

          {/* Dropdown Menu */}
          <div
            className={`dropdown dropdown-menu-end ${hideDropdown ? 'd-none' : ''}`}
            onMouseEnter={(e) => e.currentTarget.classList.add('show')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('show')}
          >
            <button
              className="dropdown-basic dropdown-toggle"
              type="button"
              onClick={handleDropdownToggle} // Add click event to toggle dropdown
            >
              <Image
                src="/images/fi_check-circle.webp"
                alt="Apply Now"
                width={20}
                height={20}
              />{' '}
              APPLY NOW
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}> {/* Add show class based on dropdown state */}
              <li>
                <a className="dropdown-item" href="https://forms.edunexttechnologies.com/forms/ramagyanoida/Registration-new/" target="_blank">
                  Noida
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="https://forms.edunexttechnologies.com/forms/ramagyanoidaextension/registration/" target="_blank">
                  Noida Ext.
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Gr. Noida</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Dadri</a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu */}
          <div
            className="hamburger"
            id="nav-icon1"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <strong className={`hamiocn1 ${isSticky ? '' : 'animate__animated animate__fadeInUp'}`} style={{ display: isSticky ? 'none' : 'inline-block' }} />
            <strong className={`hamiocn2 ${isSticky ? 'animate__animated animate__fadeInUp' : ''}`} style={{ display: isSticky ? 'inline-block' : 'none' }} />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Offcanvas */}
        <div className="offcanvas offcanvas-top text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <img src="/images/main-webiste-logo/logo-1.webp" alt="Ramagya school noida" />
            <Image
              src="/images/close.webp"
              alt="Close"
              width={64}
              height={64}
              className="btn-close btn-close-yellow"
              data-bs-dismiss="offcanvas"
            />
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
          </div>
        </div>
      </nav>

      <Enquirypopup />
      <Typebot />
    </>
  );
};

export default Header;
