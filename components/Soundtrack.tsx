"use client";

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function Soundtrack() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  
  const soundtrack = [
    {
      number: "I",
      title: "Bill Evans – Peace Piece",
      description: "For early mornings and open notebooks.",
      url: "#"
    },
    {
      number: "II",
      title: "Chet Baker – Alone Together",
      description: "When silence and company hold hands.",
      url: "#"
    },
    {
      number: "III",
      title: "Nils Frahm – Says",
      description: "A crescendo of stillness and thought.",
      url: "#"
    },
    {
      number: "IV",
      title: "Yussef Dayes – For My Ladies",
      description: "Afternoon rhythm. Dust in the light.",
      url: "#"
    },
    {
      number: "V",
      title: "Alice Coltrane – Journey in Satchidananda",
      description: "Spiritual jazz for slow evenings.",
      url: "#"
    }
  ];

  return (
    <section id="soundtrack" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Soundtrack</h2>
        <p className="text-xl md:text-2xl mb-20 max-w-3xl italic">
          "What you hear when the world fades."
        </p>
        
        <div className="space-y-6 md:space-y-8">
          {soundtrack.map((track, index) => (
            <div 
              key={track.number}
              className="flex items-center border-b pb-6 group cursor-pointer"
              onClick={() => setActiveTrack(activeTrack === index ? null : index)}
            >
              <div className="mr-6 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground/80 transition-colors">
                  {activeTrack === index ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-baseline mb-2">
                  <span className="text-muted-foreground mr-3 text-sm">
                    {track.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium">
                    {track.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            <span>View Full Playlist on Spotify</span>
          </a>
        </div>
      </div>
    </section>
  );
}