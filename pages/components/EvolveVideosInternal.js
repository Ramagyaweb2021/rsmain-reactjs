import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';

const EvolveVideosInternal = () => {
  const [videoSrc, setVideoSrc] = useState('');

  const videos = [
    {
      title: 'SPORTS',
      src: 'https://www.youtube.com/embed/i4gM_96VS5k',
      thumbnail: '/images/innovation.webp'
    },
    {
      title: 'CSR INITIATIVE',
      src: 'https://www.youtube.com/embed/WMaMyzm31O0',
      thumbnail: '/images/CSR.webp'
    },
    {
      title: 'TM',
      src: 'https://www.youtube.com/embed/z1rXTUCQosg',
      thumbnail: '/images/self-reflection.webp'
    },
    {
      title: 'MUN',
      src: 'https://www.youtube.com/embed/i4V0qCLZ4RQ',
      thumbnail: '/images/nipunta.webp'
    }
  ];

  return (
    <>
       <section className="service_post_111 position-relative">
                <div className="row">
                  <div className='col-md-6 service_post_11 position-relative'>
                    <div className='row internal-evolve-items'>
                      {videos.map((video, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 g-1" key={index}>
                          <div className="service_box type_four color_two hover_1">
                            <div className="content_box trans">
                              <div className="top">
                                <div className="icon trans">
                                  <Image src={video.thumbnail} alt={video.title} width={50} height={50} />
                                </div>
                                <div className="steps trans">{index + 1}</div>
                                <h4 className="title_24 trans">
                                  {video.title}
                                </h4>
                                {/* <Image src="/images/play-button-1.webp" onClick={() => setVideoSrc(video.src)} className="play-button" alt="play-button" width={40} height={40}/> */}
                                {/* <button onClick={() => setVideoSrc(video.src)}>Play Video</button> */}
                              </div>
                              <div className="line_box">
                                <div className="line" />
                                <Image src="/images/play-button-1.webp" onClick={() => setVideoSrc(video.src)} className="play-button1" alt="play-button" width={35} height={35}/>
                                 {/* <p>Play Video</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='col-md-6 g-0'>
                    <div className='row'>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 g-0">
                        <div className="image-section">
                          {videoSrc ? (
                            <div className="ratio ratio-16x9">
                              <iframe
                                width="100%"
                                height="500px"
                                src={`${videoSrc}?autoplay=1`}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="Video Player"
                              ></iframe>
                            </div>
                          ) : (
                            <Image
                              src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/video-images/rsa-school.webp"
                              alt="RSA School"
                              width={848}
                              height={318}
                              style={{ width: "auto", height: "auto" }}
                            />

                            // <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/video-images/rsa-school.webp" alt="Video Placeholder" width={848} height={318} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </>
  );
};

export default EvolveVideosInternal;
