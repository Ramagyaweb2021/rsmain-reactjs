import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const IITAcademicsThumbnailResults = () => {
  const [activeYear, setActiveYear] = useState("2023-24");

  const years = ["2023-24", "2024-25"];

  // Data for categories
  const categories = [
    {
      heading: "IIT JEE Mains & Advanced",
      subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
      toppers: {
        "2023-24": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/3.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/4.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/5.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/6.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/7.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/8.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/9.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/10.webp",
        ],
        "2024-25": [],
      },
    },
    {
      heading: "ACADEMIC RESULTS – CLASS 12",
      subtitle: "LEADERS OF TOMORROW!",
      toppers: {
        "2023-24": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/3.webp",
        ],
        "2024-25": [],
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
        "2024-25": [],
      },
    },
  ];

  return (
    <>
      <div className="explore-tabination-internal-page-section">
        <Container className="explore-tabination-container my-5">
          <div className="d-flex justify-content-center my-3">
            {years.map((year) => (
              <button
                key={year}
                className={`btn mx-2 ${activeYear === year ? "btn-warning" : "btn-outline-warning"}`}
                onClick={() => setActiveYear(year)}
                disabled={year === "2024-25"}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="container">
                {categories.map((category, categoryIndex) => (
                  <div key={`category-${categoryIndex}`}>
                    <br />
                    <div className="sec-title3 text-center mb-45">
                      <h3 className="text-center fw-bold">{category.heading}</h3>
                      <hr />
                    </div>
                    <div className="row g-3 py-5">
                      {(category.toppers[activeYear] || []).map((topper, index) => (
                        <div key={`category-${categoryIndex}-topper-${index}`} className="col-6 col-md-3 mb-3 item">
                          <div className="box" style={{ borderRight: "1px solid #67676712" }}>
                            <Image
                              className="rounded-thumbnail"
                              src={topper}
                              width={280}
                              height={230}
                              priority
                              alt={`Topper ${index + 1}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default IITAcademicsThumbnailResults;
