import { useState } from 'react';
import '../contact.css';
import heroImg from '../assets/h (1).webp';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="section contact-section" style={{ minHeight: '100vh', background: 'radial-gradient(1200px 800px at 80% -10%, #1c2230 0%, var(--bg) 60%)' }}>
      <div className="container">
        <div className="page-hero">
          <img src={heroImg} alt="Contact hero" />
          <div className="page-hero-content">
            <h1>Get In Touch</h1>
          </div>
        </div>

        <div className="contact-header">
          <p>Have a project in mind? Let's work together to bring your ideas to life.</p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project details"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="6"
              />
            </div>

            <button type="submit" className="button primary submit-btn">
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>
          </form>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:chanalbert545@gmail.com">chanalbert545@gmail.com</a>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <a href="tel:+256750778755">+256 750 778 755</a>
            </div>
            <div className="info-item">
              <h4>Follow</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/chanbranding545" aria-label="Instagram">Instagram</a>
                <a href="https://twitter.com/@chanbranding" aria-label="Twitter">Twitter</a>
                <a href="https://www.linkedin.com/in/Chan Branding" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
