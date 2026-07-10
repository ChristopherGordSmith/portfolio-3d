import Reveal from '../Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2>About</h2>
        <p>
          I'm a Software Developer Architect at Interconnect-Wiring in Fort
          Worth, TX, where I design system architecture, set coding
          standards, and mentor other developers through code review. Before
          that I spent two years there as a full-stack developer building
          manufacturing and administration workflows on ASP.NET Core and SQL
          Server. I graduated from the University of Texas at Arlington with
          a B.S. in Computer Science in 2023.
        </p>
        <p>
          This site is itself a small side-project — built while learning 3D
          web animation with React Three Fiber and GSAP, from a single
          spinning duck up to this page.
        </p>
        <a className="button" href="/resume.pdf" download>
          Download Résumé
        </a>
      </Reveal>
    </section>
  )
}
