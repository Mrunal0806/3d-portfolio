import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import React from 'react'
import skyScene from '../assets_3d_portfolio/assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    useFrame((_, delta) => {
        skyRef.current.rotation.y += 0.15* delta;
    });
  return (
    <mesh ref = {skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky