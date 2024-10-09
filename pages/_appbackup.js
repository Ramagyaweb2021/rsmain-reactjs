import { useEffect } from 'react';
// import Head from 'next/head'
// import Script from 'next/script'
// import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../styles/globals.css'; // or wherever your global CSS is located
import '../styles/responsive.css'; // or wherever your global CSS is located
//import '../styles/styleinternalpages.css'; // or wherever your internal pages CSS is located
//import '../styles/_custom.scss'; // or wherever your custom SCSS is located
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import bootstrap JS for client-side rendering
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      require('jquery/dist/jquery.min.js');
    }
    const disableMiddleClickScroll = (event) => {
      if (event.button === 1) { // Check for middle mouse button click
        event.preventDefault();  // Prevent the default scroll behavior
      }
    };
     // Attach the event listener for the middle mouse button
     window.addEventListener('mousedown', disableMiddleClickScroll);

     // Clean up the event listener on unmount
     return () => {
       window.removeEventListener('mousedown', disableMiddleClickScroll);
     };
  }, []);
 return <Component {...pageProps} />;
}

export default MyApp;
