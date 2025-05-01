import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoidaExtension from '/pages/components/HeaderNoidaExtension';
import 'animate.css';
import FooterNoidaExtension from '../components/FooterNoidaExtension';
import NoidaExtensionParentsScrollspyMenu from '../components/NoidaExtensionParentsScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ParentCounselling = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOWJS = require('wowjs');
      const wow = new WOWJS.WOW({
        live: false,
      });
      wow.init();
    }
  }, []); // Runs once on mount

  return (
    <>
      <Head>
        <title>Parent Counselling | Ramagya School</title>
        <meta name="description" content="Explore the Parent Counselling services at Ramagya School, Noida Extension. Get expert guidance to support your child's academic and personal growth." />
        <meta name="keywords" content="Parent Counselling, Ramagya School Noida Extension, Parent Support, Student Development, School Counselling Services" />
        <link rel="canonical" href="https://ramagyaschool.com/noida-extension/parents-counselling" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Parent Counselling | Ramagya School Noida Extension" />
        <meta property="og:description" content="Explore the Parent Counselling services at Ramagya School, Noida Extension. Get expert guidance to support your child's academic and personal growth." />
        <meta property="og:url" content="https://ramagyaschool.com/noida-extension/parents-counselling" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parent Counselling | Ramagya School Noida Extension" />
        <meta name="twitter:description" content="Explore the Parent Counselling services at Ramagya School, Noida Extension. Get expert guidance to support your child's academic and personal growth." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />


      </Head>
      <HeaderNoidaExtension />
      {/* Main banner section of the page */}
      <section className="section banner-sec banner-section-admission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                 Parent Counselling!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid my-5'>
        <div className="container">
          <div className='row'>
            <div className="col-md-3 col-12">
               <NoidaExtensionParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
            <div className="about-intro">
              <p>
                Parents are susceptible to different types of problems that can greatly
                affect how they take care or manage their families, especially in how they
                guide and raise their children and hence the school not only looks after the
                students and the staff but as a family extends the embrace to help the
                parents. To maintain a healthy, safe and resilient school community, Ramagya
                includes parents in the equation and steps in the Parenting counselling at
                Ramagya.
              </p>
              <p>
                This is a specialised service that aims at providing the necessary
                knowledge, tools, guidance, and most especially support to parents without
                bias or judgement. This way, they become more fully equipped to take care of
                their children.
              </p>
              <p>
                Although becoming a parent is rewarding, Ramagya understands that it is also
                challenging. The responsibilities that parents must fulfil are huge. They
                are required to do a lot without faltering. Hence, the school offers its
                parents an open door to treat their worries and anxieties of any or all the
                types.
              </p>
              <p>
                At Ramagya, the help that parents need is just a call away. They can book an
                appointment with the school counsellor and attend the sessions and get rid
                of their fret.
              </p>
              <p>Taking the counselling sessions at Ramagya helps the parents in :</p>
              <ul className="custom-bullets">
                <li>Raising good children who can contribute to society</li>
                <li>Providing a home that is loving, supportive, and caring</li>
                <li>
                  Meeting all the needs of their children such as a home, education, food,
                  healthcare, and education
                </li>
                <li>Taking care of their respective spouses</li>
                <li>
                  Supporting the community they are in to create a safe and productive place
                  for their families
                </li>
                <li>Giving their families a comfortable life</li>
              </ul>
              <br />
              <p>
                They learn to do all these cheerfully while they also try to meet their own
                needs and cope with their personal struggles.
              </p>
            </div>


           </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default ParentCounselling;
