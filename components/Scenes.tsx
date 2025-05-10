export default function Scenes() {
  const scenes = [
    {
      number: "I",
      title: "The Ritual",
      description: "Where coffee becomes a ceremony.",
    },
    {
      number: "II",
      title: "The Silence",
      description: "Jazz. Steam. Stillness.",
    },
    {
      number: "III",
      title: "The Selection",
      description: "Every bean chosen with intent.",
    },
    {
      number: "IV",
      title: "The Escape",
      description: "A quiet rebellion against chaos.",
    },
    {
      number: "V",
      title: "The Realness",
      description: "No filters. Just the truth in a cup.",
    },
  ];

  return (
    <section id="scenes" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Scenes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {scenes.map((scene) => (
            <div key={scene.number} className="relative group">
              <div className="absolute -left-8 top-0 text-2xl text-muted-foreground opacity-50 font-light">
                {scene.number}
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-2xl md:text-3xl mb-3 font-medium">
                  {scene.title}
                </h3>
                <p className="text-lg text-muted-foreground">{scene.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}