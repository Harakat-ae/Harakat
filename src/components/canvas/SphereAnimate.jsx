"use client"
import { MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva';
import { useRef } from "react"
import { DirectionalLightHelper, PointLightHelper, TextureLoader } from 'three';


const SphereAnimate = () => {
  

  const meshRef = useRef();
  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const pointLight2Ref =  useRef();
  const pointLight3Ref = useRef();
  const pointLight4Ref = useRef();


  // const { intensity, x , width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 30 }, x:{value: 0, min: -20, max: 20}, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
//   useHelper(directionalLightRef, DirectionalLightHelper, 1, '#f0f');
//   useHelper(pointLightRef, PointLightHelper, 1, '#ff0');
//   useHelper(pointLight2Ref, PointLightHelper, 1, '#0ff');
//   useHelper(pointLight3Ref, PointLightHelper, 1, '#8cf');
//   useHelper(pointLight4Ref, PointLightHelper, 1, '#2cf');

  useFrame((state, drei) => {
    if(!meshRef.current)return

    meshRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4;
    // pointLight2Ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4;
    // pointLightRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    // pointLight2Ref.current.rotation.x += 0.01;
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    // meshRef.current.rotation.y += 0.01
  });

  return (
    <>
      <directionalLight ref={directionalLightRef} position={[-3.5, 0, 2]} intensity={0.7} color={"#fff"} />
      {/* <directionalLight color="#fff" position={[-3, -4, 4]} intensity={3} /> */}
      {/* <ambientLight  /> */}
      {/* <directionalLight color="#ce372e" position={[2, -1, -1]} /> */}
        {/* <pointLight position={[2, 3, 5]} intensity={25} color={'#fff'}  /> */}
        <mesh ref={meshRef}  className={"mix-blend-multiply"}>
        <pointLight ref={pointLight4Ref} position={[2, 4, 1]} intensity={30} color={"#f0f"}  />
        <pointLight ref={pointLightRef} position={[-3, 1, 1]} intensity={31} color={"#ce602c"}  />
        <pointLight ref={pointLight3Ref}   position={[4, 0, 1]} intensity={33} color={"#ce372e"}  />
        <pointLight ref={pointLight2Ref} position={[0, -3.5, 0.8]} intensity={29} color={"#ce372e"}  />
        <sphereGeometry args={[2, 64, 64]} />
        {/* <MeshWobbleMaterial factor={45} speed={2} roughness={0}  /> */}
        <MeshDistortMaterial
            attach="material"
            distort={0.8} // Strength, 0 disables the effect (default=1)
            speed={6} // Speed (default=1)
            roughness={0}
    />
      <OrbitControls  enableZoom={false} />
      </mesh>
    </>
  )
}

export default SphereAnimate