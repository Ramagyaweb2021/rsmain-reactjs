"use client";
import { useState } from "react";

const NoidaTableResultData = () => {
  const [activeYear, setActiveYear] = useState("2024-25");

  const years = ["2023-24", "2024-25"];

  const data = {
    "2023-24": {
      schoolToppers12: [
        { rank: "I", name: "Sanjana Swain", marks: "95%" },
        { rank: "II", name: "Sidak Singh", marks: "94.2%" },
        { rank: "III", name: "Kumari Aprajita", marks: "94%" },
      ],
      schoolToppers10: [
        { rank: "I", name: "Umika Mishra", marks: "99%" },
        { rank: "II", name: "Apoorva Kushwaha", marks: "98.2%" },
        { rank: "III", name: "Prince Saxena", marks: "98%" },
        { rank: "IV", name: "Sanchit Raj", marks: "98%" },
      ],
      subjectToppers12: [
        { subject: "Science", name: "Sidak Singh", marks: "94.2%" },
        { subject: "Science", name: "Amay Kumar", marks: "88.4%" },
        { subject: "Science", name: "Amit Yadav", marks: "87.6%" },
      ],
      subjectToppers10: [
        { subject: "AI", name: "Umika Mishra", marks: "100" },
        { subject: "Mathematics – Basic", name: "Apoorva Kushwaha", marks: "100" },
        { subject: "Science", name: "Sanchit Raj", marks: "100" },
      ],
    },

    "2024-25": {
     schoolToppers12: [
        { rank: "I", name: "Gauri Mishra", marks: "97%" },
        { rank: "I", name: "Divyansh Verma", marks: "97%" },
        { rank: "II", name: "Kavyansh", marks: "96.4%" },
        { rank: "II", name: "Ronit", marks: "96%" },
        { rank: "III", name: "Shipra", marks: "94.4%" },
        { rank: "III", name: "Ridhima", marks: "94%" },
        { rank: "III", name: "Virat", marks: "94%" },
      ],

     schoolToppers10: [
        { rank: "I", name: "Adway Bachchan", marks: "98%" },
        { rank: "II", name: "Anay Yadav", marks: "97.4%" },
        { rank: "III", name: "Sidhi Aggarwal", marks: "97.2%" },
        { rank: "III", name: "Shweta Panigrahi", marks: "97.2%" },
        { rank: "IV", name: "Eshaan Verma", marks: "97%" },
        { rank: "IV", name: "Chehak Rajput", marks: "97%" },
        { rank: "V", name: "Aarav Singroha", marks: "96.2%" },
        { rank: "VI", name: "Arhaan Meer", marks: "96%" },
        { rank: "VI", name: "Kartik Rajpoot", marks: "96%" },
        { rank: "VI", name: "Nidhish Gupta", marks: "96%" },
        { rank: "VI", name: "Tuleep Basu", marks: "96%" },
        { rank: "VI", name: "Shonima Pandey", marks: "96%" },
        { rank: "VI", name: "Vivrit Gupta", marks: "96%" },
        { rank: "VI", name: "Arnav Kapoor", marks: "96%" },
        { rank: "VII", name: "Anshuman Das", marks: "95.4%" },
        { rank: "VIII", name: "Aryansh Dwivedi", marks: "95%" },
        { rank: "VIII", name: "Ananya Singh", marks: "95%" },
        { rank: "VIII", name: "Tapasya Tiwari", marks: "95%" },
        { rank: "VIII", name: "Tanmayram Karade", marks: "95%" },
        { rank: "VIII", name: "Ekansh Tripathi", marks: "95%" },
        { rank: "VIII", name: "Aditi Das", marks: "95%" },
      ],

      subjectToppers12: [
        { stream: "Humanities", name: "Gauri Mishra", marks: "97%" },
        { stream: "Science", name: "Divyansh Verma", marks: "97%" },
        { stream: "Science", name: "Kavyansh", marks: "96.4%" },
        { stream: "Science", name: "Ronit", marks: "96%" },
        { stream: "Humanities", name: "Shipra", marks: "94.4%" },
        { stream: "Humanities", name: "Ridhima", marks: "94%" },
        { stream: "Science", name: "Virat", marks: "94%" },
        ],
      subjectToppers10: [
        { subject: "English", name: "Adway Bachchan", marks: "97" },
        { subject: "English", name: "Shweta Panigrahi", marks: "97" },
        { subject: "English", name: "Arhaan Meer", marks: "97" },
        { subject: "English", name: "Shonima Pandey", marks: "97" },
        { subject: "English", name: "Kavya Arora", marks: "97" },
        { subject: "English", name: "Nitya Nair", marks: "97" },
        { subject: "Hindi", name: "Ananya Singh", marks: "99" },
        { subject: "Maths", name: "Sidhi Aggarwal", marks: "100" },
        { subject: "Maths", name: "Anshuman Das", marks: "100" },
        { subject: "Science", name: "Adway Bachchan", marks: "99" },
        { subject: "Science", name: "Sidhi Aggarwal", marks: "99" },
        { subject: "Science", name: "Eshaan Verma", marks: "99" },
        { subject: "Science", name: "Kartik Rajpoot", marks: "99" },
        { subject: "Science", name: "Anshuman Das", marks: "99" },
        { subject: "Science", name: "Aryansh Dwivedi", marks: "99" },
        { subject: "Science", name: "Aditi Das", marks: "99" },
        { subject: "Painting", name: "Eshaan", marks: "90" },
        { subject: "Music", name: "Ishant Kumar", marks: "83" },
        { subject: "SST", name: "Tapasya Tiwari", marks: "99" },
        { subject: "AI", name: "Shweta Panigrahi", marks: "100" },
        { subject: "AI", name: "Arhaan Meer", marks: "100" },
        { subject: "AI", name: "Kartik Rajpoot", marks: "100" },
        { subject: "AI", name: "Tuleep Basu", marks: "100" },
        { subject: "AI", name: "Vivrit Gupta", marks: "100" },
        { subject: "AI", name: "Anshuman Das", marks: "100" },
        { subject: "AI", name: "Aryansh Dwivedi", marks: "100" },
        { subject: "AI", name: "Tapasya Tiwari", marks: "100" },
        { subject: "AI", name: "Ekansh Tripathi", marks: "100" },
        { subject: "AI", name: "Shubh Chaturvedi", marks: "100" },
        { subject: "AI", name: "Prakhar Singh", marks: "100" },
        { subject: "AI", name: "Aarav Agarwal", marks: "100" },
        { subject: "French", name: "Chehak Rajput", marks: "99" },
        { subject: "German", name: "Nidhish Gupta", marks: "95" },
        { subject: "Sanskrit", name: "Ishan Sachin Deshmukh", marks: "95" },
      ],

    },
  };

  const renderTable = (headers, rows) => (
    <div className="table-responsive my-3">
      <table className="table table-bordered table-hover text-center align-middle mb-0">
        <thead className="table-warning">
          <tr>
            {headers.map((head, idx) => (
              <th key={idx} className="text-uppercase">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows?.map((item, idx) => (
            <tr key={idx}>
              {Object.values(item).map((val, i) => (
                <td key={i}>
                  {i === 2 && typeof val === "string" && val.includes("%") ? (
                    <span className="badge bg-danger fs-6">{val}</span>
                  ) : (
                    val
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const sections = [
    {
      id: "school12",
      title: "Class 12 - School Toppers",
      headers: ["Rank", "Name", "Marks"],
      rows: data[activeYear]?.schoolToppers12,
    },
    {
      id: "school10",
      title: "Class 10 - School Toppers",
      headers: ["Rank", "Name", "Marks"],
      rows: data[activeYear]?.schoolToppers10,
    },
    {
      id: "subject12",
      title: "Class 12 - Stream Wise Toppers",
      headers: ["Subject", "Name", "Marks"],
      rows: data[activeYear]?.subjectToppers12,
    },
    {
      id: "subject10",
      title: "Class 10 - Subject Wise Toppers",
      headers: ["Subject", "Name", "Marks"],
      rows: data[activeYear]?.subjectToppers10,
    },
  ];

  return (
    <div className="container py-2">
       {/* <h3 className="text-center fw-bold">🏆 School, Stream, and Subject Toppers – Results Overview</h3> */}
      <div className="d-flex justify-content-center gap-2 mb-4">
        {years.map((year) => (
          <button
            key={year}
            className={`btn ${activeYear === year ? "btn-warning text-dark fw-bold" : "btn-outline-warning"}`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
  <h3 className="text-center fw-bold">🏆 School, Stream, and Subject Toppers – Results Overview</h3>
      <div className="accordion" id="resultsAccordion">
        {sections.map((section, idx) => (
          <div className="card mb-3 shadow-sm" key={section.id}>
            <h2 className="accordion-header" id={`heading${section.id}`}>
              <button
                className={`accordion-button ${idx !== 0 ? "collapsed" : ""} fw-semibold`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${section.id}`}
                aria-expanded={idx === 0}
                aria-controls={`collapse${section.id}`}
              >
                📘 {section.title}
              </button>
            </h2>
            <div
              id={`collapse${section.id}`}
              className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
              aria-labelledby={`heading${section.id}`}
              data-bs-parent="#resultsAccordion"
            >
              <div className="accordion-body">
                {renderTable(section.headers, section.rows)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoidaTableResultData;
