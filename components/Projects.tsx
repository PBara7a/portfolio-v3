import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./Project";
import { Project } from "../types";

type Props = {
  projects: Array<Project>;
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col text-left max-w-full justify-evenly mx-auto items-center space-y-5 z-0"
    >
      <h3 className="absolute top-20 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#9AFF79]">
        {/* TODO: Add horizontal scrolling buttons  */}
        {projects.map((project, i) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#9AFF7922] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
