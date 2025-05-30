import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const HomeExperimentSection = () => {
  const [activeCategory, setActiveCategory] = useState("category1");

  // Settings for the Slick sliders
  const ExperimentSlider1 = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000, 
    swipe: false,
    draggable: false,
    dotsClass: "slick-dots custom-dots",
    cssEase: "linear",
    pauseOnHover: true,  // Pause on hover
    rtl: false, // Left to right
  };

  const ExperimentSlider2 = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000, 
    swipe: false,
    draggable: false,
    dotsClass: "slick-dots custom-dots",
    cssEase: "linear",
    rtl: true, // Right to left
  };

  const ExperimentSlider3 = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000, 
    swipe: false,
    draggable: false,
    dotsClass: "slick-dots custom-dots",
    cssEase: "linear",
    rtl: false, // Left to right
  };

  // Auto-switching categories
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory(prevCategory => {
        if (prevCategory === 'category1') return 'category2';
        if (prevCategory === 'category2') return 'category3';
        return 'category1';
      });
    }, 10000); // Change category every 6 seconds (adjust the time as needed)

    return () => clearInterval(categoryInterval); // Clean up on component unmount
  }, []);

   //useEffect(() => {
        // Initialize WOW.js only on the client side
      //   const WOWJS = require('wowjs');
      //   const wow = new WOWJS.WOW({
      //     live: false
      //   });
      //   wow.init();
      // }, []); 
      //Use IntersectionObserver for Animation Triggers
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__zoomIn');
              }
            });
          },
          { threshold: 0.2 }
        );
      
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
      
        return () => observer.disconnect();
      }, []);

  return (
    <div className="learn">
      <div className="container my-custom-experiment">
        <h1 className='scrollspy-p-0'>EXPERIMENT<span className="lineclass" />
          <span className="sub-heading animate-on-scroll">
            WORKSHOPS, PROGRAMS & EXPERIENCES
          </span>
        </h1>
        <p className='scrollspy-p-0'>Encouraging hands-on experiments that bring theory to life to enhance student’s horizons across various disciplines through experiential learning.</p>
      </div>

      <div className='container-fluid'>
        {/* First Row slider Section */}  
        <div className="row slide-1 content g-1">
          <Slider {...ExperimentSlider1}>
            {activeCategory === 'category1' && (
              <div>
                 <div className='row'>
                     <div className="row slide-content">
                      <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                       <div>
                       <Image
                          src="/images/slider/experiment/jadu-gyan.webp"
                          alt="jadu gyan"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                       </div>
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">JODO GYAN</h6>
                          <p>Enhancing number sense and problem-solving through hands-on.</p>
                        </div>
                      </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                     <div>
                     <Image
                        src="/images/slider/experiment/big-slider-1.webp"
                        alt="Experiment Slider"
                        width={630}
                        height={155}
                        // style={{ width: "auto", height: "auto" }} 
                      />
                     </div>

                      {/* <Image
                        src="/images/slider/experiment/big-slider-1.webp"
                        alt="big-slider-1"
                        width={630}
                        height={155}
                        className="card-img-top"
                      /> */}
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">CLUBS</h6>
                          <p>Clubs foster creativity, collaboration and life skills, while sharpens improvisation, confidence.</p>
                        </div>
                      </div>
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                    <div>
                    <Image
                        src="/images/slider/experiment/clubs.webp"
                        alt="clubs"
                        width={460}
                        height={155}
                        className="card-img-top"
                      />
                    </div>
                      </div>
                    </div>
                  </div>
              </div>
            )}
            {activeCategory === 'category2' && (
              <div>
                   <div className='row'>
                   <div className="row slide-content">
                    <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                   <div>
                   <Image
                        src="/images/slider/experiment/dance-latest.webp"
                        alt="dance"
                        width={460}
                        height={155}
                        className="card-img-top"
                      />
                   </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                    <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DANCE</h6>
                          <p>Inspires creativity and self-expression, enabling students to explore movement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                  <div>
                  <Image
                        src="/images/slider/experiment/big-slider-4.webp"
                        alt="big-slider-4"
                        width={630}
                        height={155}
                        className="card-img-top"
                      />
                  </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                     <div className="box">
                        <div className="flex">
                        <h6 className="colr1">DRAMA</h6>
                        <p>Encourages self-expression and creativity, allowing students to develop improvisation skills.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                   <div>
                   <Image
                        src="/images/slider/experiment/drama.webp"
                        alt="drama"
                        width={460}
                        height={155}
                        className="card-img-top"
                      />
                   </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeCategory === 'category3' && (
              <div>
                 <div className='row'>
                    <div className="row slide-content">
                        <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                        <div>
                        <Image
                          src="/images/slider/experiment/book-review.webp"
                          alt="book-review"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                        </div>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                          <div className="box">
                            <div className="flex">
                            <h6 className="colr1">BOOK REVIEWS</h6>
                            <p>Sharpens critical thinking as students discuss themes, characters, and plots from the Book of the Month.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                        <div>
                        <Image
                          src="/images/slider/experiment/big-slider-7.webp"
                          alt="big-slider-7"
                          width={630}
                          height={155}
                          className="card-img-top"
                        />
                        </div>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                        <div className="box">
                            <div className="flex">
                            <h6 className="colr1">MUSIC</h6>
                            <p>A vital part of education, teaching teamwork, patience, and creativity through both Indian.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                         <div>
                         <Image
                          src="/images/slider/experiment/music.webp"
                          alt="music"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                         </div>
                        </div>
                      </div>
                 </div>
              </div>
            )}
          </Slider>
        </div>

        {/* Second Row slider Section */}
        <div className="row slide-1 content g-1">
         <div className='col-md-5 mt-2'>
           <Slider {...ExperimentSlider2}>
            {activeCategory === 'category1' && (
              <>
                <div className="row slide-content">
                  <div className="col-12 col-md-12 col-lg-12 d-none d-md-block image-wrapper">
                  <div>
                  <Image
                      src="/images/slider/experiment/big-slider-2.webp"
                      alt="big-slider-2"
                      width={630}
                      height={155}
                      className="card-img-top"
                    />
                  </div>
                  </div>
                </div>
              </>
            )}
            {activeCategory === 'category2' && (
              <>
                <div className="row slide-content">
                  <div className="col-12 col-md-12 col-lg-12 d-none d-md-block image-wrapper">
                     <div>
                     <Image
                        src="/images/slider/experiment/big-slider-5.webp"
                        alt="big-slider-5"
                        width={630}
                        height={155}
                        className="card-img-top"
                      />
                     </div>
                  </div>
                </div>
              </>
            )}
            {activeCategory === 'category3' && (
              <>
                <div className="row slide-content">
                  <div className="col-12 col-md-12 col-lg-12 d-none d-md-block image-wrapper">
                    <div>
                    <Image
                        src="/images/slider/experiment/big-slider-8.webp"
                        alt="big-slider-8"
                        width={630}
                        height={155}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Slider>
           </div>
            {/* Category button section */}
              <div className="col-md-2 mt-2 explore">
                <div className="offset_l_r_10 bluebox" id="list-item">
                  <ol className="carousel-catg">
                    <li
                      className={`btn1 ${activeCategory === 'category1' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('category1')}
                    >
                      Hands-On. Minds-On. <br></br>Limitless Learning
                    </li>
                    <li
                      className={`btn1 ${activeCategory === 'category2' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('category2')}
                    >
                      Where Imagination <br></br>Takes Center Stage
                    </li>
                    <li
                      className={`btn1 ${activeCategory === 'category3' ? 'active' : ''}`}
                      onClick={() => setActiveCategory('category3')}
                    >
                      Shaping Minds <br></br> & Inspiring Creativity
                    </li>
                  </ol>
                </div>
              </div>
              <div className='col-md-5'>
               <Slider {...ExperimentSlider2}>
                {activeCategory === 'category1' && (
                  <>
                     <div className="row slide-content">
                      <div className="col-6 col-md-6 col-lg-6 image-wrapper g-1">
                     <div>
                     <Image
                        src="/images/slider/experiment/science-lab.webp"
                        alt="science-lab"
                        width={460}
                        height={155}
                        className="card-img-top"
                      />
                     </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6 text-wrapper g-1">
                        <div className="box">
                          <div className="flex">
                          <h6 className="colr1">SCIENCE LABS</h6>
                          <p>Hands-on exploration and experimentation, allowing students to apply theoretical concepts.</p>
                          </div>
                        </div>
                      </div>

                    </div>
          </>
            )}
             {activeCategory === 'category2' && (
                  <>
                     <div className="row slide-content">
                      <div className="col-6 col-md-6 col-lg-6 image-wrapper g-1">
                      <div>
                      <Image
                        src="/images/slider/experiment/film-making.webp"
                        alt="film-making"
                        width={630}
                        height={155}
                        className="card-img-top"
                      />
                      </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6 text-wrapper g-1">
                        <div className="box">
                          <div className="flex">
                          <h6 className="colr1">FILM MAKING</h6>
                          <p>Explore creativity through photography and filmmaking.</p>
                          </div>
                        </div>
                      </div>

                    </div>
          </>
            )}
             {activeCategory === 'category3' && (
                  <>
                     <div className="row slide-content">
                      <div className="col-6 col-md-6 col-lg-6 image-wrapper g-1">
                      <div>
                        <Image 
                          src="/images/slider/experiment/character-enhancement.webp"
                          alt="film-making"
                          width={630}
                          height={155}
                          className="card-img-top"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 630px"
                        />

                      {/* <Image
                        src="/images/slider/experiment/character-enhancement.webp"
                        alt="character-enhancement"
                        width={307}
                        height={155}
                        className="card-img-top"
                      /> */}
                      </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6 text-wrapper g-1">
                        <div className="box">
                          <div className="flex">
                          <h6 className="colr1">CHARACTER ENHANCEMENT</h6>
                        <p>Geeta Saar, TED Talks, and Circle Time foster emotional intelligence.</p>
                          </div>
                        </div>
                      </div>

                    </div>
          </>
            )}
          </Slider>
              </div>
            </div>

        {/* Third Row slider Section */}
        <div className="row slide-1 content g-1">
          <Slider {...ExperimentSlider3}>
            {activeCategory === 'category1' && (
              <>
                 <div className='row'>
                     <div className="row slide-content">
                     
                      <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                        <div className="box">
                          <div className="flex">
                          <h6 className="colr1">COMPUTER LABS</h6>
                          <p>Equipped with advanced technology, students experiment with coding, programming.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                     <div>
                     <Image
                        src="/images/slider/experiment/computer-lab.webp"
                        alt="computer-lab"
                        width={460}
                        height={155}
                        className="card-img-top"
                      />
                     </div>
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                      <div>
                      <Image
                          src="/images/slider/experiment/steam.webp"
                          alt="stream"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                      </div>
                      </div>
                      <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                       <div className="box">
                          <div className="flex">
                          <h6 className="colr1">STREAM</h6>
                          <p>Hands-on experiments and STREAM projects boost critical thinking, while the Computer Lab enhances.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                      <div>
                      <Image
                        src="/images/slider/experiment/stream.webp"
                        alt="stream"
                        width={630}
                        height={155}
                        className="card-img-top"
                      />
                      </div>
                      </div>
                    </div>
                  </div>
              </>
            )}
            {activeCategory === 'category2' && (
              <>
                 <div className='row'>
                   <div className="row slide-content">
                    <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                      <div className="box">
                        <div className="flex">
                        <h6 className="colr1">PHOTOGRAPHY</h6>
                        <p>Fosters creativity and storytelling as students explore visual expression.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                   <div>
                   <Image
                      src="/images/slider/experiment/photography.webp"
                      alt="photography"
                      width={460}
                      height={155}
                      className="card-img-top"
                    />
                   </div>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                      <div>
                      <Image
                      src="/images/slider/experiment/performing-arts.webp"
                      alt="performing-arts"
                      width={460}
                      height={155}
                      className="card-img-top"
                    />
                      </div>
                    </div>
                  
                    <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                     <div className="box">
                        <div className="flex">
                        <h6 className="colr1">PERFORMING ARTS</h6>
                        <p>Cultivating creativity while boosting cognitive, emotional and motor skill development in students.</p>
                        </div>
                      </div>
                    </div>
                  
                    <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                     <div>
                     <Image
                      src="/images/slider/experiment/big-slider-6.webp"
                      alt="big-slider-6"
                      width={630}
                      height={155}
                      className="card-img-top"
                    />
                     </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeCategory === 'category3' && (
              <>
                 <div className='row'>
                    <div className="row slide-content">
                       
                        <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                          <div className="box">
                            <div className="flex">
                              <h6 className="colr1">DEBATE</h6>
                              <p>Enhances critical thinking, communication, and confidence as students engages.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                       <div>
                       <Image
                          src="/images/slider/experiment/debate.webp"
                          alt="debate"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                       </div>
                        </div>

                        <div className="col-6 col-md-2 col-lg-2 image-wrapper g-1">
                       <div>
                       <Image
                          src="/images/slider/experiment/pottery.webp"
                          alt="pottery"
                          width={460}
                          height={155}
                          className="card-img-top"
                        />
                       </div>
                        </div>
                      
                        <div className="col-6 col-md-2 col-lg-2 text-wrapper g-1">
                        <div className="box">
                            <div className="flex">
                            <h6 className="colr1">POTTERY</h6>
                            <p>Encourages creativity and hands-on learning, allowing students.</p>
                            </div>
                          </div>
                        </div>
                       
                        <div className="col-12 col-md-4 col-lg-4 d-none d-md-block image-wrapper g-1">
                       <div>
                       <Image
                          src="/images/slider/experiment/big-slider-9.webp"
                          alt="big-slider-9"
                          width={630}
                          height={155}
                          className="card-img-top"
                        />
                       </div>
                        </div>

                      </div>
                 </div>
              </>
            )}
          </Slider>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="learn-more-button">
            <a href="experiment">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExperimentSection;
