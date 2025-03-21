import React from "react";
import Image from "next/image";

const DadriHomePageImportantLinks = () => {
  // Data for the cards
  const cardData = [
    {
      img: "/images/noida/important-link/icon-1.webp",
      text: "Admission",
      link: "/dadri/pre-admission",
    },
    {
      img: "/images/noida/important-link/icon-2.webp",
      text: "School Tour",
      link: "https://tourdadri.ramagyaschool.com/",
    },
    {
      img: "/images/noida/important-link/icon-3.webp",
      text: "Download Prospectus",
      link: "https://drive.google.com/file/d/1yFdk76bEV1uqzmod42vXPuLTsxawT-Nx/view?usp=sharing",
    },
    {
      img: "/images/noida/important-link/icon-4.webp",
      text: "Pay Fees",
      link: "/dadri/pay-school-fees",
    },
    // {
    //   img: "/images/noida/important-link/icon-5.webp",
    //   text: "School Life",
    //   link: "#",
    // },
    {
      img: "/images/noida/important-link/icon-6.webp",
      text: "Parent's",
      link: "/dadri/parents",
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

export default DadriHomePageImportantLinks;
