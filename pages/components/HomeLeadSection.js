import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "animate.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import("wowjs"), { ssr: false });

const HomeLeadSection = () => {
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
      {
        name: "Ayushi Kaur",
        desc: "B.Com LLB",
        img: "/images/lead/lead-1.webp",
        text: `Pursuing my B.Com LLB, I often reflect on the invaluable lessons I learned at Ramagya. 
        The school instilled in me the discipline and sincerity that are the backbone of my academic and personal life today. 
        I am incredibly grateful for the guidance and encouragement I received from my teachers, which continues to inspire me.`,
      },
      {
        name: "Tushar Nagpal",
        desc: "Advocate, Delhi High Court",
        img: "/images/lead/lead-2.webp",
        text: `Now a practicing Advocate at the Delhi High Court, I hold immense gratitude for the values Ramagya imparted in me. 
        My experiences at school shaped my character and drive, instilling a deep sense of responsibility and perseverance. Ramagya's influence has been pivotal in my journey, and I am truly thankful for its lasting impact.`,
      },
      {
        name: "Shashank Rawat",
        desc: "IIT Bombay",
        img: "/images/lead/lead-3.png",
        text: `As a second-year student at IIT Bombay, I owe a significant part of my success to the nurturing and supportive environment at Ramagya. The unwavering encouragement from my teachers was instrumental in helping me realize my potential. 
        I am incredibly thankful to Ramagya for setting me on this path and believing in me every step of the way.`,
      },
    ],
    Achievements: [
      {
        name: "Ayushi Kaur",
        desc: "B.Com LLB",
        img: "/images/lead/lead-1.webp",
        text: `Pursuing my B.Com LLB, I often reflect on the invaluable lessons I learned at Ramagya. 
        The school instilled in me the discipline and sincerity that are the backbone of my academic and personal life today. 
        I am incredibly grateful for the guidance and encouragement I received from my teachers, which continues to inspire me.`,
      },
      {
        name: "Tushar Nagpal",
        desc: "Advocate, Delhi High Court",
        img: "/images/lead/lead-2.webp",
        text: `Now a practicing Advocate at the Delhi High Court, I hold immense gratitude for the values Ramagya imparted in me. 
        My experiences at school shaped my character and drive, instilling a deep sense of responsibility and perseverance. Ramagya's influence has been pivotal in my journey, and I am truly thankful for its lasting impact.`,
      },
      {
        name: "Shashank Rawat",
        desc: "IIT Bombay",
        img: "/images/lead/lead-3.png",
        text: `As a second-year student at IIT Bombay, I owe a significant part of my success to the nurturing and supportive environment at Ramagya. The unwavering encouragement from my teachers was instrumental in helping me realize my potential. 
        I am incredibly thankful to Ramagya for setting me on this path and believing in me every step of the way.`,
      },
    ],
    CareerAvenue: [
      {
        name: "Ayushi Kaur",
        desc: "B.Com LLB",
        img: "/images/lead/lead-1.webp",
        text: `Pursuing my B.Com LLB, I often reflect on the invaluable lessons I learned at Ramagya. 
        The school instilled in me the discipline and sincerity that are the backbone of my academic and personal life today. 
        I am incredibly grateful for the guidance and encouragement I received from my teachers, which continues to inspire me.`,
      },
      {
        name: "Tushar Nagpal",
        desc: "Advocate, Delhi High Court",
        img: "/images/lead/lead-2.webp",
        text: `Now a practicing Advocate at the Delhi High Court, I hold immense gratitude for the values Ramagya imparted in me. 
        My experiences at school shaped my character and drive, instilling a deep sense of responsibility and perseverance. Ramagya's influence has been pivotal in my journey, and I am truly thankful for its lasting impact.`,
      },
      {
        name: "Shashank Rawat",
        desc: "IIT Bombay",
        img: "/images/lead/lead-3.png",
        text: `As a second-year student at IIT Bombay, I owe a significant part of my success to the nurturing and supportive environment at Ramagya. The unwavering encouragement from my teachers was instrumental in helping me realize my potential. 
        I am incredibly thankful to Ramagya for setting me on this path and believing in me every step of the way.`,
      },
    ],
  };

  return (
    <div className="learn">
      <div className="container my-custom-evolve">
        <div className="row">
          <div className="col-sm-12 position-r">
            <h1>
              LEAD
              <span className="lineclass" />
              <span
                className="wow animate__animated animate__zoomIn"
                style={{ animationDelay: "0.3s" }}
              >
                MEET OUR ALUMNI
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
                          <p className="text-muted mb-2">{item.desc}</p>
                          <hr className="my-0 w-75" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p
                          className="card-text text-muted"
                          style={{ textAlign: "left" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
              {/* Learb more button */}
              <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="lead">Learn More</a>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeadSection;
