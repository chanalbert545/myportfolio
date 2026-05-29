
import heroImg20 from '../assets/aboutme.webp';
import '../about.css';

function About() {
  return (
    <section className="section about-section" style={{ minHeight: '100vh', background: 'radial-gradient(1200px 800px at 80% -10%, #1c2230 0%, var(--bg) 60%)' }}>
      <div className="container">
        <div className="about-hero">
          <img src={heroImg20} alt="About Me" loading="lazy" />
        </div>
        <h2>About Me</h2>
        <p>
          I’m Albert, a graphics and motion, web designer, and photographer.
          Over the past years, I’ve helped startups and brands tell better stories through
          bold visuals, smooth motion, and clean, responsive websites.
        </p>
        <p>
          My approach blends art direction with practical problem solving. I love projects
          where strategy and aesthetics meet: brand identities, launch visuals, product videos,
          and immersive websites that perform.
        </p>
      </div>
    </section>
  );
}

export default About



