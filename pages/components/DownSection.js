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
         <Image src="/images/scroll-down-icon.png" className="animate__animated animate__fadeInDown animate__infinite animate__slow" alt="Ramagya school" width={40} height={40}/>
      </div>

      <section id="Learnsecond" ref={scrollToSection}>
        {/* Content for the Learnsecond section */}
      </section>
    </>
  );
}
