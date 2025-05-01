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

const UnivarietyLogin = () => {
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
        <title>Univariety Login | Ramagya School</title>
        <meta name="description" content="Univariety Login page for Ramagya School students and parents. Access your account to explore career guidance resources." />
        <meta name="keywords" content="Univariety, Ramagya School, Login, Career Guidance, Student Portal" />
        <link rel="canonical" href="https://ramagyaschool.com/noida/univariety-login" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Univariety Login | Ramagya School Noida" />
        <meta property="og:description" content="Access your Univariety account for Ramagya School students and parents. Explore career guidance and other educational resources." />
        <meta property="og:url" content="https://ramagyaschool.com/noida/univariety-login" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Univariety Login | Ramagya School Noida" />
        <meta name="twitter:description" content="Log in to your Univariety account for Ramagya School students and parents to explore career guidance resources." />
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
                 Univariety Login!
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
              <h3 className='title-100'>Ramagya Alumni Reunite: Rediscover, Reconnect and Relive Memories</h3>
                <p className="para">
                  Univariety is more than a simple platform; it is an energetic community for
                  Ramagya alumni across the globe to come together. At its core, Univariety
                  acts as a digital ecosystem tailored specifically for Ramagya alumni needs
                  and ensures a seamless experience for connecting, engaging, and expanding
                  each other&#39;s skill sets.
                </p>{" "}
                <p className="para">
                  {" "}
                  Univariety was designed with camaraderie and collaboration in mind, offering
                  alumni an online meeting place to reunite old friendships, forge new bonds,
                  and stay involved with their alma mater. No matter when or how long ago you
                  graduated, Univariety welcomes all alumni - newcomers alike! - as we
                  discover all that unites us all as we embark on exciting journeys together!
                </p>
                <hr />
                <h3 className='title-100'>Connecting Alumni Connections</h3>
                <p className="para">
                  Univariety serves as a digital bridge connecting Ramagya alumni from
                  different backgrounds, generations, and locations. No matter when or where
                  alumni graduated - be it years or decades ago - Univariety gives alumni an
                  avenue for reconnecting with old friends while making new ones and staying
                  informed of alumni initiatives.{" "}
                </p>
                <p className="para">
                  {" "}
                  Univariety provides alumni directories, class year groups and regional
                  chapters to make reconnecting with fellow alumni easier no matter where
                  their life has led them. Reuniting with old classmates and industry veterans
                  or simply remembering old Ramagya days; whatever your need might be -
                  Univariety has your alumni needs covered!
                </p>
                <hr />
                <h3 className='title-100'>Customize Your Path to Connection</h3>
                <p className="para">
                  Univariety offers alumni members an experience tailored specifically to
                  their individual needs and preferences, from networking opportunities to
                  career guidance and event updates to mentorship programs - whatever it may
                  be - Univariety strives to ensure each alum finds value and meaning from
                  using its platform.
                </p>{" "}
                <p className="para">
                  Alumni profiles provide alumni with a way to quickly showcase their
                  professional accomplishments, interests, and aspirations with others on an
                  authentic level. From recent graduates looking for work options to
                  experienced professionals looking for ways to give back, Univariety provides
                  all of the tools and resources needed to maximize your alumni experience.
                </p>
                <hr />
                <h3 className='title-100'>Facilitate Alumni Engagement</h3>
                <p className="para">
                  Univariety puts engagement at its core, offering alumni an interactive
                  platform where they can engage in discussions, share experiences and
                  contribute to Ramagya community growth. From joining special interest groups
                  or attending virtual reunions to taking part in alumni projects - Univariety
                  gives alumni numerous ways to stay involved and remain active!
                </p>
                <p className="para">
                  Univariety alumni can find a sense of community through features like
                  discussion forums, group chats and virtual events - regardless of distance
                  or time zone differences - thanks to Univariety alumni services such as
                  discussion forums, group chats and virtual events. Univariety alumni enjoy
                  creating an inclusive space where alumni can come together and thrive
                  together - whether reconnecting with old friends, expanding professional
                  networks or staying engaged with Ramagya Community at large are your goals.
                  Univariety offers alumni an inclusive space where alumni can flourish
                  together.
                </p>
                <p className="para">
                  Univariety&#39;s alumni-support programs help alumni to achieve both personal
                  and professional success in life. Accessing resources, mentorship
                  opportunities, and career development tools provided by Univariety allows
                  alumni to advance their careers, pursue passions they&#39;re passionate about,
                  achieving their goals - as well as utilize Ramagya network expertise for
                  assistance in navigating challenges, seizing opportunities and succeeding in
                  our ever-evolving world.
                </p>
                <hr />
                <h3 className='title-100'>Lifelong Learning at Every Stage</h3>
                <p className="para">
                  Learning does not end at graduation; it is an ongoing journey. Univariety
                  recognizes this by offering alumni an ongoing platform where they can
                  continue expanding their knowledge, broadening their horizons, and staying
                  at the forefront of their fields through courses, webinars or thought
                  leadership articles.{" "}
                </p>{" "}
                <p className="para">
                  {" "}
                  Univariety provides alumni access to an impressive library of educational
                  resources and professional development opportunities that promote continual
                  personal and professional growth. From learning new skills, discovering
                  passions or staying up-to-date on industry trends - Univariety gives alumni
                  everything they need for success in today&#39;s highly competitive environment.
                </p>
                <hr />
                <h3 className='title-100'>Building a Global Alumni Network</h3>
                <p className="para">
                  Univariety bridges geographical boundaries by connecting Ramagya alumni from
                  all corners of the globe. Thanks to its global reach and diverse membership
                  base, Univariety fosters a dynamic ecosystem for alumni to network with
                  peers, mentors and industry experts from different parts of the world -
                  enriching alumni experiences through cross-cultural exchange, collaboration
                  and mutual understanding. <br />
                  Univariety Alumni Chapters can be found throughout the world to enable
                  alumni of Ramagya to stay in touch. From expanding your professional network
                  and exploring career possibilities to reconnecting with old friends again,
                  Univariety alumni chapters provide a friendly space where alumni can come
                  together and form meaningful bonds
                </p>
                <hr />
                <h3 className='title-100'>Adopting the Ramagya Spirit</h3>
                <p className="para">
                  Univariety represents the spirit of Ramagya: excellence, innovation and
                  community. Alumni can return home and visit their alma mater while
                  remembering fond memories from Univariety - continuing Ramagya&#39;s legacy by
                  inspiring current and future generations to make positive impacts upon the
                  world.{" "}
                </p>{" "}
                <p className="para">
                  {" "}
                  Univariety is more than a platform; it serves as a testament to the deep
                  bonds and shared values among Ramagya communities worldwide. No matter your
                  background - be it recent graduate or experienced professional - Univariety
                  welcomes all to rediscover these connections and embark on new journeys
                  together. Let us come together in celebration of shared heritage,
                  celebrating collective achievements and forging brighter futures for
                  generations yet unborn!
                </p>
                <hr />
                <h3 className='title-100'>Join the Univariety Community</h3>
                <p className="para">
                  Are you an alumni of Ramagya looking for ways to reconnect, engage, and grow
                  with fellow Ramagya alumni?{" "}
                </p>
                <p className="para">
                  Join Univariety now and become part of our vibrant community dedicated to
                  lifelong connections, continuous learning, and collective success - let&#39;s
                  embark together on this journey and make an impactful difference together -
                  one connection at a time!
                </p>
                </div>
                <div className="btn-part">
                    <a
                      className="btn custom-btn"
                      href="https://ramagyaschool.univariety.com/app/login"
                      target={0}
                    >
                      Univariety Login
                    </a>
                  </div>

           </div>
          </div>
        </div>
      </section>
    
      <FooterNoida />
    </>
  );
};

export default UnivarietyLogin;
