import { useRef } from 'react';
import 'animate.css';
import Image from 'next/image';

const DownArrow = () => {
  const scrollToSection = useRef(null); // Ref for the target section

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Down section with continuous bounce */}
      <div className="downsection" onClick={handleScroll}>
        <Image
          src="/images/scroll-down-icon.webp"
          className="animate__animated animate__fadeInDown animate__infinite animate__slow"
          alt="Ramagya school"
          width={30}
          height={30}
        />
      </div>

      {/* Target section for scrolling */}
      <div className='branch' ref={scrollToSection}>
        {/* Dummy content for demonstration */}
        {/* <h2>Our Branch</h2>
        <p>This is where you can find information about our branch.</p>
        <p style={{ marginTop: '100vh' }}>Scroll down to see more content!</p> */}
      </div>
    </>
  );
};

export default DownArrow;
