import dynamic from "next/dynamic";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { social } from "../context/libdata";
const ButtonEffect = dynamic(() => import("../button/ButtonEffect"));
import Image from "next/image";


const Footer = () => {
  return (
    <div className="w-full  h-[80vh] lg:h-[70vh]  flex items-center justify-center">
        <div className="m-3 w-[98%] h-[90%] glass flex flex-col items-center justify-around rounded-md">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full p-3 sm:p-4">
                
                <div className="flex-1 p-2 w-full h-full">
                    <div className=" flex justify-center items-center">
                        <Image
                            src="/assets/Logo/logo-2.png"  
                            width={100}
                            height={30}
                            alt="Harakat  Logo"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col flex-1 gap-2">
                        <h3 className="text-2xl text-text capitalize tracking-widest mb-2 font-bold text-center lg:text-start">contact</h3>
                        <div className="flex items-center gap-1">
                            <ImWhatsapp  style={{color: '#fff'}}/>
                            <span className="text-text"> : </span>
                            <p className="text-[#ffffffa9]">+971 566 330 300</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <HiOutlineMail  style={{color: '#fff'}}/>
                            <span className="text-text"> : </span>
                            <p className="text-[#ffffffa9] w-fit">info@harakat-ae.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 lg:self-start mt-[1px]">

                    <div className="flex flex-col">
                        <h3 className="text-2xl text-text capitalize tracking-widest mb-4 font-bold text-center lg:text-start">social media</h3>
                        <div className="flex items-center gap-2">
                        {
                            social.map((ele) => (
                                <ButtonEffect target={'_blank'} padding={true} path={ele.link} key={ele.id} outline={true} >{ele.icon}</ButtonEffect>
                            ))
                        }
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-around border-t p-1 sm:p-4 border-t-pramiry">
                <div className="text-sm sm:text-base text-[#ffffffad] ">
                   &copy;2024 Harakat-ae.com
                </div>

                <div className="text-sm sm:text-base text-[#ffffffad] ">
                     Harakat Marketing Management L.L.C
                </div>

                <div className="text-base text-[#ffffffad] hidden lg:block">
                    Business Bay Dubai
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer