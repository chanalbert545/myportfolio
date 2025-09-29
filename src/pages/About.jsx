import heroImg20 from '../assets/aboutme.png'

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="image">
          <img src={heroImg20} alt="About Me" />
          </div>
        

        <h2>About Me</h2>
        <p>
          I’m Albert, a graphics and motion designer, web designer, and photographer.
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
  )
}

export default About



