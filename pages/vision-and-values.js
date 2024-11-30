import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
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
                  Vision & Values!
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
          <div className="col-md-12">
            <div className="text-left mb-5">
              <div className='about-content'>
                <h2
                  className="main-heading-internal-pages wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s', textAlign: "center" }}
                >
                  OUR MISSION
                </h2>
               
                <p style={{ textAlign: "left" }}>
                At Ramagya School, our mission is to inspire every child to unlock their full potential and embrace a passion for lifelong learning. We are dedicated to equipping students with 21st-century skills, nurturing intellectual curiosity, and fostering scientific temperament. Through personalized learning and holistic development, we aim to create confident, ethical, and mindful leaders of tomorrow. Rooted in Indian traditions and universal values, we foster inclusivity, respect, and a sense of global family. We also provide ample opportunities in sports, promoting teamwork, discipline, and sportsmanship for well-rounded growth.
                </p>
             
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
                <div className="col-lg-6 mx-auto d-flex align-items-center">
                  <div className='about-us-detail'>
                    <h3 className='main-heading-internal-pages'>OUR VISION</h3>
                    <p>
                        At Ramagya School, our vision —RA-MA-GYA (Light My Inner Voice)— is to illuminate the inner voice within every student, guiding them on a path of self-discovery. We aim to nurture individuals enriched with the values of compassion and empathy, empowering them to lead purposeful and successful lives. Through this journey, we cultivate leaders who are not only equipped with knowledge but also with the integrity and empathy needed to make a meaningful impact in the world.
                    </p>
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
        <h3>CORE VALUE</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
             <Image src="/images/vision-mission/1.png" alt="core value" width={50} height={50} />
              <h5>INTEGRITY</h5>
              <p>
                  We believe in upholding honesty, ethics, and moral principles in all our actions and decisions. By fostering a culture of transparency and accountability, we create an environment where trust and credibility thrive. This commitment to integrity helps build strong relationships within our community, guiding students to be responsible, ethical citizens.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/2.png" alt="core value" width={50} height={50} />
              <h5>COMMITMENT TO EXCELLENCE</h5>
              <p>
                At the heart of our philosophy is the relentless pursuit of excellence. We encourage our students to strive for the highest standards in academics, sports, and personal development. By nurturing a mindset of continuous improvement, we empower them to achieve their full potential, ensuring that success is not just a goal but a habit.
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/3.png" alt="Our Vision" width={50} height={50} />
              <h5>RESPECT & COMPASSION</h5>
              <p>
                  We value diversity and believe in treating every individual with empathy, kindness, and respect. By fostering an atmosphere of inclusion and mutual understanding, we aim to create a supportive community where everyone feels valued. Our commitment to compassion helps students build meaningful relationships and promotes a culture of care and acceptance.
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/4.png" alt="Our Vision" width={50} height={50} />
              <h5>RESILIENCE & PERSEVERANCE</h5>
              <p>
                  We inspire our students to face challenges with courage and determination. By nurturing resilience, we encourage them to view obstacles as opportunities for growth. Our focus on perseverance instills a never-give-up attitude, helping students develop the grit and adaptability needed to thrive in an ever-changing world.

              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/5.png" alt="Our Vision" width={50} height={50} />
              <h5>INCLUSIVITY</h5>
              <p>
                 We embrace the beauty of diversity, ensuring equal opportunities for all, regardless of background, culture, or beliefs. Our inclusive approach celebrates the uniqueness of each individual, promoting a sense of belonging and unity. We strive to create an environment where every voice is heard, respected, and appreciated.
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/vision-mission/6.png" alt="Our Vision" width={50} height={50} />
              <h5>ADHERENCE & ALLEGIANCE TO INDIAN VALUES & TRADITIONS</h5>
              <p>
                  Rooted in the rich heritage of Indian culture, we emphasize the importance of traditional values while preparing students for a modern world. By instilling a deep sense of pride in India&#39;s customs and traditions, we help students maintain their cultural identity, blending the wisdom of the past with the progress of the present.
              </p>
            </div>
          </div>
          
        </div>
        {/* <div className="d-flex justify-content-center align-items-center mt-1">
                <div className="learn-more-button">
                  <a href="#">Learn More</a>
                </div>
                </div> */}
      </div>
      </section>
      <HomeSectionFooter />
    </>
  );
};

export default VissionAndValue;
