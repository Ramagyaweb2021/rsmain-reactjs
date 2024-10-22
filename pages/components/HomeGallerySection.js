import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const HomeGallerySection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeGallery, setActiveGallery] = useState('Images'); // Track whether viewing images or videos
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the current image/video

  const tabs = ['All', 'School Events', 'Sports', 'Science Lab'];

  const images = [
    { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    { src: '/images/poineer-in-sports.webp', title: 'Science Lab Experiments', category: 'Science Lab', type: 'image' },
    { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    // { src: '/images/ach.webp', title: 'Achievement Day', category: 'School Events', type: 'image' },
    // { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    // { src: '/images/poineer-in-sports.webp', title: 'Science Lab Experiments', category: 'Science Lab', type: 'image' },
    // { src: '/images/slider-2.webp', title: 'Sports Day', category: 'Sports', type: 'image' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Sports Event', category: 'Sports', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Lab Experiments in Action', category: 'Science Lab', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Sports Day Highlights', category: 'Sports', type: 'video' },
    { src: 'https://www.youtube.com/embed/_cuUK64hQ7o', title: 'Science Fair', category: 'Science Lab', type: 'video' },
    // Add more images and videos with titles
  ];

  // Filter images or videos based on active tab and gallery type
  const filteredItems = images.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesGallery = activeGallery === 'Images' ? item.type === 'image' : item.type === 'video';
    return matchesTab && matchesGallery;
  });

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  // Show modal for the selected item
  const handleShowModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Navigate to the previous item
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1));
  };

  // Navigate to the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      
      <div className="fp-tableGallery">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 position-r">
              <h1 className="">
                GALLERY
                <span className="lineclass" />
                <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                  OUR CAPTURED MEMORY
                </span>
              </h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
        </div>
        <div className="container my-2">
          {/* Gallery and Video Toggle Buttons */}
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

          {/* Tab Buttons */}
          <div className="d-flex justify-content-center flex-wrap mb-4">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`btn mx-2 ${activeTab === tab ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            {/* More Dropdown */}
            <div className="dropdown">
              <button className="btn btn-outline-warning dropdown-toggle mx-2" type="button" id="moreDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </button>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li><a className="dropdown-item" href="#">View More</a></li>
              </ul>
            </div>
          </div>

          {/* Image/Video Grid */}
          <div className="row g-1">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="col-md-3 col-6"> {/* 6 items per row for videos */}
                  <div className="card-gallery" style={{ cursor: 'pointer' }} onClick={() => handleShowModal(index)}>
                    {item.type === 'image' ? (
                      <Image src={item.src} className="card-img-top" alt={item.category} width={350} height={300} />
                    ) : (
                      <div className="video-container">
                        <iframe
                          width="100%"
                          height="250"
                          src={item.src} // Ensure autoplay parameter is not included
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="video-title">{item.title}</div>
                        {/* <button className="btn btn-primary play-button" onClick={() => handleShowModal(index)}>
                          Play
                        </button> */}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No items found.</p>
            )}
          </div>
        </div>
        {/* Modal for Image/Video Preview */}
        {filteredItems.length > 0 && (
          <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal" style={{ backgroundColor: "transparent" }}>
            <Modal.Header closeButton style={{ backgroundColor: "#fff" }}>
              <Modal.Title style={{ color: "#274C77", fontWeight: "600", fontSize: "25px", textAlign: "center" }}>
                {filteredItems[currentIndex]?.title || 'Untitled'} {/* Fallback to 'Untitled' */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#EEF0F2" }}>
              {filteredItems[currentIndex]?.type === 'image' ? (
                <Image src={filteredItems[currentIndex]?.src} alt={filteredItems[currentIndex]?.category} width={1050} height={500} />
              ) : (
                <iframe
                  width="100%"
                  height="500"
                  src={filteredItems[currentIndex]?.src} // Ensure autoplay parameter is not included
                  title={filteredItems[currentIndex]?.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </Modal.Body>

            {/* Previous and Next arrows */}
            <Button
              variant="link"
              onClick={handlePrevious}
              className="custom-arrow-left"
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                fontSize: '50px',
                color: '#ffdf8b',
                zIndex: 1000,
              }}
            >
              &#8249;
            </Button>

            <Button
              variant="link"
              onClick={handleNext}
              className="custom-arrow-right"
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                fontSize: '50px',
                color: '#ffdf8b',
                zIndex: 1000,
              }}
            >
              &#8250;
            </Button>
          </Modal>
        )}
      </div>
    
    </>
  )
}

export default HomeGallerySection