//import { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
// import "bootstrap/dist/css/bootstrap.min.css";

const AlumniTabs = () => {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return (
    <div className="container my-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="alumni-main-section-heading">Adding value to our Alumni</h2>
        <p className="">
            We believe in nurturing our students even after they graduate from school. Here’s how we do it!
        </p>
      </div>


      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4 justify-content-left" id="alumniTabs" role="tablist">
        {["Networking", "Learning & Development", "Recognition", "Nostalgia", "Benefits"].map((tab, index) => (
          <li className="nav-item" key={index} role="presentation">
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`${tab.replace(/\s+/g, "-").toLowerCase()}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.replace(/\s+/g, "-").toLowerCase()}`}
              type="button"
              role="tab"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="alumniTabContent">
        {[
          {
            id: "networking",
            title: "Networking",
            image: "/images/lead/alumni-guidance/networking.webp",
            points: [
              "Join quarterly networking sessions online/offline organized by the school",
              "Reconnect with your batchmates, seniors, juniors",
              "Build meaningful connections - personal & business",
            ],
          },
          {
            id: "learning-&-development",
            title: "Learning & Development",
            image: "/images/lead/alumni-guidance/learning.webp",
            points: [
              "Get invited to learning webinars & workshops at no cost",
              "Opportunity to upskill in various areas",
              " Meet faculty/founders of top universities/organizations",
            ],
          },
          {
            id: "recognition",
            title: "Recognition",
            image: "/images/lead/alumni-guidance/recognition.webp",
            points: [
              "Get featured on the school’s social media & website for your achievements",
              "Nomination for illustrious alumni awards",
              "Receive a certificate of recognition for guiding juniors",
            ],
          },
          {
            id: "nostalgia",
            title: "Nostalgia",
            image: "/images/lead/alumni-guidance/nostalgia.webp",
            points: [
              "Receive updates about your school’s achievements",
              "Throwback memories of students, teachers, events, etc.",
              "Updates about your batchmates",
            ],
          },
          {
            id: "benefits",
            title: "Benefits",
            image: "/images/lead/alumni-guidance/benefits.webp",
            points: [
              "Access to alumni directory for networking",
              "Discounts on certifications & other learning opportunities",
              "Access to job & internship opportunities",
            ],
          },
        ].map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={tab.id}
            role="tabpanel"
          >
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <Image
                  src={tab.image}
                  alt={tab.title}
                  width={500}
                  height={300}
                  className="zoom-frame img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h3 className="fw-bold">{tab.title}</h3>
                <ul className="checklist mt-3">
                  {tab.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <Link href="https://ags.univariety.com/user/ramagyaschool/login" target="_blank" rel="noopener noreferrer" class="btn custom-btn py-2 mt-20">Sign Up</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .nav-tabs {
          border-bottom: 2px solid #dddddd63;
        }
        .nav-tabs .nav-link {
          color: #676767;
          font-weight: 400;
          padding: 10px 15px;
          border: 0;
        }
        .nav-tabs .nav-link.active {
          font-weight: normal;
          border-bottom: 3px solid #000;
          color: #000;
          font-weight: 500;
          border-bottom: 4px solid var(--color-set-green);
          border-top: 0px solid var(--color-set-yellow);
          border-left: 0px solid var(--color-set-yellow);
          border-right: 0px solid var(--color-set-yellow);
          padding: 10px 15px;
          background-color:rgba(255, 255, 255, 0);
        }
          .fw-bold{
             font-size:30px;
             font-family:var(--font-family-text);
          }
        .zoom-frame {
          border: 10px solidrgb(14, 141, 225);
          border-radius: 10px;
          padding: 5px;
        }
        .checklist li {
          list-style: none;
          padding-left: 30px;
          position: relative;
          font-size: 16px;
          color: #676767;
          font-weight: 400;
          font-family:var(--font-family-text);
          }
        .checklist li::before {
          content: "✔";
          color: var(--color-set-green);
          position: absolute;
          left: 0;
          font-weight: bold;
          font-size: 18px;
        }
       
      `}</style>
    </div>
  );
};

export default AlumniTabs;
