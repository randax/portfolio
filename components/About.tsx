import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

// https://cdn.sanity.io/images/fhoo4r9z/production/dc9de451203909a3b28ec37cda3d591b38c9fd7f-2048x1365.jpg

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0,}}
    whileInView={{opacity:1,}}
    transition={{duration:1.5,}}
    className=" flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img
        initial={{
            x: -200,
            opacity:0,
        }}
        transition={{
            duration: 1.2,
        }} 
        whileInView={{opacity:1, x: 0}}
        viewport={{ once: true}}
        src="https://cdn.sanity.io/images/fhoo4r9z/production/dc9de451203909a3b28ec37cda3d591b38c9fd7f-2048x1365.jpg" 
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                background
            </h4>
            <p className="text-base">
            I started my journey into software development when
            I first laid hands on an old computer. Mesmerized by the power of code,
            I quickly learned that I could communicate with the machine and instruct it to bring my ideas to life. 
            Over the years, I've grown from building simple web pages to developing complex,
            scalable applications that impact millions.
            </p>
        </div>
    </motion.div>
  )
}

export default About