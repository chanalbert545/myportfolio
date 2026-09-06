
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundSlider from '../components/BackgroundSlider';
import heroImg1 from '../assets/h (1).webp';
import heroImg2 from '../assets/h (3).webp';
import heroImg3 from '../assets/h (4).webp';
import heroImg4 from '../assets/oyo.webp';
import heroImg5 from '../assets/bk.webp';
import heroImg6 from '../assets/dr.webp';
import brandImg from '../assets/logo/uni.png';
import webImg from '../assets/wear your story.webp';
import motionImg from '../assets/pic1.webp';
import heroVideo from '../assets/ch.mp4';
import logoUni from '../assets/logo/uni.png';
import logoUn from '../assets/logo/un.png';
import logoWomen from '../assets/logo/women.png';
import logoWww from '../assets/logo/www.png';
import logoPureGlow from '../assets/logo/pureglow.png';
import logoSmb from '../assets/logo/smb.png';
import logoMode7 from '../assets/logo/mode7.png';
import logoMamaCare from '../assets/logo/mamacare.png';
import logoEloi from '../assets/logo/eloi.png';
import logoUnica1 from '../assets/logo/unica1.png';
import logoUnica2 from '../assets/logo/unica2.png';

const clientLogos = [
  { src: logoWomen, alt: 'Women logo' },
  { src: logoPureGlow, alt: 'PureGlow logo' },
  { src: logoSmb, alt: 'SMB logo' },
  { src: logoMode7, alt: 'Mode 7 logo' },
  { src: logoMamaCare, alt: 'MamaCare logo' },
  { src: logoEloi, alt: 'Eloi logo' },
  { src: logoUnica1, alt: 'Unica Prints logo' },
  { src: logoUnica2, alt: 'Unica Prints logo 2' }
]

function Home() {
      useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, []);
  

  return (
    <>
      <section className="section hero hero-with-bg">
        <BackgroundSlider
          images={[heroImg3, heroImg2, heroImg1]}
          durationMs={5000}
          fadeMs={1000}
        />
        <div className="container hero-container">
          <div className="hero-content">
            {/* Hero Title */}
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Creative thinking,<br />Powerful results
            </motion.h1>

          {/* Hero Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            From brand identity to digital experiences, I craft creative solutions that turn attention into impact.
          </motion.p>

            {/* Buttons */}
            <motion.div 
              className="actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/contact" className="button primary">Start your project →</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/portfolio" className="button secondary">View work</Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <video
             src={heroVideo}
              poster={heroImg3}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <ul className="stats-grid">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "1", label: "Country Served" },
              { number: "30+", label: "Active Clients" },
              { number: "90+", label: "Client Satisfaction" },
              { number: "20+", label: "Referrals" }
            ].map((stat, i) => (
              <motion.li
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <p className="stat-label">{stat.label}</p>
              </motion.li>
            ))}
          </ul>
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

          {/* Featured service boxes */}
          <ul className="grid three">
            {[
              { title: "Brand & Visual Identity", desc: "", img: brandImg },
              { title: "Posters & Print Design", desc: "", note: "", img: webImg },
              { title: "Motion & Content", desc: "", note: "", img: motionImg }
            ].map((service, i) => (
              <motion.li 
                className="home-service-card"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -6 }}
              >
                <img className="home-service-image" src={service.img} alt="" />
                <div className="home-service-caption">
                  <h3>{service.title}</h3>
                </div>
              </motion.li>
            ))}
          </ul>

          <div style={{ height: 92 }} />

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
                  <img src={project.img} alt={project.title} loading="lazy"/>
                  <h4>{project.title}</h4>
                  <div className="tag">{project.tag}</div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="clients-marquee-wrap">
            <h3 className="clients-marquee-title">Clients we have worked with</h3>
            <div className="clients-marquee" aria-label="Client logos">
              <div className="clients-track">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div className="client-logo" key={`${logo.alt}-${index}`}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home




