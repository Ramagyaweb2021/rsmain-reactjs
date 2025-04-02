import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const AllSisterConcern = () => {
  const [activeTab, setActiveTab] = useState('rsa');
  const tabRef = useRef(null);

  const verticalData = {
    rsa: {
      title: 'Ramagya Sports Academy',
      quote: 'You see things; and you say, "Why?" But I dream things that never were; and I say, "Why not?"',
      thumbnailUrl: '/images/sister-concern/1.webp',
      imageUrl: '/images/people/sanjay-gupta-full.webp',
      link: '/ramagya-sports-academy',
    },
    rips: {
      title: 'Ramagya Institutes of Professional Studies',
      quote: '"Wisdom is knowing what to do next, skill is knowing how to do it and virtue is doing it.” - David S Jordon',
      thumbnailUrl: '/images/sister-concern/2.webp',
      imageUrl: '/images/people/rajni-gupta-full.webp',
      link: '/ramagya-institutes',
    },
    raa: {
      title: 'Ramagya Arts Academy',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/ramagya-arts-academy',
    },
    rf: {
      title: 'Ramagya Foundation',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/ramagya-foundation',
    },
    n: {
      title: 'Nishabd',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/nishabd',
    },
    rm: {
      title: 'Ramagya Mart',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/ramagya-mart',
    },
    cp: {
      title: 'Citizen Post',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/citizen-post',
    },
    ph: {
      title: 'Play House',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp',
      imageUrl: '/images/people/utkarsh-gupta-full.webp',
      link: '/play-house',
    },
  };



  useEffect(() => {
    const tabContainer = tabRef.current;
    if (tabContainer) {
      const handleWheelScroll = (event) => {
        event.preventDefault();
        tabContainer.scrollLeft += event.deltaY > 0 ? 50 : -50;
      };
      tabContainer.addEventListener('wheel', handleWheelScroll);
      return () => tabContainer.removeEventListener('wheel', handleWheelScroll);
    }
  }, []);

  return (
    <section className="container my-5">
      {/* Scrollable Tabs */}
      <div className="row justify-content-center">
        <div className="col-md-12">
          <ul
            ref={tabRef}
            className="nav nav-tabs d-flex flex-nowrap overflow-auto w-100"
            style={{ whiteSpace: 'nowrap', cursor: 'grab', scrollbarWidth: 'none'}}
          >
            {Object.keys(verticalData).map((key) => (
              <li className="nav-item flex-shrink-0" style={{ minWidth: '180px', border:'1px solid #ffdf8b'}} key={key}>
                <button
                  className={`nav-link text-center w-100 ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  style={{ padding: '15px', fontWeight: '600'}}
                >
                  <Image
                    src={verticalData[key].thumbnailUrl}
                    alt={verticalData[key].title}
                    width={30}
                    height={30}
                    className="rounded-circle me-2"
                  />
                  {verticalData[key].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vertical Details */}
      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-md-12 d-flex flex-column align-items-center">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-center">
              <Image
                src={verticalData[activeTab].imageUrl}
                alt={verticalData[activeTab].title}
                width={500}
                height={300}
                className="rounded"
              />
            </div>
            <div className="col-md-6 text-left">
              <h2 className="fw-bold mb-3">{verticalData[activeTab].title}</h2>
              <p className="fst-italic">{verticalData[activeTab].quote}</p>
              <a href={verticalData[activeTab].link} className="btn btn-primary mt-2">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSisterConcern;
