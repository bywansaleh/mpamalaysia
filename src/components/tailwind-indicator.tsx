export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className='bg-background text-foreground pointer-events-none fixed bottom-2 left-2 z-9999 flex aspect-square h-10 items-center justify-center rounded-full border border-current text-xs font-bold opacity-20'>
      <div className='block sm:hidden'>xs</div>
      <div className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>sm</div>
      <div className='hidden md:block lg:hidden xl:hidden 2xl:hidden'>md</div>
      <div className='hidden lg:block xl:hidden 2xl:hidden'>lg</div>
      <div className='hidden xl:block 2xl:hidden'>xl</div>
      <div className='hidden 2xl:block'>2xl</div>
    </div>
  );
}
