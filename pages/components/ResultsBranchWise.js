import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

const ResultsBranchWise = () => {
  // Data for branches with categories
  const branches = [
    {
      key: "noida",
      title: "Noida",
      categories: [
        {
          heading: "IIT JEE Mains & Advanced",
          subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
          toppers: [
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
        },
        {
          heading: "ACADEMIC RESULTS – CLASS 12",
          subtitle: "LEADERS OF TOMORROW!",
          toppers: [
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/1.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/2.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r12th/3.webp",

          ],
        },
        {
          heading: "ACADEMIC RESULTS – CLASS 10",
          subtitle: "CELEBRATING ACADEMIC EXCELLENCE!",
          toppers: [
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/1.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/2.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/3.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/4.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/5.webp",
            // "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/6.webp",
            "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/results/noida/r10th/7.webp",
          ],
        },
      ],
    },
    // {
    //   key: "noida-extension",
    //   title: "Noida Extension",
    //   categories: [
    //     {
    //       heading: "IIT - JEE TOPPERS",
    //       subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
    //       toppers: [
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/topper-1.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/topper-2.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/topper-3.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/topper-4.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/abhishek.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/shashank.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/pratul.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/ayush.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/animesh.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/RS--JEE-TOPPERS-2889.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/RS--JEE-TOPPERS-3418.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/jee/RS--JEE-TOPPERS-8863.webp",
    //       ],
    //     },
    //     {
    //       heading: "CLASS X TOPPERS",
    //       subtitle: "CELEBRATING ACADEMIC EXCELLENCE!",
    //       toppers: [
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/2024-1.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/2024-3.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/2024-4.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/2024-5.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/hiya.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/divyansh.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/atharv.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/sarthak.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/amit.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/sidak.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/anika.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/aditya.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/samiksha-jain.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-x-toppers/manasa.webp",
    //       ],
    //     },
        
    //     {
    //       heading: "CLASS XII TOPPERS",
    //       subtitle: "LEADERS OF TOMORROW!",
    //       toppers: [
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/2024-1.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/2024-2.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/2024-3.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/samiksha.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/manasa.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/tanisha.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/aditya.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/harshita.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/geetika.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/mihika.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/sanjana.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/vishwas.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/riya.webp",
    //         "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/noida-results/class-xii-toppers/sharon.webp",
    //       ],
    //     },
        
    //   ],
    // },
    // {
    //   key: "greater-noida",
    //   title: "Greater Noida",
    //   categories: [
    //     {
    //       heading: "IIT - JEE TOPPERS",
    //       subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
    //       toppers: [
    //         "/images/results/gr-noida/iit-toppers/1.webp",
    //         "/images/results/gr-noida/iit-toppers/2.webp",
    //         "/images/results/gr-noida/iit-toppers/3.webp",
    //       ],
    //     },
    //     {
    //       heading: "CLASS X TOPPERS",
    //       subtitle: "CELEBRATING ACADEMIC EXCELLENCE!",
    //       toppers: [
    //         "/images/results/gr-noida/class-x-toppers/1.jpg",
    //         "/images/results/gr-noida/class-x-toppers/2.jpg",
    //         "/images/results/gr-noida/class-x-toppers/3.jpg",
    //       ],
    //     },
        
    //     {
    //       heading: "CLASS XII TOPPERS",
    //       subtitle: "LEADERS OF TOMORROW!",
    //       toppers: [
    //         "/images/results/gr-noida/class-xii-toppers/1.jpg",
    //         "/images/results/gr-noida/class-xii-toppers/2.jpg",
    //         "/images/results/gr-noida/class-xii-toppers/3.jpg",
            
    //       ],
    //     },
        
    //   ],
    // },
    {
      key: "dadri",
      title: "Dadri",
      categories: [
        {
          heading: "IIT JEE Mains & Advanced",
          subtitle: "ACHIEVEMENT OF TODAY IS A STEPPING STONE FOR THE FUTURE!",
          toppers: [
            "/images/results/gr-noida/iit-toppers/1.webp",
            "/images/results/gr-noida/iit-toppers/2.webp",
            "/images/results/gr-noida/iit-toppers/3.webp",
          ],
        },
        {
          heading: "CLASS X TOPPERS",
          subtitle: "CELEBRATING ACADEMIC EXCELLENCE!",
          toppers: [
            "/images/results/dadri/class-x-toppers/1.webp",
            "/images/results/dadri/class-x-toppers/2.webp",
            "/images/results/dadri/class-x-toppers/3.webp",
            "/images/results/dadri/class-x-toppers/4.webp",
            "/images/results/dadri/class-x-toppers/5.webp",
            "/images/results/dadri/class-x-toppers/6.webp",
            "/images/results/dadri/class-x-toppers/7.webp",
            "/images/results/dadri/class-x-toppers/8.webp",
          ],
        },
        
        {
          heading: "CLASS XII TOPPERS",
          subtitle: "LEADERS OF TOMORROW!",
          toppers: [
            "/images/results/dadri/class-xii-toppers/Class-XII-01.webp",
            "/images/results/dadri/class-xii-toppers/Class-XII-02.webp",
            "/images/results/dadri/class-xii-toppers/Class-XII-03.webp",
            
          ],
        },
        
      ],
    },
    // Add more branches as needed
  ];

  return (
    <>
      <div className="explore-tabination-internal-page-section">
        <Container className="explore-tabination-container my-5">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Tabs
                defaultActiveKey="noida"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                {branches.map((branch) => (
                  <Tab
                    key={branch.key}
                    eventKey={branch.key}
                    title={branch.title}
                    aria-controls={`${branch.key}-tab`}
                  >
                    <div className="container">
                      {branch.categories.map((category, categoryIndex) => (
                        <div key={`${branch.key}-category-${categoryIndex}`}>
                          <br/>
                          <div className="sec-title3 text-center mb-45">
                            {/* <div className="sub-title">{category.subtitle}</div> */}
                            <h3 className="text-center fw-bold">
                              {category.heading}
                            </h3>
                            <hr></hr>
                          </div>
                          <div className="row g-3 py-5">
                            {category.toppers.map((topper, index) => (
                              <div
                                key={`${branch.key}-category-${categoryIndex}-topper-${index}`}
                                className="col-6 col-md-3 mb-3 item"
                              >
                                {/* <div className="box"> */}
                                <div className="box" style={{borderRight:"1px solid #67676712"}}>
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
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ResultsBranchWise;
