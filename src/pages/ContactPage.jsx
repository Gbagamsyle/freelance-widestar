import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'
import Button from '../components/common/Button'
import { site } from '../data/site'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content contact-page">
        <section className="page-hero simple">
          <span className="eyebrow">Contact</span>
          <h1>Visit the salon in Dubai Marina.</h1>
          <p>Plan your next appointment, explore the space, or connect with us on Instagram.</p>
        </section>

        <section className="contact-layout">
          <div className="contact-panel">
            <span className="eyebrow">Visit us</span>
            <h2>{site.location}</h2>
            <p>{site.name}</p>
            <p>Beauty salon concept experience in Dubai Marina, created for polished results and an elevated, calm client journey.</p>

            <div className="contact-details">
              <div>
                <span>Address</span>
                <p>{site.location}</p>
              </div>
              <div>
                <span>Phone</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
              <div>
                <span>Instagram</span>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagram}</a>
              </div>
              <div>
                <span>Facebook</span>
                <a href={site.facebookUrl} target="_blank" rel="noreferrer">Wide Star Salon</a>
              </div>
            </div>

            <div className="hours">
              <p><span>Mon–Thu</span><span>10:00–20:00</span></p>
              <p><span>Fri–Sat</span><span>10:00–21:00</span></p>
              <p><span>Sun</span><span>11:00–18:00</span></p>
            </div>

            <div className="location-actions">
              <Button href="/book">Book appointment</Button>
              <Button href={site.mapsUrl} target="_blank" rel="noreferrer" variant="tertiary">Get directions</Button>
              <Button href={site.instagramUrl} target="_blank" rel="noreferrer" variant="tertiary">
                <span className="social-icon instagram small">IG</span>
                Instagram
              </Button>
              <Button href={site.facebookUrl} target="_blank" rel="noreferrer" variant="tertiary">
                <span className="social-icon facebook small">f</span>
                Facebook
              </Button>
            </div>
          </div>

          <div className="location-map contact-map">
            <iframe
              src={site.mapsEmbedUrl}
              title="Wide Star Beauty Salon location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
