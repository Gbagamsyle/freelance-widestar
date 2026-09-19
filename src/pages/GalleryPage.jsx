import { useMemo, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'
import { gallery } from '../data/gallery'

const filters = ['All', 'Hair', 'Nails', 'Lashes', 'Beauty']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleGallery = useMemo(() => {
    if (activeFilter === 'All') {
      return gallery
    }

    return gallery.filter((item) => item.tag === activeFilter)
  }, [activeFilter])

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content gallery-page">
        <section className="page-hero simple">
          <span className="eyebrow">Gallery</span>
          <h1>Editorial beauty, naturally elevated.</h1>
          <p>Visual proof of the polished finishes, soft glow and confidence that define each experience.</p>
        </section>

        <nav className="category-nav gallery-filters" aria-label="Gallery filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </nav>

        <section className="gallery-masonry">
          {visibleGallery.map((item) => (
            <article className={`gallery-item ${item.span}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
