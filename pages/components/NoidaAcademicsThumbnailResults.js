import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const NoidaIITThumbnailResults = () => {
  const [activeYear, setActiveYear] = useState("2024-25");

  const years = ["2023-24", "2024-25"];

  // Data for categories
  const categories = [
    {
      heading: "ACADEMIC RESULTS – CLASS 12",
      subtitle: "LEADERS OF TOMORROW!",
      toppers: {
        "2023-24": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/3.webp",
        ],
        "2024-25": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/3.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/4.webp",     
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/5.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/6.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2024-2025/7.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/3.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/4.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/5.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/6.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/7.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/8.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/9.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/10.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/11.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/12th-class-toppers/12.webp",
        ],
      },
    },
    {
      heading: "ACADEMIC RESULTS – CLASS 10",
      subtitle: "CELEBRATING ACADEMIC EXCELLENCE!",
      toppers: {
        "2023-24": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/3.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/4.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/5.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/7.webp",
        ],
        "2024-25": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/3.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/4.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/5.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/6.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/7.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/8.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/9.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/10.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/11.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/12.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/13.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/14.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/15.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/16.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/17.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/18.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/19.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2024-2025/20.webp",
        ],
      },
    },
  ];

  return (
    <>
      <div className="explore-tabination-internal-page-section bg-color-gray">
        <Container className="explore-tabination-container my-5">
          <div className="d-flex justify-content-center my-3">
            {years.map((year) => (
              <button
                key={year}
                className={`btn mx-2 ${
                  activeYear === year ? "btn-warning" : "btn-outline-warning"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="container">
                {categories.map((category, categoryIndex) => {
                  // Skip rendering if it's Class 10 and the active year is 2024-25
                  // if (category.heading === "ACADEMIC RESULTS – CLASS 10" && activeYear === "2024-25") {
                  //   return null;
                  // }

                  return (
                    <div key={`category-${categoryIndex}`}>
                      <br />
                      <div className="sec-title3 text-center mb-45">
                        <h3 className="text-center fw-bold">🏆 {category.heading}</h3>
                        <hr />
                      </div>
                      <div className="row py-1">
                        {(category.toppers[activeYear] || []).map((topper, index) => (
                          <div
                            key={`category-${categoryIndex}-topper-${index}`}
                            className="col-6 col-md-3 mb-3 item"
                          >
                            <div
                              className="box"
                              style={{
                                borderRight: "1px solid #67676712",
                                backgroundColor: "#f8f9fa",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <Image
                                className="rounded-thumbnail"
                                src={topper}
                                width={280}
                                height={230}
                                priority
                                alt={`Topper ${index + 1}`}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NoidaIITThumbnailResults;
