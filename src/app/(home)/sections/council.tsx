/* eslint-disable @next/next/no-img-element */
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import Section from '@/components/section';

import styles from './styles.module.css';

export default function Council() {
	return (
		<Section id="council" className="relative scroll-m-10 py-20">
			<div className="container">
				<h2 className="mb-8 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Council <span className="text-muted-foreground">Members</span>
				</h2>

				{/* <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{members
						.filter((member) => member.position !== 'Council Member')
						.map((member, i) => (
							<Member member={member} key={i} />
						))}
				</div> */}

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
					{members
						// .filter((member) => member.position === 'Council Member')
						.map((member, i) => (
							<Member member={member} key={i} />
						))}
				</div>

				<p className="mt-8 max-w-sm text-pretty text-sm font-normal">
					<Balancer>
						The council members boast extensive experience, particularly hailing
						from music backgrounds, and are{' '}
						<span className="text-muted-foreground">
							recognized as prominent leaders
						</span>{' '}
						within the industry.
					</Balancer>
				</p>
			</div>

			{/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand opacity-10" /> */}

			<img
				src="/images/gradient.png"
				alt=""
				className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[200%] select-none opacity-40 grayscale-[0.6] hue-rotate-30 dark:opacity-10"
			/>
		</Section>
	);
}

function Member({ member }: { member: Member }) {
	return (
		<div
			className={cn(
				styles.card,
				'group flex gap-2 !p-4',
				// member.position === 'Council Member' &&
				'flex-col items-start md:flex-row-reverse md:items-center',
				styles.glow
			)}
		>
			<div>
				<div className="inline-block rounded-full p-1.5 ring-1 ring-foreground/20">
					<img
						src={member.image}
						alt={member.name}
						className={cn(
							'block aspect-square scale-110 rounded-full bg-foreground/20',
							// member.position === 'Council Member' ? 'size-16' : 'size-20'
							'size-14'
						)}
					/>
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-1">
				<p className="text-xs font-semibold tracking-tighter text-brand/90">
					{member.position}
				</p>
				<h3
					className={cn(
						'font-semibold !leading-none tracking-tighter',
						// member.position === 'Council Member' &&
						'text-sm md:text-base'
					)}
				>
					<Balancer>{member.name}</Balancer>
				</h3>
				<p className="text-xs font-medium tracking-tighter text-muted-foreground">
					<Balancer>{member.company}</Balancer>
				</p>
			</div>
		</div>
	);
}

type Member = {
	name: string;
	position: string;
	company: string;
	image: string;
};

const members: Member[] = [
	{
		name: 'Ng Ay Na',
		position: 'Chairman',
		company: 'Goodsound Music Publishing Sdn Bhd',
		image: '/images/council/ng-ay-na-3.png',
	},
	{
		name: 'Jennifah Johari',
		position: 'Secretary',
		company: 'Luncai Emas Sdn Bhd',
		image: '/images/council/jennifah.png',
	},
	{
		name: 'Edwin Tan',
		position: 'Treasurer',
		company: 'Suwah Music Publishing Sdn Bhd',
		image: '/images/council/edwin-tan.png',
	},
	{
		name: 'Chong Yi',
		position: 'Council Member',
		company: 'Rock Records Sdn Bhd',
		image: '/images/council/chongyi.png',
	},
	{
		name: 'Rosmin Hashim',
		position: 'Council Member',
		company: 'Nova Music (M) Sdn Bhd',
		image: '/images/council/rosmin-hashim.png',
	},
	{
		name: 'Anthony Gan Kok Hong',
		position: 'Council Member',
		company: 'NSR Music Publishing Sdn Bhd',
		image: '/images/council/anthony-gan.png',
	},
	{
		name: 'Karim Radzali',
		position: 'Council Member',
		company: 'Faithful Music Sdn Bhd',
		image: '/images/council/karim.png',
	},
	{
		name: 'Kimmy Khir',
		position: 'Council Member',
		company: 'Taja Archive Sdn Bhd',
		image: '/images/council/kimmy-khir.png',
	},
	{
		name: 'Jack Teo',
		position: 'Council Member',
		company: 'Universal Music Publishing Sdn Bhd',
		image: '/images/council/jack-teo.png',
	},
	{
		name: 'Norkhayati Mohd Hashim',
		position: 'Council Member',
		company: 'Kelarai Sakti Publishing Sdn Bhd',
		image: '/images/council/baiduri.png',
	},
];
