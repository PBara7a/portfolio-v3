import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="metal-slug.gif"
        className="-mb-40 md:mb-0 flex-shrink-1 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-[#e09000] text-4xl font-semibold">My background</h4>
        <p className="text-lg text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          illum dolore libero cumque rerum qui sint perspiciatis aperiam non
          veritatis dignissimos veniam, eligendi debitis vitae. Tempore,
          blanditiis exercitationem autem officia perspiciatis excepturi eaque
          ipsam soluta voluptates aliquid, neque architecto itaque officiis
          cupiditate, inventore nobis velit laboriosam aperiam id dicta.
          Sapiente in aut excepturi nostrum architecto voluptatem minima? Ut,
          dignissimos adipisci sit repellendus, at ducimus laborum veritatis
          doloribus ipsa velit id ipsum debitis mollitia deleniti, eaque
          suscipit similique reiciendis hic eum vitae magnam maiores. Aspernatur
          dolores, rerum nam laudantium fugit molestiae. Fugiat repellat labore
          eligendi ipsa debitis magnam, voluptatibus suscipit quas ratione
          pariatur iure beatae voluptate, nisi voluptates dolores quasi! Vitae
          unde in ipsa tenetur, voluptate numquam iste quos obcaecati molestias
          odio ullam voluptatibus expedita eveniet inventore, explicabo
          cupiditate ut, provident quidem. Ad numquam enim id porro, vel fugiat
          quis soluta modi distinctio recusandae dolore, nostrum nulla,
          cupiditate reprehenderit consequuntur eligendi!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
