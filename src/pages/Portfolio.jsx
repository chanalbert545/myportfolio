import { useEffect, useMemo, useState } from 'react'

import heroImg from '../assets/ZDH.webp'
import img2 from '../assets/vv.webp'
import img3 from '../assets/camp.webp'
import img4 from '../assets/pic4.webp'
import img25 from '../assets/wear your story.webp'
import img5 from '../assets/pic5.webp'
import img6 from '../assets/pic6.webp'
import img7 from '../assets/bakawa.webp'
import img8 from '../assets/logos.webp'
import img9 from '../assets/spes good friday.webp'

import img11 from '../assets/pic5.webp'
import img12 from '../assets/m&d.webp'
import img13 from '../assets/mango labour day.webp'
import img14 from '../assets/roadtrip.webp'
import img15 from '../assets/pic.webp'
import img17 from '../assets/nba.webp'
import img20 from '../assets/pic6.webp'
import img21 from '../assets/sec newmonth.webp'
import img22 from '../assets/safet toppee 2.webp'
import img23 from '../assets/KILIFAIR.webp'
import img24 from '../assets/logo/front.png'

import logo1 from '../assets/logo/uni.png'
import logo2 from '../assets/logo/un.png'
import logo3 from '../assets/logo/www.png'
import logo4 from '../assets/logo/pureglow.png'
import logo5 from '../assets/logo/smb.png'
import logo6 from '../assets/logo/mode7.png'
import logo7 from '../assets/logo/mamacare.png'
import logo8 from '../assets/logo/eloi.png'

const WORKS = [
  { id: 1, title: 'Partys & Concerts', category: 'graphics', thumb: img25 },
  { id: 2, title: 'Logo Animation', category: 'motion', thumb: img5, videoMp4: `/Comp1.mp4` },
  { id: 3, title: 'MamaCare Nursery & Daycare', category: 'web', thumb: img6, href: 'https://mamacarenursery.com/' },
  { id: 4, title: 'Unica Prints', category: 'brand', thumb: logo1 },
  { id: 5, title: 'Social media reels', category: 'motion', thumb: img2, videoMp4: `/Comp2.mp4` },
  { id: 6, title: 'Campaign poster', category: 'graphics', thumb: img3 },
  { id: 7, title: 'Business social media designs', category: 'graphics', thumb: img7 },
  { id: 8, title: 'Logo design', category: 'graphics', thumb: img8 },
  { id: 9, title: 'Public Holidays', category: 'graphics', thumb: img9 },
  { id: 10, title: 'Unica Prints 2', category: 'brand', thumb: logo2 },
  { id: 11, title: 'Motion ads', category: 'motion', thumb: img4, videoMp4: `/hhh.mp4` },
  { id: 12, title: 'Packaging ', category: 'graphics', thumb: img12 },
  { id: 13, title: 'photo Manipulated posters', category: 'graphics', thumb: img13 },
  { id: 14, title: 'Trips and Tours', category: 'graphics', thumb: img14 },
  { id: 15, title: 'Frontyard services Website', category: 'web', thumb: img24, href: 'https://frontyardservices.org/' },
  { id: 16, title: 'Women Alumni Network', category: 'brand', thumb: logo3 },
  { id: 17, title: 'Sports posters', category: 'graphics', thumb: img17 },
  { id: 18, title: 'PureGlow Brand Identity', category: 'brand', thumb: logo4 },
  { id: 19, title: 'SMB Brand Identity', category: 'brand', thumb: logo5 },
  { id: 20, title: 'Mode 7 Apparel & Styles', category: 'brand', thumb: logo6 },
  { id: 21, title: 'Welcome to the new month poster', category: 'graphics', thumb: img21 },
  { id: 22, title: 'Fashion & Clothing flyers', category: 'graphics', thumb: img22 },
  { id: 23, title: 'workshops & events', category: 'graphics', thumb: img23 },
  { id: 24, title: 'Elevate Show', category: 'brand', thumb: logo8 },
  { id: 25, title: 'Maama Care Nursery School', category: 'brand', thumb: logo7 },
]

const CATEGORIES = [
  { key: 'brand', label: 'Brand Identity' },
  { key: 'graphics', label: 'Graphics' },
  { key: 'motion', label: 'Motion' },
  { key: 'web', label: 'Web' },
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
    setVideoError(false)
  }, [selected?.item?.id])

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero portfolio-page-hero">
          <img src={heroImg} alt="Portfolio hero" />
          <div className="page-hero-content">
          </div>
        </div>

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
          {filtered.map(item => {
            const isWhiteBrandCard = item.category === 'brand' && [18, 19, 20, 24, 25].includes(item.id)

            return (
              <li key={item.id} className={`work-card ${isWhiteBrandCard ? 'brand-white-card' : ''}`}>
                <button className={`work-button ${isWhiteBrandCard ? 'brand-white-button' : ''}`} onClick={() => onItemClick(item)}>
                  <img src={item.thumb} alt={item.title} loading="lazy"/>
                  <h4>{item.title}</h4>
                  <p className="tag">{item.category}</p>
                </button>
              </li>
            )
          })}
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
                <img className="modal-image" src={selected.item.thumb} alt={selected.item.title} loading="lazy" />
              ) : (
                <img className="modal-image" src={selected.item.thumb} alt={selected.item.title} loading="lazy"/>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio



