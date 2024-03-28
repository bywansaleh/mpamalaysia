/* eslint-disable @next/next/no-img-element */

// import img from '@/assets/images/mj1.png';

import Companies from './sections/companies';
import Council from './sections/council';
import Pillars from './sections/pillars';
import Welcome from './sections/welcome';

export default function Home() {
	return (
		<>
			<Welcome />
			<Pillars />
			<Council />
			<Companies />
		</>
	);
}
