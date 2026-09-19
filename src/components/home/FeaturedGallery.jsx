import { gallery } from '../../data/gallery'

export default function FeaturedGallery() {
  return (
    <section className="gallery section-spacing" id="gallery">
      <div className="gallery-title">Our work</div>
      <div className="gallery-intro">
        <div className="section-heading">
          <h2>Looks made to feel like you.</h2>
        </div>
      </div>

      <div className="gallery-grid">
        {gallery.map((item) => (
          <article className={`gallery-item ${item.span}`} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <span>{item.tag}</span>
              <strong>{item.title}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-cta-row">
        <a href="/gallery">View gallery <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
