import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';
const Bepartoframagya = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1,
    autoplay: true,             // Enable auto sliding
    autoplaySpeed: 1000,        // Auto slide every 1 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const data = [
    { title: 'Student Teacher Ratio', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...', value: 'X:Y', img: '/images/slider-1.png' },
    { title: 'Alumni Refers Our School', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...', value: 'X%', img: '/images/slider-2.png' },
    { title: 'Happy Parents', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...', value: 'X no.', img: '/images/slider-3.png' },
    { title: 'Co-curricular Activities', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...', value: 'X%', img: '/images/slider-1.png' },
    { title: 'Alumni Refers Our School', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...', value: 'X%', img: '/images/slider-3.png' },
  ];
// const Bepartoframagya = () => {
  return (
    <>
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Heading */}
        <div className="col-md-6 text-center text-md-left">
          <h2 className="font-weight-bold">BE A PART OF RAMAGYA SCHOOL</h2>
        </div>
        
        {/* Right Side - Description */}
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
    {/* Slider section */}
     <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="number">{index + 1}</div>
              <Image src={item.img} alt={item.title} className="slider-image" width={100} height={100} />
            <h3>{item.value}</h3>
            <p>{item.title}</p>
            <p className='item-content'>{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Bepartoframagya