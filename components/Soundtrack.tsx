"use client";

import { Play, ExternalLink } from 'lucide-react';

export default function Soundtrack() {
  const soundtrack = [
    {
      number: "I",
      title: "Bill Evans – Peace Piece",
      description: "For early mornings and open notebooks.",
      url: "https://open.spotify.com/intl-fr/track/58yFroDNbzHpYzvicaC0de?si=0d8f0dfe77cb4664"
    },
    {
      number: "II",
      title: "Chet Baker – Alone Together",
      description: "When silence and company hold hands.",
      url: "https://open.spotify.com/intl-fr/track/1F4FRutCMOnvypcDa4JGiW?si=96cdffd6bdda411f"
    },
    {
      number: "III",
      title: "Nils Frahm – Says",
      description: "A crescendo of stillness and thought.",
      url: "https://open.spotify.com/track/5626KdflSKfeDK7RJQfSrE"
    },
    {
      number: "IV",
      title: "Yussef Dayes – For My Ladies",
      description: "Afternoon rhythm. Dust in the light.",
      url: "https://open.spotify.com/intl-fr/track/1GOiGHZpvVIwIXqmXVwvCy?si=c86ac4f4d52e40d8"
    },
    {
      number: "V",
      title: "Alice Coltrane – Journey in Satchidananda",
      description: "Spiritual jazz for slow evenings.",
      url: "https://open.spotify.com/intl-fr/track/2gG3ivmsfylVXLyIJvLXyN?si=ca183be942784104"
    }
  ];

  return (
    <section id="soundtrack" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Soundtrack</h2>
        <p className="text-lg md:text-xl mb-16 max-w-2xl italic text-muted-foreground">
          "What you hear when the world fades."
        </p>
        
        <div className="space-y-4 md:space-y-6">
          {soundtrack.map((track) => (
            <div key={track.number} className="flex items-center border-b pb-4 group">
              <div className="mr-4 relative">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground/80 transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-baseline mb-1">
                  <span className="text-xs text-muted-foreground mr-2">
                    {track.number}
                  </span>
                  <h3 className="text-base md:text-lg font-medium">
                    {track.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {track.description}
                </p>
              </div>

              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border rounded-full px-5 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            <span>View Full Playlist on Spotify</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}