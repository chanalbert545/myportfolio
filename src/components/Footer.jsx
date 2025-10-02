import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        
        {/* Left column */}
        <div className="footer-col left">
          <div className="contact">
            <span>© {new Date().getFullYear()} DesignLab</span>
            <div className="contact-links">
              <a href="mailto:hello@designlab.com">hello@designlab.com</a> |{" "}
              <a href="tel:+256700000000">+256 750778755</a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="footer-col right">
          <div className="socials">
            <a href="https://twitter.com/@DracoSteinz" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com/@digitalartist256" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/draco_the_digital_artist" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/Ocan Albert" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



