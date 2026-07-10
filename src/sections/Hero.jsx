import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import Scene from '../Scene.jsx'

// The wrapper (`.hero-wrapper`, 250vh) gives ScrollTrigger room to scrub the
// choreography in Scene.jsx. The inner stage (`.hero-stage`) is `position:
// sticky; top: 0; height: 100vh`, so it stays pinned in the viewport for the
// wrapper's whole scroll range, then scrolls away naturally into About once
// you pass it — no manual pin/unpin logic needed, CSS does it.
export default function Hero() {
  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-stage">
        <Canvas camera={{ position: [3, 2, 5], fov: 45 }} shadows dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          <Suspense fallback={null}>
            <Scene />
            <ContactShadows position={[0, -1, 0]} opacity={0.4} blur={2.5} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>

        <div className="hero-copy">
          <h1>Your Name</h1>
          <p>Software Engineer &amp; Architect</p>
        </div>
      </div>
    </section>
  )
}
