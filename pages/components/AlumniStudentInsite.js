import axios from "axios";
import { useEffect, useState } from "react";

const AlumniNetwork = () => {
  const [alumniData, setAlumniData] = useState(null); // ✅ Store API data as an object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://ags.univariety.com/common/v1/schoolapi/insights";
  const API_KEY = process.env.NEXT_PUBLIC_ALUMNI_API_KEY; // Secure API Key

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        if (!API_KEY) throw new Error("API Key is missing!");

        const response = await axios.get(API_URL, {
          headers: {
            "api-key": API_KEY,
            "Content-Type": "application/json"
          }
        });

        console.log("✅ API Response:", response.data);
        setAlumniData(response.data?.data || {}); // ✅ Store API data properly
      } catch (error) {
        console.error("❌ Error fetching alumni data:", error.response?.data || error.message);
        setError("Failed to load alumni data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) return <center><h2 className="py-5">Loading Student Insights data...</h2></center>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      {/* ✅ Heading & Paragraph Before the Data */}
      <div className="text-center mb-4">
        <h2 className="main-heading">Student Insights</h2>
        <p className="text-muted">
           Ramagya School students are in dominating positions across the world in different Careers, Companies and Universities.
        </p>
      </div>

      {/* ✅ Display API Data in Cards */}
      <div className="row justify-content-center">
        {[
          { title: "Universities Have made offers", value: alumniData.alumniCount },
          { title: "Admissions In Prestigious Colleges", value: alumniData.prestigiousCount },
          // { title: "Scholarships Won", value: alumniData.scholarshipWon },
          // { title: "Total Offers", value: alumniData.totalOffers },
          // { title: "Offers Per Student", value: alumniData.offerPerStudent }
        ].map((item, index) => (
          <div key={index} className="col-md-4 mb-3 m-2">
            <div className="card shadow-sm border-0 text-center p-5" style={{ borderRadius: "10px"}}>
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
