import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

// https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/277793437_10166120261720640_3212191972190253190_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=1ClDn77HxrsAX-4xpIk&_nc_ht=scontent-arn2-1.xx&oh=00_AfDVDrvOO2DoyUDM3CufSwz-F-DwBgqtf52ezVAzEBgoiQ&oe=64DE8D2C

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
     xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity:0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y:0}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full md:rounded-full xl:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" 
        src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/277793437_10166120261720640_3212191972190253190_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=1ClDn77HxrsAX-4xpIk&_nc_ht=scontent-arn2-1.xx&oh=00_AfDVDrvOO2DoyUDM3CufSwz-F-DwBgqtf52ezVAzEBgoiQ&oe=64DE8D2C" alt="">
        </motion.img>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Solution Architect</h4>
            <p className="font-bold text-2xl mt-1">NextGenTel</p>
            <div className="flex space-x-2 my-2">
                <img 
                className="h-10 w-10 rounded-full"
                src="https://spring.io/img/spring.svg" alt="">
                </img>
                <img 
                className="h-10 w-10 rounded-full"
                src="https://spring.io/img/spring.svg" alt="">
                </img>
                <img 
                className="h-10 w-10 rounded-full"
                src="https://spring.io/img/spring.svg" alt="">
                </img>
            </div>
            <p className="uppercase py-5 text-gray-300">
                Started work.. - Ended ..
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summay Points Summay Points Summay Points Summay Points Summay Points</li>
                <li>Summay Points Summay Points Summay Points Summay Points Summay Points</li>
                <li>Summay Points Summay Points Summay Points Summay Points Summay Points</li>
                <li>Summay Points Summay Points Summay Points Summay Points Summay Points</li>
                <li>Summay Points Summay Points Summay Points Summay Points Summay Points</li>
            </ul>

        </div>
    </article>
  )
}