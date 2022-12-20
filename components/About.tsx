import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../types";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const { aboutImage, aboutTitle, aboutBody } = pageInfo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col items-center justify-evenly md:text-left max-w-7xl px-4 mx-auto"
    >
      <h3 className="md:absolute md:top-16 uppercase mb-10 md:mb-20 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly text-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={urlFor(aboutImage).url()}
          className=" md:mb-0 flex-shrink-1 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />

        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-[#e09000] text-4xl font-semibold">
            {aboutTitle}
          </h4>
          <p className="text-lg text-justify">{aboutBody}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
