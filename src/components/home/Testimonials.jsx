import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const marqueeTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="testimonials section-spacing">
      <div className="testimonials-title">Reviews</div>
      <div className="section-heading narrow">
        <h2>Clients keep coming back for the experience.</h2>
      </div>

      <div className="testimonial-marquee" aria-label="Customer reviews carousel">
        <div className="testimonial-track">
          {marqueeTestimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <span className="stars">{testimonial.rating}</span>
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-meta">
                <strong>{testimonial.name}</strong>
                {testimonial.service ? <span>{testimonial.service}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="testimonial-link-row">
        <a href="/about">Read more reviews <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
