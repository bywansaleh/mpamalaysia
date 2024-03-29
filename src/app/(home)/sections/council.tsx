/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

import styles from './styles.module.css';

export default function Council() {
	return (
		<div className="relative">
			{/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand opacity-10" /> */}

			<img
				src="/images/gradient.png"
				alt=""
				className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[200%] select-none opacity-40 dark:opacity-10"
			/>

			<div className="container py-10">
				<h2 className="mb-8 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Council <span className="text-muted-foreground">Members</span>
				</h2>

				<div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{members
						.filter((member) => member.position !== 'Council Member')
						.map((member, i) => (
							<Card member={member} key={i} />
						))}
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
					{members
						.filter((member) => member.position === 'Council Member')
						.map((member, i) => (
							<Card member={member} key={i} />
						))}
				</div>

				<p className="mt-8 max-w-sm text-pretty text-sm font-normal">
					The council members boast extensive experience, particularly hailing
					from music backgrounds, and are{' '}
					<span className="text-muted-foreground">
						recognized as prominent leaders
					</span>{' '}
					within the industry.
				</p>
			</div>
		</div>
	);
}

function Card({ member }: { member: Member }) {
	return (
		<div
			className={cn(
				styles.card,
				'group flex flex-row-reverse items-center gap-2 !p-4',
				member.position === 'Council Member' &&
					'flex-col items-start md:flex-row-reverse md:items-center',
				styles.glow
			)}
		>
			<div>
				<div className="inline-block overflow-hidden rounded-full bg-gray-300">
					<img
						src={member.image}
						alt={member.name}
						className={cn(
							'block aspect-square size-20 scale-110',
							member.position === 'Council Member' && 'size-16'
						)}
					/>
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-1">
				<p className="text-xs font-semibold text-brand/90">{member.position}</p>
				<h3
					className={cn(
						'text-2xl font-semibold !leading-none tracking-tighter',
						member.position === 'Council Member' && 'text-sm md:text-base'
					)}
				>
					{member.name}
				</h3>
				<p className="line-clamp-1 text-xs font-medium tracking-tighter text-muted-foreground">
					{member.company}
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
		company: 'Goodsound Music Publishing',
		image: '/images/council/ng-ay-na.png',
	},
	{
		name: 'Jennifah Johari',
		position: 'Secretary',
		company: 'Luncai Emas',
		image: '/images/council/jennifah.png',
	},
	{
		name: 'Edwin Tan',
		position: 'Treasurer',
		company: 'Suwah Music Publishing',
		image: '/images/council/edwin-tan.png',
	},
	{
		name: 'Chong Yi',
		position: 'Council Member',
		company: 'Rock Records',
		image: '/images/council/chongyi.png',
	},
	{
		name: 'Rosmin Hashim',
		position: 'Council Member',
		company: 'Nova Music',
		image: '/images/council/rosmin-hashim.png',
	},
	{
		name: 'Anthony Gan Kok Hong',
		position: 'Council Member',
		company: 'New Southern Records',
		image: '/images/council/anthony-gan.png',
	},
	{
		name: 'Karim Radzali',
		position: 'Council Member',
		company: 'Faithful Music',
		image: '/images/council/karim.png',
	},
	{
		name: 'Kimmy Khir',
		position: 'Council Member',
		company: 'Taja Archive Publishing',
		image: '/images/council/kimmy-khir.png',
	},
	{
		name: 'Jack Teo',
		position: 'Council Member',
		company: 'Universal Music Publishing',
		image: '/images/council/jack-teo.png',
	},
	{
		name: 'Norkhayati Mohd Hashim',
		position: 'Council Member',
		company: 'Kelarai Sakti',
		image: '/images/council/baiduri.png',
	},
];
