import { useState } from 'react';
import Image from 'next/image';

const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState('chairman');

  const leadershipData = {
    chairman: {
      name: 'Dr. Sanjay Gupta',
      title: 'Chairman | Ramagya Group',
      quote: 'You see things; and you say, "Why?" But I dream things that never were; and I say, "Why not?"',
      imageUrl: '/images/people/sanjay-gupta-full.png', // Large image
      thumbnailUrl: '/images/people/sanjay-gupta-thumbnail.png', // Thumbnail image
      // description: 'This quote perfectly encapsulates the remarkable journey...  – George Bernard Shaw',
      logo: '/images/people/forbes.png',
    },
    director: {
      name: 'Mrs. Rajni Gupta',
      title: 'Director | Ramagya Group',
      quote: '"Wisdom is knowing what to do next, skill is knowing how to do it and virtue is doing it.”" – David S Jordon',
      imageUrl: '/images/people/rajni-gupta-full.png', // Large image
      thumbnailUrl: '/images/people/rajni-gupta-thumbnail.png', // Thumbnail image
      logo: '/images/people/see-the-people.png',
    },
    managingDirector: {
      name: 'Mr. Utkarsh Gupta',
      title: 'Managing Director | Ramagya Group',
      quote: '“There is only one corner of the universe you can be certain of improving, and that’s your own self.”',
      imageUrl: '/images/people/utkarsh-gupta-full.webp', // Large image
      thumbnailUrl: '/images/people/utkarsh-gupta-thumbnail.png', // Thumbnail image
      logo: '/images/people/forbes.png',
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
                  src={leadershipData.chairman.thumbnailUrl}
                  alt={leadershipData.chairman.name}
                  width={80}
                  height={80}
                  className="rounded-circle1 me-2"
                />
                {leadershipData.chairman.title}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'director' ? 'active' : ''}`}
                onClick={() => setActiveTab('director')}
              >
                <Image
                  src={leadershipData.director.thumbnailUrl}
                  alt={leadershipData.director.name}
                  width={80}
                  height={80}
                  className="rounded-circle1 me-2"
                />
                {leadershipData.director.title}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'managingDirector' ? 'active' : ''}`}
                onClick={() => setActiveTab('managingDirector')}
              >
                <Image
                  src={leadershipData.managingDirector.thumbnailUrl}
                  alt={leadershipData.managingDirector.name}
                  width={80}
                  height={80}
                  className="rounded-circle1 me-2"
                />
                {leadershipData.managingDirector.title}
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
                  <Image src={leadershipData.chairman.imageUrl} alt={leadershipData.chairman.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{leadershipData.chairman.title}</h5>
                  <h6>{leadershipData.chairman.name}</h6>
                  <p className="fst-italic">{leadershipData.chairman.quote}</p>
                  <a href='https://www.forbesindia.com/article/brand-connect/dr-sanjay-gupta-chairman-ramagya-group-a-benevolent-visionary/62865/1' target='_blank'><Image src={leadershipData.chairman.logo} alt="Forbes Logo" width={150} height={70} /></a>
                  <p>{leadershipData.chairman.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
              <div className='row'>
              <div className='col-md-12 p-mobile-margin text-left'>
                <p>This quote perfectly encapsulates the remarkable journey of Ramagya School over the past 15 years. Every great achievement begins with a vision, and our journey started with a dream to create a space where young learners could explore their potential and thrive alongside their peers on an international scale.</p>

                <p>From our modest beginnings, we envisioned an educational environment that transcends conventional standards, empowering students to reach for the stars and change the world. This vision has guided us in establishing our nascent academic foundation, as we not only dreamed but also committed ourselves to turning that dream into reality. It required immense perseverance, passion, determination, and self-discipline to nurture those initial seedlings into what we have today.</p>

                <p>While our journey of accomplishments has commenced, we recognize that it is merely the beginning. The transformation from a single institution to a group of schools has been made possible through the collective efforts of our dedicated team. This unwavering commitment to our vision of delivering education with international standards has paved the way for our success.</p>

               <p> I extend my heartfelt gratitude to the Principals, Heads of Departments, teachers, parents, and the broader community for their resilience and shared purpose in overcoming challenges. Together, we are committed to providing a progressive and holistic education that shapes character, enriches minds, and fosters a spirit of exploration in our learners. </p>

               <p> Success is the culmination of perfection, hard work, loyalty, persistence, and the joy of achievement. Yet, as we celebrate our milestones, we understand that there are still many paths to traverse in our pursuit of excellence.</p>
              </div>
              </div>
           </div>
           
          )}
          {activeTab === 'director' && (
            <div className="profile position-relative">
              <div className='row'>
              <div className="col-md-12">
                <div className="profile position-relative">
                <Image src={leadershipData.director.imageUrl} alt={leadershipData.director.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{leadershipData.director.title}</h5>
                  <h6>{leadershipData.director.name}</h6>
                  <p className="fst-italic">{leadershipData.director.quote}</p>
                  <a href='https://www.shethepeople.tv/blog/survival-rajni-gupta-changemaker/' target='_blank'><Image src={leadershipData.director.logo} alt="Forbes Logo" width={250} height={70} /></a>
                  <p className="mt-3">{leadershipData.director.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
              <div className='row'>
              <div className='col-md-12 p-mobile-margin text-left'>
                <p>At Ramagya, we align with UNICEF’s vision of education, where the focus is on equipping young minds with essential life skills, laying a foundation for transformational learning experiences. We believe in recruiting individuals of character and nurturing their potential, for education today serves a dual purpose: to enable students to make a meaningful living and to empower them to live independently. Our mission emphasizes learning how to think rather than what to think, cultivating a skill set that prepares students for a dynamic future.</p>

                <p>Education, as we envision it, transcends technical proficiency; it broadens horizons, ignites intellectual curiosity, and fosters a lifelong journey of learning. At Ramagya, we aim for an education that encourages students to observe, question, and grow, with parents and teachers serving as the strongest role models in this journey. Your guidance, influence, and shared commitment to their development make all the difference in inspiring and shaping your child&#39;s potential.</p>

                <p>Parental involvement is integral to our mission, creating a cohesive educational community that bridges home and school. Together, we cultivate an inclusive, global learning environment for our students, where academics are seamlessly integrated with life skills and real-world opportunities. Such an environment not only equips students to realize their dreams but also instills confidence and resilience to lead fulfilling lives.</p>

               <p> I extend heartfelt gratitude to our team of educators, mentors, and everyone who has supported Ramagya Group’s growth into one of the leading educational institutions in Noida and the NCR. As the saying goes, &#39;The winds and waves are always on the side of the alert navigators.&#39; Let us continue to navigate these currents together, making each wave a step toward our shared success.</p>

               
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
                <Image src={leadershipData.managingDirector.imageUrl} alt={leadershipData.managingDirector.name} width={1250} height={574} className="rounded-rectangle" />
                {/* Overlay content */}
                <div className="overlay-content">
                  <h5 className="mt-3">{leadershipData.managingDirector.title}</h5>
                  <h6>{leadershipData.managingDirector.name}</h6>
                  <p className="fst-italic">{leadershipData.managingDirector.quote}</p>
                  <a href='https://www.forbesindia.com/article/brand-connect/utkarsh-gupta-youthful-dynamism/57561/1' target='_blank'><Image src={leadershipData.managingDirector.logo} alt="Forbes Logo" width={150} height={70} /></a>
                  <p className="mt-3">{leadershipData.managingDirector.description}</p>
                  {/* <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="learn-more-button">
                    <a href="#">Know More</a>
                    </div>
                  </div> */}
                </div>
              </div>
            
              </div>
              <div className='row'>
              <div className='col-md-12 p-mobile-margin text-left'>
                <p>Under the visionary leadership of Mr. Utkarsh Gupta, Ramagya School has rapidly established itself as one of the top 30 schools in India, with ambitious aspirations to break into the top 10 in the coming years. Our commitment to providing the best facilities and resources for our students is unwavering. Through strategic collaborations with prestigious universities globally, we offer our students a rich, international platform that enhances their learning experiences and broadens their horizons.</p>

                <p>Today, we proudly celebrate a track record of unparalleled academic results. As the demand for quality education continues to grow, we recognize the importance of moving closer to our students, ensuring that we remain attuned to their needs and aspirations. Our relentless pursuit of excellence in education drives us to continuously refine and enrich our teaching methodologies and resources.</p>

                <p>Education is the cornerstone of civilization, and we believe that those who impart this vital knowledge must be masters of their craft. At Ramagya, we are dedicated to recruiting and retaining the finest educators - professionals who not only excel in their fields but also inspire and empower students to thrive in an increasingly competitive world.</p>

               <p>To achieve success in life, it is essential to set clear and definitive goals. By honing a vivid image of what success looks like, we cultivate strong motivation to climb the ladder of achievement. This organized approach to goal-setting fosters an environment where both students and educators can flourish, united in their quest for excellence.</p>

               
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

export default LeadershipSection;
