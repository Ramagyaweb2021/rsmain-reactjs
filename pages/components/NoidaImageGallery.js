import React from 'react';
import Image from 'next/image';

const ImageGallery = ({ items, activeTab, handleShowModal }) => {
  return (
    <div className="row g-1">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="col-md-3 col-6">
            <div className="card-gallery" style={{ cursor: 'pointer' }} onClick={() => handleShowModal(index)}>
              <Image src={item.src} className="card-img-top" alt={item.category} width={350} height={300} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No images found.</p>
      )}
    </div>
  );
};

export default ImageGallery;
