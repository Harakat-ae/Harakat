"use client"
import { MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva';
import { useRef } from "react"
import { DirectionalLightHelper, PointLightHelper, TextureLoader } from 'three';


const CanvasSphere = () => {
  
  const [normalMap , colorMap] =  useLoader(TextureLoader, ['/assets/textureMap/NormalMap.png', '/assets/textureMap/colorMap.png']);

  const meshRef = useRef();
  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const pointLight2Ref =  useRef();
  const pointLight3Ref = useRef();
  const pointLight4Ref = useRef();


  // const { intensity, x , width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 30 }, x:{value: 0, min: -20, max: 20}, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
  // useHelper(directionalLightRef, DirectionalLightHelper, 1, '#f0f');
  // useHelper(pointLightRef, PointLightHelper, 1, '#ff0');
  // useHelper(pointLight2Ref, PointLightHelper, 1, '#0ff');
  // useHelper(pointLight3Ref, PointLightHelper, 1, '#8cf');
  // useHelper(pointLight4Ref, PointLightHelper, 1, '#2cf');

  useFrame((state, drei) => {
    if(!meshRef.current)return

    meshRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5;
    pointLight2Ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4;
    pointLightRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    // pointLight2Ref.current.rotation.x += 0.01;
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // meshRef.current.rotation.y += 0.01
  });

  return (
    <>
      <directionalLight ref={directionalLightRef} position={[-3.5, 0, 2]} intensity={8} color={"#fff"}/>
      {/* <directionalLight color="#fff" position={[-3, -4, 4]} intensity={3} /> */}
      {/* <ambientLight  /> */}
      {/* <directionalLight color="#ce372e" position={[2, -1, -1]} /> */}
        {/* <pointLight position={[2, 3, 5]} intensity={25} color={'#fff'}  /> */}
        <pointLight ref={pointLight4Ref} position={[0, -3, 1]} intensity={30} color={"#fff"}  />
      <mesh ref={meshRef}  className={"mix-blend-multiply"}>
        <pointLight ref={pointLightRef} position={[-2, 1, 1]} intensity={28} color={"#ce372e"}  />
        {/* <pointLight ref={pointLight3Ref}   position={[-4, 0, 1]} intensity={28} color={"#ce602c"}  /> */}
        <pointLight ref={pointLight2Ref} position={[2, -2, 0.8]} intensity={29} color={"#ce602c"}  />
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial normalMap={normalMap} roughness={0.3} metalness={0.7} color={"#000"} />
      <OrbitControls />
      </mesh>
    </>
  )
}

export default CanvasSphere