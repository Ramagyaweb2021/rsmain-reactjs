import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const NoidaImageGalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageTabs = ['All', 'Daycare', 'Education Hub', 'Events', 'Extracurricular', 'Interschool Events', 'Sports Galore'];

  const items = [
    {
      "src": "/images/gallery/daycare/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/daycare/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/daycare/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    // **********Image gallery for education hub
    {
      "src": "/images/gallery/education-hub/gallery-1.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/gallery-2.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/gallery-3.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/gallery-4.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
     {
      "src": "/images/gallery/education-hub/gallery-5.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },    
    {
      "src": "/images/gallery/education-hub/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    // **********Image gallery for events
    {
      "src": "/images/gallery/events/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/19.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/20.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    // **************************Images gallery for Extracurricular
    {
      "src": "/images/gallery/extracurricular/gallery-1.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/gallery-2.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/gallery-3.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/gallery-4.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/gallery-5.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/gallery-6.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    // **************Image gallery for interschool events
    {
      "src": "/images/gallery/interschool-events/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    // ***********************Image gallery for Sports Gallore
    {
      "src": "/images/gallery/sports-gallore/gallery-1.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-2.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-3.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-4.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-5.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-6.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-7.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-8.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-9.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-10.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/gallery-11.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/19.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    // Add more images here...
  ];

  const filteredItems = items.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    return item.type === 'image' && matchesTab;
  });

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsImageModalOpen(true);
  };

  const closeModal = () => {
    setIsImageModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <div className="container my-5">
        {/* Navigation Buttons */}
        <div className="d-flex justify-content-center mb-1">
          <Link href="/image-gallery" className="btn mx-2 btn-warning-gallery">Image Gallery</Link>
          <Link href="/video-gallery" className="btn mx-2 btn-outline-warning">Video Gallery</Link>
        </div><br />

        {/* Category Tabs */}
        <div className="d-flex justify-content-center flex-wrap mb-4">
          {imageTabs.map(tab => (
            <button
              key={tab}
              className={`btn mx-2 ${activeTab === tab ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="row g-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="col-md-3 col-6">
                <div
                  className="card-gallery"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={item.src}
                    className="card-img-top"
                    alt={item.category}
                    width={350}
                    height={300}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items found.</p>
          )}
        </div>
      </div>

      {/* Image Modal with Arrows */}
      {isImageModalOpen && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-content">
            <button className="close-button" onClick={closeModal}>x</button>
            <button className="prev-button" onClick={handlePrevious}></button>
            <Image
              src={filteredItems[currentIndex]?.src}
              alt="Gallery Image"
              width={1440}
              height={630}
            />
            <button className="next-button" onClick={handleNext}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoidaImageGalleryPage;
