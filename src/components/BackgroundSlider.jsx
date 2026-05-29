import { useEffect, useRef, useState } from 'react'

function BackgroundSlider({ images = [], durationMs = 4500, fadeMs = 900 }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!images || images.length === 0) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, durationMs)
    return () => clearInterval(intervalRef.current)
  }, [images, durationMs])

  if (!images || images.length === 0) return null

  return (
    <div className="bg-slider" aria-hidden>
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`bg-slide ${idx === activeIndex ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${src})`, transitionDuration: `${fadeMs}ms` }}
        >
          {/* Preload for LCP: use <img> offscreen for browser optimization */}
          {idx === 0 && (
            <img src={src} style={{ display: 'none' }} alt="" loading="eager" decoding="async" />
          )}
        </div>
      ))}
      <div className="bg-overlay" />
    </div>
  )
}

export default BackgroundSlider




