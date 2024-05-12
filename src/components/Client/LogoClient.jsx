"use client"
import dynamic from "next/dynamic";
import Image from "next/image"
// import Slider from "react-slick"
const Slider = dynamic(() => import("react-slick"));

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LogoClient = ({dir, time, data}) => {

  const settings = {
    dots: false,
    infinity: true,
    pauseOnHover: false,
    variableWidth: false,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    speed: time,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    rtl: dir
  }

  return (
    <div className="w-full h-20  my-6 lg:my-10   relative">
        <Slider {...settings} className={`absolute top-1/2 -translate-y-1/2`} >
            {
                data.map((client) => (
                      <div key={client.id} className="mx-2 flex items-center justify-center">
                          <Image  width={240} height={75} alt={`client-${client.id}`}  src={client.url} className="object-cover" />
                      </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default LogoClient