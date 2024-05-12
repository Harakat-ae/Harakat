import Link from "next/link";
import { projectsData } from "../context/libdata"
import Image from "next/image";


const ProjectsPage = () => {
  return (
    <section className="flex flex-col gap-16 w-full p-8">
        {projectsData.map((ele) => (
            <div className={`flex flex-col ${ele.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[190vh] md:min-h-[90vh] overflow-hidden`} key={ele.id}>
            
                <div className="flex-1 relative overflow-hidden w-full">
                    <div className="w-[60%] absolute top-0 right-0 z-[81]">
                        <video autoPlay loop muted  className="object-cover w-full h-[90vh]">
                            <source src={ele.video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute top-4 left-0 lg:left-5 z-[80] hover:z-[82] transition-all duration-500 shadow-2xl">
                        <Image width={290} height={625}  src={ele.img} alt={ele.logo} className="object-cover overflow-hidden object-center" />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-8 h-full relative self-center w-full">

                    <div className="absolute top-[20%] md:-top-[20%] right-[5%]">
                        {ele.icon}
                    </div>
                    <div className="absolute top-[12%] md:-top-[12%] left-[6%]">
                        {ele.icon2}
                    </div>
                    <div className="absolute bottom-[13%] md:-bottom-[13%] left-[4%]">
                        {ele.icon3}
                    </div>
                    <div className="absolute bottom-[18%] md:-bottom-[18%] right-[7%]">
                        {ele.icon4}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-3xl font-bold z-40 uppercase">{ele.nameAygnce}</h1>
                        <p className="text-lg capitalize">{ele.nameLogo}</p>
                    </div>

                    <div className="">

                       <Link href={'#'} className={`block relative group overflow-hidden border-2 px-8 py-2 border-[${ele.color}]`}>
                            <span className={`font-bold text-white text-xl relative z-10 group-hover:text-[${ele.color}] duration-500`}>See More</span>
                            <span className={`absolute top-0 left-0 w-full bg-[${ele.color}] duration-500 group-hover:-translate-x-full h-full`}></span>
                            <span className={`absolute top-0 left-0 w-full bg-[${ele.color}] duration-500 group-hover:translate-x-full h-full`}></span>
  
                            <span className={`absolute top-0 left-0 w-full bg-[${ele.color}] duration-500 delay-300 group-hover:-translate-y-full h-full`}></span>
                            <span className={`absolute delay-300 top-0 left-0 w-full bg-[${ele.color}] duration-500 group-hover:translate-y-full h-full`}></span>
                        </Link>
                        
                    </div>
                </div>

            </div>
        ))}
    </section>
  )
}

export default ProjectsPage