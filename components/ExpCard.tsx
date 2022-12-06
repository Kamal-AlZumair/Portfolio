import Image from 'next/image';
import React from 'react'
import photo from '../assets/107432998_1665506293600704_8314332817197063286_n.jpg'
import {motion} from 'framer-motion'

type Props = {};
const ExpCard = ({}: Props) => {
  return (
    <article className=' md:mt-40 flex flex-col rounded-lg items-center flex-shrink-0 space-x-7  sm:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div 
      initial={{y:-100, opacity:0,}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      
      className=''
      >
        <Image src={photo} alt={'/'} className='w-32 h-32 rounded-full object-cover xl:h-[200px] xl:w-[200px] object-center'/>
      </motion.div>
      <div className=' px-0 md:px-10'>
        <h4 className=' md:text-4xl font-light'>Reporting Officer</h4>
        <p className=' font-bold md:text-2xl mt-1'>Deem Organization</p>
        <p className='text-[12px] sm:text-base uppercase py-5 text-gray-300'>Started work 1-7-2020 - Ended 31-12-2021</p>
        <ul className='text-[12px] list-disc md:space-y-2 ml-5 md:text-lg'>
          <li>Produce Situation Reports.</li>
          <li>Monitor and ensure accuracy of data collection.</li>
          <li>Preparing forms and notes for the project.</li>
          <li>Keeping and archiving all project documents and documents manually and electronically.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExpCard
