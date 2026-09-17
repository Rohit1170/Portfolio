"use client";
import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteors";
import { WorkExperienceDetails } from "@/conifg";

const WorkExperience = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="experience"
      className="w-full relative flex flex-col gap-12 justify-between items-center bg-black overflow-y-auto py-12 overflow-x-hidden"
    >
      <div className="absolute md:block hidden">
        <Meteors number={20} className="z-30"></Meteors>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="text-center text-3xl md:text-5xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold"
      >
        WORK EXPERIENCE
      </motion.div>

      <div className="w-11/12 md:w-8/12 flex flex-col gap-6 z-10">
        {WorkExperienceDetails.map((exp) => (
          <motion.div
            key={exp.id}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full p-6 shadow-lg shadow-white/10 drop-shadow-2xl transform transition hover:scale-[1.02] duration-300 border border-gray-200 rounded-xl bg-black/70 text-white gap-3"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
              <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-white">
                {exp.role} · {exp.company}
              </div>
              <div className="text-xs md:text-sm text-white/60 font-medium whitespace-nowrap">
                {exp.duration}
                {exp.location ? ` · ${exp.location}` : ""}
              </div>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              {exp.points.map((point, i) => (
                <li key={i} className="text-xs md:text-sm text-white/80 font-medium">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
