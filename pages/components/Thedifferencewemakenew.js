import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Thedifferencewemakenew = () => {
  useEffect(() => {
    // Initialize WOW.js only on the client side
    const WOWJS = require('wowjs');
    const wow = new WOWJS.WOW({
      live: false
    });
    wow.init();
  }, []); // Empty dependency array ensures this runs once on mount
  return (
  <>
  <section className="the-difference-we-make">
  <div className="container">
  <div className="row">
  <div className="col-sm-12 position-r">
  <h1 className="main-heading">
    THE DIFFERENCE WE MAKE
  </h1>
  <div className="service_post position-relative mt-50">
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
            {/* <a href="#" className="img_bx">
              <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
            </a> */}
            <div className="content_box trans">
              {/* <div className="icon trans">
                  <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
              </div> */}
              {/* <div className="steps trans">1</div> */}
              <h4 className="title_24 trans">
                Pioneer in Sports
              </h4>
              <p className="trans">
              In sports, we provide diverse opportunities: from Basketball and Badminton to Squash, Shooting, and Football. Our sports facilities also include Cricket, Chess, Self-Defense (Boxing, Taekwondo, MMA), Swimming, Tennis, Yoga, Skating, Gymnastics, and Athletics. With top-notch facilities and expert coaching, we cater to all interests and skill levels.
              </p>
              
            </div>
          </div>
        </div>  
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
            {/* <a href="#" className="img_bx">
              <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
            </a> */}
            <div className="content_box trans">
              {/* <div className="icon trans">
                  <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
              </div> */}
              {/* <div className="steps trans">1</div> */}
              <h4 className="title_24 trans">
                Baal Saathee (Mental Health)
              </h4>
              <p className="trans">
              Our Baal Saathee initiative focuses on socio-emotional health, integrating cognitive, emotional, and social strategies to support students’ overall well-being. Career guidance is personalized through psychometric assessments and workshops, preparing students for future success.
              </p>
              
            </div>
          </div>
        </div>  
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="service_box type_two hover_1_get">
            {/* <a href="#" className="img_bx">
              <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
            </a> */}
            <div className="content_box trans">
              {/* <div className="icon trans">
                  <Image src="/images/animation.webp" alt="Primary" width={100} height={100}/>
              </div> */}
              {/* <div className="steps trans">1</div> */}
              <h4 className="title_24 trans">
                 Mental Health Club
              </h4>
              <p className="trans">
              Our Mental Health Club and Well-being Classes offer practical tools for stress management and resilience, while our Parent Coffee Meet Program fosters collaboration between parents and school. Inclusive education ensures every student receives the support they need to excel.
              </p>
              
            </div>
          </div>
        </div>  
  </div>
</div>
</div>
</div>
</div>
</section>
</>
)
}

export default Thedifferencewemakenew