import React from "react";
import Image from "next/image";

const NoidaExtensionParentsMenu = () => {
  // Data for the cards
  const cardData = [
    // {
    //   img: "/images/branch-parent-link-img/principal-office-help-desk.webp",
    //   text: "Principal's Office Helpdesk",
    //   link: "https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbz7D1NDSiklPX1REBEPrDyIboRRvL1A4xMO59ryDjQZ0fdvf4iCo4IXWoUJg7HupaID/exec",
    // },
    // {
    //   img: "/images/branch-parent-link-img/teacher-call-appointment.webp",
    //   text: "Teacher's Call Appointment form",
    //   link: "https://script.google.com/a/macros/ramagyagroup.com/s/AKfycbz7D1NDSiklPX1REBEPrDyIboRRvL1A4xMO59ryDjQZ0fdvf4iCo4IXWoUJg7HupaID/exec",
    // },
    {
      img: "/images/branch-parent-link-img/book-an-appointment.webp",
      text: "Book an Appointment",
      link: "/noida-extension/book-appointment",
    },
    // {
    //   img: "/images/branch-parent-link-img/relationship-manager.webp",
    //   text: "Relationship Manager Appointment",
    //   link: "/noida-extension/relationship-manager",
    // },
    {
      img: "/images/branch-parent-link-img/parent-portal-guide.webp",
      text: "Parent Portal Guide",
      link: "/noida-extension/parent-portal-guide",
    },
    {
      img: "/images/branch-parent-link-img/edunext-erp-login.webp",
      text: "Edunext ERP Login",
      link: "https://ramagyanoida.edunexttechnologies.com/Index",
    },
    {
      img: "/images/branch-parent-link-img/pay-school-fee.webp",
      text: "Fees Payment",
      link: "/noida-extension/pay-school-fees",
    },
    {
      img: "/images/branch-parent-link-img/parent-schoo-association.webp",
      text: "Parent School Association",
      link: "/noida-extension/parents-school-associations",
    },
    {
      img: "/images/branch-parent-link-img/parent-teacher-meeting.webp",
      text: "Parents Teachers Meeting",
      link: "/noida-extension/parents-teacher-meeting",
    },
    {
      img: "/images/branch-parent-link-img/tc.webp",
      text: "Transfer Certificate (TC)",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSetRHj5jncfezq6SDYOSPXcp6vVnLaH6TzaoEgEq440F_gX9w/viewform",
      // link: "https://docs.google.com/forms/d/e/1FAIpQLSetRHj5jncfezq6SDYOSPXcp6vVnLaH6TzaoEgEq440F_gX9w/viewform",
    },
    // {
    //   img: "/images/branch-parent-link-img/fee-rules-and-cancellation-policy.webp",
    //   text: "Fee Rules And Cancellation Policy",
    //   link: "/noida-extension/fee-rules-cancellation-policy",
    // },
    // {
    //   img: "/images/branch-parent-link-img/meal.webp",
    //   text: "Meal Facility Form",
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform",
    // },
    // {
    //   img: "/images/branch-parent-link-img/meal.webp",
    //   text: "Meal Facility Form",
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLSecxbpsmMnGjMICXQ8xSckAJY4wtwg6WwRcHQ_Dxw-wdO7YuA/viewform",
    // },
    {
      img: "/images/branch-parent-link-img/parents-couselling.webp",
      text: "Parent Counselling",
      link: "/noida-extension/parents-counselling",
    },
    // {
    //   img: "/images/branch-parent-link-img/recommend.webp",
    //   text: "Recommend A Student",
    //   link: "/noida-extension/recommend-a-student",
    // },
    // {
    //   img: "/images/branch-parent-link-img/scholarship-programme.webp",
    //   text: "Scholarship Programme",
    //   link: "/noida-extension/scholarship-programme",
    // },
    {
      img: "/images/branch-parent-link-img/transport.webp",
      text: "Transport",
      link: "/noida-extension/transport",
    },
    {
      img: "/images/branch-parent-link-img/parents-feedback.webp",
      text: "Parent’s Feedback",
      link: "/noida-extension/parents-feedback",
    },
    {
      img: "/images/branch-parent-link-img/earlylate-child-pickup-system.webp",
      text: "Early Late Child Pickup System",
      link: "/noida-extension/early-late-child-pickup",
    },
    // {
    //   img: "/images/branch-parent-link-img/student-discount-rsa.webp",
    //   text: "Student Discount at Ramagya Sports Academy",
    //   link: "/noida-extension/student-discount-rsa",
    // },
    // {
    //   img: "/images/branch-parent-link-img/edunxt-login-app.webp",
    //   text: "Univariety Login",
    //   link: "/noida-extension//univariety-login",
    // },
    {
      img: "/images/branch-parent-link-img/book-list.webp",
      text: "Books List",
      link: "/noida-extension//book-list",
    },
  ];

  return (
    <div className="container my-5">
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

export default NoidaExtensionParentsMenu;
