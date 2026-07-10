# 3D Animation Portfolio — Phase 1

Bare React Three Fiber scene: camera, lighting, orbit controls, and one
free `.glb` model (the classic Khronos "Duck" test asset) loaded and spinning.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Drag to orbit the camera. The duck spins continuously — that rotation is
driven by `useFrame` in `src/Duck.jsx`, the simplest possible R3F animation.

## Project structure

```
src/
  main.jsx     # React entry point
  App.jsx      # Canvas, lighting, environment, orbit controls
  Duck.jsx     # Loads the .glb and spins it each frame
public/
  models/
    Duck.glb   # Swap this out for any other .glb
```

## Swapping in your own model

1. Drop a `.glb` file into `public/models/`
2. Update `MODEL_PATH` in `src/Duck.jsx`
3. You'll likely need to tweak `scale` and `position` in `App.jsx` —
   exported models come in wildly different real-world scales

Good sources: Sketchfab (filter: downloadable + free license), Kenney.nl
(CC0), or an AI-generated export from Meshy / Tripo AI.

## What's next (Phase 2)

GSAP is already installed but unused. Next step is replacing the
continuous `useFrame` spin with GSAP-driven, triggered animation —
e.g. a load-in animation, then rotation/position/scale tweens on
hover or click. GSAP integrates with R3F via the `@gsap/react`
`useGSAP()` hook (not yet installed) or by driving refs directly
inside `useEffect`.

## Notes

- `@react-three/drei`'s `<Environment preset="city">` fetches an HDRI
  from a CDN at runtime, so you'll need an internet connection when
  running the dev server (not required for local model loading itself).
- Built and verified with `npm run build` before handoff — should run
  as-is with `npm install && npm run dev`.
