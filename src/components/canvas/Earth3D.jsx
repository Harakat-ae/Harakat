"use client"
// import dynamic from 'next/dynamic';
import { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export default function Earth3D() {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('erth.glb');

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  })

  
  return (
    <>
      <ambientLight />
      {/* <mesh position={[0,0,2]}>
          <circleGeometry args={[1.8, 32]} />
          <MeshTransmissionMaterial 
            {...materialProps}
          />
        </mesh> */}
      <group dispose={null} scale={2} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        material={materials.Material}
        position={[0.641, 0.458, -0.863]}
        rotation={[0.469, -0.557, -0.47]}
        scale={[1.404, 1.404, 1.321]}
      />
        <OrbitControls enableZoom={false} />
      </group>
    </>
  )
}

useGLTF.preload('erth.glb')