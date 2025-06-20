import Section from '@/components/section';

import Balancer from 'react-wrap-balancer';

export default function Welcome() {
  return (
    <Section id='welcome' className='relative'>
      <div className='relative container py-10 pt-48'>
        <div className=''>
          <h2 className='font-heading max-w-(--breakpoint-xl) text-4xl font-medium tracking-tight text-pretty md:text-6xl'>
            <Balancer>
              <span className='inline-block text-gray-500'>Protecting and promoting</span> the rights and interests of
              music publishers in&nbsp;Malaysia.
            </Balancer>
          </h2>
        </div>

        <img
          loading='eager'
          src='/images/gradient.png'
          alt=''
          className='pointer-events-none absolute -top-2/3 right-0 -z-10 h-[170%] object-contain opacity-40 hue-rotate-30 select-none dark:opacity-10'
        />

        {/* <div className="absolute right-0 top-1/2 -z-10 size-[50rem] -translate-y-1/2 rounded-full border-[4rem] border-brand opacity-10 blur-[3px]" /> */}
      </div>

      <div className='pointer-events-none absolute inset-0 -z-10 bg-[url(/images/dot.svg)] bg-repeat opacity-50 invert [mask:linear-gradient(to_bottom,black,transparent)] dark:opacity-20 dark:invert-0' />
    </Section>
  );
}
