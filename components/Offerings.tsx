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
      className="py-24 md:py-32 bg-secondary relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) contrast(1.2)',
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="section-title">The Offerings</h2>
        <p className="text-xl md:text-2xl mb-20 max-w-3xl italic">
          "What we serve, at least, for now."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {offerings.map((offering) => (
            <div key={offering.number} className="relative">
              <div className="absolute -left-8 top-0 text-2xl text-muted-foreground opacity-50 font-light">
                {offering.number}
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-2xl md:text-3xl mb-3 font-medium">
                  {offering.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-xl md:text-2xl mb-4">
            This is not the final cup.
          </p>
          <p className="text-xl md:text-2xl font-light">
            It's the first sip.
          </p>
          <p className="text-right mt-6 text-lg">- KAFE</p>
        </div>
      </div>
    </section>
  );
}