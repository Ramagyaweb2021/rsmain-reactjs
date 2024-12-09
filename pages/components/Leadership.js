import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const leadershipData = [
  {
    name: "Rina Singh",
    title: "Principal, Ramagya School, Noida",
    image: "/images/people/noida.webp",
    description: `Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
    
    At Ramagya School, we are more than just an educational institution; we are a dynamic community of passionate educators committed to nurturing both academic excellence and the holistic development of every student. We take immense pride in welcoming you into our community, where your child will be embraced in a safe, supportive, and caring environment.
    We firmly believe that every student has the potential to thrive academically while also growing into a responsible and outstanding citizen of the future. Our educational philosophy is built on the understanding that knowledge is a dynamic and creative journey-one that evolves and requires adaptability. In a world that is changing rapidly, it’s essential for students to acquire not only academic insights but also the vital skills needed to navigate challenges and seize opportunities. Recent global events, including the pandemic, have prompted us to reflect on the transformative forces shaping our future. We face significant issues such as climate change, technological disruptions, growing inequalities, and social conflicts. Addressing these challenges demands a new set of skills and a deep understanding of truth, beauty, and justice.

    At Ramagya, we prioritize the learner at the heart of our educational practices. Our unwavering commitment to the principles of the New Education Policy aligns seamlessly with our vision. We strive to create personalized and empowering learning experiences that transcend traditional literacy. In today’s world, education is about learning, unlearning, and relearning, while also fostering ethical decision-making that rises above gender, nationality, or economic background.
    Our society is yearning for a revival of core values - compassion, tolerance, acceptance, and peace. We firmly believe that education is the key to instilling these values in the hearts and minds of our students. Each of us has a significant role to play in shaping the world through our collective imagination. As we reflect on the inspiring journeys of past students who once stood where you are standing now, we are moved by their simple yet powerful ideas that have transformed lives. Now, we invite you to consider: What will your contribution be? What challenges will you address? What discoveries will you pursue?

    With this call to action and our unwavering commitment to your journey, we wholeheartedly welcome you to the vibrant world of Ramagya. Here, your dreams and aspirations come to life. It’s time to make every moment count as you embark on a transformative journey to become the best version of yourself - a beacon of hope for the future.

    Together, let’s shape a brighter tomorrow.`,
  },

  {
    name: "Priyanka Singh",
    title: "Principal, Ramagya School, Noida Extension",
    image: "/images/people/noida-ext.webp",
    description: `“There are only two lasting bequests we can hope to give our children, one of these is roots; the other, wings.”
    
      Dear Parents and Students,

      It is my honor and privilege to address you as the Principal of Ramagya School, Noida Extension. For over two decades, Ramagya School has been a beacon of excellence in education across Delhi/NCR, and I am committed to upholding and building upon this proud legacy.

      At Ramagya School, we believe in providing a balanced and enriching education that nurtures both the intellect and the physical well-being of each child. Our holistic approach to learning empowers students to excel academically while also encouraging growth in sports, arts, and personal development. With access to over 35 indoor and outdoor sports options, students have the opportunity to develop a healthy body alongside a focused mind, cultivating confidence and resilience.

      Understanding the importance of mental well-being in today’s world, we have integrated the "Know Your Brain Program" at Ramagya, a thoughtful initiative by our Managing Director, Mr. Utkarsh Gupta. This program, along with our dedicated Learning and Counseling Cell, provides continuous support to ensure students’ emotional and psychological health. We offer a range of assessments, workshops, and counseling sessions designed to help students navigate life’s challenges with strength and self-assurance.

      Our educators, coaches, and support staff are devoted to helping each child unlock their potential. We focus on creating an environment where students can explore their talents and discover their passions without feeling overwhelmed. My vision is to lead Ramagya School to new heights, making it a top choice for families seeking a progressive, supportive, and quality education.

      As we continue on this journey, I invite you to be an integral part of the Ramagya community. Together, let us prepare our students to become compassionate, creative, and courageous leaders who will contribute positively to an ever-evolving world.
      `,
  },
  
  {
    name: "Shreshtha Tripathi",
    title: "Principal, Ramagya School, Greater Noida",
    image: "/images/people/gr-noida.webp",
    description: `“The greatest gifts we can give our children are the roots of responsibility and the wings of independence.”
    
      Dear Parents,

      At Ramagya School, Greater Noida, education goes beyond the acquisition of knowledge; it is about cultivating life skills, character, and resilience. Here, we focus on value-based education that equips students with essential skills and virtues to confidently face life’s challenges. We are committed to fostering a joyful and supportive academic environment where every child feels valued and inspired to reach their fullest potential.

      Our school has a proud tradition of instilling core values, such as courtesy, humility, wisdom, and kindness, into the lives of our students. These values are woven into every interaction, creating a warm atmosphere that radiates from every corner of our campus. With the consistent support of our dedicated parents and community, we have been able to shape a teaching-learning environment that thrives on mutual respect, care, and encouragement.
      At Ramagya, we aim to develop well-rounded individuals who are not only academically proficient but also culturally aware and socially responsible. Our guiding motto is to build a strong foundation rooted in integrity, compassion, and community—qualities that were envisioned by our Founder Chairperson, whose wisdom continues to shape our mission today.
      In our journey together, we are dedicated to helping each student find their unique strengths, grow in confidence, and emerge as compassionate citizens ready to make a positive impact on society. I look forward to the continued support and enthusiasm of our parents, knowing that together we can nurture and illuminate the unique identity of every child who joins the Ramagya family.

      May our school be blessed, and may every student be guided toward a life filled with purpose, joy, and fulfillment.

      `,
      },
      {
        name: "Kavita Chaudhary",
        title: "Principal, Ramagya School, Dadri",
        image: "/images/people/dadri.webp",
        description: `Dear Parents and Students,

        At Ramagya School Dadri, our mission goes far beyond academics. We believe in preparing students for life, helping them cultivate the skills, confidence, and resilience needed to pursue their aspirations. Our educational approach emphasizes not only academic excellence but also the development of character, curiosity, and creativity.

        Our unique “Know Your Brain” program supports personalized learning by helping each student discover how they learn best. This initiative, combined with our commitment to intellectual and cultural diversity, creates an environment where students grow into compassionate leaders, critical thinkers, and lifelong learners. The motto “Arise, Awake, and Attain” reflects our focus on holistic development, encouraging every child to strive toward excellence in mind, body, and spirit.

        To foster this growth, we continuously adapt our curriculum to meet the demands of a rapidly changing world, integrating state-of-the-art resources like language labs and 3D computer science labs. Our approach to education is grounded in experiential learning, moral values, and innovative practices like Transcendental Meditation to support students’ mental and emotional well-being.

        Ramagya School Dadri offers a robust academic program with national and international perspectives. With access to over 35 indoor and outdoor sports academies and partnerships with renowned institutions, our students have countless opportunities to explore and excel across disciplines.

        Thank you, dear parents, for your trust and support in our vision. Together, we are building a nurturing environment where every student can thrive, unlocking a future filled with achievement and fulfillment.

          `,
          },
  
            // Other entries...
          ];

          const Leadership = () => {
            const [showModal, setShowModal] = useState(false);
            const [selectedLeader, setSelectedLeader] = useState(null);

            const handleShowModal = (leader) => {
              setSelectedLeader(leader);
              setShowModal(true);
            };

            const handleCloseModal = () => {
              setShowModal(false);
              setSelectedLeader(null);
            };

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="main-heading-internal-pages mb-4" style={{ textAlign: "center" }}>RAMAGYA LEADERSHIP</h2>
        <div className="row g-1">
          {leadershipData.map((leader, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0 card-hover">
                <div className="card-body-leader-ship text-center">
                  <div className="position-relative">
                    <Image
                      src={leader.image}
                      className="rounded-circle"
                      alt={leader.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <h6 className="mt-3 mb-1">{leader.title}</h6>
                  <p className="fw-bold text-center">{leader.name}</p>
                  <div className="d-flex justify-content-center align-items-center mt-1">
                    <button
                      className="btn btn-primary-1 learn-more-button"
                      onClick={() => handleShowModal(leader)}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Leadership Details */}
      {selectedLeader && (
        <Modal show={showModal} onHide={handleCloseModal} centered id="leadeship-modal-popup">
        {/* <Modal show={showModal} onHide={handleCloseModal} centered> */}
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <h5>{selectedLeader.title}</h5>
                  <p>{selectedLeader.name}</p>
                  {Array.isArray(selectedLeader.description)
                    ? selectedLeader.description.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))
                    : selectedLeader.description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
};

export default Leadership;
