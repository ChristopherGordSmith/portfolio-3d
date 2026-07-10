import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Duck from './Duck.jsx'

export default function App() {
  return (
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
        <Duck position={[0, -1.1, 0]} />
        <ContactShadows position={[0, -1, 0]} opacity={0.4} blur={2.5} />
        {/* Quick studio-style environment lighting/reflections */}
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enablePan={false} minDistance={2} maxDistance={10} />
    </Canvas>
  )
}
