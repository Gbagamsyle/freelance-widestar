import Button from '../common/Button'

export default function FinalCTA() {
  return (
    <section className="final-cta section-spacing">
      <p>Your next beauty appointment starts here.</p>
      <Button href="/book" className="light">
        Book appointment
      </Button>
    </section>
  )
}
