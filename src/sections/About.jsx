import Reveal from '../Reveal.jsx'

// Placeholder copy — swap in real bio once resume content is available.
export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2>About</h2>
        <p>
          I'm a software engineer and architect with a background in building
          reliable, well-designed systems. This site is itself a small
          side-project — built while learning 3D web animation with React
          Three Fiber and GSAP, from a single spinning duck up to this page.
        </p>
        <a className="button" href="/resume.pdf" download>
          Download Résumé
        </a>
      </Reveal>
    </section>
  )
}
