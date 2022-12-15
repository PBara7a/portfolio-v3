import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center max-w-[2000px] h-screen justify-evenly mx-auto items-center space-y-5"
    >
      <h3 className="md:absolute md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div>
        <h4 className="uppercase mb-10 tracking-[3px] text-gray-500 text-sm">
          Those are my most used tools
        </h4>

        <div className="grid grid-cols-4 gap-5">
          {/* TODO: Replace placeholder content */}
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
          <Skill directionLeft={true} />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
