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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img // TODO: replace later for Image components
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="profile-pic.png"
        alt="My profile picture"
      />

      <div className="z-20">
        <h1 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h1>
        <h2 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#9AFF7980" />
        </h2>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;