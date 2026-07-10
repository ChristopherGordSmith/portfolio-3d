import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Scene from './Scene.jsx'

// SCROLL_HEIGHT gives the document enough scrollable distance to drive the
// ScrollTrigger choreography in Scene.jsx. Phase 4 will replace this plain
// spacer with real page sections.
const SCROLL_HEIGHT = '300vh'

export default function App() {
  return (
    <>
      {/* Canvas is pinned to the viewport — scrolling the page doesn't move
          it, it just advances the ScrollTrigger timeline inside Scene.jsx. */}
      <div style={{ position: 'fixed', inset: 0 }}>
        <Canvas
          camera={{ position: [3, 2, 5], fov: 45 }}
          shadows
        >
          {/* Lighting: one key light + soft ambient fill */}
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
            {/* Quick studio-style environment lighting/reflections */}
            <Environment preset="city" />
          </Suspense>

          <OrbitControls enablePan={false} minDistance={2} maxDistance={10} />
        </Canvas>
      </div>
      <div style={{ height: SCROLL_HEIGHT }} />
    </>
  )
}
