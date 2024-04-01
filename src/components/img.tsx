/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ComponentProps } from 'react';
import type { SetRequired } from 'type-fest';

export default function Img({
	src,
	alt,
	...params
}: SetRequired<ComponentProps<'img'>, 'alt'>) {
	// replace src with cdn
	src =
		process.env.NODE_ENV === 'production'
			? src?.replace(
					'https://',
					'https://images.weserv.nl/?url=https://staging.mpamalaysia.com/'
				)
			: src;

	return <img src={src} alt={alt} {...params} />;
}
