import { useEffect, useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <button
          className="btn btn-danger position-fixed p-2"
          onClick={scrollToTop}
          style={{
              right: "5px",
              bottom: "160px", // Adjust if needed
              zIndex: "1000",
              borderRadius: "100px !important", // ✅ Fixed camelCase
              display: isVisible ? "block" : "none",
          }}
      >
          ↑
      </button>
    );
};

export default BackToTop;
