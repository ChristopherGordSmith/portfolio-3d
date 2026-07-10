import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// Phase 1: just get a model on screen and rotating.
// Swap MODEL_PATH for any other .glb (Sketchfab / Kenney / Meshy / Tripo export)
// and it should drop in without changing the rest of this component.
const MODEL_PATH = '/models/Duck.glb'

export default function Duck(props) {
  const group = useRef()
  const { scene } = useGLTF(MODEL_PATH)

  // Simple continuous spin. This is the "hello world" of R3F animation —
  // GSAP takes over from here in Phase 2 for triggered/eased animation.
  useFrame((_state, delta) => {
    group.current.rotation.y += delta * 0.6
  })

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  )
}

// Preload so the model starts fetching as soon as the module is imported,
// rather than waiting for first render.
useGLTF.preload(MODEL_PATH)
