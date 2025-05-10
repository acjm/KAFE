export default function Offerings() {
  const offerings = [
    {
      number: "I",
      title: "Espresso Bar",
      description: "Sharp, bold, timeless. From the classic shot to slow Americanos."
    },
    {
      number: "II",
      title: "Milk-Based",
      description: "Comfort meets balance: flat Whites, Lattés, and friends."
    },
    {
      number: "III",
      title: "Pour-Over & Filter",
      description: "Clarity, one drop at a time. Brewed by hand. Chosen with care."
    },
    {
      number: "IV",
      title: "Cold Cups",
      description: "Cool rituals., Cold Brews, Iced Lattés, Shaken things."
    },
    {
      number: "V",
      title: "Non-Coffee",
      description: "Because not everything has to buzz. Matcha, Chai, and soft moments."
    },
    {
      number: "VI",
      title: "The Unexpected",
      description: "What doesn't fit, but feels right. Ask us. Be surprised."
    }
  ];

  return (
    <section 
      id="offerings" 
      className="py-24 md:py-32 bg-secondary relative overflow-hidden text-white"
    >
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: 'url("https://videos.openai.com/vg-assets/assets%2Ftask_01jtwv4f97fatrvxpxx04hxym9%2F1746872272_img_0.webp?st=2025-05-10T11%3A53%3A45Z&se=2025-05-16T12%3A53%3A45Z&sks=b&skt=2025-05-10T11%3A53%3A45Z&ske=2025-05-16T12%3A53%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=r8wy1r4B4SbHXEmBHuDCOyP7gpKrRYyu5hxLmiEdBx0%3D&az=oaivgprodscus")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) contrast(1.2)',
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="section-title text-white" data-number="II">
          <span>The Offerings</span>
        </h2>
        <p className="text-xl md:text-2xl mb-20 max-w-3xl italic text-white/90">
          "What we serve, at least, for now."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {offerings.map((offering) => (
            <div key={offering.number} className="relative">
              <div className="absolute -left-8 top-0 text-2xl text-white/50 font-light">
                {offering.number}
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl md:text-3xl mb-3 font-medium text-white">
                  {offering.title}
                </h3>
                <p className="text-lg text-white/80">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-xl md:text-2xl mb-4 text-white">
            This is not the final cup.
          </p>
          <p className="text-xl md:text-2xl font-light text-white/90">
            It's the first sip.
          </p>
          <p className="text-right mt-6 text-lg text-white/80">- KAFE</p>
        </div>
      </div>
    </section>
  );
}