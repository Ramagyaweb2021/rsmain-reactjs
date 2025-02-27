import React from 'react';
import Image from 'next/image';

export const NoidaPreSchoolAwardsInternalPageSchool = () => {
  const awards = [
    { name: 'Pre 1', img: '/images/awards/pre1.webp' },
    { name: 'Pre 2', img: '/images/awards/pre2.webp' },
    { name: 'Pre 3', img: '/images/awards/pre3.webp' },
    { name: 'Pre 4', img: '/images/awards/pre4.webp' },
    { name: 'Pre 5', img: '/images/awards/pre5.webp' },
    { name: 'Pre 6', img: '/images/awards/pre6.webp' },
    { name: 'Pre 7', img: '/images/awards/pre7.webp' },
    { name: 'Pre 8', img: '/images/awards/pre8.webp' },
    { name: 'Pre 9', img: '/images/awards/pre9.webp' }
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
export default NoidaPreSchoolAwardsInternalPageSchool;
