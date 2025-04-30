"use client";

import { useRef, useEffect, useMemo } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js styles

export default function HomePage() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Memoize the options to prevent unnecessary re-renders
  const videoJsOptions = useMemo(() => ({
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    loop: true,
    poster: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/your-poster-image.jpg",
    sources: [
      {
        src: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4",
        type: "video/mp4",
      },
    ],
  }), []);

  useEffect(() => {
    // Initialize Video.js player if not already initialized
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, videoJsOptions);

      playerRef.current.ready(() => {
        console.log("Video.js player is ready");
      });
    }

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        console.log("Disposing of Video.js player");
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoJsOptions]);

  return (
    <main>
      <h1>Welcome to Our Homepage 🎥</h1>

      {/* Video.js player */}
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin"
          style={{ width: "100%", height: "500px" }}
          playsInline
        />
      </div>

      <style jsx>{`
        .video-js {
          display: block;
          max-width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
}
