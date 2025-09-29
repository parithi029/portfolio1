import { Suspense, use, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';  
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* CONSOLIDATED HEMISPHERE LIGHT */}
      <hemisphereLight
        intensity={2.5} // Increased intensity to compensate for removing 3 other lights
        groundColor="black"
      />

      {/* RETAINED POINT LIGHT */}
      <pointLight intensity={1} />

      {/* CONSOLIDATED SPOT LIGHT */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.20}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* The rest of your code remains the same... */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -2, -0.9] : [0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;