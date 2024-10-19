// pages/index.js
export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToSection('section1')}>Section 1</button>
        <button onClick={() => scrollToSection('section2')}>Section 2</button>
        <button onClick={() => scrollToSection('section3')}>Section 3</button>
      </nav>
      <div className="fullpage-container">
        <section id="section1" className="section">
        <video className='main-video'
                width="100%"
                poster="/images/main-banner.webp"
                loop="loop"
                muted={true} controls="controls"
                autoPlay="autoPlay"
                playsInline="playsInline"
                preload="preload">
                <source src="https://rsschoolportalassets.blr1.cdn.digitaloceanspaces.com/videos/rs-main-latest.mp4" type="video/mp4"/>
              </video>
        </section>
        <section id="section2" className="section">
          <h1>Section 2</h1>
        </section>
        <section id="section3" className="section">
          <h1>Section 3</h1>
        </section>
      </div>
    </>
  );
}
