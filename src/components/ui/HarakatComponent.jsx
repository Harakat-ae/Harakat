"use client"
import dynamic from "next/dynamic"
import { useGSAP } from "@gsap/react"
const AeenWhite = dynamic(() => import("../svg/AeenWhite"));
const AlphWhite = dynamic(() => import("../svg/AlphWhite"));
const HaahWhite = dynamic(() => import("../svg/HaahWhite"));
const HarakaWhite = dynamic(() => import("../svg/HarakaWhite"));
const HhaaWhite = dynamic(() => import("../svg/HhaaWhite"));
const HmzahWhite = dynamic(() => import("../svg/HmzahWhite"));
const MeemWhite = dynamic(() => import("../svg/MeemWhite"));
const RaaWhite = dynamic(() => import("../svg/RaaWhite"));
const SahaeWhite = dynamic(() => import("../svg/SahaeWhite"));
const SbahWhite = dynamic(() => import("../svg/SbahWhite"));
const SenWhite = dynamic(() => import("../svg/SenWhite"));
const ShadaWhite = dynamic(() => import("../svg/ShadaWhite"));
const ShapWhite = dynamic(() => import("../svg/ShapWhite"));
const TanwenWhite = dynamic(() => import("../svg/TanwenWhite"));
const TwoDotWhite = dynamic(() => import("../svg/TwoDotWhite"));
import gsap from "gsap"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/all"

const HarakatComponent = ({fille}) => {

    // useEffect(() => {
    //     gsap.registerPlugin(useGSAP);
    //     gsap.registerPlugin(ScrollTrigger);
    // }, [])

    // useGSAP(() => {
    //     gsap.from(".gharakatSvg",{
    //         x: 100,
    //         duration: 3,
    //         scrollTrigger: {
    //             trigger: ".pernet-harakat",
    //             start: "top 50%",
    //             end: "center 50%",
    //             markers: {startColor: "#0f0", endColor: "#f00", fontSize: "18px", fontWeight: "bold", indent: 20},
    //             scrub: true
    //         },
    //         ease: "power3.out"
    //     })
    // } ,[])

    const AraaySvg = [<AeenWhite fill={fille} size={48} />, <AlphWhite fill={fille} size={48} />, <HmzahWhite fill={fille} size={48} />, <SenWhite fill={fille} size={48} />,<TwoDotWhite fill={fille} size={48} />, <TanwenWhite fill={fille} size={48} />, <ShadaWhite fill={fille} size={78} />, <RaaWhite fill={fille} size={48} />, <HaahWhite fill={fille} size={48} />, <HarakaWhite fill={fille} size={48} />, <HhaaWhite fill={fille} size={48} />,<MeemWhite fill={fille} size={48} />, <SahaeWhite fill={fille} size={48} />, <SbahWhite fill={fille} size={88} />, <ShapWhite fill={fille} size={48} />]

    return (
    <div className="w-full h-full relative pernet-harakat">
        {
            AraaySvg.map((ele , i) => (
                <div className={`g-harakat${i} gharakat ${i == 0 && 'absolute top-0 -left-6'} ${i == 1 && 'absolute top-12 left-1/2'} ${i == 2 && 'absolute top-36 right-1/4'} ${i == 3 && 'absolute top-1/2 right-10'} ${i == 4 && 'absolute top-1/3 left-1/3'} ${i == 5 && 'absolute bottom-1/3 left-1/3'} ${i == 6 && 'absolute bottom-1/3 right-1/4'} ${i == 7 && 'absolute bottom-1/4 left-[10%]'} ${i == 8 && 'absolute bottom-0 left-1/2'} ${i == 9 && 'absolute top-[15%] left-[25%]'} ${i == 10 && 'absolute top-1/2 -left-5'} ${i == 11 && 'absolute bottom-[5%] left-5'} ${i == 12 && 'absolute bottom-[5%] right-10'} ${i == 13 && 'absolute top-[5%] -right-10'} ${i == 14 && 'absolute top-[20%] left-5'}`} key={i}>
                    {ele}
                </div>
            ))
        }
    </div>
  )

}

export default HarakatComponent