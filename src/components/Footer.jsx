function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col left">
          <p>© {year} chanalbert — Graphics, Motion, Web, Photography</p>
          <div className="contact">
            <div>Megapix Photostudio, Bugolobi behind Jazz Supermarket</div>
            
          </div>
        </div>
        <div className="footer-col right">
          <nav className="socials" aria-label="Social media">
            <a href="https://instagram.com/draco_the_digital_artist" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://tiktok.com/@digitalartist256" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.5 3c.5 2.4 2.2 4.2 4.6 4.7v3.1c-1.7-.1-3.3-.7-4.6-1.6v6.7c0 3.4-2.8 6.1-6.2 5.9A6 6 0 0 1 3 15.6c.2-3.2 2.9-5.6 6.1-5.6.5 0 1 .1 1.4.2v3.1c-.4-.2-.9-.3-1.4-.3a2.8 2.8 0 0 0-2.8 2.8 2.9 2.9 0 0 0 3.3 2.9 2.9 2.9 0 0 0 2.5-2.9V3h2.4z"/></svg>
              <span className="sr-only">TikTok</span>
            </a>
            <a href="https://x.com/@DracoSteinz" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h5.2l3.6 5 3.9-5H22l-7.5 9.7L22 21h-5.3l-4-5.5L8.5 21H2l7.7-9.5L4 3zm3.5 2 4.2 6L6 19h2.6l6.3-8.2L20 19h-2.6l-4.6-6.3L8 5H7.5z"/></svg>
              <span className="sr-only">Twitter</span>
            </a>
          </nav>
          <div className="contact-links">
            <a href="mailto:chanalbert545@gmail.com">chanalbert545@gmail.com</a>
            {' '}·{' '}
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



