import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';

import styles from './styles.module.css';

export default function Council() {
	return (
		<Section id="council" className="relative scroll-m-10 py-20">
			<div className="container">
				<RevealFade>
					<h2 className={styles.section_header}>
						<span>Council Members</span>
					</h2>
				</RevealFade>

				{/* <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{members
						.filter((member) => member.position !== 'Council Member')
						.map((member, i) => (
							<Member member={member} key={i} />
						))}
				</div> */}

				<div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
					{members
						// .filter((member) => member.position === 'Council Member')
						.map((member, i) => (
							<MemberCard member={member} key={i} />
						))}
				</div>

				<RevealFade>
					<p className="mt-8 max-w-sm text-sm font-normal text-pretty">
						<Balancer>
							The council members boast extensive experience, particularly
							hailing from music backgrounds, and are{' '}
							<span className="opacity-55">
								recognized as prominent leaders
							</span>{' '}
							within the industry.
						</Balancer>
					</p>
				</RevealFade>
			</div>

			{/* <div className="absolute inset-0 z-0 bg-linear-to-b from-brand opacity-10" /> */}

			<img
				src="/images/gradient.png"
				alt=""
				className="pointer-events-none absolute top-0 -right-1/4 -z-10 h-[200%] opacity-40 grayscale-[0.6] hue-rotate-30 select-none dark:opacity-10"
			/>
		</Section>
	);
}

function MemberCard({ member }: { member: Member }) {
	return (
		<RevealFade>
			<div
				className={cn(
					styles.card,
					'group flex gap-2 p-4!',
					// member.position === 'Council Member' &&
					'flex-col items-start md:flex-row-reverse md:items-center'
				)}
			>
				<div>
					<div className="border-foreground/10 group-hover:border-brand relative inline-block overflow-hidden rounded-full border p-1.5 transition-all duration-500">
						<img
							src={member.image}
							alt={member.name}
							className={cn(
								'from-brand/30 to-card block aspect-square scale-110 rounded-full bg-linear-to-t',
								// member.position === 'Council Member' ? 'size-16' : 'size-20'
								'size-16'
							)}
						/>
					</div>
				</div>

				<div className="flex flex-1 flex-col gap-1">
					<p className="text-brand/90 text-xs font-semibold tracking-tighter">
						{member.position}
					</p>
					<h3
						className={cn(
							'leading-none! font-medium tracking-tighter',
							// member.position === 'Council Member' &&
							'text-sm md:text-base'
						)}
					>
						<Balancer>{member.name}</Balancer>
					</h3>
					<p className="text-xs font-medium tracking-tighter opacity-55">
						<Balancer>
							{member.company.replace(/( \(M\))? Sdn Bhd$/, '')}
						</Balancer>
					</p>
				</div>
			</div>
		</RevealFade>
	);
}

interface Member {
	name: string;
	position: string;
	company: string;
	image: string;
}

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
		image: '/images/council/jennifah2.png',
	},
	{
		name: 'Edwin Tan',
		position: 'Treasurer',
		company: 'Suwah Music Publishing Sdn Bhd',
		image: '/images/council/edwin-tan.png',
	},
	{
		name: 'Janice Foong',
		position: 'Council Member',
		company: 'Sony Music Publishing Sdn Bhd',
		image: '/images/council/janice.png',
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
