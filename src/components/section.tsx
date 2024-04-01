'use client';

import { ComponentProps, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils';

import { $currentSection } from '@/app/store';

export default function Section({
	children,
	className,
	...props
}: ComponentProps<'section'>) {
	const { ref, inView } = useInView({
		threshold: 0.8,
		rootMargin: '-50px 0px',
		triggerOnce: false,
	});

	useEffect(() => {
		if (inView && props.id) {
			$currentSection.set(props.id);
		}
	}, [inView, props.id]);

	return (
		<section ref={ref} className={cn(className)} {...props}>
			{children}
		</section>
	);
}
