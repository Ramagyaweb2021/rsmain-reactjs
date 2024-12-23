import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // For internal routes

function NoidaParentsSidebarMenu() {
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
      <Link
          href="https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbz7D1NDSiklPX1REBEPrDyIboRRvL1A4xMO59ryDjQZ0fdvf4iCo4IXWoUJg7HupaID/exec"
          target="_blank"
          rel="noopener noreferrer"
          >
          Principal&#39;s Office Helpdesk
        </Link>
        <Link
           href="https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbzP6oytnCHJm8InKsFZxK_u29cuH693Vcg1xpOHEDPt-Yg0aEyVALedf9RRhLdz6ILGnw/exec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher&#39;s Call Appointment Form
        </Link>
        <Link href="/noida/book-appointment" className={router.pathname === '/noida/book-appointment' ? 'active' : ''}>
          Book an Appointment
        </Link>
        <Link href="/noida/relationship-manager" className={router.pathname === '/noida/relationship-manager' ? 'active' : ''}>
          Relationship Manager
        </Link>
        <Link href="/noida/parent-portal-guide" className={router.pathname === '/noida/parent-portal-guide' ? 'active' : ''}>
          Parent Portal Guide
        </Link>
        <Link href="https://ramagyanoida.edunexttechnologies.com/Index" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://ramagyanoida.edunexttechnologies.com/Index' ? 'active' : ''}>
          Edunext ERP Login
        </Link>
        <Link href="/noida/pay-school-fees" className={router.pathname === '/noida/pay-school-fees' ? 'active' : ''}>
          Pay School Fees
        </Link>
        <Link href="/noida/parents-school-associations" className={router.pathname === '/noida/parents-school-associations' ? 'active' : ''}>
          Parents School Associations
        </Link>
        <Link href="/noida/parents-teacher-meeting" className={router.pathname === '/noida/parents-teacher-meeting' ? 'active' : ''}>
          Parents Teacher Meeting
        </Link>
        <Link href="/noida/transfer-certificate-policy" className={router.pathname === '/noida/transfer-certificate-policy' ? 'active' : ''}>
          Transfer Certificate Policy
        </Link>
        <Link href="/noida/fee-rules-cancellation-policy" className={router.pathname === '/noida/fee-rules-cancellation-policy' ? 'active' : ''}>
          Fee Rules & Cancelation Policy
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform" target="_blank"
          rel="noopener noreferrer" className={router.pathname === 'https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform' ? 'active' : ''}>
          Meal Facility Form
        </Link>
        <Link href="/noida/parents-counselling" className={router.pathname === '/noida/parents-counselling' ? 'active' : ''}>
          Parents Counselling
        </Link>
        <Link href="/noida/recommend-a-student" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/noida/recommend-a-student' ? 'active' : ''}>
          Recommend A Student
        </Link>
        <Link href="/noida/scholarship-programme" target="_blank"
          rel="noopener noreferrer" className={router.pathname === '/noida/scholarship-programme' ? 'active' : ''}>
          Scholarship Programme
        </Link>
        <Link href="/noida/transport" className={router.pathname === '/noida/transport' ? 'active' : ''}>
          Transport
        </Link>
        <Link href="/noida/parents-feedback" className={router.pathname === '/noida/parents-feedback' ? 'active' : ''}>
          Parent&#39;s Feedback
        </Link>
        <Link href="/noida/early-late-child-pickup" className={router.pathname === '/noida/early-late-child-pickup' ? 'active' : ''}>
          Early/Late Child Pick-up System
        </Link>
        <Link href="/noida/student-discount-rsa" className={router.pathname === '/noida/student-discount-rsa' ? 'active' : ''}>
          Student Discount at RSA
        </Link>
        <Link href="/noida/univariety-login" className={router.pathname === '/noida/univariety-login' ? 'active' : ''}>
          Univariety Login
        </Link>
        <Link href="/noida/book-list" className={router.pathname === '/noida/book-list' ? 'active' : ''}>
          BookList
        </Link>
      </nav>
    </div>
  );
}

export default NoidaParentsSidebarMenu;
