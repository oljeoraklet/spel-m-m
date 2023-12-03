import LogoGuesserWrapper from "@/components/mala-logos/LogoGuesserWrapper";

export default function MalaLogos() {
	return (
		<div>
			<h1>Mala Logos</h1>
			<div className='flex flex-col gap-6'>
				<LogoGuesserWrapper
					logoName='McDonalds'
					backgroundColor='#E61300'
					strokeColor='#FCC400'
					imgSrc='logos/mcdonalds_logo.jpg'
				/>
				<LogoGuesserWrapper
					logoName='Coop'
					backgroundColor='#ffffff'
					strokeColor='#05AC29'
					imgSrc='logos/coop_logo.png'
				/>
				<LogoGuesserWrapper
					logoName='SJ'
					backgroundColor='#00AB3A'
					strokeColor='#ffffff'
					imgSrc='logos/sj_logo.png'
				/>
			</div>
		</div>
	);
}
