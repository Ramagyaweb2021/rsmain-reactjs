import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/scrollspy.css';
import '../styles/responsive.css';

// ✅ Import Google Fonts properly
import {Oswald, Montserrat } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['200', '400', '500', '600', '700'], variable: '--font-family-heading' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500'], variable: '--font-family-text' });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ✅ Dynamically load Bootstrap
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  // ✅ Google Analytics setup
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
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

  return (
    <div className={`${montserrat.variable} ${oswald.variable}`}>
      {/* Google Analytics Script */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-649958479" />
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
    </div>
  );
}

export default MyApp;
