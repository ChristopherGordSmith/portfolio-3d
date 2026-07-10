# 3D Animation Portfolio Project

## What this is
A React Three Fiber (R3F) project for practicing 3D object animation on the
web, building up to a polished portfolio page. Also serves as the user's
first React project — explain React concepts as they come up, don't assume
prior React knowledge, but do assume general senior-level software
engineering competence (5-year dev / software architect background).

## Tech stack (do not deviate without discussion)
- **Three.js** — 3D rendering
- **React Three Fiber (@react-three/fiber)** — React wrapper around Three.js
- **@react-three/drei** — R3F helper components (loaders, controls, environment)
- **GSAP** — animation timing/sequencing (installed, free for commercial use)
- **Vite** — build tool / dev server
- 3D assets in `.glb` format

## Current status
Phase 3 complete: `src/Scene.jsx` choreographs four objects (Duck +
placeholder Box/Sphere/TorusKnot primitives) with one GSAP timeline driven
by ScrollTrigger. The Canvas is pinned (`position: fixed`) over a tall
scroll-spacer in `App.jsx` so page scroll drives the timeline's scrub
instead of moving the canvas itself. Duck's own load-in/hover tweens
(Phase 2) still run independently on its inner "animated" group; Scene.jsx
animates the outer group (exposed via `forwardRef`) for choreography, so
the two animation layers never fight over the same transform.

## Roadmap
- [x] Phase 1 — Load & display: bare scene, one model rendering and spinning
- [x] Phase 2 — Basic animation: GSAP-driven load-in (pop + fade) and hover
      scale on `src/Duck.jsx`, replacing the constant `useFrame` spin
- [x] Phase 3 — Choreography: `src/Scene.jsx` renders Duck + Box/Sphere/
      TorusKnot placeholders, choreographed by one GSAP timeline scrubbed
      via ScrollTrigger against page scroll
- [ ] Phase 4 — Portfolio page: section-based scroll reveals, hero 3D piece,
      transitions, responsive canvas, loading states, performance pass
      (replace the plain scroll-spacer div with real page content/sections)

## Project structure
```
src/
  main.jsx      # React entry point
  App.jsx       # Fixed Canvas + scroll spacer, lighting, environment, orbit controls
  Scene.jsx     # Choreographs all objects with one GSAP/ScrollTrigger timeline
  Duck.jsx      # Loads the .glb; own load-in/hover GSAP tweens; forwardRef for Scene.jsx
  Box.jsx       # Placeholder primitive object (swap for a sourced model later)
  Sphere.jsx    # Placeholder primitive object
  TorusKnot.jsx # Placeholder primitive object
public/
  models/
    Duck.glb   # Placeholder model — swappable
```

## Conventions / preferences
- Prefer plain functional components with hooks; explain each new React
  concept briefly the first time it's used (useState, useEffect, useRef,
  useFrame, Suspense, etc.) since this is a React learning project.
- Keep components small and single-purpose (one object/behavior per file),
  mirroring the pattern in `Duck.jsx`.
- When adding a new 3D object, follow the same shape: a component that
  loads a `.glb` via `useGLTF` and takes `position`/`scale`/`rotation` props.
- Don't introduce new animation or 3D libraries without checking in first —
  GSAP + R3F/drei should cover everything through Phase 4.

## Sourcing 3D objects
- Free/reliable: Sketchfab (filter: downloadable + free license), Kenney.nl
  (CC0), Poly Haven
- AI-generated (.glb export): Meshy, Tripo AI — free tiers with commercial
  rights. Treat "best AI 3D tool" roundups skeptically (heavily SEO'd space).

## Useful links
- Three.js docs: https://threejs.org/docs/
- React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
- drei docs: https://github.com/pmndrs/drei
- GSAP docs: https://gsap.com/docs/v3/
- GSAP license (free, commercial use): https://gsap.com/community/standard-license/

## Open questions / decide later
- Single-page vs multi-section portfolio layout
- Deployment target (Vercel/Netlify are natural fits for a React app)
- How many distinct 3D objects/scenes for the final piece
