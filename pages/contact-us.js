import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from './components/Header'; // Adjust this path if needed
import "bootstrap-icons/font/bootstrap-icons.css";
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import LocationMap from './components/LocationMap';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ContactUs = () => {
  // Data for the locations
  const locations = [
    {
      title: "Ramagya School",
      subtitle: "Ramagya School - Noida",
      address: "E-7, E Block, Sector 50, Noida, Uttar Pradesh 201301",
      phone: "+91-8010 333 555",
      emails: [
        "admissions@ramagyaschool.com",
        "principal@ramagyaschool.com",
        "recruitment@ramagyagroup.com",
        "pr@ramagyagroup.com",
        "sports@ramagyagroup.com",
      ],
    },
    {
      title: "Ramagya School",
      subtitle: "Ramagya School - Noida Extension",
      address:
        "Plot No. A-229 Knowledge Park 5 Noida Extension & Greater Noida, Uttar Pradesh 201307",
      phone: "+91-8010 770 770",
      emails: [
        "info.ext@ramagyaschool.com",
        "admissions.noidaext@ramagyaschool.com",
        "principal.ext@ramagyaschool.com",
        "recruitment@ramagyagroup.com",
        "pr@ramagyagroup.com",
        "sports@ramagyagroup.com",
      ],
    },
    {
      title: "Ramagya School",
      subtitle: "Ramagya School - Greater Noida",
      address: "NS-26, Delta-2, Greater Noida, Uttar Pradesh 201310",
      phone: "+91-7065 078 637, +91-9599 191 929",
      emails: [
        "admissions.greaternoida@ramagyaschool.com",
        "principal.greaternoida@ramagyaschool.com",
        "recruitment@ramagyagroup.com",
        "pr@ramagyagroup.com",
        "sports@ramagyagroup.com",
      ],
    },
    {
      title: "Ramagya School",
      subtitle: "Ramagya School - Dadri",
      address: "Bishara Road, Dadri, Uttar Pradesh 203207",
      phone: "+91-9971 232 922, +91-7065 078 636",
      emails: [
        "admissions.dadri@ramagyaschool.com",
        "principal.dadri@ramagyaschool.com",
        "recruitment@ramagyagroup.com",
        "pr@ramagyagroup.com",
        "sports@ramagyagroup.com",
      ],
    },
  ];

  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Contact Ramagya School | Top CBSE Affiliated School Noida</title>
        <meta
          name="description"
          content="Contact with Ramagya School, Top CBSE Affiliated school in noida Find contact details, location, and admission support to begin your child’s education"
        />
        <link rel="canonical" href="https://ramagyaschool.com/contact-us" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Ramagya School | Top CBSE Affiliated School Noida" />
        <meta property="og:description" content="Contact with Ramagya School, Top CBSE Affiliated school in noida Find contact details, location, and admission support to begin your child’s education" />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/contact-us" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Ramagya School | Top CBSE Affiliated School Noida" />
        <meta name="twitter:description" content="Contact with Ramagya School, Top CBSE Affiliated school in noida Find contact details, location, and admission support to begin your child’s education" />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Contact Us!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='container contact-us my-5'>
        <div className="container py-5">
          <div className="row g-1">
            {/* Use map to dynamically generate cards */}
            {locations.map((location, index) => (
              <div className="col-md-6 col-lg-6 g-3" key={index}>
                <div className="card shadow-sm border-0 h-100 p-3">
                  <div className="card-body-contact-us">
                    {/* <h5 className="card-title fw-bold mb-4">{location.title}</h5> */}
                    <h5 className="title-100 mb-2 text-uppercase">
                      {location.subtitle}
                    </h5>
                    <p className="card-text">
                      <i className="bi bi-geo-alt-fill"></i> {location.address}
                    </p>
                    <p>
                      <i className="bi bi-telephone-fill"></i>{' '}
                      <a href={`tel:${location.phone}`} className="text-decoration-none">
                        {location.phone}
                      </a>
                    </p>
                    <p>
                      {/* <i className="bi bi-envelope-fill"></i>{' '} */}
                      {location.emails.map((email, idx) => (
                        <span key={idx}>
                          <a
                            href={`mailto:${email}`}
                            className="text-decoration-none"
                          >
                            <i className="bi bi-envelope-fill"></i>{' '} {email}
                          </a>
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='container location-map my-5'>
        <LocationMap />
      </section>
      <FooterNoida />
    </>
  );
};

export default ContactUs;
