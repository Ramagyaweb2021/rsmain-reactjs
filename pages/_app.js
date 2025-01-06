import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/scrollspy.css';
import '../styles/responsive.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Google Analytics setup
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'AW-649958479', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Dynamically load Bootstrap and jQuery
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      require('jquery/dist/jquery.min.js');
    }
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-649958479"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-649958479', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Render the main page component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
