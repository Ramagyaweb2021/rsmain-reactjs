import React, { useState } from 'react';
import Image from 'next/image'; // If you're using Next.js Image component
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export const NoidaExpertTeacherTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const testimonials = [
    {
      name: 'Colonel V N Thapar',
      subject: 'Father of Captain Vijayant Thapar',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/expert-ext-1.webp',
      videoLink: 'https://www.youtube.com/watch?v=7vbK2bTay3A',
    },
    {
      name: 'Seema Nanda',
      subject: 'Headmistress',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/seema-nanda.webp',
      videoLink: 'https://www.youtube.com/watch?v=gT5s5a2CAjo',
    },
    {
      name: 'Rick Dell',
      subject: 'General Manager Basketball Development Asia-MLB',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/rick-dell.webp',
      videoLink: 'https://www.youtube.com/watch?v=4D7EAoGV9Oo',
    },
    {
      name: 'Aanchal Harjai',
      subject: 'Clinical Psychologist',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/aanchal-harjai.webp',
      videoLink: 'https://www.youtube.com/watch?v=nnzqUkbFxEE',
    },
    {
      name: 'Harneer Kaur',
      subject: 'Counselling Psychologist',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/harneer.webp',
      videoLink: 'https://www.youtube.com/watch?v=xoVL_qLleDA',
    },
    {
      name: 'David Palese',
      subject: 'Technical Coordinator India-MLB',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/david-palse.webp',
      videoLink: 'https://www.youtube.com/watch?v=KtGzO3P1aWM',
    },
    {
      name: 'RYO Takahashi',
      subject: 'Business Manager, MLB',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/RYO.webp',
      videoLink: 'https://www.youtube.com/watch?v=bbj9IsUlc2o',
    },
    {
      name: 'Seema Kaushik',
      subject: 'Headmistress',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-91.jpg',
      videoLink: 'https://www.youtube.com/watch?v=5MpTuatJoFI',
    },
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
export default NoidaExpertTeacherTestimonial;