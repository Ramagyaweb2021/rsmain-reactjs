import React, { useState } from 'react';
import Image from 'next/image'; // If you're using Next.js Image component
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export const NoidaStudentTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const testimonials = [
    {
      name: 'Ms. Harshima',
      subject: 'Student',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/harshima.webp',
      videoLink: 'https://www.youtube.com/watch?v=A2p1Tl4zJxs',
    },
    {
      name: 'Ms. Meera Goel',
      subject: 'Student',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/republic-std.webp',
      videoLink: 'https://www.youtube.com/watch?v=1fMz-BI_dDU',
    },
    {
      name: 'Ms. Leesha Kashyap',
      subject: 'Student',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/leesha.webp',
      videoLink: 'https://www.youtube.com/watch?v=NSvWjjjSsWM',
    }
  ];


  const openModal = (videoLink) => {
    const videoId = videoLink.split('v=')[1]; // Extract video ID from YouTube URL
    setVideoId(videoId);
    setIsOpen(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-6 mb-4">
            <div className="testimonial-item">
              <div className="image-container-testimonial">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="testimonial-image"
                  width={650}
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
                {/* <p style={{ textAlign: 'center' }}>{testimonial.subject}</p> */}
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
export default NoidaStudentTestimonial;
