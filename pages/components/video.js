import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "animate.css";
import Image from "next/image";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HomeVideoSection = () => {
  const scrollToSection = useRef(null); // Ref for the target section
  const playerRef = useRef(null);

  // State for player controls
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(true);

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="learn">
        <div className="container-fluid learn my-custom-video">
          <div
            className="video-banner"
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // This is 16:9 aspect ratio (YouTube default)
              overflow: "hidden",
              //  marginTop: "-150px",
            }}
          >
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=J2darvxUR-0"
              playing={playing}
              volume={volume}
              muted={muted}
              loop={true}
              controls={true}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    fs: 1,
                  },
                },
              }}
            />
          </div>

          {/* Scroll Down Icon */}
          <div className="downsection" onClick={handleScroll} style={{ cursor: "pointer" }}>
            <Image
              src="/images/scroll-down-icon.webp"
              className="animate__animated animate__fadeInDown animate__infinite animate__slow"
              alt="Scroll Down"
              width={30}
              height={30}
              priority
              style={{
                width: "auto",
                height: "auto",
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
           <div className="downsection" onClick={handleScroll}>
                    <Image
                      src="/images/scroll-down-icon.webp"
                      className="animate__animated animate__fadeInDown animate__infinite animate__slow"
                      alt="Ramagya school"
                      width={30}
                      height={30}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                   </div>
        </div>
      </div>

       {/* Target section to scroll to */}
       <div ref={scrollToSection} className="branch">
       
       </div>
        
    </>
  );
};

export default HomeVideoSection;
