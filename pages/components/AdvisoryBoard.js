// Add this code in your Next.js component file, e.g., components/AdvisoryBoard.js
import React from "react";
import Image from "next/image";
const AdvisoryBoard = () => {
  const members = [
    {
      name: "Mr. Ashok Dhyan Chand",
      designation: "Son of hockey legend Major Dhyan Chand Olympic bronze medallist three-time Asian Games silver medalist",
      details: "Arjuna Award (1974) and the Major Dhyan Chand Lifetime Achievement Award (2024)",
      image: "/images/advisory-board/ashok-dhyan-chand.png",
    },
    {
      name: "Dr. Sanjay Bharadwaj",
      designation: "Dronacharya Awardee (2019) Founder of the LB Shastri Cricket Academy, Coached India’s U-15 World Cup-winning team (1996) and Delhi’s senior team (2010-11)",
      details: " Ph.D. in Physical Education and a BCCI Level 3 Certification.",
      image: "/images/advisory-board/sanjay-bhardwaj.png",
    },
    {
      name: "DR MAN HEE LEE",
      designation: "Founding Chairman & President – Heavenly Culture, World Peace, Restoration of Light (HWPL)",
      details: "Director – World Alliance of Religions’ Peace (WARP) Office",
      image: "/images/advisory-board/1.png",
    },
    {
      name: "MS NAM HEE KIM",
      designation: "Chairwoman – International Women’s Peace Group (IWPG)",
      details: "Representative of IRU for Korea",
      image: "/images/advisory-board/2.png",
    },
    {
      name: "DR. MANJIT SING G.K.",
      designation: "Chairman – Guru Harkrishan Public School",
      details: "Former President – Delhi Sikh Gurdwara Management Committee (DSGMC)",
      image: "/images/advisory-board/3.png",
    },
    {
      name: "SHRI SANDEEP MARWAH",
      designation: "Founder Director – Asian Academy of Film & Television (AAFT)",
      details: "Founder – Noida Film City & Marwah Studios",
      image: "/images/advisory-board/4.png",
    },
    {
      name: "DR SUSHIL KUMAR RAJPUT",
      designation: "Chairman – Noida College of Physical Education",
      details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/5.png",
    },
    {
      name: "SHRI SOM DUTT DIXIT",
      designation: "Secretary General & Director, Training Projects – HWorld Association of Value Education",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/6.png",
    },
    {
      name: "SHRI PRASHANT KUMAR MISHRA",
      designation: "IAS, Former Chief Secretary – Govt. of Uttar PradeshDirector, Youth Affairs | Chairman, Indian Potash Limited",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/7.png",
    },
    {
      name: "AVM VISHWA MOHAN TIWARI",
      designation: "Retired Air Vice Marshal – Indian Air Force Renowned Author, Environmentalist, and Educationist",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/8.png",
    },
    {
      name: "SHRI VP KHANDURIE",
      designation: "Former Assistant Director of Education, DelhiRenowned Educator and Author",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/9.png",
    },
    {
      name: "SHRI PC BOSE",
      designation: "Former Deputy Director of Education Distinguished Educator and Administrator",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/10.png",
    },
    {
      name: "SHRI BR BHANDULA",
      designation: "Management Educationist, Author, Orator, Poet, Film and AIR Programs Producer",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/11.png",
    },
    {
      name: "DR BALRAM SINGH",
      designation: "Director, Botulinum Research Center, Institute of Advanced Sciences, Dartmouth, MassachusettsFounder, Indic Center at University of Massachusetts, Dartmouth",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/12.png",
    },
    {
      name: "DR KUSUMAKAL SUKULA",
      designation: "Retired Defense DRDO Scientist",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/13.png",
    },
    {
      name: "MS. PERCILLA HERRERA",
      designation: "DIRECTOR OF OUTREACH David Lynch Foundation, NYC, U.S.A.",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/14.png",
    },
    {
      name: "MR. MARTIN STIPANOV",
      designation: "INTERNATIONAL FACULTY Foundation of Vedic Science & Technology, India",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/15.png",
    },
    {
      name: "MR. G.C. SHARMA",
      designation: "ARBITRATOR Appointed by the Govt. of NCT Delhi",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/16.png",
    },
    {
      name: "MR. DANIEL ZARETSKY",
      designation: "CO-FOUNDER & DIRECTOR Canada University Application Center",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/17.png",
    },
    {
      name: "MR. ASHLEY DEANS",
      designation: "EXECUTIVE DIRECTOR Maharishi School of the Age of Enlightenment",
      // details: "President – U.P. Touch Rugby & Kurash Associations",
      image: "/images/advisory-board/18.png",
    },
    // Add all other members here with their respective details
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">ADVISORS</h2>
      <div className="row">
        {members.map((member, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center">
              <div className="card-value-body">
              <Image
                src={member.image}
                alt={member.name}
                className="img-fluid-1 rounded-circle mb-3"
                width={100}
                height={100}
                priority
                // style={{ width: "100px", height: "100px" }}
              />
                <h6 className="advisory-name">{member.name}</h6>
                {/* <hr/> */}
                <p className="card-text mb-0">
                 {member.designation}
                </p>
                <p className="card-text">{member.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
