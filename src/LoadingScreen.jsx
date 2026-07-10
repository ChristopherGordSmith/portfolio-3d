import { useProgress } from '@react-three/drei'

// useProgress reads a global loading-manager state that every useGLTF/
// useTexture call reports into — it works outside the Canvas/Suspense
// boundary, which is exactly where this needs to render (as a plain DOM
// overlay, not 3D content).
export default function LoadingScreen() {
  const { active, progress } = useProgress()

  return (
    <div className={`loading-screen ${active ? '' : 'loading-screen--hidden'}`}>
      <div className="loading-bar-track">
        <div className="loading-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
