import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const VissionAndValue = () => {
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
        <title>Vision & Values | Ramagya School</title>
        <meta name="description" content="AboutUs" />
        <meta name="keywords" content="AboutUs" />
        <link rel="canonical" href="https://ramagyaschool.com/vision-and-values" />
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
                  Our Values!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu />

      {/* Our MISSION light section */}
      <section className="container about-us my-5">
        <div className='row'>
          <div className="col-md-9 mx-auto">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  MISSION
                </h2>
               <ul className='custom-bullets list-unstyled text-center'>
                  <li>Our mission is to inspire every child to unlock their full potential and cultivate a passion for lifelong learning.</li>
                  <li>We aim to build a community of learners equipped with 21st-century skills, empowering them to confidently navigate the challenges of the future.</li>
                  <li>We are committed to creating an inclusive environment, free from discrimination, where every child has the freedom to learn and aspire to great heights.</li>
                  <li>Emphasis is placed on nurturing integrated intelligence, intellectual curiosity, and a scientific temperament, fostering rational thinking in our students.</li>
                  <li>We seek to instill in our children a deep respect for Indian traditions while embracing the universal values of &#39;Vasudhaiva Kutumbakam&#39; – recognizing the world as one big family.</li>
                  <li>Our commitment lies in nurturing each child&#39;s unique potential, passions, and aspirations through personalized learning, holistic development, and a supportive community.</li>
                  <li>We strive to develop a &#39;EK-AAGRAT&#39; mindset in our students through the teachings of T M and Geeta Shlokas, coupled with manifestation techniques. This prepares them to lead a righteous, mindful, and ethical life.</li>
                  <li>We offer optimal exposure and opportunities in the realm of sports, ensuring that each child not only becomes proficient in sport but also learns the values of team building and celebrates sportsmanship.</li>
               </ul>
                {/* <p style={{ textAlign: "left" }}>
                At Ramagya School, our mission is to inspire every child to unlock their full potential and embrace a passion for lifelong learning. We are dedicated to equipping students with 21st-century skills, nurturing intellectual curiosity, and fostering scientific temperament. Through personalized learning and holistic development, we aim to create confident, ethical, and mindful leaders of tomorrow. Rooted in Indian traditions and universal values, we foster inclusivity, respect, and a sense of global family. We also provide ample opportunities in sports, promoting teamwork, discipline, and sportsmanship for well-rounded growth.
                </p> */}
             
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* vision us section */}
      <section className='container-fluid vision-section my-5'>
            <div className="row">
                {/* <div className="col-lg-6">
                  <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" />
                </div> */}
                <div className="col-lg-6 col-12 mx-auto d-flex align-items-center">
                  <div className='about-us-detail'>
                    <h3 className='main-heading-internal-pages text-center'>VISION</h3>
                    <center> <h5 className='title-1001'>
                       RA-MA-GYA
                    </h5></center>
                    <p>Light my Inner Voice to follow the path of self discovery, enriched with the value of compassion and empathy to lead a successful and purposeful life.</p>
                    {/* <div className="d-flex justify-content-left align-items-left mt-1">
                      <div className="learn-more-button">
                        <a href="#">Learn More</a>
                      </div>
                </div> */}
                  </div>
                </div>
              </div>
      </section>
        {/* Core Value section */}
        <section className="container value-section my-5">
      <div className="text-center mb-4">
      <h3 className="main-heading-internal-pages">CORE VALUE</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
             {/* <Image src="/images/vision-mission/1.webp" alt="core value" width={50} height={50} /> */}
              <h5>Integrity</h5>
              <p>
                Upholding honesty, ethics, and moral principles in all endeavors, fostering trust and credibility within our community.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            {/* <Image src="/images/vision-mission/2.webp" alt="core value" width={50} height={50} /> */}
              <h5>Respect & Compassion</h5>
              <p>
                Valuing diversity, treating others with empathy, kindness, and understanding, creating an inclusive and supportive environment for all.
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            {/* <Image src="/images/vision-mission/3.webp" alt="Our Vision" width={50} height={50} /> */}
              <h5>Resilience & Perseverance</h5>
              <p>
                Encouraging determination, grit, and adaptability in the face of challenges, fostering a mindset of resilience to overcome obstacles.
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            {/* <Image src="/images/vision-mission/4.webp" alt="Our Vision" width={50} height={50} /> */}
              <h5>Inclusivity</h5>
              <p>
              Embracing diversity and promoting equal opportunities for all individuals regardless of background, culture, or beliefs, celebrating the uniqueness of each person.

              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            {/* <Image src="/images/vision-mission/5.webp" alt="Our Vision" width={50} height={50} /> */}
              <h5>Adherence & Allegiance to Indian Values & Traditions</h5>
              <p>
              Preserving the rich heritage, customs, and cultural values, instilling a sense of pride and identity in students while embracing modernity.
              </p>
            </div>
          </div>
          
        </div>
        {/* <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/6.webp" alt="Our Vision" width={50} height={50} />
              <h5>ADHERENCE & ALLEGIANCE TO INDIAN VALUES & TRADITIONS</h5>
              <p>
                  Rooted in the rich heritage of Indian culture, we emphasize the importance of traditional values while preparing students for a modern world. By instilling a deep sense of pride in India&#39;s customs and traditions, we help students maintain their cultural identity, blending the wisdom of the past with the progress of the present.
              </p>
            </div>
          </div>
          
        </div> */}
        {/* <div className="d-flex justify-content-center align-items-center mt-1">
                <div className="learn-more-button">
                  <a href="#">Learn More</a>
                </div>
                </div> */}
      </div>
      </section>
      <FooterNoida />
    </>
  );
};

export default VissionAndValue;
