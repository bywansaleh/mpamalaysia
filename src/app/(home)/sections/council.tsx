/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

import styles from './styles.module.css';

export default function Council() {
	return (
		<div className="relative border-t">
			<div className="container py-10">
				<h2 className="mb-8 text-pretty font-heading text-4xl tracking-tight md:text-5xl">
					Council <span className="text-muted-foreground/80">Members</span>
				</h2>

				<div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{members
						.filter((member) => member.position !== 'Council Member')
						.map((member, i) => (
							<Card member={member} key={i} />
						))}
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
					{members
						.filter((member) => member.position === 'Council Member')
						.map((member, i) => (
							<Card member={member} key={i} />
						))}
				</div>

				<p className="mt-8 max-w-sm text-pretty text-sm font-normal text-muted-foreground/80">
					The council members boast extensive experience, particularly hailing
					from music backgrounds, and are recognized as prominent leaders within
					the industry.
				</p>
			</div>
		</div>
	);
}

function Card({ member }: { member: Member }) {
	return (
		<div className={cn('group', styles.member, styles.glow)}>
			<div className="flex flex-1 flex-col gap-1">
				<p className="text-xs font-semibold text-brand/90">{member.position}</p>
				<h3
					className={cn(
						'text-2xl font-semibold !leading-none tracking-tighter',
						member.position === 'Council Member' && 'text-base'
					)}
				>
					{member.name}
				</h3>
				<p className="line-clamp-1 text-xs font-medium tracking-tighter text-muted-foreground/80">
					{member.company}
				</p>
			</div>

			<div className="overflow-hidden rounded-full bg-gray-300">
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
