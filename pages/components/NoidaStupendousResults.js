import React from 'react';

const resultsData = [
  {
    title: "CBSE – X Class - 2024",
    highestScore: "99%",
    highestScoreWidth: "99%",
    passResults: "100%",
    passResultsWidth: "100%",
    scoringAbove90: "48%",
    scoringAbove90Width: "48%",
  },
  {
    title: "CBSE – XII Class - 2024",
    highestScore: "95%",
    highestScoreWidth: "95%",
    passResults: "100%",
    passResultsWidth: "100%",
    scoringAbove90: "28%",
    scoringAbove90Width: "28%",
  },
];

const NoidaStupendousResults = () => {
  return (
    <div className="academic-result-every-year">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title text-left mb-45">
              <br />
              <h2 className="title-100">STUPENDOUS ACADEMIC RESULTS YET ANOTHER YEAR!</h2>
              <p>
                School feels extremely proud to announce the CBSE (Class XII & X) results - 2024 and that we achieved a 100% pass result. Our
                students achieve more than they may have thought possible and their academic results reflect our shared commitment to excellence in this
                area.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {resultsData.map((result, index) => (
            <div key={index} className="col-md-offset-3 col-md-4" style={{ padding: 10 }}>
              <div className="result-box">
                <h3 className="progress-title">{result.title}</h3>
                <hr />
                <h3 className="progress-title">
                  {result.highestScore}
                  <br />
                  School Highest Score
                </h3>
                <div className="progress green">
                  <div className="progress-bar" style={{ width: result.highestScoreWidth, background: "#a5cd39" }} />
                </div>
                <h3 className="progress-title">
                  {result.passResults}
                  <br />
                  Pass Results
                </h3>
                <div className="progress blue">
                  <div className="progress-bar" style={{ width: result.passResultsWidth, background: "#00adee" }} />
                </div>
                <h3 className="progress-title">
                  {result.scoringAbove90}
                  <br />
                  Students Scoring 90% & above
                </h3>
                <div className="progress yellow">
                  <div className="progress-bar" style={{ width: result.scoringAbove90Width, background: "#f6921e" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sec-title text-left mb-45" style={{ padding: 10 }}>
          <br />
          <p>Congratulations to the students who excelled in academics and promise a bright future.</p>
          <p>We are proud of you!</p>
        </div>
      </div>
    </div>
  );
};

export default NoidaStupendousResults;
