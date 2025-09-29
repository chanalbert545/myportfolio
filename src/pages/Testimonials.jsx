function Testimonials() {
  const items = [
    {
      quote: 'Albert transformed our brand visuals and launch video. Results were instant.',
      author: 'Mbentyo Felix. — Prime Auto Transporters',
    },
    {
      quote: 'Clean design, fast delivery, and a website that converts. Highly recommended.',
      author: 'Nabakka Brenda. — Brenda & Family Decorations',
    },
    {
      quote: 'Great eye for detail and storytelling. The product shots leveled us up.',
      author: 'Solomon Murikwa. — Mon Group Gas Solutions',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2>Testimonials</h2>
        <ul className="grid three">
          {items.map((t, i) => (
            <li key={i} className="quote">
              <p>“{t.quote}”</p>
              <p className="author">{t.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials



