import React, { useEffect, useState } from "react";
//import dynamic from "next/dynamic";
//import "animate.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import WOW.js to avoid server-side issues
//const WOW = dynamic(() => import("wowjs"), { ssr: false });

const InternalPageLeadSection = () => {
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
  // Set default active category to "Achievements"
  const [activeCategory, setActiveCategory] = useState("Achievements");

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const WOWJS = require("wowjs");
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  // Data for sliders
  const sliderData = {
    Alumini: [
      // {
      //   name: "Gaurvi Sharma",
      //   desc: "Batch - 2012",
      //   img: "/images/lead/ayushi.webp",
      //   text: `Growth Product Marketing @Airtel Digital`,
      // },
      // {
      //   name: "Tushar Nagpal",
      //   desc: "Advocate, Delhi High Court",
      //   img: "/images/lead/tushar.webp",
      //   text: `Now a practicing Advocate at the Delhi High Court, I hold immense gratitude for the values Ramagya imparted in me. 
      //   My experiences at school shaped my character and drive, instilling a deep sense of responsibility and perseverance. Ramagya's influence has been pivotal in my journey, and I am truly thankful for its lasting impact.`,
      // },
      // {
      //   name: "Garwit Bansal",
      //   desc: "CA & Commerce Graduate",
      //   img: "/images/lead/garwit.webp",
      //   text: `Being a Chartered Accountant and Commerce graduate, I attribute much of my confidence and adaptability to my years at Ramagya. The environment encouraged me to present myself with pride and embrace new challenges. I’m thankful for the foundation Ramagya laid, enabling me to pursue a versatile and dynamic career path.`,
      // },
    ],
    Achievements: [
      {
        name: "Manasa Narayanan",
        batch: "Batch - 2023",
        img: "/images/lead/manasa.webp",
        // role: 'Coordinator, Industry Interaction Cell @ IIM Jammu',
        education: `Bachelor of Marine Science - The University of Western Australia`,
      },
      {
        name: "Shriya Deshpande",
        batch: "Batch - 2021",
        img: "/images/lead/shriya.webp",
        role: 'Coordinator, Industry Interaction Cell @ IIM Jammu',
        education: `MBA - IIM Jammu`,
      },
      {
        name: "Kshitij Majji",
        batch: "Batch - 2020",
        img: "/images/lead/kshitij.webp",
        role: 'Chief Editor @ UPES AAPG Student Chapter',
        education: `BTech, Petroleum Engineering - UPES`,
      },
      {
        name: "Vaishali Saxena",
        batch: "Batch - 2019",
        img: "/images/lead/vaishali.webp",
        role: 'Content & SEO Executive @ Campus Activewear Ltd',
        education: `MFM - NIFT`,
      },
      {
        name: "Arushi Verma",
        batch: "Batch - 2019",
        img: "/images/lead/arushi.webp",
        role: 'Program Manager, Strategic Initiatives @ Spinny',
        education: `MBA - IIM Bangalore`,
      },
      {
        name: "Sanjana Mandhan",
        batch: "Batch - 2019",
        img: "/images/lead/sanjana.webp",
        role: 'Research Technician @ The Johns Hopkins University School of Medicine',
        education: `Master's Degree, Biotechnology - Johns Hopkins University`,
      },
      {
        name: "Anusha Deshmukh",
        batch: "Batch - 2018",
        img: "/images/lead/anusha.webp",
        role: 'Communications Lead @ Daftee Foundation',
        education: `MSc - University of York`,
      },
      {
        name: "Nishant Vimal",
        batch: "Batch - 2017",
        img: "/images/lead/nishant.webp",
        role: 'Legal Clerk @ High Commission of India in London',
        education: `LLM - University of Westminster`,
      },
     
      {
        name: "Prashant Yadav",
        batch: "Batch - 2016",
        img: "/images/lead/prasant.webp",
        role: 'Associate Analyst @ GlobalLogic',
        education: `BTech - GL Bajaj Institute of Tech and Management`,
      },
  
      {
        name: "Hitesh Mandhan",
        batch: "Batch - 2017",
        img: "/images/lead/hitesh.webp",
        role: 'Product Owner @ ResponsiveB',
        education: `BTech - Vellore Institute of Technology`,
      },
      {
        name: "Gaurvi Sharma",
        batch: "Batch - 2012",
        img: "/images/lead/gauravi.webp",
        role: 'Growth Product Marketing @Airtel Digital',
        education: `MBA - IBS Hyderabad`,
      },
      {
        name: "Gaurav Arora",
        batch: "Batch - 2013",
        img: "/images/lead/gaurav.webp",
        role: 'SDE II @ Amazon',
        education: `MTech - IIT Madras`,
      },
     
    ],
    CareerAvenue: [
      // {
      //   name: "Ayushi Kaur",
      //   desc: "B.Com LLB",
      //   img: "/images/lead/ayushi.webp",
      //   text: `Pursuing my B.Com LLB, I often reflect on the invaluable lessons I learned at Ramagya. 
      //   The school instilled in me the discipline and sincerity that are the backbone of my academic and personal life today. 
      //   I am incredibly grateful for the guidance and encouragement I received from my teachers, which continues to inspire me.`,
      // },
      // {
      //   name: "Tushar Nagpal",
      //   desc: "Advocate, Delhi High Court",
      //   img: "/images/lead/tushar.webp",
      //   text: `Now a practicing Advocate at the Delhi High Court, I hold immense gratitude for the values Ramagya imparted in me. 
      //   My experiences at school shaped my character and drive, instilling a deep sense of responsibility and perseverance. Ramagya's influence has been pivotal in my journey, and I am truly thankful for its lasting impact.`,
      // },
      // {
      //   name: "Garwit Bansal",
      //   desc: "CA & Commerce Graduate",
      //   img: "/images/lead/garwit.webp",
      //   text: `Being a Chartered Accountant and Commerce graduate, I attribute much of my confidence and adaptability to my years at Ramagya. The environment encouraged me to present myself with pride and embrace new challenges. I’m thankful for the foundation Ramagya laid, enabling me to pursue a versatile and dynamic career path.`,
      // },
    ],
  };

  return (
    <div className="learn">
      <div className="container my-custom-evolve-1">
        <div className="row">
          <div className="col-sm-12 position-r">
            <h1>
              LEAD
              <span className="lineclass" />
              <span
                className="sub-heading animate-on-scroll"
              >
                 EMPOWERING JOURNEYS, INSPIRING FUTURES
              </span>
            </h1>
            <p>
            In a world that is ever-evolving, we believe in nurturing individuals who are not only academically accomplished but also possess the skills, values, and vision to make a difference in their communities and beyond.

            </p>

            {/* Category Buttons */}
            {/* <div className="d-flex justify-content-center my-3">
              {Object.keys(sliderData).map((category) => (
                <button
                  key={category}
                  className={`btn mx-2 ${
                    activeCategory === category ? "btn mx-2 btn-warning-gallery" : "btn-outline-warning"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div> */}

            {/* Dynamic Slider */}
            <Slider {...settings}>
              {sliderData[activeCategory].map((item, index) => (
                <div key={index} className="col-md-4 mx-0">
                  <div className="card text-center shadow-sm">
                    <div className="card-1-body">
                      <div className="d-flex align-items-center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          className="img square-image me-3"
                          width={80}
                          height={80}
                        />
                        <div className="text-left">
                          <h5 className="card-title-1 mb-1">{item.name}</h5>
                          <p className="text-muted mb-2">{item.batch}</p>
                         
                          {/* <hr className="my-0 w-75" /> */}
                        </div>
                      </div>
                      <div className="text-left"><hr/>
                        <p className="text mt-5">{item.education}</p>
                        <p className="text" style={{background:"rgb(0 44 57 / 2%)", color:"#002c39", fontWeight:"500", letterSpacing:"0.2px", padding:"15px"}}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
              {/* Learb more button */}
              {/* <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="lead">Learn More</a>
                  </div>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalPageLeadSection;
