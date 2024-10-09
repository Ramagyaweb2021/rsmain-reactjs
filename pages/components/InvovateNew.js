import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
//import { FaPlayCircle } from 'react-icons/fa'; // Play icon from react-icons
//import './App.css'; // Add this if you're using a separate CSS file
import Image from 'next/image';
import Link from 'next/link';
const VideoPlayerApp = () => {
  const [videoSrc, setVideoSrc] = useState('');

  // List of video sources (YouTube links)
  const videos = [
    { 
      title: 'Video 1', 
      src: 'https://www.youtube.com/embed/EJW8mgGx8dA',
      thumbnail: 'https://img.youtube.com/vi/EJW8mgGx8dA/0.webp' // YouTube thumbnail
    },
    { 
      title: 'Video 2', 
      src: 'https://www.youtube.com/embed/GS5QKlc0a4Y',
      thumbnail: 'https://img.youtube.com/vi/GS5QKlc0a4Y/0.webp'
    },
    { 
      title: 'Video 3', 
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: 'https://img.youtube.com/vi/KSBSoF2qYqc/0.webp'
    },
    { 
      title: 'Video 4', 
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: 'https://img.youtube.com/vi/KSBSoF2qYqc/0.webp'
    },
    { 
      title: 'Video 5', 
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: 'https://img.youtube.com/vi/KSBSoF2qYqc/0.webp'
    }
    ,
    { 
      title: 'Video 6', 
      src: 'https://www.youtube.com/embed/KSBSoF2qYqc',
      thumbnail: 'https://img.youtube.com/vi/KSBSoF2qYqc/0.webp'
    }
  ];

  // Function to update video source
  const handleVideoClick = (src) => {
    setVideoSrc(src);
  };

  return (
    <Container className="learn section fp-section fp-table mt-4">
       <h1 className="">
          INVOVATE
        <span className="lineclass" />
        <span
          className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
            INNOVATE YOUR INTEREST WITH US
        </span>
      </h1>
      <p> A child learns in many ways - questioning adults, collaborating with peers, and experiencing the world through his or her unique perspective.Ramagya School transforms these ways of learning into a methodology of relevance. 
      </p>
      <Row>
        {/* Left side: list of items in grid layout */}
        <Col md={4}>
          <Row>
            {videos.map((video, index) => (
              <Col xs={12} md={6} className="mb-3" key={index}>
                <Card onClick={() => handleVideoClick(video.src)}>
                  <Card.Img variant="top" src={video.thumbnail} />
                  {/* Play Icon Overlay */}
                  <span className="play-button">&#9658;</span>
                  {/* Title Overlay */}
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right side: embedded video player */}
        <Col md={8}>
          {videoSrc ? (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                width="100%"
                height="500px"
                src={`${videoSrc}?autoplay=1`} // Auto-play by adding '?autoplay=1'
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
          ) : (
            <div>
              <Image src="/images/video-playing-area.webp" alt="video-playing-area" width={1250} height={518}/>
            </div>
          )}
        </Col>
         {/* Learb more button */}
         <div className="approach mt-20">
            <Link href="#">View All</Link>
          </div>
      </Row>
    </Container>
  );
};

export default VideoPlayerApp;