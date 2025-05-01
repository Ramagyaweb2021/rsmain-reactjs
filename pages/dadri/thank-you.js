/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";
const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        router.push("https://ramagyaschool.com/dadri");
      }, 2000);
    }
  }, [router]);
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("https://ramagyaschool.com");
  //   }, 2000);
  // }, []);

  return (
    <>
      <Head>
        <title>Thank You | Ramagya School</title>
        <meta name="description" content="Thank you for visiting Ramagya School Dadri. We appreciate your interest and look forward to connecting with you soon." />
        <link rel="canonical" href="https://ramagyaschool.com/dadri/thank-you" />

        {/* Open Graph */}
        <meta property="og:title" content="Thank You | Ramagya School Dadri" />
        <meta property="og:description" content="Thank you for your interest in Ramagya School Dadri. We appreciate your visit and are here to assist you with any further information." />
        <meta property="og:url" content="https://ramagyaschool.com/dadri/thank-you" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You | Ramagya School Dadri" />
        <meta name="twitter:description" content="Thank you for visiting Ramagya School Dadri. We are happy to assist with any further queries." />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-website-logo/logo-2.webp" />

      </Head>

      {/* Google Analytics (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-649958479"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-649958479');
            gtag('event', 'conversion', {'send_to': 'AW-649958479/lLI5CNKc998BEM-o9rUC'});
          `,
        }}
      />

      {/* Facebook Pixel Code */}
      <Script
        strategy="afterInteractive"
        id="facebook-pixel"
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
            fbq('track', 'Lead', { currency: 'INR' });
          `,
        }}
      />

      {/* NoScript Fallback for Facebook Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1804643723325480&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>

      {/* Thank You Page Content */}
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="border border-3 border-danger" />
          <div className="card bg-white shadow p-5">
            <div className="mb-4 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-danger"
                width={75}
                height={75}
                fill="currentColor"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Success Checkmark"
              >

                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <div className="text-center">
              <h1>Thank You!</h1>
              <p>
                Dear Parents, Thank you for your enquiry regarding the admission
                of your ward for class Toddlers. We appreciate your interest
                in our school. Your enquiry number &amp; admission form link has
                been sent to your registered email ID.
                <br />
                Regards,
                <br />
                Ramagya School
              </p>
              <a
                href="https://qr1.be/ZJ68"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger"
              >
                Digital Assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
