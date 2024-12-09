import React, { useState } from 'react';
import Image from 'next/image'; // If you're using Next.js Image component
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export const NoidaFamousPersonalityTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Celeb Bites');

  const testimonials = [
    {
      name: 'Shiv Aroor',
      subject: 'Journalist, Author and News Anchor at India Today',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/shive-aroor.webp',
      videoLink: 'https://www.youtube.com/watch?v=tm0yBtH04ao',
      category: 'Celeb Bites',
    },
    {
      name: 'Dr. Sunil Dabas',
      subject: 'India Women\'s Kabaddi Team Coach',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sunil-dabas.webp',
      videoLink: 'https://www.youtube.com/watch?v=VVOpQ3vt2Kc',
      category: 'Testimonials',
    },
    {
      name: 'Zakka Jacob',
      subject: 'Anchor and Editor-Output at CNN-News18',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/jacob.webp',
      videoLink: 'https://www.youtube.com/watch?v=EJW8mgGx8dA',
      category: 'Celeb Bites',
    },
    {
      name: 'Abhinav Bindra',
      subject: 'Olympic Gold Medalist',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/abhinav-bindra.webp',
      videoLink: 'https://www.youtube.com/watch?v=Hmp_tCEB0Y4',
      category: 'Testimonials',
    },
    // Add more testimonials with categories...
  ];

  const openModal = (videoLink) => {
    const videoId = videoLink.split('v=')[1]; // Extract video ID from YouTube URL
    setVideoId(videoId);
    setIsOpen(true);
  };

  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.category === selectedCategory
  );

  return (
    <div className="container">
      <div className="category-buttons text-center mb-4">
        <button
          className={`btn btn-primary me-2 ${selectedCategory === 'Celeb Bites' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Celeb Bites')}
        >
          Celeb Bites
        </button>
        <button
          className={`btn btn-primary ${selectedCategory === 'Testimonials' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Testimonials')}
        >
          Testimonials
        </button>
      </div>

      <div className="row justify-content-center">
        {filteredTestimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-3 col-md-3 col-6 mb-4">
            <div className="testimonial-item">
              <div className="image-container-testimonial">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="testimonial-image"
                  width={310}
                  height={250}
                />
                <div className="play-button-overlay">
                  <button
                    className="play-button"
                    onClick={() => openModal(testimonial.videoLink)}
                  >
                    <Image
                      src="/images/youtube-play-icon.webp"
                      alt="play-button"
                      width={96}
                      height={96}
                    />
                  </button>
                </div>
              </div>
              <div className="testimonial-content">
                <h6 className="testimonial-name-heading text-center">{testimonial.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
export default NoidaFamousPersonalityTestimonial;
