import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Enquirypopup from './Enquirypopup';
import Typebot from '../components/Typebot';
// import Link from 'next/link';

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
          <a className="navbar-brand" href="https://ramagyaschool.com/blogs">
            <Image
              src={
                isSticky
                  ? '/images/main-webiste-logo/logo-2.webp'
                  : '/images/main-webiste-logo/logo-2.webp'
              }
              width={280}
              height={56}
              priority
              alt="Ramagya school noida logo"
              className={isSticky ? 'sticky-logo' : 'logo'}
            />
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
              />{' '}
              APPLY NOW
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
                <a className="dropdown-item" href="https://ramagyaschool.com/greater-noida" target="_blank">Gr. Noida</a>
              </li>
              <li>
                <a className="dropdown-item" href="https://ramagyaschool.com/dadri" target="_blank">Dadri</a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu */}
          {/* <div
            className="hamburger"
            id="nav-icon1"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <a href="#" onClick={() => console.log('hamiocn1 clicked')}>
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
            </a>
            <span />
            <span />
            <span />
          </div> */}
        </div>

        {/* Offcanvas */}
        {/* <div className="offcanvas offcanvas-top text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
           <a className="navbar-brand" href="./">
             <img src="/images/main-webiste-logo/logo-1.webp" alt="Ramagya school noida" />
            </a>
           
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
                
                 <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="https://ramagyaschool.com/noida" target='_blank'>
                  Noida
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="https://ramagyaschool.com/noida-extension" target='_blank'>
                  Noida Ext.
                  </a>
                </li>
               
                 <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="https://ramagyaschool.com/greater-noida" target='_blank'>
                  Gr. Noida
                  </a>
                </li>
              
               <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="https://ramagyaschool.com/dadri" target='_blank'>
                  Dadri
                  </a>
                </li>
               
              </ul>
          </div>
        </div> */}
      </nav>

      <Enquirypopup />
      <Typebot />
    </>
  );
};

export default Header;
