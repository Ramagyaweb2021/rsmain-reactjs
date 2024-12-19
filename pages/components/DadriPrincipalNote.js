import React, { useState } from "react";
import Image from "next/image";

const DadriPrincipalNote = () => {
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
                  src="/images/dadri/principal-note.webp"
                  alt="Principal"
                  width={300}
                  height={300}
                  className="rounded img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">
                    Principal | Ramagya School, Dadri
                  </p>
                  <h5 className="fw-bold">Ms. Kavita Chaudhary</h5>
                  <p>
                    At Ramagya School, our mission transcends traditional education. We don&#39;t just prepare students with academics; we empower them to prepare for anything they aspire to achieve. Our commitment is to inspire and transform our students into the individuals they dream of becoming. The educational philosophy is centered around fostering a deep desire for learning, innovation, and creativity. We emphasize not just teaching but inspiring students to harness and enhance their innate talents and skills.
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
                     <p>Through our flagship program, &#39;Know Your Brain,&#39; we enable students to discover how they learn best, ensuring a tailored and effective educational experience. We are dedicated to nurturing intellectual and cultural diversity, encouraging students to engage with and contribute to the broader community. Our dynamic learning environment motivates students to become critical thinkers, compassionate leaders, and lifelong learners. The motto &#39;Arise, Awake, and Attain&#39; captures the essence of our educational approach, reflecting our commitment to holistic growth and excellence. Our curriculum evolves continuously to meet the changing needs of our students and the world they will lead. With a strong foundation in cultural and moral values, experiential learning, and state-of-the-art facilities, including language labs and 3D computer science labs, we ensure a comprehensive and enriching educational journey. Additionally, we incorporate Transcendental Meditation to support the mental well-being of our students, helping them achieve their best in life.
                     </p>
                     <p>At Ramagya, we provide an outstanding national and international academic curriculum. With access to over 35+ indoor and outdoor sports academies and collaborations with renowned institutions, we offer our students numerous opportunities to excel and reach new heights.</p>
                     <p>We thank you, our valued parents, for your unwavering support and trust in our vision. Together, we strive to create a nurturing environment where every student can thrive and embark on a path of lifelong success and fulfillment.</p>
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

export default DadriPrincipalNote;
