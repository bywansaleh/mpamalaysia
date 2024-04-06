/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import Section from '@/components/section';

import Advocacy2Icon from '../icons/advocacy-2';
import Education2Icon from '../icons/education-2';
import Industry2Icon from '../icons/industry-2';
import JointRights2Icon from '../icons/joint-rights-2';
import Market2Icon from '../icons/market-2';
import Networking2Icon from '../icons/networking-2';
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
								'flex flex-col items-start gap-4 md:flex-row-reverse',
								'[&_a]:hover:underline'
							)}
						>
							<div className="aspect-square rounded-lg p-1.5 ring-1 ring-foreground/10">
								<div className="aspect-square rounded bg-card/40 p-3 shadow-lg ring-1 ring-foreground/10 [&>svg]:size-8 md:[&>svg]:size-10">
									{pillar.icon}
								</div>
							</div>

							<div className="flex-1">
								<h3 className="relative z-10 mb-4 text-lg font-light !leading-tight tracking-tight text-brand-darker dark:text-brand md:text-xl">
									{pillar.title}
								</h3>
								<p className="relative z-10 max-w-sm text-balance text-xs !leading-normal md:text-sm">
									<Balancer>{pillar.description}</Balancer>
								</p>
							</div>
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
		icon: <Advocacy2Icon />,
	},
	{
		title: 'Education',
		description: (
			<>
				Providing information resources and seminars on copyright, license
				management, and royalty collection.
			</>
		),
		icon: <Education2Icon />,
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
		icon: <JointRights2Icon />,
	},
	{
		title: 'Networking',
		description: (
			<>
				Facilitating networking opportunities among music publishers,
				songwriters, composers, and other professional industry players.
			</>
		),
		icon: <Networking2Icon />,
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
		icon: <Industry2Icon />,
	},
	{
		title: 'Market Research',
		description: (
			<>
				Conducting or supporting research initiatives to gather information on
				the music publishing industry, trends, and consumer behavior.
			</>
		),
		icon: <Market2Icon />,
	},
];
