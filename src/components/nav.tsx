import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav className="[--h:theme(spacing.20)]">
			<div className="fixed inset-x-0 top-0 z-[999] flex h-[--h] items-center">
				<div className="absolute inset-x-0 top-0 z-0 h-[150%] bg-gradient-to-b from-background from-40% to-transparent" />

				<div className="container z-10">
					<div className="flex h-8 gap-2">
						<div>
							<MyFlag className="h-full" />
						</div>
						<div>
							<LogoText className="h-full" />
							<span className="sr-only">{siteTitle}</span>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="pointer-events-none invisible h-[--h]" /> */}
		</nav>
	);
}
