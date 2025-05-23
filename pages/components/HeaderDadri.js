/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
// import Link from 'next/link';
// import { Link } from 'react-scroll';
// import EnquirypopupNoidaExtension from './EnquirypopupNoidaExtension';
// import Typebot from '../components/Typebot';
// import Link from 'next/link';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HeaderDadri = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state
  const [isMobile, setIsMobile] = useState(false); // Track if view is mobile

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial mobile state
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);


    //window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('scroll', handleScroll);
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
          <Image
            src={
              isSticky
                ? '/images/main-webiste-logo/logo-2.webp'
                : '/images/main-webiste-logo/logo-1.webp'
            }
            alt="Ramagya school noida logo"
            className={isSticky ? 'sticky-logo' : 'logo'}
            width={280}  // Adjust width as needed
            height={56}  // Adjust height as needed
            priority
          />

            {/* <img
              src={
                isSticky
                  ? '/images/main-webiste-logo/logo-2.webp'
                  : '/images/main-webiste-logo/logo-1.webp'
              }
              alt="Ramagya school noida logo"
              className={isSticky ? 'sticky-logo' : 'logo'}
            /> */}
          </a>

          {/* Dropdown Menu */}
           <div
            className={`dropdown dropdown-menu-end ${hideDropdown ? 'd-none' : ''}`}
            onMouseEnter={(e) => !isMobile && e.currentTarget.classList.add('show')}
            onMouseLeave={(e) => !isMobile && e.currentTarget.classList.remove('show')}
          >
          {/* <div
            className={`dropdown dropdown-menu-end ${hideDropdown ? 'd-none' : ''}`}
            onMouseEnter={(e) => e.currentTarget.classList.add('show')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('show')}
          > */}
           <button
              className="dropdown-basic dropdown-toggle"
              type="button"
              onClick={isMobile ? handleDropdownToggle : undefined} // Handle click only on mobile
            >
            {/* <button
              className="dropdown-basic dropdown-toggle"
              type="button"
              onClick={handleDropdownToggle} 
            > */}
              <Image
                src="/images/fi_check-circle.webp"
                alt="Apply Now"
                width={20}
                height={20}
                priority
              />
              &nbsp; APPLY NOW
            </button>
            <ul className={`dropdown-menu ${dropdownOpen && isMobile ? 'show' : ''}`}>
            {/* <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}> */}
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
                <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target="_blank">Gr. Noida</a>
              </li>
              <li>
                <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target="_blank">Dadri</a>
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
             <a href="#">
                <strong
                  className={`hamiocn1 ${isSticky ? '' : 'animate__animated animate__fadeInUp'}`}
                  style={{ display: isSticky ? 'none' : 'inline-block' }}
                />
              </a>
              <a href="#">
                <strong
                  className={`hamiocn2 ${isSticky ? 'animate__animated animate__fadeInUp' : ''}`}
                  style={{ display: isSticky ? 'inline-block' : 'none' }}
                />
              </a>
            {/* <a href="#" onClick={() => console.log('hamiocn1 clicked')}>
              <strong
                className={`hamiocn1 ${isSticky ? '' : 'animate__animated animate__fadeInUp'}`}
                style={{ display: isSticky ? 'none' : 'inline-block' }}
              />
            </a>
            <a href="#" onClick={() => console.log('hamiocn2 clicked')}>
              <strong
                className={`hamiocn2 ${isSticky ? 'animate__animated animate__fadeInUp' : ''}`}
                style={{ display: isSticky ? 'inline-block' : 'none' }}
              />
            </a> */}

            {/* <strong className={`hamiocn1 ${isSticky ? '' : 'animate__animated animate__fadeInUp'}`} style={{ display: isSticky ? 'none' : 'inline-block' }} />
            <strong className={`hamiocn2 ${isSticky ? 'animate__animated animate__fadeInUp' : ''}`} style={{ display: isSticky ? 'inline-block' : 'none' }} /> */}
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Offcanvas */}
        <div className="offcanvas offcanvas-top text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
           <a className="navbar-brand" href="./"> 
           {/* &nbsp;APPLY NOW */}
             <Image src="/images/main-webiste-logo/logo-1.webp" width={280} height={56} priority alt="Ramagya school dadri" />
            </a>
            {/* <Link href="#" onClick={() => console.log('Close button clicked')}>
              <Image
                src="/images/close.webp"
                alt="Close"
                width={64}
                height={64}
                className="btn-close btn-close-yellow"
                data-bs-dismiss="offcanvas"
              />
            </Link> */}

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
                      <a className="dropdown-item" href="/overview">
                          Overview
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/about-us">
                        About Us 
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/vision-and-values">
                       Our Values 
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/brand-story">
                       Brand Story 
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/people">
                        People
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ramagya-foundation">
                        Ramagya Foundation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/testimonials">
                        Testimonials
                      </a>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="https://ramagyagroup.com/" target='_blank'>
                        Sister Concerns
                      </Link>
                    </li> */}
                    <li>
                      <a className="dropdown-item" href="/partnership">
                        Partnership
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
                      <a className="dropdown-item" href="/explore">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/experiment">
                        Experiment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/innovate">
                        Innovate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/evolve">
                        Evolve
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/lead">
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
                      <a className="dropdown-item" href="/dadri/pre-admission">
                      Admission Procedure
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/dadri/post-admission">
                        Post Admission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/dadri/fee-structure">
                        Fee Structure
                      </a>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="/dadri/scholarship-programme">
                        Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/dadri/recommend-a-student">
                         Recomment a Student
                      </Link>
                    </li> */}
                  </ul>
                </li>
                {/*Partneship */}
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/dadri/parents">
                    Parent&#39;s
                  </a>
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
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/dadri-achievements/" target='_blank'>
                        Achievements
                      </a>
                    </li>
                  <li>
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/dadri-media/" target='_blank'>
                        Media Press
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschoolblog.com/category/dadri-events/" target='_blank'>
                        Events
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/awards-and-recognition">
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
                  <a className="nav-link" aria-current="page" href="/contact-us">
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
                      <a className="dropdown-item" href="https://ramagyaschool.com/noida" target='_blank'>
                        Noida
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target='_blank'>
                       Noida Ext.
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target='_blank'>
                        Gr. Noida
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target='_blank'>
                        Dadri
                      </a>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="https://ramagyaroots.com/" target='_blank'>
                        Ramagya Roots
                      </Link>
                    </li> */}
                  </ul>
                </li>
                {/* End of dropdown meun */}
              </ul>
          </div>
        </div>
      </nav>

      {/* <EnquirypopupNoidaExtension /> */}
      {/* <Typebot /> */}
    </>
  );
};

export default HeaderDadri;
