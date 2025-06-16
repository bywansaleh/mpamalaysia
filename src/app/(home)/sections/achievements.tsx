import Balancer from 'react-wrap-balancer';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';

import styles from './styles.module.css';

export default function Achievements() {
	return (
		<>
			{/* <div>
				<img
					src="/images/waves.svg"
					alt=""
					className="relative -z-10 w-screen max-w-none opacity-50 mix-blend-soft-light [mask:linear-gradient(to_bottom,transparent_10%,black,transparent_90%)] md:-my-40"
				/>
			</div> */}

			<Section id="achievements" className="relative scroll-m-10 py-20">
				<div className="relative container">
					<RevealFade>
						<h2 className={styles.section_header}>
							<span>Achievements</span>
						</h2>
					</RevealFade>

					<div className="mt-16 grid grid-cols-2 gap-4 md:ml-72 md:gap-10 lg:grid-cols-3">
						{achievements.map((achievement, i) => (
							<AchievementCard key={i} achievement={achievement} />
						))}
					</div>

					<img
						src="/images/06.png"
						alt=""
						className="pointer-events-none absolute top-0 z-0 w-96 rotate-[-40deg] opacity-20 grayscale-[0.5] hue-rotate-30 select-none md:-left-40 md:opacity-90"
					/>
				</div>
			</Section>
		</>
	);
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
	return (
		<RevealFade>
			<div className="flex flex-col gap-4">
				<div className="w-[10%] font-serif text-4xl leading-none! font-extralight md:text-5xl">
					<span className="from-brand to-brand-darker inline-block bg-linear-to-b bg-clip-text text-transparent">
						{achievement.number}
					</span>
				</div>
				<h3 className="relative text-xl leading-none! font-light tracking-tight">
					<Balancer>{achievement.title}</Balancer>
				</h3>
				<p className="text-xs leading-relaxed! text-pretty opacity-55 md:text-sm">
					<Balancer>{achievement.description}</Balancer>
				</p>
			</div>
		</RevealFade>
	);
}

interface Achievement {
	number: string;
	title: string;
	description: string;
}

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
