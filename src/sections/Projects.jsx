import Reveal from '../Reveal.jsx'

const PROJECTS = [
  {
    title: 'Configuration Control System',
    description:
      'Designed and built an internal system to track product revisions across manufacturing, centralizing data from several web apps and databases into one API-driven service with consistent behavior guarantees.',
  },
  {
    title: 'Help Desk',
    description:
      'An ASP.NET Core MVC ticketing system with chat-style updates, multimedia attachments, and an SMTP notification engine — improved transparency and sped up issue resolution across the DevOps org.',
  },
  {
    title: 'WIP Map',
    description:
      'An ASP.NET Core Blazor app with a drag-and-drop canvas visualizing gross profit by building in real time as jobs are scanned, adapting to evolving factory layouts without code changes.',
  },
  {
    title: 'Wire Operations',
    description:
      'An ASP.NET Core MVC app streamlining wire-harness manufacturing — aggregates data across tables, generates laser-marking commands, and pushes live status via multithreading and SignalR.',
  },
  {
    title: 'War Driving Drone',
    description:
      'Built with Elbit Systems of America: an autonomous drone-based Wi-Fi recon platform. Integrated Kismet for access-point scanning and streamed telemetry over MQTT into a Tauri/Vue 3 app rendering results on a live map.',
  },
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
