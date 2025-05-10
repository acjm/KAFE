export default function StayClose() {
  return (
    <section id="stay-close" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="section-title">Stay Close.</h2>
        
        <div className="mb-20">
          <p className="text-xl md:text-2xl mb-6 font-medium">
            KAFE is brewing.
          </p>
        </div>
        
        <div className="inline-flex flex-col md:flex-row gap-6 md:gap-10 text-lg md:text-xl">
          <a href="https://instagram.com/thekafe.ma" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            Instagram – @thekafe.ma
          </a>
          <a href="https://kafe.ma" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            Website – www.kafe.ma
          </a>
          <a href="mailto:hello@kafe.ma" className="hover:opacity-70 transition-opacity">
            Email – hello@kafe.ma
          </a>
        </div>
      </div>
    </section>
  );
}