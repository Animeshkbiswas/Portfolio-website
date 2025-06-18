
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
      <meshStandardMaterial color="#3b82f6" roughness={0.4} metalness={0.1} />
    </mesh>
  );
};

const FloatingText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
      <boxGeometry args={[0.8, 0.3, 0.1]} />
      <meshStandardMaterial color="#1f2937" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      <AnimatedSphere />
      <FloatingText text="ML" position={[-2.5, 1, 0]} />
      <FloatingText text="AI" position={[2.5, -1, 0]} />
      <FloatingText text="Dev" position={[0, 2.5, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Hero3D = () => {
  // Temporarily disable 3D functionality for stability
  return (
    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-4">Portfolio</div>
        <div className="text-muted-foreground">Modern Portfolio Website</div>
      </div>
    </div>
  );
};
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="rounded-lg"
        onCreated={(state) => {
          state.gl.setClearColor('#f8fafc', 0);
        }}
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
