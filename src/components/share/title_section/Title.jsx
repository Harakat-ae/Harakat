"use client"
import { useEffect, useRef } from "react";
import "./title.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Title = ({text}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  } , []);

  const refDiv = useRef();

    useGSAP(() => {
      gsap.from(`.g-${text}-title`, {
        y: 250,
        opacity: 0,
        scrollTrigger:{
          trigger: `.title-${text}`,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        }
      })

      gsap.from(`.g-text-image-1${text}`,{
        x: -700,
        scrollTrigger:{
          trigger: `.title-${text}`,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        }
      })

      gsap.from(`.g-text-image-2${text}`,{
        x: 700,
        scrollTrigger:{
          trigger: `.title-${text}`,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        }
      })



    }, [])

  return (
    
    <div className={`w-full relative my-10 overflow-hidden title-${text}`}>
        <div className="flex items-center justify-center gap-4">
        <div className="">
                <div className={`w-full h-full overflow-hidden rounded-3xl g-text-image-1${text}`}>
                  <img src="/assets/harakat/harakat-white.png" alt="harakat-white" className="object-cover rotate-180" />
                </div>
            </div>
            <div className={`font-bold text-3xl text-[#ce372e] lg:text-5xl uppercase tracking-[5px] g-${text}-title`}>
                {text}
            </div>
            <div className="">
                <div className={`w-full h-full overflow-hidden rounded-3xl g-text-image-2${text}`}>
                  <img src="/assets/harakat/harakat-white.png" alt="harakat-white" className="object-cover" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Title