import Button from '../common/Button'
import { site } from '../../data/site'

export default function LocationSection() {
  return (
    <section className="location section-spacing" id="contact">
      <div className="location-copy">
        <span className="eyebrow">Dubai Marina</span>
        <h2>Visit the salon in the heart of the city.</h2>
        <p>
          Wide Star Beauty Salon
          <br />
          Dubai Marina, UAE
        </p>

        <div className="hours">
          <p>
            <span>Mon–Thu</span>
            <span>10:00–20:00</span>
          </p>
          <p>
            <span>Fri–Sat</span>
            <span>10:00–21:00</span>
          </p>
          <p>
            <span>Sun</span>
            <span>11:00–18:00</span>
          </p>
        </div>

        <div className="location-actions">
          <Button href="/book">
            Book appointment
          </Button>
          <Button href={site.mapsUrl} target="_blank" rel="noreferrer" variant="tertiary">
            Get directions
          </Button>
          <Button href={site.instagramUrl} target="_blank" rel="noreferrer" variant="tertiary">
            Instagram
          </Button>
        </div>
      </div>

      <div className="location-map" aria-label="Google Map showing Dubai Marina location">
        <iframe
          title="Wide Star Beauty Salon on Google Maps"
          src={site.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
