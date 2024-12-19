import React from 'react';
import Image from 'next/image';

const leadershipData = [
  {
    name: "Enquire Now",
    image: "/images/noida/admission/enquire-now.webp",
    button: "Enquire Now",
    Link: "https://ramagyaschool.com/noida-extension/",
  },
  {
    name: "Admission 2024-25",
    image: "/images/noida/admission/admission-1.webp",
    button: "Admission 2024-25",
    Link: "https://forms.edunexttechnologies.com/forms/ramagyanoidaextension/registration/",
  },
  {
    name: "Admission 2025-26",
    image: "/images/noida/admission/admission-2.webp",
    button: "Admission 2025-26",
    Link: "https://forms.edunexttechnologies.com/forms/ramagyanoidaextension/registration/",
  },
  // Other entries...
];

const ApplyNowSectionNoidaExtension = () => {
  return (
    <section className="py-0">
      <div className="container text-center">
        <div className="row g-3">
          {leadershipData.map((leader, index) => (
            <div className="col-md-4 col-6 mx-auto" key={index}>
              <div className="card border-0 card-hover">
                <div className="card-body-leader-ship text-center">
                  <div className="position-relative">
                    <Image
                      src={leader.image}
                      className="rounded-3"
                      alt={leader.name}
                      width={500}
                      height={216}
                    />
                  </div>
                  <div className="mt-3">
                    <a
                      href={leader.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary-1 learn-more-button"
                    >
                      {leader.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSectionNoidaExtension;
