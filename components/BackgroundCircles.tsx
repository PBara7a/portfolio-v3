import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center h-screen"
    >
      {/* <div className="absolute border border-[#9AFF7970] rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px]" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]" />
      <div className="absolute border border-[#9AFF79] rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute border border-[#33333380] rounded-full h-[800px] w-[800px]" /> */}
      <div className="absolute border border-[#9AFF7970] rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px]" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px]" />
      <div className="absolute border border-[#9AFF79] rounded-full h-[325px] w-[325px] md:h-[650px] md:w-[650px] animate-pulse" />
      <div className="absolute border border-[#33333380] rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
