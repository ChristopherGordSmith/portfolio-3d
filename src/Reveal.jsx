import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Generic "fade + rise in as it enters the viewport" wrapper, for plain DOM
// sections (About/Projects/Contact) — the 2D counterpart to the 3D
// choreography in Scene.jsx.
export default function Reveal({ children, className, y = 40, duration = 0.8 }) {
  const ref = useRef()

  useLayoutEffect(() => {
    // gsap.context() scopes every tween/ScrollTrigger created inside the
    // callback to this component instance. ctx.revert() then undoes all of
    // it in one call on unmount — no need to manually track and kill each
    // tween/trigger individually, which gets unwieldy once a page has many
    // of these (unlike Scene.jsx, which only ever owns one timeline).
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })

    return () => ctx.revert()
  }, [y, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
