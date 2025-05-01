import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import PoineerInSportsInternalPageScrollspyMenu from './components/PoineerInSportsInternalPageScrollspyMenu';


// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const PoineerInSports = () => {
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
        <title>Pioneer In Sports | Ramagya School</title>
        <meta name="description" content="Explore how Ramagya School excels in sports, fostering talent and promoting physical fitness among students." />
        <meta name="keywords" content="Pioneer In Sports, Ramagya School, School Sports, Physical Fitness, Sports Excellence, Student Athletes" />
        <link rel="canonical" href="https://ramagyaschool.com/pioneer-in-sports" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pioneer In Sports | Ramagya School" />
        <meta property="og:description" content="Learn how Ramagya School stands as a pioneer in sports education, providing opportunities for students to excel in various athletic disciplines." />
        <meta property="og:url" content="https://ramagyaschool.com/pioneer-in-sports" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pioneer In Sports | Ramagya School" />
        <meta name="twitter:description" content="Discover how Ramagya School pioneers in sports, helping students thrive in physical activities and sportsmanship." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec poinner-banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Poineer In Sports!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PoineerInSportsInternalPageScrollspyMenu/>
      <section className="d-flex align-items-center justify-content-center py-5 bg-poineer">
       <div className="container-fluid">
        <div className="row g-0 align-items-center">
          {/* Left Image */}
          <div className="col-lg-3 col-md-3">
            <Image
              src="/images/poineer-in-sports/slide-1.webp" // Replace with the actual image path
              alt="Sports Activity"
              width={371}
              height={423}
              className="w-100 wow animate__animated animate__fadeInLeft" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 col-md-12 text-center px-5">
            <p>
              At Ramagya, we are committed to nurturing self-esteem and enhancing the mental agility of our students.
              Recognizing the profound role sports play in shaping lives, we have gone to great lengths to provide
              unparalleled sports facilities. Ramagya stands as a trailblazer, offering equal prominence to a wide
              spectrum of sports and fostering excellence through a world-class coaching team.
            </p>
            <p>
              Our collaborations with renowned academies and sports organizations empower our students with exposure to
              national and international competitions. These partnerships enable Ramagyans to engage in advanced training
              programs and experience high-level sporting opportunities.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-3">
           <Image
              src="/images/poineer-in-sports/slide-2.webp" // Replace with the actual image path
              alt="Sports Activity"
              width={371}
              height={423}
              className="w-100 animate__animated animate__fadeInRight" style={{ animationDelay: '0.1s' }}
              // className="w-100"
            />
          </div>
        </div>
       </div>
      </section>
      <section className='d-flex align-items-center justify-content-center py-5'>
      <div className="container my-5">
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/nba.webp"
          />
        </div>
        <div className="col-md-8">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">NBA Basketball School</h3>
            <p>
              Ramagya’s partnership with the NBA Basketball School sets a benchmark
              in basketball excellence. Featuring two FIBA-approved
              international-sized courts, we provide a premier platform for players
              to refine their skills. Guidance from experienced international
              coaches equips aspiring athletes with the confidence to aim for
              national and global recognition.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 order-md-2 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/sporty-beans.webp"
          />
        </div>
        <div className="col-md-8 order-md-1">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Sporty Beans</h3>
            <p>
              Through our collaboration with Sporty Beans, we offer a unique,
              play-based sports program for children aged 2.5 to 8 years. Covering
              nine ball sports—Soccer, Baseball, Basketball, Volleyball, Golf,
              Tennis, Cricket, Rugby, and Hockey—this program fosters confidence,
              teamwork, and sportsmanship in a fun-filled environment.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/shooting-academy.webp"
          />
        </div>
        <div className="col-md-8">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Shooting Academy</h3>
            <p>
              Our Shooting Academy is dedicated to nurturing talent among young enthusiasts. Through systematic training programs, we help aspiring marksmen and women achieve their goals with precision and discipline.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 order-md-2 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/crc.webp"
          />
        </div>
        <div className="col-md-8 order-md-1">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">CricKingdom by Rohit Sharma</h3>
            <p>
               As part of our commitment to fostering cricketing talent, we proudly host CricKingdom Cricket Academy. Under the mentorship of Rohit Sharma, students benefit from cutting-edge facilities, personalized coaching, and a curriculum that instills excellence, sportsmanship, and perseverance.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/football.webp"
          />
        </div>
        <div className="col-md-8">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Bhaichung Bhutia Football School</h3>
            <p>
              Our football academy features state-of-the-art AstroTurf and is managed by the prestigious Bhaichung Bhutia Football School. Accredited by the AIFF with a 4-star rating, this program ensures high-quality coaching with a focus on skill development, discipline, and competitive success for players of all age groups.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 order-md-2 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/martial-arts.webp"
          />
        </div>
        <div className="col-md-8 order-md-1">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Negi’s School of Martial Arts</h3>
            <p>
              Martial Arts at Ramagya, managed by Negi’s School of Martial Arts, empowers students with discipline, cognitive skills, and physical prowess. From kickboxing to Muay Thai, the program offers a diverse range of disciplines under the guidance of award-winning experts.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/pilates-yoga.webp"
          />
        </div>
        <div className="col-md-8">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Wellflow Pilates & Yoga Studio</h3>
            <p>
               Through our collaboration with Wellflow Pilates & Yoga Studio, we bring the transformative benefits of Pilates to our students and faculty. These programs enhance core strength, flexibility, and mental well-being, promoting a healthier, more balanced lifestyle.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 order-md-2 text-center">
          <Image
          alt="middle"
          loading="lazy"
          width={430}
          height={200}
          src="/images/poineer-in-sports/tannis.webp"
          />
        </div>
        <div className="col-md-8 order-md-1">
          <div className="p-4 bg-light">
            <h3 className="fw-bold">Alight Table Tennis Excellence Centre</h3>
            <p>
              Ramagya provides world-class table tennis training through its partnership with Alight Table Tennis Excellence Centre. With eight international-sized tables and expert coaching, we cater to players ranging from beginners to national-level medalists.
            </p>
          </div>
        </div>
      </div>
      <div className='row align-items-center mt-50'>
        <p style={{textAlign:"center"}}>At Ramagya, sports go beyond physical activity; they are a journey of character building, mental fortitude, and the pursuit of excellence. Join us in shaping champions of tomorrow—on the field and beyond!</p>
      </div>
    </div>
      </section>
        <FooterNoida />
    </>
  );
};

export default PoineerInSports;
