import Image from "next/image"
import "./menu.css"
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("./Nav"));




const Menu = () => {
  return (
    <header className="p-6  w-full flex flex-col items-center relative justify-between">
        <div className="flex items-center justify-between w-full p-2">
            <div className="w-[100px] h-[30px] flex justify-center items-center">
                    <Image
                        src="/assets/Logo.png"  
                        width="100"
                        height="100"
                        priority
                        alt="Harakat  Logo"
                        className="w-auto h-auto"
                        object-fit="cover"
                    />
            </div>

            <Nav />

        </div>
    </header>
  )
}

export default Menu