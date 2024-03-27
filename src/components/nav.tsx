import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav className="[--h:theme(spacing.20)]">
			<div className="fixed inset-x-0 top-0 z-[999] flex h-[--h] items-center">
				<div className="absolute inset-x-0 top-0 z-0 h-[150%] bg-gradient-to-b from-background/30 from-40%" />

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

				<div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150%]">
					<div className="relative size-full">
						{Array.from({ length: 8 }).map((_, i) => {
							return (
								<div
									key={i}
									className="pointer-events-none absolute inset-0"
									style={{
										zIndex: i + 1,
										backdropFilter: `blur(${0.0625 * (2 * i * i + 1)}px)`,
										maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) ${12.5 * i}%, rgb(0, 0, 0) ${12.5 * (i + 1)}%, rgb(0, 0, 0) ${12.5 * (i + 2)}%, rgba(0, 0, 0, 0) ${12.5 * (i + 3)}%)`,
										borderRadius: 0,
										pointerEvents: 'none',
									}}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
