import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'animate.css';

// Dynamically import WOW.js for animations
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const LeadAchievementsInternalPage = () => {
  const [activeCategory, setActiveCategory] = useState('SPORTS'); // Default category

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  // Data for categories and their corresponding cards
  const categoryData = [
    {
      category: 'SPORTS',
      cards: [
        {
          number: '01',
          title: 'ADARSH TRIPATHI - First saturday grandmaster tournament, vezerkepzo grandmaster tournament and llobregat open chess tournamnet in budapest, hungary.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          image: '/images/school-updates/sports.png', // Add image path here
        },
      ],
    },
    {
      category: 'ACADEMIC',
      cards: [
        {
          number: '01',
          image: '/images/result/1.png',
        },
        {
          number: '02',
          image: '/images/result/2.png',
        },
        {
          number: '03',
          image: '/images/result/3.png',
        },
        {
          number: '04',
          image: '/images/result/4.png',
        },
        {
          number: '05',
          image: '/images/result/5.png',
        },
      ],
    },
    
  ];

  // Get cards for the active category
  const activeCards = categoryData.find(
    (categoryItem) => categoryItem.category === activeCategory
  )?.cards || [];

  return (
    <Container className="container bg-image-section">
      <div className="row learn">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="main-heading" style={{ fontSize: '30px' }}>
            ACHIEVEMENTS
            <span className="lineclass" />
            <span
              className="wow animate__animated animate__zoomIn"
              style={{ animationDelay: '0.3s' }}
            >
              Recognizing Excellence and Achievements
            </span>
          </h1>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center my-3">
          {categoryData.map((categoryItem) => (
            <button
              key={categoryItem.category}
              className={`btn mx-2 ${
                activeCategory === categoryItem.category
                  ? 'btn btn-warning-gallery'
                  : 'btn-outline-warning'
              }`}
              onClick={() => setActiveCategory(categoryItem.category)}
            >
              {categoryItem.category}
            </button>
          ))}
        </div>
      </div>

      {/* Cards for Active Category */}
      {activeCategory === 'SPORTS' ? (
        <div className="row my-5 g-1">
          {activeCards.map((card, index) => (
            <div key={index} className="col-md-12 d-flex align-items-center">
              {/* Image Column */}
              <div className="col-md-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="img-fluid"
                  width="200"
                  height="100"
                />
              </div>
              {/* Content Column */}
              <div className="col-md-8" style={{padding:"20px"}}>
                <h2 className="fw-bold mb-3">{card.title}</h2>
                <p>{card.text}</p>
                <div className="learn-more-button"><a href="https://ramagyaschoolblog.com/category/achievements/" target='_blank'>Learn More</a></div>
              </div>
            </div>
          ))}
        </div>
      
      ) : (
        <div className="row justify-content-center my-5 g-1">
         <h3 style={{textAlign:"center"}}>LASS X TOPPERS</h3>
          {activeCards.map((card, index) => (
            <div key={index} className="col-md-2 col-lg-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="img-fluid"
                  width="200"
                  height="100"
                />
                  <h2 className="card-number text-left">{card.number}</h2>
                  <center><div className="learn-more-button"><a href="#" target="_blank">Find Detail</a></div></center>
                  {/* <h5 className="card-subtitle mb-3 fw-bold">{card.title}</h5>
                  <p className="text-left">{card.text}</p> */}
                </div>
              </div>
            </div>
          ))}
          {activeCards.length === 0 && (
            <p className="text-center">No achievements available for this category.</p>
            
          )}
        </div>
        
      )}
      {/* <center><div className="learn-more-button"><a href="#" target="_blank">View All</a></div></center> */}
    </Container>
  );
};

export default LeadAchievementsInternalPage;
