import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'
import Button from '../components/common/Button'
import aboutImage from '../assets/widestarone.jpg'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content about-page">
        <section className="about-hero">
          <span className="eyebrow">Our approach</span>
          <h1>About Wide Star</h1>
          <p>
            Beauty, considered. A calm, considered experience where the smallest details make the biggest difference.
          </p>
        </section>

        <section className="story-layout">
          <div className="story-image-block">
            <img
              src={aboutImage}
              alt="Wide Star salon interior"
            />
          </div>

          <div className="story-copy">
            <span className="eyebrow">The experience</span>
            <h2>Refined care for the way you want to feel.</h2>
            <p>
              We believe beauty should be personal, effortless and quietly luxurious. Every appointment is shaped to complement your routine, your style and your pace — whether that means a fresh cut, a skin ritual, or a finished look designed to carry you through the week with ease.
            </p>
            <p>
              The intent is simple: create a space where the detail is intentional, the service is attentive, and the experience leaves you feeling polished without effort.
            </p>
          </div>
        </section>

        <section className="principles-section">
          <div className="principles-heading">
            <span className="eyebrow">What guides us</span>
            <p>Personal service, thoughtful detail and a finish that feels like you.</p>
          </div>
          <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Intentional</h3>
            <p>Every treatment is considered with your routine, your features and your confidence in mind.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Tailored</h3>
            <p>Recommendations are guided by your preferences, your lifestyle and the finish you want to carry.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Effortless</h3>
            <p>A calm, premium atmosphere that lets beauty feel restorative, elevated and entirely easy.</p>
          </article>
          </div>
        </section>

        <section className="cta-strip">
          <p>Reserve your appointment and enjoy the experience.</p>
          <Button href="/book">Book appointment</Button>
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
