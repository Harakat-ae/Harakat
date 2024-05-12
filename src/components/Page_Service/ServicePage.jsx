import Image from "next/image"
import { servicePageData } from "../context/libdata"


const ServicePage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 p-4 my-20">
      {
        servicePageData.map((item) => (
          <div key={item.id} className={`p-2 flex  items-center glass justify-between rounded-xl relative ${item.id % 2 === 0 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
              <div className=" flex flex-col items-center md:mt-14 self-start gap-5 p-1">
                <h1 className="text-center text-2xl sm:text-4xl uppercase tracking-widest text-text font-bold">{item.name}</h1>
                <p className="text-lg text-[#aaaaaa] leading-6 w-[80%]">{item.desc}</p>
                <p className="text-base text-[#aaaaaa] leading-6 w-[80%]">{item.itemserv}</p>
                {/* <TanwenWhit /> */}
              </div>

              <div className="w-full flex items-center justify-center">
                <Image width={400} height={300} className="object-cover -translate-y-20 self-end" src={item.image} alt={item.name} />
              </div>
          </div>
        ))
      }
    </section>
  )
}

export default ServicePage