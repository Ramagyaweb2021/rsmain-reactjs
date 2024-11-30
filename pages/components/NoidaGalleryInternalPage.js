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

  const imageTabs = ['All', 'School Events', 'Sports', 'Science Lab'];
  const videoTabs = [
    'All', 'Celeb Bites', 'Testimonials', 'Sports Galore', 'Ramagya Life', 'Mental Health', 
    'Parents', 'Student', 'Events', 'Helping Hand'
  ];

  const items = [
     // **********Image gallery
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/68.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/69.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/70.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/71.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/72.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/73.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/74.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/75.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/76.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/77.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/78.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/79.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/80.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/81.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/82.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/83.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/84.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/85.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/86.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/87.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/88.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/89.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/90.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/91.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/92.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/93.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/94.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/95.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/96.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
      {
        "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/97.webp",
        "title": "Ramagya School Gallery",
        "category": "Gallery",
        "type": "image"
      },
    
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/98.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/99.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/100.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/101.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/102.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/103.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/104.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/105.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/106.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/107.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/108.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/109.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/110.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/111.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/112.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/113.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/1.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/2.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/3.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/4.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/5.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/6.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/7.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/8.webp', 
            title: 'Ramagya School Gallery', 
            category: 'Gallery', 
            type: 'image', 
        },
        
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/9.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/10.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/11.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/12.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/13.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/14.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/15.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/16.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/17.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/20.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/22.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/23.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/24.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/25.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/27.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/28.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
          { 
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/29.webp',
            title: 'Ramagya School Gallery',
            category: 'Gallery', 
            type: 'image',  
          },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/30.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/32.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/34.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/35.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/37.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/38.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/39.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/40.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/41.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/42.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/43.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/44.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/45.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/47.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/48.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/49.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/50.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/51.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/52.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/53.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/56.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/57.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/60.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
            { 
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/gallery/67.webp',
              title: 'Ramagya School Gallery',
              category: 'Gallery',
              type: 'image'
            },
          

 
    
    // **********Video gallery for celeb bites
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/shive-aroore.webp',
      title: 'Shive Aroore Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'tm0yBtH04ao'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-92.jpg',
      title: 'Sports Event',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'cwrBuQjYpOI'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-90.jpg',
      title: 'Testimonial Video 1',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'YCDEIq4f--g'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-93.jpg',
      title: 'Testimonial Video 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'PARbI2ne94c'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/jacob.webp',
      title: 'Jacob Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'EJW8mgGx8dA'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      title: 'Smiriti Testimonial 1',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'J80V7ZEn25I'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      title: 'Smiriti Testimonial 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'XzhWSqIlts8'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/smiriti.webp',
      title: 'Smiriti Testimonial 3',
      category: 'Celeb Bites',
      type: 'video',
      videoId: '1yWQuKlJqTc'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ball-krishna.webp',
      title: 'Krishna Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'EDJKvB2tPGk'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sunil-dabas.webp',
      title: 'Sunil Dabas Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'HbN-R3NqP2k'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/chetan-bhagat.webp',
      title: 'Chetan Bhagat Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'WrQHBzo0ww4'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ball-krishna.webp',
      title: 'Krishna Testimonial 2',
      category: 'Celeb Bites',
      type: 'video',
      videoId: '-GLEJ9Kl4Cc'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/dav-more.webp',
      title: 'Dav More Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'GS5QKlc0a4Y'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/percillaherrera.webp',
      title: 'Percilla Herrera Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: '1Ed7WJhGUig'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/ashley-deans.webp',
      title: 'Ashley Deans Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'EdpF4q8OYEE'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/abhinav-bindra.webp',
      title: 'Abhinav Bindra Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'Hmp_tCEB0Y4'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/bhupati.webp',
      title: 'Bhupati Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'ik4fTTk2CSQ'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/vishwanathan.webp',
      title: 'Vishwanathan Testimonial',
      category: 'Celeb Bites',
      type: 'video',
      videoId: 'rYnH2LND6Lg'
    },
     // **********Video gallery for sports galore
     {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-18.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'LZiBjKNuf2Q'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-1.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'zpirz-zY3VI'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-3.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'kwYavFDgETw'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-4.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'pGjOxDtp2Ns'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-5.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'YX8dwNxeE-E'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-2.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'mxbwTmAZa-8'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-6.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'X65h8NLrn8g'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-7.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '6tM9RYwefSk'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-8.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'VpHoW4iWJS4'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-9.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'mx4OZNJTZEg'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-10.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'X65h8NLrn8g'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-11.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'tqjx5l0iJ70'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-12.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '6JLibwEKZbo'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-13.webp',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '-GLEJ9Kl4Cc'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-14.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: '5t3LvHYADj4'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-15.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'efbxjrntRjs'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-16.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'xOJoQ3woW4g'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-17.jpg',
      title: 'Ramagya School Gallery',
      category: 'Sports Galore',
      type: 'video',
      videoId: 'tCd3irE7pk8'
    },
    // Video gallery for testimonials
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/media-testimonial-1.webp',
      title: 'Ramagya School Gallery',
      category: 'Testimonials',
      type: 'video',
      videoId: 'RCOvRuBpg7I'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/media-testimonial-2.webp',
      title: 'Ramagya School Gallery',
      category: 'Testimonials',
      type: 'video',
      videoId: '14G-R2THcmI'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/media-testimonial-3.webp',
      title: 'Ramagya School Gallery',
      category: 'Testimonials',
      type: 'video',
      videoId: 'yIvEpafH0zU'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/media-testimonial-4.webp',
      title: 'Ramagya School Gallery',
      category: 'Testimonials',
      type: 'video',
      videoId: 'pjNDUbWuzbM'
    },
     // Video gallery for RAMAGYA'S LIFE
     {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-89.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: '0KJtNyd5nOI'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-88.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: '57VshWHvrDg'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-81.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'bOSV9sBJG4A'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-82.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'biSL84-A1ag'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-83.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'tgHMqB9yO70'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-84.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'vp7wMKKdIZA'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-85.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'u-_RKgXweCU'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-86.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'VW8Q65Tq2tQ'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/all-india-karate-championship.webp',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'ZrBqOyJ9VQo'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/curiosity-leadership.webp',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'J2darvxUR-0'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-19.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'xdfOJd3DmEw'
    },
    {
      src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-20.jpg',
      title: 'Ramagya School Gallery',
      category: 'Ramagya Life',
      type: 'video',
      videoId: 'mVoEskcPaMk'
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-21.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "799cRaGyMLc"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-22.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "JxosIQNztdY"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-23.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "2ygyjc9Zx74"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-24.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "keA-NmKKqkA"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-25.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "DrkcUHteeeE"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-26.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "uH-Q0PPe-ew"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-27.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "BhzGXBmZ_Pg"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-28.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "bkuk6N7V7CA"
    },
    {
      "src": "https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-29.jpg",
      "title": "Ramagya School Gallery",
      "category": "Ramagya Life",
      "type": "video",
      "videoId": "K01-HfuJ2XQ"
    },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-30.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'ad1Sfg1v4BE'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-31.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'S5rSjEobMYo'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-32.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'nI45OWWdfCY'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-33.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'm7KcNMrqLMA'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-34.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: '-AB_bZjWJ2I'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-35.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'DM2GJYW3KWg'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-36.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'K8DOvMu7eoQ'
      },
      {
        src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-37.jpg',
        title: 'Ramagya School Gallery',
        category: 'Ramagya Life',
        type: 'video',
        videoId: 'rueSBh7Py2E'
      },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-38.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'NLIs9tgIRBM'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-39.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'OlGtv2a6JOI'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-40.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'zz96x_Dpa8U'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-41.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'J0EpNRLjEwo'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-42.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'ai6eY57M4L8'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-43.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'UyiQZQYOUM0'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-44.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'AGZBz2DGPRo'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-45.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: '-JgPxPnTKuY'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-46.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'EW1-kY0mxtk'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-47.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'v4PEoZJr2qs'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-48.jpg',
          title: 'Ramagya School Gallery',
          category: 'Ramagya Life',
          type: 'video',
          videoId: 'W2Pzn4Q3IlY'
        }, 
        //  Video gallery for mental health
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-49.jpg',
            title: 'Ramagya School Gallery',
            category: 'Mental Health',
            type: 'video',
            videoId: 'CEbwZBE0LOU'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-50.jpg',
            title: 'Ramagya School Gallery',
            category: 'Mental Health',
            type: 'video',
            videoId: 'LJaMBTc_rDk'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-51.jpg',
            title: 'Ramagya School Gallery',
            category: 'Mental Health',
            type: 'video',
            videoId: 'AgB1VhWqleg'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-52.jpg',
            title: 'Ramagya School Gallery',
            category: 'Mental Health',
            type: 'video',
            videoId: '6JLibwEKZbo'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-53.jpg',
            title: 'Ramagya School Gallery',
            category: 'Mental Health',
            type: 'video',
            videoId: 'GNnCr1FyEsE'
          },   
          
          // Video gallery for parents
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-54.jpg',
            title: 'Ramagya School Gallery',
            category: 'Parents',
            type: 'video',
            videoId: 'dX4E-tRVlh8'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-55.jpg',
            title: 'Ramagya School Gallery',
            category: 'Parents',
            type: 'video',
            videoId: 'FT1TNGL5XNk'
          },
          {
            src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-56.jpg',
            title: 'Ramagya School Gallery',
            category: 'Parents',
            type: 'video',
            videoId: 'a-nRhn2vCrk'
            },

            // Video gallery for students
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-57.jpg',
              title: 'Ramagya School Gallery',
              category: 'Student',
              type: 'video',
              videoId: 'A2p1Tl4zJxs'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-58.jpg',
              title: 'Ramagya School Gallery',
              category: 'Student',
              type: 'video',
              videoId: 'NSvWjjjSsWM'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-59.jpg',
              title: 'Ramagya School Gallery',
              category: 'Student',
              type: 'video',
              videoId: '1fMz-BI_dDU'
            },
            // Video gallery for EVENTS
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-60.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'EAl4KTafmEY'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-61.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'i4V0qCLZ4RQ'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-62.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'DeEZG0dFQOc'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-63.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'StGwjiCbg_Y'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-64.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'fEHfU3PImF0'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-65.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'J4SRYv2T6k8'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-66.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'sKWPq4iRGRY'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-67.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'bxuaeGqHwsw'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-68.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'w8ZV2UvlS1I'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-82.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'biSL84-A1ag'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-83.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'tgHMqB9yO70'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-85.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'u-_RKgXweCU'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-87.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: '57VshWHvrDg'
            },
            {
              src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-86.jpg',
              title: 'Ramagya School Gallery',
              category: 'Events',
              type: 'video',
              videoId: 'VW8Q65Tq2tQ'
            },
      // Video gallery for helping hands
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-69.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'zdVITP31l10'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-70.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'wzIgSGv3WhI'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-71.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'R9-p_6xV86A'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-72.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: '4xbFf25pguo'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-73.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: '2rjRszdO2P0'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-74.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'FxT3xJFYpDg'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-75.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'xkDrHZcrhfg'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-76.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'de_BXRJQF4o'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-77.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'T9A332dY1oo'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-78.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'VS4iqGTQTd0'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-79.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'h90p1IQbZrQ'
        },
        {
          src: 'https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/testimonial/thumbnail/sg-80.jpg',
          title: 'Ramagya School Gallery',
          category: 'Helping Hand',
          type: 'video',
          videoId: 'T8DsS-rDr0k'
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
              <div key={index} className="col-md-3 col-6">
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
                          src="/images/youtube-play-icon.png"
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
                    //     alt="Video Thumbnail"
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
              height={750}
            />
            <button className="next-button" onClick={handleNext}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoidaGalleryInternalPage;
