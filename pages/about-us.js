import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const AboutUs = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // return () => {
    //   wow.destroy();
    // };
  }, []);

  return (
    <>
      <Head>
        <title>About Us | Ramagya School</title>
        <meta name="description" content="AboutUs" />
        <meta name="keywords" content="AboutUs" />
        <link rel="canonical" href="https://ramagyaschool.com/about-us" />
      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  ABOUT US!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu />

      {/* Our guiding light section */}
      <section className="container about-us my-5">
        <div className='row'>
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  A LEGACY OF ENLIGHTENED LEARNING
                </h2>
                <p className='fst-italic fw-bold' style={{ textAlign: "center" }}>
                &quot;Education is the kindling of a flame, not the filling of a vessel.&quot; - Socrates
                </p>
                <p style={{ textAlign: "left" }}>
                With a distinguished legacy spanning over two decades, Ramagya has become a beacon of educational excellence, seamlessly blending modern knowledge with timeless values to promote holistic growth. Situated in the vibrant Sector 50 of Noida, the expansive 3-acre campus thrives as a center of academic brilliance, co-curricular achievement, and sports excellence. Affiliated with  CBSE, our curriculum goes beyond textbooks, focusing on critical thinking, problem-solving, and preparing students for global success. Our experienced faculty, each with over 15 years of expertise, provides unmatched guidance, while their participation in national and international seminars ensures the constant evolution of our teaching practices.
                </p>
                <p style={{ textAlign: "left" }}>
                  The name &#34;Ramagya&#34; derives its meaning from &#34;R&#34; (light), &#34;Ma&#34; (self), and &#34;Gya&#34; (inner wisdom), encapsulating our philosophy where education is a transformative journey of self-enlightenment. Our vision, &#34;Light My Inner Voice,&#34; focuses on self-discovery, compassion, and empathy, laying the foundation for student&#39;s personal and intellectual growth.
                </p>
                <p style={{ textAlign: "left" }}>
                  Our commitment to excellence is reflected in several prestigious recognitions
                </p>

                <ul className='custom-bullets'>
                  <li>Ranked #1 in India for &quot;Individual Attention to Students&quot; by Education Today Highlighting our focus on personalized learning, where every student receives tailored attention to nurture their unique potential.</li>
                  <li>Featured among the Top 30 Great Indian Schools by Forbes India. Acknowledging our exceptional academic and co-curricular programs that place us among India&#39;s most distinguished institutions</li>
                  <li>Ranked #3 in Noida by the Times School Survey, Celebrating our academic excellence, cutting-edge facilities, and holistic development, this accolade recognizes our prominent standing in the Noida region. </li>
                  <li>Named &ldquo;The Reformers of Indian Education&ldquo; by India Today Conclave Recognized for our innovative approach to education, blending traditional values with modern pedagogy to redefine the learning experience</li>
                </ul>
                <p style={{ textAlign: "left" }}>
                  Sustainability is integral to our ethos, shaping forward-thinking and responsible citizens. Our school is built on four key pillars: <b>Mental Health, Sports Excellence, Transcendental Meditation</b>, and the wisdom of the <b>Bhagavad Gita (Geeta Saar)</b>. These pillars ensure we provide an education that nurtures not only academic achievement but also every student&#39;s emotional, physical, and spiritual well-being.
                </p>
                <p style={{ textAlign: "left" }}>We cultivate an environment where learning transcends the classroom, empowering students to become resilient, compassionate leaders ready to navigate the challenges of tomorrow. Through our holistic approach and commitment to educational innovation, we continue to inspire and shape the future of education. </p>

                {/* <h2 className='main-heading-internal-pages'>Key Features</h2>
                <ul className='custom-bullets'>
                  <li>Double-glazed windows have been used in the façade, providing excellent insulation from outside temperatures.</li>
                  <li>230mm thick walls provide high thermal mass while keeping the interiors insulated.</li>
                  <li>The roof of the reception area has been utilized and converted into a terrace garden to reduce the heat island effect and make it an accessible garden enjoyed by students and staff. </li>
                  <li>70% of the site area has been kept green and virgin to protect the topsoil layer while giving activities like playfields, courtyards, etc., for the students to come out and enjoy.</li>
                  <li>The open courtyard principle guides the design for the school found in traditional buildings in India, which aids in natural ventilation, provides ambient daylight to the interior spaces, and acts as a transition space between the classrooms and other activities. It has been integrated with biophilic architecture to reduce radiant heat and create a comfortable microclimate</li>
                  <li>The courtyards and transition spaces have been strategically placed and designed to enable children to play outside at 45 degrees without a thermal shock.</li>
                  <li>The school is Delhi NCR&#39;s first net zero school equipped with a 750 KW solar panel on the roof. The campus mission is to create a human-centric design for the future of education and set new global sustainability standards for construction and school design.</li>
                  <li>Rainwater harvesting systems have collected water from terraces and recharged the groundwater table.</li>
                  <li>The wastewater, such as water from the washrooms, is conveyed to the sewage treatment plant and is reused for horticulture purposes.</li>
                  <li>The classrooms are entirely day-lit by creating perforations within the existing solid mass of the built forms as against artificially lighting the classrooms. </li>
                  <li>The classrooms are centrally air-conditioned with air economizers that bring in fresh air in the morning and cool down the rooms without using ACs at full load.
                  A gymnasium for children to stay fit and a swimming pool makes school a more conducive environment for overall growth.</li>
                  <li>The school has been designed so that it can be converted into a commercial office space once the institution&#39;s purpose has been achieved</li>
                  <li>Use locally sourced materials to reduce carbon footprint while creating employment for people near the project site.</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNoida />
    </>
  );
};

export default AboutUs;
