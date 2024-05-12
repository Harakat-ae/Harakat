"use client"
import dynamic from "next/dynamic";
import { Tajawal } from "next/font/google";
import { usePathname } from "next/navigation";
import "./Hero.css"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Harakat3D = dynamic(() => import("../canvas/Harakat3D"));



const tektur = Tajawal({
  weight: ['400','500', '700', '800'], 
  subsets: ["latin"] 
});

const Hero = () => {

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  } ,[])

    useGSAP(() => {

      // gsap.to(".g-span",{
      //   y: 0,
      //   opacity: 1,
      //   stagger: 0.2,
      //   duration: 0.5,
      // })

      // gsap.to(".title-opactiy",{
      //   y: 0,
      //   opacity: 0,
      //   stagger: 0.2,
      //   duration: 0.5,
      // })
    } , [])
  

  const nameLandingPage = usePathname();

  return (
    <div className="w-full h-hero relative  left-0 ">
      <Canvas className="">
        {/* <CanvasSphere /> */}
        {/* <SphereAnimate /> */}
        {/* <TorusKnot /> */}
        <Harakat3D />
      </Canvas>
        <div className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <h1 className={`g-text `}>
              {
              nameLandingPage === "/" ? "Think-Marketing-With-Harakat".split("").map((ele,i) => (
                <span key={i} className={`${ele == '-' ? 'title-opactiy' : 'g-span'} select-none text-[5vw] font-bold uppercase opacity-0 inline-block translate-y-full`}>{ele}</span>
            )): 
                nameLandingPage.slice(1).split("").map((ele,i) => (
                <span key={i} className="text-[19vw] harkat uppercase opacity-0 inline-block translate-y-full g-span g-span">{ele}</span>
            ))}
            </h1> */}
        </div>
    </div>
  )
} 

export default Hero