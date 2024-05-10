"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
    whileInView={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8}}
      id="2"
      className="w-full  overflow-y-hidden h-screen flex flex-col items-center bg-black relative overflow-x-hidden "
    >
      <motion.div className="z-20 mt-12 text-2xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700">
        About Me
      </motion.div>
      <SparklesCore
        id="2"
        speed={15}
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={40}
        className="absolute w-full -z-10 bg-black/50"
        particleColor="#FFFFFF"
      />
      <div className=" w-full h-full absolute flex-grow flex items-center overflow-x-hidden justify-center  font-serif ">
        <div className="w-full md:w-4/6">
          <div className=" dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex gap-1 items-center  justify-center bg-black dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className=" relative w-11/12 md:w-full lg:w-11/12">
              <motion.div
                whileInView={{x: 0, opacity:1,display:"block"}}
                initial={{ x: -300, opacity:0,display:"hidden"  }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className=" opacity-80 my-8 text-white text-xl md:text-xl font-sans w-full overflow-x-hidden"
              >
                {" "}
               
                Proactive full-stack developer skilled in data structures, algorithms, and PLM.<br/> Passionate about merging technology with business to drive innovation and deliver tangible results. With a solid background in software engineering, committed to excellence in every project undertaken. <br/>Eager to explore the intersection of tech and business, seeking impactful roles to leverage expertise and drive meaningful change in the dynamic tech landscape. Ready to take on challenges and deliver comprehensive solutions that make a difference in the industry.
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
        
          className="md:flex-grow h-1/2 lg:h-4/6 hidden md:block  bg-center bg-cover bg-no-repeat rounded-full "
        >
          <motion.img   whileInView={{x:0,opacity: 1}}
          initial={{ opacity: 0,x:200 }}
        
          transition={{ delay: 0.4, duration: 0.6}}  className="h-10/12 w-10/12 rounded-full ml-20" src="/bgimage2.jpg"></motion.img>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

export function GridBackgroundDemo({ content }: { content: string }) {
  return (
    <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {content}
      </p>
    </div>
  );
}
