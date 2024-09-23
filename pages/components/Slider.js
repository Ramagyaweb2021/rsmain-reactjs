import React from 'react'
import DownSection from './DownSection'
const Slider = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
            {/* <video style={{marginTop:"-98px", zIndex:"1"}} */}
              <video className='main-video'
                width="100%"
                poster="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/bg/five-pillar-new.webp"
                loop="loop"
                muted={true} controls="controls"
                autoPlay="autoPlay"
                playsInline="playsInline"
                preload="preload">
                <source src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest-111111.mp4" type="video/mp4"/>
              </video>
              <DownSection/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slider