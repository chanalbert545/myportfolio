import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          {/* Logo on extreme left - links to home */}
          <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <img src="chanlogo.png" alt="Logo" className="brand-logo" loading="lazy" />
          </Link>

          {/* Menu toggle for mobile */}
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="menu-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Navigation links */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;



