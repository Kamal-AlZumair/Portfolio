import React from 'react'
import {motion} from 'framer-motion'

type Props = {};

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div initial={{opacity:0,}} whileInView={{scale:[1,2,2,3,1], opacity:[0.1,0.2,0.4,0.8,0.1,1.0], borderRadius:["20%","20%","50%","80%","20%"]}} transition={{duration:2.5,}}  className=' relative flex mt-36 justify-center items-center'>
      <div className=' absolute border border-[#333333] rounded-full mt-52 h-[200px] w-[200px]  animate-ping' />
      <div className=' absolute border border-[#333333] rounded-full mt-52 h-[300px] w-[300px] '/>
      <div className=' absolute border border-[#333333] rounded-full mt-52 h-[500px] w-[500px] '/>
      <div className=' rounded-full border border-[#f7ab0a] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
      <div className=' rounded-full border-[#333333] h-[800px] w-[800px] absolute mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles