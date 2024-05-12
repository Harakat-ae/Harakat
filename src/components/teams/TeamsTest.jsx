"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
// import Slider from 'react-slick'
const Slider = dynamic(() => import('react-slick'));

import "./TeamsTest.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TeamsTest = ({team, ltr}) => {

    const sliderTeamsSettings = {
        dots: false,
        pauseOnHover: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        cssEase: "linear",
        rtl: ltr,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      }

  return (
    <div className="w-full my-10 teams-slider">
        <Slider {...sliderTeamsSettings}>

        {
          team.map((team) => (
              <div className="w-52 p-2 glass rounded-2xl flex flex-col items-center  gap-2 card-team relative group" key={team.id}>
            <div className="w-full h-48 overflow-hidden rounded-xl gradient">
              <Image width={190} height={190} src={team.img} alt={`teams-harakat-${team.name}`} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-xl capitalize text-center">{team.name}</h2>
              <h3 className="text-[12px] text-[#d6d5d5] capitalize text-center">{team.position}</h3>
            </div>
          
            <div className="absolute -top-4 right-0 w-10 h-10 rotate-12 overflow-hidden">
              <Image width={40} height={40} src={`/assets/Logo/logo-${team.logo}.png`} alt="logo team" className="object-cover w-full h-full" />
            </div>
 
            {team.img2 &&
              <div className="w-48 h-80 absolute bottom-0 left-1/2 overflow-hidden transition-all duration-[350ms] opacity-0 -translate-x-1/2 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                <Image width={200} height={300} src={team.img2} alt={team.name} className="object-cover w-full h-full" />
              </div>
            }
          </div>

            ))
        }
    </Slider>
    </div>
  )
}

export default TeamsTest