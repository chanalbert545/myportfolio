import '../pricing.css';

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">Packages</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Graphics Only</h3>
            <p className="price">Starter</p>
            <ul>
              <li>Logo & brand basics</li>
              <li>Social media flyers</li>
              <li>print outs(pricing per printout copies)</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <h3>Graphics & Motion ads</h3>
            <p className="price">Pro</p>
            <ul>
              <li>Brand identity </li>
              <li>Graphics design</li>
              <li>15-60 sec motion ads</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Custom</h3>
            <p className="price">Advanced</p>
            <ul>
              <li>motion Design</li>
              <li>Graphics design</li>
              <li>Website Design & Maintenance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container2">
        <h2 className="pricing-title">Pricing per service</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Graphics</h3>
            <p className="price">UGX 25,000-300,000</p>
            <ul>
              <li>Logo & brand basics, posters</li>
              <li>Business cards,brochures</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <h3>Motion</h3>
            <p className="price">UGX 80,000-500,000</p>
            <ul>
              <li>Logo Animation</li>
              <li>Trailers, </li>
              <li>Social media reels</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Custom</h3>
            <p className="price">UGX 300,000-1,000,000</p>
            <ul>
              <li>Website Design & Development</li>
              <li>Website Maintenance</li>
              <li>Website Hosting & Domain Name</li>
            </ul>
          </div>
        </div>
        <p className="note">The prices vary per service, duration of the motion ads, content of the graphics and abilities & expectations of the website. Though all the prices are negotiable once agreements are made between our agency and the clients.</p>
      </div>
    </section>
  );
}

export default Pricing




