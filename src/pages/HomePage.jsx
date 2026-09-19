import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import BrandIntro from '../components/home/BrandIntro'
import ServiceShowcase from '../components/home/ServiceShowcase'
import FeaturedGallery from '../components/home/FeaturedGallery'
import Testimonials from '../components/home/Testimonials'
import LocationSection from '../components/home/LocationSection'
import FinalCTA from '../components/home/FinalCTA'
import Footer from '../components/layout/Footer'
import MobileBookingBar from '../components/layout/MobileBookingBar'

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <ServiceShowcase />
        <FeaturedGallery />
        <Testimonials />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
