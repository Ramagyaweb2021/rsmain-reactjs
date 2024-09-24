import React from 'react'
import Head from 'next/head'
import Header from '/pages/components/Header'
import Slider from '/pages/components/Slider'
import Scrollspy from '/pages/components/Scrollspy'
// import Thedifferencewemake from './components/Thedifferencewemake'
// import Bepartoframagya from './components/Bepartoframagya'
// import NewsAndAchievements from './components/NewsAndAchievements'
// import VideoAndDonwload from './components/VideoAndDonwload'
import OurCampus from './components/OurCampus'
import DownSection from './components/DownSection'
import OfferPopup from './components/OfferPopup'; 
import Thedifferencewemakenew from './components/Thedifferencewemakenew'
import Bepartoframagyanew from './components/Bepartoframagyanew'
import SchoolUpdates from './components/SchoolUpdates'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
// import Link from 'next/link'
const Home = () => {
  return (
    <>
    <Head>
      <title>Top Schools in Noida | Delhi NCR | Ramagya School</title>
      <meta name="description" content="Ramagya School is among best CBSE schools in Noida, Noida Extension, Greater Noida and Dadri . We are one of the top 10 schools in Noida, Noida Extension, Greater Noida and Dadri. Ramagya School is voted by TOI survey as one of the top 5 Senior Secondary schools in Delhi- NCR"/>
      <meta name="keywords" content="Best School in Noida, Schools in Noida, Noida Extension, Greater Noida and Dadri, CBSE Schools in Noida, Noida Extension, Greater Noida and Dadri, Top Schools in Noida, Noida Extension, Greater Noida and Dadri, top 10 schools in Noida, Noida Extension, Greater Noida and Dadri" />
      <link rel="canonical" href="https://ramagyaschool.com/"/>
    </Head>
     <Header/>
     <Slider/>
     <OurCampus/>
     <OfferPopup/>
     <DownSection/>
     <Scrollspy/>
     <Thedifferencewemakenew/>
     {/* <Thedifferencewemake/> */}
     {/* <Bepartoframagya/> */}
     <Bepartoframagyanew/>
     <SchoolUpdates/>
     {/* <NewsAndAchievements/> */}
     {/* <VideoAndDonwload/> */}
     {/* <OurCampus/> */}
     <Testimonials/>
     <Footer/>
     </>
  )
}

export default Home