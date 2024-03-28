export default function Companies() {
	return (
		<div className="relative overflow-hidden border-t [perspective:800px]">
			<div className="absolute inset-0 z-0 bg-[url(/images/dot.svg)] bg-repeat opacity-30 invert [mask:linear-gradient(to_top,black,transparent)] [transform:rotateX(30deg)] dark:invert-0" />
			<div className="absolute inset-0 z-0 bg-orange-900 opacity-10 [mask:linear-gradient(to_top,black,transparent)]" />

			<div className="container relative grid gap-6 py-10 md:grid-cols-2">
				<h2 className="mb-8 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Publishing <span className="text-muted-foreground/80">Companies</span>
				</h2>

				<div className="-mx-2">
					{companies.map((company, i) => (
						<div
							key={i}
							className="rounded-md px-2 py-1 hover:bg-brand hover:text-brand-foreground"
						>
							<h3>{company.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

type Company = {
	name: string;
};

const companies: Company[] = [
	{ name: 'Faithful Music Sdn Bhd' },
	{ name: 'FMC Music Sdn Bhd' },
	{ name: 'Frequen-Z Records' },
	{ name: 'Goodsound Music Publishing Sdn Bhd' },
	{ name: 'Indah Karya Publishing Sdn Bhd' },
	{ name: 'Insichtech Musicland Sdn Bhd' },
	{ name: 'Irama Bayu Production' },
	{ name: 'Kelarai Sakti Publishing Sdn Bhd' },
	{ name: 'KRU Music Sdn Bhd' },
	{ name: 'Luncai Emas Sdn Bhd' },
	{ name: 'Mixology Music Sdn Bhd' },
	{ name: 'MVM Production Sdn Bhd' },
	{ name: 'NAR Publishing Sdn Bhd' },
	{ name: 'Nova Music (M) Sdn Bhd' },
	{ name: 'NSR Music Publishing Sdn Bhd' },
	{ name: 'Rock Records (M) Sdn Bhd' },
	{ name: 'Rocketfuel Entertainment Sdn Bhd' },
	{ name: 'RUSA Marketing Sdn Bhd' },
	{ name: 'Star Media Publishing Sdn Bhd' },
	{ name: 'Suwah Music Publishing Sdn Bhd' },
	{ name: 'Taja Archive Sdn Bhd' },
	{ name: 'Touch Music Publishing (M) Sdn Bhd' },
	{ name: 'Universal Music Publishing Sdn Bhd' },
	{ name: 'VEEDU Production Sdn Bhd' },
	{ name: 'VMS Music Records & Publishing Sdn Bhd' },
];
