import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const VideoPlayerApp = () => {
  const [videoSrc, setVideoSrc] = useState('');

  const videos = [
    {
      title: 'Animation',
      src: 'https://www.youtube.com/embed/EJW8mgGx8dA',
      thumbnail: '/images/video-thumbnail.png'
    },
    {
      title: 'Club',
      src: 'https://www.youtube.com/embed/GS5QKlc0a4Y',
      thumbnail: '/images/video-thumbnail.png'
    },
    {
      title: 'Robotics',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    },
    {
      title: 'Programming',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    },
    {
      title: 'Astronomy',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    },
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    }
    ,
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    }
    ,
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.png'
    }
  ];

  const handleVideoClick = (src) => {
    setVideoSrc(src);
  };

  return (
    <section className="learn section fp-section fp-table active fp-completely" id="innovate">
      <div className="fp-tableExplore">
        <Container className="mt-0">
          <h1>
            INVOVATE
            <span className="lineclass" />
            <span className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
              INNOVATE YOUR INTEREST WITH US
            </span>
          </h1>
          <p>
            A child learns in many ways - questioning adults, collaborating with peers, and experiencing the world through his or her unique perspective. Ramagya School transforms these ways of learning into a methodology of relevance.
          </p>
          <Row style={{backgroundColor:"#D5D7D7"}}>
            {/* Left side: list of items in grid layout */}
            <Col md={4} id='innvovate-thumnail-area'>
              <Row>
                {videos.map((video, index) => (
                  <Col xs={12} md={6} className="mb-1" key={index}>
                    <Card onClick={() => handleVideoClick(video.src)} style={{marginTop:"10px"}}>
                      <Card.Img variant="top" src={video.thumbnail} />
                      <div className='play-button-overlay-innovate'>
                        <Image src="/images/play-button.png" className="play-button" alt="play-button" width={96} height={96}/>
                        {/* <span className="play-button">&#9658;</span> */}
                        <p className='mt-100 text-black'>{video.title}</p>
                      </div>
                      {/* <span className="play-button">&#9658;</span> */}
                      {/* <Card.Body>
                        <Card.Title>{video.title}</Card.Title>
                      </Card.Body> */}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right side: embedded video player */}
            <Col md={8}>
              {videoSrc ? (
                <div className="ratio ratio-16x9">
                  <iframe
                    width="100%"
                    height="500px"
                    src={`${videoSrc}?autoplay=1`}
                    allowFullScreen
                    title="YouTube video player"
                  ></iframe>
                </div>
              ) : (
                <div>
                  <Image src="/images/video-playing-area.png" alt="video-playing-area" width={848} height={480} />
                </div>
              )}
            </Col>
          </Row>
           {/* Learn more button */}
           <div className="approach mt-50">
              <Link href="#">
                View All
              </Link>
            </div>
        </Container>
      </div>
    </section>
  );
};

export default VideoPlayerApp;
