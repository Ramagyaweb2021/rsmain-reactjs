import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlumniGuidanceList = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://ags.univariety.com/common/v1/schoolapi/alumni-profile-card-notable";
  const API_KEY = "VRvgV1oM2NlXhB3h"; // 🔥 Directly using the API key

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "api-key": API_KEY,
            "Content-Type": "application/json"
          }
        });

        setAlumni(response.data?.data || []);
      } catch (error) {
        setError("Failed to load alumni data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) return <center><h2 className="py-5">Loading Guiding Alumni data...</h2></center>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="alumni-main-section-heading">Ramagya School Guiding Alumni</h2>
        <p>
          We are proud of our alumni who are setting an example and motivating younger students. 
          Here are some alumni who are actively guiding current students by answering questions, conducting webinars, and much more.
        </p>
      </div>

      <Slider {...sliderSettings}>
        {alumni.map((item, index) => ( 
          <div key={item.id || index} className="col-md-4 mx-0">
            <div className="card shadow-sm border-0 text-center p-1" style={{ maxWidth: "380px", borderRadius: "10px" }}>
              <div className="mx-auto rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" }}>
                <Image 
                  src={item.image_path || "/default-avatar.png"}
                  alt={item.full_name || "Alumni"}
                  width={100}
                  height={100}
                  className="img-fluid"
                  onError={(e) => e.target.src = "/default-avatar.png"} 
                />
              </div>

              <h6 className="mt-3 fw-bold">{item.full_name || "Unknown Alumni"}</h6>
              <hr className="mx-auto" style={{ width: "100%" }} />

              <div className="text-start-alumni px-2">
                <p className="d-flex align-items-center"><i className="bi bi-building fs-5 me-2"></i> Ramagya School, Batch {item.pass_out_year || "N/A"}</p>
                <p className="d-flex align-items-center"><i className="bi bi-mortarboard fs-5 me-2"></i> {item.institue_name || "N/A"}</p>
                <p className="d-flex align-items-center"><i className="bi bi-award fs-5 me-2"></i> {item.department || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniGuidanceList;
