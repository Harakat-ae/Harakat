import { serviceData } from '../../context/libdata'

import "./Services.css"
import Image from 'next/image'

const Servicesbub = () => {
  return (
    <div className='w-full p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 my-4'>
        {
                serviceData.map((service) => (
                        <div key={service.id} className={`relative self-center flex h-[450px] flex-col rounded-xl glass bg-clip-border text-bg shadow-md select-none group`}>

                            <div className="relative mx-4 -mt-6 transition-all h-40 overflow-hidden rounded-xl bg-clip-border shadow-3xl">
                                <Image width={390} height={160} src={service.igm} alt={service.nameSer} className='object-cover w-full' />
                            </div>

                            <div className="p-6">

                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-text antialiased">
                                    {service.nameSer}
                                </h5>

                                <p className="block font-sans text-base font-light leading-relaxed text-[#e9e9e9] antialiased">
                                    {service.desc} 
                                </p>

                            </div>

                            <div className="p-6 pt-0 w-full absolute bottom-1 flex items-center justify-between">
                                <button data-ripple-light="true" type="button"  >
                                Read More
                                </button>

                                <div className='w-14 h-14 p-1 bg-secondary shap flex items-center justify-center'>
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                ))
            }
    </div>
  )
}

export default Servicesbub