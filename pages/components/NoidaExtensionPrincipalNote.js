import React, { useState } from "react";
import Image from "next/image";

const NoidaExtensionPrincipalNote = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreToggle = () => setReadMore(!readMore);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 mb-4">
          <div className="card border-0 shadow-sm p-4" style={{ background: "#E7EAEB33" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <Image
                  src="/images/noida-extension/principal-note.webp"
                  alt="Principal"
                  width={385}
                  height={425}
                  className="rounded img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">
                    Principal | Ramagya School, Noida Extension
                  </p>
                  <h5 className="fw-bold">Ms. Awani Singh</h5>
                  <p>
                    I am deeply honored to address you as the Principal of Ramagya School, Noida Extension. For over two decades, Ramagya School has been a beacon of education excellence in Delhi/NCR, and it is with great pride that I take on the responsibility of carrying forward this esteemed legacy.
                  </p>

                  {!readMore && (
                    <div className="d-flex justify-content-left align-items-left mt-1">
                      <div className="learn-more-button">
                        <button className="btn btn-link p-0" onClick={handleReadMoreToggle}>
                          Read More
                        </button>
                      </div>
                    </div>
                  )}
                  {readMore && (
                    <div
                      className="mt-3"
                      style={{
                        maxHeight: "120px",
                        overflowY: "auto",
                        paddingRight: "10px",
                        borderRight: "2px solid #ffdf8b", // Adds the right-side border
                      }}
                    >

                      <p>My foremost commitment is to provide each student with a well-rounded education that encompasses not only academics but also sports, training, and overall well-being. I believe that true excellence lies in nurturing both the mind and body, and my mission is to empower our students to excel in all aspects of life.</p>
                      <p>At Ramagya School, we recognize the untapped potential within each student, and our dedicated team of teachers, coaches, and experts is here to unlock and cultivate their talents. With more than 35 indoor and outdoor sports to choose from, we encourage our students to actively participate in physical activities, fostering a healthy body that in turn nourishes a healthy mind.</p>
                      <p>Our commitment to holistic development goes beyond sports. We understand the importance of mental well-being in a student&#39;s life. That&#39;s why we have introduced the &#39;Know Your Brain Program,&#39; an initiative conceived by Mr. Utkarsh Gupta, the MD of Ramagya Group of Schools. This program ensures that we monitor and support the mental well-being of every student. Additionally, our Learning and Counseling Cell is always available to provide guidance, conduct workshops, assessments, and sessions to address any concerns and challenges that students may face.</p>
                      <p>I firmly believe in providing the best possible education without imposing unnecessary burdens on our students. My vision is to elevate Ramagya School, Noida Extension, to new heights, making it the preferred choice for parents seeking quality education for their children. With my experience and guidance, I am committed to upholding the legacy of Ramagya School, ensuring that it continues to stand tall as a symbol of educational excellence.</p>
                      <p>I welcome you to be a part of this exciting journey, where we collectively strive to nurture the potential within each student and prepare them to shine in a rapidly evolving world. Together, we will create a brighter future for our students and our society.
                        Warm regards,</p>
                      <div className="d-flex justify-content-left align-items-left mt-1">
                        <button className="btn btn-link p-0" onClick={handleReadMoreToggle}>
                          Read Less
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoidaExtensionPrincipalNote;
