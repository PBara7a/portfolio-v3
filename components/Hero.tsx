import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: ["Welcome", "I'm Barata", "Fullstack dev"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img // TODO: replace later for Image components
        className="absolute bottom-[43%] rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover"
        src="profile-pic.png"
        alt="My profile picture"
      />

      <div className="z-20 absolute top-[54%] md:top-[57%]">
        <h2 className="text-xs md:text-lg uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#9AFF7980" />
        </h1>

        <div className="pt-5 mt-6 md:mt-0">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
