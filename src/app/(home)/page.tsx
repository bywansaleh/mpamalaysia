/* eslint-disable @next/next/no-img-element */

// import img from '@/assets/images/mj1.png';

import Council from './sections/council';
import Pillars from './sections/pillars';

export default function Home() {
	return (
		<>
			<div className="relative border-b">
				<div className="container py-10 pt-32">
					<div className="max-w-screen-md">
						<h2 className="text-pretty font-heading text-4xl font-medium tracking-tight md:text-5xl">
							<span className="text-muted-foreground/80">
								Protecting and promoting
							</span>{' '}
							the rights and interests of music publishers in Malaysia.
						</h2>
						<p className="mt-40 text-pretty text-2xl font-light !leading-[1.1] md:text-3xl">
							Music Publishers Association of Malaysia safeguards the rights and
							promotes the works of music publishers in the country.{' '}
							<span className="text-muted-foreground/80">
								We focus on the following six pillars.
							</span>
						</p>
					</div>
				</div>
			</div>

			<Pillars />
			<Council />
		</>
	);
}
