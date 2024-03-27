/* eslint-disable @next/next/no-img-element */

// import img from '@/assets/images/mj1.png';

import styles from './styles.module.css';

export default function Home() {
	return (
		<>
			<div className="relative border-b">
				<div className="container py-10 pt-32">
					<div className="max-w-screen-md">
						<h2 className="text-pretty font-serif text-5xl tracking-tight">
							<span className="text-muted-foreground/80">
								Protecting and promoting
							</span>{' '}
							the rights and interests of music publishers in Malaysia.
						</h2>
						<p className="mt-40 text-pretty text-3xl font-light !leading-[1.1]">
							Music Publishers Association of Malaysia safeguards the rights and
							promotes the works of music publishers in the country.{' '}
							<span className="text-muted-foreground/80">
								We focus on the following six pillars.
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="relative border-b">
				<img
					src="/images/mj1.png"
					alt=""
					// width={600}
					// height={351}
					className="absolute bottom-0 right-0 -z-10 aspect-[600/351] h-full opacity-80"
				/>
				<div className="container py-10">
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className={styles.card}>
							<h3>Advocacy</h3>
							<p>
								Representing the interests of music publishing companies,
								including safeguarding their rights and those of songwriters in
								copyright affairs and legislation.
							</p>
						</div>

						<div className={styles.card}>
							<h3>Education</h3>
							<p>
								Providing information resources and seminars on copyright,
								license management, and royalty collection.
							</p>
						</div>

						<div className={styles.card}>
							<h3>Joint Rights Movement</h3>
							<p>
								Collaborating to manage royalties and protect copyrights with
								Performing Rights Organizations such as{' '}
								<a href="https://macp.com.my">MACP</a>,{' '}
								<a href="https://wami.id/">WAMI</a>,{' '}
								<a href="https://www.compass.org.sg/">COMPASS</a>, and others.
							</p>
						</div>

						<div className={styles.card}>
							<h3>Networking</h3>
							<p>
								Facilitating networking opportunities among music publishers,
								songwriters, composers, and other professional industry players.
							</p>
						</div>

						<div className={styles.card}>
							<h3>Industry Standards</h3>
							<p>
								Contributing to the development, industry standards, and best
								practices for music publishing, including establishing
								guidelines for licensing fee alignment.
							</p>
						</div>

						<div className={styles.card}>
							<h3>Market Research</h3>
							<p>
								Conducting or supporting research initiatives to gather
								information on the music publishing industry, trends, and
								consumer behavior.
							</p>
						</div>
					</div>

					<p className="mt-20 max-w-md text-pretty text-sm font-medium leading-tight text-muted-foreground/80">
						Our mission is to empower music publishers in the country with{' '}
						<span className="text-foreground">
							resources, recognition, and education
						</span>{' '}
						to maximize their creative and financial potential whilst competing
						globally.
					</p>
				</div>
			</div>
		</>
	);
}
