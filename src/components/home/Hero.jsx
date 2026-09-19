import Button from '../common/Button'
import heroImage from '../../assets/widestarone.jpg'

export default function Hero() {
  return (
    <section className="hero section-spacing" id="home">
      <div className="hero-copy">
        <span className="eyebrow hero-brand">Wide Star</span>
        <span className="hero-location">Dubai Marina · Beauty Studio</span>

        <h1>
          Hair, nails &amp; beauty
          <span>with a polished finish.</span>
        </h1>

        <p>
          Thoughtful salon care designed for confident routines, elevated finishing and a calm experience in the heart of Dubai Marina.
        </p>

        <div className="hero-actions">
          <Button href="/book">Book appointment</Button>
          <Button href="/services" variant="secondary">View services</Button>
        </div>

        <div className="hero-meta" aria-label="Salon service categories">
          <div className="meta-item">
            <strong>Hair</strong>
            <span>Styling &amp; colour</span>
          </div>
          <div className="meta-item">
            <strong>Nails</strong>
            <span>Signature finishes</span>
          </div>
          <div className="meta-item">
            <strong>Beauty</strong>
            <span>Rituals &amp; care</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Beauty salon interior concept image">
        <div className="hero-image-wrap">
          <img
            src={heroImage}
            alt="Wide Star salon interior"
          />
        </div>

        <div className="hero-info-panel">
          <div className="hero-info-item">
            <span className="card-label">Location</span>
            <strong>Dubai Marina</strong>
            <small>Premium beauty care</small>
          </div>

          <div className="hero-info-item">
            <span className="card-label">Experience</span>
            <strong>Personalised</strong>
            <small>Care from consultation to finish</small>
          </div>
        </div>
      </div>
    </section>
  )
}
