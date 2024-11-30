import React from 'react';
import Image from 'next/image';

const initiatives = [
  {
    title: "Health",
    imageSrc: "/images/ramagya-foundation/health.png",
    video: "https://www.youtube.com/embed/xkDrHZcrhfg",
    link: "https://ramagyafoundation.org/health/"
  },
  {
    title: "Education Video",
    imageSrc: "/images/ramagya-foundation/education.png",
    video: "https://www.youtube.com/embed/T9A332dY1oo", 
    link: "https://ramagyafoundation.org/education/"
  },
  {
    title: "Education Video",
    imageSrc: "/images/ramagya-foundation/education.png",
    video: "https://www.youtube.com/embed/T8DsS-rDr0k", 
    link: "https://ramagyafoundation.org/education/"
  },
  {
    title: "Education Video",
    imageSrc: "/images/ramagya-foundation/education.png",
    video: "https://www.youtube.com/embed/de_BXRJQF4o", 
    link: "https://ramagyafoundation.org/education/"
  },
  {
    title: "Education Video",
    imageSrc: "/images/ramagya-foundation/education.png",
    video: "https://www.youtube.com/embed/h90p1IQbZrQ", 
    link: "https://ramagyafoundation.org/education/"
  },
  {
    title: "Education Video",
    imageSrc: "/images/ramagya-foundation/education.png",
    video: "https://www.youtube.com/embed/KH9VVUezad8", 
    link: "https://ramagyafoundation.org/education/"
  },
];

export default function GlimpseOfTheVideos() {
  return (
    <div className="container main-container my-5">
      <h2 className="main-heading-internal-pages text-center my-5">GLIMPSE OF THE VIDEOS</h2>
      <div className="row">
        {initiatives.map((initiative, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              {initiative.video ? (
                <iframe
                  className="card-img-top"
                  width="100%"
                  height="250"
                  src={initiative.video}
                  title={initiative.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image 
                  src={initiative.imageSrc} 
                  className="card-img-top" 
                  alt={initiative.title} 
                  width={250} 
                  height={250}
                />
              )}
              {/* <div className="card-body-ramagya-foundation-our-initiative">
                <h5 className="card-title text-dark">{initiative.title}</h5>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
