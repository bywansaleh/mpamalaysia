/* eslint-disable @next/next/no-img-element */

// import img from '@/assets/images/mj1.png';

import { cn } from '@/lib/utils';

import Council from './council';
import styles from './styles.module.css';

export default function Home() {
	return (
		<>
			<div className="relative border-b">
				<div className="container py-10 pt-32">
					<div className="max-w-screen-md">
						<h2 className="text-pretty font-serif text-4xl tracking-tight md:text-5xl">
							<span className="text-muted-foreground/80">
								Protecting and promoting
							</span>{' '}
							the rights and interests of music publishers in Malaysia.
						</h2>
						<p className="mt-40 text-pretty text-2xl font-light !leading-[1.1] md:text-3xl">
							Music Publishers Association of Malaysia safeguards the rights and
							promotes the works of music publishers in the country.{' '}
							<span className="text-muted-foreground/80">
								We focus on the following six pillars.
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden border-b bg-gradient-to-bl from-brand/15 to-50%">
				<img
					src="/images/16.png"
					alt=""
					// width={600}
					// height={351}
					className="absolute -top-40 right-0 -z-10 w-2/3 min-w-[50vw] rotate-45 opacity-100 sm:w-1/3"
				/>
				<div className="container py-10">
					<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
						<div className={cn(styles.card, styles.glow)}>
							<h3>Advocacy</h3>
							<p>
								Representing the interests of music publishing companies,
								including safeguarding their rights and those of songwriters in
								copyright affairs and legislation.
							</p>
						</div>

						<div className={cn(styles.card, styles.glow)}>
							<h3>Education</h3>
							<p>
								Providing information resources and seminars on copyright,
								license management, and royalty collection.
							</p>
						</div>

						<div className={cn(styles.card, styles.glow)}>
							<h3>Joint Rights Movement</h3>
							<p>
								Collaborating to manage royalties and protect copyrights with
								Performing Rights Organizations such as{' '}
								<a href="https://macp.com.my">MACP</a>,{' '}
								<a href="https://wami.id/">WAMI</a>,{' '}
								<a href="https://www.compass.org.sg/">COMPASS</a>, and others.
							</p>
						</div>

						<div className={cn(styles.card, styles.glow)}>
							<h3>Networking</h3>
							<p>
								Facilitating networking opportunities among music publishers,
								songwriters, composers, and other professional industry players.
							</p>
						</div>

						<div className={cn(styles.card, styles.glow)}>
							<h3>Industry Standards</h3>
							<p>
								Contributing to the development, industry standards, and best
								practices for music publishing, including establishing
								guidelines for licensing fee alignment.
							</p>
						</div>

						<div className={cn(styles.card, styles.glow)}>
							<h3>Market Research</h3>
							<p>
								Conducting or supporting research initiatives to gather
								information on the music publishing industry, trends, and
								consumer behavior.
							</p>
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

			<Council />
		</>
	);
}
