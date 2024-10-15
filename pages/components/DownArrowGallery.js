import { useRef } from 'react';
import 'animate.css';
import Image from 'next/image';
// import Link from 'next/link';

const DownArrowGallery = () => {
  const scrollToSection = useRef(null); // Ref for the target section

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Down section with continuous bounce */}
      <div className="downsection-lead" onClick={handleScroll}>
        <Image
          src="/images/down-section-gallery.png"
          className="animate__animated animate__fadeInDown animate__infinite animate__slow"
          alt="Ramagya school"
          width={100}
          height={100}
        />
      </div>

      {/* Target section for scrolling */}
      <section className='learn section fp-section fp-table' id="gallery" ref={scrollToSection}>
      {/* <section id="our-campuses" ref={scrollToSection} style={{ minHeight: '100vh', paddingTop: '50px' }}> */}
       <div className="container">
          fdsfdsfsdfds
       </div>
      </section>
    </>
  );
};

export default DownArrowGallery;
