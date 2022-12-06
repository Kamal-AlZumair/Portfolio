import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className=" sticky overflow-hidden top-0 flex p-5  items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className=" flex flex-row items-center">
				{/* Social Icon */}
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						rel="noreferrer noopener"
					/>
				))}
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className=" flex flex-row items-center text-gray-300 cursor-pointer">
				<SocialIcon
					network="email"
					className=" cursor-pointer"
					fgColor="gray"
					bgColor="transparent"
				/>

				<p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
					<Link href="#contact">Get In Touch</Link>
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
