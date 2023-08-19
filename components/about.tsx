"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion, useInView } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ delay: 0.175 }}
      id="about"
      >
        <SectionHeading>About Me</SectionHeading>

        < p className='mb-3 text-left'>
          Former educator turned software engineer, I'm obsessed with code. Now I'm on a mission to turn visions to realty.
          I bring a unique blend of skills and experiences to the world of software engineering. My previous career as a teacher in
          Japan honed my exceptional communication skills, patience, and adaptability. These qualities, combined with my passion for problem-solving,
          have seamlessly transitioned into my role as a software engineer. Whether it's collaborating with diverse teams, meticulously analyzing code,
          or empathizing with end-users, my background has equipped me to excel in this dynamic field. I am dedicated to delivering innovative solutions
          while maintaining a keen eye for detail, making me a valuable asset in any software development project
          With each line of code I write, my passion ignites as I envision the tangible impact it can have, shaping a better
          experience for users and bringing real value to their lives.
        </p>
          <p>
            When I'm not coding I'm usually working out, trying out a new restaurant or reviewing craft beers.
          </p>


    </motion.section>
  )
}
