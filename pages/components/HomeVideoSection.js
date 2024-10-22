import React from 'react'

const HomeVideoSection = () => {
  return (
    <>
        <div className="fp-tableSlider">
          <video
            className="main-video"
            width="100%"
            poster="/images/main-banner.webp"
            loop
            muted
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <source
              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4"
              type="video/mp4"
            />
          </video>
        </div>
       
    </>
  )
}

export default HomeVideoSection