/* eslint-disable @next/next/no-img-element */

// import img from '@/assets/images/mj1.png';

import Achievements from './sections/achievements';
import Companies from './sections/companies';
import Council from './sections/council';
import Pillars from './sections/pillars';
import Welcome from './sections/welcome';

export default function Home() {
	return (
		<div className="w-screen overflow-hidden">
			<Welcome />
			<Pillars />
			<Companies />
			<Council />
			<Achievements />
		</div>
	);
}
