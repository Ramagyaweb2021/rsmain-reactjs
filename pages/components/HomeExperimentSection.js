import React, { useState } from 'react';
// import React from 'react'
import Image from "next/image";
const HomeExperimentSection = () => {
  const [activeCategory, setActiveCategory] = useState('category1');
  return (
    <>
    <div className="learn fp-section-tableExperiment">
      <div className="container">
      <h1>EXPERIMENT<span className="lineclass" />
        <span className="sub-heading">
          WORKSHOPS, PROGRAMS AND EXPERIENCES
        </span>
      </h1>
      <p>Encouraging students to explore, innovate, and apply knowledge across various disciplines through experiential learning. The sessions under this stimulate critical thinking, enhance vocational and life skills, encourage learning collaboration and creativity while pursuing their passions and nurture artistic talent, enhance cognitive, emotional, and motor skills.We encourage hands-on experiments that bring theory to life, and learning integrates real-world problem-solving through innovative, multidisciplinary projects.Together, these programs ensure students engage in comprehensive, holistic development!</p>
      </div>

      <div className='container-fluid'>
      { /********************************************************************* First row slider section */}
        <div className="row slide-1 content g-1">
          <div className="col-md-12">
            <div
              id="carouselExampleControls"
              className="carousel slide1"
              data-bs-ride="carousel"
              data-bs-interval="false" // Disable autoplay
            >
               {/* First row slider */} 
              <div className="carousel-inner">
                {/* Carousel active item row-1 for first category */}
                <div className={`carousel-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
                {/* <div className="carousel-item active" id='category1'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/jadu-gyan.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">JODO GYAN</h6>
                          <p>Enhancing number sense and problem-solving through hands-on, innovative learning methods, building a solid math foundation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-1.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">CLUBS</h6>
                          <p>Clubs foster creativity, collaboration and life skills, while sharpens improvisation, confidence and communication.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/clubs.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                {/* Carousel  item row-2 for second category */}
                <div className={`carousel-item ${activeCategory === 'category2' ? 'active' : ''}`} id='category2'>
                {/* <div className="carousel-item" d='category2'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/dance.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DANCE</h6>
                          <p>Inspires creativity and self-expression, enabling students to explore movement while enhancing coordination, confidence, and emotional connection through rhythm.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-4.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DRAMA</h6>
                          <p>Encourages self-expression and creativity, allowing students to develop improvisation skills and gain confidence through engaging performances and role-playing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/drama.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                  {/* Carousel  item row-3 for third category */}
                  <div className={`carousel-item ${activeCategory === 'category3' ? 'active' : ''}`} id='category3'>
                  {/* <div className="carousel-item" d='category3'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/book-review.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">BOOK REVIEWS</h6>
                          <p>Sharpens critical thinking as students discuss themes, characters, and plots from the Book of the Month.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-7.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">MUSIC</h6>
                          <p>A vital part of education, teaching teamwork, patience, and creativity through both Indian and Western music forms.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/music.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
        { /********************************************************************* Second row slider section */}
        <div className="row slide-1 content g-1">
          <div className="col-md-4">
            <div
              id="carouselExampleControls1"
              className="carousel slide-1"
              data-bs-ride="carousel"
              data-bs-interval="false" // Disable autoplay
            >
               {/* First row slider */}
              <div className="carousel-inner">
                {/* Carousel active item row-1 for first category */}
                <div className={`carousel-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
                {/* <div className="carousel-item active" id='category1'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-12 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-2.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    {/* <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">Category1</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div> */}
                
                  </div>
                </div>
                {/* Carousel  item row-2 for second category */}
                <div className={`carousel-item ${activeCategory === 'category2' ? 'active' : ''}`} id='category2'>
                {/* <div className="carousel-item" id='category2'> */}
                <div className="row slide-1 content g-1">
                    <div className="col-12 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-5.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    {/* <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">Category2</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div> */}
                
                  </div>
                </div>
                  {/* Carousel  item row-3 for third category */}
                  <div className={`carousel-item ${activeCategory === 'category3' ? 'active' : ''}`} id='category3'>
                  {/* <div className="carousel-item" id='category3'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-12 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-8.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    {/* <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">Category3</h6>
                          <p>Applying skills in technology to solve real world problems</p>
                        </div>
                      </div>
                    </div> */}
                
                  </div>
                </div>
              </div>

             
            </div>
          </div>
          <div className="col-md-4 explore">
            <div className="offset_l_r_10 bluebox" id="list-item">
              {/* <div className="exp-our-mis">
                <span>Action</span>
              </div> */}
             
              <ol className="carousel-catg">  
                  <li
                    className={`btn1 ${activeCategory === 'category1' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('category1')}
                  >
                      Hands-On. Minds-On. Limitless Learning
                  </li>
                  
                  <li
                    className={`btn1 ${activeCategory === 'category2' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('category2')}
                  >
                    Where Imagination Takes Center Stage
                  </li> 
                  <li
                    className={`btn1 ${activeCategory === 'category3' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('category3')}
                  >
                    Shaping Minds & Inspiring Creativity
                  </li>
                </ol>
             
            </div>
          </div>
          <div className="col-md-4 mx-auto-disable">
            <div
              id="carouselExampleControls2"
              className="carousel slide-1 2"
              data-bs-ride="carousel"
              data-bs-interval="false" // Disable autoplay
            >
               {/* First row slider */}
              <div className="carousel-inner">
                {/* Carousel active item row-1 for first category */}
                <div className={`carousel-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
                {/* <div className="carousel-item active" id='category1'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-6 image-wrapper">
                      <Image
                        src="/images/slider/experiment/science-lab.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">SCIENCE LABS</h6>
                          <p>Hands-on exploration and experimentation, allowing students to apply theoretical concepts and ignite curiosity through practical learning experiences.</p>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
                {/* Carousel  item row-2 for second category */}
                <div className={`carousel-item ${activeCategory === 'category2' ? 'active' : ''}`} id='category2'>
                {/* <div className="carousel-item" id='category2'> */}
                <div className="row slide-1 content g-1">
                    <div className="col-6 image-wrapper">
                      <Image
                        src="/images/slider/experiment/film-making.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">FILM MAKING</h6>
                          <p>Explore creativity through photography and filmmaking, where students capture stories and experiment with visual storytelling techniques.</p>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
                {/* Carousel  item row-3 for third category */}
                <div className={`carousel-item ${activeCategory === 'category3' ? 'active' : ''}`} id='category3'>
                {/* <div className="carousel-item" id='category3'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-6 image-wrapper">
                      <Image
                        src="/images/slider/experiment/character-enhancement.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-6 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">CHARACTER ENHANCEMENT</h6>
                          <p>Geeta Saar, TED Talks, and Circle Time foster emotional intelligence, leadership and personal growth in students.</p>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
        { /*********************************************************************Third Row slider Section */}
        <div className="row slide-1 content g-1">
          <div className="col-md-12">
            <div
              id="carouselExampleControls3"
              className="carousel slide-1 3"
              data-bs-ride="carousel"
              data-bs-interval="false" // Disable autoplay
            >
               {/* First row slider */}
              <div className="carousel-inner">
                {/* Carousel active item row-1 for first category */}
                <div className={`carousel-item ${activeCategory === 'category1' ? 'active' : ''}`} id='category1'>
                {/* <div className="carousel-item active" id='category1'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/computer-lab.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">COMPUTER LABS</h6>
                          <p>Equipped with advanced technology, students experiment with coding, programming, and digital tools, fostering technological fluency.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-3.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">STREAM</h6>
                          <p>Hands-on experiments and STEAM projects boost critical thinking, while the Computer Lab enhances coding skills and technological fluency.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/stream.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                {/* Carousel  item row-2 for second category */}
                <div className={`carousel-item ${activeCategory === 'category2' ? 'active' : ''}`} id='category2'>
                {/* <div className="carousel-item" id='category2'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/photography.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">PHOTOGRAPHY</h6>
                          <p>Fosters creativity and storytelling as students explore visual expression, capturing moments and perspectives through the art of photography.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-6.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">PERFORMING ARTS
                          </h6>
                          <p>Cultivating creativity while boosting cognitive, emotional and motor skill development in students.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/performing-arts.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
                  {/* Carousel  item row-3 for third category */}
                  <div className={`carousel-item ${activeCategory === 'category3' ? 'active' : ''}`} id='category3'>
                  {/* <div className="carousel-item" id='category3'> */}
                  <div className="row slide-1 content g-1">
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/debate.png"
                        alt="Sample Image 1"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">DEBATE</h6>
                          <p>Enhances critical thinking, communication, and confidence as students engage in structured discussions and express diverse perspectives.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 image-wrapper">
                      <Image
                        src="/images/slider/experiment/big-slider-9.png"
                        alt="Sample Image 2"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                    <div className="col-2 text-wrapper">
                      <div className="box">
                        <div className="flex">
                          <h6 className="colr1">POTTERY</h6>
                          <p>Encourages creativity and hands-on learning, allowing students to shape their ideas while enhancing motor skills and focus.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 image-wrapper">
                      <Image
                        src="/images/slider/experiment/pottery.png"
                        alt="Sample Image 3"
                        width={287}
                        height={200}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
      
   

    </div>
      
    </>
  )
}

export default HomeExperimentSection