import axios from "axios";
import { useEffect, useState } from "react";

const AlumniNetwork = () => {
  const [alumniData, setAlumniData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://ags.univariety.com/common/v1/schoolapi/insights";
  const API_KEY = "VRvgV1oM2NlXhB3h"; // 🔥 Direct API Key

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "api-key": API_KEY,
            "Content-Type": "application/json"
          }
        });

        setAlumniData(response.data?.data || {});
      } catch (error) {
        setError("Failed to load alumni data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) return <center><h2 className="py-5">Loading Alumni Network data...</h2></center>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="main-heading">Profile of Members in the Ramagya School Alumni Network</h2>
        <p className="text-muted">
          Ramagya School alumni are in dominating positions across the world in different Careers, Companies, and Universities. Connect with them to grow Professionally & Personally.
        </p>
      </div>

      <div className="row justify-content-center">
        {[
          { title: "Alumni", value: alumniData.alumniCount || "N/A" },
          { title: "Prestigious Alumni", value: alumniData.prestigiousCount || "N/A" },
          { title: "Scholarships Won", value: alumniData.scholarshipWon || "N/A" }
        ].map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow-sm border-0 text-center p-3" style={{ borderRadius: "10px" }}>
              <h3 className="title-100">{item.value}</h3>
              <p className="text-muted">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniNetwork;
