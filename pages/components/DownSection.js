import { useRef } from 'react';
import 'animate.css';
import Image from 'next/image';
export default function PageComponent() {
  const scrollToSection = useRef(null);

  const handleScroll = () => {
    scrollToSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Down section with continuous bounce */}
      <div className="downsection" onClick={handleScroll}>
         <Image src="/images/scroll-down-icon.webp" className="animate__animated animate__fadeInDown animate__infinite animate__slow" alt="Ramagya school" width={30} height={30}/>
      </div>

      <section id="schoolupdates" ref={scrollToSection}>
        {/* Content for the schoolupdates section */}
      </section>
    </>
  );
}
