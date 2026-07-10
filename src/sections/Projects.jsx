import Reveal from '../Reveal.jsx'

// Placeholder projects — swap in real ones once you decide what to feature.
const PROJECTS = [
  { title: 'Project One', description: 'Short description of project one goes here.' },
  { title: 'Project Two', description: 'Short description of project two goes here.' },
  { title: 'Project Three', description: 'Short description of project three goes here.' },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2>Projects</h2>
      </Reveal>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <Reveal key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
