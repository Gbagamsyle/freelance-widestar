import { site } from '../../data/site'

export default function SocialShowcase() {
  return (
    <section className="social section-spacing">
      <div className="section-heading narrow social-heading">
        <span className="eyebrow">Follow the experience</span>
        <h2>{site.instagram}</h2>
      </div>

      <div className="social-grid">
        <img src={new URL('../../assets/beauty.jpg', import.meta.url).href} alt="Beauty look" />
        <img src={new URL('../../assets/nails.jpg', import.meta.url).href} alt="Nail studio detail" />
        <img src={new URL('../../assets/glow-oil.jpg', import.meta.url).href} alt="Facial beauty studio" />
        <img src={new URL('../../assets/finished-look.jpg', import.meta.url).href} alt="Luxury beauty portrait" />
      </div>

      <div className="testimonial-link-row">
        <a href={site.instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
