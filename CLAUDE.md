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
Phase 1 complete: bare R3F scene with camera, lighting, orbit controls, and
one `.glb` model (Khronos "Duck" placeholder) loaded and continuously
spinning via `useFrame` in `src/Duck.jsx`.

## Roadmap
- [x] Phase 1 — Load & display: bare scene, one model rendering and spinning
- [ ] Phase 2 — Basic animation: introduce GSAP, animate rotation/position/
      scale, trigger on load/hover/click (replace the constant `useFrame`
      spin with GSAP-driven tweens)
- [ ] Phase 3 — Choreography: multiple objects, GSAP timelines, scroll-
      triggered animation (ScrollTrigger)
- [ ] Phase 4 — Portfolio page: section-based scroll reveals, hero 3D piece,
      transitions, responsive canvas, loading states, performance pass

## Project structure
```
src/
  main.jsx     # React entry point
  App.jsx      # Canvas, lighting, environment, orbit controls
  Duck.jsx     # Loads the .glb and animates it
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
