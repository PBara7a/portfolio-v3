import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../types";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const { company, companyLogo, dateStarted, dateEnded, jobTitle, summaryPoints } = experience;

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] sm:h-[650px] sm:w-[800px] lg:h-[550px] md:max-w-[600px] xl:w-[900px] xl:max-h-[1000px] snap-center p-6 md:p-10 bg-[#292929] cursor-pointer overflow-auto">
      {/* TODO: Change to an Image component */}
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(companyLogo).url()}
        alt={company}
      />

      <div className="px-0 md:px-2">
        <h4 className="md:text-2xl md:font-light">{jobTitle}</h4>
        <h3 className="font-semibold text-xl md:text-2xl mt-1">{company}</h3>
        <div className="flex space-x-2 my-2">
          {/* TODO: show tech used by mapping referenced skills */}
        </div>
        <p className="uppercase mb-2 md:mb-5 text-gray-300">
          From: {dateStarted} To: {dateEnded}
        </p>

        <ul className="list-disc space-y-4 ml-4 md:ml-5 md:text-lg">
          {summaryPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
