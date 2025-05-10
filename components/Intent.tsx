import HydrationSuppressor from './HydrationSuppressor';

export default function Intent() {
  return (
    <HydrationSuppressor>
      <section id="intent" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="section-title">The Intent.</h2>
          
          <div className="space-y-8 md:space-y-10">
            <p className="text-xl md:text-2xl font-light">
              I didn't set out to build a business.<br />
              I needed space.<br />
              Space to slow down, to feel something real,<br />
              to create without pressure, to taste without rushing.
            </p>
            
            <p className="text-xl md:text-2xl font-normal">
              <span className='font-medium'>KAFE</span> is that space.
            </p>
            
            
            <p className="text-xl md:text-2xl font-light">
              A quiet ritual.<br />
              A curated moment.<br />
              A rebellion against the fast, the fake, the loud.
            </p>
            
            
            <p className="text-xl md:text-2xl font-light">
              I don't roast the beans.<br />
              But I choose them. I respect them.<br />
              And I serve them with the silence they deserve.
            </p>
            
            <p className="text-xl md:text-2xl font-light mt-12 text-right">
              - CHAFAI Ayman
            </p>
          </div>
        </div>
      </section>
    </HydrationSuppressor>
  );
}