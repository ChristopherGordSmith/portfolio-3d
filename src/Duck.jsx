import { useRef, useLayoutEffect, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

// Swap MODEL_PATH for any other .glb (Sketchfab / Kenney / Meshy / Tripo export)
// and it should drop in without changing the rest of this component.
const MODEL_PATH = '/models/Duck.glb'
const HOVER_SCALE = 1.15

export default function Duck(props) {
  // `layout` receives props from the parent (position/scale) — React owns this.
  const layout = useRef()
  // `animated` is only ever touched by GSAP, imperatively — React never sets
  // its transform, so there's no fight between React re-renders and tweens.
  const animated = useRef()
  const { scene } = useGLTF(MODEL_PATH)

  // Load-in: pop + fade the model in once, when it first mounts.
  // useLayoutEffect (not useEffect) runs synchronously right after Three.js
  // builds the frame but before it's presented, so we set scale to 0 before
  // anything is drawn — no one-frame flash at full size first.
  useLayoutEffect(() => {
    // Collect every material in the loaded model so we can fade all of them
    // together (a glTF can have multiple meshes/materials, e.g. body + eyes).
    const materials = []
    scene.traverse((child) => {
      if (child.isMesh) {
        const mats = Array.isArray(child.material) ? child.material : [child.material]
        mats.forEach((m) => {
          m.transparent = true
          materials.push(m)
        })
      }
    })

    gsap.set(animated.current.scale, { x: 0, y: 0, z: 0 })
    const fade = { value: 0 }

    const tl = gsap.timeline()
    tl.to(animated.current.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'back.out(1.7)' }, 0)
    tl.to(fade, {
      value: 1,
      duration: 0.8,
      onUpdate: () => materials.forEach((m) => { m.opacity = fade.value }),
    }, 0)

    return () => tl.kill()
  }, [scene])

  // Belt-and-suspenders cleanup: if this component unmounts mid-hover-tween,
  // stop GSAP from continuing to animate an orphaned object.
  useEffect(() => () => {
    if (animated.current) gsap.killTweensOf(animated.current.scale)
  }, [])

  // Hover handlers are plain event callbacks, not React state + useEffect.
  // Hovering doesn't change what React renders (no JSX depends on it) — it
  // only nudges a Three.js object GSAP already owns — so there's no need to
  // introduce useState/useEffect here at all, and no risk of that effect
  // firing on mount and stomping the load-in timeline.
  const handlePointerOver = (e) => {
    e.stopPropagation()
    gsap.to(animated.current.scale, {
      x: HOVER_SCALE,
      y: HOVER_SCALE,
      z: HOVER_SCALE,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    gsap.to(animated.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    document.body.style.cursor = 'auto'
  }

  return (
    <group ref={layout} {...props}>
      <group ref={animated} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <primitive object={scene} />
      </group>
    </group>
  )
}

// Preload so the model starts fetching as soon as the module is imported,
// rather than waiting for first render.
useGLTF.preload(MODEL_PATH)
