/* eslint-disable @next/next/no-img-element */

import Achievements from './sections/achievements';
import Companies from './sections/companies';
import Council from './sections/council';
import Instagram from './sections/instagram';
import Pillars from './sections/pillars';
import Welcome from './sections/welcome';

export const dynamic = 'force-static';
export const revalidate = 60;
// export const runtime = 'edge';

export default function Home() {
	return (
		<div>
			<Welcome />
			<Pillars />
			<Companies />
			<Council />
			<Achievements />
			<Instagram />
		</div>
	);
}
