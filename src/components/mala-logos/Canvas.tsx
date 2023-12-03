"use client";

import React, { useRef, useEffect, useState, MouseEvent } from "react";

interface Coordinates {
	x: number;
	y: number;
}
export interface CanvasProps {
	backgroundColor: string;
	strokeColor: string;
}

function Canvas({ backgroundColor, strokeColor }: CanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isPainting, setIsPainting] = useState<boolean>(false);
	const [mousePosition, setMousePosition] = useState<Coordinates | undefined>(
		undefined
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.width = 400;
			canvas.height = 400;
			const context = canvas.getContext("2d");
			if (context) {
				context.fillStyle = backgroundColor;
				context.fillRect(0, 0, canvas.width, canvas.height);
			}
		}
	}, [backgroundColor]);

	const getCoordinates = (
		event: MouseEvent<HTMLCanvasElement>
	): Coordinates | undefined => {
		if (!canvasRef.current) {
			return;
		}

		const canvas = canvasRef.current;
		return {
			x: event.pageX - canvas.offsetLeft,
			y: event.pageY - canvas.offsetTop,
		};
	};

	const startPaint = (event: MouseEvent<HTMLCanvasElement>): void => {
		const coordinates = getCoordinates(event);
		if (coordinates) {
			setMousePosition(coordinates);
			setIsPainting(true);
		}
	};

	const paint = (event: MouseEvent<HTMLCanvasElement>): void => {
		if (isPainting) {
			const newMousePosition = getCoordinates(event);
			if (mousePosition && newMousePosition) {
				drawLine(mousePosition, newMousePosition);
				setMousePosition(newMousePosition);
			}
		}
	};

	const exitPaint = (): void => {
		setIsPainting(false);
		setMousePosition(undefined);
	};

	const drawLine = (
		originalMousePosition: Coordinates,
		newMousePosition: Coordinates
	): void => {
		if (!canvasRef.current) {
			return;
		}
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		if (context) {
			context.strokeStyle = strokeColor; // Change the color here
			context.lineJoin = "round";
			context.lineWidth = 5; // Change the line width here

			context.beginPath();
			context.moveTo(originalMousePosition.x, originalMousePosition.y);
			context.lineTo(newMousePosition.x, newMousePosition.y);
			context.closePath();

			context.stroke();
		}
	};
	const clearCanvas = (): void => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		if (context && canvas) {
			context.fillStyle = backgroundColor;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(0, 0, canvas.width, canvas.height);
		}
	};

	return (
		<div className='flex items-center flex-col gap-4'>
			<canvas
				ref={canvasRef}
				onMouseDown={startPaint}
				onMouseMove={paint}
				onMouseUp={exitPaint}
				onMouseLeave={exitPaint}
				className='border-2 border-grey-200'
			/>
			<div className='w-full flex justify-between px-4 items-center'>
				<svg height='50' width='50'>
					<circle
						cx='25'
						cy='25'
						r='20'
						stroke='#8F8F8F'
						stroke-width='2'
						fill={strokeColor}
					/>
				</svg>
				<button
					onClick={clearCanvas}
					className='p-4 rounded border-2 w-1/2 border-grey-200 hover:bg-slate-200 hover:text-grey-800'
				>
					Rensa
				</button>
			</div>
		</div>
	);
}

export default Canvas;
