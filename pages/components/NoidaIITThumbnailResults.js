import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const NoidaIITThumbnailResults = () => {
  const [activeYear, setActiveYear] = useState("2024-25");

  const years = ["2023-24", "2024-25"];

  const mainsData = {
    "2023-24": [
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/7.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/8.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/9.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/10.webp",
    ],
    "2024-25": [
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/1.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/2.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/3.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/4.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/5.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/6.webp",
    ],
  };

  const advancedData = {
    "2023-24": [
      // "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/9.webp",
      // "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit/10.webp",
    ],
    "2024-25": [
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit-advance/1.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit-advance/2.webp",
      "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/iit-advance/3.webp",
    ],
  };

  return (
    <div className="explore-tabination-internal-page-section">
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
          <div className="col-12">
            <div className="container">
              {activeYear === "2023-24" ? (
                <>
                  <div className="sec-title3 text-center my-1 mt-3 mb-45">
                    <h3 className="text-center fw-bold">
                      🏆 IIT JEE Mains
                    </h3>
                    {/* <p>ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!</p> */}
                    <hr />
                  </div>
                  <div className="row py-1">
                    {[...(mainsData["2023-24"] || []), ...(advancedData["2023-24"] || [])].map((topper, index) => (
                      <div key={`combined-topper-${index}`} className="col-6 col-md-3 mb-3 item">
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
                </>
              ) : (
                <>
                      {/* IIT JEE Advanced */}
                      <div className="sec-title3 text-center my-1 mt-3 mb-45">
                    <h3 className="text-center fw-bold">🏆 IIT JEE Advanced</h3>
                    {/* <p>PERSISTENCE AND HARD WORK LEAD TO GREATNESS!</p> */}
                    <hr />
                  </div>
                  <div className="row py-1">
                    {(advancedData[activeYear] || []).map((topper, index) => (
                      <div key={`adv-${index}`} className="col-6 col-md-4 mb-3 item">
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
                            alt={`Advanced Topper ${index + 1}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* IIT JEE Mains */}
                  <div className="sec-title3 text-center my-1 mt-3 mb-45">
                    <h3 className="text-center fw-bold">🏆 IIT JEE Mains</h3>
                    {/* <p>ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!</p> */}
                    <hr />
                  </div>
                  <div className="row py-1">
                    {(mainsData[activeYear] || []).map((topper, index) => (
                      <div key={`mains-${index}`} className="col-6 col-md-3 mb-3 item">
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

            
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NoidaIITThumbnailResults;
