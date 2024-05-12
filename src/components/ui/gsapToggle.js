"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

export const gsapToggle = () =>{
    
    // const html = document.querySelector("html");

    // gsap.to("html" , {
    //     duration: 1,

    //     scrollTrigger: {
    //         trigger: ".toggle-gsap",
    //         start: 'top 90%',
    //         end: '140% 90%',
    //         onEnter() {
    //             html.classList.add('dark');
    //           },
    //           onLeave() {
    //             html.classList.remove('dark');
    //           },
    //           onEnterBack() {
    //             html.classList.add('dark');
    //           },
    //           onLeaveBack() {
    //             html.classList.remove('dark');
    //           }
    //       },

    //       ease: "power3.out"
    // })

}