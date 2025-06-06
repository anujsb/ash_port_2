"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { Particles } from "./magicui/particles";
import { RainbowButton } from "./magicui/rainbow-button";
// import { useTheme } from "next-themes";

const Hero = () => {
    // const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");
   
    useEffect(() => {
      setColor("#ffffff");
    }, []);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="flex flex-row items-center justify-center px-20 w-full z-[20]">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto capitalize">
            <span>
              Hi
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                I'm Ashlesha <br />
              </span>
              Full stack developer
            </span>
          </div>

          <p className="text-lg text-gray-400 my-5 max-w-[600px]">
            {/* I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills. */}
            {/* <ul>
              <li>E- portfolios</li>
              <li>Web apps</li>
            </ul> */}
          </p>
          <Link href="https://drive.google.com/file/d/1N7vrSYb3-iQK48KiMzDgO33CZpBGoH_g/view?usp=sharing">
            <RainbowButton className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              Resume.
            </RainbowButton>
          </Link>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            className="pt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
