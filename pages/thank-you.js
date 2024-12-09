import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Header from './components/Header'; 
import 'animate.css';
import HomeSectionFooter from './components/HomeSectionFooter';
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
        <title>Thank You | Ramagya School</title>
        <meta name="description" content="Thank You" />
        <meta name="keywords" content="Thank You" />
        <link rel="canonical" href="https://ramagyaschool.com/thank-you" />
      </Head>
      {/* <Header /> */}
  <div className="vh-100 d-flex justify-content-center align-items-center">
  <div className="col-md-4">
    <div className="border border-3 border-danger" />
    <div className="card  bg-white shadow p-5">
      <div className="mb-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-danger"
          width={75}
          height={75}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
      </div>
      <div className="text-center">
        <h1>Thank You !</h1>
        <p>
          Dear Parents, Thank you for your enquiry regarding the admission of
          your ward, test, for class Toddlers. We appreciate your interest in
          our school. Your enquiry number is &amp; Admission form link has been
          sent on registered email id. Regards, Ramagya School
        </p>
        <a
          href="https://qr1.be/ZJ68"
          target="_blank"
          className="btn btn-outline-danger"
        >
          Digital Assistance
        </a>
      </div>
    </div>
  </div>
</div>


      {/* <HomeSectionFooter /> */}
    </>
  );
};

export default AboutUs;
