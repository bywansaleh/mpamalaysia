/* eslint-disable @next/next/no-img-element */
const members = [
	{
		name: 'Ng Ay Na',
		position: 'Chairman',
		company: 'Goodsound Music Publishing Sdn Bhd',
		image: '/images/council/ng-ay-na.png',
	},
	{
		name: 'Jennifah Johari',
		position: 'Secretary',
		company: 'Luncai Emas Sdn Bhd',
		image: '/images/council/jennifah.png',
	},
	{
		name: 'Edwin Tan',
		position: 'Treasurer',
		company: 'Suwah Music Publishing Sdn Bhd',
		image: '/images/council/edwin-tan.png',
	},
	{
		name: 'Chong Yi',
		position: 'Council Member',
		company: 'Rock Records (M) Sdn Bhd',
		image: '/images/council/chongyi.png',
	},
	{
		name: 'Rosmin Hashim',
		position: 'Council Member',
		company: 'Nova Music (M) Sdn Bhd',
		image: '/images/council/rosmin-hashim.png',
	},
	{
		name: 'Anthony Gan Kok Hong',
		position: 'Council Member',
		company: 'New Southern Records Sdn Bhd',
		image: '/images/council/anthony-gan.png',
	},
	{
		name: 'Karim Radzali',
		position: 'Council Member',
		company: 'Faithful Music Sdn Bhd',
		image: '/images/council/karim.png',
	},
	{
		name: 'Kimmy Khir',
		position: 'Council Member',
		company: 'Taja Archive Publishing Sdn Bhd',
		image: '/images/council/kimmy-khir.png',
	},
	{
		name: 'Jack Teo',
		position: 'Council Member',
		company: 'Universal Music Publishing Sdn Bhd',
		image: '/images/council/jack-teo.png',
	},
	{
		name: 'Norkhayati Mohd Hashim',
		position: 'Council Member',
		company: 'Kelarai Sakti Sdn Bhd',
		image: '/images/council/baiduri.png',
	},
];

export default function Council() {
	return (
		<div className="relative">
			<div className="container py-10">
				<h2 className="mb-12 text-pretty font-serif text-4xl tracking-tight md:text-5xl">
					Council <span className="text-muted-foreground/80">Members</span>
				</h2>

				<div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{members.map((member, i) => (
						<div
							key={i}
							className="group flex flex-col items-center text-center"
						>
							<div className="mb-3 overflow-hidden rounded-full bg-gray-300">
								<img
									src={member.image}
									alt={member.name}
									className="block size-28 scale-105 grayscale transition-all duration-500 group-hover:grayscale-0"
								/>
							</div>
							<h3 className="text-base font-normal">{member.name}</h3>
							<p className="text-xs font-bold text-brand/90">
								{member.position}
							</p>
							<p className="text-2xs text-muted-foreground">{member.company}</p>
						</div>
					))}
				</div>

				<p className="mt-20 max-w-md text-pretty text-sm font-medium leading-tight text-muted-foreground/80">
					The council members boast extensive experience, particularly hailing
					from music backgrounds, and are recognized as prominent leaders within
					the industry.
				</p>
			</div>
		</div>
	);
}
