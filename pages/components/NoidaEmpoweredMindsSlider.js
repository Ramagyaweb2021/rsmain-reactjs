import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "animate.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import("wowjs"), { ssr: false });

const NoidaEmpoweredMindsSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  // Slider data (single set of items)
  const sliderData = [
    {
      id: 1,
      name: "Socio Emotional & Character Building",
      img: "/images/noida/empowered-mind/icon-1.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
    {
      id: 2,
      name: "Communication Enhancement",
      img: "/images/noida/empowered-mind/icon-2.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
    {
      id: 3,
      name: "Parent’s Engagement",
      img: "/images/noida/empowered-mind/icon-3.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
    {
      id: 4,
      name: "Skill Development through Experiential Learning",
      img: "/images/noida/empowered-mind/icon-4.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
    {
      id: 5,
      name: "Student Leadership & Personality Enhancement",
      img: "/images/noida/empowered-mind/icon-5.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
    {
      id: 6,
      name: "Intra/Inter Class Activity and Interhouse Activity",
      img: "/images/noida/empowered-mind/icon-6.webp",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.`,
    },
  ];

  return (
    <div className="container">
       <div className="text-center mb-4">
          <h3 className='main-heading-internal-pages'>EMPOWERED MINDS</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Slider without categories */}
            <Slider {...settings}>
              {sliderData.map((item, index) => (
                <div key={index} className="col-md-4 mx-0">
                  <div className="card h-100 border-1 shadow-sm">
                    <div className="card-value-body text-left">
                      <h2 className="card-number text-left">{item.id}</h2>
                      <h5 className="card-subtitle mb-3 fw-bold">{item.name}</h5>
                      <p className="text-left">
                        {item.text}
                      </p>
                      <Image
                          src={item.img}
                          alt={item.name}
                          className="img empowered-noida-icon"
                          width={30}
                          height={30}
                        />
                    </div>
                  </div>
              
                </div>
              ))}
            </Slider>

            {/* Learn More Button */}
            {/* <div className="d-flex justify-content-center align-items-center mt-1">
              <div className="learn-more-button">
                <a href="lead">Learn More</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  );
};

export default NoidaEmpoweredMindsSlider;
