"use client";
import Canvas from "./Canvas";
import LogoWrapper from "./LogoWrapper";

interface LogoWrapperProps {
	backgroundColor: string;
	strokeColor: string;
	imgSrc: string;
	logoName: string;
}

export default function LogoGuesserWrapper({
	backgroundColor,
	strokeColor,
	imgSrc,
	logoName,
}: LogoWrapperProps) {
	return (
		<div className='border-4 flex flex-col gap-4 justify-center items-center p-6'>
			<h2 className='text-2xl'>{logoName}</h2>
			<div className='flex gap-8 p-6 '>
				<Canvas backgroundColor={backgroundColor} strokeColor={strokeColor} />
				<LogoWrapper imgSrc={imgSrc} backgroundColor={backgroundColor} />
			</div>
		</div>
	);
}
