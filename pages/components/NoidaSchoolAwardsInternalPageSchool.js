import React from 'react';
import Image from 'next/image';

export const NoidaSchoolAwardsInternalPageSchool = () => {
  const awards = [
    { name: 'Times School Survey 2024', img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/times-school-survery-2024.webp' },
    { name: 'Award 1', img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/1.webp' },
    { name: 'Award 2', img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/2.webp' },
    { name: 'Award 3', img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/3.webp' },
    { name: 'Award 4', img: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/4.webp' },
    { name: 'India Today Leaf', img: '/images/awards/india-today-leaf.webp' },
    { name: 'Education Icon 2024', img: '/images/awards/education-icon-2024.webp' },
    { name: 'Radio City', img: '/images/awards/radio-city.webp' },
    { name: 'Outlook 1', img: '/images/awards/outlook-1.webp' },
    { name: 'Outlook 2', img: '/images/awards/outlook-2.webp' },
    { name: 'HRAI', img: '/images/awards/hrai.webp' },
    { name: 'Education Today', img: '/images/awards/education-today.webp' },
    { name: 'Pre School', img: '/images/awards/pre-school.webp' },
    { name: 'Excellence in Sports', img: '/images/awards/excellence-in-sports.webp' },
    { name: 'ECC', img: '/images/awards/ecc.jpg' },
    { name: 'Award Level 1', img: '/images/awards/award-l1.jpg' },
    { name: 'Award Level 2', img: '/images/awards/award-l2.jpg' },
    { name: 'Award Level 3', img: '/images/awards/award-l3.jpg' },
    { name: 'Award Level 4', img: '/images/awards/award-l4.jpg' },
    { name: 'Award Level 5', img: '/images/awards/award-l5.jpg' },
    { name: 'Award Level 6', img: '/images/awards/award-l6.jpg' },
    { name: 'Ranked 04', img: '/images/awards/ranked-04-1.webp' },
    { name: 'Ranked 08', img: '/images/awards/ranked-08.webp' },
    { name: 'Award 2', img: '/images/awards/award2.webp' },
    { name: 'Award 1', img: '/images/awards/award1.webp' },
    { name: 'Award 5', img: '/images/awards/award5.webp' },
    { name: 'Award 6', img: '/images/awards/award6.webp' },
    { name: 'Award 7', img: '/images/awards/award7.webp' },
    { name: 'Award 8', img: '/images/awards/award8.webp' },
    { name: 'Award 9', img: '/images/awards/award9.webp' },
    { name: 'Award 10', img: '/images/awards/award10.webp' },
    { name: 'Award 11', img: '/images/awards/award11.webp' },
    { name: 'Award 13', img: '/images/awards/award13.webp' },
    { name: 'Award 14', img: '/images/awards/award14.webp' },
    { name: 'Award 16', img: '/images/awards/award16.webp' },
    { name: 'Award 17', img: '/images/awards/award17.webp' },
    { name: 'Award 18', img: '/images/awards/award18.webp' },
    { name: 'Award 19', img: '/images/awards/award19.webp' },
    { name: 'Award 20', img: '/images/awards/award20.webp' },
    { name: 'Award 21', img: '/images/awards/award21.webp' },
    { name: 'Award 22', img: '/images/awards/award22.webp' },
    { name: 'Award 23', img: '/images/awards/award23.webp' },
    { name: 'Award 24', img: '/images/awards/award24.webp' },
    { name: 'Award 25', img: '/images/awards/award25.webp' },
    { name: 'Award 26', img: '/images/awards/award26.webp' },
    { name: 'Award 27', img: '/images/awards/award27.webp' },
    { name: 'Award 28', img: '/images/awards/award28.webp' },
    { name: 'Award 29', img: '/images/awards/award29.webp' },
    { name: 'Award 30', img: '/images/awards/award30.webp' },
    { name: 'Award 31', img: '/images/awards/award31.webp' },
    { name: 'Award 32', img: '/images/awards/award32.webp' },
    { name: 'Award 33', img: '/images/awards/award33.webp' },
    { name: 'Award 34', img: '/images/awards/award34.webp' },
    { name: 'Award 3', img: '/images/awards/award3.webp' },
    { name: 'Award 4', img: '/images/awards/award4.webp' }
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
export default NoidaSchoolAwardsInternalPageSchool;
