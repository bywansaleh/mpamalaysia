/* eslint-disable @next/next/no-img-element */
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import {
	companyAddress,
	companyEmail,
	companyFax,
	companyPhone,
} from '@/app/company';
import { siteTitle } from '@/app/metadata';

export default async function Footer() {
	return (
		<footer
			className={cn('relative overflow-hidden py-10', 'hover:[&_a]:underline')}
		>
			{/* <img
				src="/images/gradient.png"
				alt=""
				className="pointer-events-none absolute -right-0 top-1/4 z-0 w-[60rem] -translate-y-1/2 rotate-90 select-none opacity-40 grayscale-[0.6] dark:opacity-10"
			/> */}

			<div className="container relative flex flex-col items-start gap-4">
				<div
					className={cn(
						'grid grid-cols-1 gap-6 text-xs font-medium md:grid-cols-4',
						'[&_h4]:col-span-4 [&_h4]:mb-2 [&_h4]:text-2xs [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-widest [&_h4]:text-muted-foreground'
					)}
				>
					<div className="col-span-2">
						<h3 className="mb-2 text-2xl font-light">Contact</h3>
						<p className="text-balance">
							<Balancer>{companyAddress}</Balancer>
						</p>

						<div className="mt-4 flex gap-2">
							<a
								href="https://www.instagram.com/mpa.my/"
								className="flex size-8 items-center justify-center rounded-full bg-foreground p-0 text-background"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 256"
									className="size-5"
								>
									<path
										fill="currentColor"
										d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
									/>
								</svg>
							</a>
							<a
								href={`mailto:${companyEmail}`}
								className="flex h-8 items-center rounded-full bg-foreground px-4 text-background !no-underline"
							>
								{companyEmail}
							</a>
						</div>
					</div>

					<div>
						<h4>About</h4>
						<p className="text-pretty">
							<Balancer>
								<span className="text-brand">
									Music Publishers Association of Malaysia
								</span>{' '}
								safeguards the rights and promotes the works of music publishers
								in the country.
							</Balancer>
						</p>
					</div>

					<div>
						<h4>Links</h4>
						<ul>
							<li>
								<a href="https://macp.com.my/">
									Music Authors Copyright Protection
								</a>
							</li>
							<li>
								<a href="https://rpm.my/">Recording Performers Malaysia</a>
							</li>
							<li>
								<a href="https://ppm.my/">Public Performance Malaysia</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="text-xs font-medium text-muted-foreground">
					{siteTitle} &copy; {new Date().getFullYear()} &middot; Phone:{' '}
					<a href={`tel:${companyPhone}`}>{companyPhone}</a> &middot; Fax:{' '}
					{companyFax}
				</p>
			</div>
		</footer>
	);
}
