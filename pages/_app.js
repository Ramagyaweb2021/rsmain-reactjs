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

    // Adjust scroll speed for mouse wheel and touchpad
    const adjustMouseScrollSpeed = (event) => {
      const isTouchpad = Math.abs(event.deltaY) < 50; // Detect touchpad based on deltaY value
      const scrollSpeed = isTouchpad ? 1.5 : 10; // Lower scroll speed for touchpad, higher for mouse

      if (!window.scrollLocked) {
        window.scrollBy({
          top: event.deltaY * scrollSpeed,
          behavior: 'smooth',
        });
        // Prevent default behavior only for mouse scrolling, not for touchpad
        if (!isTouchpad) {
          event.preventDefault();
        }
      }
    };

    // Adjust scroll speed for keyboard (arrow keys, page up/down)
    const adjustKeyboardScrollSpeed = (event) => {
      if (!window.scrollLocked) {
        const scrollSpeed = 1000;
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
              top: window.innerHeight * 0.9,
              behavior: 'smooth',
            });
            event.preventDefault();
            break;
          case 'PageUp':
            window.scrollBy({
              top: -window.innerHeight * 0.9,
              behavior: 'smooth',
            });
            event.preventDefault();
            break;
          default:
            break;
        }
      }
    };

    // Disable middle-click scrolling functionality
    const disableMiddleClickScroll = (event) => {
      if (event.button === 1) {
        event.preventDefault();
      }
    };

    // Attach event listeners for mouse wheel, touchpad, and keyboard
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
