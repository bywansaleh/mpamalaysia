/* eslint-disable @next/next/no-img-element */
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import Img from '@/components/img';
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
		<Section id="pillars" className="relative scroll-m-20">
			<div className="container relative py-10">
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
							{pillar.icon}

							<div className="flex-1">
								<h3 className="relative z-10 mb-4 text-lg font-light !leading-tight tracking-tight text-brand md:text-xl">
									{pillar.title}
								</h3>
								<p className="relative z-10 max-w-sm text-balance text-xs !leading-normal md:text-sm">
									<Balancer>{pillar.description}</Balancer>
								</p>
							</div>
						</div>
					))}
				</div>

				<Img
					src="/images/16.png"
					alt=""
					className="pointer-events-none absolute -bottom-40 -right-20 -z-10 w-2/3 min-w-[30vw] rotate-[50deg] select-none opacity-40 grayscale-[0.2] sm:w-1/4 md:opacity-90"
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

const pillars = [
	{
		title: 'Advocacy',
		description: (
			<>
				Representing the interests of music publishing companies, including
				safeguarding their rights and those of songwriters in copyright affairs
				and legislation.
			</>
		),
		icon: <Advocacy2Icon className="h-auto w-10 md:w-14" />,
	},
	{
		title: 'Education',
		description: (
			<>
				Providing information resources and seminars on copyright, license
				management, and royalty collection.
			</>
		),
		icon: <Education2Icon className="h-auto w-10 md:w-14" />,
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
		icon: <JointRights2Icon className="h-auto w-10 md:w-14" />,
	},
	{
		title: 'Networking',
		description: (
			<>
				Facilitating networking opportunities among music publishers,
				songwriters, composers, and other professional industry players.
			</>
		),
		icon: <Networking2Icon className="h-auto w-10 md:w-14" />,
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
		icon: <Industry2Icon className="h-auto w-10 md:w-14" />,
	},
	{
		title: 'Market Research',
		description: (
			<>
				Conducting or supporting research initiatives to gather information on
				the music publishing industry, trends, and consumer behavior.
			</>
		),
		icon: <Market2Icon className="h-auto w-10 md:w-14" />,
	},
];
