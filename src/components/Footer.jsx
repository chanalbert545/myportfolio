import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content container">
        
        {/* Left Column - Brand & Contact */}
        <div className="footer-section">
          <h4 className="footer-title">Creative Excellence</h4>
          <p className="footer-subtitle">I transform brands through creative strategy and exceptional design.</p>
          <div className="footer-contact">
            <p className="contact-item">
              <a href="mailto:chanalbert545@gmail.com">chanalbert545@gmail.com</a>
            </p>
            <p className="contact-item">
              <a href="tel:+256763438574">+256 763438574</a>
            </p>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><a href="mailto:chanalbert545@gmail.com">Contact</a></li>
          </ul>
        </div>

        {/* Right Column - Social Links */}
        <div className="footer-section">
          <h5>Follow Me</h5>
          <div className="footer-socials">
            <a href="https://twitter.com/@DracoSteinz" target="_blank" rel="noreferrer" aria-label="Twitter" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com/@digitalartist256" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/draco_the_digital_artist" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/albertocan" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Chan Branding. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



