import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackgroundSlider from '../components/BackgroundSlider'
import heroImg1 from '../assets/pic1.jpg'
import heroImg2 from '../assets/pic2.jpeg'
import heroImg3 from '../assets/pic.jpeg'
import heroImg4 from '../assets/pic4.jpg'
import heroImg5 from '../assets/pic5.png'
import heroImg6 from '../assets/pic6.png'

function Home() {
  return (
    <>
      <section className="section hero hero-with-bg">
        <BackgroundSlider
          images={[heroImg1, heroImg2, heroImg3]}
          durationMs={5000}
          fadeMs={1000}
        />
        <div className="container">
          {/* Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Design that moves people
          </motion.h1>

          {/* Hero Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a multi-disciplinary designer: graphics, motion, web, and photography.
            I craft bold visuals and seamless experiences for brands and creators.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/portfolio" className="button primary">View Portfolio</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="/resume.pdf" download className="resume-btn">
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Services
          </motion.h2>

          <p className="note">From brand identity to web experiences—tailored to your goals.</p>

          {/* Service Cards */}
          <ul className="grid three">
            {[
              { title: "Brand & Visual Identity", desc: "Create memorable logos, palettes, and systems that scale across touchpoints.", note: "Example: Full rebrand for the hennessy & boulevard party." },
              { title: "Web & Product Design", desc: "Responsive sites and UI libraries focused on clarity, speed, and conversion.", note: "Example: Landing page for mamacare nursery & daycare website." },
              { title: "Motion & Content", desc: "Short-form animations and graphics to amplify campaigns and storytelling.", note: "Example: logo animation for our brand." }
            ].map((service, i) => (
              <motion.li 
                className="card"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="note">{service.note}</div>
              </motion.li>
            ))}
          </ul>

          <div style={{ height: 24 }} />

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Latest Projects
          </motion.h2>

          
          <div className="gallery grid three">
            {[ 
              { img: heroImg4, title: "Brand Refresh", tag: "identity" },
              { img: heroImg6, title: "mamacare nursery & daycare Website", tag: "web" },
              { img: heroImg5, title: "Animated Promo", tag: "motion" }
            ].map((project, i) => (
              <motion.div
                key={i}
                className="work-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -6, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
              >
                <Link to="/portfolio" aria-label={`View ${project.title}`}>
                  <img src={project.img} alt={project.title} />
                  <h4>{project.title}</h4>
                  <div className="tag">{project.tag}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home




