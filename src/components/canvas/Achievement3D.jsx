"use client"
// import dynamic from "next/dynamic";

import { MeshTransmissionMaterial, OrbitControls, useEnvironment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Text, Environment  } from "@react-three/drei";
import { useControls } from "leva";


const  AchievementThree = () => {

  const { viewport } = useThree()

  const meshRef = useRef();
  // const materialProps = useControls({ thickness: { value: 0.1, min: 0, max: 3 }, metalness: { value: 0.1, min: 0, max: 1 }, roughness:{value: 0.2, min: 0, max: 1}, transmission: { value: 0.2, min: 0, max: 1 }, ior: { value: 0.1, min: 0, max: 3 }, chromaticAberration: {value: 0.1, min: 0, max: 1}, backside : true} );

    const envMap = useEnvironment({files: 'noord_4k.hdr'})

    useFrame((state, drei) => {
      if(!meshRef.current)return
  
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
    });
  
    return (
      <>
      <Suspense fallback={null}>
        <Environment map={envMap} />
      </Suspense>
        <Text position={[0, 4, -22]} fontSize={6} color={'#ce372e'}>
          HARAKAT
        </Text>
        <mesh ref={meshRef} position={[0,2,-20]}>
          <torusGeometry args={[10, 3, 32, 100]} />
          <MeshTransmissionMaterial 
            thickness={1.39} 
            roughness={0} 
            transmission={1} 
            ior={1.57} 
            chromaticAberration={0}
            backside={false}
          />
        </mesh>
      </>
    )
}

export default AchievementThree