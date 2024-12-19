import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
// import EnquirypopupNoidaExtension from './EnquirypopupNoidaExtension';
// import Typebot from '../components/Typebot';
import Link from 'next/link';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Header = () => {
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
          <Link className="navbar-brand" href="./">
            <img
              src={
                isSticky
                  ? '/images/main-webiste-logo/logo-2.webp'
                  : '/images/main-webiste-logo/logo-1.webp'
              }
              alt="Ramagya school noida logo"
              className={isSticky ? 'sticky-logo' : 'logo'}
            />
          </Link>

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
              />{' '}
              APPLY NOW
            </button>
            <ul className={`dropdown-menu ${dropdownOpen && isMobile ? 'show' : ''}`}>
            {/* <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}> */}
              <li>
                <Link className="dropdown-item" href="https://forms.edunexttechnologies.com/forms/ramagyanoida/Registration-new/" target="_blank">
                  Noida
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="https://forms.edunexttechnologies.com/forms/ramagyanoidaextension/registration/" target="_blank">
                  Noida Ext.
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="https://ramagyaschool.com/greater-noida" target="_blank">Gr. Noida</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="https://ramagyaschool.com/dadri" target="_blank">Dadri</Link>
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
            <Link href="#" onClick={() => console.log('hamiocn1 clicked')}>
              <strong
                className={`hamiocn1 ${isSticky ? '' : 'animate__animated animate__fadeInUp'}`}
                style={{ display: isSticky ? 'none' : 'inline-block' }}
              />
            </Link>
            <Link href="#" onClick={() => console.log('hamiocn2 clicked')}>
              <strong
                className={`hamiocn2 ${isSticky ? 'animate__animated animate__fadeInUp' : ''}`}
                style={{ display: isSticky ? 'inline-block' : 'none' }}
              />
            </Link>

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
           <Link className="navbar-brand" href="./">
             <img src="/images/main-webiste-logo/logo-1.webp" alt="Ramagya school noida" />
            </Link>
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
                      <Link className="dropdown-item" href="/overview">
                          Overview
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/about-us">
                        About Us 
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/vision-and-values">
                       Our Values 
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/people">
                        People
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/ramagya-foundation">
                        Ramagya Foundation
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/testimonials">
                        Testimonials
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="https://ramagyagroup.com/" target='_blank'>
                        Sister Concerns
                      </Link>
                    </li> */}
                    <li>
                      <Link className="dropdown-item" href="/partnership">
                        Partnership
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
                      <Link className="dropdown-item" href="/explore">
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/experiment">
                        Experiment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/innovate">
                        Innovate
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/evolve">
                        Evolve
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/lead">
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
                      <Link className="dropdown-item" href="/greater-noida/pre-admission">
                        Pre Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/greater-noida/post-admission">
                        Post Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/greater-noida/fee-structure">
                        Fee Structure
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" href="/greater-noida/scholarship-programme">
                        Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/greater-noida/recommend-a-student">
                         Recomment a Student
                      </Link>
                    </li> */}
                  </ul>
                </li>
                {/*Partneship */}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/greater-noida/parents">
                    Parent&#39;s
                  </Link>
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
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/achievements-greater-noida/" target='_blank'>
                        Achievements
                      </Link>
                    </li>
                  <li>
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/noida-ext-media-press/" target='_blank'>
                        Media Press
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschoolblog.com/category/noida-ext-events/" target='_blank'>
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/awards-and-recognition">
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
                  <Link className="nav-link" aria-current="page" href="/contact-us">
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
                      <Link className="dropdown-item" href="https://ramagyaschool.com/noida" target='_blank'>
                        Noida
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/greater-noida" target='_blank'>
                       Noida Ext.
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/greater-noida" target='_blank'>
                        Gr. Noida
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="https://ramagyaschool.com/dadri" target='_blank'>
                        Dadri
                      </Link>
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

export default Header;
