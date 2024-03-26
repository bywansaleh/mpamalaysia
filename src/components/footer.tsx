import { cn } from '@/lib/utils';

import {
	companyAddress,
	companyEmail,
	companyFax,
	companyPhone,
} from '@/app/company';
import { siteTitle } from '@/app/metadata';

import LogoText from './logo-text';

export default async function Footer() {
	return (
		<footer
			className={cn(
				'border-t bg-white py-10 dark:bg-black',
				'hover:[&_a]:underline'
			)}
		>
			<div className="container flex flex-col items-start gap-6">
				<div className="">
					<LogoText className="h-8" />
					<span className="sr-only">{siteTitle}</span>
				</div>

				<div
					className={cn(
						'grid grid-cols-1 gap-10 text-xs font-medium md:grid-cols-3',
						'[&_h4]:col-span-4 [&_h4]:mb-2 [&_h4]:text-2xs [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-widest [&_h4]:text-muted-foreground/70'
					)}
				>
					<div>
						<h4>About</h4>
						<p>
							<span className="text-brand">
								The Music Publishers Association of Malaysia
							</span>{' '}
							safeguards the rights and promotes the works of music publishers
							in the country.
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
								<a href="https://rpm.my/">Recording Perfomers Malaysia</a>
							</li>
							<li>
								<a href="https://ppm.my/">Public Performance Malaysia</a>
							</li>
						</ul>
					</div>
				</div>

				<p className={cn('text-xs font-medium text-muted-foreground/70')}>
					Copyright &copy; {new Date().getFullYear()} {siteTitle}{' '}
					{companyAddress}
					<br />
					Phone: <a href={`tel:${companyPhone}`}>{companyPhone}</a> &middot;
					Email: <a href={`mailto:${companyEmail}`}>{companyEmail}</a> &middot;
					Fax: {companyFax}
				</p>
			</div>
		</footer>
	);
}
