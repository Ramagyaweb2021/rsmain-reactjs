import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AlumniSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slider-arrow prev-arrow">-</button>,
    nextArrow: <button className="slider-arrow next-arrow">-</button>,
  };

  const slides = [
    {
      title: "Connecting Alumni Connections",
      content: [
        `Univariety serves as a digital bridge connecting Ramagya alumni from different backgrounds, generations, and locations. No matter when or where alumni graduated - be it years or decades ago - Univariety gives alumni an avenue for reconnecting with old friends while making new ones and staying informed of alumni initiatives.`,
        `Univariety provides alumni directories, class year groups and regional chapters to make reconnecting with fellow alumni easier no matter where their life has led them. Reuniting with old classmates and industry veterans or simply remembering old Ramagya days; whatever your need might be - Univariety has your alumni needs covered!`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
    {
      title: "Customize Your Path to Connection",
      content: [
        `Univariety offers alumni members an experience tailored specifically to their individual needs and preferences, from networking opportunities to career guidance and event updates to mentorship programs - whatever it may be - Univariety strives to ensure each alum finds value and meaning from using its platform.`,
        `Alumni profiles provide alumni with a way to quickly showcase their professional accomplishments, interests, and aspirations with others on an authentic level. From recent graduates looking for work options to experienced professionals looking for ways to give back, Univariety provides all of the tools and resources needed to maximize your alumni experience.`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
    {
      title: "Facilitate Alumni Engagement",
      content: [
        `Univariety puts engagement at its core, offering alumni an interactive platform where they can engage in discussions, share experiences and contribute to Ramagya community growth. From joining special interest groups or attending virtual reunions to taking part in alumni projects - Univariety gives alumni numerous ways to stay involved and remain active!`,
        `Univariety alumni can find a sense of community through features like discussion forums, group chats and virtual events - regardless of distance or time zone differences - thanks to Univariety alumni services such as discussion forums, group chats and virtual events. Univariety alumni enjoy creating an inclusive space where alumni can come together and thrive together - whether reconnecting with old friends, expanding professional networks or staying engaged with Ramagya Community at large are ...`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
    {
      title: "Lifelong Learning at Every Stage",
      content: [
        `Learning does not end at graduation; it is an ongoing journey. Univariety recognizes this by offering alumni an ongoing platform where they can continue expanding their knowledge, broadening their horizons, and staying at the forefront of their fields through courses, webinars or thought leadership articles`,
        `Univariety provides alumni access to an impressive library of educational resources and professional development opportunities that promote continual personal and professional growth. From learning new skills, discovering passions or staying up-to-date on industry trends - Univariety gives alumni everything they need for success in today's highly competitive environment.`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
    {
      title: "Building a Global Alumni Network",
      content: [
        `Univariety bridges geographical boundaries by connecting Ramagya alumni from all corners of the globe. Thanks to its global reach and diverse membership base, Univariety fosters a dynamic ecosystem for alumni to network with peers, mentors and industry experts from different parts of the world - enriching alumni experiences through cross-cultural exchange, collaboration and mutual understanding.`,
        `Univariety Alumni Chapters can be found throughout the world to enable alumni of Ramagya to stay in touch. From expanding your professional network and exploring career possibilities to reconnecting with old friends again, Univariety alumni chapters provide a friendly space where alumni can come together and form meaningful bonds`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
    {
      title: "Adopting the Ramagya Spirit",
      content: [
        `Univariety represents the spirit of Ramagya: excellence, innovation and community. Alumni can return home and visit their alma mater while remembering fond memories from Univariety - continuing Ramagya's legacy by inspiring current and future generations to make positive impacts upon the world.`,
        `Univariety is more than a platform; it serves as a testament to the deep bonds and shared values among Ramagya communities worldwide. No matter your background - be it recent graduate or experienced professional - Univariety welcomes all to rediscover these connections and embark on new journeys together. Let us come together in celebration of shared heritage, celebrating collective achievements and forging brighter futures for generations yet unborn!`
      ],
      image: "/images/lead/alumini/slider-1.webp",
    },
  ];

  return (
    <div className="alumini-slider-container container">
      <Slider {...settings}>
        {slides.map((slidealumini, index) => (
          <div key={index} className="slider-slidealumini">
            <div className="row align-items-center mx-auto">
              <div className="col-lg-4">
                <Image
                  src={slidealumini.image}
                  alt={slidealumini.title}
                  className="img-fluid"
                  width={360}
                  height={435}
                  style={{ height: "100%" }}
                />
              </div>
              <div className="col-lg-7">
                <h2 className="fw-bold">{slidealumini.title}</h2>
                {/* Iterate over the content array to render each paragraph */}
                {slidealumini.content.map((paragraph, idx) => (
                  <p key={idx} className="slider-content">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniSlider;
