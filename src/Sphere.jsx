import { forwardRef } from 'react'

// Placeholder primitive (swap for a sourced model later, same as Duck).
// Deliberately dumb: no animation of its own — Scene.jsx drives this via
// the forwarded ref as part of the scroll choreography.
const Sphere = forwardRef(function Sphere({ color = '#ff6b6b', ...props }, ref) {
  return (
    <group ref={ref} {...props}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
})

export default Sphere
