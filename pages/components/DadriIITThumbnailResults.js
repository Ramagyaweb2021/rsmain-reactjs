import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const DadriIITThumbnailResults = () => {
  const [activeYear, setActiveYear] = useState("2023-24");

  const years = ["2023-24", "2024-25"];

  // Data for categories
  const categories = [
    {
      heading: "IIT JEE Mains",
      subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
      toppers: {
        "2023-24": [
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/dadri/iit/1.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/dadri/iit/2.webp",
          "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/dadri/iit/3.webp",
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
                    <div className="row py-1">
                      {(category.toppers[activeYear] || []).map((topper, index) => (
                        <div key={`category-${categoryIndex}-topper-${index}`} className="col-6 col-md-4 mb-3 item">
                          <div className="box" style={{ 
                              borderRight: "1px solid #67676712", 
                              backgroundColor: "#f8f9fa",
                              display: "flex", 
                              justifyContent: "center", 
                              alignItems: "center", 
                              height: "100%" 
                            }}>
                              <Image
                                className="rounded-thumbnail"
                                src={topper}
                                width={280}
                                height={230}
                                priority
                                alt={`Topper ${index + 1}`}
                                style={{width:"100%", height:"auto"}}
                              />
                            </div>

                          {/* <div className="box" style={{ borderRight: "1px solid #67676712" }}>
                            <Image
                              className="rounded-thumbnail"
                              src={topper}
                              width={280}
                              height={230}
                              priority
                              alt={`Topper ${index + 1}`}
                            />
                          </div> */}
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

export default DadriIITThumbnailResults;
