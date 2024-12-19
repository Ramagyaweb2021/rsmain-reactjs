import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // For internal routes

function NoidaExtensionParentsScrollspyMenu() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Handle scroll for sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set initial menu state based on screen size
  useEffect(() => {
    const updateMenuState = () => {
      setIsMenuOpen(window.innerWidth >= 768); // Open for screens >= 768px
    };

    updateMenuState(); // Set initial state
    window.addEventListener('resize', updateMenuState);
    return () => {
      window.removeEventListener('resize', updateMenuState);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sidebar ${isSticky ? 'sticky-sidebar' : ''}`}>
      {/* Toggle button */}
      <button
        className="toggle-menu-btn"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        Parent&#39;s Quick Links {isMenuOpen ? '▲' : '▼'}
      </button>

      {/* Collapsible menu */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : 'closed'} py-0`}>
        {/* <h3>Parent&#39;s Quick Links</h3> */}
      {/* <Link
          href="https://script.google.com/Link/macros/ramagyagroup.com/s/LinkKfycbz7D1NDSiklPX1REBEPrDyIboRRvL1A4xMO59ryDjQZ0fdvf4iCo4IXWoUJg7HupaID/exec"
          target="_blank"
          rel="noopener noreferrer"
          >
          Principal&#39;s Office Helpdesk
        </Link>
        <Link
           href="https://script.google.com/Link/macros/ramagyagroup.com/s/LinkKfycbz7D1NDSiklPX1REBEPrDyIboRRvL1A4xMO59ryDjQZ0fdvf4iCo4IXWoUJg7HupaID/exec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher&#39;s Call Appointment Form
        </Link> */}
        <Link href="/noida-extension/book-appointment" className={router.pathname === '/noida-extension/book-appointment' ? 'active' : ''}>
          Book an Appointment
        </Link>
        {/* <Link href="/noida-extension/relationship-manager" className={router.pathname === '/noida-extension/relationship-manager' ? 'active' : ''}>
          Relationship Manager
        </Link> */}
        <Link href="/noida-extension/parent-portal-guide" className={router.pathname === '/noida-extension/parent-portal-guide' ? 'active' : ''}>
          Parent Portal Guide
        </Link>
        <Link href="https://ramagyanoida.edunexttechnologies.com/Index" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://ramagyanoida.edunexttechnologies.com/Index' ? 'active' : ''}>
          Edunext ERP Login
        </Link>
        <Link href="/noida-extension/pay-school-fees" className={router.pathname === '/noida-extension/pay-school-fees' ? 'active' : ''}>
          Pay School Fees
        </Link>
        <Link href="/noida-extension/parents-school-associations" className={router.pathname === '/noida-extension/parents-school-associations' ? 'active' : ''}>
          Parents School Associations
        </Link>
        <Link href="/noida-extension/parents-teacher-meeting" className={router.pathname === '/noida-extension/parents-teacher-meeting' ? 'active' : ''}>
          Parents Teacher Meeting
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSetRHj5jncfezq6SDYOSPXcp6vVnLaH6TzaoEgEq440F_gX9w/viewform" target='_blank' className={router.pathname === 'https://docs.google.com/forms/d/e/1FAIpQLSetRHj5jncfezq6SDYOSPXcp6vVnLaH6TzaoEgEq440F_gX9w/viewform' ? 'active' : ''}>
          Transfer Certificate (TC)
        </Link>
        {/* <Link href="/noida-extension/fee-rules-cancellation-policy" className={router.pathname === '/noida-extension/fee-rules-cancellation-policy' ? 'active' : ''}>
          Fee Rules & Cancelation Policy
        </Link> */}
        {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform' ? 'active' : ''}>
          Meal Facility Form
        </Link> */}
        <Link href="/noida-extension/parents-counselling" className={router.pathname === '/noida-extension/parents-counselling' ? 'active' : ''}>
          Parents Counselling
        </Link>
        {/* <Link href="/noida-extension/recommend-a-student" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/noida-extension/recommend-a-student' ? 'active' : ''}>
          Recommend A Student
        </Link>
        <Link href="/noida-extension/scholarship-programme" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/noida-extension/scholarship-programme' ? 'active' : ''}>
          Scholarship Programme
        </Link> */}
        <Link href="/noida-extension/transport" className={router.pathname === '/noida-extension/transport' ? 'active' : ''}>
          Transport
        </Link>
        <Link href="/noida-extension/parents-feedback" className={router.pathname === '/noida-extension/parents-feedback' ? 'active' : ''}>
          Parent&#39;s Feedback
        </Link>
        <Link href="/noida-extension/early-late-child-pickup" className={router.pathname === '/noida-extension/early-late-child-pickup' ? 'active' : ''}>
          Early/Late Child Pick-up System
        </Link>
        {/* <Link href="/noida-extension/student-discount-rsa" className={router.pathname === '/noida-extension/student-discount-rsa' ? 'active' : ''}>
          Student Discount at RSA
        </Link>
        <Link href="/noida-extension/univariety-login" className={router.pathname === '/noida-extension/univariety-login' ? 'active' : ''}>
          Univariety Login
        </Link> */}
        <Link href="/noida-extension/book-list" className={router.pathname === '/noida-extension/book-list' ? 'active' : ''}>
          BookList
        </Link>
      </nav>
    </div>
  );
}

export default NoidaExtensionParentsScrollspyMenu;
