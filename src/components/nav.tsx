import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';
import MyFlag from './my-flag';

export default function Nav() {
	return (
		<nav className="border-b py-6">
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
		</nav>
	);
}
