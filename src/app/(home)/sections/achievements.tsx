/* eslint-disable @next/next/no-img-element */
export default function Achievements() {
	return (
		<div className="relative overflow-hidden py-10">
			<div className="container relative">
				<img
					src="/images/06.png"
					alt=""
					className="pointer-events-none absolute -bottom-20 z-0 w-96 rotate-[-40deg] select-none opacity-30 grayscale-[0.3] md:-left-40 md:opacity-70"
				/>

				<h2 className="relative mb-12 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Achievements
				</h2>

				<div className="relative grid gap-10 md:ml-60 md:grid-cols-2 lg:grid-cols-3">
					{achievements.map((achievement, i) => (
						<div key={i} className="flex gap-6">
							<div className="w-[10%] font-serif text-5xl font-extralight text-brand">
								{achievement.number}
							</div>
							<div className="flex-1">
								<h3 className="mb-2 text-xl font-medium tracking-tight text-muted-foreground">
									{achievement.title}
								</h3>
								<p className="text-pretty text-xs !leading-relaxed md:text-sm">
									{achievement.description}
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
			'Initiated negotiations with major broadcasters such as MEASAT (Astro) and Media Prima for TV Sync License. Digital rights (OSM and MACP via an agency agreement). Dubbing rights (via MACP and Public Performance Malaysia Berhad).',
	},
	{
		number: '2.',
		title: 'TV Productions',
		description:
			'MPA has signed an MOU with the TV Drama Association of Malaysia in a move to improve and enhance the licensing of synchronization rights for TV production. MPA has established guidelines for synchronization rates and will make additional efforts to encourage the use of local songs in TV production.',
	},
	{
		number: '3.',
		title: 'Going International',
		description:
			'Initiatives taken by MPA to promote locally published songs abroad, targeting other territories, began with participation in events such as the ICMP Asia Pacific Regional Meeting of Music Publishers in Beijing, China, and other music expos like MIDEM.',
	},
	{
		number: '4.',
		title: 'Digital & Streaming',
		description:
			'MPA set up a YouTube task force, which will collaborate with MACP to assist in the claiming of unmatched song lists that may contain millions of titles on YouTube.',
	},
	{
		number: '5.',
		title: 'Intellectual Property',
		description:
			'MPA is currently collaborating with MACP to prepare a working paper for MyIPO, advocating for the extension of copyright to 70 years.',
	},
	{
		number: '6.',
		title: 'Networking',
		description:
			"MPA initiated the inclusion of one local publisher, and subsequently two, on the Board of Directors of MACP. Additionally, MPA led the effort to revise the definition of a local publisher in MACP's M&A, stipulating that only local publishers have the authority to elect their representatives to the MACP Board of Directors.",
	},
];
