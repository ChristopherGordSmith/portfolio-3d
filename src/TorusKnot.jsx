import { forwardRef } from 'react'

// Placeholder primitive (swap for a sourced model later, same as Duck).
// Deliberately dumb: no animation of its own — Scene.jsx drives this via
// the forwarded ref as part of the scroll choreography.
const TorusKnot = forwardRef(function TorusKnot({ color = '#7cfc9e', ...props }, ref) {
  return (
    <group ref={ref} {...props}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.4, 0.15, 100, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
})

export default TorusKnot
