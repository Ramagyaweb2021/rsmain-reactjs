import React from 'react';
import Image from 'next/image';
const NewsAndAchievements = () => {
return (
<section className='achievements-section'>
<div className="container-fluid my-3">
  <div className="row">
    {/* News & Events Section */}
    <div className="col-lg-8" id='news-events-section'>
      <h3 className="mb-4">NEWS & EVENTS</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <Image src='/images/news-1.png' alt="" width={343} height={204} />
            <div className="card-body">
              <small className="text-muted">Date, Place</small>
              <h5 className="card-title mt-2">News Heading</h5>
              <p className="news-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
                <div class="d-flex justify-content-center">
                <a href="#" className="btn btn-warning text-black">
                  Read More
                </a>
            </div>

            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
             <Image src='/images/news-2.png' alt="" width={343} height={204} />
            <div className="card-body">
              <small className="text-muted">Date, Place</small>
              <h5 className="card-title mt-2">News Heading</h5>
              <p className="news-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
                            <div class="d-flex justify-content-center">
                <a href="#" className="btn btn-warning text-black">
                  Read More
                </a>
            </div>

            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
             <Image src='/images/news-2.png' alt="" width={343} height={204} />
            <div className="card-body">
              <small className="text-muted">Date, Place</small>
              <h5 className="card-title mt-2">News Heading</h5>
              <p className="news-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="d-flex justify-content-center">
                <a href="#" className="btn btn-warning text-black">
                  Read More
                </a>
            </div>

            </div>
          </div>
        </div>
      </div>
       <div class="d-flex justify-content-center">
          <a href="#" class="btn custom-btn">View All</a>
        </div>

    </div>

    {/* Achievements Section */}
    <div className="col-lg-4" id='achievements-section'>
      <h3 className="mb-4">ACHIEVEMENTS</h3>
      <div className="d-flex flex-wrap justify-content-between">
        <div className='row'>
          <div className='col-lg-6'>
             <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/1.webp" width={300} height={300} alt="Achievement" className="mb-3" />
          </div>
          <div className='col-lg-6'>
             <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/2.webp" width={300} height={300} alt="Achievement" className="mb-3" />
          </div>
          <div className='col-lg-6'>
             <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/3.webp" width={300} height={300} alt="Achievement" className="mb-3" />
          </div>
          <div className='col-lg-6'>
             <Image src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/images/awards/4.webp" width={300} height={300} alt="Achievement" className="mb-3" />
          </div>
        </div>
      </div>
     
       <div class="d-flex justify-content-center">
        <a href="#" class="btn custom-btn">View All</a>
      </div>

    </div>
  </div>
</div>
</section>
);
};

export default NewsAndAchievements;
