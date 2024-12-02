import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const NoidaGalleryInternalPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeGallery, setActiveGallery] = useState('Images');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageTabs = ['All', 'School Events', 'Sports', 'Science Lab'];
  const videoTabs = ['All', 'Celeb Bites'];

  const items = [
    // Image items
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/68.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/69.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/70.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/71.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    // Video items
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/shive-aroore.webp',
      title: 'Shive Aroore Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'tm0yBtH04ao'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-92.jpg',
      title: 'Sports Event',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'cwrBuQjYpOI'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-90.jpg',
      title: 'Testimonial Video 1',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'YCDEIq4f--g'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-93.jpg',
      title: 'Testimonial Video 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'PARbI2ne94c'
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesGallery = activeGallery === 'Images' ? item.type === 'image' : item.type === 'video';
    return matchesTab && matchesGallery;
  });

  // useEffect(() => {
  //   const wow = new WOW.WOW({ live: false });
  //   wow.init();
  // }, []);

  const openModal = (index) => {
    const item = filteredItems[index];
    setCurrentIndex(index);
    item.type === 'video' ? setIsVideoModalOpen(true) : setIsImageModalOpen(true);
  };

  const closeModal = () => {
    setIsVideoModalOpen(false);
    setIsImageModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="learn">
      <div className="container my-custom-gallery">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>
              GALLERY
              <span className="lineclass" />
              <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
                OUR CAPTURED MEMORY
              </span>
            </h1>
          </div>
        </div>

        {/* Gallery Selector */}
        <div className="d-flex justify-content-center mb-3">
          <button
            className={`btn mx-2 ${activeGallery === 'Images' ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
            onClick={() => setActiveGallery('Images')}
          >
            Image Gallery
          </button>
          <button
            className={`btn mx-2 ${activeGallery === 'Videos' ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
            onClick={() => setActiveGallery('Videos')}
          >
            Video Gallery
          </button>
        </div>

        {/* Tab Selector */}
        {/* <div className="d-flex justify-content-center flex-wrap mb-4">
          {(activeGallery === 'Images' ? imageTabs : videoTabs).map((tab) => (
            <button
              key={tab}
              className={`btn mx-2 ${activeTab === tab ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Gallery Items */}
        <div className="row g-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="col-md-3 col-6">
                <div className="card-gallery" style={{ cursor: 'pointer' }} onClick={() => openModal(index)}>
                  {item.type === 'image' ? (
                    <Image src={item.src} alt={item.title} width={350} height={300} />
                  ) : (
                    <div className="image-container-testimonial">
                      <Image src={item.src} alt={item.title} width={450} height={250} />
                      <div className="play-button-overlay">
                        <Image src="/images/youtube-play-icon.png" alt="Play Button" width={96} height={96} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items found.</p>
          )}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
                  <div className="learn-more-button">
                    <a href="gallery">View More</a>
                  </div>
                </div>
      </div>

      {/* Video Modal */}
      <ModalVideo channel="youtube" isOpen={isVideoModalOpen} videoId={filteredItems[currentIndex]?.videoId} onClose={closeModal} />

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="custom-modal-backdrop" style={{zIndex:"1111"}}>
          <div className="custom-modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <button className="prev-button" onClick={handlePrevious}></button>
            <Image src={filteredItems[currentIndex]?.src} alt="Gallery Image" width={850} height={500} />
            <button className="next-button" onClick={handleNext}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoidaGalleryInternalPage;
