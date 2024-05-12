"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"
import { useEffect, useLayoutEffect } from "react";

const RegisterComponent = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return null;
};

export default RegisterComponent;