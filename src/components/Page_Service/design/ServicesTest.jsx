"use client"
// import Slider from 'react-slick'
const Slider = dynamic(() => import('react-slick'));
import "./Services.css"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import "./ServicesTest.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { serviceData } from '../../context/libdata'


const ServicesTest = () => {

    const sliderSettings = {
        dots: false,
        pauseOnHover: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      }

  return (
    <div className='w-full h-screen my-4'>
        <Slider {...sliderSettings}>
            {
            serviceData.map((service) => (
                <div key={service.id} className={`relative self-center h-[450px] rounded-xl glass bg-clip-border text-bg shadow-md select-none group`}>

                    <div className="relative mx-4 -mt-6 transition-all h-40 overflow-hidden rounded-xl bg-clip-border shadow-3xl">
                        <Image width={390} height={160} src={service.igm} alt={service.nameSer} className='object-cover w-full h-full' />
                    </div>

                    <div className="p-4">

                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-text antialiased">
                            {service.nameSer}
                        </h5>

                        <p className="block font-sans text-sm font-light leading-relaxed text-[#e9e9e9] antialiased">
                            {service.desc} 
                        </p>

                    </div>

                    <div className="p-4 pt-0 w-full absolute bottom-1 flex items-center justify-between">
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
        </Slider>
    </div>
  )
}

export default ServicesTest