/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IconAffiliate, IconBooks, IconShieldHeart } from '@tabler/icons-react';
import { Handshake, Speech, TrendingUp } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import Section from '@/components/section';

import styles from './styles.module.css';

export default function Pillars() {
	return (
		<Section id="pillars" className="relative scroll-m-20 py-10">
			<div className="container relative">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{pillars.map((pillar, i) => (
						<div
							key={i}
							className={cn(
								styles.card,
								styles.glow,
								'flex flex-col items-start gap-4',
								'[&_a]:hover:underline'
							)}
						>
							<div className="relative z-10 aspect-square p-3 text-white [&>svg]:size-12 [&>svg]:stroke-[0.75px] md:[&>svg]:size-16">
								{pillar.icon}
								<div className={styles.iconbg} />
							</div>

							<div className="flex-1">
								<h3 className="relative z-10 mb-2 text-lg font-semibold !leading-tight tracking-tighter md:text-xl">
									{pillar.title}
								</h3>
								<p className="relative z-10 text-xs !leading-normal opacity-55 md:text-sm">
									<Balancer>{pillar.description}</Balancer>
								</p>
							</div>

							<div className="pointer-events-none absolute inset-0 bg-[url(/images/icons-noise.png)] opacity-50 [mask:linear-gradient(to_bottom_left,black,transparent_60%)]" />
						</div>
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

type Pillar = {
	title: string;
	description: string | React.ReactNode;
	icon: React.ReactNode;
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
	},
];
