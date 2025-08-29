'use client';

import { RevealFade } from '@/components/reveal-fade';
import Section from '@/components/section';
import { cn } from '@/lib/utils';

import { Publisher, publishers } from './publishers.data';
import styles from './styles.module.css';

export default function Publishers() {
  return (
    <Section id='publishers' className='relative max-w-[100vw] scroll-m-10 py-20'>
      <div className='container'>
        <RevealFade delay={1}>
          <h2 className={styles.publishers_header}>
            <span>Publishing Companies</span>
          </h2>
        </RevealFade>

        <div
          className={cn(
            'from-brand/20 to-brand/0 relative flex w-full flex-col overflow-hidden rounded-3xl bg-gray-900 bg-linear-to-tr to-40% p-6 text-white [perspective:800px] max-md:pt-8 md:grid-cols-2 md:p-12'
          )}>
          <div className='flex flex-wrap gap-4 gap-x-5'>
            {publishers.map((publisher, i) => (
              <div key={i} className='line-clamp-1 text-sm leading-tight! tracking-tight opacity-55 md:text-base'>
                <h3>{publisher.name.replace(/( \(M\))? Sdn Bhd$/, '')}</h3>
              </div>
            ))}
          </div>

          <div
            className={cn(
              '-mx-20 mt-8 -mb-4 -skew-y-3 md:-mb-10',
              '[mask:linear-gradient(to_right,transparent,black,transparent)]'
            )}>
            <RevealFade>
              <div className='relative z-0 flex flex-nowrap gap-6 overflow-hidden'>
                <div className='animate-marquee flex gap-6'>
                  {publishers
                    .filter((publisher) => publisher.logo !== undefined)
                    .map((publisher, i) => (
                      <PublisherLogo key={i} publisher={publisher} />
                    ))}
                </div>
                <div className='animate-marquee flex gap-6' aria-hidden>
                  {publishers
                    .filter((publisher) => publisher.logo !== undefined)
                    .map((publisher, i) => (
                      <PublisherLogo key={i} publisher={publisher} />
                    ))}
                </div>
              </div>
            </RevealFade>
            <RevealFade delay={0.5}>
              <div className='relative z-0 mt-2 flex flex-nowrap gap-6 overflow-hidden md:mt-6'>
                <div className='animate-marquee flex gap-6 [animation-direction:reverse]'>
                  {[...publishers]
                    .reverse()
                    .filter((publisher) => publisher.logo !== undefined)

                    .map((publisher, i) => (
                      <PublisherLogo key={i} publisher={publisher} />
                    ))}
                </div>
                <div className='animate-marquee flex gap-6 [animation-direction:reverse]' aria-hidden>
                  {[...publishers]
                    .reverse()
                    .filter((publisher) => publisher.logo !== undefined)
                    .map((publisher, i) => (
                      <PublisherLogo key={i} publisher={publisher} />
                    ))}
                </div>
              </div>
            </RevealFade>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PublisherLogo({ publisher }: { publisher: Publisher }) {
  return (
    <div className={styles.publisher_icon}>
      <img
        src={`/images/publishers/${publisher.logo}.svg`}
        alt={publisher.name}
        className={cn(
          'inline-block size-full max-w-none object-contain opacity-60 drop-shadow-sm invert sepia',
          publisher.square && 'aspect-square size-4/5'
        )}
      />
    </div>
  );
}
