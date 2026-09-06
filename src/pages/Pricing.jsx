import { useState } from 'react';
import '../pricing.css';
import heroImg from '../assets/h (3).webp';

const pricingData = {
  logo: {
    label: 'Logo Design',
    title: 'Logo Design Packages',
    items: [
      {
        name: 'PREMIUM',
        price: 'UGX 550,000',
        color: 'amber',
        description: '4 unique logo concepts, full brand guideline document with logo usage rules, colour palette, typography recommendations, logo animation, product mock up design, 3d mock up, brand assets, all format high resolution files, iconography, invoice template, business card design, letter head, ID card, social media assets, 7-8 reviews. 5-8 days delivery time'
      },
      {
        name: 'ORDINARY',
        price: 'UGX 300,000',
        color: 'purple',
        description: '3 unique logo concepts, mini brand guideline document with colour palette, typography recommendations, product mock up design, 3d mock up, high resolution PNG, JPEG, PDF files, invoice template, business card design, letter head, 4-5 reviews. Iconography 3-5 days delivery time'
      },
      {
        name: 'BASIC',
        price: 'UGX 150,000',
        color: 'cyan',
        description: '2 unique logo concepts, colour palette, typography recommendations, mini product mock up design, high resolution PNG, JPEG, PDF files, business card design, 2-4 reviews. 2-4 days delivery time'
      }
    ],
    notes: [
      'The Prices Depend on complexity and we negotiate where possible.',
      'Regular clients get 20% off discount on all except the basic package.',
      'One is required to make full payment before or atleast 70% and finish when the work is done. full payment for the basic package.'
    ]
  },
  print: {
    label: 'Posters & Print',
    title: 'Design Rate Card',
    items: [
      {
        name: 'Social Media Poster design',
        price: 'UGX 25,000+',
        color: 'amber',
        description: 'One professional design ready for online use. Best for; quick announcements and short term promotions.'
      },
      {
        name: 'Posters for Print',
        price: 'UGX 35,000+',
        color: 'yellow',
        description: 'One professional design ready for both online and print use. Best for; Branded launches, Campaigns. Price depends on the size.'
      },
      {
        name: 'Company Profile, Manifesto',
        price: 'UGX 100,000',
        color: 'cyan',
        description: '3-10 pagesReady for both print and online use.'
      },
      {
        name: 'Business, id, Invitation Cards',
        price: 'UGX 30,000',
        color: 'purple',
        description: 'Price is for any of the three designs (double sided).'
      },
      {
        name: 'Brochure , Menu, Price List',
        price: 'UGX 80,000',
        color: 'pink',
        description: 'Price is for any of the three designs (3-10 pages).'
      }
    ],
    notes: [
      'The Prices Depend on complexity and we negotiate where possible.',
      'Regular clients get 20% off discount on all except posters.',
      'One is required to make full payment.'
    ]
  },
  monthly: {
    label: 'Monthly Design',
    title: 'Monthly Design Packages',
    items: [
      {
        name: 'PREMIUM MONTHLY PACKAGE',
        price: 'UGX 350,000',
        color: 'amber',
        description: '8-10 flyer designs per month providing custom lay outs with tailored typography, colours and visuals for social media. Content strategy and planning plus short form reels (3-4)'
      },
      {
        name: 'ORDINARY MONTHLY PACKAGE',
        price: 'UGX 200,000',
        color: 'purple',
        description: '8-10 flyer designs per month providing custom lay outs with tailored typography, colours and visuals for social media. Content strategy and planning'
      },
      {
        name: 'BASIC MONTHLY PACKAGE',
        price: 'UGX 150,000',
        color: 'cyan',
        description: '8-10 flyer designs per month providing custom lay outs with tailored typography, colours and visuals for social media but you provide the content, planning and strategy.'
      }
    ],
    notes: [
      'The Prices Depend on complexity and we negotiate where possible.',
      'Regular clients get 20% off discount on all except the basic package.',
      'One is required to make full payment before or atleast 70% and finish when the work is done.'
    ]
  },
  motion: {
    label: 'Motion Design',
    title: 'Trailer & Motion Design Rate Card',
    items: [
      {
        name: 'Monthly Package',
        price: 'UGX 250,000',
        color: 'amber',
        description: '4-5 short form reels with strategic planning and targets for your brand promotion'
      },
      {
        name: '2-4 minute promo video ad, Trailer',
        price: 'UGX 140,000',
        color: 'purple',
        description: 'a longer motion graphic with attractive edits and design for your brand promotion, longer weddings and event trailers'
      },
      {
        name: '30-60 second motion video ad, Trailer',
        price: 'UGX 70,000',
        color: 'cyan',
        description: 'a short motion graphic with attractive edits and design for your brand promotion, short weddings and event trailers'
      }
    ],
    notes: [
      'The Prices Depend on complexity and we negotiate where possible.',
      'Regular clients get 20% off discount on all.',
      'One is required to make full payment before or atleast 70% and finish when the work is done. full payment for the basic package.'
    ]
  },
  web: {
    label: 'Web Design',
    title: 'Web Design Packages',
    items: [
      {
        name: 'Starter Package',
        price: 'UGX 500,000',
        color: 'cyan',
        description: 'Includes: Up to 6 pages, Responsive design (Mobile, Tablet & Desktop), Modern UI/UX, Contact form, WhatsApp and Email integration, Google Maps integration, Social media links, Basic SEO setup, 1 month of free support',
        bestFor: 'Best For: Salons, Clinics, Restaurants, Churches, Small businesses, Personal brands'
      },
      {
        name: 'Advanced Package',
        price: 'UGX 700,000',
        color: 'amber',
        description: 'Includes: Up to 10 pages, Everything in the Starter package, Advanced SEO setup, Security updates, Blog/News section, Web Maintenance, Speed optimization, 2 month of free support, SSL setup',
        bestFor: 'Best For: Salons, Clinics, Restaurants, Churches, Small businesses, Personal brands'
      }
    ],
    notes: [
      'The Prices Depend on complexity and we negotiate where possible.',
      'Regular clients get 20% off discount on all.',
      'One is required to make full payment before or atleast 70% and finish when the work is done.'
    ]
  }
};

function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('logo');
  const current = pricingData[selectedCategory];

  return (
    <section className="pricing-page">
      <div className="container">
        <div className="page-hero">
          <img src={heroImg} alt="Pricing hero" />
          <div className="page-hero-content">
            <h1>Rates</h1>
          </div>
        </div>
      </div>

      <div className="pricing-shell">
        <div className="pricing-tabs" role="tablist" aria-label="Pricing categories">
          {Object.entries(pricingData).map(([key, item]) => (
            <button
              key={key}
              type="button"
              className={`tab-btn ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <h1 className="page-title">{current.title}</h1>

        <div className="pricing-list">
          {current.items.map((item, index) => (
            <article className="pricing-item" key={`${item.name}-${index}`}>
              <div className="item-copy">
                <h2 className={`item-title ${item.color}`}>{item.name}</h2>
                {item.description && <p>{item.description}</p>}
                {item.bestFor && <p className="best-for">{item.bestFor}</p>}
              </div>
              <div className={`price-pill ${item.color}`}>{item.price}</div>
            </article>
          ))}
        </div>

        <div className="divider" />

        <div className="pricing-note">
          <span className="note-badge">Note</span>
          <ol>
            {current.notes.map((note, index) => (
              <li key={`${note}-${index}`}>{note}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

