/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// ✅ Import Google Fonts
import { Oswald, Montserrat } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-family-heading",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-family-text",
});

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ✅ Dynamically Load Bootstrap
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  // ✅ Google Analytics Setup
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("config", GOOGLE_ANALYTICS_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* ✅ Apply Google Fonts as CSS Variables */}
      <style jsx global>{`
        :root {
          --font-family-heading: ${oswald.style.fontFamily};
          --font-family-text: ${montserrat.style.fontFamily};
        }
      `}</style>

      {/* ✅ Google Analytics Script (Using ENV Variable) */}
      {GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* ✅ Facebook Pixel Script (Using ENV Variable) */}
      {FACEBOOK_PIXEL_ID && (
        <>
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

                if ('${FACEBOOK_PIXEL_ID}' !== 'undefined') {
                  fbq('init', '${FACEBOOK_PIXEL_ID}');
                  fbq('track', 'PageView');
                } else {
                  console.error("❌ Facebook Pixel ID is missing or invalid!");
                }
              `,
            }}
          />
        </>
      )}

      {/* ✅ Facebook Pixel Noscript */}
      {FACEBOOK_PIXEL_ID && (
        <noscript>
          <img
            height="1"
            width="1"
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      )}

      {/* ✅ Render the Main Page Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
