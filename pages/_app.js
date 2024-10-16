import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/responsive.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      require('jquery/dist/jquery.min.js');
    }

    // Enable CSS native smooth scrolling by default
    document.documentElement.style.scrollBehavior = 'smooth';

    // Adjust scroll speed for keyboard (arrow keys, page up/down)
    const adjustKeyboardScrollSpeed = (event) => {
      if (!window.scrollLocked) {
        const scrollSpeed = 800; // Amount to scroll per key press
        switch (event.key) {
          case 'ArrowDown':
            window.scrollBy({
              top: scrollSpeed,
              behavior: 'smooth',
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
              top: window.innerHeight * 0.9, // Scroll down 90% of the viewport height
              behavior: 'smooth',
            });
            event.preventDefault();
            break;
          case 'PageUp':
            window.scrollBy({
              top: -window.innerHeight * 0.9, // Scroll up 90% of the viewport height
              behavior: 'smooth',
            });
            event.preventDefault();
            break;
          default:
            break;
        }
      }
    };

    // Adjust scroll speed for mouse wheel or touchpad scrolling
    const adjustMouseScrollSpeed = (event) => {
      if (!window.scrollLocked) {
        let scrollSpeed;
        // Check if it's a traditional mouse wheel or touchpad
        if (event.deltaMode === 0) {
          // DeltaMode 0: Pixel scroll (usually touchpads)
          scrollSpeed = 10; // Adjust as needed for touchpads
        } else {
          // DeltaMode 1: Line scroll (usually mouse wheels)
          scrollSpeed = 10; // Multiplier for mouse wheels
        }
        
        event.preventDefault();
        const deltaY = event.deltaY * scrollSpeed; // Adjust mouse scroll speed
        window.scrollBy({
          top: deltaY,
          behavior: 'smooth',
        });
      }
    };

    // Disable middle-click scrolling functionality
    const disableMiddleClickScroll = (event) => {
      if (event.button === 1) {
        event.preventDefault();
      }
    };

    // Attach event listeners for keyboard, mouse scroll, and middle mouse click
    window.addEventListener('keydown', adjustKeyboardScrollSpeed);
    window.addEventListener('wheel', adjustMouseScrollSpeed, { passive: false }); // Set passive to false to prevent default
    window.addEventListener('mousedown', disableMiddleClickScroll);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('keydown', adjustKeyboardScrollSpeed);
      window.removeEventListener('wheel', adjustMouseScrollSpeed);
      window.removeEventListener('mousedown', disableMiddleClickScroll);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
