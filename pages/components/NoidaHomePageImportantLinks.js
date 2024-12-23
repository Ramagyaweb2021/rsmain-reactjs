import React from "react";
import Image from "next/image";

const NoidaHomePageImportantLinks = () => {
  // Data for the cards
  const cardData = [
    {
      img: "/images/noida/important-link/icon-1.webp",
      text: "Admission",
      link: "/noida/pre-admission",
    },
    {
      img: "/images/noida/important-link/icon-2.webp",
      text: "School Tour",
      link: "https://vtour.ramagyaschool.com/",
    },
    {
      img: "/images/noida/important-link/icon-3.webp",
      text: "Download Prospectus",
      link: "https://drive.google.com/file/d/1LhGZxY_CVnN_w20iQQ7UD1aaQCelFUAY/view?usp=sharing",
    },
    {
      img: "/images/noida/important-link/icon-4.webp",
      text: "Pay Fees",
      link: "/noida/pay-school-fees",
    },
    // {
    //   img: "/images/noida/important-link/icon-5.webp",
    //   text: "School Life",
    //   link: "#",
    // },
    {
      img: "/images/noida/important-link/icon-6.webp",
      text: "Parent's",
      link: "/noida/parents",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-2 col-6 mb-4">
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="card text-center h-100 border-1">
                <div className="card-value-body">
                  <Image src={card.img} alt="icon" width={50} height={50} />
                  <h6 className="mt-20">{card.text}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoidaHomePageImportantLinks;
