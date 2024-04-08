'use client';

import { useStore } from '@nanostores/react';
import { m } from 'framer-motion';

import { siteTitle } from '@/lib/config';
import { cn } from '@/lib/utils';

import { $currentSection } from '@/app/store';

import LogoFull from './logo-full';

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
			<div className="fixed inset-x-0 top-0 z-[999] flex h-28 items-center">
				<div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32">
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

				<div className="pointer-events-none absolute inset-x-0 top-0 block h-20 bg-background [mask:linear-gradient(to_top,transparent,black)] sm:hidden" />

				<div className="container z-10">
					<div className="flex items-end justify-between">
						<div className="h-14 sm:h-20">
							<LogoFull className="h-full" />
							<span className="sr-only">{siteTitle}</span>
						</div>

						<ul className="-mb-1.5 flex h-8 items-center rounded-full p-1 text-xs font-medium !leading-none tracking-tight ring-foreground/[7%] sm:mb-1.5 sm:h-9 sm:gap-1 sm:bg-card/50 sm:text-sm sm:ring-1 sm:backdrop-blur">
							{links.map((link) => (
								<li key={link.id} className="h-full">
									<a
										href={link.href}
										className={cn(
											'relative flex h-full items-center justify-center px-1.5 transition-all duration-300 sm:px-3',
											section === link.id && '!text-white'
										)}
										onClick={(ev) => {
											ev.preventDefault();
											const el = document.getElementById(link.id);
											if (el) {
												el.scrollIntoView({ behavior: 'smooth' });
											}
										}}
									>
										<span className="relative z-10">{link.title}</span>
										{section === link.id && (
											<m.span
												layoutId="nav-pill"
												className={cn(
													'absolute inset-0 z-0 rounded-full !bg-brand !text-white'
												)}
											/>
										)}
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
