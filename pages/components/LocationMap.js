import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import dynamic from 'next/dynamic';
import 'animate.css';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const LocationMap = () => {
  // Branch data with names and Google Maps embed links
  const branches = [
    {
      name: 'Noida',
      key: 'noida',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56076.92240264279!2d77.33554658332929!3d28.545500732089387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b126c4cde3%3A0x60630a1c40880482!2sRamagya%20School!5e0!3m2!1sen!2sin!4v1731910204036!5m2!1sen!2sin',
    },
    {
      name: 'Noida Extension',
      key: 'noida-ext',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6318608647225!2d77.45731427601432!3d28.550783087787327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9e8e6eae94b%3A0xae156e318e445a7b!2sRamagya%20School%20Noida%20Extension!5e0!3m2!1sen!2sin!4v1702716457474!5m2!1sen!2sin',
    },
    {
      name: 'Greater Noida',
      key: 'gr-noida',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112179.14361474628!2d77.493035!3d28.521733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea8ca4bde643%3A0x1f87693104dcda1b!2sRamagya%20World%20School!5e0!3m2!1sen!2sus!4v1747031910014!5m2!1sen!2sus"',
    },
    {
      name: 'Dadri',
      key: 'dadri',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1297560962844!2d77.56041907615582!3d28.565866087103707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9355152b9353%3A0x6e73a37a101beb5c!2sRamagya%20School%20-%20Best%20CBSE%20School%20in%20Dadri!5e0!3m2!1sen!2sin!4v1681474419141!5m2!1sen!2sin',
    },
  ];

  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Container className="container location-map">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Tabs
              defaultActiveKey={branches[0].key}
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              {branches.map((branch) => (
                <Tab eventKey={branch.key} title={branch.name} key={branch.key}>
                  <section className="custom-section">
                    <div className="container">
                      <iframe
                        title={`${branch.name} Branch`}
                        src={branch.mapLink}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </section>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LocationMap;
