"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { haederData, social } from "../context/libdata"
const ButtonEffect = dynamic(() => import("../button/ButtonEffect"));

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const namePage = usePathname();

  return (

    <>
        <div className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <RiMenu3Line  style={{fontSize: '2.2rem' , zIndex: '52', color: '#fff'}}/>
        </div>

        <div className={`w-full h-screen absolute top-0 left-0 bg-[#b1332c] z-[900] transition-transform duration-300 ease-linear ${isActive ? 'translate-y-0' : '-translate-y-[120%]'}`}></div>
        <div className={`w-full h-screen absolute top-0 left-0 bg-[#8a2924] z-[899] transition-transform  ease-linear ${isActive ? 'translate-y-0 duration-200' : '-translate-y-[120%] duration-500'}`}></div>

        <div className={`w-full h-screen absolute top-0 left-0 bg-[#ce372e] flex flex-col justify-between p-4 z-[9999] transition-transform  ease-linear ${isActive ? 'translate-y-0 duration-500 ' : '-translate-y-[120%] duration-200'}`}>
        
            <div className="flex items-center justify-between w-full p-2">
                <div className="w-[100px] h-[30px] aspect-square flex justify-center items-center">
                        <Image
                            src="/assets/HARAKAT-white.png"  
                            width={100}
                            height={20}
                            alt="Harakat-Logo"
                            priority
                            className="object-cover"
                        />
                </div>

                <div className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <AiOutlineClose  style={{fontSize: '2.2rem' , zIndex: '51', color: '#fff'}}/>
                </div>

            </div>

            <div className="flex items-center justify-evenly w-full">
                <div className=" flex-1">
                    <ul className="flex flex-col items-center gap-1">
                        {haederData.map((item) => (
                            <li className="py-2 text-[#fff] overflow-hidden font-bold" key={item.id} onClick={() => setIsActive(!isActive)}>
                                <ButtonEffect path={item.link} size={'2xl'} active={namePage === item.link && true} >
                                 {item.title} 
                                </ButtonEffect>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

            <div className="flex flex-col gap-4 md:flex-row  items-center justify-between ">
                <div className="cursor-pointer hidden md:block group" onClick={() => setIsActive(!isActive)}>
                    <AiOutlineClose className="group-hover:rotate-180 transition-transform duration-500"  style={{fontSize: '3rem' , zIndex: '52', color: '#fff'}}/>
                </div>

                <div>
                    <ul className="flex flex-col items-center">
                        {
                            social.map((item) => (
                                <li key={item.id} className="text-[#fff] overflow-hidden">
                                    <ButtonEffect path={item.link} target={'_blank'} size={'lg'} flex={true}>{item.label} <BsArrowUpRight style={{color: '#fff'}} /></ButtonEffect>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg text-[#fff]">Harakat Marketing Management L.L.C</h2>
                    <p className="text-lg text-[#fff]">Dubai Business Bay</p>
                    <p className="text-lg text-[#fff]" >+971 566 330 300</p>
                </div>

                <div className="w-[40px] md:w-[70px] lg:w-[100px] h-[30px] flex justify-center relative items-center">
                    <Image
                        src="/assets/Logo/logo-2.png"  
                        width={100}
                        height={70}
                        alt="Harakat Logo"
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>

        </div>
    </>
  )
}

export default Nav