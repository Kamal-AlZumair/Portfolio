import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};
const Projects = ({projects}: Props) => {
  
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar'>
        {projects?.map((project,i)=>(
          <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.div 
            initial={{y:-100,
            opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0,}}
            
            >
              <Image width={200} height={200} src={urlFor(project?.image).url()} alt={'/'} />
            </motion.div>
            <div className=' space-y-5 px-0 md:px-10 max-w-6xl'>
              <a href={project.linkToBuild} target='_blank' rel="noreferrer noopener" ><h4 className=' text-sm md:text-4xl font-semibold text-center'>
                <span className=' underline decoration-[#f7ab0a]/50'>Case study {i + 1} of {projects.length}:</span>
                {' '}{project?.title}
              </h4></a>

              <div className=' flex items-center space-x-2 justify-center'>
                {project.technologies.map((tech)=>(
                  <Image key={tech._id} width={250} height={250} className='h-10 w-10' src={urlFor(tech.image).url()} alt='/'/>
                ))}
              </div>
              
              
              <p className=' text-xs md:text-base text-center md:text-left '>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className=' w-full absolute top-[30%] bg-[#fa7b0a]/10 left-0 h-[400px] -skew-y-12'/>

      
    </motion.div>
  )
}

export default Projects
