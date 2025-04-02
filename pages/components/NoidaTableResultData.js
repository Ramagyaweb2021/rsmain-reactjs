"use client";
import { useState } from "react";

const NoidaTableResultData = () => {
  const [activeYear, setActiveYear] = useState("2023-24");

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
        { subject: "Commerce", name: "Vihan Gupta", marks: "93.8%" },
        { subject: "Commerce", name: "Shrishti Gupta", marks: "93.2%" },
        { subject: "Commerce", name: "Animesh Aryan", marks: "92.2%" },
        { subject: "Humanities", name: "Sanjana Swain", marks: "95%" },
        { subject: "Humanities", name: "Kumari Aprajita", marks: "94%" },
        { subject: "Humanities", name: "Ayat Sheikh", marks: "89.4%" },
      ],
      subjectToppers10: [
        { subject: "AI", name: "Umika Mishra", marks: "100" },
        { subject: "AI", name: "Swapnil Bhuyan", marks: "100" },
        { subject: "AI", name: "Apoorva Kushwaha", marks: "100" },
        { subject: "AI", name: "Disha Dedha", marks: "100" },
        { subject: "AI", name: "Prince Saxena", marks: "100" },
        { subject: "AI", name: "Sehej Babbar", marks: "100" },
        { subject: "AI", name: "Himisha Rawat", marks: "100" },
        { subject: "AI", name: "Manas Kanth", marks: "100" },
        { subject: "AI", name: "Krishna Tyagi", marks: "100" },
        { subject: "AI", name: "Nandini Bhardwaj", marks: "100" },
        { subject: "AI", name: "Shikhar Mohan Verma", marks: "100" },
        { subject: "AI", name: "Aditya Kharkwal", marks: "100" },
        { subject: "AI", name: "Dev Kumar Sharma", marks: "100" },
        { subject: "Mathematics – Basic", name: "Apoorva Kushwaha", marks: "100" },
        { subject: "Science", name: "Sanchit Raj", marks: "100" },
        { subject: "Social Science", name: "Aarna Ruhela", marks: "100" },
        { subject: "English LNG & LIT.", name: "Prince Saxena", marks: "99" },
        { subject: "English LNG & LIT.", name: "Anshika Pandey", marks: "99" },
        { subject: "Mathematics", name: "Umika Mishra", marks: "99" },
        { subject: "Mathematics", name: "Sanchit Raj", marks: "99" },
        { subject: "Hindi Course-B", name: "Ankit Kumar", marks: "98" },
        { subject: "Painting", name: "Jaishika", marks: "98" },
        { subject: "French", name: "Tanisha Shah", marks: "96" },
        { subject: "Hind. Music Vocal", name: "Rishit A Pandita", marks: "90" },
       
      ],
    },
    "2024-25": {
      schoolToppers12: [],
      schoolToppers10: [],
      subjectToppers12: [],
    },
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bold">SCHOOL TOPPERS RESULTS</h3>

      <div className="d-flex justify-content-center my-3">
        {["2023-24", "2024-25"].map((year) => (
          <button
            key={year}
            className={`btn mx-2 ${activeYear === year ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setActiveYear(year)}
            disabled={year === "2024-25"} // Disables 2024-25 button
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
      <div className="d-flex justify-content-center my-3">
        {["2023-24", "2024-25"].map((year) => (
          <button
            key={year}
            className={`btn mx-2 ${activeYear === year ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setActiveYear(year)}
            disabled={year === "2024-25"} // Disables 2024-25 button
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
