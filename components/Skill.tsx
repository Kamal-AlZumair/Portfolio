import React from 'react'
import Image from 'next/image';
import { Skill } from '../typings';
import { urlFor } from '../sanity';


type Props = {
skill: Skill
};
const Skill = ({skill}: Props) => {
  return (
    <div className=' '>
      <Image alt='/' width={250} height={250} src={urlFor(skill?.image).url()} className='rounded-full border border-gray-500 object-contain w-12 h-12 md:w-24 md:h-24 xl:w-24 xl:h-24 filter hover:grayscale transition duration-300'/>
    </div>
  )
}

export default Skill
