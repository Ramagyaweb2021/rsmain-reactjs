import React from 'react';
import Image from 'next/image';

const SeniorSecondaryLearningDomain = () => {
  // Data for groups
  const groups = [
    {
      title: "Group 1",
      subjects: [
        { name: "English", image: "/images/explore/senior-secondary/learning-domain/english.webp" },
        { name: "Physics", image: "/images/explore/senior-secondary/learning-domain/physics.webp" },
        { name: "Chemistry", image: "/images/explore/senior-secondary/learning-domain/chemistry.webp" },
        { name: "Mathematics", image: "/images/explore/senior-secondary/learning-domain/mathematics.webp" },
        { name: "Compputer Science", image: "/images/explore/senior-secondary/learning-domain/comp-science.webp" },
        { name: "Economics", image: "/images/explore/senior-secondary/learning-domain/economics.webp" },
        { name: "Physical Ed.", image: "/images/explore/senior-secondary/learning-domain/physical.webp" },
        { name: "AI", image: "/images/explore/senior-secondary/learning-domain/ai.webp" },
      ],
    },
    {
      title: "Group 2",
      subjects: [
        { name: "English", image: "/images/explore/senior-secondary/learning-domain/english.webp" },
        { name: "Physics", image: "/images/explore/senior-secondary/learning-domain/physics.webp" },
        { name: "Chemistry", image: "/images/explore/senior-secondary/learning-domain/chemistry.webp" },
        { name: "Mathematics", image: "/images/explore/senior-secondary/learning-domain/mathematics.webp" },
        { name: "Compupter Science", image: "/images/explore/senior-secondary/learning-domain/comp-science.webp" },
        { name: "Psychology", image: "/images/explore/senior-secondary/learning-domain/psychology.webp" },
        { name: "Physical Ed.", image: "/images/explore/senior-secondary/learning-domain/physical.webp" },
        { name: "AI", image: "/images/explore/senior-secondary/learning-domain/ai.webp" },
        { name: "Biology", image: "/images/explore/senior-secondary/learning-domain/biology.webp" },
        { name: "Painting", image: "/images/explore/senior-secondary/learning-domain/painting.webp" },
      ],
    },
    {
      title: "Group 3",
      subjects: [
        { name: "English", image: "/images/explore/senior-secondary/learning-domain/english.webp" },
        { name: "Accountacy", image: "/images/explore/senior-secondary/learning-domain/accountacy.webp" },
        { name: "Business Study", image: "/images/explore/senior-secondary/learning-domain/business-study.webp" },
        { name: "Economics", image: "/images/explore/senior-secondary/learning-domain/economics.webp" },
        { name: "Mathematics", image: "/images/explore/senior-secondary/learning-domain/mathematics.webp" },
        { name: "Applied Math", image: "/images/explore/senior-secondary/learning-domain/applied-math.webp" },
      ],
    },
    {
      title: "Group 4",
      subjects: [
        { name: "English", image: "/images/explore/senior-secondary/learning-domain/english.webp" },
        { name: "Accountacy", image: "/images/explore/senior-secondary/learning-domain/accountacy.webp" },
        { name: "Business Study", image: "/images/explore/senior-secondary/learning-domain/business-study.webp" },
        { name: "Economics", image: "/images/explore/senior-secondary/learning-domain/economics.webp" },
        { name: "Compupter Science", image: "/images/explore/senior-secondary/learning-domain/comp-science.webp" },
        { name: "Psychology", image: "/images/explore/senior-secondary/learning-domain/psychology.webp" },
        { name: "Physical Ed.", image: "/images/explore/senior-secondary/learning-domain/physical.webp" },
        { name: "AI", image: "/images/explore/senior-secondary/learning-domain/ai.webp" },
        { name: "Painting", image: "/images/explore/senior-secondary/learning-domain/painting.webp" },
        { name: "Music", image: "/images/explore/senior-secondary/learning-domain/music.webp" },
      ],
    },
    {
      title: "Group 5",
      subjects: [
        { name: "English", image: "/images/explore/senior-secondary/learning-domain/english.webp" },
        { name: "History", image: "/images/explore/senior-secondary/learning-domain/history.webp" },
        { name: "Political Science", image: "/images/explore/senior-secondary/learning-domain/political-science.webp" },
        { name: "Economics", image: "/images/explore/senior-secondary/learning-domain/economics.webp" },
        { name: "Mathematics", image: "/images/explore/senior-secondary/learning-domain/mathematics.webp" },
        { name: "Psychology", image: "/images/explore/senior-secondary/learning-domain/psychology.webp" },
        { name: "Physical Ed.", image: "/images/explore/senior-secondary/learning-domain/physical.webp" },
        { name: "Painting", image: "/images/explore/senior-secondary/learning-domain/painting.webp" },
        { name: "Music", image: "/images/explore/senior-secondary/learning-domain/music.webp" },
        { name: "AI", image: "/images/explore/senior-secondary/learning-domain/ai.webp" },
        { name: "Applied Math", image: "/images/explore/senior-secondary/learning-domain/applied-math.webp" },
      ],
    },
  ];

  return (
    <>
      {/* Render the common header only once */}
      <div className="text-center my-5">
        <h5 className="fw-bold" style={{ textAlign: "center" }}>
          GROUPS & SUBJECTS ALLOCATED
        </h5>
      </div>
      
      {groups.map((group, index) => (
        <div className="row justify-content-center my-5" key={index}>
          {/* Render the group title */}
          <div className="text-center mb-4">
            <h4 className="title-100">{group.title}</h4>
          </div>
          
          {/* Render the subjects for each group */}
          {group.subjects.map((subject, idx) => (
            <div className="col-md-2 col-6 mb-4" key={idx}>
              <div className="card text-center h-100 border-1">
                <div className="card-value-body">
                  <Image
                    alt="icon"
                    loading="lazy"
                    width={40}
                    height={40}
                    src={subject.image}
                  />
                  <p className="mt-2">{subject.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default SeniorSecondaryLearningDomain;
