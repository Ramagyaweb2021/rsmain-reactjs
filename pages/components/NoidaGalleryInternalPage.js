import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'animate.css';

const WOW = dynamic(() => import('wowjs'), { ssr: false });

const NoidaGalleryInternalPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeGallery, setActiveGallery] = useState('Images');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const imageTabs = ['All'];
  const imageTabs = ['All', 'Daycare', 'Education Hub', 'Events', 'Extracurricular', 'Interschool Events', 'Sports Galore'];
  const videoTabs = [
    'All', 'Celeb Buzz', 'Feedback Corner', 'Academia', 'Sports Galore', 'Beyond Academics', 'Athletic Center', 'Outdoor Fun', 'Co-Curricular Activities', 'Skill Boosting Sessions', 'Reading Fiesta', 'Wellness & Support', 'Parent Testimonials', 'Student testimonials', 'Event Spotlight', 'Change Makers', 'Evolve Video'
  ];

  const items = [
    // **********Image gallery for daycare
    {
      "src": "/images/gallery/daycare/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    {
      "src": "/images/gallery/daycare/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/daycare/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    ,
    {
      "src": "/images/gallery/daycare/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Daycare",
      "type": "image"
    },
    // **********Image gallery for education hub
    {
      "src": "/images/gallery/education-hub/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    {
      "src": "/images/gallery/education-hub/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Education Hub",
      "type": "image"
    },
    // **********Image gallery for events
    {
      "src": "/images/gallery/events/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/19.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/events/20.webp",
      "title": "Ramagya School Gallery",
      "category": "Events",
      "type": "image"
    },
    // **************************Images gallery for Extracurricular
    {
      "src": "/images/gallery/extracurricular/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    {
      "src": "/images/gallery/extracurricular/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Extracurricular",
      "type": "image"
    },
    // **************Image gallery for interschool events
    {
      "src": "/images/gallery/interschool-events/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    {
      "src": "/images/gallery/interschool-events/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Interschool Events",
      "type": "image"
    },
    // ***********************Image gallery for Sports Gallore
    {
      "src": "/images/gallery/sports-gallore/1.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/2.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/3.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/4.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/5.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/6.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/7.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/8.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/9.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/10.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/11.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/12.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/13.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/14.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/15.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/16.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/17.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/18.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },
    {
      "src": "/images/gallery/sports-gallore/19.webp",
      "title": "Ramagya School Gallery",
      "category": "Sports Galore",
      "type": "image"
    },

    // ********************************************************************Video gallery for Celeb Buzz
    {
      src: 'https://img.youtube.com/vi/V-1lie-TRYw/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'V-1lie-TRYw'
    },
    {
      src: 'https://img.youtube.com/vi/7BH1btgK_SI/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '7BH1btgK_SI'
    },
    {
      src: 'https://img.youtube.com/vi/NbRC4wiMRb0/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'NbRC4wiMRb0'
    },
    {
      src: 'https://img.youtube.com/vi/dkSWbDr5-Hg/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'dkSWbDr5-Hg'
    },
    {
      src: 'https://img.youtube.com/vi/1yWQuKlJqTc/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '1yWQuKlJqTc'
    },
    {
      src: 'https://img.youtube.com/vi/zUB6ocBTYzs/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'zUB6ocBTYzs'
    },

    {
      src: 'https://img.youtube.com/vi/9ITohrzpf7Q/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '9ITohrzpf7Q'
    },
    {
      src: 'https://img.youtube.com/vi/8xfmljcYBZ0/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '8xfmljcYBZ0'
    },
    {
      title: 'Shive Aroore Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'tm0yBtH04ao',
      src: `https://img.youtube.com/vi/tm0yBtH04ao/hqdefault.jpg`
    },

    {

      title: 'Sports Event',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'cwrBuQjYpOI',
      src: `https://img.youtube.com/vi/cwrBuQjYpOI/hqdefault.jpg`
    },
    {

      title: 'Testimonial Video 1',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'YCDEIq4f--g',
      src: `https://img.youtube.com/vi/YCDEIq4f--g/hqdefault.jpg`
    },
    {

      title: 'Testimonial Video 2',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'PARbI2ne94c',
      src: `https://img.youtube.com/vi/PARbI2ne94c/hqdefault.jpg`
    },
    {

      title: 'Jacob Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'EJW8mgGx8dA',
      src: `https://img.youtube.com/vi/EJW8mgGx8dA/hqdefault.jpg`
    },
    {

      title: 'Smiriti Testimonial 1',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'J80V7ZEn25I',
      src: `https://img.youtube.com/vi/J80V7ZEn25I/hqdefault.jpg`
    },
    {

      title: 'Smiriti Testimonial 2',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'XzhWSqIlts8',
      src: `https://img.youtube.com/vi/XzhWSqIlts8/hqdefault.jpg`
    },
    {

      title: 'Smiriti Testimonial 3',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '1yWQuKlJqTc',
      src: `https://img.youtube.com/vi/1yWQuKlJqTc/hqdefault.jpg`
    },
    {

      title: 'Krishna Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'EDJKvB2tPGk',
      src: `https://img.youtube.com/vi/EDJKvB2tPGk/hqdefault.jpg`
    },
    {

      title: 'Sunil Dabas Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'HbN-R3NqP2k',
      src: `https://img.youtube.com/vi/HbN-R3NqP2k/hqdefault.jpg`
    },
    {

      title: 'Chetan Bhagat Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'WrQHBzo0ww4',
      src: `https://img.youtube.com/vi/WrQHBzo0ww4/hqdefault.jpg`
    },
    {

      title: 'Krishna Testimonial 2',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '-GLEJ9Kl4Cc',
      src: `https://img.youtube.com/vi/-GLEJ9Kl4Cc/hqdefault.jpg`
    },
    {

      title: 'Dav More Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'GS5QKlc0a4Y',
      src: `https://img.youtube.com/vi/GS5QKlc0a4Y/hqdefault.jpg`
    },

    {
      title: 'Percilla Herrera Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: '1Ed7WJhGUig',
      src: 'https://img.youtube.com/vi/1Ed7WJhGUig/hqdefault.jpg'
    },
    {
      title: 'Ashley Deans Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'EdpF4q8OYEE',
      src: 'https://img.youtube.com/vi/EdpF4q8OYEE/hqdefault.jpg'
    },
    {
      title: 'Abhinav Bindra Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'Hmp_tCEB0Y4',
      src: 'https://img.youtube.com/vi/Hmp_tCEB0Y4/hqdefault.jpg'
    },
    {
      title: 'Bhupati Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'ik4fTTk2CSQ',
      src: 'https://img.youtube.com/vi/ik4fTTk2CSQ/hqdefault.jpg'
    },
    {
      title: 'Vishwanathan Testimonial',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'rYnH2LND6Lg',
      src: 'https://img.youtube.com/vi/rYnH2LND6Lg/hqdefault.jpg'
    },
    {
      src: 'https://img.youtube.com/vi/Qt9mXpaNvj0/hqdefault.jpg',
      title: 'Nikhil Naz',
      category: 'Celeb Buzz',
      type: 'video',
      videoId: 'Qt9mXpaNvj0'
    },
    // ********** ********** ********** ********** ********** Video gallery for Academia **********
    {
      src: 'https://img.youtube.com/vi/uH-Q0PPe-ew/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'uH-Q0PPe-ew'
    },
    {
      src: 'https://img.youtube.com/vi/vp7wMKKdIZA/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'vp7wMKKdIZA'
    },
    {
      src: 'https://img.youtube.com/vi/DqmqsmKz58Y/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'DqmqsmKz58Y'
    },
    {
      src: 'https://img.youtube.com/vi/MeXdDdNVtio/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'MeXdDdNVtio'
    },
    {
      src: 'https://img.youtube.com/vi/fMMqkBzCQLY/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'fMMqkBzCQLY'
    },
    {
      src: 'https://img.youtube.com/vi/F5pDg8XiCBI/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'F5pDg8XiCBI'
    },
    {
      src: 'https://img.youtube.com/vi/BCBygAMh6Tg/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'BCBygAMh6Tg'
    },
    {
      src: 'https://img.youtube.com/vi/xYY9ZrLPtLk/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'xYY9ZrLPtLk'
    },
    {
      src: 'https://img.youtube.com/vi/0MrIqaGeYB8/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: '0MrIqaGeYB8'
    },
    {
      src: 'https://img.youtube.com/vi/nfhNZ2JElsg/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'nfhNZ2JElsg'
    },
    {
      src: 'https://img.youtube.com/vi/-vh9fy6DX58/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: '-vh9fy6DX58'
    },
    {
      src: 'https://img.youtube.com/vi/VW8Q65Tq2tQ/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'VW8Q65Tq2tQ'
    },
    {
      src: 'https://img.youtube.com/vi/biSL84-A1ag/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'biSL84-A1ag'
    },

    {
      src: 'https://img.youtube.com/vi/k_9Q3AC5Kb4/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'k_9Q3AC5Kb4'
    },
    {
      src: 'https://img.youtube.com/vi/gG-Tdkc24AM/hqdefault.jpg',
      title: 'title',
      category: 'Academia',
      type: 'video',
      videoId: 'gG-Tdkc24AM'
    },
    // ********** ********** ********** ********** ********** Video gallery for sports galore **********
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'y4z2bMzqojg',
      src: 'https://img.youtube.com/vi/y4z2bMzqojg/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'MRgzaMy-7OA',
      src: 'https://img.youtube.com/vi/MRgzaMy-7OA/hqdefault.jpg'
    },

    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'ZrBqOyJ9VQo',
      src: 'https://img.youtube.com/vi/ZrBqOyJ9VQo/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'OSyE2yCYtiw',
      src: 'https://img.youtube.com/vi/OSyE2yCYtiw/hqdefault.jpg'
    },
    {
      src: 'https://www.youtube.com/shorts/g_LoNu9-hXU',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'g_LoNu9-hXU',
      src: 'https://img.youtube.com/vi/g_LoNu9-hXU/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'Op60ICTI7RE',
      src: 'https://img.youtube.com/vi/Op60ICTI7RE/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '-AB_bZjWJ2I',
      src: 'https://img.youtube.com/vi/-AB_bZjWJ2I/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'OaxzZbBrD9U',
      src: 'https://img.youtube.com/vi/OaxzZbBrD9U/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '-XWLnGsLs54',
      src: 'https://img.youtube.com/vi/-XWLnGsLs54/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '4wp1Z6My1lY',
      src: 'https://img.youtube.com/vi/4wp1Z6My1lY/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'ix-qDmGcC9E',
      src: 'https://img.youtube.com/vi/ix-qDmGcC9E/hqdefault.jpg'
    },
    {

      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'Ff3dJCUtoN8',
      src: 'https://img.youtube.com/vi/Ff3dJCUtoN8/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'LZiBjKNuf2Q',
      src: 'https://img.youtube.com/vi/LZiBjKNuf2Q/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'zpirz-zY3VI',
      src: 'https://img.youtube.com/vi/zpirz-zY3VI/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'kwYavFDgETw',
      src: 'https://img.youtube.com/vi/kwYavFDgETw/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'pGjOxDtp2Ns',
      src: 'https://img.youtube.com/vi/pGjOxDtp2Ns/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'YX8dwNxeE-E',
      src: 'https://img.youtube.com/vi/YX8dwNxeE-E/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'mxbwTmAZa-8',
      src: 'https://img.youtube.com/vi/mxbwTmAZa-8/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'X65h8NLrn8g',
      src: 'https://img.youtube.com/vi/X65h8NLrn8g/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '6tM9RYwefSk',
      src: 'https://img.youtube.com/vi/6tM9RYwefSk/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'VpHoW4iWJS4',
      src: 'https://img.youtube.com/vi/VpHoW4iWJS4/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'mx4OZNJTZEg',
      src: 'https://img.youtube.com/vi/mx4OZNJTZEg/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'X65h8NLrn8g',
      src: 'https://img.youtube.com/vi/X65h8NLrn8g/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'tqjx5l0iJ70',
      src: 'https://img.youtube.com/vi/tqjx5l0iJ70/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '6JLibwEKZbo',
      src: 'https://img.youtube.com/vi/6JLibwEKZbo/hqdefault.jpg'
    },

    {
      src: 'https://img.youtube.com/vi/-GLEJ9Kl4Cc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '-GLEJ9Kl4Cc'
    },
    {
      src: 'https://img.youtube.com/vi/5t3LvHYADj4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '5t3LvHYADj4'
    },
    {
      src: 'https://img.youtube.com/vi/efbxjrntRjs/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'efbxjrntRjs'
    },
    {
      src: 'https://img.youtube.com/vi/xOJoQ3woW4g/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'xOJoQ3woW4g'
    },
    {
      src: 'https://img.youtube.com/vi/tCd3irE7pk8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'tCd3irE7pk8'
    },
    //********** ********** ********** **********Video gallery for feed corner
    {
      src: 'https://img.youtube.com/vi/YCDEIq4f--g/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'YCDEIq4f--g'
    },
    {
      src: 'https://img.youtube.com/vi/cwrBuQjYpOI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'cwrBuQjYpOI'
    },
    {
      src: 'https://img.youtube.com/vi/PARbI2ne94c/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'PARbI2ne94c'
    },
    {
      src: 'https://img.youtube.com/vi/efbxjrntRjs/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'efbxjrntRjs'
    },
    {
      src: 'https://img.youtube.com/vi/5t3LvHYADj4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: '5t3LvHYADj4'
    },
    {
      src: 'https://img.youtube.com/vi/Sz_1BUz92LI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'Sz_1BUz92LI'
    },
    {
      src: 'https://img.youtube.com/vi/7vbK2bTay3A/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: '7vbK2bTay3A'
    },
    {
      src: 'https://img.youtube.com/vi/tCd3irE7pk8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'tCd3irE7pk8'
    },
    {
      src: 'https://img.youtube.com/vi/GS5QKlc0a4Y/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'GS5QKlc0a4Y'
    },
    {
      src: 'https://img.youtube.com/vi/1Ed7WJhGUig/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: '1Ed7WJhGUig'
    },
    {
      src: 'https://img.youtube.com/vi/EDJKvB2tPGk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'EDJKvB2tPGk'
    },

    {
      src: 'https://img.youtube.com/vi/xOJoQ3woW4g/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'xOJoQ3woW4g'
    },

    {
      src: 'https://img.youtube.com/vi/RCOvRuBpg7I/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'RCOvRuBpg7I'
    },
    {
      src: 'https://img.youtube.com/vi/14G-R2THcmI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: '14G-R2THcmI'
    },
    {
      src: 'https://img.youtube.com/vi/yIvEpafH0zU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'yIvEpafH0zU'
    },
    {
      src: 'https://img.youtube.com/vi/pjNDUbWuzbM/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Feedback Corner',
      type: 'video',
      videoId: 'pjNDUbWuzbM'
    },
    //********** ********** ********** **********Video gallery for Beyond Academics
    {
      src: 'https://img.youtube.com/vi/D5Sarp-kYAw/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'D5Sarp-kYAw'
    },
    {
      src: 'https://img.youtube.com/vi/EAl4KTafmEY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'EAl4KTafmEY'
    },
    {
      src: 'https://img.youtube.com/vi/nRN24tNZ2Gc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'nRN24tNZ2Gc'
    },
    {
      src: 'https://img.youtube.com/vi/W7D-Nus_0OQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'W7D-Nus_0OQ'
    },
    {
      src: 'https://img.youtube.com/vi/BHBXlSyZpws/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'BHBXlSyZpws'
    },
    {
      src: 'https://img.youtube.com/vi/lDV4tly62Qk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'lDV4tly62Qk'
    },
    {
      src: 'https://img.youtube.com/vi/xTsLSOk4Lxg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'xTsLSOk4Lxg'
    },
    {
      src: 'https://img.youtube.com/vi/EcCdFTVOxV8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'EcCdFTVOxV8'
    },
    {
      src: 'https://img.youtube.com/vi/0KJtNyd5nOI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '0KJtNyd5nOI'
    },
    {
      src: 'https://img.youtube.com/vi/HpVr2Viy_fs/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'HpVr2Viy_fs'
    },
    {
      src: 'https://img.youtube.com/vi/CbUznSqklgs/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'CbUznSqklgs'
    },
    {
      src: 'https://img.youtube.com/vi/2YZNcF_JA4I/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '2YZNcF_JA4I'
    },
    {
      src: 'https://img.youtube.com/vi/tVFCj_R-e_U/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'tVFCj_R-e_U'
    },
    {
      src: 'https://img.youtube.com/vi/6RHv6u21P_0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '6RHv6u21P_0'
    },
    {
      src: 'https://img.youtube.com/vi/enEKOGl8e0I/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'enEKOGl8e0I'
    },

    {
      src: 'https://img.youtube.com/vi/i4V0qCLZ4RQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'i4V0qCLZ4RQ'
    },
    {
      src: 'https://img.youtube.com/vi/57VshWHvrDg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '57VshWHvrDg'
    },
    {
      src: 'https://img.youtube.com/vi/8yD8SdcLtQ0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '8yD8SdcLtQ0'
    },
    {
      src: 'https://img.youtube.com/vi/bOSV9sBJG4A/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'bOSV9sBJG4A'
    },
    {
      src: 'https://img.youtube.com/vi/biSL84-A1ag/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'biSL84-A1ag'
    },
    {
      src: 'https://img.youtube.com/vi/tgHMqB9yO70/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'tgHMqB9yO70'
    },
    {
      src: 'https://img.youtube.com/vi/vp7wMKKdIZA/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'vp7wMKKdIZA'
    },
    {
      src: 'https://img.youtube.com/vi/u-_RKgXweCU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'u-_RKgXweCU'
    },
    {
      src: 'https://img.youtube.com/vi/VW8Q65Tq2tQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'VW8Q65Tq2tQ'
    },
    {
      src: 'https://img.youtube.com/vi/ZrBqOyJ9VQo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'ZrBqOyJ9VQo'
    },
    {
      src: 'https://img.youtube.com/vi/J2darvxUR-0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'J2darvxUR-0'
    },
    {
      src: 'https://img.youtube.com/vi/xdfOJd3DmEw/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'xdfOJd3DmEw'
    },
    {
      src: 'https://img.youtube.com/vi/mVoEskcPaMk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'mVoEskcPaMk'
    },
    {
      src: 'https://img.youtube.com/vi/799cRaGyMLc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '799cRaGyMLc'
    },
    {
      src: 'https://img.youtube.com/vi/JxosIQNztdY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'JxosIQNztdY'
    },
    {
      src: 'https://img.youtube.com/vi/2ygyjc9Zx74/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: '2ygyjc9Zx74'
    },
    {
      src: 'https://img.youtube.com/vi/keA-NmKKqkA/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'keA-NmKKqkA'
    },
    {
      "src": "https://img.youtube.com/vi/DrkcUHteeeE/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "DrkcUHteeeE"
    },
    {
      "src": "https://img.youtube.com/vi/uH-Q0PPe-ew/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "uH-Q0PPe-ew"
    },
    {
      "src": "https://img.youtube.com/vi/BhzGXBmZ_Pg/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "BhzGXBmZ_Pg"
    },
    {
      "src": "https://img.youtube.com/vi/bkuk6N7V7CA/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "bkuk6N7V7CA"
    },
    {
      "src": "https://img.youtube.com/vi/K01-HfuJ2XQ/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "K01-HfuJ2XQ"
    },
    {
      "src": "https://img.youtube.com/vi/ad1Sfg1v4BE/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "ad1Sfg1v4BE"
    },
    {
      "src": "https://img.youtube.com/vi/S5rSjEobMYo/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "S5rSjEobMYo"
    },
    {
      "src": "https://img.youtube.com/vi/nI45OWWdfCY/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "nI45OWWdfCY"
    },
    {
      "src": "https://img.youtube.com/vi/m7KcNMrqLMA/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "m7KcNMrqLMA"
    },
    // {
    //   "src": "https://img.youtube.com/vi/-AB_bZjWJ2I/hqdefault.jpg",
    //   "title": "Ramagya School Gallery",
    //   "category": "Beyond Academics",
    //   "type": "video",
    //   "videoId": "-AB_bZjWJ2I"
    // },
    {
      "src": "https://img.youtube.com/vi/DM2GJYW3KWg/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "DM2GJYW3KWg"
    },
    {
      "src": "https://img.youtube.com/vi/K8DOvMu7eoQ/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "K8DOvMu7eoQ"
    },
    {
      "src": "https://img.youtube.com/vi/rueSBh7Py2E/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "rueSBh7Py2E"
    },
    {
      "src": "https://img.youtube.com/vi/NLIs9tgIRBM/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "NLIs9tgIRBM"
    },
    {
      "src": "https://img.youtube.com/vi/OlGtv2a6JOI/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "OlGtv2a6JOI"
    },
    {
      "src": "https://img.youtube.com/vi/zz96x_Dpa8U/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "zz96x_Dpa8U"
    },
    {
      "src": "https://img.youtube.com/vi/J0EpNRLjEwo/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "J0EpNRLjEwo"
    },
    {
      "src": "https://img.youtube.com/vi/ai6eY57M4L8/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "ai6eY57M4L8"
    },
    {
      "src": "https://img.youtube.com/vi/UyiQZQYOUM0/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "UyiQZQYOUM0"
    },
    {
      "src": "https://img.youtube.com/vi/AGZBz2DGPRo/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "AGZBz2DGPRo"
    },
    {
      "src": "https://img.youtube.com/vi/-JgPxPnTKuY/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "-JgPxPnTKuY"
    },
    {
      "src": "https://img.youtube.com/vi/EW1-kY0mxtk/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "EW1-kY0mxtk"
    },
    {
      "src": "https://img.youtube.com/vi/v4PEoZJr2qs/hqdefault.jpg",
      "title": "Ramagya School Gallery",
      "category": "Beyond Academics",
      "type": "video",
      "videoId": "v4PEoZJr2qs"
    },

    {
      src: 'https://img.youtube.com/vi/W2Pzn4Q3IlY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Beyond Academics',
      type: 'video',
      videoId: 'W2Pzn4Q3IlY'
    },

    // ********************************************Video gallery for Wellness & Support
    {
      src: 'https://img.youtube.com/vi/tnVWxicccK4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'tnVWxicccK4'
    },
    {
      src: 'https://img.youtube.com/vi/crUUplFUh2k/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'crUUplFUh2k'
    },
    {
      src: 'https://img.youtube.com/vi/oBqzCjDguFo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'oBqzCjDguFo'
    },
    {
      src: 'https://img.youtube.com/vi/pPqCR32_nk4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'pPqCR32_nk4'
    },
    {
      src: 'https://img.youtube.com/vi/CEbwZBE0LOU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'CEbwZBE0LOU'
    },
    {
      src: 'https://img.youtube.com/vi/LJaMBTc_rDk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'LJaMBTc_rDk'
    },
    {
      src: 'https://img.youtube.com/vi/AgB1VhWqleg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'AgB1VhWqleg'
    },
    {
      src: 'https://img.youtube.com/vi/6JLibwEKZbo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: '6JLibwEKZbo'
    },
    {
      src: 'https://img.youtube.com/vi/GNnCr1FyEsE/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Wellness & Support',
      type: 'video',
      videoId: 'GNnCr1FyEsE'
    },
    // ******************************************Video gallery for Athletic Center
    {
      src: 'https://img.youtube.com/vi/kwYavFDgETw/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'kwYavFDgETw'
    },
    {
      src: 'https://img.youtube.com/vi/FXL2FvF96Dg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'FXL2FvF96Dg'
    },
    {
      src: 'https://img.youtube.com/vi/ZrBqOyJ9VQo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'ZrBqOyJ9VQo'
    },
    {
      src: 'https://img.youtube.com/vi/J0EpNRLjEwo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'J0EpNRLjEwo'
    },
    {
      src: 'https://img.youtube.com/vi/OlGtv2a6JOI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'OlGtv2a6JOI'
    },
    {
      src: 'https://img.youtube.com/vi/jPL9yVX80dM/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'jPL9yVX80dM'
    },
    {
      src: 'https://img.youtube.com/vi/y4z2bMzqojg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'y4z2bMzqojg'
    },
    {
      src: 'https://img.youtube.com/vi/MRgzaMy-7OA/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'MRgzaMy-7OA'
    },
    {
      src: 'https://img.youtube.com/vi/OSyE2yCYtiw/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'OSyE2yCYtiw'
    },
    {
      src: 'https://img.youtube.com/vi/a_pvZ4xTRec/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'a_pvZ4xTRec'
    },
    {
      src: 'https://img.youtube.com/vi/2ygyjc9Zx74/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: '2ygyjc9Zx74'
    },
    {
      src: 'https://img.youtube.com/vi/keA-NmKKqkA/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'keA-NmKKqkA'
    },
    {
      src: 'https://img.youtube.com/vi/LBRzLM4hCSE/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'LBRzLM4hCSE'
    },
    {
      src: 'https://img.youtube.com/vi/DrkcUHteeeE/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'DrkcUHteeeE'
    },
    {
      src: 'https://img.youtube.com/vi/JStcN17FaN0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'JStcN17FaN0'
    },

    {
      src: 'https://img.youtube.com/vi/tVFCj_R-e_U/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'tVFCj_R-e_U'
    },
    {
      src: 'https://img.youtube.com/vi/6RHv6u21P_0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: '6RHv6u21P_0'
    },
    {
      src: 'https://img.youtube.com/vi/Q7tIO3NtSjI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Athletic Center',
      type: 'video',
      videoId: 'Q7tIO3NtSjI'
    },
    // ******************************************Video gallery for Outdoor fun
    {
      src: 'https://img.youtube.com/vi/Op60ICTI7RE/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'Op60ICTI7RE'
    },
    {
      src: 'https://img.youtube.com/vi/-AB_bZjWJ2I/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: '-AB_bZjWJ2I'
    },
    {
      src: 'https://img.youtube.com/vi/VpHoW4iWJS4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'VpHoW4iWJS4'
    },
    {
      src: 'https://img.youtube.com/vi/OaxzZbBrD9U/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'OaxzZbBrD9U'
    },
    {
      src: 'https://img.youtube.com/vi/-XWLnGsLs54/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: '-XWLnGsLs54'
    },
    {
      src: 'https://img.youtube.com/vi/4wp1Z6My1lY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: '4wp1Z6My1lY'
    },
    {
      src: 'https://img.youtube.com/vi/ix-qDmGcC9E/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'ix-qDmGcC9E'
    },
    {
      src: 'https://img.youtube.com/vi/Ff3dJCUtoN8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'Ff3dJCUtoN8'
    },
    {
      src: 'https://img.youtube.com/vi/zpirz-zY3VI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'zpirz-zY3VI'
    },
    {
      src: 'https://img.youtube.com/vi/OosDADj6FE4/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'OosDADj6FE4'
    },
    {
      src: 'https://img.youtube.com/vi/DrkcUHteeeE/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'DrkcUHteeeE'
    },
    {
      src: 'https://img.youtube.com/vi/57VshWHvrDg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: '57VshWHvrDg'
    },
    {
      src: 'https://img.youtube.com/vi/RHTBiEtHBKM/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Outdoor Fun',
      type: 'video',
      videoId: 'RHTBiEtHBKM'
    },
  // ******************************************Video gallery for Co-Curricular Activities
  {
    src: 'https://img.youtube.com/vi/sDM-bdEyt3k/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'sDM-bdEyt3k'
  },
  {
    src: 'https://img.youtube.com/vi/3Tb_o8OYEMo/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '3Tb_o8OYEMo'
  },
  {
    src: 'https://img.youtube.com/vi/k_9Q3AC5Kb4/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'k_9Q3AC5Kb4'
  },
  {
    src: 'https://img.youtube.com/vi/U0dF0KPs_KU/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'U0dF0KPs_KU'
  },
  {
    src: 'https://img.youtube.com/vi/JQyPJZGtm6A/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'JQyPJZGtm6A'
  },
  {
    src: 'https://img.youtube.com/vi/EXWYynt6bno/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'EXWYynt6bno'
  },
  {
    src: 'https://img.youtube.com/vi/lsyZMyaieYc/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'lsyZMyaieYc'
  },
  {
    src: 'https://img.youtube.com/vi/wKE5flQlzzw/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'wKE5flQlzzw'
  },
  {
    src: 'https://img.youtube.com/vi/0dUZrLgeNhs/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '0dUZrLgeNhs'
  },
  {
    src: 'https://img.youtube.com/vi/QvIma5GHyZI/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'QvIma5GHyZI'
  },
  {
    src: 'https://img.youtube.com/vi/0u9JBVRzb5k/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '0u9JBVRzb5k'
  },
  {
    src: 'https://img.youtube.com/vi/4pdHOMwN454/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '4pdHOMwN454'
  },
  {
    src: 'https://img.youtube.com/vi/waZ5zHxwI34/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'waZ5zHxwI34'
  },
  {
    src: 'https://img.youtube.com/vi/tinXvBchsyw/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'tinXvBchsyw'
  },
  {
    src: 'https://img.youtube.com/vi/JUCYvZTaaUY/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'JUCYvZTaaUY'
  },
  {
    src: 'https://img.youtube.com/vi/hXtvYmfLjDQ/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'hXtvYmfLjDQ'
  },
  {
    src: 'https://img.youtube.com/vi/24sYu5v_Tqw/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '24sYu5v_Tqw'
  },
  {
    src: 'https://img.youtube.com/vi/F71n4RhhJlc/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'F71n4RhhJlc'
  },
  {
    src: 'https://img.youtube.com/vi/ksbfbzYE3Dw/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'ksbfbzYE3Dw'
  },
  {
    src: 'https://img.youtube.com/vi/R1flAof4wBQ/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'R1flAof4wBQ'
  },
  {
    src: 'https://img.youtube.com/vi/oBqzCjDguFo/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'oBqzCjDguFo'
  },
  {
    src: 'https://img.youtube.com/vi/aRs40l6Mr7M/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'aRs40l6Mr7M'
  },
  {
    src: 'https://img.youtube.com/vi/vylzcz0TQ9Y/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'vylzcz0TQ9Y'
  },
  {
    src: 'https://img.youtube.com/vi/qVloUnCgkFI/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'qVloUnCgkFI'
  },
  {
    src: 'https://img.youtube.com/vi/t6VVC_P8KFs/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 't6VVC_P8KFs'
  },
  {
    src: 'https://img.youtube.com/vi/E02ZfXrsO9A/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'E02ZfXrsO9A'
  },
  {
    src: 'https://img.youtube.com/vi/bOSV9sBJG4A/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'bOSV9sBJG4A'
  },
  {
    src: 'https://img.youtube.com/vi/2CY8P2PHvsg/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: '2CY8P2PHvsg'
  },
  {
    src: 'https://img.youtube.com/vi/ZTHz4TAqz2Q/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'ZTHz4TAqz2Q'
  },
  {
    src: 'https://img.youtube.com/vi/mQ0k51xN23s/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'mQ0k51xN23s'
  },
  {
    src: 'https://img.youtube.com/vi/W7D-Nus_0OQ/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'W7D-Nus_0OQ'
  },
  {
    src: 'https://img.youtube.com/vi/h2lFo9VaNI4/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'h2lFo9VaNI4'
  },
  {
    src: 'https://img.youtube.com/vi/ppJkLsv3wyE/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'ppJkLsv3wyE'
  },
  {
    src: 'https://img.youtube.com/vi/F5pDg8XiCBI/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'F5pDg8XiCBI'
  },
  {
    src: 'https://img.youtube.com/vi/aOYilcFWmAc/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'aOYilcFWmAc'
  },
  {
    src: 'https://img.youtube.com/vi/eWJIDs0lz5c/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'eWJIDs0lz5c'
  },
  {
    src: 'https://img.youtube.com/vi/BHBXlSyZpws/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'BHBXlSyZpws'
  },
  {
    src: 'https://img.youtube.com/vi/JrcZXApLnnI/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'JrcZXApLnnI'
  },
  {
    src: 'https://img.youtube.com/vi/keVqoVj_ESM/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'keVqoVj_ESM'
  },
  {
    src: 'https://img.youtube.com/vi/FT55hFX7yJI/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'FT55hFX7yJI'
  },
  {
    src: 'https://img.youtube.com/vi/EcCdFTVOxV8/hqdefault.jpg',
    title: 'Ramagya School Gallery',
    category: 'Co-Curricular Activities',
    type: 'video',
    videoId: 'EcCdFTVOxV8'
  },
    // ****************************************** Video gallery for Parents
    {
      src: 'https://img.youtube.com/vi/vsnZDGKP878/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'vsnZDGKP878'
    },
    {
      src: 'https://img.youtube.com/vi/1xlLX0Lxx9M/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: '1xlLX0Lxx9M'
    },
    {
      src: 'https://img.youtube.com/vi/P4zJy_1ibkw/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'P4zJy_1ibkw'
    },
    {
      src: 'https://img.youtube.com/vi/xeh7QeUFQF0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'xeh7QeUFQF0'
    },
    {
      src: 'https://img.youtube.com/vi/BYcX6eJjCgQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'BYcX6eJjCgQ'
    },
    {
      src: 'https://img.youtube.com/vi/vTJeQtq1vcc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'vTJeQtq1vcc'
    },
    {
      src: 'https://img.youtube.com/vi/dX4E-tRVlh8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'dX4E-tRVlh8'
    },
    {
      src: 'https://img.youtube.com/vi/FT1TNGL5XNk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'FT1TNGL5XNk'
    },
    {
      src: 'https://img.youtube.com/vi/a-nRhn2vCrk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Parent Testimonials',
      type: 'video',
      videoId: 'a-nRhn2vCrk'
    },
     // ******************************************Video gallery for Skill Boosting Sessions
     {
      src: 'https://img.youtube.com/vi/E69Rd1AFpsA/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'E69Rd1AFpsA'
    },
     {
      src: 'https://img.youtube.com/vi/hXtvYmfLjDQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'hXtvYmfLjDQ'
    },
     {
      src: 'https://img.youtube.com/vi/sbfyEHivBiU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'sbfyEHivBiU'
    },
     {
      src: 'https://img.youtube.com/vi/BCBygAMh6Tg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'BCBygAMh6Tg'
    },
     {
      src: 'https://img.youtube.com/vi/asSGPkIfv0U/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'asSGPkIfv0U'
    },
     {
      src: 'https://img.youtube.com/vi/quvyHwx6WAg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'quvyHwx6WAg'
    },
    {
      src: 'https://img.youtube.com/vi/f7NbaMVJh2Y/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'f7NbaMVJh2Y'
    },
    {
      src: 'https://img.youtube.com/vi/FxT3xJFYpDg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'FxT3xJFYpDg'
    },
    {
      src: 'https://img.youtube.com/vi/4xbFf25pguo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: '4xbFf25pguo'
    },
    {
      src: 'https://img.youtube.com/vi/wzIgSGv3WhI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'wzIgSGv3WhI'
    },
    {
      src: 'https://img.youtube.com/vi/EKIhsAMvrBk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'EKIhsAMvrBk'
    },
    {
      src: 'https://img.youtube.com/vi/TUCE9e2eFBQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'TUCE9e2eFBQ'
    },
    {
      src: 'https://img.youtube.com/vi/WMaMyzm31O0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'WMaMyzm31O0'
    },
    {
      src: 'https://img.youtube.com/vi/YsPCjwg5Ikk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'YsPCjwg5Ikk'
    },
    {
      src: 'https://img.youtube.com/vi/zdVITP31l10/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: 'zdVITP31l10'
    },
    {
      src: 'https://img.youtube.com/vi/3KFjiioMzNU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Skill Boosting Sessions',
      type: 'video',
      videoId: '3KFjiioMzNU'
    },
     // ******************************************Video gallery for Reading Fiesta
     {
      src: 'https://img.youtube.com/vi/QGEJCtmoz7c/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Reading Fiesta',
      type: 'video',
      videoId: 'QGEJCtmoz7c'
    },
       {
      src: 'https://img.youtube.com/vi/lsyZMyaieYc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Reading Fiesta',
      type: 'video',
      videoId: 'lsyZMyaieYc'
    },
     {
      src: 'https://img.youtube.com/vi/cv2ZmeJB_UM/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Reading Fiesta',
      type: 'video',
      videoId: 'cv2ZmeJB_UM'
    },
    // ************************************************Video gallery for Students
    {
      src: 'https://img.youtube.com/vi/MTgSVFkHS6Q/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: 'MTgSVFkHS6Q'
    },
    {
      src: 'https://img.youtube.com/vi/kt9qFRRIQsY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: 'kt9qFRRIQsY'
    },
    {
      src: 'https://img.youtube.com/vi/74A7901Oe84/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: '74A7901Oe84'
    },
    {
      src: 'https://img.youtube.com/vi/A2p1Tl4zJxs/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: 'A2p1Tl4zJxs'
    },
    {
      src: 'https://img.youtube.com/vi/NSvWjjjSsWM/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: 'NSvWjjjSsWM'
    },
    {
      src: 'https://img.youtube.com/vi/1fMz-BI_dDU/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Student testimonials',
      type: 'video',
      videoId: '1fMz-BI_dDU'
    },

    // ******************************************Video gallery for Events spot lights
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: '2YZNcF_JA4I',
      src: 'https://img.youtube.com/vi/2YZNcF_JA4I/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'MeXdDdNVtio',
      src: 'https://img.youtube.com/vi/MeXdDdNVtio/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'CbUznSqklgs',
      src: 'https://img.youtube.com/vi/CbUznSqklgs/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'Qo_xm0aPMyQ',
      src: 'https://img.youtube.com/vi/Qo_xm0aPMyQ/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'sKWPq4iRGRY',
      src: 'https://img.youtube.com/vi/sKWPq4iRGRY/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'NsAiVlG0CQc',
      src: 'https://img.youtube.com/vi/NsAiVlG0CQc/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'sf11wrC5Y8Q',
      src: 'https://img.youtube.com/vi/sf11wrC5Y8Q/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: '2yOc8sgWGOM',
      src: 'https://img.youtube.com/vi/2yOc8sgWGOM/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: '_xAu1arLx0o',
      src: 'https://img.youtube.com/vi/_xAu1arLx0o/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'da7JSps97Uo',
      src: 'https://img.youtube.com/vi/da7JSps97Uo/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'NAVtTCCilC0',
      src: 'https://img.youtube.com/vi/NAVtTCCilC0/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: '8e6xZvxKe04',
      src: 'https://img.youtube.com/vi/8e6xZvxKe04/hqdefault.jpg'
    },
    {
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'DeEZG0dFQOc',
      src: 'https://img.youtube.com/vi/DeEZG0dFQOc/hqdefault.jpg'
    },
    // {
    //   title: 'Ramagya School Gallery',
    //   category: 'Event Spotlight',
    //   type: 'video',
    //   videoId: 'i4V0qCLZ4RQ',
    //   src: 'https://img.youtube.com/vi/i4V0qCLZ4RQ/hqdefault.jpg'
    // },

    {
      src: 'https://img.youtube.com/vi/EAl4KTafmEY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'EAl4KTafmEY'
    },
    {
      src: 'https://img.youtube.com/vi/i4V0qCLZ4RQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'i4V0qCLZ4RQ'
    },
    {
      src: 'https://img.youtube.com/vi/DeEZG0dFQOc/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'DeEZG0dFQOc'
    },
    {
      src: 'https://img.youtube.com/vi/StGwjiCbg_Y/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'StGwjiCbg_Y'
    },
    {
      src: 'https://img.youtube.com/vi/fEHfU3PImF0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'fEHfU3PImF0'
    },
    {
      src: 'https://img.youtube.com/vi/J4SRYv2T6k8/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'J4SRYv2T6k8'
    },
    {
      src: 'https://img.youtube.com/vi/sKWPq4iRGRY/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Event Spotlight',
      type: 'video',
      videoId: 'sKWPq4iRGRY'
    },
    // *********************************************Video gallery for Evolve Video
    {
      src: 'https://img.youtube.com/vi/uH-Q0PPe-ew/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Evolve Video',
      type: 'video',
      videoId: 'uH-Q0PPe-ew'
    },
    // *********************************************Video gallery for Helping Hands
    {
      src: 'https://img.youtube.com/vi/TUCE9e2eFBQ/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'TUCE9e2eFBQ'
    },
    {
      src: 'https://img.youtube.com/vi/EKIhsAMvrBk/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'EKIhsAMvrBk'
    },
    {
      src: 'https://img.youtube.com/vi/4xbFf25pguo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: '4xbFf25pguo'
    },
    {
      src: 'https://img.youtube.com/vi/FxT3xJFYpDg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'FxT3xJFYpDg'
    },
    {
      src: 'https://img.youtube.com/vi/zdVITP31l10/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'zdVITP31l10'
    },
    {
      src: 'https://img.youtube.com/vi/wzIgSGv3WhI/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'wzIgSGv3WhI'
    },
    {
      src: 'https://img.youtube.com/vi/R9-p_6xV86A/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'R9-p_6xV86A'
    },
    {
      src: 'https://img.youtube.com/vi/4xbFf25pguo/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: '4xbFf25pguo'
    },
    {
      src: 'https://img.youtube.com/vi/2rjRszdO2P0/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: '2rjRszdO2P0'
    },
    {
      src: 'https://img.youtube.com/vi/FxT3xJFYpDg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'FxT3xJFYpDg'
    },
    {
      src: 'https://img.youtube.com/vi/xkDrHZcrhfg/hqdefault.jpg',
      title: 'Ramagya School Gallery',
      category: 'Change Makers',
      type: 'video',
      videoId: 'xkDrHZcrhfg'
    }


  ];

  const filteredItems = items.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesGallery = activeGallery === 'Images' ? item.type === 'image' : item.type === 'video';
    return matchesTab && matchesGallery;
  });

  useEffect(() => {
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({ live: false });
    wow.init();
  }, []);

  const openModal = (index) => {
    const item = filteredItems[index];
    setCurrentIndex(index);
    if (item.type === 'video') {
      setIsVideoModalOpen(true);
    } else {
      setIsImageModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsVideoModalOpen(false);
    setIsImageModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-center mb-1">
          <button
            className={`btn mx-2 ${activeGallery === 'Images' ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
            onClick={() => setActiveGallery('Images')}
          >
            Image Gallery
          </button>
          <button
            className={`btn mx-2 ${activeGallery === 'Videos' ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
            onClick={() => setActiveGallery('Videos')}
          >
            Video Gallery
          </button>
        </div><br />
        <div className="d-flex justify-content-center flex-wrap mb-4">
          {(activeGallery === 'Images' ? imageTabs : videoTabs).map(tab => (
            <button
              key={tab}
              className={`btn mx-2 ${activeTab === tab ? 'btn-warning-gallery' : 'btn-outline-warning'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="row g-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="col-md-2 col-6">
                <div
                  className="card-gallery"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(index)}
                >
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      className="card-img-top"
                      alt={item.category}
                      width={350}
                      height={300}
                    />
                  ) : (
                    <div className="image-container-testimonial">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={450}
                        height={250}
                      />
                      <div className="play-button-overlay">
                        <button
                          className="play-button"
                        >
                          <Image
                            src="/images/youtube-play-icon.webp"
                            alt="play-button"
                            width={96}
                            height={96}
                          />
                        </button>
                      </div>
                      {/* <div className="fw-bold">{item.title}</div> */}
                    </div>
                    // <div className="video-container">
                    //   <Image
                    //     src={item.src}
                    //     alt="Video src"
                    //     width={350}
                    //     height={300}
                    //   />
                    //   <div className="video-title">{item.title}</div>
                    //   <button>Play video</button>
                    // </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items found.</p>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <ModalVideo
        channel="youtube"
        isOpen={isVideoModalOpen}
        videoId={filteredItems[currentIndex]?.videoId}
        onClose={closeModal}
      />

      {/* Image Modal with Arrows */}
      {isImageModalOpen && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-content">
            <button className="close-button" onClick={closeModal}>x</button>
            <button className="prev-button" onClick={handlePrevious}></button>
            <Image
              src={filteredItems[currentIndex]?.src}
              alt="Gallery Image"
              width={1440}
              height={630}
            />
            <button className="next-button" onClick={handleNext}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoidaGalleryInternalPage;
