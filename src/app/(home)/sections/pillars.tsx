import React from 'react';
import { IconAffiliate, IconBooks, IconShieldHeart } from '@tabler/icons-react';
import { Handshake, Speech, TrendingUp } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';

import styles from './styles.module.css';

export default function Pillars() {
	return (
		<Section id="pillars" className="relative scroll-m-20 py-10">
			<div className="relative container">
				<p className="mt-20 mb-10 max-w-(--breakpoint-md) text-2xl leading-[1.1]! font-light tracking-tighter text-pretty md:text-3xl">
					<Balancer>
						Music Publishers Association of Malaysia safeguards the rights and
						promotes the works of music publishers in the country.{' '}
						<span className="opacity-50">
							We focus on the following six pillars.
						</span>
					</Balancer>
				</p>

				<div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
					{pillars.map((pillar, i) => (
						<PillarCard key={i} pillar={pillar} index={i} />
					))}
				</div>

				<img
					loading="eager"
					src="/images/16.png"
					alt=""
					className="pointer-events-none absolute -right-20 -bottom-40 -z-10 w-2/3 min-w-[30vw] rotate-[50deg] opacity-40 grayscale-[0.2] hue-rotate-[37deg] select-none sm:w-1/4 md:opacity-90"
				/>
			</div>
		</Section>
	);
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
	return (
		<RevealFade delay={index * 0.1} className="h-full">
			<div
				className={cn(
					styles.card,
					'group relative flex h-full flex-col items-start gap-5 p-3! sm:p-4!',
					'origin-top hover:scale-[103%] hover:[&_a]:underline'
				)}
				style={
					{
						'--color': pillar.bg,
					} as React.CSSProperties
				}
			>
				<div
					className="aspect-square origin-top-left p-3 text-white transition-all duration-500 group-hover:scale-105 [&>svg]:size-10 [&>svg]:stroke-[1px] [&>svg]:opacity-90 md:[&>svg]:size-14"
					// style={{
					// 	color: pillar.text || '#fff',
					// }}
				>
					{pillar.icon}
					<div
						className={styles.icon_bg}
						style={{
							backgroundColor: pillar.bg,
						}}
					/>
				</div>

				<h3 className="text-lg leading-none! font-medium tracking-tighter md:text-2xl">
					{pillar.title}
				</h3>
				<p className="mt-auto text-xs leading-snug! opacity-55 md:text-sm">
					<Balancer>{pillar.description}</Balancer>
				</p>

				{/* <div className="absolute! -bottom-4 -right-4 -rotate-12 opacity-10 [&>svg]:size-32 [&>svg]:stroke-[0.5px]">
					{pillar.icon}
				</div> */}
			</div>
		</RevealFade>
	);
}

interface Pillar {
	title: string;
	description: string | React.ReactNode;
	icon: React.ReactNode;
	bg?: string;
	text?: string;
}

const pillars: Pillar[] = [
	{
		title: 'Advocacy',
		description: (
			<>
				Representing the interests of music publishing companies, including
				safeguarding their rights and those of songwriters in copyright affairs
				and legislation.
			</>
		),
		icon: <IconShieldHeart />,
		bg: 'var(--brand)',
	},
	{
		title: 'Education',
		description: (
			<>
				Providing comprehensive information resources and educational seminars
				on the topics of copyright, license management, and royalty collection
				for interested parties.
			</>
		),
		icon: <IconBooks />,
		bg: '#1aa786',
	},
	{
		title: 'Joint Rights Movement',
		description: (
			<>
				Collaborating to manage royalties and protect copyrights with Performing
				Rights Organizations such as <a href="https://macp.com.my">MACP</a>{' '}
				(Malaysia), <a href="https://wami.id/">WAMI</a> (Indonesia),{' '}
				<a href="https://www.compass.org.sg/">COMPASS</a> (Singapore), and
				others.
			</>
		),
		icon: <Speech />,
		bg: '#2245d1',
		text: '#000',
	},
	{
		title: 'Networking',
		description: (
			<>
				Facilitating valuable networking opportunities among music publishers,
				songwriters, composers, and other key professional industry players
				within the creative arts sector.
			</>
		),
		icon: <IconAffiliate />,
		bg: '#6e2be1',
		text: '#000',
	},
	{
		title: 'Industry Standards',
		description: (
			<>
				Contributing to the development, industry standards, and best practices
				for music publishing, including establishing guidelines for licensing
				fee alignment.
			</>
		),
		icon: <Handshake />,
		bg: '#db4848',
		text: '#000',
	},
	{
		title: 'Market Research',
		description: (
			<>
				Conducting or supporting research initiatives to gather insightful
				information on the current state of the music publishing industry,
				emerging trends, and consumer behavior.
			</>
		),
		icon: <TrendingUp />,
		bg: '#e62bb7',
		text: '#000',
	},
];
