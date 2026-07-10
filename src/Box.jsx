import { forwardRef } from 'react'

// Placeholder primitive (swap for a sourced model later, same as Duck).
// Deliberately dumb: no animation of its own — Scene.jsx drives this via
// the forwarded ref as part of the scroll choreography.
const Box = forwardRef(function Box({ color = '#4f8cff', ...props }, ref) {
  return (
    <group ref={ref} {...props}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
})

export default Box
