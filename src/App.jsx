import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import { site } from './data/site'

const routeMeta = {
  '/': {
    title: `${site.portfolioTitle} | Home`,
    description:
      'A premium salon website concept with brand storytelling, service highlights, editorial visuals and a streamlined booking journey.',
  },
  '/services': {
    title: `${site.portfolioTitle} | Services`,
    description:
      'Explore the proposed luxury salon service experience, with tailored beauty categories and a refined booking-first customer journey.',
  },
  '/about': {
    title: `${site.portfolioTitle} | About`,
    description:
      'Read the brand philosophy behind this independent salon concept, centered on elevated beauty rituals and thoughtful client experience.',
  },
  '/gallery': {
    title: `${site.portfolioTitle} | Gallery`,
    description:
      'View the visual direction and moodboard of the premium salon concept, from editorial portraits to curated beauty spaces.',
  },
  '/contact': {
    title: `${site.portfolioTitle} | Contact`,
    description:
      'A polished contact page concept for a salon experience in Dubai Marina, combining location details, open hours and booking access.',
  },
  '/book': {
    title: `${site.portfolioTitle} | Book`,
    description:
      'Booking concept for a premium beauty experience, leading clients seamlessly to the appointment platform while keeping the experience frictionless.',
  },
}

function setMetaTag(selector, attributes) {
  const tag = document.head.querySelector(selector) || document.createElement('meta')

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })

  if (!document.head.querySelector(selector)) {
    document.head.appendChild(tag)
  }
}

function AppMeta() {
  const location = useLocation()

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/']
    const fullUrl =
      typeof window !== 'undefined'
        ? new URL(location.pathname, window.location.origin).toString()
        : location.pathname

    document.title = meta.title

    setMetaTag('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    })

    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'noindex, nofollow',
    })

    setMetaTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: fullUrl,
    })

    setMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })

    setMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.title,
    })

    setMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    })

    setMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: fullUrl,
    })

    setMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: new URL('./assets/beauty.jpg', import.meta.url).href,
    })

    setMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    setMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.title,
    })

    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    })
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <AppMeta />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
