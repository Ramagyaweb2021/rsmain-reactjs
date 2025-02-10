import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from '/pages/components/Header';
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import WhoWeAreScrollspyMenu from './components/WhoWeAreScrollspyMenu';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Overview = () => {
  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();

    // Optional cleanup function in case any WOW.js animations need to be cleared
    return () => {
      wow.sync();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <Head>
        <title>Overview | Ramagya School</title>
        <meta name="description" content="Overview" />
        <meta name="keywords" content="Overview" />
        <link rel="canonical" href="https://ramagyaschool.com/overview" />
      </Head>
      <Header />

      {/* Maine banner section of the page */}
      <section className="section banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1
                  className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}
                >
                  Who we are!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoWeAreScrollspyMenu/>
       {/* Our guiding light section */}
       <section className="container our-guiding-section my-5">
        <div className="learn text-center mb-5">
          <h2 className="wow animate__animated animate__fadeInDown"
                  style={{ animationDelay: '0.2s' }}>OUR GUIDING LIGHT</h2>
          <p>
          In 2004, Ramagya School embarked on its mission to surpass conventional educational standards, offering an exceptional blend of modern learning and timeless values. The name &#39;Ramagya&#39; is imbued with deep meaning - &#39;Ra&#39; symbolizes light, &#39;Ma&#39; represents the self, and &#39;Gya&#39; stands for inner wisdom. This combination encapsulates our core philosophy, where cutting-edge education merges seamlessly with enduring principles. At Ramagya School, our vision is to ignite the inner voice of every student, guiding them on a transformative journey of self-discovery, intellectual growth, and character development.
          </p>
        </div>      
      </section>
      {/* About us section */}
      <section className='container-fluid about-us-section my-5'>
      <div className="row">
          {/* <div className="col-lg-6">
            <Image src="/path/to/your-image.jpg" width={600} height={400} alt="School Building" className="img-fluid rounded" />
          </div> */}
          <div className="col-lg-7 mx-auto d-flex align-items-center">
            <div className='about-us-detail'>
              <h3>About Us</h3>
              <p>
                  With a rich history spanning over two decades, Ramagya School has established itself as an institution that embodies the perfect blend of knowledge and values, excelling in academics, fostering co-curricular excellence, and achieving greatness in the realm of sports. Ramagya School, located in Noida&apos;s vibrant Sector-50, boasts a sprawling campus spanning more than 3 acres. It proudly holds the distinction of being voted as one of the top 3 Senior Secondary schools in the National Capital Region (NCR) by a Times of India survey. Additionally, it has earned a coveted spot among the 30 great Indian Schools recognized by Forbes India magazine.
                  Ramagya School is affiliated with CBSE board, offering a well-rounded education to its students. The school&#39;s impressive scholastic and co-scholastic achievements owe much to its diverse faculty, each possessing over 15 years of valuable academic teaching experience. As part of our commitment to academic excellence, our teachers regularly participate in international and national seminars and conferences, thereby expanding their horizons on both the national and international educational fronts.
              </p>
              <div className="d-flex justify-content-left align-items-left mt-1">
                <div className="learn-more-button">
                  <a href="about-us">Learn More</a>
                </div>
          </div>
            </div>
          </div>
        </div>
      </section>
      {/* Value section */}
      <section className="container-fluid value-section my-5">
      <div className="text-center mb-4">
        <h3 className="main-heading-internal-pages">VALUES WE PRESERVE</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
             <Image src="/images/who-we-are/mission.webp" alt="Our Mission" width={50} height={50} />
              <h5>Our Mission</h5>
              <p>
                Ramagya Senior Secondary School (affiliated to CBSE), located in Sector- 50, Noida (near Noida City Centre Metro Station) was founded in April 2005 and has carved a niche for itself as a prime educational institute in the field of education. Ra = light, Ma = Me, Gya = Inner voice came into existence for the amalgamation of contemporary education with traditional values.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-100 border-0">
            <div className="card-value-body">
            <Image src="/images/who-we-are/vision.webp" alt="Our Vision" width={50} height={50} />
              <h5>Our Vision</h5>
              <p>
                The school’s mission is to establish a world class centre of learning by delivering an educational experience that engages students intellectually, creatively, physically, spiritually and socially to transcend all barriers and work in unison to bring about a positive change in society
              </p>
            </div>
          </div>
          
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
                <div className="learn-more-button">
                  <a href="vision-and-values">Learn More</a>
                </div>
                </div>
      </div>
      </section>
      {/* Ramagya at a glance section */}
      <section className="container ramagya-at-a-glance-section my-5">
      <div className="text-center mb-4">
        <h3 className="main-heading-internal-pages">RAMAGYA AT A GLANCE</h3>
      </div>

      <div className="row justify-content-center g-3">
        <div className="col-md-3 col-6">
          <div className="card-ramagya-at-glance border-0 position-relative">
            <Image 
              src="/images/who-we-are/school-building.webp" 
              alt="Campus"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-3">
            <Image 
              src="/images/who-we-are/campus.webp" 
              alt="Campus"
              width={50} 
              height={50} 
              objectFit="cover"
              className="rounded img"
            />
              <h3 className="fw-bold text-black">4+</h3>
              <p className="mb-0 text-black">Campus</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card-ramagya-at-glance border-0 position-relative">
            <Image 
              src="/images/who-we-are/faculity.webp" 
              alt="Campus"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-3">
            <Image 
              src="/images/who-we-are/faculity-staff.webp" 
              alt="Faculty & Staff"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
              <h3 className="fw-bold text-black">500+</h3>
              <p className="mb-0 text-black">Faculty & Staff</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card-ramagya-at-glance border-0 position-relative">
            <Image 
              src="/images/who-we-are/student-bg.webp" 
              alt="Campus"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-3">
            <Image 
              src="/images/who-we-are/student.webp" 
              alt="Student"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
              <h3 className="fw-bold text-black">10k+</h3>
              <p className="mb-0 text-black">Students Guaranteed</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card-ramagya-at-glance border-0 position-relative">
            <Image 
              src="/images/who-we-are/alumni-bg.webp" 
              alt="Campus"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
            <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center p-3">
            <Image 
              src="/images/who-we-are/alumni.webp" 
              alt="Campus"
              width={300} 
              height={200} 
              objectFit="cover"
              className="rounded img"
            />
              <h3 className="fw-bold text-black">8k+</h3>
              <p className="mb-0 text-black">Alumini Worldwide</p>
            </div>
          </div>
        </div>
      </div>
      </section>
       {/* Our leaders section */}
      <section className="container-fluid our-leaders-section my-5">
      <div className="text-center mb-4">
       <h3 className="main-heading-internal-pages">OUR LEADERSHIP</h3>
      </div>

      <div className="row justify-content-center">
        {/* Main Leader Card */}
        <div className="col-lg-8 col-md-10 mb-4">
          <div className="card border-0 shadow-sm p-4">
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <Image
                  src="/images/who-we-are/sanjya-gupta.webp" // Replace with your image path
                  alt="Chairman"
                  width={300}
                  height={300}
                  className="rounded img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">Chairman | Ramagya Group</p>
                  <h5 className="fw-bold">Dr. Sanjay Gupta</h5>
                  <p className="fst-italic fw-bold">
                    Every great idea begins with a dream but if we have within us the strength, the patience, and the passion to reach for the stars to change the world, we can accomplish that task at hand.
                  </p>
                  <p>
                  We planned to provide opportunities to young learners where they can have opportunities to explore and optimize their potential to be on par with their contemporaries and also have that same international feel and standard. This idea led to the establishment of a nascent academic beginning as we not only dreamt and planned but also believed that when we summon the will our dream will surely become inevitable. It required a lot of perseverance, passion, stamina, determination, dedication, self-discipline and efforts to turn the seedlings of dreams into the present reality.
                  </p>
                  {/* <div className="d-flex justify-content-left align-items-left mt-1">
                    <div className="learn-more-button">
                      <a href="#">Learn More</a>
                    </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Leaders Cards */}
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card border-0 shadow-sm p-4">
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <Image
                    src="/images/who-we-are/rajni-gupta.webp" // Replace with your image path
                    alt="Director"
                    width={100}
                    height={100}
                    className="rounded img-fluid"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-our-leaders">
                    <p className="text-muted mb-1">Director | Ramagya Group</p>
                    <h6 className="fw-bold">Mrs. Rajni Gupta</h6>
                    <p className="text-muted small">
                    We at Ramagya believe in what UNICEF believes about education that it should help young people develop life-skills as life - skills have potential of transforming lives of the learners so our constant...
                    </p>
                    {/* <button className="btn btn-link p-0" style={{color:"#002C39"}}>Read More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card border-0 shadow-sm p-4">
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <Image
                    src="/images/who-we-are/utkarsh-gupta.webp" // Replace with your image path
                    alt="Managing Director"
                    width={100}
                    height={100}
                    className="rounded img-fluid"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body-our-leaders">
                    <p className="text-muted mb-1">Managing Director | Ramagya Group</p>
                    <h6 className="fw-bold">Mr. Utkarsh Gupta</h6>
                    <p className="text-muted small">
                    Ramagya, within a very short span of time, has emerged as one of the top 30 schools of India and aims to be among the top 10 in the upcoming years. Ramagyans believe in providing the best facilities to..
                    </p>
                    {/* <button className="btn btn-link p-0" style={{color:"#002C39"}}>Read More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="learn-more-button">
            <a href="people">View More</a>
          </div>
          </div>
      </div>
      </section>
       {/* RAMAGYA FOUNDATION section */}
       <section className="container our-guiding-section my-5">
        <div className="learn text-center mb-5">
          <h2>RAMAGYA FOUNDATION</h2>
          <p>
          Ramagya Foundation works on sustainable improvement, peace, and righteousness towards the actualization of social commitments to unleash and nurture talent. Ramagya Foundation works diligently for Education, Health, Sports Education, Skilling, Women Empowerment, and Animal welfare. The foundation is committed to imparting values and enhancing living standards through our uniquely curated programs to contribute towards the development of an educated society.
          </p>
        </div> 

         <div className='row'>
         <div className="col-md-6 mx-auto g-0">
        <div className="image-section">
          {/* Replace with your image source */}
          <Image src='/images/who-we-are/ramagya-foundation-video-bg.webp' alt="" width={650} height={370} />
          {/* Play button overlay */}
          <div className="play-button">
            {/* <i className="bi bi-play-circle-fill"></i> */}
            <Link href="https://www.youtube.com/watch?v=FxT3xJFYpDg" target="_blank">
              <Image src='/images/video-play.webp' alt="play button" width={80} height={80}/>
            </Link>
              {/* <Image src='/images/video-play.webp' alt="" width={80} height={80} onClick={handleShow} /> */}
              {/* Popup Modal */}
              {/* <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title style={{color:"#2f6575"}}>From Curiosity to Leadership</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{ width: '100%', height: '315px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/J2darvxUR-0?si=8kdBxZieBtUIOwis"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal.Body>
              </Modal> */}
          </div>
        </div>
         </div>
         <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                      <a href="ramagya-foundation">Learn More</a>
                    </div>
                    </div>
          </div> 
     

      </section>
    

      <FooterNoida />
    </>
  );
};

export default Overview;
