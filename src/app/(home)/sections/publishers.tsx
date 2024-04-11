/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';

import styles from './styles.module.css';

export default function Publishers() {
	return (
		<Section
			id="publishers"
			className="relative max-w-[100vw] scroll-m-10 py-20"
		>
			<div className="container">
				<RevealFade delay={1}>
					<h2 className={styles.companiesheader}>
						<span>Publishing Companies</span>
					</h2>
				</RevealFade>

				<div
					className={cn(
						'relative flex w-full flex-col overflow-hidden rounded-3xl bg-gray-900 bg-gradient-to-tr from-brand/20 to-brand/0 to-40% p-6 text-white [perspective:800px] max-md:pt-8 md:grid-cols-2 md:p-12'
					)}
				>
					{/* <div className="pointer-events-none absolute inset-0 z-0 bg-[url(/images/icons-noise.png)] opacity-40 [mask:linear-gradient(to_top_right,black,transparent)]" /> */}

					<div className="flex flex-wrap gap-4 gap-x-5">
						{publishers.map((publisher, i) => (
							<div
								key={i}
								className="line-clamp-1 rounded-md text-sm !leading-tight tracking-tight opacity-55 md:text-base"
							>
								<h3>{publisher.name.replace(/( \(M\))? Sdn Bhd$/, '')}</h3>
							</div>
						))}
					</div>

					<div
						className={cn(
							'-mx-20 -mb-4 mt-8 -skew-y-3 md:-mb-10',
							'[mask:linear-gradient(to_right,transparent,black,transparent)]'
						)}
					>
						<RevealFade>
							<div className="relative z-0 flex flex-nowrap gap-6 overflow-hidden">
								<div className="flex animate-marquee gap-6">
									{publishers
										.filter((publisher) => publisher.logo !== undefined)
										.map((publisher, i) => (
											<PublisherLogo key={i} publisher={publisher} />
										))}
								</div>
								<div className="flex animate-marquee gap-6" aria-hidden>
									{publishers
										.filter((publisher) => publisher.logo !== undefined)
										.map((publisher, i) => (
											<PublisherLogo key={i} publisher={publisher} />
										))}
								</div>
							</div>
						</RevealFade>
						<RevealFade delay={0.5}>
							<div className="relative z-0 mt-2 flex flex-nowrap gap-6 overflow-hidden md:mt-6">
								<div className="flex animate-marquee gap-6 [animation-direction:reverse]">
									{[...publishers]
										.reverse()
										.filter((publisher) => publisher.logo !== undefined)

										.map((publisher, i) => (
											<PublisherLogo key={i} publisher={publisher} />
										))}
								</div>
								<div
									className="flex animate-marquee gap-6 [animation-direction:reverse]"
									aria-hidden
								>
									{[...publishers]
										.reverse()
										.filter((publisher) => publisher.logo !== undefined)
										.map((publisher, i) => (
											<PublisherLogo key={i} publisher={publisher} />
										))}
								</div>
							</div>
						</RevealFade>
					</div>
				</div>
			</div>
		</Section>
	);
}

function PublisherLogo({ publisher }: { publisher: Publisher }) {
	return (
		<div className="flex aspect-square size-20 items-center justify-center rounded-2xl bg-white/5 p-3 text-center shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-500 [background-image:radial-gradient(circle_at_60%_0,hsla(var(--hue),8%,50%,0.5),rgba(0,0,0,0)_85%)] hover:bg-white/15 max-md:-mx-2 md:size-28 md:p-4">
			<img
				src={`/images/company/${publisher.logo}.svg`}
				alt={publisher.name}
				className={cn(
					'inline-block size-full max-w-none object-contain opacity-60 drop-shadow invert sepia',
					publisher.square && 'aspect-square size-4/5'
				)}
			/>
		</div>
	);
}

type Publisher = {
	name: string;
	logo?: string;
	square?: boolean;
};

const publishers: Publisher[] = [
	{ name: 'Faithful Music Sdn Bhd', logo: 'faithful', square: true },
	{ name: 'FMC Music Sdn Bhd', logo: 'fmc' },
	{ name: 'Frequen-Z Records' },
	{
		name: 'Goodsound Music Publishing Sdn Bhd',
		logo: 'goodsound',
		square: true,
	},
	{ name: 'Indah Karya Publishing Sdn Bhd', logo: 'indah-karya', square: true },
	{ name: 'Insichtech Musicland Sdn Bhd', logo: 'musicland' },
	{ name: 'Irama Bayu Production', logo: 'ibp' },
	{ name: 'Kelarai Sakti Publishing Sdn Bhd', logo: 'kelarai', square: true },
	{ name: 'KRU Music Sdn Bhd', logo: 'kru' },
	{ name: 'Luncai Emas Sdn Bhd', logo: 'luncai', square: true },
	{ name: 'Mixology Music Sdn Bhd', logo: 'mixology', square: true },
	{ name: 'MVM Production Sdn Bhd', logo: 'mvm' },
	{ name: 'NAR Publishing Sdn Bhd', logo: 'nar' },
	{ name: 'Nova Music (M) Sdn Bhd', logo: 'nova' },
	{ name: 'NSR Music Publishing Sdn Bhd', logo: 'nsr' },
	{ name: 'Rock Records (M) Sdn Bhd', logo: 'rock', square: true },
	{ name: 'Rocketfuel Entertainment Sdn Bhd', logo: 'rocketfuel' },
	{ name: 'RUSA Marketing Sdn Bhd', logo: 'rusa' },
	{ name: 'Star Media Publishing Sdn Bhd', logo: 'star' },
	{ name: 'Suwah Music Publishing Sdn Bhd', logo: 'src' },
	{ name: 'Taja Archive Sdn Bhd', logo: 'taja', square: true },
	{ name: 'Touch Music Publishing (M) Sdn Bhd', logo: 'touch', square: true },
	{ name: 'Universal Music Publishing Sdn Bhd', logo: 'universal' },
	{ name: 'VEEDU Production Sdn Bhd', logo: 'veedu' },
	{ name: 'VMS Music Records & Publishing Sdn Bhd' },
];

const shuffle = (array: Publisher[]) => {
	return [...array].sort(() => Math.random() - 0.5);
};
