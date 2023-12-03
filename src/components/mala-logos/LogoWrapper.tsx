"use client";
import { useState } from "react";

export default function LogoWrapper({
	imgSrc,
	backgroundColor,
}: {
	imgSrc: string;
	backgroundColor: string;
}) {
	const [isRevealed, setIsRevealed] = useState<boolean>(false);
	const revealImage = () => {
		setIsRevealed(true);
	};

	return (
		<div className='flex items-center flex-col gap-4'>
			<div
				className={"image-wrapper h-[400px] w-[400px] border-2 border-grey-200"}
				style={{ backgroundColor }}
			>
				{isRevealed && (
					<img
						src={imgSrc}
						alt=''
						className='h-[400px] w-[400px] object-cover border-2 border-grey-200'
					/>
				)}
			</div>
			<button
				onClick={revealImage}
				disabled={isRevealed}
				className={
					"p-4 rounded border-2 w-1/2 border-grey-200 hover:bg-slate-200 hover:text-grey-800" +
					(isRevealed ? " bg-slate-200 text-slate-300" : "")
				}
			>
				Visa Logo
			</button>
		</div>
	);
}
