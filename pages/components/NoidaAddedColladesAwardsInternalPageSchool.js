import React from 'react';
import Image from 'next/image';

export const NoidaAddedColladesAwardsInternalPageSchool = () => {
  const awards = [
    { name: 'Acco 1', img: '/images/awards/acco1.png' },
    { name: 'Acco 2', img: '/images/awards/acco2.png' },
    { name: 'Acco 3', img: '/images/awards/acco3.png' },
    { name: 'Acco 4', img: '/images/awards/acco4.png' },
    { name: 'Acco 5', img: '/images/awards/acco5.png' },
    { name: 'Acco 6', img: '/images/awards/acco6.png' },
    { name: 'Acco 7', img: '/images/awards/acco7.png' },
    { name: 'Acco 8', img: '/images/awards/acco8.png' },
    { name: 'Acco 9', img: '/images/awards/acco9.png' },
    { name: 'Acco 10', img: '/images/awards/acco10.png' },
    { name: 'Acco 11', img: '/images/awards/acco11.png' },
    { name: 'Acco 12', img: '/images/awards/acco12.png' },
    { name: 'Acco 13', img: '/images/awards/acco13.png' },
    { name: 'Acco 14', img: '/images/awards/acco14.png' },
    { name: 'Acco 15', img: '/images/awards/acco15.png' },
    { name: 'Acco 16', img: '/images/awards/acco16.png' },
    { name: 'Acco 17', img: '/images/awards/acco17.png' },
    { name: 'Acco 18', img: '/images/awards/acco18.png' },
    { name: 'Acco 19', img: '/images/awards/acco19.png' },
    { name: 'Acco 20', img: '/images/awards/acco20.png' },
    { name: 'Acco 21', img: '/images/awards/acco21.png' }
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
