// Alumni success story data from static
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlumniStudentSuccessStories = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__zoomIn");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const WOWJS = require("wowjs");
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const achievements = [
    { name: "Shriya Deshpande", batch: "Ramagya School, Batch 2012", img: "/images/lead/shriya.webp", role: "Coordinator, Industry Interaction Cell @ IIM Jammu",  degree: "MBA", education: "IBS Hyderabad", },
    { name: "Kshitij Majji", batch: "Ramagya School, Batch - 2020", img: "/images/lead/kshitij.webp", role: "Chief Editor @ UPES AAPG Student Chapter", degree: "BTech", education: "Petroleum Engineering - UPES" },
    { name: "Anusha Deshmukh", batch: "Ramagya School, Batch - 2018", img: "/images/lead/anusha.webp", role: "Communications Lead @ Daftee Foundation", degree: "MSc", education: "University of York" },
    { name: "Nishant Vimal", batch: "Ramagya School, Batch - 2017", img: "/images/lead/nishant.webp", role: "Legal Clerk @ High Commission of India in London", degree: "LLM", education: "University of Westminster" },
    { name: "Prashant Yadav", batch: "Ramagya School, Batch - 2016", img: "/images/lead/prasant.webp", role: "Associate Analyst @ GlobalLogic", degree: "BTech", education: "GL Bajaj Institute of Tech and Management" },
    { name: "Hitesh Mandhan", batch: "Ramagya School, Batch - 2017", img: "/images/lead/hitesh.webp", role: "Product Owner @ ResponsiveB", degree: "BTech", education: "Vellore Institute of Technology" },
    { name: "Gaurvi Sharma", batch: "Ramagya School, Batch - 2012", img: "/images/lead/gauravi.webp", role: "Growth Product Marketing @ Airtel Digital", degree: "MBA", education: "IBS Hyderabad" },
    { name: "Gaurav Arora", batch: "Ramagya School, Batch - 2013", img: "/images/lead/gaurav.webp", role: "SDE II @ Amazon", degree: "MTech", education: "IIT Madras" },
  ];

  return (
    <div className="learn">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 position-r">
          <div className="text-center mb-4">
              <h2 className="alumni-main-section-heading">Success Stories</h2>
              <p className="">
                Here are some notable alumni who are out there making their dreams come true and making us proud too!
              </p>
            </div>

            <Slider {...settings}>
              {achievements.map((item, index) => (
                <div key={index} className="col-md-4 mx-0">
                  <div className="card shadow-sm border-1 text-center p-1" style={{ maxWidth: "380px", borderRadius: "10px" }}>
                    <div className="mx-auto rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" }}>
                      <Image src={item.img} alt={item.name} width={100} height={100} className="img-fluid" id="alumni-profile-img" />
                    </div>
                    <h6 className="mt-3 fw-bold" style={{ textAlign: "center" }}>{item.name}</h6>
                    <hr className="mx-auto" style={{ width: "100%" }} />
                    <div className="text-start-alumni px-2">
                      <p className="d-flex align-items-center"><i className="bi bi-building fs-5 me-2"></i> {item.batch}</p>
                      <p className="d-flex align-items-center"><i className="bi bi-mortarboard fs-5 me-2"></i> {item.degree}</p>
                      <p className="d-flex align-items-center"><i className="bi bi-award fs-5 me-2"></i> {item.education}</p>
                      <p className="d-flex align-items-left" style={{textAlign:"left"}}><i className="bi bi-briefcase fs-5 me-2"></i> {item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* <div className="d-flex justify-content-center align-items-center mt-2 gap-3">
              <div className="learn-more-button">
                <a href="alumni-guidance">Alumni Guidance</a>
              </div>
              <div className="learn-more-button">
                <a href="success-stories">Success Stories</a>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniStudentSuccessStories;

// Below the Success story code coming from API
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const AlumniStudentSuccessStories = () => {
//   const [alumni, setAlumni] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_URL = "https://ags.univariety.com/common/v1/schoolapi/alumni-profile-card-notable";
//   const API_KEY = "VRvgV1oM2NlXhB3h"; 

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             "api-key": API_KEY,
//             "Content-Type": "application/json"
//           }
//         });

//         setAlumni(response.data?.data || []);
//       } catch (error) {
//         setError("Failed to load success stories. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlumni();
//   }, []);

//   if (loading) return <center><h2 className="py-5">Loading Success Stories...</h2></center>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   const sliderSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <div className="container">
//       <div className="text-center mb-4">
//         <h2 className="alumni-main-section-heading">Success Stories</h2>
//         <p className="">
//           Here are some notable alumni who are out there making their dreams come true and making us proud too!
//         </p>
//       </div>

     
//       <Slider {...sliderSettings}>
//         {alumni.map((item, index) => (
//           <div key={item.id || index} className="col-md-4 mx-0">
//             <div className="card shadow-sm border-1 text-center p-1" style={{ maxWidth: "380px", borderRadius: "10px" }}>
//               <div className="mx-auto rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" }}>
//                 <Image
//                   src={item.image_path || "/default-profile.png"} 
//                   alt={item.full_name || "Unknown Alumni"}
//                   width={100}
//                   height={100}
//                   className="img-fluid"
//                   id="alumni-profile-img"
//                 />
//               </div>
//               <h6 className="mt-3 fw-bold" style={{ textAlign: "center" }}>{item.full_name || "N/A"}</h6>
//               <hr className="mx-auto" style={{ width: "100%" }} />
//               <div className="text-start-alumni px-2">
//                 <p className="d-flex align-items-center"><i className="bi bi-building fs-5 me-2"></i>Ramagya School, Batch {item.pass_out_year || "N/A"}</p>
//                 <p className="d-flex align-items-center"><i className="bi bi-mortarboard fs-5 me-2"></i> {item.institue_name || "N/A"}</p>
//                 <p className="d-flex align-items-center"><i className="bi bi-award fs-5 me-2"></i> {item.department || "N/A"}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default AlumniStudentSuccessStories;
