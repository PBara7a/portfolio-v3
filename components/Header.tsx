import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import MailIcon from "./MailIcon";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between items-center max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/paulo-barata"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/PBara7a"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <div className="uppercase flex items-center space-x-3 text-sm text-gray-500 font-semibold px-4">
            <MailIcon />
            <p className="hidden md:inline-flex">Get in touch</p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
