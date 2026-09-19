import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'
import { site } from '../data/site'

export default function BookPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content book-page">
        <section className="page-hero simple">
          <span className="eyebrow">Book</span>
          <h1>Secure your next appointment.</h1>
          <p>Choose your treatment, confirm your preferred slot, and continue to the booking platform to reserve your session.</p>
        </section>

        <section className="booking-redirect">
          <a
            className="button primary large"
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Continue to Salonist
          </a>
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
