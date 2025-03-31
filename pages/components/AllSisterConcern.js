import { useState } from 'react';
import Image from 'next/image';

const AllSisterConcern = () => {
  const [activeTab, setActiveTab] = useState('chairman');

  const verticalData = {
    chairman: {
      name: 'Ramagya Sports Academy',
      title: 'Ramagya Sports Academy',
      quote: 'You see things; and you say, "Why?" But I dream things that never were; and I say, "Why not?"',
      thumbnailUrl: '/images/sister-concern/1.webp', // Thumbnail image
      imageUrl: '/images/people/sanjay-gupta-full.webp', // Large image
    },
    director: {
      name: 'Ramagya Institutes of Professional Studies',
      title: 'Ramagya Institutes of Professional Studies',
      quote: '"Wisdom is knowing what to do next, skill is knowing how to do it and virtue is doing it.”" – David S Jordon',
      thumbnailUrl: '/images/sister-concern/2.webp', // Thumbnail image
      imageUrl: '/images/people/rajni-gupta-full.webp', // Large image
    },
    managingDirector: {
      name: 'Ramagya Arts Academy',
      title: 'Ramagya Arts Academy',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      thumbnailUrl: '/images/sister-concern/3.webp', // Thumbnail image
      imageUrl: '/images/people/utkarsh-gupta-full.webp', // Large image
    },
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'chairman' ? 'active' : ''}`}
                onClick={() => setActiveTab('chairman')}
              >
                <Image
                  src={verticalData.chairman.thumbnailUrl}
                  alt={verticalData.chairman.name}
                  width={25}
                  height={25}
                  className="rounded-circle1 me-2"
                />
                {verticalData.chairman.title}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'director' ? 'active' : ''}`}
                onClick={() => setActiveTab('director')}
              >
                <Image
                  src={verticalData.director.thumbnailUrl}
                  alt={verticalData.director.name}
                  width={25}
                  height={25}
                  className="rounded-circle1 me-2"
                />
                {verticalData.director.title}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'managingDirector' ? 'active' : ''}`}
                onClick={() => setActiveTab('managingDirector')}
              >
                <Image
                  src={verticalData.managingDirector.thumbnailUrl}
                  alt={verticalData.managingDirector.name}
                  width={25}
                  height={25}
                  className="rounded-circle1 me-2"
                />
                {verticalData.managingDirector.title}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-12 text-left">
          {activeTab === 'chairman' && (
           <div className='row'>
              <div className="col-md-12">
                <div className="profile position-relative">
                  <Image src={verticalData.chairman.imageUrl} alt={verticalData.chairman.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{verticalData.chairman.title}</h5>
                  <h6>{verticalData.chairman.name}</h6>
                  <p className="fst-italic">{verticalData.chairman.quote}</p>
                  <a href='https://www.forbesindia.com/article/brand-connect/dr-sanjay-gupta-chairman-ramagya-group-a-benevolent-visionary/62865/1' target='_blank'><Image src={verticalData.chairman.logo} alt="Forbes Logo" width={150} height={70} /></a>
                  <p>{verticalData.chairman.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
            
           </div>
           
          )}
          {activeTab === 'director' && (
            <div className="profile position-relative">
              <div className='row'>
              <div className="col-md-12">
                <div className="profile position-relative">
                <Image src={verticalData.director.imageUrl} alt={verticalData.director.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{verticalData.director.title}</h5>
                  <h6>{verticalData.director.name}</h6>
                  <p className="fst-italic">{verticalData.director.quote}</p>
                  <a href='https://www.shethepeople.tv/blog/survival-rajni-gupta-changemaker/' target='_blank'><Image src={verticalData.director.logo} alt="Forbes Logo" width={250} height={70} /></a>
                  <p className="mt-3">{verticalData.director.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
           
           </div>
            </div>
          )}
          {activeTab === 'managingDirector' && (
            <div className="profile position-relative">
              <div className='row'>
              <div className="col-md-12">
                <div className="profile position-relative">
                <Image src={verticalData.managingDirector.imageUrl} alt={verticalData.managingDirector.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{verticalData.managingDirector.title}</h5>
                  <h6>{verticalData.managingDirector.name}</h6>
                  <p className="fst-italic">{verticalData.managingDirector.quote}</p>
                  <a href='https://www.forbesindia.com/article/brand-connect/utkarsh-gupta-youthful-dynamism/57561/1' target='_blank'><Image src={verticalData.managingDirector.logo} alt="Forbes Logo" width={150} height={70} /></a>
                  <p className="mt-3">{verticalData.managingDirector.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
           
           </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllSisterConcern;
