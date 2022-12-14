import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20">
        // TODO: Add horizontal scrolling buttons // TODO: Replace placeholder
        content
        {projects.map((_, i) => (
          <Project
            key={i}
            image="https://png2.cleanpng.com/sh/4e923f7694af10433df16ef417e63081/L0KzQYm3VMAzN6FoiZH0aYP2gLBuTflxaZUyhdt3aT3wcbTpjB9sNaF3h592b3PuhcG0if1ia15yh9V0dYCwRbLqUfMyQGFnUdgDOECxRIO7Vsc1Pmc2TaQ7NkS6RIO7V8YyP191htk=/kisspng-ipad-mini-macbook-pro-mockup-imac-mockup-5ac1c180b9f880.4246746615226474247617.png"
            title={`Project ${i + 1}`}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#9AFF7922] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
