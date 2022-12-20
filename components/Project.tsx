import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types";
import { urlFor } from "../sanity";
import Skill from "./Skill";

type Props = {
  project: Project;
};

function Project({ project }: Props) {
  const { title, image, linkToBuild, summary, technologies } = project;

  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <a href={linkToBuild} target="_blank">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={urlFor(image).url()}
          alt={title}
          className="w-[500px]"
        />
      </a>

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">{title}</h4>
        <p className="text-lg text-center md:text-left">{summary}</p>
        {/* TODO: show tech used by mapping referenced skills */}
      </div>
    </div>
  );
}

export default Project;
