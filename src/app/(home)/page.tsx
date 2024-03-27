import { Metadata } from 'next';

import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'Home',
};

export default function Home() {
	return (
		<>
			<div className="border-b">
				<div className="container pb-10 pt-20">
					<h2 className="max-w-screen-lg text-balance font-serif text-5xl tracking-tight">
						Protecting and promoting the rights and interests of music
						publishers.
					</h2>
					<p className="mt-60 max-w-screen-md text-balance text-3xl font-light !leading-none">
						Music Publishers Association of Malaysia safeguards the rights and
						promotes the works of music publishers in the country. We focus on
						the following six pillars.
					</p>
				</div>
			</div>

			<div className="border-b">
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

					<p className="mt-40 max-w-md text-pretty text-sm font-medium text-muted-foreground">
						Our mission is to empower music publishers in the country with
						resources, recognition, and education to maximize their creative and
						financial potential and to compete internationally.
					</p>
				</div>
			</div>
		</>
	);
}
