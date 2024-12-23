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
    'All', 'Celeb Bites', 'Testimonials', 'Sports Galore', 'Ramagya Life', 'Mental Health', 
    'Parents', 'Student', 'Events', 'Helping Hand'
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

    // ********************************************************************Video gallery for celeb bites
    {
      src: 'https://img.youtube.com/vi/zUB6ocBTYzs/hqdefault.jpg', 
      title: 'Nikhil Naz',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'zUB6ocBTYzs'
    },
   
  {
    src: 'https://img.youtube.com/vi/9ITohrzpf7Q/hqdefault.jpg', 
    title: 'Nikhil Naz',
    category: 'Celeb Bites',
    type: 'video',
    videoId: '9ITohrzpf7Q'
  },
  {
    src: 'https://img.youtube.com/vi/8xfmljcYBZ0/hqdefault.jpg', 
    title: 'Nikhil Naz',
    category: 'Celeb Bites',
    type: 'video',
    videoId: '8xfmljcYBZ0'
  },
    {
      title: 'Shive Aroore Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'tm0yBtH04ao',
      src: `https://img.youtube.com/vi/tm0yBtH04ao/hqdefault.jpg`
    },
    
    {
     
      title: 'Sports Event',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'cwrBuQjYpOI',
      src: `https://img.youtube.com/vi/cwrBuQjYpOI/hqdefault.jpg`
    },
    {
     
      title: 'Testimonial Video 1',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'YCDEIq4f--g',
      src: `https://img.youtube.com/vi/YCDEIq4f--g/hqdefault.jpg`
    },
    {
     
      title: 'Testimonial Video 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'PARbI2ne94c',
      src: `https://img.youtube.com/vi/PARbI2ne94c/hqdefault.jpg`
    },
    {
      
      title: 'Jacob Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'EJW8mgGx8dA',
      src: `https://img.youtube.com/vi/EJW8mgGx8dA/hqdefault.jpg`
    },
    {
     
      title: 'Smiriti Testimonial 1',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'J80V7ZEn25I',
      src: `https://img.youtube.com/vi/J80V7ZEn25I/hqdefault.jpg`
    },
    {
     
      title: 'Smiriti Testimonial 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'XzhWSqIlts8',
      src: `https://img.youtube.com/vi/XzhWSqIlts8/hqdefault.jpg`
    },
    {
     
      title: 'Smiriti Testimonial 3',
      category: 'Celeb Bites',
      type: 'video',
      videoId: '1yWQuKlJqTc',
      src: `https://img.youtube.com/vi/1yWQuKlJqTc/hqdefault.jpg`
    },
    {
    
      title: 'Krishna Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'EDJKvB2tPGk',
      src: `https://img.youtube.com/vi/EDJKvB2tPGk/hqdefault.jpg`
    },
    {
     
      title: 'Sunil Dabas Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'HbN-R3NqP2k',
      src: `https://img.youtube.com/vi/HbN-R3NqP2k/hqdefault.jpg`
    },
    {
     
      title: 'Chetan Bhagat Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'WrQHBzo0ww4',
      src: `https://img.youtube.com/vi/WrQHBzo0ww4/hqdefault.jpg`
    },
    {
     
      title: 'Krishna Testimonial 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: '-GLEJ9Kl4Cc',
      src: `https://img.youtube.com/vi/-GLEJ9Kl4Cc/hqdefault.jpg`
    },
    {
     
      title: 'Dav More Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'GS5QKlc0a4Y',
      src: `https://img.youtube.com/vi/GS5QKlc0a4Y/hqdefault.jpg`
    },
  
      {
        title: 'Percilla Herrera Testimonial',
        category: 'Celeb Bites',
        type: 'video',
        videoId: '1Ed7WJhGUig',
        src: 'https://img.youtube.com/vi/1Ed7WJhGUig/hqdefault.jpg'
      },
      {
        title: 'Ashley Deans Testimonial',
        category: 'Celeb Bites',
        type: 'video',
        videoId: 'EdpF4q8OYEE',
        src: 'https://img.youtube.com/vi/EdpF4q8OYEE/hqdefault.jpg'
      },
      {
        title: 'Abhinav Bindra Testimonial',
        category: 'Celeb Bites',
        type: 'video',
        videoId: 'Hmp_tCEB0Y4',
        src: 'https://img.youtube.com/vi/Hmp_tCEB0Y4/hqdefault.jpg'
      },
      {
        title: 'Bhupati Testimonial',
        category: 'Celeb Bites',
        type: 'video',
        videoId: 'ik4fTTk2CSQ',
        src: 'https://img.youtube.com/vi/ik4fTTk2CSQ/hqdefault.jpg'
      },
      {
        title: 'Vishwanathan Testimonial',
        category: 'Celeb Bites',
        type: 'video',
        videoId: 'rYnH2LND6Lg',
        src: 'https://img.youtube.com/vi/rYnH2LND6Lg/hqdefault.jpg'
      },
      // ********** Video gallery for sports galore **********
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
        // Video gallery for testimonials
        {
          src: 'https://img.youtube.com/vi/RCOvRuBpg7I/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Testimonials',
          type: 'video',
          videoId: 'RCOvRuBpg7I'
        },
        {
          src: 'https://img.youtube.com/vi/14G-R2THcmI/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Testimonials',
          type: 'video',
          videoId: '14G-R2THcmI'
        },
        {
          src: 'https://img.youtube.com/vi/yIvEpafH0zU/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Testimonials',
          type: 'video',
          videoId: 'yIvEpafH0zU'
        },
        {
          src: 'https://img.youtube.com/vi/pjNDUbWuzbM/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Testimonials',
          type: 'video',
          videoId: 'pjNDUbWuzbM'
        },
        // Video gallery for RAMAGYA'S LIFE
        {
          src: 'https://img.youtube.com/vi/0KJtNyd5nOI/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: '0KJtNyd5nOI'
        },
        {
          src: 'https://img.youtube.com/vi/57VshWHvrDg/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: '57VshWHvrDg'
        },
        {
          src: 'https://img.youtube.com/vi/bOSV9sBJG4A/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'bOSV9sBJG4A'
        },
        {
          src: 'https://img.youtube.com/vi/biSL84-A1ag/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'biSL84-A1ag'
        },
        {
          src: 'https://img.youtube.com/vi/tgHMqB9yO70/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'tgHMqB9yO70'
        },
        {
          src: 'https://img.youtube.com/vi/vp7wMKKdIZA/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'vp7wMKKdIZA'
        },
        {
          src: 'https://img.youtube.com/vi/u-_RKgXweCU/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'u-_RKgXweCU'
        },
        {
          src: 'https://img.youtube.com/vi/VW8Q65Tq2tQ/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'VW8Q65Tq2tQ'
        },
        {
          src: 'https://img.youtube.com/vi/ZrBqOyJ9VQo/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'ZrBqOyJ9VQo'
        },
        {
          src: 'https://img.youtube.com/vi/J2darvxUR-0/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'J2darvxUR-0'
        },
        {
          src: 'https://img.youtube.com/vi/xdfOJd3DmEw/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'xdfOJd3DmEw'
        },
        {
          src: 'https://img.youtube.com/vi/mVoEskcPaMk/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'mVoEskcPaMk'
        },
        {
          src: 'https://img.youtube.com/vi/799cRaGyMLc/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: '799cRaGyMLc'
        },
        {
          src: 'https://img.youtube.com/vi/JxosIQNztdY/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'JxosIQNztdY'
        },
        {
          src: 'https://img.youtube.com/vi/2ygyjc9Zx74/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: '2ygyjc9Zx74'
        },
        {
          src: 'https://img.youtube.com/vi/keA-NmKKqkA/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'keA-NmKKqkA'
        },
        {
          "src": "https://img.youtube.com/vi/DrkcUHteeeE/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "DrkcUHteeeE"
        },
        {
          "src": "https://img.youtube.com/vi/uH-Q0PPe-ew/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "uH-Q0PPe-ew"
        },
        {
          "src": "https://img.youtube.com/vi/BhzGXBmZ_Pg/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "BhzGXBmZ_Pg"
        },
        {
          "src": "https://img.youtube.com/vi/bkuk6N7V7CA/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "bkuk6N7V7CA"
        },
        {
          "src": "https://img.youtube.com/vi/K01-HfuJ2XQ/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "K01-HfuJ2XQ"
        },
        {
          "src": "https://img.youtube.com/vi/ad1Sfg1v4BE/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "ad1Sfg1v4BE"
        },
        {
          "src": "https://img.youtube.com/vi/S5rSjEobMYo/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "S5rSjEobMYo"
        },
        {
          "src": "https://img.youtube.com/vi/nI45OWWdfCY/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "nI45OWWdfCY"
        },
        {
          "src": "https://img.youtube.com/vi/m7KcNMrqLMA/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "m7KcNMrqLMA"
        },
        // {
        //   "src": "https://img.youtube.com/vi/-AB_bZjWJ2I/hqdefault.jpg",
        //   "title": "Ramagya School Gallery",
        //   "category": "Ramagya Life",
        //   "type": "video",
        //   "videoId": "-AB_bZjWJ2I"
        // },
        {
          "src": "https://img.youtube.com/vi/DM2GJYW3KWg/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "DM2GJYW3KWg"
        },
        {
          "src": "https://img.youtube.com/vi/K8DOvMu7eoQ/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "K8DOvMu7eoQ"
        },
        {
          "src": "https://img.youtube.com/vi/rueSBh7Py2E/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "rueSBh7Py2E"
        },
        {
          "src": "https://img.youtube.com/vi/NLIs9tgIRBM/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "NLIs9tgIRBM"
        },
        {
          "src": "https://img.youtube.com/vi/OlGtv2a6JOI/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "OlGtv2a6JOI"
        },
        {
          "src": "https://img.youtube.com/vi/zz96x_Dpa8U/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "zz96x_Dpa8U"
        },
        {
          "src": "https://img.youtube.com/vi/J0EpNRLjEwo/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "J0EpNRLjEwo"
        },
        {
          "src": "https://img.youtube.com/vi/ai6eY57M4L8/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "ai6eY57M4L8"
        },
        {
          "src": "https://img.youtube.com/vi/UyiQZQYOUM0/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "UyiQZQYOUM0"
        },
        {
          "src": "https://img.youtube.com/vi/AGZBz2DGPRo/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "AGZBz2DGPRo"
        },
        {
          "src": "https://img.youtube.com/vi/-JgPxPnTKuY/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "-JgPxPnTKuY"
        },
        {
          "src": "https://img.youtube.com/vi/EW1-kY0mxtk/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "EW1-kY0mxtk"
        },
        {
          "src": "https://img.youtube.com/vi/v4PEoZJr2qs/hqdefault.jpg",
          "title": "Ramagya School Gallery",
          "category": "Ramagya Life",
          "type": "video",
          "videoId": "v4PEoZJr2qs"
        },

        {
          src: 'https://img.youtube.com/vi/W2Pzn4Q3IlY/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'W2Pzn4Q3IlY'
        },
        
        // Video gallery for Mental Health
        {
          src: 'https://img.youtube.com/vi/CEbwZBE0LOU/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Mental Health',
          type: 'video',
          videoId: 'CEbwZBE0LOU'
        },
        {
          src: 'https://img.youtube.com/vi/LJaMBTc_rDk/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Mental Health',
          type: 'video',
          videoId: 'LJaMBTc_rDk'
        },
        {
          src: 'https://img.youtube.com/vi/AgB1VhWqleg/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Mental Health',
          type: 'video',
          videoId: 'AgB1VhWqleg'
        },
        {
          src: 'https://img.youtube.com/vi/6JLibwEKZbo/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Mental Health',
          type: 'video',
          videoId: '6JLibwEKZbo'
        },
        {
          src: 'https://img.youtube.com/vi/GNnCr1FyEsE/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Mental Health',
          type: 'video',
          videoId: 'GNnCr1FyEsE'
        },
      
        // Video gallery for Parents
        {
          src: 'https://img.youtube.com/vi/dX4E-tRVlh8/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Parents',
          type: 'video',
          videoId: 'dX4E-tRVlh8'
        },
        {
          src: 'https://img.youtube.com/vi/FT1TNGL5XNk/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Parents',
          type: 'video',
          videoId: 'FT1TNGL5XNk'
        },
        {
          src: 'https://img.youtube.com/vi/a-nRhn2vCrk/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Parents',
          type: 'video',
          videoId: 'a-nRhn2vCrk'
        },
      
        // Video gallery for Students
        {
          src: 'https://img.youtube.com/vi/A2p1Tl4zJxs/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Student',
          type: 'video',
          videoId: 'A2p1Tl4zJxs'
        },
        {
          src: 'https://img.youtube.com/vi/NSvWjjjSsWM/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Student',
          type: 'video',
          videoId: 'NSvWjjjSsWM'
        },
        {
          src: 'https://img.youtube.com/vi/1fMz-BI_dDU/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Student',
          type: 'video',
          videoId: '1fMz-BI_dDU'
        },
      
        // Video gallery for Events
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: '2YZNcF_JA4I',
          src: 'https://img.youtube.com/vi/2YZNcF_JA4I/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'MeXdDdNVtio',
          src: 'https://img.youtube.com/vi/MeXdDdNVtio/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'CbUznSqklgs',
          src: 'https://img.youtube.com/vi/CbUznSqklgs/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'Qo_xm0aPMyQ',
          src: 'https://img.youtube.com/vi/Qo_xm0aPMyQ/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'sKWPq4iRGRY',
          src: 'https://img.youtube.com/vi/sKWPq4iRGRY/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'NsAiVlG0CQc',
          src: 'https://img.youtube.com/vi/NsAiVlG0CQc/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'sf11wrC5Y8Q',
          src: 'https://img.youtube.com/vi/sf11wrC5Y8Q/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: '_xAu1arLx0o',
          src: 'https://img.youtube.com/vi/_xAu1arLx0o/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'da7JSps97Uo',
          src: 'https://img.youtube.com/vi/da7JSps97Uo/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'NAVtTCCilC0',
          src: 'https://img.youtube.com/vi/NAVtTCCilC0/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: '8e6xZvxKe04',
          src: 'https://img.youtube.com/vi/8e6xZvxKe04/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'DeEZG0dFQOc',
          src: 'https://img.youtube.com/vi/DeEZG0dFQOc/hqdefault.jpg'
        },
        {
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'i4V0qCLZ4RQ',
          src: 'https://img.youtube.com/vi/i4V0qCLZ4RQ/hqdefault.jpg'
        },
        
        {
          src: 'https://img.youtube.com/vi/EAl4KTafmEY/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'EAl4KTafmEY'
        },
        {
          src: 'https://img.youtube.com/vi/i4V0qCLZ4RQ/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'i4V0qCLZ4RQ'
        },
        {
          src: 'https://img.youtube.com/vi/DeEZG0dFQOc/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'DeEZG0dFQOc'
        },
        {
          src: 'https://img.youtube.com/vi/StGwjiCbg_Y/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'StGwjiCbg_Y'
        },
        {
          src: 'https://img.youtube.com/vi/fEHfU3PImF0/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'fEHfU3PImF0'
        },
        {
          src: 'https://img.youtube.com/vi/J4SRYv2T6k8/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'J4SRYv2T6k8'
        },
        {
          src: 'https://img.youtube.com/vi/sKWPq4iRGRY/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Events',
          type: 'video',
          videoId: 'sKWPq4iRGRY'
        },
      
        // Video gallery for Helping Hands
        {
          src: 'https://img.youtube.com/vi/TUCE9e2eFBQ/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'TUCE9e2eFBQ'
        },
        {
          src: 'https://img.youtube.com/vi/EKIhsAMvrBk/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'EKIhsAMvrBk'
        },
        {
          src: 'https://img.youtube.com/vi/4xbFf25pguo/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: '4xbFf25pguo'
        },
        {
          src: 'https://img.youtube.com/vi/FxT3xJFYpDg/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'FxT3xJFYpDg'
        },
        {
          src: 'https://img.youtube.com/vi/zdVITP31l10/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'zdVITP31l10'
        },
        {
          src: 'https://img.youtube.com/vi/wzIgSGv3WhI/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'wzIgSGv3WhI'
        },
        {
          src: 'https://img.youtube.com/vi/R9-p_6xV86A/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'R9-p_6xV86A'
        },
        {
          src: 'https://img.youtube.com/vi/4xbFf25pguo/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: '4xbFf25pguo'
        },
        {
          src: 'https://img.youtube.com/vi/2rjRszdO2P0/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: '2rjRszdO2P0'
        },
        {
          src: 'https://img.youtube.com/vi/FxT3xJFYpDg/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'FxT3xJFYpDg'
        },
        {
          src: 'https://img.youtube.com/vi/xkDrHZcrhfg/hqdefault.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
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
        </div><br/>
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
              <div key={index} className="col-md-4 col-6">
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
