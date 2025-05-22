import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const branches = [
  {
    title: 'Noida',
    image: '/images/branch/rs-noida-branch.webp',
    alt: 'Ramagya School Noida',
    website: 'https://ramagyaschool.com/noida',
    tour: 'https://vtour.ramagyaschool.com/'
  },
  {
    title: 'Noida Extension',
    image: '/images/branch/rs-noida-ext-branch.webp',
    alt: 'Ramagya School Noida Extension',
    website: 'https://ramagyaschool.com/noida-extension',
    tour: 'https://vtourext.ramagyaschool.com/'
  },
  {
    title: 'Greater Noida',
    image: '/images/branch/rs-gnoida-branch.webp',
    alt: 'Ramagya School Greater Noida',
    website: 'https://ramagyaschool.com/greater-noida',
    tour: 'https://vtourgnoida.ramagyaschool.com/'
  },
  {
    title: 'Dadri',
    image: '/images/branch/rs-dadri-branch.webp',
    alt: 'Ramagya School Dadri',
    website: 'https://ramagyaschool.com/dadri',
    tour: 'https://tourdadri.ramagyaschool.com/'
  }
];

const HomeSchoolBranchSection = () => {
  return (
    <div className="learn">
      <div className="container my-custom-campuses">
        <h1 className="main-heading">
          OUR CAMPUSES
          <span className="lineclass" />
          <span className="sub-heading animate-on-scroll">
            Explore Our campuses
          </span>
        </h1>
        <p className="scrollspy-p-0">
          Fostering holistic development with innovative education, experienced faculty, and a vibrant learning environment. Excellence in education awaits..
        </p>

        <div className="row g-3 mt-3">
          {branches.map((branch, index) => (
            <div className="col-lg-3 col-md-3 col-sm-6 col-6" key={index}>
              <div className="card school-card h-100">
                <Image
                  src={branch.image}
                  alt={branch.alt}
                  width={550}
                  height={150}
                  // layout="responsive"
                  sizes="(max-width: 768px) 100vw, 550px"
                  // placeholder="blur"
                  // blurDataURL="/images/rs-gnoida-branch-lowres.webp"
                  className="home-branch-images card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{branch.title}</h5>
                </div>
                <div className="school-branch-buttions">
                  <div className="visit-web-button">
                    <Link href={branch.website} target="_blank" className="btn btn-warning">Visit Website</Link>
                  </div>
                  <div className="visit-tour-button">
                    <Link href={branch.tour} target="_blank" className="btn btn-warning">360 Tour</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeSchoolBranchSection;
