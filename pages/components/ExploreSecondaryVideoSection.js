import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const ExploreSecondaryVideoSection = () => {
  const [videoSrc, setVideoSrc] = useState('');

  const videos = [
    {
      title: 'Animation',
      src: 'https://www.youtube.com/embed/EJW8mgGx8dA',
      thumbnail: '/images/video-thumbnail.webp'
    },
    {
      title: 'Club',
      src: 'https://www.youtube.com/embed/GS5QKlc0a4Y',
      thumbnail: '/images/video-thumbnail.webp'
    },
    {
      title: 'Robotics',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    },
    {
      title: 'Programming',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    },
    {
      title: 'Astronomy',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    },
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    }
    ,
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    }
    ,
    {
      title: 'Science',
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: '/images/video-thumbnail.webp'
    }
  ];

  const handleVideoClick = (src) => {
    setVideoSrc(src);
  };

  return (
    <Row style={{backgroundColor:"#E7EAEB80"}}>
      {/* Left side: list of items in grid layout */}
      <Col md={4} id='innvovate-thumnail-area'>
        <Row>
          {videos.map((video, index) => (
            <Col xs={12} md={6} className="mb-1" key={index}>
              <Card onClick={() => handleVideoClick(video.src)} style={{marginTop:"10px"}}>
                <Card.Img variant="top" src={video.thumbnail} />
                <div className='play-button-overlay-innovate'>
                  <Image src="/images/play-button-1.webp" className="play-button" alt="play-button" width={96} height={96}/>
                  {/* <span className="play-button">&#9658;</span> */}
                  <p className='mt-110 text-theme-color'>{video.title}</p>
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
            <Image src="/images/video-playing-area.webp" alt="video-playing-area" width={848} height={480} />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ExploreSecondaryVideoSection;
