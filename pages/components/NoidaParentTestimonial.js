import React, { useState } from 'react';
import Image from 'next/image'; // If you're using Next.js Image component
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export const NoidaParentTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const testimonials = [
    {
      name: 'GIS Republic',
      subject: 'Republic TV',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/repblic.webp',
      videoLink: 'https://www.youtube.com/watch?v=EW1-kY0mxtk',
    },
    {
      name: 'Ritesh Kaul',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ritesh-kaul.webp',
      videoLink: 'https://www.youtube.com/watch?v=a-nRhn2vCrk',
    },
    {
      name: 'Sudeepa Parashar',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sudeepa.webp',
      videoLink: 'https://www.youtube.com/watch?v=FT1TNGL5XNk',
    },
    {
      name: 'Siddharth Sharma',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/siddharth.webp',
      videoLink: 'https://www.youtube.com/watch?v=uR4JkznU558',
    },
    {
      name: 'Preetaish & Meenakshi Kaul',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/preetaish.webp',
      videoLink: 'https://www.youtube.com/watch?v=xky-4zz3vd4',
    },
    {
      name: 'Dipankar Bhattacharya',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/dipankar.webp',
      videoLink: 'https://www.youtube.com/watch?v=RrI0vflnGco',
    },
    {
      name: 'Surjit & Soma Maitra',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/surjit.webp',
      videoLink: 'https://www.youtube.com/watch?v=Z-RvL5B1TFA',
    },
    {
      name: 'Tina',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/tina.webp',
      videoLink: 'https://www.youtube.com/watch?v=WaGaQzxffvo',
    },
    {
      name: 'Aarti',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/arti.webp',
      videoLink: 'https://www.youtube.com/watch?v=x2B_n_H-_EA',
    },
    {
      name: 'Best Gymnastics Classes in Noida',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/best-gym.webp',
      videoLink: 'https://www.youtube.com/watch?v=8GWyrO7zmbQ',
    },
    {
      name: 'Sonia Pachnanda',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sonia.webp',
      videoLink: 'https://www.youtube.com/watch?v=GODiBt1IczI',
    },
    {
      name: 'Best Swimming Classes in Noida',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/best-swimming.webp',
      videoLink: 'https://www.youtube.com/watch?v=EjJUcvr9FVo',
    },
    {
      name: 'Best Skating School in Noida',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/best-skating.webp',
      videoLink: 'https://www.youtube.com/watch?v=IoCfOtBMqEA',
    },
    {
      name: 'Dr. Sumita Omar',
      subject: 'Parent',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sumita.webp',
      videoLink: 'https://www.youtube.com/watch?v=dX4E-tRVlh8',
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
export default NoidaParentTestimonial;