/* eslint-disable @next/next/no-img-element */
export default function Achievements() {
	return (
		<div className="relative overflow-hidden border-t py-10">
			{/* <div className="absolute inset-0 z-0 bg-orange-900 opacity-10 [mask:linear-gradient(to_top,black,transparent)]" /> */}

			<div className="container relative">
				<img
					src="/images/06.png"
					alt=""
					className="absolute -bottom-20 -left-24 z-0 w-96 opacity-30 md:opacity-50"
				/>

				<h2 className="relative mb-12 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Achievements
				</h2>

				<div className="relative grid gap-10 md:ml-60 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							1.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								Broadcast
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								Initiated negotiations with major broadcasters such as MEASAT
								(Astro) and Media Prima for TV Sync License. Digital rights (OSM
								and MACP via an agency agreement). Dubbing rights (via MACP and
								Public Performance Malaysia Berhad).
							</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							2.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								TV Productions
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								MPA has signed an MOU with the TV Drama Association of Malaysia
								in a move to improve and enhance the licensing of
								synchronization rights for TV production. MPA has established
								guidelines for synchronization rates and will make additional
								efforts to encourage the use of local songs in TV production.
							</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							3.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								Going International
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								Initiatives taken by MPA to promote locally published songs
								abroad, targeting other territories, began with participation in
								events such as the ICMP Asia Pacific Regional Meeting of Music
								Publishers in Beijing, China, and other music expos like MIDEM.
							</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							4.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								Digital & Streaming
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								MPA set up a YouTube task force, which will collaborate with
								MACP to assist in the claiming of unmatched song lists that may
								contain millions of titles on YouTube.
							</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							5.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								Going Public
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								MPA is currently collaborating with MACP to prepare a working
								paper for MyIPO, advocating for the extension of copyright to 70
								years.
							</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="font-serif text-5xl font-extralight text-brand">
							6.
						</div>
						<div className="flex-1">
							<h3 className="mb-2 text-xl font-light text-muted-foreground/70">
								Networking
							</h3>
							<p className="text-pretty text-xs leading-relaxed">
								MPA initiated the inclusion of one local publisher, and
								subsequently two, on the Board of Directors of MACP.
								Additionally, MPA led the effort to revise the definition of a
								local publisher in MACP&apos;s M&A, stipulating that only local
								publishers have the authority to elect their representatives to
								the MACP Board of Directors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
