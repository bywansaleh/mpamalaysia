import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav className="">
			<div className="container py-8">
				<div className="flex h-8 gap-1">
					<div>
						<MyFlag className="h-full" />
					</div>
					<div>
						<LogoText className="h-full" />
						<span className="sr-only">{siteTitle}</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
