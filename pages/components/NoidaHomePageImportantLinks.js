import React from "react";
import Image from "next/image";

const NoidaHomePageImportantLinks = () => {
  // Data for the cards
  const cardData = [
    {
      img: "/images/noida/important-link/icon-1.png",
      text: "Admission",
      link: "https://forms.edunexttechnologies.com/forms/ramagyanoida/Registration-new/",
    },
    {
      img: "/images/noida/important-link/icon-2.png",
      text: "School Tour",
      link: "https://vtour.ramagyaschool.com/",
    },
    {
      img: "/images/noida/important-link/icon-3.png",
      text: "Download Prospectus",
      link: "https://ramagyaschool.com/noida/assets/pdf/Ramagya-School-Brochure.pdf",
    },
    {
      img: "/images/noida/important-link/icon-4.png",
      text: "Pay Fees",
      link: "https://ramagyanoida.edunexttechnologies.com/DirectStudentOnlineFee",
    },
    {
      img: "/images/noida/important-link/icon-5.png",
      text: "School Life",
      link: "school-life",
    },
    {
      img: "/images/noida/important-link/icon-6.png",
      text: "Parents’ Speak",
      link: "testimonials",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-2 mb-4">
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
