import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav className="[--h:theme(spacing.16)]">
			<div className="fixed inset-x-0 top-0 z-[999] flex h-[--h] items-center border-b bg-background shadow-lg shadow-border/20">
				<div className="container">
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
			<div className="pointer-events-none invisible h-[--h]" />
		</nav>
	);
}
