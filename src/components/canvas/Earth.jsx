import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  const earthRef = useRef()

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005 // Adjust speed as needed
    }
  })

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{position: [20, 3, 5], fov: 20}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default EarthCanvas
// filepath: d:\personal files\portfolio\portfolio website\src\components\canvas\Earth.jsx