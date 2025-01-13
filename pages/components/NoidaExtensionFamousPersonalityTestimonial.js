import React, { useState } from 'react';
import Image from 'next/image'; // If you're using Next.js Image component
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export const NoidaExtensionFamousPersonalityTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const testimonials = [
    {
      name: 'Mr. Mayank Solanki',
      subject: 'CEO and Founder of Val-Ed Initiatives',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/mayank-solanki.webp',
      videoLink: 'https://www.youtube.com/watch?v=Sdc7CrTsVL4',
    },
    {
      name: 'Mr. Nikhil Naz',
      subject: 'Renowned Sports Anchor & Author at Aajtak',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/nikhil-naz-1.webp',
      videoLink: 'https://www.youtube.com/watch?v=7BH1btgK_SI',
    },
    {
      name: 'Mr. Nikhil Naz',
      subject: 'Renowned Sports Anchor & Author at Aajtak',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/nikhil-naz-2.webp',
      videoLink: 'https://www.youtube.com/watch?v=dkSWbDr5-Hg',
    },
    {
      name: 'Mr. Nikhil Naz',
      subject: 'Renowned Sports Anchor & Author at Aajtak',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/nikhil-naz.webp',
      videoLink: 'https://www.youtube.com/watch?v=V-1lie-TRYw',
    },
    {
      name: 'Dr. Deepak Vohra',
      subject: 'As a Special Advisor in Africa',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/nikhil-naz.webp',
      videoLink: 'https://www.youtube.com/watch?v=C8ENzYP6a8Y',
    },
    {
      name: 'Shiv Aroor',
      subject: 'Journalist, Author and News Anchor at India Today',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/shive-aroor.webp',
      videoLink: 'https://www.youtube.com/watch?v=tm0yBtH04ao',
    },
    {
      name: 'Dr. Sunil Dabas',
      subject: 'India Women\'s Kabaddi Team Coach',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sunil-dabas.webp',
      videoLink: 'https://www.youtube.com/watch?v=VVOpQ3vt2Kc',
    },
    {
      name: 'Zakka Jacob',
      subject: 'Anchor and Editor-Output at CNN-News18',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/jacob.webp',
      videoLink: 'https://www.youtube.com/watch?v=EJW8mgGx8dA',
    },
    {
      name: 'Hon\'ble Smt. Smriti Zubin Irani',
      subject: 'Minister of Women and Child Development, and also Minister of Minority Affairs',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      videoLink: 'https://www.youtube.com/watch?v=XzhWSqIlts8',
    },
    {
      name: 'Hon\'ble Smt. Smriti Zubin Irani',
      subject: 'Minister of Women and Child Development, and also Minister of Minority Affairs',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      videoLink: 'https://www.youtube.com/watch?v=1yWQuKlJqTc',
    },
    {
      name: 'Balkrishna Shetty',
      subject: 'International Muay Thai Jujitsu And MMA Fighter',
      img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ball-krishna.webp',
      videoLink: 'https://www.youtube.com/watch?v=jr8zkKLRWtU',
    },
      {
        name: 'Mr. Mahesh Shrinivas Bhupathi',
        subject: 'International Tennis Player',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/bhupati.webp',
        videoLink: 'https://www.youtube.com/watch?v=KSBSoF2qYqc',
      },
      {
        name: 'Abhinav Bindra',
        subject: 'Olympic Gold Medalist',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/abhinav-bindra.webp',
        videoLink: 'https://www.youtube.com/watch?v=Hmp_tCEB0Y4',
      },
      {
        name: 'Ashley Deans',
        subject: 'Professor of education and physics Maharishi University Of Management Fairfield, Lowa, USA',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ashley-deans.webp',
        videoLink: 'https://www.youtube.com/watch?v=EdpF4q8OYEE',
      },
      {
        name: 'Percilla Herrera and Martin Stipanov',
        subject: 'Director of Outreach, Center for Health and Wellness, David Lynch Foundation, New York City, USA',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/percillaherrera.webp',
        videoLink: 'https://www.youtube.com/watch?v=1Ed7WJhGUig',
      },
      {
        name: 'Sumit Awasthi',
        subject: 'Vice President (News & Production)– ABP News',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sumit.webp',
        videoLink: 'https://www.youtube.com/watch?v=jrFyvDWBACg',
      },
      {
        name: 'Dr. Anurag Bhargav',
        subject: 'CMO Gautam Budh Nagar',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/cmo.webp',
        videoLink: 'https://www.youtube.com/watch?v=APhBwM1wZo8',
      },
      {
        name: 'Syed Mohammed Aarif',
        subject: 'Indian Badminton Coach',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sayed.webp',
        videoLink: 'https://www.youtube.com/watch?v=2kRvCScGkK8',
      },
      {
        name: 'Govardhan Reddy',
        subject: 'Indian Badminton Coach',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/govardhan-reddy.webp',
        videoLink: 'https://www.youtube.com/watch?v=L82itnaOLus',
      },
      {
        name: 'Mr. Chetan Bhagat',
        subject: 'Indian Author',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/chetan-bhagat.webp',
        videoLink: 'https://www.youtube.com/watch?v=WrQHBzo0ww4',
      },
      {
        name: 'Ritu Phogat',
        subject: 'Gold medal at the 2016 Commonwealth Wrestling Championship',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ritu-phogat.webp',
        videoLink: 'https://www.youtube.com/watch?v=OMS5Giuq2-U',
      },
      {
        name: 'Dav Whatmore',
        subject: 'Indian Badminton Coach',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/dav-more.webp',
        videoLink: 'https://www.youtube.com/watch?v=L9kJnwDDF34',
      },
      {
        name: 'Viswanathan Anand',
        subject: 'Indian Chess Grandmaster',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/vishwanathan.webp',
        videoLink: 'https://www.youtube.com/watch?v=rYnH2LND6Lg',
      },
      {
        name: 'Rajnish Mishra',
        subject: 'Vocalist',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-90.jpg',
        videoLink: 'https://www.youtube.com/watch?v=YCDEIq4f--g',
      },
      {
        name: 'Shounak Abhisheki',
        subject: 'Vocalist',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-92.jpg',
        videoLink: 'https://www.youtube.com/watch?v=cwrBuQjYpOI',
      },
      {
        name: 'Santosh Nahar',
        subject: 'Violin Artist',
        img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-93.jpg',
        videoLink: 'https://www.youtube.com/watch?v=PARbI2ne94c',
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
export default NoidaExtensionFamousPersonalityTestimonial;