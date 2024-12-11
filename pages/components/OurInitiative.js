import React from 'react';
import Image from 'next/image';
const initiatives = [
  {
    title: "Education",
    quote: '"The only dreams impossible to reach are the ones you never pursue."',
    description: "We are committed to providing quality education to children from marginalized communities. We believe that education...",
    imageSrc: "/images/ramagya-foundation/education.webp",
    link: "https://ramagyafoundation.org/education/"
  },
  {
    title: "Health",
    quote: '"Happiness doesn’t result from what we get, but from what we give."',
    description: "Health is the foundation of a thriving community, and our health initiatives prioritize accessibility to basic healthcare and health education...",
    imageSrc: "/images/ramagya-foundation/health.webp",
    link: "https://ramagyafoundation.org/health/"
  },
  {
    title: "Women Empowerment",
    quote: '"Intertwining human rights with respect for women\'s empowerment."',
    description: "We are passionate about empowering women. With this initiative, we provide skill development, educational resources, and community support...",
    imageSrc: "/images/ramagya-foundation/women-empowerment.webp",
    link: "https://ramagyafoundation.org/women-empowerment-and-skilling/"
  },
  {
    title: "Animal Welfare",
    quote: '"Raising a voice for the voiceless."',
    description: "The welfare of animals is close to our heart. We actively support animal welfare through rescue efforts, medical care, and awareness programs aimed at fostering empathy and responsible....",
    imageSrc: "/images/ramagya-foundation/animal-welfare.webp",
    link: "https://ramagyafoundation.org/animal-welfare/"
  }
];

export default function OurInitiative() {
  return (
    <div className="container main-container my-5">
      <h2 className="main-heading-internal-pages text-center my-5">OUR INITIATIVE</h2>
      <div className="row">
        {initiatives.map((initiative, index) => (
          <div className="col-6 col-md-3 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <Image src={initiative.imageSrc} className="card-img-top" alt={initiative.title} width={250} height={250}/>
              <div className="card-body-ramagya-foundation-our-initiative">
                <h5 className="card-title text-dark">{initiative.title}</h5>
                <p className="card-text text-muted fst-italic text-center">{initiative.quote}</p>
                <p className="card-text">{initiative.description}</p>
                <a href={initiative.link} target='_blank' className="text-warning fs-4">→</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
