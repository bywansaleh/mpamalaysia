import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav>
			<div className="fixed inset-x-0 top-0 z-[999] flex h-20 items-center">
				<div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24">
					{Array.from({ length: 8 }).map((_, i) => {
						return (
							<div
								key={i}
								className="pointer-events-none absolute inset-0"
								style={{
									// zIndex: i + 1,
									backdropFilter: `blur(${0.6 * (i + 1)}px)`,
									WebkitBackdropFilter: `blur(${0.6 * (i + 1)}px)`,
									mask: `linear-gradient(to top,
                    transparent ${12.5 * i}%,
                    black ${12.5 * (i + 1)}%,
                    black ${12.5 * (i + 2)}%,
                    transparent ${12.5 * (i + 3)}%)`,
								}}
							/>
						);
					})}
				</div>
				<div className="container z-10">
					<div className="flex h-8 gap-2 mix-blend-difference">
						<div>
							<MyFlag className="h-full" />
						</div>
						<div>
							<LogoText className="h-full" />
							<span className="sr-only">{siteTitle}</span>
						</div>
					</div>
				</div>

				{/* <div className="absolute inset-x-0 top-0 z-0 h-[200%] bg-gradient-to-b from-background from-20%" /> */}
			</div>
		</nav>
	);
}
