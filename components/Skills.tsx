import React from "react";
import { motion } from "framer-motion";
import Skill from './Skill'
import {Skill as Skilltype} from '../typings'

type Props = {
	skills:Skilltype[],
	directionLeft?: boolean;
};
const Skills = ({skills, directionLeft}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className=" relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
			<h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
			<motion.div
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className=" grid grid-cols-4 md:pt-24  gap-5 cursor-pointer">
				{skills?.map((skill)=>(
						<Skill key={skill._id} skill={skill} />
				))}
				
			</motion.div>
		</motion.div>
	);
};

export default Skills;
