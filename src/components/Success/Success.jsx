"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { Tektur } from "next/font/google";
const Section = dynamic(() => import("../share/section"));
import "./success.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
const HarakatComponent = dynamic(() => import("../ui/HarakatComponent"));


const tektur = Tektur({
    weight: ['400','700', '900'], 
    subsets: ["latin"] 
});

const Success = () => {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useGSAP(() => {
        gsap.from(".heading-scc", {
            y: 40,
            rotateX: 90,
            opacity:0,
            duration: 1,
            stagger:0.3,
            scrollTrigger: {
                trigger: ".success",
                start: "top 40%",
                end: "40% 40%",
                scrub: true,
            },
            ease: "power3.out"
        });

        gsap.from(".g-num", {
            x: -150, 
            opacity:0,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".success",
                start: "top 60%",
                end: "70% 60%",
                scrub: true,
            },
            ease: "bounce.out"
        });

        gsap.from(".g-value", {
            x: 50,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: ".success",
                start: "top 60%",
                end: "70% 60%",
                scrub: true,
                // markers: {startColor: "#0f0", endColor: "#f00", fontSize: "18px", fontWeight: "bold", indent: 20}
            },
            
            ease: "bounce.out"
        });

        gsap.from(".g-simg", {
            y: 100,
            opacity:0,
            rotateX: 90,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".success",
                start: "top 60%",
                end: "70% 60%",
                scrub: true,
                // markers: {startColor: "#0f0", endColor: "#f00", fontSize: "18px", fontWeight: "bold", indent: 20}
            },
            
            ease: "power3.out"
        });

    

    } ,[])

  return (
    <section className={`my-[7rem] relative toggle-gsap w-full p-2 md:p-4`}>
        <div className="w-full h-full absolute top-0 left-0"><HarakatComponent fille={'#ce372e'}/></div>
        <div className="flex flex-col lg:flex-row w-full success">
            <div className="flex-1 p-5">
                <h1 className="heading-scc text-4xl  dark:text-black uppercase mb-5 font-bold g-test">Our Success Journey</h1>
                <p className="heading-scc text-lg  dark:text-[#242424] max-w-[25rem] font-bold ">We Started in Istanbul in 2019 ,and we expanded our influence to Dubai in 2022 ,Collaborating with more than</p>
                <div className="flex items-center gap-2 justify-around p-4 lg:p-8 my-5">
                    <h2 className={`text-[#ce372e] text-[5rem] md:text-[7rem] font-bold digit-font g-num ${tektur.className}`}>130</h2>
                    <p className="text-lg md:text-xl dark:text-[#242424] capitalize g-value">Valuable Partners Worldwide.</p>
                </div>
            </div>
            <div className={`flex-1  backdrop-blur bg-[#ffffff10] g-simg relative w-full h-[80%] p-6 overflow-hidden `}>
                <div className="animationr"></div>
                <div className="w-full">
                    <Image width={600} height={300} className="w-full  object-cover hover:scale-150 hover:-rotate-[8deg] transition-all duration-200 " src="/assets/success.jpg" alt="success image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Success