/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

import AdvocacyIcon from '../icons/advocacy';
import EducationIcon from '../icons/education';
import IndustryIcon from '../icons/industry';
import JointRightsIcon from '../icons/joint-rights';
import MarketIcon from '../icons/market';
import NetworkingIcon from '../icons/networking';
import styles from './styles.module.css';

export default function Pillars() {
	return (
		<div className="relative overflow-hidden border-t bg-gradient-to-bl from-brand/20 to-50%">
			<img
				src="/images/16.png"
				alt=""
				// width={600}
				// height={351}
				className="absolute -top-40 right-0 -z-10 w-2/3 min-w-[50vw] rotate-45 opacity-100 sm:w-1/3"
			/>
			<div className="container py-10">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className={cn(styles.pillar, styles.glow)}>
						<AdvocacyIcon className="h-auto w-10 md:w-14" />
						<div>
							<h3 className="flex items-center justify-between">Advocacy</h3>
							<p>
								Representing the interests of music publishing companies,
								including safeguarding their rights and those of songwriters in
								copyright affairs and legislation.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<EducationIcon className="h-auto w-10 md:w-14" />
						<div>
							<h3 className="flex items-center justify-between">Education</h3>
							<p>
								Providing information resources and seminars on copyright,
								license management, and royalty collection.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<JointRightsIcon className="h-auto w-8 md:w-12" />
						<div>
							<h3 className="flex items-center justify-between">
								Joint Rights Movement
							</h3>
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
						<NetworkingIcon className="h-auto w-10 md:w-14" />
						<div>
							<h3 className="flex items-center justify-between">Networking</h3>
							<p>
								Facilitating networking opportunities among music publishers,
								songwriters, composers, and other professional industry players.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<IndustryIcon className="h-auto w-10 md:w-14" />
						<div>
							<h3 className="flex items-center justify-between">
								Industry Standards
							</h3>
							<p>
								Contributing to the development, industry standards, and best
								practices for music publishing, including establishing
								guidelines for licensing fee alignment.
							</p>
						</div>
					</div>

					<div className={cn(styles.pillar, styles.glow)}>
						<MarketIcon className="h-auto w-10 md:w-14" />
						<div>
							<h3 className="flex items-center justify-between">
								Market Research
							</h3>
							<p>
								Conducting or supporting research initiatives to gather
								information on the music publishing industry, trends, and
								consumer behavior.
							</p>
						</div>
					</div>
				</div>

				<p className="mt-32 max-w-md text-pretty text-sm font-medium leading-tight text-muted-foreground/80">
					Our mission is to empower music publishers in the country with{' '}
					<span className="text-foreground">
						resources, recognition, and education
					</span>{' '}
					to maximize their creative and financial potential whilst competing
					globally.
				</p>
			</div>
		</div>
	);
}
