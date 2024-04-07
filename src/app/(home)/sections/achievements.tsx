/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';

import styles from './styles.module.css';

export default function Achievements() {
	return (
		<Section id="achievements" className="relative scroll-m-10 py-20">
			<div className="container relative">
				<RevealFade>
					<h2 className={styles.sectionheader}>
						<span>Achievements</span>
					</h2>
				</RevealFade>

				<div className="mt-16 grid grid-cols-2 gap-4 md:ml-72 md:gap-20 lg:grid-cols-3">
					{achievements.map((achievement, i) => (
						<RevealFade key={i}>
							<h3 className="relative mb-4 text-xl font-light !leading-none tracking-tight">
								<div className="bottom-0 right-[calc(100%+1rem)] mb-2 w-[10%] font-serif text-4xl font-extralight !leading-none md:absolute md:-mb-1 md:text-5xl">
									<span className="inline-block bg-gradient-to-b from-brand to-brand-darker bg-clip-text text-transparent">
										{achievement.number}
									</span>
								</div>
								<Balancer>{achievement.title}</Balancer>
							</h3>
							<p className="text-pretty text-xs !leading-relaxed opacity-55 md:text-sm">
								<Balancer>{achievement.description}</Balancer>
							</p>
						</RevealFade>
					))}
				</div>

				<img
					src="/images/06.png"
					alt=""
					className="pointer-events-none absolute top-0 z-0 w-96 rotate-[-40deg] select-none opacity-20 grayscale-[0.5] hue-rotate-30 md:-left-40 md:opacity-90"
				/>
			</div>
		</Section>
	);
}

type Achievement = {
	number: string;
	title: string;
	description: string;
};

const achievements: Achievement[] = [
	{
		number: '1.',
		title: 'Broadcast',
		description:
			'Commenced discussions with leading broadcasters including MEASAT (Astro) and Media Prima for TV Sync Licensing. Secured digital rights through OSM and MACP via an agency agreement. Obtained dubbing rights via MACP and Public Performance Malaysia Berhad.',
	},
	{
		number: '2.',
		title: 'TV Productions',
		description:
			'An MOU has been forged with the TV Drama Association of Malaysia to enhance synchronization rights licensing for TV production. This collaboration sets guidelines for rates and encourages the incorporation of local songs in TV programs.',
	},
	{
		number: '3.',
		title: 'Going International',
		description:
			'MPA is actively promoting domestically published songs abroad, beginning with participation in key events such as the ICMP Asia Pacific Regional Meeting of Music Publishers in Beijing and music expos like MIDEM. These efforts aim to amplify the presence of local music talent on the global stage.',
	},
	{
		number: '4.',
		title: 'Digital & Streaming',
		description:
			'MPA has established a dedicated YouTube task force in collaboration with MACP. This task force aims to aid in the identification and claiming process for unmatched song lists potentially containing millions of titles on YouTube.',
	},
	{
		number: '5.',
		title: 'Intellectual Property',
		description:
			'Consistent and collaborative teamwork with MACP has been undeniably instrumental in meticulously crafting a highly compelling and comprehensive working paper for MyIPO, steadfastly championing the extension of copyright duration to 70 years.',
	},
	{
		number: '6.',
		title: 'Networking',
		description:
			"Inclusion of two local publishers on the Board of Directors of MACP. Leading the effort to revise the definition of a local publisher in MACP's M&A, stipulating that only local publishers have the authority to elect their representatives to the MACP Board of Directors.",
	},
];
