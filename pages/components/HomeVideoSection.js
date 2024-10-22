import React from 'react'
import { useRef } from 'react';
import 'animate.css';
import Image from 'next/image';

const HomeVideoSection = () => {
  const scrollToSection = useRef(null); // Ref for the target section

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
        <div className="fp-tableSlider">
          <video
            className="main-video"
            width="100%"
            poster="/images/main-banner.webp"
            loop
            muted
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <source
              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="downsection" onClick={handleScroll}>
          <Image
            src="/images/scroll-down-icon.webp"
            className="animate__animated animate__fadeInDown animate__infinite animate__slow"
            alt="Ramagya school"
            width={30}
            height={30}
          />
      </div>
       
    </>
  )
}

export default HomeVideoSection