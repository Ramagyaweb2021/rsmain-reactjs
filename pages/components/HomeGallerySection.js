import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeGallerySection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeGallery, setActiveGallery] = useState('Images');
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define categories separately for images and videos
  const imageTabs = ['All', 'School Events', 'Sports', 'Science Lab'];
  const videoTabs = ['All', 'Sports Highlights', 'Lab Experiments', 'Cultural Events'];

  // Define items for both images and videos
  const items = [
    { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    // { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    // { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    // { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    // { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Sports Event', category: 'Sports Highlights', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Lab Experiments in Action', category: 'Lab Experiments', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Sports Event', category: 'Sports Highlights', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Lab Experiments in Action', category: 'Lab Experiments', type: 'video' },
    // Add more items as needed
  ];

  // Filter items based on active tab and gallery type
  const filteredItems = items.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesGallery = activeGallery === 'Images' ? item.type === 'image' : item.type === 'video';
    return matchesTab && matchesGallery;
  });

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const handleShowModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="fp-tableGallery">
        <div className="container my-0">
          <div className="row">
          <div className="col-sm-12 position-r">
              <h1 className="">
                GALLERY
                <span className="lineclass" />
                <span className="sub-heading">
                  OUR CAPTURED MEMORY
                </span>
              </h1>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> */}
            </div>
          </div>
        </div>
        <div className="container my-0">
          <div className="d-flex justify-content-center mb-4">
            <button className={`btn mx-2 ${activeGallery === 'Images' ? 'btn-warning-gallery' : 'btn-outline-warning'}`} 
                    onClick={() => setActiveGallery('Images')}>
              Image Gallery
            </button>
            <button className={`btn mx-2 ${activeGallery === 'Videos' ? 'btn-warning-gallery' : 'btn-outline-warning'}`} 
                    onClick={() => setActiveGallery('Videos')}>
              Video Gallery
            </button>
          </div>

          {/* Render tabs based on active gallery */}
          <div className="d-flex justify-content-center flex-wrap mb-4">
            {(activeGallery === 'Images' ? imageTabs : videoTabs).map(tab => (
              <button
                key={tab}
                className={`btn mx-2 ${activeTab === tab ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row g-1">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="col-md-3 col-6">
                  <div className="card-gallery" style={{ cursor: 'pointer' }} onClick={() => handleShowModal(index)}>
                    {item.type === 'image' ? (
                      <Image src={item.src} className="card-img-top" alt={item.category} width={350} height={300} />
                    ) : (
                      <div className="video-container">
                        <iframe
                          width="100%"
                          height="250"
                          src={item.src}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        {/* <div className="video-title">{item.title}</div> */}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No items found.</p>
            )}
             {/* Learb more button */}
          <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                      <a href="#">View More</a>
                    </div>
                  </div>
          </div>
          
        </div>
      </div>

      {/* Modal code remains the same */}
      {filteredItems.length > 0 && (
        <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal" style={{ backgroundColor: "transparent" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#fff" }}>
            <Modal.Title style={{ color: "#274C77", fontWeight: "600", fontSize: "25px", textAlign: "center" }}>
              {filteredItems[currentIndex]?.title || 'Untitled'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#EEF0F2" }}>
            {filteredItems[currentIndex]?.type === 'image' ? (
              <Image src={filteredItems[currentIndex]?.src} alt={filteredItems[currentIndex]?.category} width={1050} height={500} />
            ) : (
              <iframe
                width="100%"
                height="500"
                src={filteredItems[currentIndex]?.src}
                title={filteredItems[currentIndex]?.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default HomeGallerySection;
