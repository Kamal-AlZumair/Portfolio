/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {motion} from 'framer-motion'
import photo from '../assets/IMG-20220901-WA0020.jpg'
import Image from 'next/image';

type Props = {};
const About = ({}: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className=' flex relative flex-col text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.div className=' flex-shrink-0 mt-10 md:mt-0 ' initial={{x:-200, opacity:0,}} whileInView={{x:0,opacity:1}} transition={{duration:1.2,}}>
        <Image src={photo} alt={'/'} className='-mb-20 md:mb-0 lg:mt-32 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 lg:w-[350px] lg:h-[400px]'/>
      </motion.div>
      <div className=' space-y-10 px-0 md:px-10'>
        <h4 className='text-xl sm:text-4xl font-semibold'>
          Here is a <span className=' underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
        <p className=' text-sm sm:text-base sm:text-left'>
          I'm Kamal, here's a little bit about me... <br />
          IT graduated and adept front-end developer focusing <br className='hidden sm:block' />
          on JavaScript mobile-first development and <br className='hidden sm:block'/> User Interface Development.
        </p>
      </div>
    </motion.div>
  )
}

export default About
