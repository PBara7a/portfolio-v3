import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../types";

type Props = {
  experience: Array<Experience>;
};

function WorkExperience({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-16 uppercase tracking-[4px] md:tracking-[20px] text-gray-500 text-2xl">
        Work Experience
      </h3>

      <div className="w-full flex lg:justify-center space-x-5 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#9AFF79]">
        {experience.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
