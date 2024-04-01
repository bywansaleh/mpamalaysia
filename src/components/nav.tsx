'use client';

import { useStore } from '@nanostores/react';

import { siteTitle } from '@/lib/config';
import { cn } from '@/lib/utils';

import { $currentSection } from '@/app/store';

import LogoText from './logo-text';
import MyFlag from './my-flag';

const links = [
	{ id: 'pillars', title: 'Pillars', href: '#pillars' },
	{ id: 'companies', title: 'Companies', href: '#companies' },
	{ id: 'council', title: 'Council', href: '#council' },
	{ id: 'achievements', title: 'Achievements', href: '#achievements' },
];

export default function Nav() {
	const section = useStore($currentSection);

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
					<div className="flex items-center justify-between">
						<div className="flex h-5 gap-2 sm:h-8">
							<MyFlag className="h-full" />
							<LogoText className="h-full" />
							<span className="sr-only">{siteTitle}</span>
						</div>

						<ul className="flex h-7 items-center gap-1 rounded-full bg-card/50 px-3 py-1 text-xs font-medium !leading-none tracking-tight ring-1 ring-foreground/[7%] backdrop-blur sm:h-9 sm:px-1 sm:text-sm">
							{links.map((link) => (
								<li key={link.id} className="h-full">
									<a
										href={link.href}
										className={cn(
											'relative flex h-full items-center justify-center rounded-full px-3 transition-all duration-100 hover:bg-foreground/5',
											section === link.id && '!bg-brand/10 !text-brand'
										)}
										onClick={(ev) => {
											ev.preventDefault();
											const el = document.getElementById(link.id);
											if (el) {
												el.scrollIntoView({ behavior: 'smooth' });
											}
										}}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* <div className="absolute inset-x-0 top-0 z-0 h-[200%] bg-gradient-to-b from-foreground from-20% opacity-10" /> */}
			</div>
		</nav>
	);
}
