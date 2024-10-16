import React from 'react'
const Slider = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
            {/* <video style={{marginTop:"-98px", zIndex:"1"}} */}
              <video className='main-video'
                width="100%"
                poster="/images/main-banner.webp"
                loop="loop"
                muted={true} controls="controls"
                autoPlay="autoPlay"
                playsInline="playsInline"
                preload="preload">
                <source src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4" type="video/mp4"/>
              </video>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slider