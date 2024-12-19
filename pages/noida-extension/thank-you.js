import Head from 'next/head';
import Script from 'next/script';

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You | Ramagya School</title>
        <meta name="description" content="Thank You" />
        <link rel="canonical" href="https://ramagyaschool.com/thank-you" />
        {/* Meta tag for redirection after 2 seconds */}
        <meta httpEquiv="refresh" content="2;url=https://ramagyaschool.com" />
      </Head>

      {/* Google Analytics Tracking */}
      <Script
        id="google-analytics"
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
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <noscript>
              <img height="1" width="1" src="https://www.facebook.com/tr?id=1804643723325480&ev=PageView&noscript=1" alt="Facebook Pixel"/>
            </noscript>
          `,
        }}
      />

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
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <div className="text-center">
              <h1>Thank You!</h1>
              <p>
                Dear Parents, Thank you for your enquiry regarding the admission
                of your ward, test, for class Toddlers. We appreciate your interest
                in our school. Your enquiry number is &amp; Admission form link has
                been sent to your registered email id.
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