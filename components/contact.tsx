"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import SubmitBtn from './submit-btn';



export default function Contact() {
    const { ref } = useSectionInView("Contact");



  return (
    <motion.section
      id="contact"
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100% ,38rem) text-center]'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className='text-gray-700 -mt-3 dark:text-white/80'>Please contact me directly at{" "}
          <a className='underline' href="mailto:johncliffordagni@gmail.com">
            johncliffordagni@gmail.com
          </a>{" "}
           or through this form.
        </p>

            <form
              className="mt-10 flex flex-col dark:text-black "
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Email sent successfully!");
              }}
            >
                <input
                  required
                  name="email"
                  maxLength={500}
                  placeholder="Your Email"
                  className=" px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                  type="email"
                />
                <textarea
                  required
                  name="message"
                  maxLength={5000}
                    placeholder='Your Message'
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                />
              <SubmitBtn />
            </form>
    </motion.section>
  );
}
