import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from './components/Header'; // Adjust this path if needed
import 'animate.css';
import FooterNoida from './components/FooterNoida';
import ResultAwardsTestimonialsGalleryPageScrollSpyMenu from './components/ResultAwardsTestimonialsGalleryPageScrollSpyMenu';
import NoidaIITThumbnailResults from './components/NoidaIITThumbnailResults';
import NoidaAcademicsThumbnailResults from './components/NoidaAcademicsThumbnailResults';
import NoidaTableResultData from './components/NoidaTableResultData';
import NoidaStupendousResults from './components/NoidaStupendousResults';
import DadriIITThumbnailResults from './components/DadriIITThumbnailResults';
import DadriAcademicsThumbnailResults from './components/DadriAcademicsThumbnailResults';
import DadriTableResultData from './components/DadriTableResultData';

// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });

const Results = () => {
  const [selectedBranch, setSelectedBranch] = useState('noida'); // Default is Noida branch

  useEffect(() => {
    // Initialize WOW.js on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const renderBranchResults = () => {
    switch (selectedBranch) {
      case 'noida':
        return (
          <>
            <NoidaIITThumbnailResults />  {/* Noida specific result */}
            <NoidaAcademicsThumbnailResults />  {/* Noida specific result */}
            <NoidaTableResultData />          {/* Noida specific result */}
            <NoidaStupendousResults />       {/* common result */}
          </>
        );
      case 'dadri':
        return (
          <>
            <DadriIITThumbnailResults />  {/* Dadri specific result */}
            <DadriAcademicsThumbnailResults />  {/* Dadri specific result */}
            <DadriTableResultData />       {/* Dadri specific result */}
            <NoidaStupendousResults /> {/* common result */}
          </>
        );
      case 'noida-extension':
      case 'greater-noida':
        return (
          <div className="coming-soon-message">
            <h3>Coming Soon...</h3>
            <p>Results for this branch are coming soon. Stay tuned!</p>
          </div>
        );
      default:
        return <div>Select a branch to view results.</div>;
    }
  };

  // const renderBranchResults = () => {
  //   switch (selectedBranch) {
  //     case 'noida':
  //       return (
  //         <>
  //           <NoidaIITAcademicsThumbnailResults />
  //           <NoidaTableResultData />
  //           <NoidaStupendousResults /> 
  //         </>
  //       );
  //     case 'noida-extension':
  //     case 'greater-noida':
  //     case 'dadri':
  //       return (
  //         <div className="coming-soon-message">
  //           <h3>Coming Soon...</h3>
  //           <p>Results for this branch are coming soon. Stay tuned!</p>
  //         </div>
  //       );
  //     default:
  //       return <div>Select a branch to view results.</div>;
  //   }
  // };

  return (
    <>
      <Head>
        <title>Results | Ramagya School</title>
        <meta name="description" content="Results" />
        <meta name="keywords" content="Results" />
        <link rel="canonical" href="https://ramagyaschool.com/results" />
      </Head>
      <Header />

      {/* Main banner section of the page */}
      <section className="section banner-sec gallery-award-testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1 className="wow animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>
                  Results!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResultAwardsTestimonialsGalleryPageScrollSpyMenu />

      {/* Branch Filter Section */}
      <section className="section filter-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="filter-text text-center">
                <h2 className='fw-100'>Select a branch</h2>
                {/* <p>Select a branch below to view the results specific to that location.</p> */}

                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="form-control branch-selector"
                >
                  <option value="noida">Noida</option>
                  <option value="noida-extension">Noida Extension</option>
                  <option value="greater-noida">Greater Noida</option>
                  <option value="dadri">Dadri</option>
                </select>


              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Render results based on selected branch */}
      {renderBranchResults()}  {/* Render the results based on selected branch */}
      <FooterNoida />
    </>
  );
};

export default Results;
