"use client";

import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js styles

export default function HomePage() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,  // Auto-play the video
    loop: true,      // Loop the video
    poster: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/your-poster-image.jpg", // Add the poster image URL here
    sources: [
      {
        src: "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4",
        type: "video/mp4",
      },
    ],
  };

  useEffect(() => {
    console.log("Initializing Video.js player");

    // Initialize Video.js player
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, videoJsOptions);

      // Listen for the 'ready' event to ensure the player is fully initialized
      playerRef.current.on('ready', () => {
        console.log('Video.js player is ready');
      });
    }

    // Clean up when the component unmounts
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
          style={{ width: "100%", height: "500px" }} // Set a fixed height for testing
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
