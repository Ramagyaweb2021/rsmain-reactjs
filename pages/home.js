import React from 'react'
import Head from 'next/head'
import Header from '/pages/components/Header'
import HomeSlider from '/pages/components/HomeSlider'
import ScrollspySections from '/pages/components/ScrollspySections'
import OfferPopup from './components/OfferPopup'
import Footer from './components/Footer'
import DownArrow from './components/DownArrowSchoolBranch'
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
      <HomeSlider />
      <DownArrow/>
      <ScrollspySections/>
      <OfferPopup/>
      <Footer />
    </>
  )
}

export default Home