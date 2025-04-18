import React from 'react'
import { useRef } from 'react';
import 'animate.css';
import Image from 'next/image';

const HomeVideoBannerNoida = () => {
  const scrollToSection = useRef(null); // Ref for the target section

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="container-fluid learn my-custom-video">
         <div className='video-banner'>
         <video
            className="main-video-noida"
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
              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/main-video-noida.mp4"
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
            style={{ width: "auto", height: "auto" }}
          />
         </div>
        </div>
        {/* Target section to scroll to */}
      <div ref={scrollToSection} className="branch">
       
      </div>
       
    </>
  )
}

export default HomeVideoBannerNoida