import React from "react";
import Image from "next/image";

const PartnershipInfoWithDetail = () => {
  // Data for the cards
  const cardData = [
    {
      img: "/images/partnership/1.png",
      text: "1",
    },
    {
      img: "/images/partnership/2.png",
      text: "1",
    },
    {
      img: "/images/partnership/3.png",
      text: "1",
    },
    {
      img: "/images/partnership/4.png",
      text: "1",
    },
    {
      img: "/images/partnership/5.png",
      text: "1",
    },
    {
      img: "/images/partnership/6.png",
      text: "1",
    },
    {
      img: "/images/partnership/7.png",
      text: "1",
    },
    {
      img: "/images/partnership/8.png",
      text: "1",
    },
    {
      img: "/images/partnership/9.png",
      text: "1",
    },
    {
      img: "/images/partnership/10.png",
      text: "1",
    },
    {
      img: "/images/partnership/11.png",
      text: "1",
    },
    {
      img: "/images/partnership/12.png",
      text: "1",
    },
    {
      img: "/images/partnership/13.png",
      text: "1",
    },
    {
      img: "/images/partnership/14.png",
      text: "1",
    },
    {
      img: "/images/partnership/15.png",
      text: "1",
    },
    {
      img: "/images/partnership/16.png",
      text: "1",
    },
    {
      img: "/images/partnership/17.png",
      text: "1",
    },
    {
      img: "/images/partnership/18.png",
      text: "1",
    },
    {
      img: "/images/partnership/19.png",
      text: "1",
    },
    {
      img: "/images/partnership/20.png",
      text: "1",
    },
    {
      img: "/images/partnership/21.png",
      text: "1",
    },
    {
      img: "/images/partnership/22.png",
      text: "1",
    },
    {
      img: "/images/partnership/23.png",
      text: "1",
    },
    {
      img: "/images/partnership/24.png",
      text: "1",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3 col-6 mb-4">
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="card text-center h-100 border-1">
                <div className="card-value-body">
                  <Image src={card.img} alt="icon" width={350} height={100} />
                  {/* <h6 className="mt-20">{card.text}</h6> */}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipInfoWithDetail;
