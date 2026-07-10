import Reveal from '../Reveal.jsx'

// Placeholder contact details — swap in your real email/links.
export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <h2>Contact</h2>
        <p>Interested in working together or just want to say hi?</p>
        <a className="button" href="mailto:you@example.com">
          Get in touch
        </a>
      </Reveal>
    </section>
  )
}
