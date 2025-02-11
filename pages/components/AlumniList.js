import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AlumniList = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://ags.univariety.com/common/v1/schoolapi/alumni-profile-card";
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
        setAlumni(response.data?.data || []);
      } catch (error) {
        console.error("❌ Error fetching alumni data:", error.response?.data || error.message);
        setError("Failed to load alumni data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) return <p>Loading alumni data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1>🎓 Alumni List</h1>
      <Slider {...sliderSettings}>
        {alumni.map((alum) => (
          <div key={alum.full_name} style={{ textAlign: "center", padding: "10px" }}>
            <img src={alum.image_path} alt={alum.full_name} width="150" style={{ borderRadius: "10px" }} />
            <p><strong>{alum.full_name}</strong> ({alum.pass_out_year})</p>
            <p>🎓 {alum.institue_name}</p>
            <p>🏫 {alum.campus_name}</p>
            <p>📚 {alum.department}</p>
            <p>📍 {alum.country}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniList;
