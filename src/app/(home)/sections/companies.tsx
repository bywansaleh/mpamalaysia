/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';

import Section from '@/components/section';

export default function Companies() {
	return (
		<Section
			id="companies"
			className="relative max-w-[100vw] scroll-m-10 py-20"
		>
			{/* <div className="absolute inset-0 z-0 bg-orange-900 opacity-10 [mask:linear-gradient(to_top,black,transparent)]" /> */}

			<div className="container">
				<div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-black bg-gradient-to-br from-brand to-brand/60 p-4 text-white md:grid-cols-2 md:p-12">
					{/* <div className="pointer-events-none absolute inset-0 z-0 size-full bg-[url(/images/grid.svg)] bg-center bg-repeat opacity-50 [background-size:80%] [mask:linear-gradient(to_top,black,transparent)]" /> */}
					{/* <div className="pointer-events-none absolute inset-0 z-0 size-full bg-[url(/images/dot.svg)] bg-repeat opacity-50 [mask:linear-gradient(to_top,black,transparent)]" /> */}

					{/* <div
						className="absolute inset-0 z-[1] opacity-100"
						style={{
							background: `radial-gradient(
                circle at calc(var(--mx) * 1px) calc(var(--my) * 1px),
                hsl(var(--brand)),
                transparent 40vmin
              )`,
							backgroundAttachment: 'fixed',
						}}
					/> */}

					<div className="relative z-[2] flex flex-col justify-between">
						<h2 className="mb-8 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
							Publishing <span className="opacity-50">Companies</span>
						</h2>

						{/* <img
							src="/images/head.svg"
							alt=""
							className="relative size-72 -scale-x-100 invert max-md:[mask:linear-gradient(to_bottom,black_80%,transparent)] md:-bottom-12"
						/> */}
					</div>

					<div className="relative z-[2]">
						<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
							{companies.map((company, i) => (
								<div
									key={i}
									className="line-clamp-1 rounded-md text-xs md:text-sm"
								>
									<h3>{company.name}</h3>
								</div>
							))}
						</div>
					</div>

					<div className="relative z-[2] -mx-16 mt-8 [mask:linear-gradient(to_right,transparent,black,transparent)]">
						<div className="flex w-full flex-nowrap gap-6 overflow-hidden">
							<div className="flex animate-marquee gap-6">
								{companies
									.filter((company) => company.logo !== undefined)
									.map((company, i) => (
										<CompanyLogo key={i} company={company} />
									))}
							</div>
							<div className="flex animate-marquee gap-6" aria-hidden>
								{companies
									.filter((company) => company.logo !== undefined)
									.map((company, i) => (
										<CompanyLogo key={i} company={company} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

function CompanyLogo({ company }: { company: Company }) {
	return (
		<div className="[background-image:radial-gradient(circle_at_0_0,rgba(148, 144, 144, 0.15),rgba(255,255,255,0)_65%)] flex aspect-square size-20 items-center justify-center rounded-2xl bg-white/10 p-3 text-center shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-500 hover:bg-white/30 max-md:-mx-2 md:size-28 md:rounded-3xl md:p-5">
			<img
				src={`/images/company/${company.logo}.svg`}
				alt={company.name}
				className={cn(
					'inline-block size-full max-w-none object-contain invert',
					company.square && 'aspect-square size-3/4'
				)}
			/>
		</div>
	);
}

type Company = {
	name: string;
	logo?: string;
	square?: boolean;
};

const companies: Company[] = [
	{ name: 'Faithful Music Sdn Bhd', logo: 'faithful', square: true },
	{ name: 'FMC Music Sdn Bhd', logo: 'fmc' },
	{ name: 'Frequen-Z Records' },
	{
		name: 'Goodsound Music Publishing Sdn Bhd',
		logo: 'goodsound',
		square: true,
	},
	{ name: 'Indah Karya Publishing Sdn Bhd', logo: 'indah-karya', square: true },
	{ name: 'Insichtech Musicland Sdn Bhd', logo: 'musicland' },
	{ name: 'Irama Bayu Production', logo: 'ibp' },
	{ name: 'Kelarai Sakti Publishing Sdn Bhd', logo: 'kelarai', square: true },
	{ name: 'KRU Music Sdn Bhd', logo: 'kru' },
	{ name: 'Luncai Emas Sdn Bhd', logo: 'luncai', square: true },
	{ name: 'Mixology Music Sdn Bhd', logo: 'mixology', square: true },
	{ name: 'MVM Production Sdn Bhd', logo: 'mvm' },
	{ name: 'NAR Publishing Sdn Bhd', logo: 'nar' },
	{ name: 'Nova Music (M) Sdn Bhd', logo: 'nova' },
	{ name: 'NSR Music Publishing Sdn Bhd', logo: 'nsr' },
	{ name: 'Rock Records (M) Sdn Bhd', logo: 'rock' },
	{ name: 'Rocketfuel Entertainment Sdn Bhd', logo: 'rocketfuel' },
	{ name: 'RUSA Marketing Sdn Bhd', logo: 'rusa' },
	{ name: 'Star Media Publishing Sdn Bhd', logo: 'star' },
	{ name: 'Suwah Music Publishing Sdn Bhd', logo: 'src' },
	{ name: 'Taja Archive Sdn Bhd', logo: 'taja', square: true },
	{ name: 'Touch Music Publishing (M) Sdn Bhd', logo: 'touch', square: true },
	{ name: 'Universal Music Publishing Sdn Bhd', logo: 'universal' },
	{ name: 'VEEDU Production Sdn Bhd', logo: 'veedu' },
	{ name: 'VMS Music Records & Publishing Sdn Bhd' },
];
