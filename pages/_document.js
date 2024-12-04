import { Html, Head, Main, NextScript } from "next/document";
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from "next/script";
// import Script from "next/script";
// import Head from 'next/head'
// import App from 'next/app';
export default function Document() {
  return (
      <Html lang="en">
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="english" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-control" content="public"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:site_name" content="Ramagya School" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rs-school.sgp1.digitaloceanspaces.com/images/favicon.webp" />
        <meta property="article:publisher" content="https://www.facebook.com/RamagyaSchoolNoida/"/>
        <meta property="article:modified_time" content="2024-10-22T06:59:47+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
        <meta name="copyright" content="Ramagya School" />
        <meta name="author" content="Ramagya School" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="safe for kids" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="allow-search" content="yes" />
        <meta name="revisit-after" content="daily" />
        <meta name="distribution" content="global" />
        <meta name="expires" content="never" />
        <meta property="og:locale" content="en_US" />
        <link rel="shortcut icon" type="image/x-icon" href="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <Head/> 
       {/* <Script src="https://www.google.com/recaptcha/api.js"></Script> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

