import React, { useState } from "react";
import Image from "next/image";
const AlumniDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("View"); // Default active category

  const alumniData = [
    { id: 1, name: "John Doe", category: "View", details: "Alumni from IIT Delhi", image: "/images/lead/view.webp" },
    { id: 2, name: "Jane Smith", category: "Watch", details: "Alumni from Harvard University", image: "/images/lead/view.webp" },
    { id: 3, name: "Mike Johnson", category: "Ask", details: "Alumni from Stanford", image: "/images/lead/view.webp" },
  ];

  // Show only selected category alumni
  const filteredAlumni = alumniData.filter((alumni) => alumni.category === selectedCategory);

  return (
    <div className="container mt-1 py-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="main-heading">Your Child Gets These Benefits</h2>
        <p>A platform for students to connect with their Alumni of different batches and branches from around the world.</p>

        {/* Category Buttons */}
        <div>
          {["View", "Watch", "Ask"].map((category) => (
            <button
              key={category}
              className={`btn me-2 ${selectedCategory === category ? "alumni-bashboard-button" : "btn-outline-secondary opacity-80"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Alumni Journey Section */}
      <div className="text-center mb-5">
        <h3>View Alumni Journey</h3>
        <p>Right from entrance exams taken to colleges applied and admitted to, students can view their alumni journeys.
          <br/>The unique platform enables students to filter by interest and view thousands of alumni profiles.</p>
      </div>

      {/* Alumni List */}
      <div className="row">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="col-md-12 mb-4">
              <div className="card p-3 shadow-sm">
                <Image src={alumni.image} alt={alumni.name} className="img-fluid rounded mb-2" width="1920" height="1080" />
                {/* <h5 className="text-primary">{alumni.name}</h5>
                <p>{alumni.details}</p> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Alumni Found</p>
        )}
      </div>
    </div>
  );
};

export default AlumniDashboard;
