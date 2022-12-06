import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import photo from "../assets/IMG-20220901-WA0020.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};
const Hero = ({}: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Kamal Al-Zumair",
			"Front-end Developer",
			"UI/UX Designer",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className=" h-screen flex flex-col space-y-8 items-center  justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src={photo}
				alt="/"
				className=" relative mx-auto rounded-full w-32 h-32 object-cover"
			/>
			<div className=" z-20">
				<h2 className="text-[12px] md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Web Developer
				</h2>
				<h1 className=" text-base lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#f7ab0a" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#exp">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects </button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
