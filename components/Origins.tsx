"use client";

import { useRef, useState } from 'react';
import HydrationSuppressor from './HydrationSuppressor';

export default function Origins() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const origins = [
    {
      country: "Ethiopia",
      region: "Yirgacheffe",
      description: "Floral. Light. Grounded in history.",
      image: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      country: "Colombia",
      region: "Huila",
      description: "Sweet. Balanced. Picked with care.",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      country: "Rwanda",
      region: "Nyamasheke",
      description: "Bright. Resilient. Grown with altitude.",
      image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <HydrationSuppressor>
      <section id="origins" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="section-title">Origins</h2>
          <p className="text-xl md:text-2xl mb-20 max-w-xl">
            Every bean has a past. Here are the ones we trust.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
              {origins.map((origin, index) => (
                <div 
                  key={origin.country}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  style={{
                    backgroundImage: `url(${origin.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col justify-center space-y-8">
              {origins.map((origin, index) => (
                <div 
                  key={origin.country}
                  className={`py-6 border-t cursor-pointer transition-all duration-300 ${
                    index === activeIndex 
                      ? 'opacity-100' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className="text-2xl md:text-3xl mb-2 font-medium">
                    {origin.country} – {origin.region}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {origin.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </HydrationSuppressor>
  );
}