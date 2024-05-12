"use client"
import "./Banner.css"
import gsap from 'gsap'
import { CustomEase, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(CustomEase);

const Banner = () => {

    useGSAP(() => {
        gsap.from(".g-banner1", {
            x: 800,
            y: 900,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".g-banner",
                start: "0% 50%",
                end: "40% 50%",
            },
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,0.553 0.335,0.725 0.513,0.951 0.818,1.001 1,1 "),
        })

        gsap.from(".g-banner2", {
            x: 1100,
            y: -600,
            duration: 2.4,
            scrollTrigger: {
                trigger: ".g-banner",
                start: "0% 50%",
                end: "30% 50%",
            },
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,0.553 0.335,0.725 0.513,0.951 0.818,1.001 1,1 "),

        })

        gsap.from(".g-banner3", {
            x: 1100,
            y: -600,
            duration: 2.3,
            scrollTrigger: {
                trigger: ".g-banner",
                start: "0% 50%",
                end: "20% 50%",
            },
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,0.553 0.335,0.725 0.513,0.951 0.818,1.001 1,1 "),

        })

        gsap.from(".g-banner4", {
            x: -1200,
            y: 1000,
            duration: 2.6,
            scrollTrigger: {
                trigger: ".g-banner",
                start: "0% 50%",
                end: "55% 50%",
            },
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,0.553 0.335,0.725 0.513,0.951 0.818,1.001 1,1 "),

        })

        gsap.from(".g-banner5", {
            x: 1500,
            duration: 2,
            scrollTrigger: {
                trigger: ".g-banner",
                start: "0% 50%",
                end: "35% 50%",
            },
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,0.553 0.335,0.725 0.513,0.951 0.818,1.001 1,1 "),

        })

    } , [])

    const textBanner = [
        {
            id: 1,
            text: 'harakat',
            text2: 'agency',
            text3: 'Marketing',
            text4: 'Management'
        },
        {
            id: 2,
            text: 'brand identity',
            text2: 'graphic design',
            text3: 'web development',
            text4: 'social media'
        },
        {
            id: 3,
            text: 'harakat',
            text2: 'seo - sem',
            text3: 'seo - sem',
            text4: 'cgi'
        },
        {
            id: 4,
            text: 'telesales',
            text2: 'videography',
            text3: 'photography',
            text4: 'social media'
        },
        {
            id: 5,
            text: 'harakat',
            text2: 'agency',
            text3: 'Marketing',
            text4: 'Management'
        }
    ]

  return (
    <section className='w-full h-screen md:h-[150vh] overflow-hidden g-banner'>
        {
            textBanner.map((banner) =>(
                <div className={`banner-${banner.id} w-full flex  g-banner${banner.id}`} key={banner.id}>
                    <div className={`${banner.id === 5 && 'z-[5]'} text-[#000] text-[2em] md:text-[4em] shadow-2xl bg-[#fff] whitespace-nowrap uppercase banner1`}>
                        {banner.text} <span className='text-span'>{banner.text2} -</span>
                        {banner.text3} <span className='text-span'>{banner.text4} -</span>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Banner