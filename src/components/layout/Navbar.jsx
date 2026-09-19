import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const navItems = [
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 520)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <header className={`topbar${menuOpen ? ' menu-open' : ''}`}>
      <Link className="brand-block" to="/" aria-label="Wide Star Beauty brand" onClick={closeMenu}>
        <span className="brand-name">{site.name}</span>
        <span className="brand-tag">{site.tagline}</span>
      </Link>

      <div className="menu-panel">
        <nav className="main-nav" id="main-navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link to={item.path} key={item.label} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-button" to="/book" onClick={closeMenu}>
          BOOK
        </Link>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {showScrollTop ? (
        <button className="scroll-top" type="button" aria-label="Back to top" onClick={scrollToTop}>
          <span aria-hidden="true">↑</span>
        </button>
      ) : null}
    </header>
  )
}
