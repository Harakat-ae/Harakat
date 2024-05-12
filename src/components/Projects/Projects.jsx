import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../context/libdata"
import "./Projects.css";

const Projects = () => {
  return (
    <>
        <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-6 gap-y-4  w-[90%] lg:w-full p-4 my-20 lg:my-24">
            
            {
                projectsData.map((ele) => (
                    
                    <div key={ele.id} className={`w-full h-[120vh]  ${ele.id == 2 || ele.id == 5 ? 'lg:-translate-y-[15%]' : ''} ${ele.id == 2 &&' md:translate-y-1/2'} ${ele.id == 4 || ele.id == 6 ? 'md:translate-y-1/2 lg:translate-y-0' : ''}`}>
                
                        <div className={`flex flex-col items-center justify-around glass w-full h-full rounded-xl p-2 overflow-hidden`}>
                            <div className="w-full flex items-center justify-around p-4">
                                <div className="flex flex-col gap-1 flex-1">
                                    <h3 className="text-text text-lg md:text-2xl capitalize">{ele.nameAygnce}</h3>
                                    <p className="text-[#8a8a8a] text-sm md:text-base">{ele.nameLogo}</p>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <Link href={'/projects'} className="btn-donate">
                                        show more
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full h-full rounded-xl relative overflow-hidden group">
                                <video autoPlay loop muted  className="object-cover overflow-hidden rounded-xl w-full h-full absolute top-0 left-0">
                                    <source src={ele.video} type="video/mp4" />
                                </video>
                                <Image width={290} height={625} src={ele.img} alt={ele.logo} className="w-full h-full group-hover:opacity-0 object-cover overflow-hidden object-center rounded-xl absolute top-0 left-0 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                
                ))
            }
        </div>
        <div className="md:h-[350px] lg:h-0"></div>
    </>
  )
}

export default Projects