import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; 
import '../styles/responsive.css'; 

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import bootstrap JS for client-side rendering
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      require('jquery/dist/jquery.min.js');
    }

    // Adjust scroll speed for mouse wheel
    const adjustMouseScrollSpeed = (event) => {
      // Increase scroll speed multiplier (higher number = faster scroll)
      const scrollSpeed = 6;
      if (event.deltaY !== 0) {
        window.scrollBy({
          top: event.deltaY * scrollSpeed,
          behavior: 'smooth', // Use 'smooth' for smoother scrolling
        });
        event.preventDefault(); // Prevent default scroll behavior
      }
    };

    // Adjust scroll speed for keyboard (arrow keys, page up/down)
    const adjustKeyboardScrollSpeed = (event) => {
      const scrollSpeed = 1300; // Increase this number for faster keyboard scrolling
      switch (event.key) {
        case 'ArrowDown':
          window.scrollBy({
            top: scrollSpeed,
            behavior: 'smooth', // You can use 'smooth' for smooth scrolling
          });
          event.preventDefault();
          break;
        case 'ArrowUp':
          window.scrollBy({
            top: -scrollSpeed,
            behavior: 'smooth',
          });
          event.preventDefault();
          break;
        case 'PageDown':
          window.scrollBy({
            top: window.innerHeight * 0.9, // Scroll down almost a full page height
            behavior: 'smooth',
          });
          event.preventDefault();
          break;
        case 'PageUp':
          window.scrollBy({
            top: -window.innerHeight * 0.9, // Scroll up almost a full page height
            behavior: 'smooth',
          });
          event.preventDefault();
          break;
        default:
          break;
      }
    };

    // Disable middle-click scrolling functionality
    const disableMiddleClickScroll = (event) => {
      if (event.button === 1) { // Check for middle mouse button click
        event.preventDefault();  // Prevent the default scroll behavior
      }
    };

    // Attach event listeners for mouse wheel and keyboard
    window.addEventListener('wheel', adjustMouseScrollSpeed, { passive: false });
    window.addEventListener('keydown', adjustKeyboardScrollSpeed);
    window.addEventListener('mousedown', disableMiddleClickScroll);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('wheel', adjustMouseScrollSpeed);
      window.removeEventListener('keydown', adjustKeyboardScrollSpeed);
      window.removeEventListener('mousedown', disableMiddleClickScroll);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
