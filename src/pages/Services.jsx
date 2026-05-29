
import '../service.css';

import logosImg from '../assets/spes.webp';
import motionImg from '../assets/vv.webp';
import webImg from '../assets/house.webp';

const services = [
  {
    title: 'Graphics Design',
    desc: 'Brand identity, posters, social media kits, packaging, and print design.',
    img: logosImg,
  },
  {
    title: 'Motion Design',
    desc: 'Promo videos, logo animations, explainers, UI motion, and reels.',
    img: motionImg,
  },
  {
    title: 'Website Design',
    desc: 'Marketing sites, landing pages, and design systems for web apps.',
    img: webImg,
  },
];

function Services() {
  return (
    <section className="section services" style={{ minHeight: '100vh', background: 'radial-gradient(1200px 800px at 80% -10%, #1c2230 0%, var(--bg) 60%)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--brand)', marginBottom: '1.5rem', letterSpacing: '1px', animation: 'fade-in 1.2s' }}>Our Services</h2>
        <div className="service-list">
          {services.map((service, i) => (
            <div className="service-card" key={service.title} style={{ animationDelay: `${i * 0.15}s` }}>
              <img src={service.img} alt={service.title + ' image'} loading="lazy" width="110" height="110" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services



