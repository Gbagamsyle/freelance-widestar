import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'
import Button from '../components/common/Button'
import { services } from '../data/services'

const serviceCategories = [
  {
    name: 'Hair',
    anchor: 'hair',
    intro: 'Precision cuts, colour, and finishing touches curated around your routine.',
    items: [
      { title: 'Cut & Style', detail: 'Signature finishing and shape work.', price: 'Booking-based pricing' },
      { title: 'Colour', detail: 'Tint, dimensional tone, and gloss refresh.', price: 'Booking-based pricing' },
      { title: 'Treatments', detail: 'Repair rituals and salon care for healthy, glossy hair.', price: 'Booking-based pricing' },
    ],
  },
  {
    name: 'Nails',
    anchor: 'nails',
    intro: 'Clean, polished details for a refined finish that lasts.',
    items: [
      { title: 'Manicure', detail: 'Classic and soft-gel finishing options.', price: 'Booking-based pricing' },
      { title: 'Pedicure', detail: 'Longer-lasting polish and restorative care.', price: 'Booking-based pricing' },
      { title: 'Extensions', detail: 'Elegant enhancements for a more sculpted look.', price: 'Booking-based pricing' },
    ],
  },
  {
    name: 'Lashes',
    anchor: 'lashes',
    intro: 'Lifted, defined eyes with a polished, natural finish.',
    items: [
      { title: 'Extensions', detail: 'Custom lash mapping and tailored volume.', price: 'Booking-based pricing' },
      { title: 'Lifts', detail: 'Naturally lifted results with a softer finish.', price: 'Booking-based pricing' },
      { title: 'Treatments', detail: 'Aftercare and maintenance for lasting shape.', price: 'Booking-based pricing' },
    ],
  },
  {
    name: 'Beauty',
    anchor: 'beauty',
    intro: 'Thoughtful rituals for skin, glow, and everyday confidence.',
    items: [
      { title: 'Facials', detail: 'Gentle treatments that brighten and refresh.', price: 'Booking-based pricing' },
      { title: 'Waxing', detail: 'Smooth, precise finishing for everyday ease.', price: 'Booking-based pricing' },
      { title: 'Signature rituals', detail: 'Elevated self-care experiences tailored to your routine.', price: 'Booking-based pricing' },
    ],
  },
]

export default function ServicesPage() {
  const serviceImages = Object.fromEntries(services.map((service) => [service.name, service.image]))

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content service-page">
        <section className="page-hero simple">
          <span className="eyebrow">Services</span>
          <h1>Beauty rituals, tailored to you.</h1>
          <p>Thoughtful treatments designed to bring balance, polish and confidence to every appointment.</p>
        </section>

        <nav className="category-nav" aria-label="Service categories">
          {serviceCategories.map((category) => (
            <a href={`#${category.anchor}`} key={category.name}>
              {category.name}
            </a>
          ))}
        </nav>

        <section className="service-categories">
          {serviceCategories.map((category, index) => (
            <article className="service-category" id={category.anchor} key={category.name}>
              <div className="category-visual">
                <img src={serviceImages[category.name]} alt={`${category.name} services`} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="category-content">
                <div className="category-header">
                  <div>
                    <span className="category-index">{String(index + 1).padStart(2, '0')}</span>
                    <h2>{category.name}</h2>
                  </div>
                  <p>{category.intro}</p>
                </div>

                <div className="category-list">
                  {category.items.map((item) => (
                    <div className="service-detail-row" key={item.title}>
                      <div className="service-detail-copy-block">
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                      </div>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="cta-strip">
          <p>Ready to begin your next ritual?</p>
          <Button href="/book">Book appointment</Button>
        </section>
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
