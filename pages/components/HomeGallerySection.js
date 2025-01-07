import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const NoidaGalleryInternalPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [activeTab, setActiveTab] = useState('All');
  const [activeGallery, setActiveGallery] = useState('Images');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      "src": "/images/gallery/img/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "/images/gallery/img/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "/images/gallery/img/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    {
      "src": "/images/gallery/img/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/img/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/img/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/img/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/img/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Gallery",
      "type": "image"
    },
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
    const matchesGallery =
      activeGallery === 'Images' ? item.type === 'image' : item.type === 'video';
    return matchesTab && matchesGallery;
  });

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learn">
      <div className="container my-custom-gallery">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>
              GALLERY
              <span className="lineclass" />
              <span className="sub-heading animate-on-scroll">
                OUR CAPTURED MEMORY
              </span>
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <button
            className={`btn mx-2 ${
              activeGallery === 'Images'
                ? 'btn-warning-gallery'
                : 'btn-outline-warning'
            }`}
            onClick={() => setActiveGallery('Images')}
          >
            Image Gallery
          </button>
          <button
            className={`btn mx-2 ${
              activeGallery === 'Videos'
                ? 'btn-warning-gallery'
                : 'btn-outline-warning'
            }`}
            onClick={() => setActiveGallery('Videos')}
          >
            Video Gallery
          </button>
        </div>

        <div className="row g-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="col-md-3 col-6"
                onClick={() => openModal(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-gallery">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={350}
                      height={300}
                    />
                  ) : (
                    <div className="image-container-testimonial">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={450}
                        height={250}
                      />
                      <div className="play-button-overlay">
                        <Image
                          src="/images/youtube-play-icon.webp"
                          alt="Play Button"
                          width={96}
                          height={96}
                        />
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
      {/* Modal */}
      <Modal show={isModalOpen} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton style={{background:"#000"}}>
            {/* <Modal.Title>
              {filteredItems[currentIndex]?.title || 'Gallery Item'}
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            {filteredItems[currentIndex]?.type === 'image' ? (
              <Image
                src={filteredItems[currentIndex]?.src}
                alt={filteredItems[currentIndex]?.title}
                width={1250}
                height={500}
              />
            ) 
            : (
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/${filteredItems[currentIndex]?.videoId}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Video"
                />
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default NoidaGalleryInternalPage;
