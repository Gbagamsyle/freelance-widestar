import { services } from '../../data/services'

export default function ServiceShowcase() {
  return (
    <section className="services section-spacing" id="services">
      <div className="services-title">Our services</div>
      <div className="services-intro">
        <div className="section-heading">
          <h2>Beauty rituals, considered from first touch to final finish.</h2>
        </div>
      </div>

      <div className="service-list">
        {services.map((service) => (
          <a className="service-row" href="/services" key={service.name}>
            <div className="service-image-wrap">
              <img src={service.image} alt={`${service.name} service`} />
            </div>
            <div className="service-row-content">
              <span className="service-number">{service.number}</span>
              <span className="service-name">{service.name}</span>
              <span className="service-details">{service.details}</span>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <a className="text-link services-link" href="/services">
        View all services <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
