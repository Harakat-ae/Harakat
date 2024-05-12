"use client"

import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";

const TorusKnot = () => {
  
    const meshRef = useRef();
    const directionalLightRef = useRef();
    const pointLightRef = useRef();
    const pointLight2Ref =  useRef();
    const pointLight3Ref = useRef();
  
  
    // const { intensity, x , width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 30 }, x:{value: 0, min: -20, max: 20}, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
    // useHelper(directionalLightRef, DirectionalLightHelper, 1, '#f0f');
    // useHelper(pointLightRef, PointLightHelper, 1, '#ff0');
    // useHelper(pointLight2Ref, PointLightHelper, 1, '#0ff');
    // useHelper(pointLight3Ref, PointLightHelper, 1, '#8cf');
  
    useFrame((state, drei) => {
      if(!meshRef.current)return
  
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4;
    });
  
    return (
      <>
        <directionalLight ref={directionalLightRef} position={[-3.5, 0, 2]} intensity={0.5} color={"#fff"}/>
        <directionalLight position={[3.5, 0, 2]} intensity={0.5} color={"#fff"}/>
        <mesh ref={meshRef}  className={"mix-blend-multiply"}>
          <pointLight ref={pointLightRef} position={[2, 4, 1]} intensity={30} color={"#ce372e"}  />
          <pointLight ref={pointLight3Ref}   position={[-4, 0, 1]} intensity={28} color={"#ce602c"}  />
          <pointLight ref={pointLight2Ref} position={[2, -4, 0.8]} intensity={29} color={"#f0f"}  />
          <torusGeometry args={[0.5, 2, 200]} />
          <MeshWobbleMaterial factor={1} speed={3} color={"lightblue"} />
        {/* <OrbitControls /> */}
        </mesh>
      </>
    )
}

export default TorusKnot