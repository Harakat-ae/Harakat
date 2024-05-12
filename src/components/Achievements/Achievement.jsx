"use client"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { achievementsData } from "../context/libdata"
import "./Achievements.css"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"
import { Canvas } from "@react-three/fiber"
// const { Canvas } = dynamic(() => import("@react-three/fiber"))
const AchievementThree = dynamic(() => import("../canvas/Achievement3D"))
import { Environment } from "@react-three/drei"
const HarakatComponent = dynamic(() => import("../ui/HarakatComponent"))


const Achievement = () => {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    } ,[])

    useGSAP(() => {
        gsap.from(".effect" , {
            x: 400,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.out"
        });

        gsap.from(".g-achi-more" , {
            y: 100,
            stagger: 0.2,
            rotateX: 360,
            opacity: 0,
            scrollTrigger: {
                trigger : ".achievement-section",
                start: "10% 60%",
                end: "40% 60%",
            }
        });

        gsap.from(".g-achnum",{
            y: 100,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger : ".achievement-section",
                start: "15% 60%",
                end: "60% 60%",
            }
        })

        gsap.from(".g-achnam",{
            x: 100,
            opacity: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger : ".achievement-section",
                start: "15% 60%",
                end: "60% 60%",
            }
        })
    } , [])

  return (
    <section className="achievement-section w-full min-h-screen relative flex flex-col lg:flex-row sm:p-6 my-10">
        <div className="w-full h-full absolute bottom-0 left-0"><HarakatComponent /></div>
        <div className="flex-1 flex flex-col items-start gap-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5 ">
                <div className="effect self-start lg:self-center"></div>
                <h2 className="text-3xl font-bold -tracking-tighter uppercase">Achievements</h2>
            </div>

            <h3 className="text-xl text-[#afafaf] lg:translate-x-[5rem]">{"More-Than".split("").map((ele, i) => (
                <span key={i} className={`g-achi-more inline-block ${ele == "-" && 'opacity-0'} `}>{ele}</span>    
            ))}</h3>
            
            {
                achievementsData.map((ach) => (
                    <div className="flex items-center gap-2 lg:translate-x-[5rem]" key={ach.id}>
                        <h4 className="text-5xl lg:text-6xl text-[#ce372e] font-medium g-achnum">{ach.achievementNum}</h4>
                        <p className="text-base md:text-xl text-[#919191] g-achnam">{ach.achievementNam}</p>
                    </div>
                ))
            }

            <div>          
            </div>
        </div>

        <div className="lg:flex-1 w-full h-screen ">
            <Canvas className="w-full h-full">
                <AchievementThree />
            </Canvas>
        </div>

    </section>
  )
}

export default Achievement