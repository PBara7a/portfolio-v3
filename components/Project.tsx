import React from "react";
import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  description: string;
};

function Project({ image, title, description }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={image}
        alt={title}
        className="w-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">{title}</h4>
        <p className="text-lg text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}

export default Project;
