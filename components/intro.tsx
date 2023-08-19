"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import headShot from '@/public/head_shot_cropped.jpg'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare, FaGitlab } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import Typed from 'typed.js';


export default function Intro() {
    const { ref } = useSectionInView("Home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const typedRef = useRef(null);

    // Use useEffect to initialize Typed.js once the component mounts
    useEffect(() => {
        const options = {
            strings: [
                "Front End Developer",
                "Back End Developer",
                "Full Stack Developer",

                // Add more strings as needed
            ],
            typeSpeed: 100, // Adjust typing speed as needed
            backSpeed: 80, // Adjust backspacing speed as needed
            startDelay: 2000,
            showCursor: true,

        };

        const typed = new Typed(typedRef.current, options);

        // Clean up on unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to ensure this runs only once


  return (
    <section id="home" ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate= {{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                <Image src={headShot}
                 alt="John Agni Portrait"
                 width='192'
                 height='192'
                 quality='95'
                 priority={true}
                 className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                </motion.div>

                <motion.span className="absolute bottom-0 left-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
                >👋 </motion.span>

            </div>



        </div>

        <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y:0 }}
        >
        <div className='text-lg'>
        From Foundation to Future: Building Impact Through Iterative Excellence
        </div>
        <span className="font-bold">Hello, I'm John.</span> I'm a{" "}
        <span ref={typedRef} className="font-bold">Software Engineer</span>

        </motion.h1>

        <motion.div
            className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1
            }}
        >
            <Link
             className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            href="#contact"
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now )
            }}>
                Contact me here <BsArrowRight className=' group-hover:translate-x-1 transition opacity-70'/>
            </Link>
            <a className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10' href='/JohnClifford_Agni_Resume.pdf dark:bg-white/10' download>
                Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
            </a>

            <a className='group bg-white text-black p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/john-agni/" target="_blank">
                <BsLinkedin  />
            </a>
            <a className='bg-white text-black p-4 flex items-center gap-2 rounded-full text-[1.15rem]  focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10 dark:text-white/60' href="https://github.com/ohtheagni" target="_blank">
                <FaGithubSquare />
            </a>

            <a className='bg-white text-black p-4 flex items-center gap-2 rounded-full text-[1.15rem]  focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10 dark:text-white/60' href="https://gitlab.com/ohtheagni" target="_blank">
                <FaGitlab />
            </a>
        </motion.div>
    </section>
  )
}
