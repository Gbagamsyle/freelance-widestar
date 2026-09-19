export default function ExperienceSection() {
  return (
    <section className="experience section-spacing">
      <div className="experience-image">
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
          alt="Beauty specialist styling hair"
        />
      </div>

      <div className="experience-copy">
        <span className="eyebrow">The Wide Star experience</span>
        <h2>Personal service. Quality details. A relaxed city ritual.</h2>
        <p>
          Every appointment is shaped around your routine, your preferences and the way you want to feel when you leave — refreshed, polished and ready for the next moment.
        </p>

        <ul className="experience-points">
          <li>Tailored appointments and warm, personal guidance</li>
          <li>Thoughtful finishing details and elevated styling</li>
          <li>Modern beauty rituals in a calm Dubai Marina setting</li>
        </ul>

        <a className="text-link" href="/about">
          Discover our story <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
