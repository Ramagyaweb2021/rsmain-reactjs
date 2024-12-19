import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // For internal routes

function DadriParentsSidebarMenu() {
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
        <Link href="/dadri/book-appointment" className={router.pathname === '/dadri/book-appointment' ? 'active' : ''}>
          Book an Appointment
        </Link>
        <Link href="/dadri/relationship-manager" className={router.pathname === '/dadri/relationship-manager' ? 'active' : ''}>
          Relationship Manager
        </Link> */}
        <Link href="/dadri/parent-portal-guide" className={router.pathname === '/dadri/parent-portal-guide' ? 'active' : ''}>
          Parent Portal Guide
        </Link>
        <Link href="https://ramagyagn.edunexttechnologies.com/Index" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://ramagyagn.edunexttechnologies.com/Index' ? 'active' : ''}>
          Edunext ERP Login
        </Link>
        <Link href="/dadri/pay-school-fees" className={router.pathname === '/dadri/pay-school-fees' ? 'active' : ''}>
          Pay School Fees
        </Link>
        <Link href="/dadri/parents-school-associations" className={router.pathname === '/dadri/parents-school-associations' ? 'active' : ''}>
          Parents School Associations
        </Link>
        <Link href="/dadri/parents-teacher-meeting" className={router.pathname === '/dadri/parents-teacher-meeting' ? 'active' : ''}>
          Parents Teacher Meeting
        </Link>
        {/* <Link href="/dadri/transfer-certificate-policy" className={router.pathname === '/dadri/transfer-certificate-policy' ? 'active' : ''}>
          Transfer Certificate Policy
        </Link>
        <Link href="/dadri/fee-rules-cancellation-policy" className={router.pathname === '/dadri/fee-rules-cancellation-policy' ? 'active' : ''}>
          Fee Rules & Cancelation Policy
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform' ? 'active' : ''}>
          Meal Facility Form
        </Link> */}
        <Link href="/dadri/parents-counselling" className={router.pathname === '/dadri/parents-counselling' ? 'active' : ''}>
          Parents Counselling
        </Link>
        {/* <Link href="/dadri/recommend-a-student" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/dadri/recommend-a-student' ? 'active' : ''}>
          Recommend A Student
        </Link> */}
        {/* <Link href="/dadri/scholarship-programme" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/dadri/scholarship-programme' ? 'active' : ''}>
          Scholarship Programme
        </Link> */}
        <Link href="/dadri/transport" className={router.pathname === '/dadri/transport' ? 'active' : ''}>
          Transport
        </Link>
        {/* <Link href="/dadri/parents-feedback" className={router.pathname === '/dadri/parents-feedback' ? 'active' : ''}>
          Parent&#39;s Feedback
        </Link> */}
        {/* <Link href="/dadri/early-late-child-pickup" className={router.pathname === '/dadri/early-late-child-pickup' ? 'active' : ''}>
          Early/Late Child Pick-up System
        </Link>
        <Link href="/dadri/student-discount-rsa" className={router.pathname === '/dadri/student-discount-rsa' ? 'active' : ''}>
          Student Discount at RSA
        </Link>
        <Link href="/dadri/univariety-login" className={router.pathname === '/dadri/univariety-login' ? 'active' : ''}>
          Univariety Login
        </Link> */}
        <Link href="/dadri/book-list" className={router.pathname === '/dadri/book-list' ? 'active' : ''}>
          BookList
        </Link>
      </nav>
    </div>
  );
}

export default DadriParentsSidebarMenu;
