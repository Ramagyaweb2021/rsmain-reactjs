/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
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

  // ✅ Schema Based on Route
  const getSchema = () => {
    let name = "Ramagya School";
    let description = "Ramagya School, one of the Top 10 CBSE schools in Noida, is where your child’s journey to success begins. Apply in best school in noida today for best start";

    if (router.pathname.startsWith("/noida")) {
      name = "Ramagya School Noida Sector 50";
      description = "Ramagya School Noida, ranked among the top CBSE schools in Noida Sec 50. Offering academic excellence, modern infrastructure. Enroll today!";
    } else if (router.pathname.startsWith("/noida-extension")) {
      name = "Ramagya School Noida Extension";
      description = "Ramagya School Top Best School in Noida Extension - offering world-class education, modern infrastructure. Best School in Noida Extension";
    } else if (router.pathname.startsWith("/greater-noida")) {
      name = "Ramagya School Greater Noida";
      description = "Ramagya School Top School in Greater Noida, offering academic excellence, modern facilities and holistic student development and best environment.";
    } else if (router.pathname.startsWith("/dadri")) {
      name = "Ramagya School Dadri";
      description = "Ramagya School Top Best CBSC School in Dadri - Top CBSE school in Dadri offering quality education, modern facilities with best study environment";
    }

    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name,
      image:
        "https://ramagyaschool.com/_next/image?url=%2Fimages%2Fmain-webiste-logo%2Flogo-1.webp&w=384&q=75",
      description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "6926",
      },
    };
  };

  return (
    <>
      {/* ✅ Structured Data Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchema()),
          }}
        />
      </Head>

      {/* ✅ Apply Google Fonts as CSS Variables */}
      <style jsx global>{`
        :root {
          --font-family-heading: ${oswald.style.fontFamily};
          --font-family-text: ${montserrat.style.fontFamily};
        }
      `}</style>

      {/* ✅ Google Analytics Script */}
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

      {/* ✅ Facebook Pixel Script */}
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

      {/* ✅ Render Page Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
