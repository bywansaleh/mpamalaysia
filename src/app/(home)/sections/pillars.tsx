/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

import Advocacy2Icon from '../icons/advocacy-2';
import Education2Icon from '../icons/education-2';
import Industry2Icon from '../icons/industry-2';
import JointRights2Icon from '../icons/joint-rights-2';
import Market2Icon from '../icons/market-2';
import Networking2Icon from '../icons/networking-2';
import styles from './styles.module.css';

export default function Pillars() {
	return (
		<div className="relative">
			<div className="container relative py-10">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className={cn(styles.pillar, styles.glow)}>
						<Advocacy2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Advocacy</h3>
							<p>
								Representing the interests of music publishing companies,
								including safeguarding their rights and those of songwriters in
								copyright affairs and legislation.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<Education2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Education</h3>
							<p>
								Providing information resources and seminars on copyright,
								license management, and royalty collection.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<JointRights2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Joint Rights Movement</h3>
							<p>
								Collaborating to manage royalties and protect copyrights with
								Performing Rights Organizations such as{' '}
								<a href="https://macp.com.my">MACP</a> (Malaysia),{' '}
								<a href="https://wami.id/">WAMI</a> (Indonesia),{' '}
								<a href="https://www.compass.org.sg/">COMPASS</a> (Singapore),
								and others.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<Networking2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Networking</h3>
							<p>
								Facilitating networking opportunities among music publishers,
								songwriters, composers, and other professional industry players.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<Industry2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Industry Standards</h3>
							<p>
								Contributing to the development, industry standards, and best
								practices for music publishing, including establishing
								guidelines for licensing fee alignment.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<Market2Icon className="h-auto w-10 md:w-14" />
						<div>
							<h3>Market Research</h3>
							<p>
								Conducting or supporting research initiatives to gather
								information on the music publishing industry, trends, and
								consumer behavior.
							</p>
						</div>
					</div>
				</div>

				<p className="mt-8 max-w-sm text-pretty text-sm font-normal">
					Our mission is to empower music publishers in the country with{' '}
					<span className="text-muted-foreground/80">
						resources, recognition, and education
					</span>{' '}
					to maximize their creative and financial potential whilst competing
					globally.
				</p>

				<img
					src="/images/16.png"
					alt=""
					className="pointer-events-none absolute -bottom-40 -right-20 -z-10 w-2/3 min-w-[30vw] rotate-[50deg] select-none opacity-40 grayscale-[0.2] sm:w-1/4 md:opacity-90"
				/>
			</div>
		</div>
	);
}
