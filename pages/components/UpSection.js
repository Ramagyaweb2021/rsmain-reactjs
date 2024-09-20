import { useState, useEffect } from 'react';
import 'animate.css';
import Image from 'next/image';

export default function PageComponent() {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolled down 300 pixels
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Your page content here */}
      <section>
        <h1>Page Content</h1>
        <p>Your content goes here...</p>
      </section>

      {/* Back to Top button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </>
  );
}
