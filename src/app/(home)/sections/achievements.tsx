/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer';

export default function Achievements() {
	return (
		<div className="relative overflow-hidden py-10">
			<div className="container relative">
				<img
					src="/images/06.png"
					alt=""
					className="pointer-events-none absolute top-0 z-0 w-96 rotate-[-40deg] select-none opacity-20 grayscale-[0.3] md:-left-40 md:opacity-90"
				/>

				<h2 className="relative mb-12 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Achievements
				</h2>

				<div className="grid gap-10 md:ml-60 md:grid-cols-2 lg:grid-cols-3">
					{achievements.map((achievement, i) => (
						<div key={i} className="flex gap-6">
							<div className="w-[10%] font-serif text-5xl font-extralight text-brand">
								{achievement.number}
							</div>
							<div className="flex-1">
								<h3 className="mb-2 text-xl font-medium tracking-tight">
									<Balancer>{achievement.title}</Balancer>
								</h3>
								<p className="text-pretty text-xs !leading-relaxed md:text-sm">
									<Balancer>{achievement.description}</Balancer>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
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
			'Consistent teamwork with MACP has been instrumental in crafting a compelling working paper for MyIPO, championing the extension of copyright duration to 70 years.',
	},
	{
		number: '6.',
		title: 'Networking',
		description:
			"Inclusion of two local publishers on the Board of Directors of MACP. Leading the effort to revise the definition of a local publisher in MACP's M&A, stipulating that only local publishers have the authority to elect their representatives to the MACP Board of Directors.",
	},
];
