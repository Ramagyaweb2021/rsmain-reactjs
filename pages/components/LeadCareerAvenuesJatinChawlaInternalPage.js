import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const LeadCareerAvenuesJatinChawlaInternalPage = () => {
  const [activeCategory, setActiveCategory] = useState('JITIN CHAWLA'); // Default category

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  // Data for categories
  const categoryData = [
    {
      category: 'JITIN CHAWLA',
      cards: [
        {
          number: '01',
          title: 'Unlocking Global Opportunities with JITIN CHAWLA',
          text: 'In collaboration with renowned educational consultant Jitin Chawla, Ramagya School provides students with a unique platform to explore academic avenues at premier institutions around the globe. Recognized for his expertise in guiding students towards world-renowned universities, Jitin Chawla partners with us to offer tailored support that sets students on the path to success in higher education.',
        },
        {
          number: '02',
          title: 'Opportunities at Leading Universities',
          text: 'Through this partnership, our students gain exclusive access to valuable information and resources on applying to esteemed universities, including Purdue University, the University of Toronto, the London School of Economics, the University of Amsterdam, the University of Melbourne, Cambridge University, and Cornell University. These institutions offer rigorous academics and expansive opportunities, preparing students for successful futures.',
        },
        {
          number: '03',
          title: 'Personalized College Admissions Guidance',
          text: 'With Jitin Chawlas expert advice, students receive personalized assistance in navigating the complexities of college admissions—from selecting the right courses to crafting impactful personal statements. His guidance ensures students are well-prepared and confident, presenting their strongest selves throughout the application process.',
        },
        {
          number: '04',
          title: 'Workshops and Seminars',
          text: 'Our students regularly benefit from hands-on workshops and seminars led by Jitin Chawla, covering the application process, interview techniques, and scholarship opportunities. These sessions empower students with practical knowledge and inspire them to take charge of their educational journeys with clarity and confidence.',
        },
      ],
    },
    {
      category: 'RIPS',
      cards: [
        {
          number: '01',
          title: 'Ramagya Institute for Professional Studies (RIPS)',
          text: 'Ramagya Institute for Professional Studies (RIPS) is dedicated to bridging the gap between academic knowledge and practical industry skills, ensuring that students are prepared for the demands of today’s competitive job market. At RIPS, we believe that with the right skills, mentorship, and hands-on experience, students can turn their career aspirations into real achievements. Located in Noida, RIPS stands out as a premier private institute for professional training, research, and skill enhancement, offering a range of certified programs that equip individuals to excel in their chosen paths.',
        },
        {
          number: '02',
          title: 'Why Choose RIPS? A Focus on Industry-Relevant Learning',
          text: 'Our programs at RIPS are designed and delivered by seasoned industry professionals who bring their extensive expertise directly into the classroom. Unlike traditional academic institutions, RIPS combines theory with real-world applications, ensuring students gain not only knowledge but also practical insights into the latest tools, techniques, and trends in the professional landscape. Our instructors are industry leaders and experts who actively participate in curriculum development, strategic planning, and practical training, ensuring each course stays relevant and impactful.',
        },
        {
          number: '03',
          title: 'Certified Professional Courses: Practical Skills for Career Success',
          text: 'RIPS offers a wide range of certified courses tailored to meet the needs of today’s dynamic job market. These programs are carefully crafted to develop students’ skills and give them a competitive edge, preparing them to make meaningful contributions to their fields. Each course combines rigorous theoretical frameworks with real-life case studies, practical exercises, and hands-on projects, allowing students to build a strong foundation in their chosen field. This comprehensive approach empowers students to become not just knowledgeable but highly competent professionals.',
        },
        {
          number: '04',
          title: 'Empowering Careers through Experiential Learning',
          text: 'At RIPS, we understand that experience is key to success. Our programs go beyond traditional classroom learning to provide real-world experiences that enhance students’ understanding and build their confidence. Through practical training and exposure to real industry challenges, RIPS students are equipped to tackle complex professional scenarios with skill and precision. We focus on skill-building and experiential learning, giving students the practical expertise they need to exceed employer expectations and excel in their careers.',
        },
        {
          number: '05',
          title: 'A Commitment to Skill Development and Career Advancement',
          text: 'In todays job market, having a degree alone is often not enough. RIPS is committed to providing students with specialized skill development that sets them apart from the crowd. Our courses are designed to foster critical thinking, problem-solving, and innovation—qualities that employers highly value. Whether students are aiming to start their careers, advance within their fields, or make a career change, RIPS equips them with the necessary tools to succeed.',
        },
        {
          number: '06',
          title: 'Your Pathway to Professional Fulfillment',
          text: 'RIPS is more than an educational institution - it is a platform that helps individuals realize their true potential and achieve their career goals. We provide the training, certifications, and mentorship needed to build successful careers. Whether you are unemployed, seeking career advancement, or eager to shift to a new professional path, RIPS offers the guidance, support, and industry knowledge that are critical to achieving long-term success.',
        },
      ],
    },
    // {
    //   category: 'RESULTS',
    //   cards: [
    //     {
    //       number: '01',
    //       title: 'Guidance and Counseling',
    //       text: 'Comprehensive career counseling to help students explore and choose the right paths.',
    //     },
    //     {
    //       number: '02',
    //       title: 'Industry Connections',
    //       text: 'Collaboration with industry experts provides practical insights and networking opportunities.',
    //     },
    //   ],
    // },
  ];

  // Get cards for the active category
  const activeCards = categoryData.find(
    (categoryItem) => categoryItem.category === activeCategory
  )?.cards;

  return (
    <Container className="container">
      <div className="row learn">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h1 className="main-heading" style={{ fontSize: '30px' }}>
            CAREER AVENUES
            <span className="lineclass" />
            <span
              className="wow animate__animated animate__zoomIn"
              style={{ animationDelay: '0.3s' }}
            >
              Pathway to a Bright and Successful Future
            </span>
          </h1>
        </div>
      </div>
      <div className="row">
        {/* Category Buttons */}
        <div className="col-md-12 d-flex justify-content-center my-3">
          {categoryData.map((categoryItem) => (
            <button
              key={categoryItem.category}
              className={`btn mx-2 ${
                activeCategory === categoryItem.category
                  ? 'btn btn-warning-gallery'
                  : 'btn-outline-warning'
              }`}
              onClick={() => setActiveCategory(categoryItem.category)}
            >
              {categoryItem.category}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="row justify-content-center my-5 g-1">
          {activeCards?.map((card, index) => (
            <div key={index} className="col-md-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-value-body text-left">
                  <h2 className="card-number text-left">{card.number}</h2>
                  <h5 className="card-subtitle mb-3 fw-bold">{card.title}</h5>
                  <p className="text-left">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LeadCareerAvenuesJatinChawlaInternalPage;
