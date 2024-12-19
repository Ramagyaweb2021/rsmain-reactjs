import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // For internal routes

function GreaterNoidaParentsSidebarMenu() {
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
        </Link>
        <Link href="/greater-noida/book-appointment" className={router.pathname === '/greater-noida/book-appointment' ? 'active' : ''}>
          Book an Appointment
        </Link>
        <Link href="/greater-noida/relationship-manager" className={router.pathname === '/greater-noida/relationship-manager' ? 'active' : ''}>
          Relationship Manager
        </Link> */}
        <Link href="/greater-noida/parent-portal-guide" className={router.pathname === '/greater-noida/parent-portal-guide' ? 'active' : ''}>
          Parent Portal Guide
        </Link>
        <Link href="https://ramagyagn.edunexttechnologies.com/Index" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://ramagyagn.edunexttechnologies.com/Index' ? 'active' : ''}>
          Edunext ERP Login
        </Link>
        <Link href="/greater-noida/pay-school-fees" className={router.pathname === '/greater-noida/pay-school-fees' ? 'active' : ''}>
          Pay School Fees
        </Link>
        <Link href="/greater-noida/parents-school-associations" className={router.pathname === '/greater-noida/parents-school-associations' ? 'active' : ''}>
          Parents School Associations
        </Link>
        <Link href="/greater-noida/parents-teacher-meeting" className={router.pathname === '/greater-noida/parents-teacher-meeting' ? 'active' : ''}>
          Parents Teacher Meeting
        </Link>
        {/* <Link href="/greater-noida/transfer-certificate-policy" className={router.pathname === '/greater-noida/transfer-certificate-policy' ? 'active' : ''}>
          Transfer Certificate Policy
        </Link>
        <Link href="/greater-noida/fee-rules-cancellation-policy" className={router.pathname === '/greater-noida/fee-rules-cancellation-policy' ? 'active' : ''}>
          Fee Rules & Cancelation Policy
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform' ? 'active' : ''}>
          Meal Facility Form
        </Link> */}
        <Link href="/greater-noida/parents-counselling" className={router.pathname === '/greater-noida/parents-counselling' ? 'active' : ''}>
          Parents Counselling
        </Link>
        {/* <Link href="/greater-noida/recommend-a-student" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/greater-noida/recommend-a-student' ? 'active' : ''}>
          Recommend A Student
        </Link> */}
        {/* <Link href="/greater-noida/scholarship-programme" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/greater-noida/scholarship-programme' ? 'active' : ''}>
          Scholarship Programme
        </Link>
        <Link href="/greater-noida/transport" className={router.pathname === '/greater-noida/transport' ? 'active' : ''}>
          Transport
        </Link>
        <Link href="/greater-noida/parents-feedback" className={router.pathname === '/greater-noida/parents-feedback' ? 'active' : ''}>
          Parent&#39;s Feedback
        </Link>
        <Link href="/greater-noida/early-late-child-pickup" className={router.pathname === '/greater-noida/early-late-child-pickup' ? 'active' : ''}>
          Early/Late Child Pick-up System
        </Link>
        <Link href="/greater-noida/student-discount-rsa" className={router.pathname === '/greater-noida/student-discount-rsa' ? 'active' : ''}>
          Student Discount at RSA
        </Link>
        <Link href="/greater-noida/univariety-login" className={router.pathname === '/greater-noida/univariety-login' ? 'active' : ''}>
          Univariety Login
        </Link> */}
        <Link href="/greater-noida/book-list" className={router.pathname === '/greater-noida/book-list' ? 'active' : ''}>
          BookList
        </Link>
      </nav>
    </div>
  );
}

export default GreaterNoidaParentsSidebarMenu;
