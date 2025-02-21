import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image"; // ✅ Move import to the top
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlumniGuidanceList = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://ags.univariety.com/common/v1/schoolapi/alumni-profile-card-notable";
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
        setAlumni(response.data?.data || []); // Ensure this matches API response
      } catch (error) {
        console.error("❌ Error fetching alumni data:", error.response?.data || error.message);
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
      {/* ✅ Heading & Paragraph Before the Slider */}
      <div className="text-center mb-4">
        <h2 className="main-heading">Ramagya School Guiding Alumni</h2>
        <p className="">
          We are proud of our alumni who are setting an example and motivating younger students. Here are some alumni who are actively guiding current students by answering questions, conducting webinars and much more.
        </p>
      </div>

      {/* Alumni Slider */}
      <Slider {...sliderSettings}>
        {alumni.map((item, index) => ( 
          <div key={item.id || index} className="col-md-4 mx-0">
            <div className="card shadow-sm border-0 text-center p-1" style={{ maxWidth: "380px", borderRadius: "10px" }}>
              <div className="mx-auto rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" }}>
                <Image src={item.image_path} alt={item.full_name} width={100} height={100} className="img-fluid" id="alumni-profile-img" />
              </div>
              <h6 className="mt-3 fw-bold" style={{textAlign:"center"}}>{item.full_name}</h6>
              <hr className="mx-auto" style={{ width: "100%" }} />
              <div className="text-start-alumni px-2">
                <p className="d-flex align-items-center"><i className="bi bi-building fs-5 me-2"></i>Ramagya School, Batch {item.pass_out_year}</p>
                <p className="d-flex align-items-center"><i className="bi bi-mortarboard fs-5 me-2"></i> {item.institue_name}</p>
                <p className="d-flex align-items-center"><i className="bi bi-award fs-5 me-2"></i> {item.department}</p>
                {/* <p className="d-flex align-items-center"><i className="bi bi-briefcase fs-5 me-2"></i> {item.role}</p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniGuidanceList;
