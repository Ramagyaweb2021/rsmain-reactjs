import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
// Dynamically import WOW.js to avoid server-side issues
const WOW = dynamic(() => import('wowjs'), { ssr: false });
const Evolve = () => {
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
<section className="learn section fp-section fp-table active fp-completely" id="evolve">
<div className="fp-tableEvolve">
  {/* style={{ height:"676px"}} */}
<div className="container">
<div className="row">
<div className="col-sm-12 position-r">
<h1 className="">
  EVOLVE
<span className="lineclass" /> 
<span
className="wow animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
  EVOLVE YOUR CAREER WITH US
</span>
</h1>
<p>Fostering future leaders through our comprehensive approach that helps students to Evolve. 
Through these dynamic programs, Ramagya School is committed to evolving our students into confident, capable leaders ready to tackle future challenges with purpose and responsibility.</p>
<section className="service_post_11 position-relative">
<div className="row">
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
      <div className="image-container">
          <div className="overlay">
          <div className="icon trans">
              <Image src="/images/career-path.png" alt="personaforge" width={50} height={50}/>
            </div>
              <h2 className="overlay-title">
                  CAREER PATH
              </h2>
            {/* <p>This is the overlay content that appears on hover.</p> */}
          </div>
        </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/career-path.png" alt="personaforge" width={80} height={80}/>
            </div>
            <div className="steps trans">1</div>
            <h4 className="title_24 trans">
                CAREER PATH
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
       
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
         <div className="image-container">
                <div className="overlay">
                <div className="icon trans">
                    <Image src="/images/investiture-ceremony.png" alt="personaforge" width={50} height={50}/>
                  </div>
                    <h2 className="overlay-title">
                       STUDENT DRIVEN SOCIETIES
                    </h2>
                  {/* <p>This is the overlay content that appears on hover.</p> */}
                </div>
              </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/investiture-ceremony.png" alt="personaforge" width={80} height={80}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       STUDENT DRIVEN SOCIETIES
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
            <div className="steps trans">2</div>
            <h4 className="title_24 trans">
                STUDENT DRIVEN SOCIETIES
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
         
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
      <div className="image-container">
          <div className="overlay">
          <div className="icon trans">
              <Image src="/images/innovation.png" alt="personaforge" width={50} height={50}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       Innovation
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
              <h2 className="overlay-title">
                MUN
              </h2>
            {/* <p>This is the overlay content that appears on hover.</p> */}
          </div>
        </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/innovation.png" alt="personaforge" width={80} height={80}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       Innovation
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
            <div className="steps trans">3</div>
            <h4 className="title_24 trans">
              MUN
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
         
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
      <div className="image-container">
          <div className="overlay">
          <div className="icon trans">
              <Image src="/images/empowered-minds.png" alt="personaforge" width={50} height={50}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       EMPOWERED MINDS
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
              <h2 className="overlay-title">
                EMPOWERED MINDS
              </h2>
            {/* <p>This is the overlay content that appears on hover.</p> */}
          </div>
        </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/empowered-minds.png" alt="personaforge" width={80} height={80}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       EMPOWERED MINDS
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
            <div className="steps trans">4</div>
            <h4 className="title_24 trans">
              EMPOWERED MINDS
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
        
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
      <div className="image-container">
          <div className="overlay">
          <div className="icon trans">
              <Image src="/images/CSR.png" alt="personaforge" width={50} height={50}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       EMPOWERED MINDS
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
              <h2 className="overlay-title">
                CSR INITIATIVES
              </h2>
            {/* <p>This is the overlay content that appears on hover.</p> */}
          </div>
        </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/CSR.png" alt="personaforge" width={80} height={80}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       CSR
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
            <div className="steps trans">5</div>
            <h4 className="title_24 trans">
               CSR INITIATIVES
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
         
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="service_box type_four color_two hover_1_get hover_1">
      <div className="image-container">
          <div className="overlay">
          <div className="icon trans">
              <Image src="/images/self-reflection.png" alt="personaforge" width={50} height={50}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       Self Reflection
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
              <h2 className="overlay-title">
                STUDENT CABINET
              </h2>
            {/* <p>This is the overlay content that appears on hover.</p> */}
          </div>
        </div>
        <div className="content_box trans">
          <div className="top">
            <div className="icon trans">
              <Image src="/images/self-reflection.png" alt="personaforge" width={80} height={80}/>
              {/* <div className="image-container">
                <div className="overlay">
                    <h2 className="overlay-title">
                       Self Reflection
                    </h2>
                  // <p>This is the overlay content that appears on hover.</p>
                </div>
              </div> */}
            </div>
            <div className="steps trans">6</div>
            <h4 className="title_24 trans">
               STUDENT CABINET
            </h4>
          </div>
          <div className="line_box">
            <div className="line" />
          </div>
         
        </div>
      </div>
    </div>
  </div>
  </section>
      </div>
    </div>
  </div>

{/* Learb more button */}
<div className="approach mt-50">
    <Link href="#">Learn More</Link>
</div>
</div>
</section>
</>
)
}

export default Evolve