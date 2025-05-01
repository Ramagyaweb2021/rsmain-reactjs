import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeaderNoida from '/pages/components/HeaderNoida';
import 'animate.css';
import FooterNoida from '../components/FooterNoida';
import NoidaParentsScrollspyMenu from '../components/NoidaParentsScrollspyMenu';
// import Image from 'next/image';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const ParentSchoolAssociations = () => {
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
        {/* Primary Meta Tags */}
        <title>Parent School Association | Ramagya School</title>
        <meta name="description" content="Learn about the Parent School Association at Ramagya School, Noida. Get involved in supporting school activities and enhancing the student experience." />
        <meta name="keywords" content="Parent School Association, Ramagya School Noida, School Activities, Parent Involvement, Parent Support" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/parents-school-associations" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Parent School Association | Ramagya School Noida" />
        <meta property="og:description" content="Learn about the Parent School Association at Ramagya School, Noida. Get involved in supporting school activities and enhancing the student experience." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/parents-school-associations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parent School Association | Ramagya School Noida" />
        <meta name="twitter:description" content="Learn about the Parent School Association at Ramagya School, Noida. Get involved in supporting school activities and enhancing the student experience." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <HeaderNoida />
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
                 Parent School Association!
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
               <NoidaParentsScrollspyMenu />
            </div>
            <div className="col-md-9 col-12">
            <div className="about-intro">
              <p>
                Parent engagement or parent involvement is an important part of the School
                Education ecosystem. Parent engagement or parent involvement is an important
                part of the School Education ecosystem. We at Ramagya focus a lot on making
                Parent Engagement easier because we clearly understand it’s importance and
                at the same time we also understand that in today’s busy world it is
                difficult for parents to stay in sync with their child’s growth at School.
                Hence, we discovered that the best way to solve this problem is by giving a
                super simple platform to parents, which they can use to keep themselves
                updated through different devices and mediums so that they can stay
                connected with their child’s progress at their own convenience, and all this
                has been made possible by the use of ERP at school, wherein the parents get
                a login id which can be used by them anytime and anywhere to stay in touch
                with their ward’s ongoing at school. ERP empowers the parents and helps them
                in playing an important role in the holistic development of their child. At
                Ramagya, we trust that our parents walk as partners in the educational tour
                of our children. We perceive that parents play an integral role in
                contributing to our educands’ success and contentment at school and explore
                to build strong and supportive collaborations with our parent association.
                Our Parent School Association is strongly knitted with the school and its
                programmes. Every parent is a core participant of the PSA and every class is
                represented at the PSA Councils by two representatives. A crux of nominated
                secretaries from Primary, Junior and Senior School work together with the
                Senior Management team on several school programmes. These include the
                Unnati and Environment related programmes, fundraising for charitable
                causes, assisting the school for smooth functioning.
              </p>
              <hr />
             
              <div className="sec-title3 text-left mb-45">
                <h2 className="title-100">The PSA aims</h2>
              </div>
              <ul className="custom-bullets">
                <li>
                  To nurture an extended and meaningful relationship between the teachers
                  and parents with a view of strengthening the objectives of the school and
                  lightening up the future of the students.
                </li>
                <li>
                  To partake in the administration and teachers in advancing the education
                  of the students in a holistic manner.
                </li>
                <li>
                  To act jointly in all curricular and co-curricular events aimed at the
                  integral growth of students.
                </li>
                <li>
                  To assist in providing special needs to the students whenever called upon.
                </li>
                <li>To oblige in raising funds for specific causes.</li>
                <li>
                  To provide professional prowess, services, and guidance to the school
                  whenever needed.
                </li>
                <li>
                  To assist in organizing educational, social, recreational and other
                  co-curricular activities in the school for the benefit of students, like,
                  charity shows, exhibitions, fetes, competitions, etc.
                </li>
                <li>
                  To publish an issue magazine or other literature, hold workshops,
                  lectures, etc. for the upsurge of the aims and objectives of the education
                  system.
                </li>
              </ul>
            </div>


           </div>
          </div>
        </div>
      </section>
    
      <FooterNoida />
    </>
  );
};

export default ParentSchoolAssociations;
