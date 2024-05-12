"use client"

// import dynamic from "next/dynamic";
import { OrbitControls, SpotLight, Text, useGLTF, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";
// import * as THREE from "three";
// import { GLTF } from "three-stdlib";


export default function Harakat3D({props}) {

    const logoRef = useRef();
    const direcictionLight = useRef();
    const spotLightRef = useRef();
    const pointLight2Ref = useRef();
    const pointLight3Ref = useRef();
    const directionalLightRef = useRef();
    const { nodes , materials } = useGLTF("logo.gltf");

    // console.log(nodes);
    // console.log(materials);

    // useEffect(() => {
    //   logoRef.current.rotate.x = 
    // } ,[])

    useFrame((state, drei) => {
      if(!logoRef.current)return
      logoRef.current.rotation.x += 0.01;
      logoRef.current.rotation.y += 0.01;
      logoRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.1;
      // logoRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0.11;
      // logoRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0;
    });

    // const { intensity, x , y , z , width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 50 }, x:{value: 0, min: -20, max: 20}, y:{value: 0, min: -20, max: 20}, z:{value: 0, min: -20, max: 20}, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });

    // useHelper(directionalLightRef, DirectionalLightHelper , 1, '#f0f');
    // useHelper(direcictionLight, DirectionalLightHelper , 1, '#f3f');
    // useHelper(spotLightRef, SpotLightHelper, 2, '#00f');
    // useHelper(pointLight3Ref, PointLightHelper, 1, '#f0f');
    // useHelper(pointLight2Ref, PointLightHelper, 1, '#00f');


  return (
    <>
      <directionalLight ref={directionalLightRef} position={[-4.5, 0, 2]} intensity={1} color={"#ce372e"}/>
      <directionalLight  ref={direcictionLight} position={[3.5, 0, 1]} intensity={1.5} color={"#ce372e"}/>
      <spotLight ref={spotLightRef} position={[-4.4, 1.7, 2.4]} angle={3} color={"#ce372e"} intensity={25} />
        <pointLight ref={pointLight2Ref} position={[-0.4 , 0, 3.5]} intensity={15} color={"#ce372e"}  />
        <pointLight ref={pointLight3Ref} position={[4.5 , 3.5, 0]} intensity={15} color={"#de0000"}  />
      <group {...props} dispose={null} scale={27} >
       <mesh ref={logoRef} 
        geometry={nodes.path1.geometry}
        material={materials.Material}
        rotation={[1.5,0,0]}
        />
        <OrbitControls enableZoom={false} /> 
      </group>
    </>
    
  );
}

useGLTF.preload("logo.gltf");
