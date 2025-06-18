
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" roughness={0.4} />
    </mesh>
  );
};

const FloatingText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
      <boxGeometry args={[0.5, 0.2, 0.1]} />
      <meshStandardMaterial color="#1f2937" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <FloatingText text="ML" position={[-2, 1, 0]} />
      <FloatingText text="AI" position={[2, -1, 0]} />
      <FloatingText text="Dev" position={[0, 2, 0]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const Hero3D = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-muted rounded-lg">
        <div className="text-center">
          <div className="text-muted-foreground mb-2">3D Scene Unavailable</div>
          <button 
            onClick={() => setHasError(false)}
            className="text-sm text-primary hover:underline"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="rounded-lg"
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
