import React from "react";
import Image from "next/image";

const NoidaHomePageInfographics = () => {
  // Data for the cards
  const cardData = [
    {
      img: "/images/noida/infographics/icon-1.webp",
      value: "30,000+",
      text: "Students",
    },
    {
      img: "/images/noida/infographics/icon-2.webp",
      value: "350+",
      text: "Educators",
    },
    {
      img: "/images/noida/infographics/icon-3.webp",
      value: "4",
      text: "Branches",
    },
    {
      img: "/images/noida/infographics/icon-4.webp",
      value: "20+",
      text: "Years",
    },
    {
      img: "/images/noida/infographics/icon-5.webp",
      value: "35+",
      text: "Sports",
    },
    {
      img: "/images/noida/infographics/icon-6.webp",
      value: "20+",
      text: "Sister Concern",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center h-100 border-1">
              <div className="card-value-body">
                <Image src={card.img} alt="icon" width={80} height={80} />
                <h3>{card.value}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoidaHomePageInfographics;
