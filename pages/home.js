import React from 'react'
import Head from 'next/head'
import Header from '/pages/components/Header'
import Slider from '/pages/components/Slider'
import OurCampus from './components/OurCampus'
import Scrollspy from '/pages/components/Scrollspy'
import Gallery from './components/Gallery'
import Thedifferencewemake from './components/Thedifferencewemake'
import Awards from './components/Awards'
// import NewsAndAchievements from './components/NewsAndAchievements'
// import VideoAndDonwload from './components/VideoAndDonwload'
import DownSection from './components/DownSection'
import OfferPopup from './components/OfferPopup';
import SchoolUpdates from './components/SchoolUpdates'
// import InvovateNew from './components/InvovateNew'
// import Invovateold from './components/Invovateold'
// import Invovatevideotypebackup from './components/Invovatevideotypebackup'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
// import Link from 'next/link'
const Home = () => {
  return (
    <>
      <Head>
        <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
        <meta name="description" content="Ramagya School is among best CBSE schools in Noida, Noida Extension, Greater Noida and Dadri . We are one of the top 10 schools in Noida, Noida Extension, Greater Noida and Dadri. Ramagya School is voted by TOI survey as one of the top 5 Senior Secondary schools in Delhi- NCR" />
        <meta name="keywords" content="Best School in Noida, Schools in Noida, Noida Extension, Greater Noida and Dadri, CBSE Schools in Noida, Noida Extension, Greater Noida and Dadri, Top Schools in Noida, Noida Extension, Greater Noida and Dadri, top 10 schools in Noida, Noida Extension, Greater Noida and Dadri" />
        <link rel="canonical" href="https://ramagyaschool.com/" />
      </Head>
      <Header />
      <Slider />
      <OurCampus />
      <OfferPopup />
      <DownSection />
      <Scrollspy />
      <Gallery/>
      <Thedifferencewemake />
      <Awards/>
      <SchoolUpdates />
      {/* <InvovateNew/>
      <Invovateold/>
      <Invovatevideotypebackup/> */}
      {/* <NewsAndAchievements/> */}
      {/* <VideoAndDonwload/> */}
      {/* <OurCampus/> */}
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home