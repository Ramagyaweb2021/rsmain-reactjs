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
        { rank: "I", name: "Sanjana Swain", marks: "95%" },
      ],
      schoolToppers10: [
        { rank: "I", name: "Sanjana Swain", marks: "95%" },
      ],
      subjectToppers12: [
        { rank: "I", name: "Sanjana Swain", marks: "95%" },
      ],
      subjectToppers10: [
        { rank: "I", name: "Sanjana Swain", marks: "95%" },
      ], // Added this
    },
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bold">SCHOOL TOPPERS RESULTS</h3>

      <div className="d-flex justify-content-center my-3">
        {years.map((year) => (
          <button
            key={year}
            className={`btn mx-2 ${
              activeYear === year ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <h5 className="text-center fw-bold mt-4">CLASS 12</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>MARKS</th>
            </tr>
          </thead>
          <tbody>
            {data[activeYear].schoolToppers12.map((item, idx) => (
              <tr key={idx}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h5 className="text-center fw-bold mt-4">CLASS 10</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>MARKS</th>
            </tr>
          </thead>
          <tbody>
            {data[activeYear].schoolToppers10.map((item, idx) => (
              <tr key={idx}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-center fw-bold mt-5">SUBJECT TOPPERS RESULTS</h3>

      <h5 className="text-center fw-bold mt-4">CLASS 12</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SUBJECT</th>
              <th>NAME</th>
              <th>MARKS</th>
            </tr>
          </thead>
          <tbody>
            {data[activeYear].subjectToppers12.map((item, idx) => (
              <tr key={idx}>
                <td>{item.subject}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h5 className="text-center fw-bold mt-4">CLASS 10</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SUBJECT</th>
              <th>NAME</th>
              <th>MARKS</th>
            </tr>
          </thead>
          <tbody>
            {data[activeYear].subjectToppers10.map((item, idx) => (
              <tr key={idx}>
                <td>{item.subject}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoidaTableResultData;
