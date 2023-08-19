"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiNextdotjs, SiMongodb, SiFastapi, SiFramer } from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { DiDjango } from "react-icons/di";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const getSkillIcon = (skill: string) => {
    const skillIcons = {
      HTML5: <FaHtml5 />,
      CSS: <FaCss3 />,
      Javascript: <BiLogoJavascript />,
      TypeScript: <BiLogoTypescript />,
      React: <FaReact />,
      NextJS: <SiNextdotjs />,
      NodeJS: <LiaNode />,
      Git: <FaGit />,
      Tailwind: <BiLogoTailwindCss />,
      Django4: <DiDjango />,
      PostGreSQL: <BiLogoPostgresql />,
      MongoDB: <SiMongodb />,
      FastAPI: <SiFastapi />,
      Python: <FaPython />,
      Docker: <FaDocker />,
      FramerMotion: <SiFramer />,

    };
    return skillIcons[skill] || null;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 icon-size"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="tooltip-container">
            {getSkillIcon(skill)}
            <span className="tooltip-text  dark:text-white/80 hover:backdrop-blur-sm">{skill}</span>
            </div>

          </motion.li>
        ))}
      </ul>
    </section>
  );
}
