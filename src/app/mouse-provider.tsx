'use client';

import { useEffect } from 'react';

const includeTouch = true;

export default function MouseProvider() {
	// const mvx = useMotionValue(0);
	// const mvy = useMotionValue(0);

	useEffect(() => {
		const updateMousePosition: EventListener = (ev) => {
			let x: number, y: number;
			if ('touches' in ev) {
				const touch = (ev as TouchEvent).touches[0];
				[x, y] = [touch.clientX, touch.clientY];
			} else {
				[x, y] = [(ev as MouseEvent).clientX, (ev as MouseEvent).clientY];
			}

			document.documentElement.style.setProperty(
				'--mx',
				Math.round(x).toString()
			);
			document.documentElement.style.setProperty(
				'--my',
				Math.round(y).toString()
			);

			// mvx.set(x);
			// mvy.set(y);
		};

		window.addEventListener('pointermove', updateMousePosition);
		if (includeTouch) {
			window.addEventListener('touchmove', updateMousePosition);
		}

		return () => {
			window.removeEventListener('pointermove', updateMousePosition);
			if (includeTouch) {
				window.removeEventListener('touchmove', updateMousePosition);
			}
		};
	}, []);

	// const springmvx = useSpring(mvx, { damping: 40, stiffness: 500 });
	// const springmvy = useSpring(mvy, { damping: 40, stiffness: 500 });

	// useMotionValueEvent(mvx, 'change', (x) => {
	//   document.documentElement.style.setProperty('--mx', `${Math.round(x)}px`);
	// });
	// useMotionValueEvent(mvy, 'change', (y) => {
	//   document.documentElement.style.setProperty('--my', `${Math.round(y)}px`);
	// });

	return null;
}
