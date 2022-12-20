import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill } from "../types";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -75 : 75,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-slate-400"
        alt={skill.title}
      />
    </div>
  );
}

export default Skill;
