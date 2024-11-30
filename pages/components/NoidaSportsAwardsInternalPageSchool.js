import React from 'react';
import Image from 'next/image';

export const NoidaSportsAwardsInternalPageSchool = () => {
  const awards = [
    { name: 'Sport 1', img: '/images/awards/sport1.png' },
    { name: 'Sport 2', img: '/images/awards/sport2.png' },
    { name: 'Sport 3', img: '/images/awards/sport3.png' },
    { name: 'Sport 4', img: '/images/awards/sport4.png' },
    { name: 'Sport 5', img: '/images/awards/sport5.png' },
    { name: 'Sport 6', img: '/images/awards/sport6.png' },
    { name: 'Sport 7', img: '/images/awards/sport7.png' },
    { name: 'Sport 8', img: '/images/awards/sport8.png' },
    { name: 'Sport 9', img: '/images/awards/sport9.png' },
    { name: 'Sport 10', img: '/images/awards/sport10.png' },
    { name: 'Sport 11', img: '/images/awards/sport11.png' },
    { name: 'Sport 12', img: '/images/awards/sport12.png' }
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
