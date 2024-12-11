import React from 'react';
import Image from 'next/image';

export const NoidaSportsAwardsInternalPageSchool = () => {
  const awards = [
    { name: 'Sport 1', img: '/images/awards/sport1.webp' },
    { name: 'Sport 2', img: '/images/awards/sport2.webp' },
    { name: 'Sport 3', img: '/images/awards/sport3.webp' },
    { name: 'Sport 4', img: '/images/awards/sport4.webp' },
    { name: 'Sport 5', img: '/images/awards/sport5.webp' },
    { name: 'Sport 6', img: '/images/awards/sport6.webp' },
    { name: 'Sport 7', img: '/images/awards/sport7.webp' },
    { name: 'Sport 8', img: '/images/awards/sport8.webp' },
    { name: 'Sport 9', img: '/images/awards/sport9.webp' },
    { name: 'Sport 10', img: '/images/awards/sport10.webp' },
    { name: 'Sport 11', img: '/images/awards/sport11.webp' },
    { name: 'Sport 12', img: '/images/awards/sport12.webp' }
];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {awards.map((award, index) => (
          <div key={index} className="col-lg-3 col-md-3 col-6 mb-4">
            <div className="awards-item">
              <div className="image-container-awards" style={{border:"0 solid rgb(0 0 0 / 2%)", boxShadow:"0 4px 8px rgb(0 0 0 / 5%)"}}>
                <Image
                  src={award.img}
                  alt={award.name}
                  className="awards-image"
                  width={250}
                  height={250}
                />
              </div>
              {/* <br></br> */}
              {/* <div className="awards-content">
                <h6 className="awards-name-heading text-center">{award.name}</h6>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NoidaSportsAwardsInternalPageSchool;
