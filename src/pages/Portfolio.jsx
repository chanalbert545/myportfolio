import { useEffect, useMemo, useState } from 'react'
import img1 from '../assets/pic9.jpg'
import img2 from '../assets/pic2.jpeg'
import img3 from '../assets/snap8.jpg'
import img4 from '../assets/pic4.jpg'
import img5 from '../assets/pic5.png'
import img6 from '../assets/pic6.png'
import img7 from '../assets/snap1.jpg'
import img8 from '../assets/logos.png'
import img9 from '../assets/PURE.jpg'
import img10 from '../assets/pic10.jpg'
import img11 from '../assets/pic5.png'
import img12 from '../assets/mdd.jpg'
import img13 from '../assets/snap3.jpg'
import img14 from '../assets/snap9.jpg'
import img15 from '../assets/pic.jpeg'
import img16 from '../assets/pic11.jpg'
import img17 from '../assets/snap7.jpg'
import img18 from '../assets/pic13.jpg'
import img19 from '../assets/pic15.jpg'
import img20 from '../assets/pic6.jpg'

const WORKS = [
  { id: 1, title: 'Partys & Concerts', category: 'graphics', thumb: img4 },
  { id: 2, title: 'Logo Animation', category: 'motion', thumb: img5, videoMp4: '/logo.mp4' },
  { id: 3, title: 'MamaCare Nursery & Daycare', category: 'web', thumb: img6, href: 'https://mamacarenursery.kesug.com/' },
  { id: 4, title: 'Graduation shots', category: 'photo', thumb: img1 },
  { id: 5, title: 'Social media reels', category: 'motion', thumb: img2, videoMp4: '/Comp2.mp4' },
  { id: 6, title: 'Campaign poster', category: 'graphics', thumb: img3 },
  { id: 7, title: 'Call for Action flyer', category: 'graphics', thumb: img7 },
  { id: 8, title: 'Logo design', category: 'graphics', thumb: img8 },
  { id: 9, title: 'Business flyers', category: 'graphics', thumb: img9 },
  { id: 10, title: 'Portrait Shot', category: 'photo', thumb: img10 },
  { id: 11, title: 'Motion ads', category: 'motion', thumb: img4, videoMp4: '/hhh.mp4' },
  { id: 12, title: 'Packaging ', category: 'graphics', thumb: img12 },
  { id: 13, title: 'Tours', category: 'graphics', thumb: img13 },
  { id: 14, title: 'workshops & events', category: 'graphics', thumb: img14 },
  { id: 15, title: 'Our Portfolio Website', category: 'web', thumb: img15, href: 'https://designlab.netlify.app' },
  { id: 16, title: 'Model shots', category: 'photo', thumb: img16 },
  { id: 17, title: 'Awareness', category: 'graphics', thumb: img17 },
  { id: 18, title: 'personal shots', category: 'photo', thumb: img18 },
  { id: 19, title: 'Pre wedding shots', category: 'photo', thumb: img19 },
  { id: 20, title: 'Couple shots', category: 'photo', thumb: img20 },
]

const CATEGORIES = [
  { key: 'graphics', label: 'Graphics' },
  { key: 'motion', label: 'Motion' },
  { key: 'web', label: 'Web' },
  { key: 'photo', label: 'Photography' },
]

function Portfolio() {
  const [filter, setFilter] = useState('graphics')
  const filtered = useMemo(() => {
    return WORKS.filter(w => w.category === filter)
  }, [filter])

  const [selected, setSelected] = useState(null) // { item }
  const [videoError, setVideoError] = useState(false)

  function onItemClick(item) {
    if (item.category === 'web' && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      return
    }
    if (item.category === 'motion' && (item.videoMp4 || item.videoAvi)) {
      setSelected({ type: 'video', item })
      return
    }
    // default: show image
    setSelected({ type: 'image', item })
  }

  useEffect(() => {
    function onKey(ev) {
      if (ev.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    // reset video error when selection changes
    setVideoError(false)
  }, [selected?.item?.id])

  return (
    <section className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="filters">
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              className={`chip ${filter === c.key ? 'active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <ul className="grid three gallery">
          {filtered.map(item => (
            <li key={item.id} className="work-card">
              <button className="work-button" onClick={() => onItemClick(item)}>
                <img src={item.thumb} alt={item.title} />
                <h4>{item.title}</h4>
                <p className="tag">{item.category}</p>
              </button>
            </li>
          ))}
        </ul>

        {selected && (
          <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {selected.type === 'video' && !videoError ? (
                <video
                  key={selected.item.id}
                  className="modal-video"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  onLoadedMetadata={(e) => {
                    const d = e.currentTarget.duration
                    if (!isFinite(d) || !d || d <= 0) setVideoError(true)
                  }}
                >
                  {selected.item.videoMp4 && (
                    <source src={selected.item.videoMp4} type="video/mp4" />
                  )}
                  {selected.item.videoAvi && (
                    <source src={selected.item.videoAvi} type="video/avi" />
                  )}
                  Your browser does not support the video tag.
                </video>
              ) : selected.type === 'video' && videoError ? (
                <img className="modal-image" src={selected.item.thumb} alt={selected.item.title} />
              ) : (
                <img className="modal-image" src={selected.item.thumb} alt={selected.item.title} />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio



