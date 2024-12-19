import React, { useState } from "react";
import Image from "next/image";

const NoidaPrincipalNote = () => {
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
                  src="/images/noida/principal-note.webp"
                  alt="Principal"
                  width={300}
                  height={300}
                  className="rounded img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body-our-leaders">
                  <p className="text-muted mb-1">Principal | Ramagya School, Noida</p>
                  <h5 className="fw-bold">Rina Singh</h5>
                  <p>
                    Welcome to Ramagya School, where education transcends the traditional boundaries of learning. We are
                    not just an institution; we are a vibrant community of dedicated educators and passionate learners
                    committed to fostering academic excellence and the holistic development of every student. It brings
                    us immense joy to have you join us on this incredible journey, knowing your child is in safe and
                    nurturing hands.
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
                        We firmly believe that each student has the potential to excel academically and grow into
                        responsible, outstanding citizens of the future. Our educational philosophy is rooted in the
                        belief that knowledge is a dynamic, creative process that requires adaptability in today’s
                        rapidly changing world. We equip our students not only with academic knowledge but also with the
                        skills necessary to navigate challenges and seize opportunities that lie ahead.
                      </p>
                      <p>
                        The recent global events, especially the pandemic, have compelled us to reflect on the
                        transformative forces shaping our future. We face critical issues, such as the climate
                        emergency, technological advancements, and social inequalities, all demanding a new set of
                        skills and a deeper understanding of truth, beauty, and justice.
                      </p>
                      <p>
                        At Ramagya School, we place the learner at the heart of our educational practices. Our approach
                        aligns seamlessly with the principles of the New Education Policy, focusing on personalized and
                        empowering learning experiences that transcend traditional literacy. In today’s world, education
                        is about learning, unlearning, and relearning, while also fostering ethical decision-making that
                        rises above gender, nationality, or economic background.
                      </p>
                      <p>
                        Our society is yearning for a revival of core values - compassion, tolerance, acceptance, and
                        peace. We firmly believe that education is the key to instilling these values in the hearts and
                        minds of our students. Each of us has a significant role to play in shaping the world through
                        our collective imagination. As we reflect on the inspiring journeys of past students who once
                        stood where you are standing now, we are moved by their simple yet powerful ideas that have
                        transformed lives. Now, we invite you to consider: What will your contribution be? What
                        challenges will you address? What discoveries will you pursue?
                      </p>
                      <p>
                        With this call to action and our unwavering commitment to your journey, we wholeheartedly
                        welcome you to the vibrant world of Ramagya. Here, your dreams and aspirations come to life.
                        It’s time to make every moment count as you embark on a transformative journey to become the
                        best version of yourself - a beacon of hope for the future.
                      </p>
                      <p>Together, let’s shape a brighter tomorrow.</p>
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

export default NoidaPrincipalNote;
