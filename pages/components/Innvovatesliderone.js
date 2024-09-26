import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function SingleRowSlider() {
  const rightToLeftSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    speed: 1000, // Transition speed
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    draggable: true,
    dots: true, // Enable dots for navigation
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: true, // Right to left for this slider
  };

  const leftToRightSettings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    speed: 1000, // Transition speed
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    draggable: true,
    dots: true, // Enable dots for navigation
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: false, // Left to right for this slider
  };
  

  return (
    <div className="slider-container-fluid">
      {/* Slider first row section (Right to Left) */}
      <Slider {...rightToLeftSettings}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/1.jpg"
                alt="Sample Image 1"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 1</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the industry standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-12 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/2.jpg"
                alt="Sample Image 2"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/3.jpg"
                alt="Sample Image 3"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 3</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-9 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/4.jpg"
                alt="Sample Image 4"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </Slider>

      {/* Slider second row section (Left to Right) */}
      <Slider {...leftToRightSettings}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/1.jpg"
                alt="Sample Image 1"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 1</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the industry standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-12 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/2.jpg"
                alt="Sample Image 2"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/3.jpg"
                alt="Sample Image 3"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 3</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-9 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/4.jpg"
                alt="Sample Image 4"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </Slider>

      {/* Slider third row section (Right to Left) */}
      <Slider {...rightToLeftSettings}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/1.jpg"
                alt="Sample Image 1"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 1</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the industry standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-12 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/2.jpg"
                alt="Sample Image 2"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-3 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/3.jpg"
                alt="Sample Image 3"
                width={287}
                height={299}
                className="card-img-top"
              />
            </div>
            <div className="col-md-9 col-sm-12 text-wrapper">
              <h5 className="card-title">Slide 3</h5>
              <p className="card-text-slick-slider">
                Lorem Ipsum has been the industry standard Lorem Ipsum has been the industry
                standard Lorem Ipsum has been the dsffd.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="slide">
          <div className="row slide-content">
            <div className="col-md-9 col-sm-12 image-wrapper">
              <Image
                src="/images/slider/4.jpg"
                alt="Sample Image 4"
                width={604}
                height={299}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SingleRowSlider;
