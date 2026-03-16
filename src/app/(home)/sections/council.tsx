import type { Member } from './council.data'

import { RevealFade } from '@/components/reveal-fade'
import Section from '@/components/section'
import { cn } from '@/lib/utils'

import { members } from './council.data'
import styles from './styles.module.css'

export default function Council() {
  return (
    <Section id="council" className="relative scroll-m-10 py-20">
      <div className="container">
        <RevealFade>
          <h2 className={styles.section_header}>
            <span>Council Members</span>
          </h2>
        </RevealFade>

        <div className={`
          grid grid-cols-2 gap-2.5
          sm:grid-cols-3
          md:grid-cols-4 md:gap-4
        `}
        >
          {members
            // .filter((member) => member.position === 'Council Member')
            .map((member, i) => (
              <MemberCard member={member} key={i} />
            ))}
        </div>

        <RevealFade>
          <p className="mt-8 max-w-lg text-sm font-normal text-balance">
            The council members boast extensive experience, particularly hailing from music backgrounds, and are
            {' '}
            <span className="text-brand">recognized as prominent leaders</span>
            {' '}
            within the industry.
          </p>
        </RevealFade>
      </div>

      {/* <div className="absolute inset-0 z-0 bg-linear-to-b from-brand opacity-10" /> */}

      <img
        src="/images/gradient.png"
        alt=""
        className={`
          pointer-events-none absolute top-0 -right-1/4 -z-10 h-[200%]
          opacity-40 grayscale-[0.6] hue-rotate-30 select-none
          dark:opacity-10
        `}
      />
    </Section>
  )
}

const sdnBhdRegex = /( \(M\))? Sdn Bhd$/

function MemberCard({ member }: { member: Member }) {
  return (
    <RevealFade>
      <div
        className={cn(
          styles.card,
          'group flex gap-2 p-4!',
          // member.position === 'Council Member' &&
          `
            flex-col items-start
            md:flex-row-reverse md:items-center
          `,
        )}
      >
        <div>
          <div className={`
            relative inline-block overflow-hidden rounded-full border
            border-foreground/10 p-1.5 transition-all duration-500
            group-hover:border-brand
          `}
          >
            <img
              src={member.image}
              alt={member.name}
              className={cn(
                `
                  block aspect-square scale-110 rounded-full bg-linear-to-t
                  from-brand/30 to-card
                `,
                // member.position === 'Council Member' ? 'size-16' : 'size-20'
                'size-16',
              )}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <p className="text-xs font-semibold tracking-tighter text-brand/90">{member.position}</p>
          <h3
            className={cn(
              'text-base leading-none! font-medium tracking-tighter',
              // member.position === 'Council Member' &&
              `
                text-sm
                md:text-base
              `,
            )}
          >
            {member.name}
          </h3>
          <p className="
            text-xs font-medium tracking-tighter text-balance opacity-55
          "
          >
            {member.company.replace(sdnBhdRegex, '')}
          </p>
        </div>
      </div>
    </RevealFade>
  )
}
