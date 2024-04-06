/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
	IconAffiliate,
	IconBooks,
	IconChartHistogram,
	IconComet,
	IconShieldHeart,
	IconUsersGroup,
} from '@tabler/icons-react';
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
								'flex flex-col items-start gap-4 md:flex-row-reverse',
								'[&_a]:hover:underline'
							)}
						>
							<div className="relative z-10 aspect-square p-3 text-white [&>svg]:size-8 md:[&>svg]:size-10">
								{pillar.icon}

								{/* <div>
										<svg
											// width="64"
											// height="64"
											viewBox="0 0 64 64"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="absolute inset-0 size-full opacity-50"
										>
											<g clip-path="url(#clip0_462_411189)">
												<circle
													opacity="0.6"
													cx="32"
													cy="32"
													r="26.25"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<circle
													opacity="0.6"
													cx="32"
													cy="32"
													r="28.875"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<circle
													opacity="0.6"
													cx="32"
													cy="32"
													r="13.125"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<rect
													opacity="0.6"
													x="8.375"
													y="8.375"
													width="47.25"
													height="47.25"
													rx="4"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<rect
													opacity="0.6"
													x="5.75"
													y="11"
													width="52.5"
													height="42"
													rx="4"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<rect
													opacity="0.6"
													x="53"
													y="5.75"
													width="52.5"
													height="42"
													rx="4"
													transform="rotate(90 53 5.75)"
													stroke="currentColor"
													stroke-width="0.15"
												/>
												<path
													opacity="0.6"
													d="M-9.93037 -10.0698L74.0696 73.9302M73.9304 -10.0698L-10.0696 73.9302M21.5985 -10.0002L21.5985 73.9998M74 21.5982L-9.99998 21.5982M32.0985 -10.0002L32.0985 73.9998M74 32.0982L-9.99998 32.0982M42.5985 -10.0002L42.5985 73.9998M74 42.5982L-9.99998 42.5982"
													stroke="currentColor"
													stroke-width="0.15"
												/>
											</g>
											<defs>
												<clipPath id="clip0_462_411189">
													<rect width="64" height="64" rx="16" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div> */}
								<div className={styles.iconbg} />
							</div>

							<div className="flex-1">
								<h3 className="relative z-10 mb-4 text-lg font-semibold !leading-tight tracking-tighter md:text-xl">
									{pillar.title}
								</h3>
								<p className="relative z-10 max-w-sm text-balance text-xs !leading-normal md:text-sm">
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
		icon: <IconShieldHeart strokeWidth={1} />,
	},
	{
		title: 'Education',
		description: (
			<>
				Providing information resources and seminars on copyright, license
				management, and royalty collection.
			</>
		),
		icon: <IconBooks strokeWidth={1} />,
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
		icon: <IconUsersGroup strokeWidth={1} />,
	},
	{
		title: 'Networking',
		description: (
			<>
				Facilitating networking opportunities among music publishers,
				songwriters, composers, and other professional industry players.
			</>
		),
		icon: <IconAffiliate strokeWidth={1} />,
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
		icon: <IconComet strokeWidth={1} />,
	},
	{
		title: 'Market Research',
		description: (
			<>
				Conducting or supporting research initiatives to gather information on
				the music publishing industry, trends, and consumer behavior.
			</>
		),
		icon: <IconChartHistogram strokeWidth={1} />,
	},
];
