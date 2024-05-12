"use client"
import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber"
const Earth3D = dynamic(() => import("../canvas/Earth3D"));
const Section = dynamic(() => import("../share/section"));

const Contact = () => {
  return ( 
    <Section>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 min-h-screen">

            <div className="lg:flex-1 h-[85vh] w-full sm:p-2">
                <Canvas className="w-full h-full">
                    <Earth3D />
                </Canvas>
            </div>

            <div className="flex-1 ">
                <form className="w-full flex flex-col items-center justify-around gap-8">
                    <div className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="full name" className="text-[#d6d6d6]">Full Name</label>
                        <input type="text" name="full name" id="full name" placeholder="Full Name" className="bg-transparent placeholder:text-[#666] p-2 border-b-[1px]   outline-none  w-[80vw] lg:w-full" />
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="Phone" className="text-[#d6d6d6]">Number Phone</label>
                        <input type="tel" name="Phone" id="Phone" placeholder="Number Phone" className="bg-transparent placeholder:text-[#666] p-2 border-b-[1px]  w-full  outline-none " />
                    </div>
                    

                    <div className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="Email" className="text-[#d6d6d6]">Email Addres</label>
                        <input type="email" name="Email" id="Email" placeholder="Email" className="bg-transparent placeholder:text-[#666] p-2 border-b-[1px]  w-full outline-none " />
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="full name" className="text-[#d6d6d6]">Full Name</label>
                        <textarea name="full name" id="full name"   placeholder="Full Name" className="resize-none bg-transparent placeholder:text-[#666] p-2 border-b-[1px]  w-full outline-none" />
                    </div>
                    
                </form>
            </div>

        </div>
    </Section>
  )
}

export default Contact