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

const BrandStory = () => {
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
        {/* Primary SEO */}
        <title>Brand Story of Ramagya - A Legacy of Excellence in Education</title>
        <meta
        name="description"
        content="Discover the inspiring journey of Ramagya School, committed to nurturing future leaders through quality education, innovation, and values."
        />
        <link rel="canonical" href="https://ramagyaschool.com/brand-story" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Brand Story of Ramagya - A Legacy of Excellence in Education" />
        <meta property="og:description" content="Discover the inspiring journey of Ramagya School, committed to nurturing future leaders through quality education, innovation, and values." />
        <meta property="og:image" content="/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:url" content="https://ramagyaschool.com/brand-story" />
        {/* <meta property="og:type" content="website" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Story of Ramagya - A Legacy of Excellence in Education" />
        <meta name="twitter:description" content="Discover the inspiring journey of Ramagya School, committed to nurturing future leaders through quality education, innovation, and values." />
        <meta name="twitter:image" content="/images/main-webiste-logo/logo-2.webp" />

      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec brand-story">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                {/* <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Brand Story!
                </h1> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu />

      {/* Our main section */}
      <div className="container section brand-main-section py-5">
        <h2 className="main-heading-internal-pages text-center">RAMAGYA</h2>
        <p className='text-center'>&ldquo;Ramagya&ldquo; as a name embodies the idea of guiding students toward <b>inner wisdom and enlightenment</b>, <br /> blending traditional Indian ethos with modern education.</p>
        {/* <h4 className="text-center fw-bold mb-4">RAMAGYA</h4> */}
        <div className="row text-center mt-5">
          <div className="col-md-4 col-6 border-right">
            <h5 className='ramagya-legacy'>RA (रा)</h5>
            <p className="fw-semibold">Light</p>
              <p className="medium">In Sanskrit, &ldquo;Ra&ldquo; is often
              associated with light,
              radiance, or the sun. This
              is seen in words like
              &ldquo;Ravi&ldquo; (another name for
              the sun).</p>
          </div>
          <div className="col-md-4 col-6 border-right">
            <h5 className='ramagya-legacy'>MA (मा)</h5>
            <p className="fw-semibold">My</p>
              <p className="medium">&ldquo;Ma&ldquo; in Sanskrit and
              several Indian languages
              means &ldquo;my&ldquo; or &ldquo;mother.&ldquo;
              It is a common pronoun
              for possession.</p>
          </div>
          <div className="col-md-4 col-6 mx-auto">
            <h5 className='ramagya-legacy'>GYA (ज्ञ)</h5>
            <p className="fw-semibold">Inner Voice</p>
            <p className="medium">The syllable &ldquo;Gya&ldquo; (ज्ञ) in
            Sanskrit relates to
            knowledge, wisdom, or
            inner awareness. It is
            found in words like
            &ldquo;Gyān&ldquo; (ज्ञान), meaning knowledge.</p>
          </div>
        </div>
      </div>

      <div className="our-brand-essence">
        <div className="container">
          <h5 className="ramagya-legacy text-center text-white mb-5">
            OUR BRAND ESSENCE 
            {/* <span className="text-yellow"> &nbsp;&ldquo;ARISE. AWAKE. ATTAIN.&ldquo;</span> */}
          </h5>

          <div className="row justify-content-center align-items-center mb-4 text-center text-md-start">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="tab-title bg-green text-dark py-4">
                <h5 className="mb-0 fw-bold">ARISE</h5>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-white">Step up to the challenge. Begin your journey with
              determination and purpose.</p>
            </div>
          </div>

          <div className="row justify-content-center align-items-center mb-4 text-center text-md-start">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="tab-title bg-green text-dark py-4">
                <h5 className="mb-0 fw-bold">AWAKE</h5>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-white">Open your mind to new possibilities. Be aware, conscious,
              and fully present in your growth.</p>
            </div>
          </div>

          <div className="row justify-content-center align-items-center text-center text-md-start">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="tab-title bg-green text-dark py-4">
                <h5 className="mb-0 fw-bold">ATTAIN</h5>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-white">Achieve your goals and dreams. Realize your potential and reach for excellence</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container section mt-5 py-5">
        <h5 className="ramagya-legacy text-center text-black mb-5">
          A PALETTE OF POSSIBILITIES
        </h5>
        <div className="row">
          <div className="col-md-6">
            <div className="color-box bg-white-card">
              <strong className='brand-color-heading py-5'>WHITE</strong>
              <p>
                <strong className='text-green'>Explore:</strong><br />
                Reflects <strong>clarity</strong>, <strong>integrity</strong>, and <strong>openness</strong>,<br />
                creating an environment where students are free to<br />
                explore <strong>knowledge</strong>, <strong>ideas</strong>, and <strong>new perspectives</strong>.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="color-box bg-orange">
              <strong className='brand-color-heading py-5'>ORANGE</strong>
              <p className='text-white'>
                <strong className='text-yellow'>Experiment:</strong><br />
                Represents <strong className='text-yellow'>warmth</strong>, <strong className='text-yellow'>encouragement</strong>,<br />
                and <strong className='text-yellow'>determination</strong>, motivating<br />
                students to <strong className='text-yellow'>take risks</strong>, <strong className='text-yellow'>try new things</strong>,<br />
                and embrace learning through<br />
                <strong className='text-yellow'>hands-on experiences</strong>.
              </p>

            </div>
          </div>
          <div className="col-md-6">
            <div className="color-box bg-red">
              <strong className='brand-color-heading py-5'>RED</strong>
              <p className='text-white'>
                <strong className='text-yellow'>Lead:</strong><br />
                Symbolizes <strong className='text-yellow'>energy</strong>, <strong className='text-yellow'>passion</strong>,<br />
                and <strong className='text-yellow'>commitment to education</strong>,<br />
                encouraging students to <strong className='text-yellow'>take initiative</strong>,<br />
                <strong className='text-yellow'>inspire others</strong>, and<br />
                become <strong className='text-yellow'>future leaders</strong>.
              </p>

            </div>
          </div>
          <div className="col-md-6">
            <div className="color-box bg-yellow">
              <strong className='brand-color-heading py-5'>YELLOW</strong>
              <p className='text-white'>
                <strong className='text-green'>Innovate:</strong><br />
                Signifies <strong className='text-green'>curiosity</strong>,<br />
                <strong className='text-green'>optimism</strong>, and <strong className='text-green'>intellectual growth</strong>,<br />
                fostering a mindset of <strong className='text-green'>creativity</strong><br />
                and <strong className='text-green'>innovation</strong> to <strong className='text-green'>solve problems</strong><br />
                and <strong className='text-green'>think beyond the ordinary</strong>.
              </p>

            </div>
          </div>
          <div className="col-12">
            <div className="color-box bg-dark-green-card">
              <strong className='brand-color-heading py-5'>DARK GREEN</strong>
              <p className='text-white'>
                <strong className='text-yellow'>Evolve:</strong><br />
                Represents <strong className='text-yellow'>growth</strong>, <strong className='text-yellow'>stability</strong>, and <strong className='text-yellow'>wisdom</strong>,<br />
                mirroring a student’s journey of <strong className='text-yellow'>evolving through learning</strong><br />
                and <strong className='text-yellow'>experiences</strong>.
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="container section text-center py-5">
        <h5 className="ramagya-legacy text-center text-black mb-5">
          SYMBOLS OF OUR VISION
        </h5>
        <div className="row g-2">
          <div className="col-md-4 mb-5 vision-symbols-icon">
            <h6 className='brand-color-heading'>Sun with Rays</h6>
            <div className="icon-circle mx-auto mb-3"><Image src="/images/who-we-are/vision-symbol/1.webp" alt="Sun with Rays" width={80} height={80} className="symbol-icon" /></div>
            <h6>Education illuminates young minds.</h6>
            <p>Encourages them to rise, shine, and continuously seek
              knowledge, just as the sun brings light to the world.</p>
          </div>
          <div className="col-md-4 mb-5 vision-symbols-icon">
            <h6 className='brand-color-heading'>Open Book</h6>
            <div className="icon-circle mx-auto mb-3"><Image src="/images/who-we-are/vision-symbol/2.webp" alt="Open Book" width={80} height={80} className="symbol-icon" /></div>
            <h6>Ramagya’s dedication to academic excellence.</h6>
            <p>Academic excellence. A path to personal growth and discovery.</p>
          </div>
          <div className="col-md-4 mb-5 vision-symbols-icon">
            <h6 className='brand-color-heading'>Red Banner</h6>
            <div className="icon-circle mx-auto mb-3"><Image src="/images/who-we-are/vision-symbol/3.webp" alt="Red Banner" width={80} height={80} className="symbol-icon" /></div>
            <h6>Sense of Discipline and Identity</h6>
            <p>Instills pride and responsibility in being part of a school that
              values both academic and personal development.</p>
          </div>
          <div className="col-md-4 mb-5 vision-symbols-icon">
            <h6 className='brand-color-heading'>Circular Badge</h6>
            <div className="icon-circle mx-auto mb-3"><Image src="/images/who-we-are/vision-symbol/4.webp" alt="Red Banner" width={80} height={80} className="symbol-icon" /></div>
            <h6>Holistic learning approach</h6>
            <p>Encourages them to develop into well-rounded
              individuals who excel in academics, values, and life skills.</p>
          </div>
          <div className="col-md-4 mb-5 vision-symbols-icon">
            <h6 className='brand-color-heading'>&ldquo;मनुभर्व&ldquo; (Manubharva)</h6>
            <div className="icon-circle mx-auto mb-3"><Image src="/images/who-we-are/vision-symbol/5.webp" alt="Red Banner" width={80} height={80} className="symbol-icon" /></div>
            <h6>&ldquo;मनुभवर्&ldquo; (Manubharva): &ldquo;Carrying the wisdom and
              intellect of humanity.&ldquo;</h6>
            <p>&ldquo;मनु&ldquo; (Manu) represents human intellect, wisdom, and consciousness, often
              linked to ancient knowledge and righteousness.
              &ldquo;भवर्&ldquo; (Bharva) can be associated with carrying, upholding, or bearing
              responsibility.</p>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <p className="text-center">Together, <strong>&ldquo;Manubharva&ldquo;</strong> signifies the <strong>responsibility</strong> of carrying forward
          <strong>wisdom</strong>, <strong>intellect</strong>, and <strong>knowledge</strong>, <br /> shaping individuals who not only learn but also
          <strong>apply their intellect</strong> for the <strong>betterment of society</strong>.
        </p>

      </div>

      <div className="our-brand-icon-symbolised">
        <div className="container">
          <h5 className="ramagya-legacy text-center text-white mb-5"><span className="text-yellow">BRAND ICON SYMBOLISM</span>
          </h5>

          <div className="row justify-content-center align-items-center mb-4 text-center text-md-start">
            <div className="col-md-12">
              <p className="text-white">
                At Ramagya School, every day is a fresh page in the journey of our students—one filled with
                curiosity, growth, and self-discovery.</p>

                <p className="text-white">As the morning sun rises, so do their aspirations, shining brightly with the pursuit of
                knowledge. Each open book is not just a textbook, but a gateway to dreams, innovation,
                and new possibilities.</p>

                <p className="text-white">The red banner that proudly displays Ramagya School is more than just a name; it’s a
                reminder of the pride, responsibility, and values our students carry. They walk these halls not
                just as students but as changemakers, driven to excel in academics and evolve as
                compassionate, responsible individuals who will shape the world.</p>

                <p className="text-white">The circular badge they wear over their hearts is more than an emblem—it’s a symbol of
                their holistic development. It represents their well-rounded growth in intellect, character,
                and spirit. Rooted in the guiding philosophy of Manurbhava—to embody the highest virtues
                of humanity—our students don’t just gain knowledge; they learn to lead with wisdom,
                kindness, and purpose.</p>

                <p className="text-white">At Ramagya, we are not just shaping bright minds; we are nurturing bright futures. With
                every lesson, every challenge, and every achievement, our students take one step closer to
                becoming the bestversions of themselves—ready to shine, inspire, and make the world a
                better place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-brand-story mt-2">
        <div className="container">
          <h5 className="ramagya-legacy text-center text-black mb-5">BRAND ICON SYMBOLISM</h5>

          <div className="row justify-content-center align-items-center mb-4 text-center text-md-start">
            <div className="col-md-12">
              <p className="text-black">
              At Ramagya, education is more than books and classrooms—it is a journey of self-discovery,
              curiosity, and boundless possibilities. Inspired by our name—Ra (Light), Ma (My), and Gya
              (Inner Voice)—we believe that every child carries a spark within, waiting to be ignited. Like
              the rising sun, we illuminate young minds, guiding them toward wisdom, innovation, and
              leadership.</p>

              <p className="text-black">Our philosophy is rooted in the timeless essence of Manubharva, the responsibility of
              carrying forward intellect and wisdom. Through exploration, experimentation, and
              innovation, we empower students to evolve into condent individuals who lead with
              knowledge and character. Our vibrant learning spaces nurture curiosity, where every
              question sparks a new idea and every challenge fuels a greater ambition.</p>

              <p className="text-black">With a foundation built on values, discipline, and holistic learning, Ramagya shapes future
              leaders who don’t just follow paths but create their own. Our students rise with
              determination, awaken to new possibilities, and attain excellence in every endeavor.
              Because at Ramagya, education is not just about learning—it’s about becoming.

              <br/><br/><b>Arise. Awake. Attain.</b></p>
            </div>
          </div>
        </div>
      </div>

      <FooterNoida />
    </>
  );
};

export default BrandStory;
