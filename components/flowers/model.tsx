'use client'

import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


export function Model({ modelPath }: { modelPath: string }) {
  const gltf = useGLTF(`/models/${modelPath}/scene.gltf`);
  const groupRef = useRef<THREE.Group>(null);
  const { clock } = useThree();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(0, 0, 0);
    }

    if (!gltf.scene) {
      setError('GLTF model does not have a scene');
    }
  }, [gltf]);

  useFrame(() => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      const scale = Math.min(1, t / 2);
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  if (error) {
    return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="red" /></mesh>
  }

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
}