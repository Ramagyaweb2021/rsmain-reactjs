/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
//import '../styles/scrollspy.css';
//import '../styles/responsive.css';

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
      {/* ✅ Google Analytics Script */}
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
      {/* ✅ Facebook Pixel Script */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1804643723325480');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Facebook Pixel noscript */}
      <noscript>
        <img height="1" width="1"
          src="https://www.facebook.com/tr?id=1804643723325480&ev=PageView&noscript=1" alt='facebook pixel' />
      </noscript>
      
      {/* Render the main page component */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
