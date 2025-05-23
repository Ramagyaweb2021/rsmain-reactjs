import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const awards = [
  { src: '/images/awards/bharat-ranking-noida.webp', alt: 'Bharat Ranking Noida' },
  { src: '/images/awards/home-2.webp', alt: 'Home Award 2' },
  { src: '/images/awards/home-1.webp', alt: 'Home Award 1' },
  { src: '/images/awards/home-4.webp', alt: 'Home Award 4' },
];

const HomeAwardsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__zoomIn');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="learn">
      <Container className="container learn my-custom-awards">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1 className="main-heading">
              AWARDS
              <span className="lineclass" />
              <span className="sub-heading animate-on-scroll">
                Recognizing Excellence & Achievements
              </span>
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          {awards.map((award, index) => (
            <div className="col-lg-3 col-6 image-resize" key={index}>
              <Image
                src={award.src}
                width={300}
                height={300}
                alt={award.alt}
                className="mb-3"
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="learn-more-button">
            <Link href="/awards-and-recognition">View More</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAwardsSection;
