import React, { useState } from "react";
import Image from "next/image";

const GreaterNoidaPrincipalNote = () => {
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
                  src="/images/greater-noida/principal-note.webp"
                  alt="Principal"
                  width={300}
                  height={300}
                  className="rounded img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">
                    Principal | Ramagya School, Greater Noida
                  </p>
                  <h5 className="fw-bold">Ms. Shreshtha Tripathi</h5>
                  <p>
                    Education is not an act of acquiring knowledge but learning a skill to lead life and form a personality. At Ramagya School, Greater Noida, we emphasize value-based education, where we endeavor to equip our children with skills and necessary values to face the challenges of life. We ensure that our children richly enjoy their academic journey in a happy and congenial atmosphere.
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
                      <p>
                      This ethos of the school can be sensed by any visitor who steps into its premises. The warmth and personal care provided to each child exudes from every corner. We motivate each student to excel to the best of her potential. This teaching-learning environment would not have thrived if it wasn’t for the unflinching support of our parents and well-wishers. Our school has a tradition of imparting value-based education to the children entrusted to our care for almost three decades now and Ramagya Greater Noida is one more step into the wide avenue of long-lasting values and deep-rooted integrity that the School has constructed over the past years.
                      </p>
                      <p>We strive to shape human personalities and make a consistent effort to mold our students into fine individuals who are an asset to society as they grow up through the educational journey I am committed to upholding the ideals of our Founder Chairperson, who sowed the seed with marvelous and brilliant foresight. The essential qualities I wish to nurture in our students are courtesy, wisdom, Charity, humility, and love. The meaning of these threads will reward the rich fabric of the innocent minds of our future- Our Children.</p>

                      <p>In closing, I look forward to a worthy journey with your support paving a path that illumines the unique identity of every student and all who come in contact with us. To all who read this message, I wish you a glowing life of joy and happiness. May the divine blessings shower on our gracious institution and one and all forever.
                      God bless us all!</p>
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

export default GreaterNoidaPrincipalNote;
