import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
