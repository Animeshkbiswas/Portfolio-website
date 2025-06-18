
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
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
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
};

const FloatingText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      color="#1f2937"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const Hero3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={() => setIsLoaded(true)}
        className="rounded-lg"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingText text="ML" position={[-2, 1, 0]} />
        <FloatingText text="AI" position={[2, -1, 0]} />
        <FloatingText text="Dev" position={[0, 2, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
          <div className="animate-pulse text-muted-foreground">Loading 3D Scene...</div>
        </div>
      )}
    </div>
  );
};

export default Hero3D;
