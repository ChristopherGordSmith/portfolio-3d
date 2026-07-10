import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Duck from './Duck.jsx'
import Box from './Box.jsx'
import Sphere from './Sphere.jsx'
import TorusKnot from './TorusKnot.jsx'

// ScrollTrigger is a GSAP plugin — it has to be registered once before any
// scrollTrigger-powered tween runs. Safe to call at module scope since this
// file is only ever imported once.
gsap.registerPlugin(ScrollTrigger)

export default function Scene() {
  const duck = useRef()
  const box = useRef()
  const sphere = useRef()
  const torusKnot = useRef()

  // This timeline choreographs all four objects together, driven by scroll
  // instead of by time — building on the same "GSAP tweens a ref's numeric
  // properties directly" pattern as Duck's own load-in/hover animation, just
  // with one timeline reaching across multiple objects instead of one
  // component managing itself.
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        // scrub ties the timeline's playhead directly to scroll position
        // instead of playing on a clock. `1` adds a 1-second catch-up lag
        // so it eases rather than snapping exactly to the scrollbar.
        scrub: 1,
      },
    })

    // The number after each tween is its start time on the timeline (in
    // seconds of "scroll time"). Overlapping start times (0, 0.1, 0.3, 0.5)
    // are what stagger the shapes in one after another instead of all
    // moving at once.
    tl.to(duck.current.position, { x: -1.5, duration: 1 }, 0)
      .to(duck.current.rotation, { y: Math.PI * 2, duration: 1 }, 0)
      .fromTo(box.current.position, { y: -4 }, { y: 0.4, duration: 1 }, 0.1)
      .to(box.current.rotation, { x: Math.PI * 2, duration: 1 }, 0.1)
      .fromTo(sphere.current.position, { y: -4 }, { y: 1.3, duration: 1 }, 0.3)
      .fromTo(torusKnot.current.position, { y: -4 }, { y: -0.3, duration: 1 }, 0.5)
      .to(torusKnot.current.rotation, { y: Math.PI * 4, duration: 1 }, 0.5)

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <>
      <Duck ref={duck} position={[0, -1.1, 0]} />
      <Box ref={box} position={[1.8, -4, -0.5]} />
      <Sphere ref={sphere} position={[-1.8, -4, 0.3]} />
      <TorusKnot ref={torusKnot} position={[0, -4, 1.6]} />
    </>
  )
}
