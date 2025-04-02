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

const Transport = () => {
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
      <title>Parent’s Feedback | Ramagya School</title>
      <meta name="description" content=">Parent’s Feedback" />
      <meta name="keywords" content=">Parent’s Feedback" />
      <link rel="canonical" href="https://ramagyaschool.com/noida-extension/parents-feedback" />
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
                 Parent’s Feedback!
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
            <div className="sec-title3 text-left mb-45">
              <h2 className="title-100">Parent’s Feedback</h2>
            </div>
            <p>
              At Ramagya School, we understand that every parent desires the best for
              their child&#39;s growth, education, and safety. We recognize the invaluable
              role that parents play in their child&#39;s educational journey. To further
              strengthen this partnership, we are thrilled to introduce our Parent
              Feedback System.
            </p>
            <p>
              As parents, you aspire for a secure, nurturing, and exceptional learning
              environment for your child. We share this aspiration and have crafted our
              educational framework to align with your expectations. We also believe that
              your insights and feedback are invaluable in shaping the educational
              landscape we provide.
            </p>
            <ul className="custom-bullets">
              <li>
                Our Online Automated Parent Feedback System is designed to bridge the gap
                between home and school.
              </li>
              <li>
                We understand that a child&#39;s growth involves constant learning, and for
                us, learning extends to understanding and catering to your expectations.
              </li>
              <li>
                This platform empowers you to express your opinions, concerns, and
                suggestions in a structured manner.
              </li>
            </ul>
            {/* <br /> */}
            <div className="btn custom-btn">
              <a
                
                href="https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbxojVoDZFLW2-Reb2YYq-kbnvx5nI0cNcDQa4QbelPaTBRWS_xzGVlqVTQSKceaAFfRKA/exec"
                target="_blank"
              >
                <i className="fa fa-bus" /> Parent’s Feedback Form{" "}
              </a>
            </div>{" "}
            <br />
            <div className="sec-title3 text-left mb-45">
              <h2 className="title-100">
                Ramagya&#39;s Online Automated Parent Feedback System Empowers Parents Too
              </h2>
            </div>
            <ul className="custom-bullets">
              <li>
                Seamless Communication: Stay connected with your child&#39;s educational
                journey effortlessly. Our system provides a direct channel for you to
                communicate your thoughts, concerns, and suggestions, ensuring that your
                voice is heard.
              </li>
              <li>
                Real-Time Insights: Access your child&#39;s progress reports, academic
                performance, and behavioral updates in real time. Stay informed about
                their achievements, areas of improvement, and overall development.
              </li>
              <li>
                Timely Updates: Receive instant notifications about school events,
                parent-teacher meetings, workshops, and other important updates. Stay
                up-to-date with all the happenings at Ramagya School.
              </li>
              <li>
                Personalized Attention: The feedback system allows you to discuss your
                child&#39;s individual needs and concerns with teachers and school
                administrators. Receive personalized guidance and support to ensure your
                child&#39;s holistic development.
              </li>
              <li>
                Transparency: Our commitment to transparency ensures that you have a clear
                understanding of your child&#39;s academic journey. Access information about
                curriculum updates, teaching methodologies, and classroom activities.
              </li>
              <li>
                Constructive Impact: Your feedback directly influences positive changes
                within the school&#39;s teaching methods, facilities, and administrative
                processes. Play an active role in shaping the learning environment for
                your child and future generations.
              </li>
              <li>
                Holistic Development: Beyond academics, the system also welcomes feedback
                on safety measures, extracurricular activities, and overall school
                experience. Contribute to nurturing your child&#39;s well-rounded growth.
              </li>
              <li>
                Strengthening Bond: By actively participating in your child&#39;s education,
                you strengthen the bond between home and school. Your involvement fosters
                trust, collaboration, and a shared commitment to your child&#39;s success.
              </li>
            </ul>
            {/* <br /> */}
            <div className="sec-title3 text-left mb-45">
              <h2 className="title-100">Shaping Excellence Together</h2>
            </div>
            <ul className="custom-bullets">
              <li>
                We invite you to embrace this platform, to actively participate in the
                betterment of your child&#39;s educational journey. Your participation not
                only enriches your child&#39;s experience but also helps us collectively
                evolve into a stronger educational institution.
              </li>
              <li>
                We&#39;re delighted to launch the Online Automated Parent Feedback System,
                available to parents of students in grades Pre Nursery to Grade 2, with
                plans to extend it to all grades soon.
              </li>
              <li>
                The authorized person must present the escort card or a valid ID for a
                secure handover.
              </li>
              <li>
                Your child&#39;s betterment is a shared goal, and your feedback is an integral
                part of achieving it. Let&#39;s embark on this collaborative journey together!
              </li>
            </ul>
          </div>

           </div>
          </div>
        </div>
      </section>
    
      <FooterNoidaExtension />
    </>
  );
};

export default Transport;
