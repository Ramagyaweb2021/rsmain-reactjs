"use client";
import { useState } from "react";

const DadriTableResultData = () => {
  const [activeYear, setActiveYear] = useState("2023-24");

  const data = {
    "2023-24": {
      schoolToppers12: [
        { rank: "I", name: "SHUBHAM KASANA", marks: "84.33%" },
        { rank: "II", name: "AARCHI BHATI", marks: "77%" },
        { rank: "III", name: "ANAMIKA SINGH", marks: "76.83%" }
      ],
      schoolToppers10: [
        { rank: "I", name: "ABHAY YADAV", marks: "95.5%" },
        { rank: "II", name: "YASHASHVI SHARMA", marks: "89.33%" },
        { rank: "III", name: "VANSH PAYLA", marks: "89.33%" },
        { rank: "IV", name: "ZUNAID ALVI", marks: "88.33%" }
      ],
      subjectToppers12: [
        { subject: "Science", name: "Sidak Singh", marks: "94.2%" },
      ],
      subjectToppers10: [
        { subject: "AI", name: "Umika Mishra", marks: "100" },
       
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
            <th>Rank</th>
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
            <th>Rank</th>
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

      {/* <h3 className="text-center fw-bold mt-5">SUBJECT TOPPERS RESULTS</h3>
      <div className="d-flex justify-content-center my-3">
        {["2023-24", "2024-25"].map((year) => (
          <button
            key={year}
            className={`btn mx-2 ${activeYear === year ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => setActiveYear(year)}
            disabled={year === "2024-25"} 
          >
            {year}
          </button>
        ))}
      </div>
      <h5 className="text-center fw-bold mt-4">CLASS 12</h5>
      <table className="table border">
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
      <h5 className="text-center fw-bold mt-4">CLASS 10</h5>
      <table className="table border">
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
      </table> */}
    </div>
  );
};

export default DadriTableResultData;
