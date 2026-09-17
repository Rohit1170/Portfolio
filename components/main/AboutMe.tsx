"use client";
import React from "react";
import Image from "next/image";
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
                Full-Stack Software Engineer with 2+ years across enterprise systems and independent product development.<br/> I solo-built and scaled SIPA Nutrition, a live D2C e-commerce platform, to 1,600+ users — owning everything from architecture to Razorpay payment integration to production maintenance. <br/>450+ DSA problems solved. Currently exploring remote and global full-stack roles.
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          whileInView={{x:0,opacity: 1}}
          initial={{ opacity: 0,x:200 }}
          transition={{ delay: 0.4, duration: 0.6}}
          className="md:flex-grow relative h-1/2 lg:h-4/6 hidden md:block  bg-center bg-cover bg-no-repeat rounded-full "
        >
          <div className="relative h-10/12 w-10/12 rounded-full ml-20 aspect-square overflow-hidden">
            <Image
              src="/bgimage2.jpg"
              alt="Rohit Raj"
              fill
              sizes="(max-width: 1024px) 40vw, 400px"
              className="object-cover rounded-full"
            />
          </div>
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
