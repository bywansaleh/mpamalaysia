/* eslint-disable @next/next/no-img-element */
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
			<div className="container relative">
				<p className="mb-10 mt-20 max-w-screen-md text-pretty text-2xl font-light !leading-[1.1] tracking-tighter md:text-3xl">
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
						<PillarCard key={i} pillar={pillar} />
					))}
				</div>

				<img
					loading="eager"
					src="/images/16.png"
					alt=""
					className="pointer-events-none absolute -bottom-40 -right-20 -z-10 w-2/3 min-w-[30vw] rotate-[50deg] select-none opacity-40 grayscale-[0.2] hue-rotate-[37deg] sm:w-1/4 md:opacity-90"
				/>
			</div>
		</Section>
	);
}

function PillarCard({ pillar }: { pillar: Pillar }) {
	return (
		<RevealFade className="h-full">
			<div
				className={cn(
					styles.card,
					styles.glow,
					'relative flex h-full flex-col items-start gap-4 !p-3 sm:!p-4',
					'[&_a]:hover:underline'
				)}
				// style={{
				// 	backgroundColor: pillar.bg,
				// 	backgroundImage: 'none',
				// 	color: pillar.text || '#fff',
				// }}
			>
				<div className="aspect-square p-3 text-white [&>svg]:size-10 [&>svg]:stroke-[1px] [&>svg]:opacity-60 [&>svg]:mix-blend-overlay md:[&>svg]:size-12">
					{pillar.icon}
					<div className={styles.iconbg} />
				</div>

				<h3 className="text-lg font-medium !leading-none tracking-tighter md:text-2xl">
					{pillar.title}
				</h3>
				<p className="text-xs !leading-normal opacity-55 md:text-sm">
					<Balancer>{pillar.description}</Balancer>
				</p>

				{/* <div className="!absolute -bottom-4 -right-4 -rotate-12 opacity-10 [&>svg]:size-32 [&>svg]:stroke-[0.5px]">
					{pillar.icon}
				</div> */}
			</div>
		</RevealFade>
	);
}

type Pillar = {
	title: string;
	description: string | React.ReactNode;
	icon: React.ReactNode;
	bg?: string;
	text?: string;
};

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
		bg: 'hsl(var(--brand))',
	},
	{
		title: 'Education',
		description: (
			<>
				Providing information resources and seminars on copyright, license
				management, and royalty collection.
			</>
		),
		icon: <IconBooks />,
		bg: '#3f37c9',
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
		bg: '#f7b52b',
		text: '#000',
	},
	{
		title: 'Networking',
		description: (
			<>
				Facilitating networking opportunities among music publishers,
				songwriters, composers, and other professional industry players.
			</>
		),
		icon: <IconAffiliate />,
		bg: '#2ec4b6',
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
		bg: '#ff928b',
		text: '#000',
	},
	{
		title: 'Market Research',
		description: (
			<>
				Conducting or supporting research initiatives to gather information on
				the music publishing industry, trends, and consumer behavior.
			</>
		),
		icon: <TrendingUp />,
		bg: '#caffbf',
		text: '#000',
	},
];
