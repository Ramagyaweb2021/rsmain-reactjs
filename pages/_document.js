import { Html, Head, Main, NextScript } from "next/document";
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from "next/script";
// import Script from "next/script";
// import Head from 'next/head'
// import App from 'next/app';
export default function Document() {
  return (
      <Html lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramagyaschool.com/images/main-webiste-logo/logo-2.webp" />
        <meta property="og:locale" content="en_US" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="shortcut icon" type="image/x-icon" href="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/icons/favicon.webp" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> */}
        <link rel="preconnect" href="https://forms.edunexttechnologies.com/forms/ramagya/main-branch" crossOrigin="true" />
      <Head/> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
