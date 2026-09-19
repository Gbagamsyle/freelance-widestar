import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-group">
            <Link className="brand-block footer-brand" to="/" aria-label="Wide Star Beauty footer">
              <span className="brand-name">{site.name}</span>
              <span className="brand-tag">{site.tagline}</span>
            </Link>
            <p>Thoughtful beauty, refined for the way you want to feel.</p>
          </div>

          <div className="footer-links">
            <span className="footer-label">Explore</span>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Our work</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <span className="footer-label">Find us</span>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">{site.location}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer">
              <span className="social-icon instagram">IG</span>
              {site.instagram}
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer">
              <span className="social-icon facebook">f</span>
              Wide Star Salon
            </a>
          </div>
        </div>

        <div className="footer-meta">
          <span>Dubai Marina</span>
          <Link className="footer-book-link" to="/book">Book appointment <span aria-hidden="true">↗</span></Link>
        </div>

        <p className="footer-note">Independent concept website — not an official Wide Star channel.</p>
      </footer>
    </>
  )
}
