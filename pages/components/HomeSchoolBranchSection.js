import React from 'react';
import { useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';
//import dynamic from 'next/dynamic'; // Import dynamic from Next.js
//import 'animate.css'; // Import animate.css for animations
// Dynamically import WOW.js for animations// Dynamically import WOW.js to avoid server-side issues
// const WOW = dynamic(() => import('wowjs'), { ssr: false });
const HomeSchoolBranchSection = () => {
  //useEffect(() => {
     // Initialize WOW.js only on the client side
   //   const WOWJS = require('wowjs');
   //   const wow = new WOWJS.WOW({
   //     live: false
   //   });
   //   wow.init();
   // }, []); 
   //Use IntersectionObserver for Animation Triggers
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add('animate__animated', 'animate__zoomIn');
           }
         });
       },
       { threshold: 0.2 }
     );
   
     const elements = document.querySelectorAll('.animate-on-scroll');
     elements.forEach((el) => observer.observe(el));
   
     return () => observer.disconnect();
   }, []);
  
  return (
    <>
     <div className="learn"> 
        <div className="container my-custom-campuses">
       {/* <div className="fp-tableCell">
        <div className="container learn my-1"> */}
        <h1 className="main-heading">
            OUR CAMPUSES
            <span className="lineclass" />
            <span
              className="sub-heading animate-on-scroll"
            >
               Explore Our campuses
              {/* Explore Our Vibrant campuses
              Across Diverse Locations */}
            </span>
          </h1>
          <p className="scrollspy-p-0">
             Fostering holistic development with innovative education, experienced faculty, and a vibrant learning environment. Excellence in education awaits..
            </p>
       {/* <h1 className="main-heading"> OUR CAMPUSES
          <span className="lineclass" />
          <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              Explore Our Vibrant Campuses Across Diverse Locations
          </span>
        </h1> */}
      {/* <h1 className="main-heading text-center wow animate__animated animate__bounce" style={{ animationDelay: '0.3s' }}>OUR CAMPUSES</h1> */}
      <div className="row g-3 mt-3">
        {/* Noida */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="card school-card h-100">
            <Image src="/images/rs-noida-branch.webp" className="card-img-top img-fluid" alt="Ramagya School Noida" width={522} height={255} />
            <div className="card-body">
              <h5 className="card-title">Noida</h5>
              {/* <p className="card-text">
                Ramagya School, Noida takes immense pleasure to announce that the school has been
                recently honoured with the #3 position in Noida.
              </p> */}
            </div>
              <div className="school-branch-buttions">
                  <div className="visit-web-button">
                    <Link href="https://ramagyaschool.com/noida" target="_blank" className="btn btn-warning">Visit Website</Link>
                  </div>
                  <div className="visit-tour-button">
                    <Link href="https://vtour.ramagyaschool.com/" target="_blank" className="btn btn-warning">360 Tour</Link>
                  </div>
              </div>

          </div>
        </div>

        {/* Noida Extension */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="card school-card h-100">
            <Image src="/images/rs-noida-ext-branch.webp" className="card-img-top img-fluid" alt="ramagya school noida extension" width={522} height={255} />
            <div className="card-body">
              <h5 className="card-title">Noida Extension</h5>
            </div>
            <div className="school-branch-buttions">
                  <div className="visit-web-button">
                    <Link href="https://ramagyaschool.com/noida-extension" target="_blank" className="btn btn-warning">Visit Website</Link>
                  </div>
                  <div className="visit-tour-button">
                    <Link href="https://vtourext.ramagyaschool.com/" target="_blank" className="btn btn-warning">360 Tour</Link>
                  </div>
              </div>
          </div>
        </div>

        {/* Greater Noida */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="card school-card h-100">
            <Image src="/images/rs-gnoida-branch.webp" className="card-img-top img-fluid" alt="ramagya school greater noida" width={550} height={285} />
            <div className="card-body">
              <h5 className="card-title">Greater Noida</h5>
            </div>
            <div className="school-branch-buttions">
                  <div className="visit-web-button">
                    <Link href="https://ramagyaschool.com/greater-noida" target='_blank' className="btn btn-warning">Visit Website</Link>
                  </div>
                  <div className="visit-tour-button">
                    <Link href="https://vtourgnoida.ramagyaschool.com/" target='_blank' className="btn btn-warning">360 Tour</Link>
                  </div>
              </div>
          </div>
        </div>

        {/* Dadri */}
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="card school-card h-100">
            <Image src="/images/rs-dadri-branch.webp" className="card-img-top img-fluid" alt="ramagya school noida dadri" width={550} height={336} />
            <div className="card-body">
              <h5 className="card-title">Dadri</h5>
            </div>
            <div className="school-branch-buttions">
                  <div className="visit-web-button">
                     <Link href="https://ramagyaschool.com/dadri" target='_blank' className="btn btn-warning">Visit Website</Link>
                  </div>
                  <div className="visit-tour-button">
                    <Link href="https://tourdadri.ramagyaschool.com/" target='_blank' className="btn btn-warning">360 Tour</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
        </div>
       
    </>
  )
}

export default HomeSchoolBranchSection