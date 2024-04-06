'use client';

import { m, Variants } from 'framer-motion';

export function RevealFade({
	duration = 0.4,
	delay = 0.25,
	once = true,
	amount = 0.25,
	sliding = true,
	children,
	...props
}: {
	duration?: number;
	delay?: number;
	once?: boolean;
	amount?: number | 'some' | 'all' | undefined;
	sliding?: boolean;
	children: React.ReactNode;
} & React.ComponentProps<typeof m.div>) {
	const variants: Variants = {
		initial: {
			opacity: 0,
			y: sliding ? 20 : 0,
			// scale: sliding ? 0.95 : 1,
		},
		reveal: {
			opacity: 1,
			y: 0,
			// scale: 1,
			transition: {
				delay,
				duration,
				type: 'spring',
				damping: 40,
				stiffness: 160,
			},
		},
	};

	return (
		<m.div
			variants={variants}
			initial="initial"
			whileInView="reveal"
			viewport={{
				amount,
				once,
			}}
			{...props}
		>
			{children}
		</m.div>
	);
}
